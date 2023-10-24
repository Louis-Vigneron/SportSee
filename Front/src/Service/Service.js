import axios from "axios";
import { USER_ACTIVITY__MOCK, USER_AVERAGE_SESSIONS__MOCK, USER_PERFORMANCE__MOCK, USER_MAIN_DATA__MOCK } from "../Data/DataMock";

export function fetchUserData(userId) {
    const users = [];
    const path = [
        `http://localhost:3000/user/${userId}`,
        `http://localhost:3000/user/${userId}/activity`,
        `http://localhost:3000/user/${userId}/average-sessions`,
        `http://localhost:3000/user/${userId}/performance`
    ];

    const promiseRequest = path.map(url => {
        return axios.get(url)
            .then(res => res.data)
            .catch(error => {
                console.error(error);
                return null;
            });
    });

    return Promise.all(promiseRequest)
        .then(data => {
            let hasData = false;
            let index = ''
            for (const resultat of data) {
                if (resultat !== null) {
                    users.push(resultat);
                    hasData = true;
                }

            }
            if (!hasData) {
                users.push(USER_MAIN_DATA__MOCK)
                users.push(USER_ACTIVITY__MOCK)
                users.push(USER_AVERAGE_SESSIONS__MOCK)
                users.push(USER_PERFORMANCE__MOCK)
                index = 0                
            }
            return sortData(users, index);
        })
        .catch(error => {
            console.error(error);
        });
        

}

function sortData(users, index) {
    const day = ["L", "M", "M", "J", "V", "S", "D"]
    let user = []
    let kind = []
    let dataMock = false
    if (index === 0) {
        user = [
            {
                userId: users[0][index].id,
                firstName: users[0][index].userInfos.firstName,
                lastName: users[0][index].userInfos.lastName,
                age: users[0][index].userInfos.age,
                todayScore: [
                    { value: users[0][index].score * 100 || users[0][index].todayScore * 100 },
                    { value: (1 - users[0][index].score) * 100 || (1 - users[0][index].todayScore) * 100 }
                ],
                keyData: {
                    kCal: users[0][index].keyData.calorieCount,
                    protein: users[0][index].keyData.proteinCount,
                    carbohydrate: users[0][index].keyData.carbohydrateCount,
                    lipid: users[0][index].keyData.lipidCount
                },
                activity: users[1][index].sessions,
                timesSessions: users[2][index].sessions,
                performance: users[3][index].data
            }
        ];
        let i = 0
        day.forEach(el => {
            user[0].timesSessions[i].day = el
            i++
        })

        kind = users[3][index].kind;
        let x = 1
        user[0].performance.forEach(el => {
            el.kind = kind[x]
            x++
        })
        dataMock = true
    } else {
        user = [
            {
                userId: users[0].data.id,
                firstName: users[0].data.userInfos.firstName,
                lastName: users[0].data.userInfos.lastName,
                age: users[0].data.userInfos.age,
                todayScore: [
                    { value: users[0].data.score * 100 || users[0].data.todayScore * 100 },
                    { value: (1 - users[0].data.score) * 100 || (1 - users[0].data.todayScore) * 100 }
                ],
                keyData: {
                    kCal: users[0].data.keyData.calorieCount,
                    protein: users[0].data.keyData.proteinCount,
                    carbohydrate: users[0].data.keyData.carbohydrateCount,
                    lipid: users[0].data.keyData.lipidCount
                },
                activity: users[1].data.sessions,
                timesSessions: users[2].data.sessions,
                performance: users[3].data.data
            }
        ];
        let i = 0
        day.forEach(el => {
            user[0].timesSessions[i].day = el
            i++
        })

        kind = users[3].data.kind;
        let x = 1
        user[0].performance.forEach(el => {
            el.kind = kind[x]
            x++
        })
        dataMock = false
    }




    return { user, kind, dataMock };
}