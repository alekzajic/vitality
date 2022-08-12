import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { queryClient } from '@/config'
import { Routes } from '@/routes'

const app = document.getElementById('app') as Element
const root = createRoot(app)

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  )
}

if (app.hasChildNodes()) hydrateRoot(app, <App />)
else root.render(<App />)
