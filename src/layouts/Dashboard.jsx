import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useURL } from '../hooks/useURL';
import { Page } from './Dashboard.styled';
import { SwitchDarkMode } from '../components/elements';

const Dashboard = () => {
  const url = useURL();

  return (
    <Page>
      <header>
        <h1>Cottage For Rent</h1>
        <nav
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '30px',
          }}
        >
          <Link to={url.about.path}>O nas</Link>
          <Link to={url.cottages.path}>Nasze domki</Link>
          <Link to={url.gallery.path}>Galeria</Link>
          <Link to={url.home.path}>Home</Link>
          <Link to={url.attractions.path}>Atrakcje</Link>
          <Link to={url.contact.path}>Kontakt</Link>
          <Link to={url.reservation.path}>Rezerwacja</Link>
        </nav>
        <SwitchDarkMode />
      </header>
      <main style={{ flex: 1 }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>contact place</footer>
    </Page>
  );
};

export default Dashboard;
