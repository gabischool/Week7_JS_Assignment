// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/<your_name>`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.
    function fetchCard(){
        return axios.get(`https://api.github.com/users/farahgarow`)
        .then((response)=> response.data)
        .catch(error=>{
            console.error(error)
        })
        return null
    }
    
// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a **user object** as a parameter.
// 2️⃣ Use JavaScript DOM methods to create the following structure:
 function buildCard(user){
   const carDiv = document.createElement("div")
    carDiv.className="card"
    //Image Card
    const imageCard=document.createElement("img")
    imageCard.src=user.avatar_url
    // create Car info
    const infoCard=document.createElement("div")
    infoCard.className="info-Card"

    carDiv.append(imageCard,infoCard)

    //create H3
    const nameCard=document.createElement("h3")
    nameCard.className="name"
    nameCard.textContent=user.name
    //create Username
    const userName=document.createElement("p")
    userName.className="username"
    userName.textContent=user.login
    //create Location
    const location=document.createElement("p")
    location.textContent=`Location: ${user.location || "None"}`

    //create Profile
    const Profile=document.createElement("p")
    Profile.innerHTML=`Profile: <a href="${user.html_url}">${user.html_url}</a>`
    //create Followers
    const followers=document.createElement("p")
    followers.textContent=`Followers: ${user.followers || 0}`
    const following=document.createElement("p")
    following.textContent=`Following: ${user.following || 0}`
    const bio=document.createElement("p")
    bio.textContent=`Bio: ${user.bio ||"None"}`

    infoCard.append(nameCard,userName,location,Profile,followers,following,bio)
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
const cards = document.querySelector(".cards")
cards.append(carDiv)
return carDiv
 }

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.


// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data.
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.


//       // 🛠️ STEP 4: Fetch Followers Data
//       // 1️⃣ Use the followers_url from the GitHub user data.
//       // 2️⃣ Send a GET request to fetch follower information.
//       // 3️⃣ Log the response data to inspect its structure.
//       // 4️⃣ For each follower:
//       //     - Create a card using the function.
//       //     - Append the card to the .cards container.


fetchCard().then((userData) => {
  if (userData) {
    buildCard(userData);
    axios
      .get(userData.followers_url)
      .then((response) => {
        const followers = response.data;
        followers.forEach((follower) => {
          // Fetch full user data for each follower
          axios.get(`https://api.github.com/users/${follower.login}`)
            .then((followerResponse) => {
              
              buildCard(followerResponse.data);
            })
            .catch((error) => {
              console.error(`Error fetching follower ${follower.login}:`, error);
            });
        });
      })
      .catch((error) => {
        console.error(`Error fetching followers:`, error);
      });
  }
});

// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

const followers = ["abdirahman", "duraanali", "abdishakur", "mohamed","ibrahim","Stephen"]; 
const cardsContainer = document.querySelector(".cards");

followers.forEach((username) => {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      const userData = response.data;
      const userCard = buildCard(userData);
      if (userCard) cards.appendChild(userCard);
    })
    .catch((error) => {
      console.error(`Error fetching user ${username}:`, error);
    });
});

// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
