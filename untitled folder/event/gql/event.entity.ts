import { Field, ObjectType } from '@nestjs/graphql'
import { IsDateString, IsNotEmpty, IsUrl } from 'class-validator'

@ObjectType()
export class EventEntity {
    @Field(() => String)
    id: string

    @Field(() => String)
    @IsNotEmpty()
    title: string

    @Field(() => String)
    description: string

    @Field(() => String)
    @IsDateString()
    date: string

    @Field(() => String)
    location: string

    @Field(() => String)
    @IsUrl()
    imgURL: string
}
