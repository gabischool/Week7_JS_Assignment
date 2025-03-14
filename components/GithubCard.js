// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.
async function fetchGitHubData(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log(response.data);
        const { name, avatar_url, location, followers, following, bio, followers_url } = response.data;
        const userCard = `
            <div class="user-card">
                <img src="${avatar_url}" alt="${name}'s avatar" />
                <h2>${name}</h2>
                <p>Location: ${location}</p>
                <p>Bio: ${bio}</p>
                <p>Followers: ${followers}</p>
                <p>Following: ${following}</p>
                <a href="${followers_url}" target="_blank">See Followers</a>
            </div>
        `;
        const cardsContainer = document.querySelector('.cards');
        cardsContainer.innerHTML += userCard;
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
    }
}
fetchGitHubData('Abdul-zaki');

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
    const card = document.createElement('div');
    card.classList.add('card');
    const avatar = document.createElement('img');
    avatar.src = user.avatar_url;
    avatar.alt = `${user.name}'s avatar`;
    card.appendChild(avatar);
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);
    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = user.name || 'Name not available';
    cardInfo.appendChild(name);
    const username = document.createElement('p');
    username.classList.add('username');
    username.textContent = user.login || 'Username not available';
    cardInfo.appendChild(username);
    const location = document.createElement('p');
    location.textContent = `Location: ${user.location || 'Location not available'}`;
    cardInfo.appendChild(location);
    const profile = document.createElement('p');
    profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;
    cardInfo.appendChild(profile);
    const followers = document.createElement('p');
    followers.textContent = `Followers: ${user.followers}`;
    cardInfo.appendChild(followers);
    const following = document.createElement('p');
    following.textContent = `Following: ${user.following}`;
    cardInfo.appendChild(following);
    const bio = document.createElement('p');
    bio.textContent = `Bio: ${user.bio || 'Bio not available'}`;
    cardInfo.appendChild(bio);
    return card;
}
const exampleUser = {
    avatar_url: 'https://avatars.githubusercontent.com/u/1',
    name: 'John Doe',
    login: 'johndoe',
    location: 'Earth',
    html_url: 'https://github.com/johndoe',
    followers: 150,
    following: 10,
    bio: 'An adventurous coder.',
};
const cardElement = createUserCard(exampleUser);
document.querySelector('.cards').appendChild(cardElement);


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
async function fetchGit_HubData(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const userData = response.data;
        const userCard = createUserCard(userData);
        const cardsContainer = document.querySelector('.cards');
        cardsContainer.appendChild(userCard);
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
    }
}
function createUserCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');

    const avatar = document.createElement('img');
    avatar.src = user.avatar_url;
    avatar.alt = `${user.name}'s avatar`;
    card.appendChild(avatar);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');
    card.appendChild(cardInfo);

    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = user.name || 'Name not available';
    cardInfo.appendChild(name);

    const username = document.createElement('p');
    username.classList.add('username');
    username.textContent = user.login || 'Username not available';
    cardInfo.appendChild(username);

    const location = document.createElement('p');
    location.textContent = `Location: ${user.location || 'Location not available'}`;
    cardInfo.appendChild(location);

    const profile = document.createElement('p');
    profile.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;
    cardInfo.appendChild(profile);

    const followers = document.createElement('p');
    followers.textContent = `Followers: ${user.followers}`;
    cardInfo.appendChild(followers);

    const following = document.createElement('p');
    following.textContent = `Following: ${user.following}`;
    cardInfo.appendChild(following);

    const bio = document.createElement('p');
    bio.textContent = `Bio: ${user.bio || 'Bio not available'}`;
    cardInfo.appendChild(bio);

    return card;
}
fetchGit_HubData('octocat');


// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.
// Step 4: Fetch Followers Data
async function fetchFollowersData(followersUrl) {
    try {
        // 1️⃣ Send a GET request to fetch followers data
        const response = await axios.get(followersUrl);

        // 2️⃣ Log the response data to inspect its structure
        console.log(response.data);
        response.data.forEach(follower => {
            const followerCard = createUserCard({
                name: follower.login,
                avatar_url: follower.avatar_url,
                location: 'Location not available',
                html_url: follower.html_url,
                followers: 'N/A',ll
                : 'N/A', 
                bio: 'Bio not available',
                login: follower.login,
            });
            const cardsContainer = document.querySelector('.cards');
            cardsContainer.appendChild(followerCard);
        });
    } catch (error) {
        console.error('Error fetching followers data:', error);
    }
}
fetchFollowersData('https://api.github.com/users/octocat/followers');


// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
