// 🛠 STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to GitHub API.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Extract key details and create a user card.
// 4️⃣ Append the card to the .cards container in the DOM.

const container = document.querySelector(".container");

const fetchGitHubData = async (url) => {
    try {
        const response = await axios.get(url);
        console.log("Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
};

const createUserCard = (user) => {
    const cardContainer = document.querySelector(".cards");
    const card = document.createElement("div");
    const avatar = document.createElement("img");
    const infoDiv = document.createElement("div");
    const nameHeading = document.createElement("h3");
    const usernamePara = document.createElement("p");
    const locationPara = document.createElement("p");
    const profilePara = document.createElement("p");
    const followersPara = document.createElement("p");
    const followingPara = document.createElement("p");
    const bioPara = document.createElement("p");

    card.className = "card";
    avatar.className = "avatar-url";
    avatar.src = user.avatar_url ? user.avatar_url : "default-avatar.png";
    infoDiv.className = "card-info";
    nameHeading.className = "name";
    nameHeading.textContent = user.name ? user.name : "No Name Available";
    usernamePara.className = "username";
    usernamePara.textContent = user.login ? user.login : "No Username";
    locationPara.textContent = `Location: ${user.location ? user.location : "No Location"}`;
    profilePara.innerHTML = `Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a>`;
    followersPara.textContent = `Followers: ${user.followers ? user.followers : "0"}`;
    followingPara.textContent = `Following: ${user.following ? user.following : "0"}`;
    bioPara.textContent = user.bio ? user.bio : "No Bio Available";

    infoDiv.append(nameHeading, usernamePara, locationPara, profilePara, followersPara, followingPara, bioPara);
    card.append(avatar, infoDiv);
    cardContainer.appendChild(card);
};

const loadUserData = async (username) => {
    const userData = await fetchGitHubData(`https://api.github.com/users/${username}`);
    if (userData) {
        createUserCard(userData);
        fetchFollowers(userData.followers_url);
    }
};

const fetchFollowers = async (followersUrl) => {
    if (!followersUrl) return;
    try {
        const response = await axios.get(followersUrl);
       
        if (response.data && Array.isArray(response.data)) {
            response.data.forEach(async (follower) => {
                const fullFollowerData = await fetchGitHubData(follower.url);
                if (fullFollowerData) createUserCard(fullFollowerData);
            });
        }
    } catch (error) {
        console.error("Error fetching followers data:", error);
    }
};

loadUserData("Maashka24");