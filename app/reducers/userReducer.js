import axios from 'axios'


//ACTION TYPE
const GET_ALL_USERS = "GET_ALL_USERS"
const ADD_USER = "ADD_USER"
//ACTION CREATOR
const getAllUsers = (users) => ({

  type: GET_ALL_USERS,
  users
})

const getAddedUser = (user) => ({
  type: ADD_USER,
  user
})



//INITIAL STATE
const initialState = {
  users: []
}


//THUNK CREATORS

export const getUsersFromServer = () => {
  return async (dispatch) => {

    const res = await axios.get('/api/users/allUsers/');

    const data = res.data;
    dispatch(getAllUsers(data));
  }
}
export const addUser = (user) => {
  return async (dispatch) => {

    const res = await axios.post('/api/users/newUser/', user);

    const data = res.data;
    dispatch(getAddedUser(data));
  }
}





const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.users }
    case ADD_USER:
      return { ...state, users: [...state.users, action.user] }

    default:
      return state
  }
}

export default userReducer
