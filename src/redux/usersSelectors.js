import { createSelector } from 'reselect';

 const getUsers=(state)=>{
    return state.usersPage.userData
}
export const getUsersSelector=createSelector(getUsers,(users)=>{
    return users.filter(u=>u.name.length>10);
})
export const getUsersOnPage=(state)=>{
     return state.usersPage.usersOnPage
}
export const getUsersTotalCount=(state)=>{
    return state.usersPage.usersTotalCount
}
export const getPagesCount=(state)=>{
    return state.usersPage.pagesCount
}

export const getCurrentPage=(state)=>{
    return state.usersPage.currentPage
}
export const getIsFetchingStatus=(state)=> {
    return state.usersPage.isFetching
}
export const getFollowingInProgress=(state)=> {
    return state.usersPage.followingInProgress
}
export const getToggleFollowingProcess=(state)=> {
    return state.usersPage.toggleFollowingProcess
}