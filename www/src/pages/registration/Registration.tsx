import { RegisterInput, UserGenderEnum, useRegisterMutation } from '@/__generated__/graphql'
import { UserInterests } from '@/components/Login-form/UserInterests'
import { CustomWrapperHF } from '@/components/customs/Custom-Wrapper-HF/Custom-Wrapper-HF'
import { FormErrorText } from '@/components/customs/Form-Error-Text/FormErrorText'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { registerSchema } from '@/schemas'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { userInterests } from './userInterests'

type RegistrationInitialValues = Omit<RegisterInput, 'imgURL'> & {
    confirmPassword: RegisterInput['password']
}

export const Registration = () => {
    const [createUser, { data }] = useRegisterMutation()
    const [secondeStep, setSecondStep] = useState(false)
    const [userToken, setUserToken] = useState(localStorage.getItem('userToken'))

    const onSubmit = (values: RegistrationInitialValues) => {
        const { confirmPassword, ...data } = values
        createUser({
            variables: {
                data: {
                    imgURL: 'https://cff2.earth.com/uploads/2017/08/09051140/Arts-really-do-heal-divisions-and-bring-people-together.jpg',
                    ...data,
                },
            },
        })
    }
    useEffect(() => {
        if (data) {
            setUserToken(data?.register.token)
            localStorage.setItem('userToken', data.register.token)
        }
    }, [data])

    const { values, handleChange, handleSubmit, handleBlur, errors, touched, setFieldValue, isValid } =
        useFormik<RegistrationInitialValues>({
            initialValues: {
                fullName: '',
                email: '',
                age: 18,
                gender: UserGenderEnum.Female,
                location: '',
                socials: {
                    facebook: '',
                    instagram: '',
                    twitter: '',
                },
                password: '',
                interests: [],
                confirmPassword: '',
            },
            validationSchema: registerSchema,
            onSubmit,
        })

    const toggleInterest = (interest: string) => {
        const updatedInterests = [...values.interests]

        if (updatedInterests.includes(interest)) {
            setFieldValue(
                'interests',
                updatedInterests.filter(item => item !== interest),
            )
        } else {
            if (updatedInterests.length < 5) {
                updatedInterests.push(interest)
                setFieldValue('interests', updatedInterests)
            } else {
                console.log('Maximum limit of interests reached')
            }
        }
    }

    useEffect(() => {
        if (userToken) {
            setSecondStep(true)
        }
    }, [userToken])

    return (
        <CustomWrapperHF>
            {secondeStep ? (
                <UserInterests
                    userInterests={userInterests}
                    toggleInterest={toggleInterest}
                    arrayOfInteresting={values.interests}
                />
            ) : (
                <>
                    <div className="flex flex-col">
                        <h2 className="text-center mb-4 font-bold text-xl sm:text-3xl sm:mb-6">Registration</h2>
                        {/* <div className="mb-2">
                            <Label htmlFor="image" className="mb-2 ml-1">
                                Select your profile picture
                            </Label>
                            <Input
                                id="image"
                                type="file"
                                accept="image/x-png,image/gif,image/jpeg"
                                placeholder="Full name"
                                className={`mb-2 w-80 sm:w-96`}
                                // onChange={handleSaveImage}
                                onBlur={handleBlur}
                            />
                        </div> */}
                        <div className="mb-2">
                            <Label htmlFor="fullName" className="mb-2 ml-1">
                                Full name
                            </Label>
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="Full name"
                                className={`mb-2 w-80 sm:w-96   ${
                                    errors.fullName && touched.fullName
                                        ? 'focus-visible:ring-transparent border-red-500 mb-0'
                                        : ''
                                }`}
                                value={values.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.fullName && touched.fullName && <FormErrorText>{errors.fullName}</FormErrorText>}
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="email" className="mb-2 ml-1">
                                Email
                            </Label>
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
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="age" className="mb-2 ml-1">
                                Age
                            </Label>
                            <Input
                                id="age"
                                type="number"
                                placeholder="Age"
                                className={`mb-2 w-80 sm:w-96   ${
                                    errors.age && touched.age ? 'focus-visible:ring-transparent border-red-500 mb-0' : ''
                                }`}
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.age && touched.age && <FormErrorText>{errors.age}</FormErrorText>}
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="location" className="mb-2 ml-1">
                                Lacation
                            </Label>
                            <Input
                                id="location"
                                type="text"
                                placeholder="Your location"
                                className={`mb-2 w-80 sm:w-96   ${
                                    errors.location && touched.location
                                        ? 'focus-visible:ring-transparent border-red-500 mb-0'
                                        : ''
                                }`}
                                value={values.location}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.location && touched.location && <FormErrorText>{errors.location}</FormErrorText>}
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="password" className="mb-2 ml-1">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Password"
                                className={`mb-2 w-80 sm:w-96   ${
                                    errors.password && touched.password
                                        ? 'focus-visible:ring-transparent border-red-500 mb-0'
                                        : ''
                                }`}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && touched.password && (
                                <div className="max-w-80">
                                    <FormErrorText>{errors.password}</FormErrorText>
                                </div>
                            )}
                        </div>
                        <div className="mb-2">
                            <Label htmlFor="confirmPassword" className="mb-2 ml-1">
                                Confirm password
                            </Label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm password"
                                className={`mb-2 w-80 sm:w-96   ${
                                    errors.confirmPassword && touched.confirmPassword
                                        ? 'focus-visible:ring-transparent border-red-500 mb-0'
                                        : ''
                                }`}
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.confirmPassword && touched.confirmPassword && (
                                <FormErrorText>{errors.confirmPassword}</FormErrorText>
                            )}
                        </div>
                    </div>
                    {/* @ts-expect-error working ok */}
                    <Button disabled={!isValid} onClick={handleSubmit}>
                        {secondeStep ? 'Complete profile' : 'Go to next step'}
                    </Button>
                </>
            )}
        </CustomWrapperHF>
    )
}
