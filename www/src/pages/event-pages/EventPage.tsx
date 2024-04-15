import { memo } from 'react'

type Event = {
    id: number
    location: string
    name: string
    description: string
    imgUrls: string[]
    address: string
    date: string
}

const data: Event[] = [
    {
        id: 1,
        location: 'Lviv',
        name: 'Retreat Center Lviv',
        description:
            'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
        imgUrls: [
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=800',
        ],
        address: 'Stepana Bandery 42',
        date: '23 October',
    },
    {
        id: 2,
        location: 'Lviv',
        name: 'Retreat Center Lviv',
        description:
            'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
        imgUrls: [
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=800',
        ],
        address: 'Stepana Bandery 42',
        date: '23 October',
    },
    {
        id: 3,
        location: 'Lviv',
        name: 'Retreat Center Lviv',
        description:
            'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
        imgUrls: [
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=800',
        ],
        address: 'Stepana Bandery 42',
        date: '23 October',
    },
    {
        id: 4,
        location: 'Lviv',
        name: 'Retreat Center Lviv',
        description:
            'Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.',
        imgUrls: [
            'https://i0.wp.com/picjumbo.com/wp-content/uploads/camping-on-top-of-the-mountain-during-sunset-free-photo.jpg?w=600&quality=800',
        ],
        address: 'Stepana Bandery 42',
        date: '23 October',
    },
]

type EventPageProps = unknown
export const EventPage: React.FC<EventPageProps> = memo(() => {
    return (
        <div className="p-4 flex flex-col gap-4 xl:flex-row  xl:justify-center xl:flex-wrap">
            {data.map((item: Event, index) => (
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div key={index} className="md:flex">
                        <div className="md:shrink-0">
                            <img
                                className="h-48 w-full object-cover md:h-full md:w-48"
                                src={item.imgUrls[0]}
                                alt="Modern building architecture"
                            />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.name}</div>
                            <span className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                                {item.location}, {item.address}
                            </span>
                            <p className="mt-2 text-slate-500">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
})
EventPage.displayName = 'EventPage'
