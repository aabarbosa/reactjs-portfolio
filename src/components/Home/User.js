import React from 'react'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      avatar_url: '',
      username: '',
      url: '',
    }
  }

  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(jsonResponse => jsonResponse.map(user => (
        {
            avatar_url: `$user.avatar_url`,
            username: `$user.login`,
            url: `$user.url`,
        }
       
    ) ))
    .then(contacts => this.setState({
        contacts,
        isLoading: false


    }))
    .catch(error => console.log('parsing failed', error))
        
        
  }

  renderUser(user) {
    return (
      <div className="resultBadge">
        <img alt="skilledProgrammer" src={user.avatar_url} />
        <p className="userInfo">
          Username: <br />
          {user.username}
        </p>
      </div>
    )
  }

  render() {
    const { user } = this.state
    console.log(user)
    return (
      <div className="User">
          {user && this.renderUser(user)}
      </div>
    )
  }
}

export default User