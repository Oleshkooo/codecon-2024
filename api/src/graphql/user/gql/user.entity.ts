import { SocialsEntity, SocialsInput } from '@/graphql/user/gql/socials.entity'
import { UserGenderEnum } from '@/graphql/user/gql/user-gender.enum'
import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql'
import { IsArray, IsEmail, IsInt, IsNotEmpty } from 'class-validator'

@ObjectType()
export class UserEntity {
    @Field(() => String)
    id: string

    @Field(() => String)
    @IsNotEmpty()
    @IsEmail()
    email: string

    @Field(() => String)
    @IsNotEmpty()
    password: string

    @Field(() => Boolean, { defaultValue: false })
    isAdmin: boolean

    @Field(() => String)
    @IsNotEmpty()
    fullName: string

    @Field(() => UserGenderEnum)
    gender: UserGenderEnum

    @Field(() => Number)
    @IsInt()
    age: number

    @Field(() => String, { defaultValue: '' })
    bio: string

    @Field(() => String)
    imgURL: string

    @Field(() => String)
    location: string

    @Field(() => [String])
    @IsArray()
    interests: string[]

    @Field(() => SocialsEntity)
    socials: SocialsEntity
}

@InputType()
export class UserInput extends OmitType(UserEntity, ['socials']) {
    @Field(() => SocialsInput)
    socials: SocialsInput
}
