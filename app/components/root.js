import React from 'react'
import { connect } from 'react-redux'
import { getUsersFromServer, addUser } from '../reducers/userReducer'
import UserItem from './UserItem'

class Root extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        <h1>Users</h1>
        {this.props.users.map(user => {
          return <UserItem user={user} key={user.id} />

        })}

        <h2>Add a User</h2>
        <form className='login-form' onSubmit={this.props.handleSubmit}>

          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input type='firstName' name='firstName' className='input' required />


            <label htmlFor='lastName'>Last Name</label>
            <input type='lastName' name='lastName' className='input' required />


            <label htmlFor='email'>Email</label>
            <input type='email' name='email' className='email' required />
          </div>
          <div>
            <button className='submit-button' type='submit'>Add User</button>
          </div>
        </form>
      </div>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.user.users
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers() {

      dispatch(getUsersFromServer());
    },
    handleSubmit(evt) {
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;

      dispatch(addUser({ firstName, lastName, email }))
    }

  }
}

const ConnectedRoot = connect(mapStateToProps, mapDispatchToProps)(Root);



export default ConnectedRoot
