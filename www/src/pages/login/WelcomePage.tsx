import React from 'react'
import { CustomWrapperHF } from '@/components/customs/Custom-Wrapper-HF/Custom-Wrapper-HF'
import { Button } from '@/components/ui/button'
import { urlConfig } from '@/config/url.config'
import { Link } from 'react-router-dom'

export const WelcomePage = () => {
    return (
        <CustomWrapperHF>
            <div className="flex flex-col items-center">
                <h1 className="mb-2 text-3xl">Welcome!</h1>
                <Link to={urlConfig.pages.login.url}>
                    <Button>Lets start</Button>
                </Link>
            </div>
        </CustomWrapperHF>
    )
}
