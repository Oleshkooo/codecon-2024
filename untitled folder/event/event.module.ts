import { DbService } from '@/db/db.service'
import { EventResolver } from '@/graphql/event/event.resolver'
import { EventService } from '@/graphql/event/event.service'
import { Module } from '@nestjs/common'

@Module({
    providers: [EventResolver, EventService, DbService],
})
export class EventModule {}
