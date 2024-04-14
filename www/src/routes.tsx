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
import GuestProfile from './pages/guest-profile/GuestProfile'
import { GuestProfileLayout } from './pages/guest-profile/guest-profile.layout'

import { EventPage } from '@/pages/event-pages/EventPage'

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
            path: '*',
            element: <NotFoundPage />,
        },
        {
            path: urlConfig.pages.guestPage.url,
            element: <GuestProfileLayout/>,
            children: [
                {
                    index: true,
                    element: <GuestProfile />,
                },
            ],
        },
    ])
})
Routes.displayName = Routes.name
