import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import AboutReGear from './pages/ReGear'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about-regear" element={<AboutReGear />} />
    </Route>
  </>
)
