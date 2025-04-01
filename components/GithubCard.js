

// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

function fetchCard(username) {
    return axios.get(`https://api.github.com/users/Hafsa2356`)
        .then((response) => {
            console.log(response.data);
            const userCard = createUserCard(response.data);
            const userCardContainer = document.querySelector(".cards");
            userCardContainer.append(userCard);
        })
        .catch((error) => {
            console.log(error);
        });
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
    const card = document.createElement(`div`);
    card.className = `card`;
    //create imagfunction
    const img = document.createElement(`img`);
    img.src = user.avatar_url;
    card.append(img);
    //create card-info
    const cardinfo = document.createElement(`div`);
    cardinfo.className = `card-info`;
    card.append(cardinfo);
    //create name
    const name = document.createElement(`h3`);
    name.className = `name`;
    name.textContent = user.name || user.login || 'No name provided';
    cardinfo.append(name);
    //create username
    const username = document.createElement(`p`);
    username.className = `username`;
    username.textContent = user.login;
    cardinfo.append(username);
    //create location
    const location = document.createElement(`p`);
    location.textContent = `Location: ${user.location || 'No location provided'}`;
    cardinfo.append(location);
    //create profile
    const profile = document.createElement(`p`);
    profile.innerHTML = `Profile: <a href="${user.html_url}">${user.html_url}</a>`;
    cardinfo.append(profile);
    //create followers
    const followers = document.createElement(`p`);
    followers.textContent = `Followers: ${user.followers}`;
    cardinfo.append(followers);
    //create following
    const following = document.createElement(`p`);
    following.textContent = `Following: ${user.following}`;
    cardinfo.append(following);
    //create bio
    const bio = document.createElement(`p`);
    bio.textContent = `Bio: ${user.bio ? user.bio : 'No bio provided'}`;
    cardinfo.append(bio);
    return card;
}
// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.

function appendCardToDom(card) {
    const cardContainer = document.querySelector(`.cards`);
    cardContainer.append(card);

}



// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.

    function fetchFollowers(username) {
    axios.get(`https://api.github.com/users/Hafsa2356/followers`)
        .then((response) => {
            console.log("Followers Data:", response.data);
            const cardContainer = document.querySelector(".cards");
            response.data.forEach(follower => {
                const followerCard = createUserCard(follower);
                cardContainer.append(followerCard);
            });
        })

            .catch((error) => console.error("Error fetching followers:",error));
}
document.addEventListener("DOMContentLoaded", function() {
    const username = "Hafsa2356";
    fetchCard(username).then(() => {
        fetchFollowers(username);
    });
});

    // Call the fetchfollowers function to fetch and display followers.
    // 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.
// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
