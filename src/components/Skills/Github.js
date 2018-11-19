import React from 'react'

class GitHubSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      repos: null,
    }
  }

  getUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(response => {
        return response
      })
  }

  getUserRepo(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(response => {
        return response
      })
  }

  async handleSubmit(e) {

    console.log(e)
    e.preventDefault()

    const { value } = this.refs.username
    let user = await this.getUser(value)
    let repos = await this.getUserRepo(value)

    this.setState({
      user: {
        avatar_url: user.avatar_url,
        username: user.login,
        followers: user.followers,
        following: user.following,
        url: user.url,
      },
      repos,
    })
  }

  renderRepos(repos) {
    return repos.map(item => {
      return <div key={item.id} className="repoResults">
        <p>
          {item.name}
          <b/>
          {item.description}
        </p>
      </div>
    })
  }

  renderUser(user) {
    return (
      <div className="resultBadge">
        <p className="userInfo">
          Username: <br />
          {user.username}
        </p>
        <p className="followerInfo">
          {user.followers} Followers
                </p>
        <p className="followingInfo">
          Following {user.following} users
                </p>
      </div>
    )
  }

  render() {
    const { user, repos } = this.state

    return (
      <div className="GitHubSearch">
        <header className="Search-header">
          <h1>Github User Search </h1>
        </header>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input ref='username' type='text' placeholder='username' />
        </form>
        <div className="Search-intro">
          <h4> User info: </h4>
          {user && this.renderUser(user)}
        </div>
        <div>
          <h4> Repos: </h4>
          {repos && this.renderRepos(repos)}
        </div>
      </div>
    )
  }
}

export default GitHubSearch