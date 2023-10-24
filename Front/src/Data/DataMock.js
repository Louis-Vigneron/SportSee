export const USER_MAIN_DATA__MOCK = [
    {
        id: 'test',
        userInfos: {
            firstName: 'Michel',
            lastName: 'Dupont',
            age: 25,
        },
        score: 0.5,
        keyData: {
            calorieCount: 2550,
            proteinCount: 150,
            carbohydrateCount: 125,
            lipidCount: 100
        }
    }
]

export const USER_ACTIVITY__MOCK = [
    {
        userId: 'test',
        sessions: [
            {
                day: '2023-10-01',
                kilogram: 100,
                calories: 250
            },
            {
                day: '2023-10-02',
                kilogram: 99,
                calories: 275
            },
            {
                day: '2023-10-03',
                kilogram: 105,
                calories: 500
            },
            {
                day: '2023-10-04',
                kilogram: 103,
                calories: 668
            },
            {
                day: '2023-10-05',
                kilogram: 95,
                calories: 150
            },
            {
                day: '2023-10-06',
                kilogram: 99,
                calories: 369
            },
            {
                day: '2023-10-07',
                kilogram: 100,
                calories: 620
            }
        ]
    }
]


export const USER_AVERAGE_SESSIONS__MOCK = [
    {
        userId: 'test',
        sessions: [
            {
                day: 1,
                sessionLength: 55
            },
            {
                day: 2,
                sessionLength: 12
            },
            {
                day: 3,
                sessionLength: 65
            },
            {
                day: 4,
                sessionLength: 10
            },
            {
                day: 5,
                sessionLength: 45
            },
            {
                day: 6,
                sessionLength: 0
            },
            {
                day: 7,
                sessionLength: 55
            }
        ]
    }
]


export const USER_PERFORMANCE__MOCK = [
    {
        userId: 'test',
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 250,
                kind: 1
            },
            {
                value: 150,
                kind: 2
            },
            {
                value: 42,
                kind: 3
            },
            {
                value: 99,
                kind: 4
            },
            {
                value: 211,
                kind: 5
            },
            {
                value: 103,
                kind: 6
            }
        ]
    }
]

 