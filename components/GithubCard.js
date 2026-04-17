// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

const cardsContainer = document.querySelector('.cards');

axios.get('https://api.github.com/users/Moha-deek')
  .then(response => {
    console.log("My Profile Data:", response.data);
    const myCard = cardCreator(response.data);
    cardsContainer.appendChild(myCard);
  })
  .catch(error => {
    console.error("Error fetching profile:", error);
  });


// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a **user object** as a parameter.
// 2️⃣ Use JavaScript DOM methods to create the structure provided in the instructions.
// 3️⃣ Return the created card element.

function cardCreator(userObj) {
  // Create the elements
  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const login = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // Add the classes for styling
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  login.classList.add('username');

  // Fill elements with data from the user object
  userImg.src = userObj.avatar_url;
  name.textContent = userObj.name || userObj.login;
  login.textContent = userObj.login;
  location.textContent = `Location: ${userObj.location || 'Not available'}`;
  profile.textContent = 'Profile: ';
  profileLink.href = userObj.html_url;
  profileLink.textContent = userObj.html_url;
  followers.textContent = `Followers: ${userObj.followers}`;
  following.textContent = `Following: ${userObj.following}`;
  bio.textContent = `Bio: ${userObj.bio || 'No bio available'}`;

  // Build the structure (Append)
  card.appendChild(userImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(login);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  return card;
}


// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the followers_url from the GitHub user data.
// 2️⃣ Send a GET request to fetch follower information.
// 4️⃣ For each follower, create a card and append it to the container.

axios.get('https://api.github.com/users/Moha-deek/followers')
  .then(response => {
    console.log("Followers List:", response.data);
    response.data.forEach(follower => {
      // Fetching individual profile for each follower to get full details like bio/location
      axios.get(`https://api.github.com/users/${follower.login}`)
        .then(res => {
          const followerCard = cardCreator(res.data);
          cardsContainer.appendChild(followerCard);
        })
        .catch(err => console.error(err));
    });
  })
  .catch(error => {
    console.error("Error fetching followers:", error);
  });

