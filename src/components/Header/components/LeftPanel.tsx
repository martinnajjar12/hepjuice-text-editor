import { BiChevronsRight } from 'react-icons/bi';
import Breadcrumbs from '../../Breadcrumbs';

const LeftPanel = () => {
  return (
    <div className="d-flex align-items-center">
      <BiChevronsRight className="mr-3" />
      <Breadcrumbs />
    </div>
  );
};

export default LeftPanel;
