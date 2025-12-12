// 🛠️ STEP 1: Fetch GitHub Data


// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
const githubUsername = "MahamedAbdile";
const url = `https://api.github.com/users/${githubUsername}`;

function fetchUserData() {
    return axios.get(url)
        .then((response) => response.data)
        .catch((error) => console.log("❌ Error:", error));
}

//<div class="card">
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

// 🛠️ STEP 2: Create a Function to Build the Card
function createCard(user) {
    // 1️⃣ Create main card div
    const card = document.createElement("div");
    card.classList.add("card");

    // 2️⃣ Avatar
    const avatar = document.createElement("img");
    avatar.src = user.avatar_url;
    avatar.alt = "User Avatar";

    // 3️⃣ Info container
    const info = document.createElement("div");
    info.className = "card-info";

    // 4️⃣ Name
    const name = document.createElement("h3");
    name.className = "name";
    name.textContent = user.name || user.login;

    // 5️⃣ Username
    const usernameEl = document.createElement("p");
    usernameEl.className = "username";
    usernameEl.textContent = user.login;

    // 6️⃣ Location
    const location = document.createElement("p");
    location.textContent = `Location: ${user.location || "Unknown"}`;

    // 7️⃣ Profile link
    const profile = document.createElement("p");
    const link = document.createElement("a");
    link.href = user.html_url;
    link.textContent = user.html_url;
    link.target = "_blank";
    profile.textContent = "Profile: ";
    profile.appendChild(link);

    // 8️⃣ Followers
    const followers = document.createElement("p");
    followers.textContent = `Followers: ${user.followers ?? "N/A"}`;

    // 9️⃣ Following
    const following = document.createElement("p");
    following.textContent = `Following: ${user.following ?? "N/A"}`;

    // 🔟 Bio
    const bio = document.createElement("p");
    bio.textContent = `Bio: ${user.bio || "No bio available."}`;

    // 1️⃣1️⃣ Append info children
    info.appendChild(name);
    info.appendChild(usernameEl);      // ✅ use usernameEl here
    info.appendChild(location);
    info.appendChild(profile);
    info.appendChild(followers);
    info.appendChild(following);
    info.appendChild(bio);

    // 1️⃣2️⃣ Append avatar + info to card
    card.appendChild(avatar);
    card.appendChild(info);

    // 1️⃣3️⃣ Return the card element
    return card;
}


// 🛠️ STEP 3 & 4: Add main card + followers
fetchUserData().then(userData => {
    const container = document.querySelector(".cards");

    // STEP 3: main user card
    const mainCard = createCard(userData);
    container.appendChild(mainCard);

    // STEP 4: Followers
    axios.get(userData.followers_url)
        .then(response => {
            console.log("Followers data:", response.data);

            response.data.forEach(follower => {
                const followerCard = createCard(follower);
                container.append(followerCard);   
            });
        })
        .catch(error => console.log("Error fetching followers:", error));
});

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