import React, { ReactNode } from 'react'

export const FormErrorText = ({ children }: { children: ReactNode }) => {
    return <p className="text-red-500 text-xs italic mt-1 mb-2">{children}</p>
}
