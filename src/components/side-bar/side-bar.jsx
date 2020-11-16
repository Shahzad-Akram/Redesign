import './side-bar.style.css';
import { Collapse } from 'react-bootstrap';
import { FaHome } from 'react-icons/fa';

const SideBar = ({ In }) => {
  return (
    <Collapse in={In}>
      <header className='main-head'>
        <nav className='head-nav'>
          <ul className='menu'>
            <li>
              <a class='navbar-brand' href='/'>
                <div class='brand-logo'>
                  <img
                    src='https://dev-norton-healthcare.pantheonsite.io/wp-content/themes/norton-wp/assets/img/logo_dm.png'
                    width='155'
                    alt='logo'
                  />
                </div>
              </a>
            </li>
            <li>
              <a href='/' className='cs-list-item'>
                <FaHome size={25} className='mr-2' />
                <span>Home</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </Collapse>
  );
};

export default SideBar;
