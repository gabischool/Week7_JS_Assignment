// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to https://api.github.com/users/<Bilal-Ibrahim1>.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like name, avatar_url, location, followers, following, bio, and followers_url.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the .cards container in the DOM.

// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a *user object* as a parameter.
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

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the .cards container using document.querySelector('.cards').
// 3️⃣ Append the created card to the .cards container.

// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the followers_url from the GitHub user data.
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the .cards container.

//step6.call the function : we can call it up there as well .
//createCardProfile(user)

// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array followersArray with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to .cards.

// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!

axios
  .get("https://api.github.com/users/AK55068")

  .then((response) => {
    const user = response.data;
    console.log(user);

    axios
      .get(user.followers_url)
      .then((followersResponse) => {
        const followers = followersResponse.data;
        console.log(followers);

        followers.forEach((follower) => {
          axios
            .get(follower.url)
            .then((fullFollowerResponse) => {
              const fullFollower = fullFollowerResponse.data;

              const followerCard = createCardProfile(fullFollower);
              document.querySelector(".cards").appendChild(followerCard);
            })
            .catch((err) => console.error("there is an error ", err));
        });
      })
      .catch((err) => console.error(" we have not found the followers:", err));
  })
  .catch((error) => console.error("the user is not found:", error));

axios
  .get("https://api.github.com/users/AK55068")

  .then((response) => {
    const user = response.data;

    console.log(response.data);

    const card = createCardProfile(user);
    const cards = document.querySelector(".cards");

    cards.append(card);
  })
  .catch((err) => {
    console.log("something is wrong", err);
  });

//step1.creation of the function to build the card.
function createCardProfile(user) {
  //step2. (cards) selection from the htlm file.

  //step3. creation of given data structure using JavaScript DOM methods.

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const cardImage = document.createElement("img");
  cardImage.src = user.avatar_url;

  const cardInfo = document.createElement("div");
  cardInfo.className = "card-info";

  const h3 = document.createElement("h3");
  h3.className = "name";
  h3.textContent = user.name;

  const userName = document.createElement("p");
  userName.className = "username";
  userName.textContent = user.userName;

  const location = document.createElement("p");
  location.textContent = ` ${user.location}`;

  const profile = document.createElement("p");

  profile.textContent = `profile: <a href="${user.html_url}"> ${user.html_url}</a>;`

  const followers = document.createElement("p");
  followers.textContent =` followers: ${user.followers};`

  const following = document.createElement("p");
  following.textContent = ` following:  ${user.following}`;

  const bio = document.createElement("p");
  bio.textContent = `bio: ${user.bio};`

  //step4. add data

  //step5.Connect all elements (parents to the childs elements)

  cardDiv.append(cardImage);

  cardDiv.append(cardInfo);

  cardInfo.append(h3);
  cardInfo.append(userName);
  cardInfo.append(location);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);
  //return the cards 
  return cardDiv;
}