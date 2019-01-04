import React from 'react'



const UserItem = (props) => {
  const user = props.user;
  return (
    <div>
      <p>{user.firstName} {user.lastName} {user.email}</p>
    </div>
  )

}

export default UserItem
