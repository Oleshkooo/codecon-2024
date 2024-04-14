import React from 'react'
import { useFormik } from 'formik'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { basicLoginSchema } from '@/schemas'
import { FormErrorText } from '../customs/Form-Error-Text/FormErrorText'
import { useLoginMutation } from '@/__generated__/graphql'

interface LoginInitialValues {
    email: string
    password: string
}

export const LoginForm = () => {
    const [loginUser, { data, error }] = useLoginMutation()

    const onSubmit = (values: LoginInitialValues) => {
        loginUser({
            variables: {
                data: values,
            },
        })
    }

    const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik<LoginInitialValues>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: basicLoginSchema,
        onSubmit,
    })

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <h2 className="text-center mb-4 font-bold text-xl sm:text-3xl sm:mb-6">Login</h2>
                <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className={`mb-2 w-80 sm:w-96   ${
                        errors.email && touched.email ? 'focus-visible:ring-transparent border-red-500 mb-0' : ''
                    }`}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.email && touched.email && <FormErrorText>{errors.email}</FormErrorText>}

                <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    className={`mb-2 w-80 sm:w-96 ${
                        errors.password && touched.password ? 'focus-visible:ring-transparent border-red-500  mb-0' : ''
                    }`}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.password && touched.password && <FormErrorText>{errors.password}</FormErrorText>}

                <Button type="submit" className="flex items-center">
                    Sign in
                </Button>
            </form>
        </>
    )
}
