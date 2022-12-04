import { AiTwotoneUnlock } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import OutlinedPrimaryButton from '../../OutlinedPrimaryButton';

const RightPanel = () => {
  return (
    <div className="d-flex align-items-center">
      <AiTwotoneUnlock className="mr-3 color-grey" />
      <p className="color-grey mr-3">Editing</p>
      <i className="color-grey mr-3">|</i>
      <OutlinedPrimaryButton>
        Publish Space <BsChevronDown className="ml-3" />
      </OutlinedPrimaryButton>
    </div>
  );
};

export default RightPanel;
