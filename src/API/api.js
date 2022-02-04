import * as axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "aaa4f34d-dfa2-4a0b-8437-bef1312b386b"
    }
})

export const usersAPI = {
    getUsers(pageNumber, usersOnPage) {
        return instance.get(`users?page=${pageNumber}&count=${usersOnPage}`,
            {withCredentials: true}
        )
    }
}

export const authAPI = {
    login(){
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    }
}

export const followAPI = {
    followUser(userId) {
        return instance.post('/follow/' + userId, {}, {})
    },
    unfollowUser(userId) {
        return instance.delete('/follow/' + userId)
    }
}

/*У GET и DELETE - это должно передаваться 2-ым параметром, у POST - 3-тьим.*/
