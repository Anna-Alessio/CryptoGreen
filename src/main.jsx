// PAGINA DI CONFIGURAZIONE ROUTER E ELEMENTI CSS DI TAILWIND E ALTRE EVENTUALI CDN 
// HO SOSTITUITO APP.JSX CON ROUTER PROVIDER ED HO IMPORTATO A MANO ROUTER.JSX

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from "./router/router.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
