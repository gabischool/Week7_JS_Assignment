// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

const fetchGithubData = () => {
  return axios
    .get("https://api.github.com/users/libanyousof")
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
fetchGithubData();
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
function createCard(user) {
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.src = user.avatar_url;
  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";
  const name = document.createElement("h3");
  name.className = "name";
  name.textContent = user.name;
  const username = document.createElement("p");
  username.className = "username";
  username.textContent = user.login;
  const location = document.createElement("p");
  location.textContent = `Location: ${user.location}`;
  const profile = document.createElement("p");
  profile.textContent = "Profile: ";
  const profileLink = document.createElement("a");
  profileLink.href = user.html_url;

  profileLink.textContent = user.html_url;
  const follwers = document.createElement("p");
  follwers.textContent = `Followers: ${user.followers}`;
  const following = document.createElement("p");
  following.textContent = `Following: ${user.following}`;
  const userBio = document.createElement("p");
  userBio.textContent = `Bio: ${user.bio}`;
  const repo = document.createElement("p");
  repo.textContent = `repositories: ${user.public_repos}`;

  const graph = document.createElement("img");
  graph.src = `https://ghchart.rshah.org/${username.textContent}`;
  graph.className = "graph";
  const showMore = document.createElement("button");
  showMore.className = "show-more";
  showMore.textContent = "Show More";

  const showLess = document.createElement("button");
  showLess.className = "show-less";
  showLess.textContent = "Show Less";

  cardInfo.append(name);
  cardInfo.append(username);
  cardInfo.append(location);
  cardInfo.append(profile);
  profile.append(profileLink);
  cardInfo.append(follwers);
  cardInfo.append(following);
  cardInfo.append(userBio);
  cardInfo.append(repo);
  cardInfo.append(graph);
  cardInfo.append(showMore);
  cardInfo.append(showLess);

  card.append(img);
  card.append(cardInfo);

  //hidden intially
  userBio.style.display = "none";
  repo.style.display = "none";
  following.style.display = "none";
  graph.style.display = "none";
  showLess.style.display = "none";
  showMore.style.display = "block";

  //show less
  showLess.addEventListener("click", (e) => {
    userBio.style.display = "none";
    repo.style.display = "none";
    following.style.display = "none";
    graph.style.display = "none";
    showLess.style.display = "none";
    showMore.style.display = "block";
  });
  //show more
  showMore.addEventListener("click", (e) => {
    userBio.style.display = "block";
    repo.style.display = "block";
    following.style.display = "block";
    graph.style.display = "block";
    showLess.style.display = "block";
    showMore.style.display = "none";
  });
  return card;
}

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.
function displayGithub() {
  fetchGithubData().then((user) => {
    const cardsContainer = document.querySelector(".cards");
    const card = createCard(user);
    cardsContainer.append(card);
  });
}
displayGithub();

// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or
//Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.

axios.get("https://api.github.com/users/libanyousof/followers").then((res) => {
  const container = document.querySelector(".cards");
  res.data.forEach((follower) => {
    axios
      .get(`https://api.github.com/users/${follower.login}`)
      .then((followerData) => {
        const card = createCard(followerData.data);
        container.append(card);
      });
  });
});
// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!

const followersArray = ["johnny", "aliahmed", "fatima", "mohamed", "leila"];

followersArray.forEach((user) => {
  console.log(user);
  axios.get(`https://api.github.com/users/${user}`).then((res) => {
    console.log(res.data);
    const container = document.querySelector(".cards");
    container.classList.add("followersArray");
    const card = createCard(res.data);
    container.append(card);
  });
});
