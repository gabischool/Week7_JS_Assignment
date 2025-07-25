// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

// answers step 1
axios.get('https://api.github.com/users/mohamed-Abdalle')
        .then(response => {
        console.log(response.data);
        createGithubCard(response.data);
        })
        .catch(error => {
        console.error('Error fetching GitHub data:', error);
        });

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

function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img src="${user.avatar_url}" alt="${user.name}" />
    <div class="card-info">
      <h3 class="name">${user.name || "Magac la'aan"}</h3>
      <p class="username">${user.login}</p>
      <p>Location: ${user.location || "Lama hayo"}</p>
      <p>Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
      <p>Followers: ${user.followers}</p>
      <p>Following: ${user.following}</p>
      <p>Bio: ${user.bio || "Ma jiro bio"}</p>
    </div>
  `;

  return card;
}


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.

axios.get('https://api.github.com/users/mohamed-Abdalle/followers')
  .then(response => {
    response.data.forEach(follower => {
      axios.get(`https://api.github.com/users/${follower.login}`)
        .then(res => {
          const followerCard = createUserCard(res.data);
          document.querySelector('.cards').appendChild(followerCard);
        })
        .catch(err => {
          console.error("Follower xog lama helin:", err);
        });
    });
  })
  .catch(error => {
    console.error("Xogta followers lama helin:", error);
  });


// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.


// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

const followersArray = [
  'mohadaahir',
  'mohamed-Moha-Bozka',
  'm-salah19',
  's-hariri',
  'u-mar'
];

followersArray.forEach(username => {
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      const userCard = createUserCard(response.data);
      document.querySelector('.cards').appendChild(userCard);
    })
    .catch(error => {
      console.error(`Xog lama helin: ${username}`, error);
    });
});



// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
