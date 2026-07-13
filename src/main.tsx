import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

const router = createRouter({ routeTree })
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='<your_client_id>'>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
)
