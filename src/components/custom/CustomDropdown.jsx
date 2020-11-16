// The forwardRef is important!!
import React from 'react';

import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

// Style
import './CustomDropdown.style.css';

// Icons
import { GrPowerShutdown } from 'react-icons/gr';
import { BiUser } from 'react-icons/bi';

// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    className='px-0'
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </div>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value] = useState('');

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <ul className='list-unstyled mb-0'>
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

const CustomDropdown = ({ children }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id='dropdown-custom-components'>
        {children}
      </Dropdown.Toggle>

      <Dropdown.Menu as={CustomMenu} className='px-2'>
        <Dropdown.Item eventKey='1' className='px-3'>
          <div className='small d-flex align-items-center text-black-50 justify-content-between'>
            <BiUser />
            <span>Edit Profile</span>
          </div>
        </Dropdown.Item>
        <div className='border-bottom my-2'></div>
        <Dropdown.Item eventKey='2' className='px-3'>
          <div className='small d-flex align-items-center text-black-50 justify-content-between'>
            <GrPowerShutdown />
            <span>Edit Profile</span>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomDropdown;
