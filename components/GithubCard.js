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

function fetchData() {
        return axios.get('https://api.github.com/users/jamila-ahmed')
              .then((response) => { 
              return response.data
              })
              .catch((error) => console.log(error))
             
  }

   function userCardData(userObject) {

    // create div element
    const divElement = document.createElement("div")
    divElement.className = "card"

    // create image element
    const imageElement = document.createElement("img")
    imageElement.src = userObject.avatar_url
    
    // create card info
    const cardInfo = document.createElement("div")
    cardInfo.className = "card-info"

    // create card title
    const cardTitle = document.createElement("h3")
    cardTitle.className = "name"
    cardTitle.textContent = userObject.name

    // create login title
    const loginTitle = document.createElement("p")
    loginTitle.className = "username"
    loginTitle.textContent = userObject.login

    // create location title
    const locationTitle = document.createElement("p")
    locationTitle.textContent = `Location: ${userObject.location}`

    // create profile title
    const profileTitle = document.createElement("p")
    profileTitle.innerHTML = `Profile: <a href="${userObject.html_url}">${userObject.html_url}</a>`
   
    // create followers title
    const followersTitle = document.createElement("p")
    followersTitle.textContent = `Followers: ${userObject.followers}`

    // create following title
    const followingTitle = document.createElement("p")
    followingTitle.textContent = `Following: ${userObject.following}`

    // create Bio title
    const bioTitle = document.createElement("p")
    bioTitle.textContent = userObject.bio

     // isku xir dhamantod
     divElement.append(imageElement, cardInfo)
     cardInfo.append(cardTitle)
     cardInfo.append(loginTitle)
     cardInfo.append(locationTitle)
     cardInfo.append(profileTitle)
     cardInfo.append(followersTitle)
     cardInfo.append(followingTitle)
     cardInfo.append(bioTitle)
     
     
     return divElement
     
   }

      function displayGithub() {
        const cardContainer = document.querySelector(".cards")
        cardContainer.innerHTML = ""

              fetchData()
              .then((userObject) => {
              
                const mainUserData = userCardData(userObject)
                document.querySelector('.cards').append(mainUserData)
              
               
                fetchFollowers();
              })
              .catch((error) => console.log(error));

              
         }


      function fetchFollowers() {
        return axios.get('https://api.github.com/users/jamila-ahmed/followers')
                .then((response) => {
                response.data.forEach((follower) => {
                
                axios.get(`https://api.github.com/users/${follower.login}`)
                        .then((res) => {
                        const followerData = res.data

                        const card = userCardData(followerData)
                        document.querySelector('.cards').append(card)
                        })
                        .catch((error) => console.log(error))
                })
        })
                .catch((error) => console.log(error))
        
      }
      displayGithub()




// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

const followersArray = ["florinpop17", "wesbos", "knadh", "duraanali", "AbhishekGanvir"]


const cardContainer = document.querySelector('.cards');
followersArray.forEach((username) => {
        return axios.get(`https://api.github.com/users/${username}`)
              .then((response) => {
              const card = userCardData(response.data)
               document.querySelector('.cards').append(card)
              })
              .catch((error) => console.log(error))           
})

// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
