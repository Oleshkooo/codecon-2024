import { H1 } from '@/components/typography/h1'
import { memo } from 'react'

type MainPageProps = unknown
export const MainPage: React.FC<MainPageProps> = memo(() => {
    return (
        <>
            <H1>503 Team</H1>
        </>
    )
})
MainPage.displayName = 'MainPage'
