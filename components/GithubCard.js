// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
function fetch(){



return axios.get('https://api.github.com/users/msconfiguration')
  .then (response => 
   { const userData = response.data ;
   
        const maincard= document.querySelector (".cards")


maincard.append (UserCard(userData))

        } )
  
}

fetch()
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.


// 5️⃣ Append the created card to the `.cards` container in the DOM.


// 🛠️ STEP 2: Create a Function to Build the Card

// 1️⃣ Write a function that takes a **user object** as a parameter.


function UserCard(user) {  

        console.log (user)
        const card = document.createElement("div");
        card.className= "card";
        
const avatar_url = document.createElement("img");
avatar_url.className= "avatar_url"
avatar_url.src = user.avatar_url ;

const info = document.createElement ("div");

info.className= "card-info";


const name = document.createElement ("h3")
name.className = "name"
name.textContent = user.name;

const username = document.createElement ("p")
username.className = "username"
username.textContent= user.login;

const location = document.createElement ("p")

location.className="location"
location.textContent= user.location;

 const profile = document.createElement("p")

 profile.textContent = user.html_url;

 const followers = document.createElement ("p")

 followers.textContent = user.followers;

 const following = document.createElement ("p")

 following.textContent = user.following;

 const bio = document.createElement ("p")
 bio.textContent = user.bio;







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

card.append(avatar_url)

card.append(info)

info.append(name)

info.append(username)

info.append(location)

info.append(profile)

info.append(followers)

info.append(following)

info.append(bio)

console.log(card)

return card

}



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
