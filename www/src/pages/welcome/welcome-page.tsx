import { H1 } from '@/components/typography/h1'
import { Button } from '@/components/ui/button'
import { memo } from 'react'

type WelcomePageProps = unknown
export const WelcomePage: React.FC<WelcomePageProps> = memo(() => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-5">
            <H1>Welcome to the APP_NAME!</H1>
            <Button>Login</Button>
            <Button>Register</Button>
        </div>
    )
})
WelcomePage.displayName = 'WelcomePage'
