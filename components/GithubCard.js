// fetched user from github
function user() {
  return axios.get(`https://api.github.com/users/safiyacodes`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}



// create the HTML element with DOM
function createUserCard(user) {
  const mainDiv = document.createElement("div");
  mainDiv.className = "card";

  const image = document.createElement("img");
  image.src = user.avatar_url;

  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";

  const name = document.createElement("h3");
  name.textContent = user.name || user.login;
  name.className = "name";

  const userName = document.createElement("p");
  userName.textContent = `Username: ${user.login}`;
  userName.className = "username";

  const location = document.createElement("p");
  location.textContent = `Location: ${user.location}`;

  const profile = document.createElement("p");
  profile.textContent = `Profile: ${user.html_url}`;

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${user.followers !== undefined ? user.followers : "N/A"}`;

  const following = document.createElement("p");
  following.textContent = `Following: ${user.following !== undefined ? user.following : "N/A"}`;

  const bio = document.createElement("p");
  bio.textContent = `Bio: ${user.bio || "No bio"}`;

  // append elements
  cardInfo.append(name, userName, location, profile, followers, following, bio);
  mainDiv.append(image, cardInfo);

  return mainDiv;
}

// function that connects everything
function displayUserCard() {
  const cardContainer = document.querySelector(".cards");
  cardContainer.innerHTML = "";

  user().then((currentUser) => {
    cardContainer.prepend(createUserCard(currentUser));
  });
}






function fetchFollowing() {
  axios.get("https://api.github.com/users/safiyacodes/following")
    .then((response) => {
      const users = response.data;
      const cardContainer = document.querySelector(".cards");
     

      users.forEach((user) => {
        axios.get(user.url)
          .then((res) => {
            cardContainer.append(createUserCard(res.data));
          });
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

displayUserCard()
fetchFollowing() 