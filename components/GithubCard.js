// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

function fetchGitHubUser() {
        return axios.get("https://api.github.com/users/eng-ayzer")
            .then(response => response.data)
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
    
   

    

// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a **user object** as a parameter.
// 2️⃣ Use JavaScript DOM methods to create the following structure:
//

const createUserCard = (user) =>{
    // const cardContianer = document.querySelector(".cards")

    //     <div class="card">
    const cardDiv = document.createElement("div");
    cardDiv.className = "Card";
    //       <img src="{avatar_url}" />
    const avatar = document.createElement("img");
    avatar.className = "card-Info";
    avatar.src = user.avatar_url;
    
    //       <div class="card-info">
    const cardInfo = document.createElement("div");
    cardInfo.className ="card-info";
    //         <h3 class="name">{name}</h3>
    const Hname = document.createElement("h3");
    Hname.className = "name";
    Hname.textContent = user.name;
    
    //         <p class="username">{login}</p>
    const username = document.createElement("p");
    username.className = "userName";
    username.textContent = `Username: ${user.username}`; 
    //         <p>Location: {location}</p>
    const location = document.createElement("p");
    location.textContent =`location: ${user.location}`;
    //         <p>Profile: <a href="{html_url}">{html_url}</a></p>
    const Profile = document.createElement("p");
   Profile.textContent = user.url
    
    //         <p>Followers: {followers}</p>
    const followers = document.createElement("p")
    followers.textContent = `fallowers: ${user.followers}`;
    //         <p>Following: {following}</p>
    const following = document.createElement("p")
    following.textContent = `following: ${user.following}`;
    //         <p>Bio: {bio}</p>
    const Bio = document.createElement("p")
    Bio.textContent =`Bio: ${user.bio}`;
    //       </div>
    const closeDiv = document.createElement("div")
    //     </div>
    const CLOSEDiv = document.createElement("div")
    
    cardDiv.append(avatar);
    cardDiv.append(cardInfo);
    cardInfo.append(Hname);
    cardInfo.append(username);
    cardInfo.append(location);
    cardInfo.append(Profile);
    cardInfo.append(followers);
    cardInfo.append(following);
    cardInfo.append(Bio);
    
    
    // 3️⃣ Return the created card element.
    return cardDiv;
    }

// cardContianer.append(createUserCard(user));


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
const displaycard =()=>{ fetchGitHubUser().then((user) => {
    console.log(user);
        if (user) {
            // console.log(user);
            const card = createUserCard(user);
            
          const cardContianer=  document.querySelector(".cards").appendChild(card);
          return cardContianer;
        }
    
    });
} 
displaycard();
// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.
function fetchGitHubFollowers(username) {
    return axios.get(`https://api.github.com/users/${username}/followers`)
        .then(response => response.data) 
        .catch(error => {
            console.error("Error fetching followers:", error);
        });
}

fetchGitHubFollowers("eng-ayzer").then(followers => {
    
    const cardContainer = document.querySelector(".cards");
    followers.forEach(follower => {
       
        const followerCard = createUserCard(follower);
        
        cardContainer.appendChild(followerCard);
    });
});


// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
const followersArray = ["torvalds", "gaearon", "addyosmani", "sindresorhus", "wesbos"];

// 2️⃣ Function to fetch and display multiple users
function fetchMultipleUsers() {
    const cardContainer = document.querySelector(".cards");

    followersArray.forEach(username => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(response => { 
                const userCard = createUserCard(response.data);
                cardContainer.appendChild(userCard);
            })
            .catch(error => {
                console.error(`Error fetching user ${username}:`, error);
            });
    });
}

// 3️⃣ Call the function to fetch and display users
fetchMultipleUsers();


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
