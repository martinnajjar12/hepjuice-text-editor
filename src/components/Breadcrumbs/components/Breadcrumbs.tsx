import { IoBookOutline } from 'react-icons/io5';
import '../Breadcrumbs.css';

const links = ['Menu', 'Getting started', 'Front-end developer test project'];

const Breadcrumbs = () => {
  return (
    <nav className="d-flex align-items-center">
      <IoBookOutline className="color-grey" />
      <ul className="truncate-text unordered-list">
        {links.map(link => (
          <li key={link} className="list-items">
            <a href="/#" className="my-2 color-grey">
              {link}
            </a>
            {'/'}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
