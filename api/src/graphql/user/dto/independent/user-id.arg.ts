import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class UserIdArg {
    @Field(() => String)
    userId: string
}
