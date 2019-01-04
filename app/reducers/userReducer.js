import axios from 'axios'


//ACTION TYPE
const GET_ALL_USERS = "GET_ALL_USERS"

//ACTION CREATOR
const getAllUsers = (users) => ({

  type: GET_ALL_USERS,
  users
})


//INITIAL STATE
const initialState = {
  users: []
}


//THUNK CREATORS

export const getUsers = () => {
  return async (dispatch) => {

    const res = await axios.put('/api/users/allUsers/');
    const data = res.data;
    dispatch(getAllUsers(data));
  }
}





const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.users }


    default:
      return state
  }
}

export default userReducer
