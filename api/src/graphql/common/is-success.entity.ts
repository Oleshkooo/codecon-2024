import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class IsSuccessEntity {
    @Field(() => Boolean)
    isSuccess: boolean

    @Field(() => String, { nullable: true, defaultValue: null })
    error?: string
}
