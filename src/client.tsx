import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Routes } from 'generouted'

const app = document.getElementById('app') as Element
const root = createRoot(app)

function Client() {
  return (
    <StrictMode>
      <Routes />
    </StrictMode>
  )
}

if (app.hasChildNodes()) hydrateRoot(app, <Client />)
else root.render(<Client />)
