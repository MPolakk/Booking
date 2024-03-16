import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Page } from './Dashboard.styled';
import { SwitchDarkMode } from '../components/elements';
import NavBar from '../components/elements/NavBar/NavBar';
const Dashboard = () => {

  return (
    <Page>
      <header>
        <NavBar></NavBar>
      </header>
      <main style={{ flex: 1 }}>
        {/* <SwitchDarkMode /> */}

        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <footer>contact place</footer>
    </Page>
  );
};

export default Dashboard;