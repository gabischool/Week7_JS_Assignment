function fetchGitHubData(_username = 'Swar1904') {
  axios.get(`https://api.github.com/users/${swar1904}`) // Replace 'swar1904' with the username you want to fetch data for
        .catch(_err => { 
    .then(response => {
      const userData = response.data;
      console.log('User Data:', userData);

      const userCard = createUserCard(userData);
      const cardsContainer = document.querySelector('.cards');
      cardsContainer.appendChild(userCard);
        // Fetch followers data
      return axios.get(userData.followers_url);
    })         
    .then(followersResponse => {
      console.log('Followers:', followersResponse.data);
      const followers = followersResponse.data;
      const cardsContainer = document.querySelector('.cards');

      followers.forEach(follower => {
        axios.get(`https://api.github.com/users/${follower.login}`)
          .then(followerDataResponse => {
            const followerData = followerDataResponse.data;
            const followerCard = createUserCard(followerData);
            cardsContainer.appendChild(followerCard);
          })
          .catch(err => console.error('Error fetching follower data:', err));
      });
    })
    .catch(error => console.error('Error fetching user or followers:', error));
}

function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');

  const avatar = document.createElement('img');
  avatar.src = user.avatar_url;
  card.appendChild(avatar);

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.classList.add('name');
  name.textContent = user.name || 'No name provided';
  cardInfo.appendChild(name);

  const username = document.createElement('p');
  username.classList.add('username');
  username.textContent = user.login;
  cardInfo.appendChild(username);

  const location = document.createElement('p');
  location.textContent = `Location: ${user.location || 'Unknown'}`;
  cardInfo.appendChild(location);

  const profile = document.createElement('p');
  profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;
  cardInfo.appendChild(profile);

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${user.followers}`;
  cardInfo.appendChild(followers);

  const following = document.createElement('p');
  following.textContent = `Following: ${user.following}`;
  cardInfo.appendChild(following);

  const bio = document.createElement('p');
  bio.textContent = `Bio: ${user.bio || 'No bio available'}`;
  cardInfo.appendChild(bio);

  card.appendChild(cardInfo);

  return card;
}

// Run with your GitHub username
fetchGitHubData('Swar1904');
// This code fetches GitHub user data and displays it in a card format
// It also fetches the followers of the user and displays their data in similar cards
// Make sure to include the necessary CSS styles in your index.css file for proper display
// Example CSS styles can be found in the index.css file
// Ensure you have axios included in your project for the API calls to work             