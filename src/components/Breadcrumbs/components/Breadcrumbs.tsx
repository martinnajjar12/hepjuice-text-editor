import { IoBookOutline } from 'react-icons/io5';
import '../Breadcrumbs.css';

const links = ['Menu', 'Getting started', 'Front-end developer test project'];

const Breadcrumbs = () => (
  <nav className="d-flex align-items-center">
    <IoBookOutline className="color-grey" />

    <ul className="truncate-text unordered-list">
      {links.map(link => (
        // keys should be unique but this is just a test project
        <li key={link} className="list-items">
          <a href="/#" className="my-2 color-grey">
            {link}
          </a>
          <i className="color-grey">/</i>
        </li>
      ))}
    </ul>
  </nav>
);

export default Breadcrumbs;
