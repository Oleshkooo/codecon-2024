import React, { HTMLAttributes, ReactNode } from 'react'

interface CustomWrapperHF extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    backgroundColor?: string
    justifyContent?: string
}

export const CustomWrapperHF: React.FC<CustomWrapperHF> = ({ children, ...restProps }) => {
    return (
        <div className="h-svh flex items-center justify-center flex-col pt-6 pb-6" {...restProps}>
            {children}
        </div>
    )
}
