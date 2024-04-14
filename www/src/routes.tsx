import { urlConfig } from '@/config/url.config'
import { NotFoundPage } from '@/pages/not-found/not-found.page'
import { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { WelcomePage } from './pages/login/WelcomePage'
import { LoginPage } from './pages/login/LoginPage'
import { Registration } from './pages/registration/Registration'
import UserProfile from './pages/user-profile/UserProfile'
import { RegistrationFinish } from './pages/RegistrationFinish/RegistrationFinish'

interface RoutesProps {}
export const Routes: React.FC<RoutesProps> = memo(() => {
    return useRoutes([
        {
            path: urlConfig.pages.main.url,
            element: <WelcomePage />,
            children: [
                {
                    index: true,
                    element: <WelcomePage />,
                },
            ],
        },
        {
            path: urlConfig.pages.login.url,
            element: <LoginPage />,
            children: [
                {
                    index: true,
                    element: <LoginPage />,
                },
            ],
        },
        {
            path: urlConfig.pages.register.url,
            element: <Registration />,
            children: [
                {
                    index: true,
                    element: <Registration />,
                },
            ],
        },
        {
            path: urlConfig.pages.registrationFinish.url,
            element: <RegistrationFinish />,
            children: [
                {
                    index: true,
                    element: <RegistrationFinish />,
                },
            ],
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
        {
            path: urlConfig.pages.userPage.url,
            element: <UserProfile />,
        },
    ])
})
Routes.displayName = Routes.name
