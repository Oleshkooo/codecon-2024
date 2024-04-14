import { useLoginMutation } from '@/__generated__/graphql'
import { CustomWrapperHF } from '@/components/customs/Custom-Wrapper-HF/Custom-Wrapper-HF'
import { LoginForm } from '@/components/Login-form/Login-Form'
import { urlConfig } from '@/config/url.config'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <CustomWrapperHF>
            <div className="h-2/5 flex flex-col justify-around">
                <LoginForm />
                <div className="flex justify-center">
                    <Link to={urlConfig.pages.register.url} className="hover:underline">
                        Don't have an account?
                    </Link>
                </div>
            </div>
        </CustomWrapperHF>
    )
}
