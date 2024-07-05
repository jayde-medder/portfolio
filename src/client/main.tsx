import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes.tsx'
import './index.css'

const router = createBrowserRouter(routes)

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<RouterProvider router={router} />)
