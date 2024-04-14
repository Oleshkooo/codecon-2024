import { DbService } from '@/db/db.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class EventService {
    constructor(private readonly dbService: DbService) {}

    async getEventConnection() {
        return this.dbService.events.getAll()
    }
}
