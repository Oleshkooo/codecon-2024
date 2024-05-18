import { SocialsInput, SocialsType } from '@/graphql/user/dto/independent/socials.type'
import { UserGenderEnum } from '@/graphql/user/dto/enum/user-gender.enum'
import { Field, InputType, ObjectType, OmitType } from '@nestjs/graphql'
import { IsArray, IsEmail, IsInt, IsNotEmpty, IsUrl } from 'class-validator'

@ObjectType()
@InputType({ isAbstract: true })
export class UserType {
    @Field(() => String)
    id: string

    @Field(() => String)
    @IsNotEmpty()
    @IsEmail()
    email: string

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
    @IsUrl()
    imgUrl: string

    @Field(() => String)
    location: string

    @Field(() => [String])
    @IsArray()
    interests: string[]

    @Field(() => SocialsType)
    socials: SocialsType

    // hidden

    idAdmin: boolean
    password: string
    userInteractions: string[]
}

@InputType()
export class UserInput extends OmitType(UserType, ['socials']) {
    @Field(() => SocialsInput)
    socials: SocialsInput
}
