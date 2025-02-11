// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/<your_name>`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.


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


// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.


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


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!

function fetchGitData() {
    axios.get('https://api.github.com/users/nimco-yusuf')
        .then((response) => {
            console.log("Success:", response.data);

           
            gitDataCard(response.data);

            
            return axios.get(response.data.followers_url);
        })
        .then(response => {
          
            response.data.forEach(follower => {
                axios.get(follower.url)
                    .then(response => {
                        gitDataCard(response.data);
                    })
                    .catch(error => console.log("Error fetching follower:", error));
            });

            
           const usersArray = ['faarax', 'john', 'mo', 'alen', 'mustafa'];
            usersArray.forEach(username => {
                axios.get(`https://api.github.com/users/${username}`)
                    .then(response => {
                        gitDataCard(response.data);
                    })
                    .catch(error => {
                        console.error(`Error fetching data for ${username}:`, error);
                    });
            });
        })
        .catch(error => console.log("Error fetching GitHub data:", error));
}


fetchGitData();


function gitDataCard(gitData) {
    // Select the main container
    const cards = document.querySelector(".cards");

    // Create the card elements
    const cardDiv = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardInfoDiv = document.createElement("div");
    const cardH3 = document.createElement("h3");
    const userNameP = document.createElement("p");
    const locationP = document.createElement("p");
    const profileP = document.createElement("p");
    const profileUrl = document.createElement('a');
    const followersP = document.createElement("p");
    const followingp = document.createElement("p");
    const cardBio = document.createElement("p");

    // Add classes to the elements
    cardDiv.className = "card";
    cardInfoDiv.className = "card-info";
    cardH3.className = "name";
    userNameP.className = "username";

    // Set the content for the elements
    cardImg.src = gitData.avatar_url;
    cardH3.textContent = gitData.name || 'No Name';
    userNameP.textContent = gitData.login;
    locationP.textContent = "Location: " + (gitData.location || 'Not specified');
    profileP.textContent = "Profile: ";
    profileUrl.textContent = gitData.html_url;
    profileUrl.href = gitData.html_url;
    followersP.textContent = "Followers: " + gitData.followers;
    followingp.textContent = "Following: " + gitData.following;
    cardBio.textContent = "Bio: " + (gitData.bio || 'No bio available');

    // Append elements to the card
    cards.appendChild(cardDiv);
    cardDiv.append(cardImg, cardInfoDiv);
    cardInfoDiv.append(cardH3, userNameP, locationP, profileP, followersP, followingp, cardBio);
    profileP.appendChild(profileUrl);

    return cards;
}

