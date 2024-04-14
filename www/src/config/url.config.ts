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
        userPage: {
            label: 'Профіль',
            url: '/user-profile'
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
    },
} as const
