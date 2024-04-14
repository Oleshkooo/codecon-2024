import { UserInput } from '@/graphql/user/gql/user.entity'
import { Field, InputType, ObjectType, PickType } from '@nestjs/graphql'

@ObjectType()
export class AuthEntity {
    @Field(() => String)
    token: string
}

@InputType()
export class LoginInput extends PickType(UserInput, ['email', 'password']) {}

@InputType()
export class RegisterInput extends PickType(UserInput, [
    'email',
    'password',
    'fullName',
    'gender',
    'age',
    'bio',
    'imgURL',
    'location',
    'interests',
    'socials',
]) {}
