import { urlConfig } from '@/config/url.config'
import { MainLayout } from '@/pages/main/main.layout'
import { MainPage } from '@/pages/main/main.page'
import { NotFoundPage } from '@/pages/not-found/not-found.page'
import { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import UserProfile from './pages/user-profile/UserProfile'

interface RoutesProps {}
export const Routes: React.FC<RoutesProps> = memo(() => {
    return useRoutes([
        {
            path: urlConfig.pages.main.url,
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <MainPage />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
        {
            path: urlConfig.pages.userPage.url,
            element: <UserProfile />
        }
    ])
})
Routes.displayName = Routes.name
