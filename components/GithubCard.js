// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.
         

         axios.get('https://api.github.com/users/Ayan2382')
          .then(function(response) {
          console.log(response.data);  
          })
         .catch(function(error) {
         console.error('User not found or error fetching user:', error);
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


function createUserCard(data) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `

    <img src="${data.avatar_url}" alt="${data.name || data.login}" width="100" style="border-radius: 50%; margin-bottom: 10px;">
    <h2>${data.name || data.login}</h2>
    <p><strong>Bio:</strong> ${data.bio || 'N/A'}</p>
    <p><strong>Location:</strong> ${data.location || 'Not specified'}</p>
    <p><strong>Followers:</strong> ${data.followers}</p>
    <p><strong>Following:</strong> ${data.following}</p>
    <p><a href="${data.html_url}" target="_blank">GitHub Profile</a></p>
  `;
  return card;
}



// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
        
   const card = createUserCard(data);
   const container = document.querySelector('.cards');
   container.appendChild(card);



// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/Ayan2382/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.
axios.get('https://api.github.com/users/Ayan2382/followers')
  .then(response => {
    const followers = response.data;
    followers.forEach(follower => {
      const card = createUserCard(follower);
      document.querySelector('.cards').appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching followers:', error));


// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

     const followersArray = ['DuraanAli', 'JohnDoe', 'MarkUrias', 'username4', 'username5'];
    followersArray.forEach(username => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      const card = createUserCard(response.data);
      document.querySelector('.cards').appendChild(card);
    })
    .catch(error => console.error('Error fetching user:', error));
});


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
