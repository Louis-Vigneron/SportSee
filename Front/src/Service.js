import axios from "axios";

export function fetchUserData(userId) {
    const users = []
    const path = [
        `http://localhost:3000/user/${userId}`,
        `http://localhost:3000/user/${userId}/activity`,
        `http://localhost:3000/user/${userId}/average-sessions`,
        `http://localhost:3000/user/${userId}/performance`
    ]

    const promiseRequest = path.map(url => {
        return axios.get(url)
            .then(res => res.data)
            .catch(error => {
                console.error(error);
                return null;
            });
    });

    Promise.all(promiseRequest)
        .then(data => {
            for (const resultat of data) {
                if (resultat !== null) {
                    users.push(resultat);
                }
            }
            console.log(users);
            sortData(users);
        })
        .catch(error => {
            console.error(error);
        });
}

function sortData(users) {
    const user = [
        {
            userId: users[0].data.id,
            firstName: users[0].data.userInfos.firstName,
            lastName: users[0].data.userInfos.lastName,
            age: users[0].data.userInfos.age,
            todayScore: users[0].data.score || users[0].data.todayScore,
            keyData:{
                kCal: users[0].data.keyData.calorieCount,
                protein: users[0].data.keyData.proteinCount,
                carbohydrate: users[0].data.keyData.carbohydrateCount,
                lipid: users[0].data.keyData.lipidCount
            },
            activity:users[1].data.sessions,
            timesSessions : users[2].data.sessions,
            performance: users[3].data.data
        }
    ]

    const kind = [users[3].data.kind]
     console.log(kind)
    console.log(user)   
}