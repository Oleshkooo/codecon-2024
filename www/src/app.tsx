import { Toaster } from '@/components/ui/sonner'
import { ErrorPage } from '@/pages/error/error.page'
import { Routes } from '@/routes'
import { memo } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

type AppProps = unknown
export const App: React.FC<AppProps> = memo(() => {
    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Routes />
            <Toaster />
            {/* <TailwindIndicator  /> */}
        </ErrorBoundary>
    )
})
App.displayName = 'App'
