import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <LeftPanel />
      <RightPanel />
    </header>
  );
};

export default Header;
