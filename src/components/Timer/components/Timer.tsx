import { MdOutlineWatchLater } from 'react-icons/md';

const Timer = () => {
  return (
    <div className="d-flex align-items-center color-grey">
      <MdOutlineWatchLater className="mr-1" />
      <p className="d-inline-block">0min</p>
    </div>
  );
};

export default Timer;
