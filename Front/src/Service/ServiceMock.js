const USER_MAIN_DATA__MOCK = [
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

const USER_ACTIVITY__MOCK = [
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


const USER_AVERAGE_SESSIONS__MOCK = [
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


const USER_PERFORMANCE__MOCK = [
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

export function fetchDataMock() {
    let fetchDataMock = []
    fetchDataMock.push(USER_MAIN_DATA__MOCK)
    fetchDataMock.push(USER_ACTIVITY__MOCK)
    fetchDataMock.push(USER_AVERAGE_SESSIONS__MOCK)
    fetchDataMock.push(USER_PERFORMANCE__MOCK)
    return sortData(fetchDataMock)
}



function sortData(users) {
    const day = ["L", "M", "M", "J", "V", "S", "D"]
    const user = [
        {
            userId: users[0][0].id,
            firstName: users[0][0].userInfos.firstName,
            lastName: users[0][0].userInfos.lastName,
            age: users[0][0].userInfos.age,
            todayScore: [
                { value: users[0][0].score * 100 || users[0][0].todayScore * 100 },
                { value: (1 - users[0][0].score) * 100 || (1 - users[0][0].todayScore) * 100 }
            ],
            keyData: {
                kCal: users[0][0].keyData.calorieCount,
                protein: users[0][0].keyData.proteinCount,
                carbohydrate: users[0][0].keyData.carbohydrateCount,
                lipid: users[0][0].keyData.lipidCount
            },
            activity: users[1][0].sessions,
            timesSessions: users[2][0].sessions,
            performance: users[3][0].data
        }
    ];
    let i = 0
    day.forEach(el => {
        user[0].timesSessions[i].day = el
        i++
    })

    const kind = users[3][0].kind;
    let x = 1
    user[0].performance.forEach(el => {
        el.kind = kind[x]
        x++
    })



    return { user, kind };
}


