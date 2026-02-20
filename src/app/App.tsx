import { RouterProvider } from 'react-router-dom'
import { Router } from '@/router/Router'
import '@i18n/config'

export const App = () => {
  return <RouterProvider router={Router} />
}
