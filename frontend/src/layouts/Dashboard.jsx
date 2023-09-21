import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useURL } from '../hooks/useURL';

const Dashboard = () => {
  const url = useURL();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '100%',
      }}
    >
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
          <Link to={url.attractions.path}>Attractions</Link>
          <Link to={url.contact.path}>Kontakt</Link>
          <Link to={url.reservation.path}>Rezerwacja</Link>
        </nav>
      </header>
      <main style={{ flex: 1 }}>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>contact place</footer>
    </div>
  );
};

export default Dashboard;
