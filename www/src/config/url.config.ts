export const urlConfig = {
    pages: {
        main: {
            label: 'Головна',
            url: '/',
        },
        login: {
            label: 'Логін',
            url: '/login',
        },
        register: {
            label: 'Реєстрація',
            url: '/register',
        },
        myProfile: {
            label: 'Профіль',
            url: '/my-profile'
        },
        profile: {
            label: 'Профіль',
            url: '/profile/:id',
            getURL: (id: string) => `/profile/${id}`,
        },
        guestPage: {
            label: 'Профіль',
            url: '/guest-profile'
        },
        home: {
            label: 'Домашня',
            url: '/home',
        }, 
        events: {
            label: 'Івенти',
            url: '/events',
        },
        registrationFinish: {
            label: 'Віттаня',
            url: '/registration-finish'
        },
    },
} as const
