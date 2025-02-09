// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/<your_name>`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.
const username = "shukriiman83"; // Replace with any GitHub username
const apiUrl = `https://api.github.com/users/${username}`;

axios.get(apiUrl)
    .then(response => {
        console.log(response.data); // Log response data
        const userCard = createUserCard(response.data); // Create user card
        document.querySelector(".cards").appendChild(userCard); // Append to DOM
        fetchFollowers(response.data.followers_url); // Fetch followers
    })
    .catch(error => console.error("Error fetching user:", error));

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
// 3️⃣ Return the created card element.
function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.name}">
        <div class="card-info">
            <h3 class="name">${user.name || "No Name"}</h3>
            <p class="username">@${user.login}</p>
            <p><strong>Location:</strong> ${user.location || "Unknown"}</p>
            <p><strong>Profile:</strong> <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
            <p><strong>Followers:</strong> ${user.followers}</p>
            <p><strong>Following:</strong> ${user.following}</p>
            <p><strong>Bio:</strong> ${user.bio || "No bio available"}</p>
        </div>
    `;

    return card;
}



// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
function fetchFollowers(followersUrl) {
    axios.get(followersUrl)
        .then(response => {
            console.log(response.data); 
            response.data.forEach(follower => {
                const followerCard = createUserCard(follower);
                document.querySelector(".cards").appendChild(followerCard);
            });
        })
        .catch(error => console.error("Error fetching followers:", error));
}

// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data.
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.


// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.
const followersArray = ["torvalds", "mojombo", "defunkt", "pjhyett", "gaearon"];

followersArray.forEach(user => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            const userCard = createUserCard(response.data);
            document.querySelector(".cards").appendChild(userCard);
        })
        .catch(error => console.error(`Error fetching ${user}:`, error));
});


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
