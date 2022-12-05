import React, { useState, useEffect, Dispatch, MouseEvent } from 'react';
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

  return (
    <div className={'editor mt-3 p-3'} onClick={handleClick} id="editor">
      {content}
      <span className="active">{cursor}</span>
    </div>
  );
};

export default Editor;
