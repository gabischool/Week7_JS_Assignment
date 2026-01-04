// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

const GithubData = {
    "login": "SundusHersi",
    "avatar_url": "https://avatars.githubusercontent.com/u/194566267?v=4",
    "followers_url": "https://api.github.com/users/SundusHersi/followers",
    "html_url": "https://github.com/SundusHersi",
    "name": "Sundus Hersi",
    "location": "Seattle",
    "bio": "Software Engineer student",
    "followers": 3,
    "following": 1,
    
}

function fetchGithub(){
  return axios.get("https://api.github.com/users/SundusHersi")
  .then((response) => response.data)
  .catch((error) => console.log(error))

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

function CreateGithubCard (GithubData){
    const containerCard = document.querySelector(".cards")
    const mainCardDiv = document.createElement("div")
    mainCardDiv.className = "card"
    const cardImg = document.createElement("img")
    cardImg.src = GithubData.avatar_url
    const cardInfoDiv = document.createElement("div")
    cardInfoDiv.className = "card-info"
    const cardName = document.createElement("h3")
    cardName.className = "name"
    cardName.textContent = GithubData.name
    const usernameCard = document.createElement("p")
    usernameCard.className = "username"
    usernameCard.textContent = GithubData.login
    const cardLocation = document.createElement("p")
    cardLocation.textContent = `location: ${GithubData.location}`
    const profileCard = document.createElement("p")
    profileCard.textContent = "profile: "
    const profileLink = document.createElement("a")
    profileLink.href = GithubData.html_url
    profileLink.textContent = GithubData.html_url
    const followersCard = document.createElement("p")
    followersCard.textContent = ` followers: ${GithubData.followers}`
    const followingcard = document.createElement("p")
    followingcard.textContent = ` following: ${GithubData.following}`
    const cardBio = document.createElement("p")
    cardBio.textContent = `Bio: ${GithubData.bio}`

    containerCard.append(mainCardDiv)
    mainCardDiv.append(cardImg, cardInfoDiv)
    cardInfoDiv.append(cardName)
    cardInfoDiv.append(usernameCard)
    cardInfoDiv.append(cardLocation)
    cardInfoDiv.append(profileCard)
    profileCard.append(profileLink)
    cardInfoDiv.append(followersCard)
    cardInfoDiv.append(followingcard)
    cardInfoDiv.append(cardBio)

    // 3️⃣ Return the created card element.

    return containerCard
}

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.


// 🛠️ STEP 4: Fetch Followers Data 
// 1️⃣ Use the `followers_url` from the GitHub user data or //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.

function fetchfollowers(followersurl){
 return axios.get(followersurl)
 .then(response => response.data)
 .catch(error => console.log(error))
}

function displayGithub(){
  const container = document.querySelector(".cards");
  container.innerHTML = ""

    fetchGithub()
    .then(user => {
     CreateGithubCard(user) 

     return fetchfollowers(user.followers_url)
    })

    .then (followers => {
      return Promise.all(
        followers.map(follower =>
          axios.get(follower.url).then(response => response.data)
        )
      );
      })

      .then(fullfollowers => {
        fullfollowers.forEach(followerUser => {
        CreateGithubCard(followerUser)
        });
      })
       .catch(error => console.log(error))
    }
    
displayGithub()





// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
