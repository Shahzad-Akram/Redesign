import { useState } from 'react';
import SideBar from '../components/side-bar/side-bar';
import Dashboard from './Dashboard';

const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <main className='d-flex'>
      <SideBar In={open} />
      <Dashboard onClick={() => setOpen(!open)} aria-expanded={open} />
    </main>
  );
};

export default Home;
