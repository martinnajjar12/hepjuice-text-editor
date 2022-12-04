import { IoBookOutline } from 'react-icons/io5';
import '../Breadcrumbs.css';

const links = ['Menu', 'Getting started', 'Front-end developer test project'];

const Breadcrumbs = () => {
  return (
    <nav className="d-flex align-items-center">
      <IoBookOutline />
      <div className="truncate-text">
        {links.map(link => (
          <>
            <a href="/#" className="my-2 color-grey" key={link}>
              {link}
            </a>
            {'/'}
          </>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
