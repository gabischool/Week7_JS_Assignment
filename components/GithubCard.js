// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.


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


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.


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


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
function displayGithub() {
        axios.get("https://api.github.com/users/amiin5377-amo") 
        .then((response) => {  
                const userData = response.data
                const userCard = createUserCard(userData)
                const cardContainer = document.querySelector(".cards").append(userCard)
                return axios.get(userData.followers_url)
})

.then((displayfollowers) => {
        const cardContainer = document.querySelector(".cards")
displayfollowers.data.forEach(friendfollow => {
      const followerCard = createUserCard(friendfollow)  
      cardContainer.append(followerCard)
      
});

});

}

displayGithub()
function createUserCard(user) {
       const card = document.createElement("div")
       card.className = "card"
       const image = document.createElement("img")
       image.src = user.avatar_url
       const cardInfo = document.createElement("div")
       cardInfo.className = "card-info"
       const name = document.createElement("h3")
       name.className = "name"
       name.textContent = user.name
       const username = document.createElement("p")
       username.className = "username"
       username.textContent = user.login
       
      const location = document.createElement("p")
      location.textContent = user.location
      const Profile = document.createElement("p") 
       Profile.href = user.html_url
      Profile.textContent = user.html_url
      const Followers = document.createElement("p")
      Followers.textContent = user.followers
      const Following = document.createElement("p")
      Following.textContent = user.following
      const Bio = document.createElement("p")
      Bio.textContent = user.Bio
      card.append(image,cardInfo)
      cardInfo.append(name,username,location,Profile,Followers,Following,Bio)
      
      return card;
      

}


