import { GqlAuthGuard } from '@/auth/guards/gql-auth.guard'
import { EventService } from '@/graphql/event/event.service'
import { EventEntity } from '@/graphql/event/gql/event.entity'
import { UseGuards } from '@nestjs/common'
import { Query, Resolver } from '@nestjs/graphql'

@UseGuards(GqlAuthGuard)
@Resolver(() => EventEntity)
export class EventResolver {
    constructor(private readonly eventService: EventService) {}

    @Query(() => [EventEntity])
    eventConnection() {
        return this.eventService.getEventConnection()
    }
}
