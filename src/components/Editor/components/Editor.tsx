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
    const type = (e: any) => {
      console.log(e.key);
      setContent(current => current + e.key);
    };

    if (editable) {
      document.addEventListener('keyup', type);
    }

    return () => {
      document.removeEventListener('keyup', type);
    };
  }, [editable]);

  return (
    <div className={'editor mt-3 p-3'} onClick={handleClick}>
      {content}
      <span className="active">{cursor}</span>
    </div>
  );
};

export default Editor;
