import { createBrowserRouter, type RouteObject } from 'react-router-dom'
import { PublicLayout } from '@/layout/PublicLayout/PublicLayout'
import { DonationPage, HomePage, NotFoundPage, StorePage } from '@/pages'
import { ROUTES } from './Routes.type'

const routes: RouteObject[] = [
  {
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTES.STORE,
        element: <StorePage />,
      },
      {
        path: ROUTES.DONATIONS,
        element: <DonationPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]

export const Router = createBrowserRouter(routes)
