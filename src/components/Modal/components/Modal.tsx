import fontIcon from '../../../assets/images/font.png';
import '../Modal.css';

const Modal = ({ show, chooseH1 }: { show: boolean; chooseH1: () => void }) => {
  return (
    <div
      className={show ? 'visible modal px-2' : 'hidden modal px-2'}
      data-testid="modal"
    >
      <p className="title m-2">Add blocks</p>
      <p className="description color-grey opacity-7 m-2">
        Keep trying to filter, or escape to exit
      </p>
      <p className="description color-grey mb-3 mt-3 my-2">
        Filtering keyword: 1
      </p>
      <ul>
        <li className="d-flex align-items-center mb-2 px-2" onClick={chooseH1}>
          <img src={fontIcon} alt="icon" className="my-3" />
          <div>
            <p className="title">Heading 1</p>
            <p className="description color-grey opacity-7">
              Shortcut: type # + space
            </p>
          </div>
        </li>
        <li className="d-flex align-items-center mb-2 px-2">
          <img src={fontIcon} alt="icon" className="my-3" />
          <div>
            <p className="title">Expandable Heading 1</p>
            <p className="description color-grey opacity-7">
              Shortcut: type &gt;&gt;# + space
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
