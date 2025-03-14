// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/<your_name>`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

function GithubCard() {
  axios.get('https://api.github.com/users/rawdharossy06')
    .then(response => {
      console.log(response.data);
      const user = response.data;
      const cards = document.querySelector('.cards');
      cards.appendChild(createCard(user));
    })
    .catch(error => {
      console.log('Error fetching data', error);
    });
}





// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a **user object** as a parameter.
// 2️⃣ Use JavaScript DOM methods to create the following structure:
//
//     <div class="card">
//       <img src="{avatar_url}" />
//       <div class="card-info">
//         <h3 class="name">{name}</h3>
//         <p class="username">{login}</p>
//         <p>Location: {location}</p>
//         <p>Profile: <a href="{html_url}">{html_url}</a></p>
//         <p>Followers: {followers}</p>
//         <p>Following: {following}</p>
//         <p>Bio: {bio}</p>
//       </div>
//     </div>
//
// 3️⃣ Return the created card element.

function createCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    img.src = user.avatar_url;
    card.appendChild(img);
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);
    const name = document.createElement('h3');
    name.textContent = user.name;
    name.classList.add('name');
    cardInfo.appendChild(name);
    const username = document.createElement('p');
    username.textContent = `@${user.login}`;
    username.classList.add('username');
    cardInfo.appendChild(username);
    const location = document.createElement('p');
    location.textContent = `Location: ${user.location}`;
    cardInfo.appendChild(location);
    const profile = document.createElement('p');
    profile.textContent = 'Profile: ';
    const profileLink = document.createElement('a');
    profileLink.href = user.html_url;
    profileLink.textContent = user.html_url;
    profile.appendChild(profileLink);
    cardInfo.appendChild(profile);
    const followers = document.createElement('p');
    followers.textContent = `Followers: ${user.followers}`;
    cardInfo.appendChild(followers);
    const following = document.createElement('p');
    following.textContent = `Following: ${user.following}`;
    cardInfo.appendChild(following);
    const bio = document.createElement('p');
    bio.textContent = user.bio;
    cardInfo.appendChild(bio);
    return card;
}



// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.

function addCardToDOM(user) {
  const cards = document.querySelector('.cards');
  cards.appendChild(createCard(user));
}

// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data.
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.
axios.get('https://api.github.com/users/rawdharossy06/followers')
 .then(response => {
   console.log(response.data);
   response.data.forEach(follower => {
     axios.get(follower.url)
       .then(response => {
         addCardToDOM(response.data);
       })
       .catch(error => {
         console.log('Error fetching follower data', error);
       });
   });
 })
 


// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.





// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!


