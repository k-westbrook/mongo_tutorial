import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../reducers/userReducer'


class Root extends React.Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        <h1>hi</h1>
      </div >
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.user.users
  }
}
const mapDispatchToProps = (state, ownProps) => {
  return {
    getUsers() {

      dispatch(getUsers());
    },
  }
}

const ConnectedRoot = connect(mapStateToProps, mapDispatchToProps)(Root);



export default ConnectedRoot
