import LeftPanel from './LeftPanel';

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <LeftPanel />
      <div>Hello World</div>
    </div>
  );
};

export default Header;
