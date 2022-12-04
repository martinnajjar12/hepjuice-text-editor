import { AiOutlineCloud } from 'react-icons/ai';
import { BsThreeDotsVertical, BsCheck2Circle } from 'react-icons/bs';
import Element from '../../Element';
import NumberOfCharacters from '../../NumberOfCharacters';
import Thumbnail from '../../Thumbnail';
import Timer from '../../Timer';
import Spacer from '../../Spacer';
import '../Statistics.css';

const Statistics = () => {
  return (
    <div className="statistics mt-4 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <Element />
        <Spacer />
        <Timer />
        <Spacer />
        <Thumbnail />
        <Spacer />
        <NumberOfCharacters />
      </div>
      <div className="d-flex align-items-center">
        <BsCheck2Circle className="color-grey mr-2" />
        <AiOutlineCloud className="color-green mr-2" />
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default Statistics;
