// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

function FetchGitHub(username){
        return axios.get(`https://api.github.com/users/abdullahiahmed1`)
        .then((response) =>{
                console.log(response.data);
        const usercard=displaydata(response.data)
        const cardscontainer= document.querySelector(".cards");
        cardscontainer.append(usercard);
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

function displayuserdata(user){
        const div=document.createElement("div")
        div.className="card"
        const Img=document.createElement("img")
        Img.src= user.avatar_url
        Img.alt=user.name
        const infodiv= document.createElement("div")
        infodiv.className="card-info"
        const h3=document.createElement("h3")
        h3.className="name"
        h3.textContent=user.name
         const username=document.createElement("p")
         username.className="username"
         username.textContent=user.login
         const location=document.createElement("p")
         location.textcontent=user.location

         const profile=document.createElement("p")
         profile.innerTHML=`Profile: <a href="${user.html_url}">${user.html_url}</a>`;

         const followers=document.createElement("p")
         followers.textcontent=user.followers
         const following=document.createElement("p")
         following.textcontent=user.following
         const bio=document.createElement("p")
         bio.textcontent

         infodiv.append(h3,username,location,profile,followers,following,bio);
         div.appendChild(Img);
         return div;
}
// 🛠️ STEP 3: Add the Card to the DOM
// 1️⃣ Call the function with the GitHub data.
// 2️⃣ Select the `.cards` container using `document.querySelector('.cards')`.
// 3️⃣ Append the created card to the `.cards` container.


// 🛠️ STEP 4: Fetch Followers Data
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
// 2️⃣ Send a GET request to fetch follower information.
// 3️⃣ Log the response data to inspect its structure.
// 4️⃣ For each follower:
//     - Create a card using the function.
//     - Append the card to the `.cards` container.
function FetchGitHubfollowers(username){
        axios.get(`https://api.github.com/users/abdullahiahmed1/followers`)
        .then(response => {
                console.log("followers Data",response.data);
                const containercard= document.querySelector(".cards");

                response.data.forEach(follower => {
                        axios.get(follower.url)
                        .then(followerRes =>{
                                 const followercard= displayuserdata(follower);
                containercard.append(followercard)
                                
                        })
                 
                });
        })
                .catch(error => console.error("Error fetching of the followers",error))

        }
        document.addEventListener("DOMContentLoaded",function() {
                const username= "abdullahiahmed1"
                FetchGitHub(username);
                FetchGitHubfollowers(username);
        });




// 🛠️ STRETCH: Add More GitHub Users
// 1️⃣ Create an array `followersArray` with at least 5 GitHub usernames.
// 2️⃣ Loop through the array and send a GET request for each username.
// 3️⃣ Create a card for each user and append it to `.cards`.


// 🌟 BONUS TIP:
// 🎨 Style your cards using CSS to make them look polished!
// 🤖 Try experimenting with different GitHub profiles!
