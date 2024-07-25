import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import AboutReGear from './pages/ReGear/ReGear'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/about-regear" element={<AboutReGear />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  </>
)
