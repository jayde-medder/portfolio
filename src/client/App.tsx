import { Outlet } from 'react-router-dom';
import BorderNav from './components/general/BorderNav/BorderNav';
import { ThemeProvider } from './components/general/ThemeProvider';
import ScrollToTop from './components/general/ScrollToTop';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="w-full">
        <BorderNav>
          <ScrollToTop />
          <Outlet />
        </BorderNav>
      </main>
    </ThemeProvider>
  );
}

export default App;
