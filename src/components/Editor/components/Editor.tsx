import React, { useState, useEffect, Dispatch, MouseEvent } from 'react';
import Modal from '../../Modal';
import '../Editor.css';

const Editor = ({
  editable,
  setEditable,
  cursor,
  setCursor,
}: {
  editable: boolean;
  setEditable: Dispatch<React.SetStateAction<boolean>>;
  cursor: string;
  setCursor: Dispatch<React.SetStateAction<string>>;
}) => {
  const [content, setContent] = useState('');
  const [show, setShow] = useState(false);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setEditable(true);
    setCursor('|');
  };

  useEffect(() => {
    const type = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Enter':
          break;
        case 'Space':
          e.preventDefault();
          setContent(current => current + '\xa0');
          break;
        case 'Backspace':
          e.preventDefault();
          setContent(current => current.slice(0, -1));
          break;
        case 'ShiftLeft':
          break;
        case 'ShiftRight':
          break;
        case 'ControlLeft':
          break;
        case 'ControlRight':
          break;
        case 'MetaLeft':
          break;
        case 'MetaRight':
          break;
        case 'AltLeft':
          break;
        case 'AltRight':
          break;
        case 'Tab':
          break;
        case 'Escape':
          setShow(false);
          break;
        default:
          setContent(current => current + e.key);
          break;
      }
    };

    if (editable) {
      document.addEventListener('keydown', type);
    }

    return () => {
      document.removeEventListener('keydown', type);
    };
  }, [editable]);

  useEffect(() => {
    if (content === '/') {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [content]);

  return (
    <div className={'editor mt-3 p-3'} onClick={handleClick} id="editor">
      {content}
      <div className="cursor-div">
        <span className="active">{cursor}</span>
        <Modal show={show} />
      </div>
    </div>
  );
};

export default Editor;
