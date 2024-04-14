import { urlConfig } from '@/config/url.config'
import { MainLayout } from '@/pages/main/main.layout'
import { MainPage } from '@/pages/main/main.page'
import { NotFoundPage } from '@/pages/not-found/not-found.page'
import { WelcomePage } from '@/pages/welcome/welcome-page'
import { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { EventPagesLayout } from './pages/event-pages/event-pages.layout'
import UserProfile from './pages/user-profile/UserProfile'
import { UserProfileLayout } from './pages/user-profile/user-profile.layout'
import { EventPage } from '@/pages/event-pages/EventPage'
import { LoginPage } from '@/pages/login/LoginPage'
import { Registration } from '@/pages/registration/Registration'
import { RegistrationFinish } from '@/pages/RegistrationFinish/RegistrationFinish'

export interface RoutesProps {}
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
            path: urlConfig.pages.welcome.url,
            element: <WelcomePage />,
        },
        {
            path: urlConfig.pages.events.url,
            element: <EventPagesLayout />,
            children: [
                {
                    index: true,
                    element: <EventPage />,
                },
            ],
        },
        {
            path: urlConfig.pages.myProfile.url,
            element: <UserProfileLayout />,
            children: [
                {
                    index: true,
                    element: <UserProfile />,
                },
            ],
        },
        {
            path: urlConfig.pages.login.url,
            element: <LoginPage />,
        },
        {
            path: urlConfig.pages.register.url,
            element: <Registration />,
        },
        {
            path: urlConfig.pages.registrationFinish.url,
            element: <RegistrationFinish />,
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ])
})
Routes.displayName = Routes.name
