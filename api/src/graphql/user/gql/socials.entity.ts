import { Field, InputType, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class SocialsEntity {
    @Field(() => String, { nullable: true })
    facebook?: string

    @Field(() => String, { nullable: true })
    instagram?: string

    @Field(() => String, { nullable: true })
    twitter?: string
}

@InputType()
export class SocialsInput implements SocialsEntity {
    @Field(() => String, { nullable: true })
    facebook?: string

    @Field(() => String, { nullable: true })
    instagram?: string

    @Field(() => String, { nullable: true })
    twitter?: string
}
