import * as axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "359dda30-af41-4129-8987-ce546357e4aa"
    }
})

export const usersAPI = {
    getUsers(pageNumber, usersOnPage) {
        return instance.get(`users?page=${pageNumber}&count=${usersOnPage}`,
            {withCredentials: true}
        )
    }
}

export const authAPI = {}

export const profileAPI = {}

export const followAPI = {
    followUser(userId) {
        return instance.post('/follow/' + userId, {},{})
    },
    unfollowUser(userId) {
        return instance.delete('/follow/' + userId)
    }
}

/*У GET и DELETE - это должно передаваться 2-ым параметром, у POST - 3-тьим.*/
