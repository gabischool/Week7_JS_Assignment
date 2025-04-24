// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

function fetchGitHuB(){
        return axios.get(`https://api.github.com/users/ikran123`)
        .then(response => response.data)
        .catch((error) =>{
                console.log("error fetching data:", error)
        });
}
//
// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a **user object** as a parameter.
// 2️⃣ Use JavaScript DOM methods to create the following structure:
//
//     {<div class="card">
const userCard= (user) =>{
        const card = document.createElement("div")
card.className = "card"

//       <img src="{avatar_url}" />
const image = document.createElement("img")
image.src = user.avatar_url
image.className = "avatar"

//       <div class="card-info">
const cardInfo = document.createElement("div")
cardInfo.className = "card-info"

//         <h3 class="name">{name}</h3>
const name = document.createElement("h3")
name.className = "name"
name.textContent = user.name
//         <p class="username">{login}</p>
const userName = document.createElement("p")
userName.className = "username"
userName.textContent = user.login
//         <p>Location: {location}</p>
const location = document.createElement("p")
Location.textContent = user.location

//         <p>Profile: <a href="{html_url}">{html_url}</a></p>
const Profile = document.createElement("p")
Profile.textContent = user.url

//         <p>Followers: {followers}</p>
const followers = document.createElement("p")
followers.textContent = user.followers
//         <p>Following: {following}</p>
const following = document.createElement("p")
following.textContent = user.following
//         <p>Bio: {bio}</p>
const bio = document.createElement("p")
bio.textContent = user.bio
//       </div>
//     </div>
// }

card.append(image,cardInfo);
cardInfo.append(name);
cardInfo.append(userName);
cardInfo.append(location);
cardInfo.append(Profile);
cardInfo.append(followers);
cardInfo.append(following);
cardInfo.append(bio);

// 3️⃣ Return the created card element.
return card


}


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
const cardDiv = document.querySelector('.cards')

function display(){



fetchGitHuB().then(data=>{
        if(data){
                const user = userCard(data)
                cardDiv.append(user)
        }
})
}
display()

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