import { Outlet } from 'react-router-dom'
import BorderNav from './components/BorderNav'
import { ThemeProvider } from './components/general/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="w-full">
        <BorderNav>
          <Outlet />
        </BorderNav>
      </main>
    </ThemeProvider>
  )
}

export default App
