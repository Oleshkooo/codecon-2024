import Navigation from '@/components/Navigation/Navigation'
import { memo } from 'react'
import { Outlet } from 'react-router-dom'

type UserProfileLayoutProps = unknown
export const UserProfileLayout: React.FC<UserProfileLayoutProps> = memo(() => {
    return (
        <div className='flex flex-col h-screen'>
            <div className="h-[90%] overflow-auto">
                <Outlet />
            </div>
            <div className="h-[10%]">
                <Navigation />
            </div>
        </div>
    )
})
UserProfileLayout.displayName = 'UserProfileLayout'
