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
  const [isH1Active, setIsH1Active] = useState(false);

  const editorDiv = document.querySelector('#editor');
  const cursorDiv = document.querySelector('#cursor-div');

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setEditable(true);
    setCursor('|');
  };

  const chooseH1 = () => {
    setShow(false);
    setContent('');
    setIsH1Active(true);
    const heading = document.createElement('h1');
    heading.classList.add('h1Active');
    heading.setAttribute('data-testid', 'heading1');
    editorDiv?.insertBefore(heading, cursorDiv);
  };

  useEffect(() => {
    const type = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Enter':
          if (isH1Active) {
            const heading = document.querySelector('.h1Active');
            heading?.classList.remove('h1Active');
            setContent('');
            setIsH1Active(false);
          } else {
            const paraghraph = document.createElement('p');
            paraghraph.innerHTML = content;
            editorDiv?.insertBefore(paraghraph, cursorDiv);
            setContent('');
          }
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
  }, [content, cursorDiv, editable, editorDiv, isH1Active]);

  useEffect(() => {
    if (content === '/') {
      setShow(true);
    } else {
      setShow(false);
    }

    if (isH1Active) {
      const heading = document.querySelector('.h1Active');
      if (heading) heading.innerHTML = content;
    }
  }, [content, isH1Active]);

  return (
    <div
      className={'editor mt-3 p-3'}
      onClick={handleClick}
      id="editor"
      data-testid="editor"
    >
      {isH1Active ? '' : content}
      <div className="cursor-div" id="cursor-div">
        <span className={isH1Active ? 'active itsH1' : 'active'}>{cursor}</span>
        <Modal show={show} chooseH1={chooseH1} />
      </div>
    </div>
  );
};

export default Editor;
