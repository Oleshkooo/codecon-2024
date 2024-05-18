import { Field, InputType, ObjectType } from '@nestjs/graphql'

@ObjectType()
@InputType({ isAbstract: true })
export class SocialsType {
    @Field(() => String, { nullable: true })
    facebook?: string

    @Field(() => String, { nullable: true })
    instagram?: string

    @Field(() => String, { nullable: true })
    twitter?: string
}

@InputType()
export class SocialsInput extends SocialsType {}
