import fontIcon from '../../../assets/images/font.png';
import '../Modal.css';

const Modal = ({ show }: { show: boolean }) => {
  return (
    <div className={show ? 'visible modal px-2' : 'hidden modal px-2'}>
      <p className="title m-2">Add blocks</p>
      <p className="description color-grey opacity-7 m-2">
        Keep trying to filter, or escape to exit
      </p>
      <p className="description color-grey mb-3 mt-3 my-2">
        Filtering keyword: 1
      </p>
      <ul>
        <li className="d-flex align-items-center mb-2 px-2">
          <img src={fontIcon} alt="icon" className="my-3" />
          <div>
            <p className="title">Heading 1</p>
            <p className="description color-grey opacity-7">
              Shortcut: type # + space
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
