import axios from 'axios'



//ACTION TYPE
const GET_ALL_USERS = "GET_ALL_USERS"
const ADD_USER = "ADD_USER"
const REMOVE_USER = "REMOVE_USER"



//ACTION CREATOR
const getAllUsers = (users) => ({

  type: GET_ALL_USERS,
  users
})

const getAddedUser = (user) => ({
  type: ADD_USER,
  user
})

const removeUser = (_id) => ({
  type: REMOVE_USER,
  _id
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

export const removeUserThunk = (_id) => {
  return async (dispatch) => {

    const res = await axios.delete('/api/users/deleteUser/', { data: { _id } });

    const data = res.data;

    dispatch(removeUser(_id));
  }
}






const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, users: action.users }
    case ADD_USER:
      return { ...state, users: [...state.users, action.user] }
    case REMOVE_USER:
      {
        let newArr = []
        for (let i = 0; i < state.users.length; i++) {
          if (state.users[i]._id !== action._id) {
            newArr.push(state.users[i])
          }
        }
        return {
          ...state,
          users: newArr
        }
      }
    default:
      return state
  }
}

export default userReducer
