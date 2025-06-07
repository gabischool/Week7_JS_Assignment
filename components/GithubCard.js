// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

const API_URL = "https://api.github.com/users/khalid-abdisalam-hassan";

function fetchProfile(){
        return axios.get(API_URL)
        .then((Response) => {
                return (Response.data)
        })
        .catch((error) => {
                console.log(error)
        })
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

function CreateProfileCard(card){
        const Maindiv = document.querySelector(".cards")

        // Create Main Div Card from HTML
        const MainDivCard = document.createElement("div")
        MainDivCard.className = "card"

        // Create Image Card
        const ImageCard = document.createElement("img")
        ImageCard.src = card.avatar_url;

        //Create Card-info Div
        const CardInfo = document.createElement("div")
        CardInfo.className = "card-info";

        // Create Name
        const CardName = document.createElement("h3")
        CardName.className = "name"
        CardName.textContent = card.name;

        // Create Username
        const CardUserName = document.createElement("p")
        CardUserName.className = "username"
        CardUserName.textContent = card.login;

        // Create Location
        const CardLocation = document.createElement("p")
        CardLocation.textContent = "Location:" + card.location;

        // Create Profile
        const CardProfile = document.createElement("p")
        CardProfile.textContent = "Profile:";
        const ProfileLink = document.createElement("a")
        ProfileLink.href = card.html_url
        ProfileLink.textContent = card.html_url
        ProfileLink.target = "_blank"

        // Create Followers
        const CardFollowers = document.createElement("p")
        CardFollowers.textContent = "Followers:" + card.followers;

        // Create Following
        const CardFollowing = document.createElement("p")
        CardFollowing.textContent = "Following:" + card.following;

        // Create Bio
        const CardBio = document.createElement("p")
        CardBio.textContent = "Bio:" + card.bio;

        // Append All

        Maindiv.append(MainDivCard)

        MainDivCard.append(ImageCard)
        MainDivCard.append(CardInfo)

        CardInfo.append(CardName)
        CardInfo.append(CardUserName)
        CardInfo.append(CardLocation)
        CardInfo.append(CardProfile)
        CardInfo.append(CardFollowers)
        CardInfo.append(CardFollowing)
        CardInfo.append(CardBio)

        CardProfile.append(ProfileLink)

        return MainDivCard
}

// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.

function displayCardProfile(){
        fetchProfile()
                .then((card) => {
                        CreateProfileCard(card)
                })
}

displayCardProfile()

// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.

const follower_url = "https://api.github.com/users/Khalid-Abdisalam-Hassan/followers";

function fetchFollowers(){
        return axios.get(follower_url)
                .then((response) => {
                        return response.data
                })
                .catch((error) => {
                        console.log(error)
                })
}

function displayFollowers() {
        fetchFollowers()
                .then((followers) => {
                        followers.forEach(follower => {
                                axios.get(follower.url)
                                        .then((response) => {
                                                CreateProfileCard(response.data)
                                        })
                                        .catch((error) => {
                                                console.log(error)
                                        })
                        });
                })
}

displayFollowers()

// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.

const followersArray = [
        {
                username: "duraanali",
                API: "https://api.github.com/users/duraanali"
        },
        {
                username: "s-hariri",
                API: "https://api.github.com/users/s-hariri"
        },
        {
                username: "12ibra",
                API: "https://api.github.com/users/12ibra"
        },
        {
                username: "Anisa-Mohamed-Ali",
                API: "https://api.github.com/users/Anisa-Mohamed-Ali"
        },
        {
                username: "zakaria-idiris",
                API: "https://api.github.com/users/zakaria-idiris"
        },
        {
                username: "jamila-ahmed",
                API: "https://api.github.com/users/jamila-ahmed"
        },
]

function loopfollowersArray() {
        followersArray.forEach(followers => {
                axios.get(followers.API)
                        .then((response) => {
                                displayFollowersArray(response.data)
                        })
                        .catch((error) => {
                                console.log(error)
                        })
        })
}

loopfollowersArray()

function displayFollowersArray(card) {
        const Maindiv = document.querySelector(".cards")

        // Create Main Div Card from HTML
        const MainDivCard = document.createElement("div")
        MainDivCard.className = "card"

        // Create Image Card
        const ImageCard = document.createElement("img")
        ImageCard.src = card.avatar_url;

        //Create Card-info Div
        const CardInfo = document.createElement("div")
        CardInfo.className = "card-info";

        // Create Name
        const CardName = document.createElement("h3")
        CardName.className = "name"
        CardName.textContent = card.name;

        // Create Username
        const CardUserName = document.createElement("p")
        CardUserName.className = "username"
        CardUserName.textContent = card.login;

        // Create Location
        const CardLocation = document.createElement("p")
        CardLocation.textContent = "Location:" + card.location;

        // Create Profile
        const CardProfile = document.createElement("p")
        CardProfile.textContent = "Profile:";
        const ProfileLink = document.createElement("a")
        ProfileLink.href = card.html_url
        ProfileLink.textContent = card.html_url
        ProfileLink.target = "_blank"

        // Create Followers
        const CardFollowers = document.createElement("p")
        CardFollowers.textContent = "Followers:" + card.followers;

        // Create Following
        const CardFollowing = document.createElement("p")
        CardFollowing.textContent = "Following:" + card.following;

        // Create Bio
        const CardBio = document.createElement("p")
        CardBio.textContent = "Bio:" + card.bio;

        // Append All

        Maindiv.append(MainDivCard)

        MainDivCard.append(ImageCard)
        MainDivCard.append(CardInfo)

        CardInfo.append(CardName)
        CardInfo.append(CardUserName)
        CardInfo.append(CardLocation)
        CardInfo.append(CardProfile)
        CardInfo.append(CardFollowers)
        CardInfo.append(CardFollowing)
        CardInfo.append(CardBio)

        CardProfile.append(ProfileLink)

        return MainDivCard
}
// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
