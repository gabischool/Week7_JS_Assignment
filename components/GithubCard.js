// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.
const API_URL="https://api.github.com/users/s-hariri"
function fetch(){
        return axios.get(API_URL).then((Response)=>Response.data)
        .catch((error)=>console.log(error));
        
      
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

function createcard(user){
const maincards=document.querySelector(".cards")

const card=document.createElement("div")
card.className=("card")
const image=document.createElement("img")
image.src=user.avatar_url;
const cardinfo=document.createElement("div")
cardinfo.className=("card-info")
const name=document.createElement("h3")
name.textContent=user.name;
name.className=("name")
const username=document.createElement("p")
username.textContent=user.login;
username.className=("username")
const location=document.createElement("p")
location.textContent=`"location:"${user.location}`
const Profile=document.createElement("p")
Profile.textContent="profile:"
const Profilelink=document.createElement("a")
Profilelink.textContent=user.html_url
Profilelink.href=user.html_url
const followers=document.createElement("p")
followers.textContent=`"followers:"${user.followers}`
const following=document.createElement("p")
following.textContent=`"following:"${user.following}`
const bio=document.createElement("p")
bio.textContent=`"bio:"${user.bio}`

card.append(image)
card.append(cardinfo)
cardinfo.append(name)
cardinfo.append(username)
cardinfo.append(location)
cardinfo.append(Profile)
cardinfo.append(followers)
cardinfo.append(following)
cardinfo.append(bio)
Profile.append(Profilelink)

maincards.append(card)
return card

}

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
   function displaycard(){
   fetch().then((user)=>{
        createcard(user)
   })

   }
displaycard()
// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.
const followers_url="https://api.github.com/users/s-hariri/followers"
function fetch2(){
        return axios.get(followers_url).then((Response)=>Response.data)
        .catch((error)=>console.log(error));
        
      
 }
 function displaycard2(){
        fetch2()
        .then((followers)=>{
                followers.forEach(follower => {
                axios.get(follower.url).then((Response)=>createcard(Response.data))
                .catch((error)=>{
                        console.log(error)
                })
          });
        })
     
        }
         displaycard2()

// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
