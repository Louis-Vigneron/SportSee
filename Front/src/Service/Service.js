import axios from "axios";

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
            for (const resultat of data) {
                if (resultat !== null) {
                    users.push(resultat);
                }
            }
            return sortData(users);
        })
        .catch(error => {
            console.error(error);
        });
}

function sortData(users) {
    const day = ["L", "M", "M", "J", "V", "S", "D"]
    const user = [
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

    const kind = users[3].data.kind;
    let x = 1
    user[0].performance.forEach(el => {
        el.kind = kind[x]
        x++
    })



    return { user, kind };
}

