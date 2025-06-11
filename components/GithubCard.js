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
//     </div>\]==================//
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


const api_url = "https://api.github.com/users/naqib-axmed"

function fetchapi () {
        return axios.get (api_url) 
        .then ((response) => {
                console.log(response.data) 
     
                return response.data


                
        })
        .catch ((error) => {
                console.log(error)
        })

         
}




 function api_card (information) {
        
      

     const maindiv = document.querySelector(".cards") 
      // maindiv.innerHTML = "";

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



const usercard = document.createElement("div")
usercard.className = "card"

const imgs = document.createElement("img")
 imgs.src = information.avatar_url
 imgs.alt = "git-hub-data"

 const seconddiv = document.createElement("div")
 seconddiv.className = "card-info"

const titles = document.createElement("h3")
titles.className = "name"
titles.textContent = information.name 

const ptag = document.createElement("p")
ptag.className = "username"
ptag.textContent = information.login

const ptag2 = document.createElement("p")
ptag2.textContent = "Location: " + information.location

 const ptag3 = document.createElement("p");
  ptag3.innerHTML = `Profile: <a href="${information.html_url}">${information.html_url}</a>`;


//  const ptag3 = document.createElement("p");
//     const linkk = document.createElement("a");
//     linkk.href = information.html_url;
//     linkk.textContent = information.html_url;
//     ptag3.textContent = "Profile: ";
const ptag4 = document.createElement("P")
ptag4.textContent ="Followers: " + information.followers

const ptag5 = document.createElement("p")
ptag5.textContent = "Following: " + information.following 

const ptag6 = document.createElement("p")
ptag6.textContent = "Bio: " + information.bio

maindiv.append(usercard)
usercard.append(imgs)
usercard.append(seconddiv)
seconddiv.append(titles)
seconddiv.append(ptag)
seconddiv.append(ptag2)
//ptag3.appendChild(linkk)
seconddiv.append(ptag3)
seconddiv.append(ptag4)
seconddiv.append(ptag5)
seconddiv.append(ptag6)
return usercard








}


function display () {
         fetchapi()
        .then((information) => {
                api_card(information)

        })
}




 function fetchFollowers() {
  return axios.get("https://api.github.com/users/naqib-axmed/followers")
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((error) => {
      console.log(error)
    });
}

function displayAll() {
  const maindiv = document.querySelector(".cards")
  maindiv.innerHTML = "";

  fetchapi()
    .then((information) => {
      api_card(information)
    });

  fetchFollowers()
    .then((followers) => {
      followers.forEach((follower) => {
        axios.get(follower.url)
          .then((response) => {
            api_card(response.data)
          })
          .catch((error) => console.log(error))
      })   
    })
}









// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

const followersArray = ["duraanali", "sahramayo", "ROWDA73", "saynis","m-salah19"];

followersArray.forEach(username => {
  axios.get(`https://api.github.com/users/${username}`)
    .then(response => {
      api_card(response.data);
    })
    .catch(error => console.log(error));
});

displayAll();
















// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!




