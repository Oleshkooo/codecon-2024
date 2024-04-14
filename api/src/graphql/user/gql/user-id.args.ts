import { ArgsType, Field } from '@nestjs/graphql'

@ArgsType()
export class UserIdArgs {
    @Field(() => String)
    userId: string
}
