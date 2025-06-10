// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/AbdiqadirAbdikrin`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

const api_url = "https://api.github.com/users/AbdiqadirAbdikrin"


function fetchUserData() {
    return axios.get(api_url)
        .then(response => response.data)
        .catch(error => console.error("Error fetching user data:", error));
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



function createUserCard(user) {
    const userCard = document.createElement("div");
    userCard.className = "card";

    const userImg = document.createElement("img");
    userImg.src = user.avatar_url;
    userImg.alt = "Profile Picture";

    const userCardInfo = document.createElement("div");
    userCardInfo.className = "card-info";

    const username = document.createElement("h3");
    username.className = "name";
    username.textContent = user.name;

    const userLogin = document.createElement("p");
    userLogin.className = "username";
    userLogin.textContent = user.login;

    const userLocation = document.createElement("p");
    userLocation.textContent = "Location: " + user.location;

    const userProfile = document.createElement("p");
    userProfile.textContent = "Profile: ";

    const userProfileLink = document.createElement("a");
    userProfileLink.href = user.html_url;
    userProfileLink.textContent = user.html_url;

    const userFollowers = document.createElement("p");
    userFollowers.textContent = "Followers: " + user.followers;

    const userFollowing = document.createElement("p");
    userFollowing.textContent = "Following: " + user.following;

    const userBio = document.createElement("p");
    userBio.textContent = "Bio: " + user.bio;

    userCardInfo.append(username, userLogin, userLocation, userProfile, userProfileLink, userFollowers, userFollowing, userBio);
    userCard.append(userImg, userCardInfo);

    return userCard;
}


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.


function displayUserCard() {
    fetchUserData().then(user => {
        const mainDiv = document.querySelector(".cards");
        mainDiv.innerHTML = ""; 
        mainDiv.appendChild(createUserCard(user));

        fetchFollowers(user.login);
    });
}

displayUserCard();


// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.



// ✅ STEP 4: Fetch Followers and Display Them
function fetchFollowers(username) {
    const followersUrl = `https://api.github.com/users/${username}/followers`;

    fetch(followersUrl)
        .then(response => response.json())
        .then(followers => {
            console.log("Followers Data:", followers); // Log data structure
            const mainDiv = document.querySelector(".cards");

            followers.forEach(follower => {
                const followerCard = createUserCard(follower);
                mainDiv.appendChild(followerCard);
            });
        })
        .catch(error => console.error("Error fetching followers:", error));
}




// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
