function fetchGithubData() {
  return axios
    .get("https://api.github.com/users/yousuf316")
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

function createUsercard(userdata) {
  const card = document.createElement("div");
  card.className = "card";

  const avatar = document.createElement("img");
  avatar.src = userdata.avatar_url;
  avatar.alt = `${userdata.login}'s avatar`;
  card.append(avatar);

  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  card.append(cardInfo);

  const name = document.createElement("h3");
  name.className = "name";
  name.textContent = userdata.name || "No name provided";
  cardInfo.append(name);

  const username = document.createElement("p");
  username.className = "username";
  username.textContent = userdata.login;
  cardInfo.append(username);

  const location = document.createElement("p");
  location.textContent = "Location: " + (userdata.location || "Not available");
  cardInfo.append(location);

  const profile = document.createElement("p");
  profile.innerHTML = `Profile: <a href="${userdata.html_url}" target="_blank">${userdata.html_url}</a>`;
  cardInfo.append(profile);

  const followers = document.createElement("p");
  followers.textContent = "Followers: " + userdata.followers;
  cardInfo.append(followers);

  const following = document.createElement("p");
  following.textContent = "Following: " + userdata.following;
  cardInfo.append(following);

  const bio = document.createElement("p");
  bio.textContent = "Bio: " + (userdata.bio || "No bio available");
  cardInfo.append(bio);

  return card;
}

function fetchFollowerData() {
  return axios
    .get("https://api.github.com/users/yousuf316/followers")
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

function displaynewUser() {
  const cardsContainer = document.querySelector(".cards");
  cardsContainer.innerHTML = "";

  fetchGithubData().then((currentUser) => {
    cardsContainer.append(createUsercard(currentUser));
  });

  fetchFollowerData().then((followers) => {
    followers.forEach((user) => {
      cardsContainer.append(createUsercard(user));
    });
  });
}

const button = document.createElement("button");
button.textContent = "Load GitHub Users";
button.addEventListener("click", displaynewUser);
document.body.prepend(button);

displaynewUser();
