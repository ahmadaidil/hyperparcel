import debounce from 'debounce-promise'

const actions = {
  updateUsername: (username) => (state, actions) => {
    getUserData(username).then(actions.setUserData)
    return { username }
  },
  setUserData: userData => state => ({ userData })
}

const fetchUserData = username => (
  fetch(`https://api.github.com/users/${username}`)
  .then(res => res.json())
)

const getUserData = debounce(fetchUserData, 700)

export default actions
