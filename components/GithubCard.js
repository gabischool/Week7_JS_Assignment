// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to https://api.github.com/users/<haniawees>.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like name, avatar_url, location, followers, following, bio, and followers_url.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the .cards container in the DOM.

    
axios.get("https://api.github.com/users/haniawees")
.then(res => {
 const user = res.data
 console.log(user)

 const card = shabhaan(user);
 
   const cards = document.querySelector('.cards');
   cards.append(card)
   fetchfollowers(user.followers_url)
//  console.log(card)

}).catch(error => {
    console.log("Khalad baa jira")
});

// 🛠️ STEP 2: Create a Function to Build the Card
// 1️⃣ Write a function that takes a *user object* as a parameter.
// 2️⃣ Use JavaScript DOM methods to create the following structure:


  function shabhaan(user){
    const card = document.createElement("div");
    card.className = "card"
  
    const img =document.createElement("img");
    img.src=  user.avatar_url;

    const cardInfo = document.createElement("div");
    cardInfo.className = "card-info"
  
    const h3 = document.createElement("h3");
    h3.className = "name"
    h3.textContent = user.name
  
    const p1 = document.createElement("p");
    p1.className = "username"
    p1.textContent = user.login
  
    const p = document.createElement("p");
    p.className = "username"
    p.textContent = user.location
  
    const profile = document.createElement("p");
    profile.innerHTML = ` profile <a href="${user.html_url}" target="_blank">${user.html_url} </a>`;

    const followers = document.createElement("p");
    followers.textContent = `followers ${user.followers}`
    
    const following = document.createElement("p");
    following.textContent = ` following ${user.following}`
  
  
    const bio = document.createElement("p");
    bio.textContent = user.bio 
  
    cardInfo.appendChild(h3)
    cardInfo.appendChild(p1)
    cardInfo.appendChild(p)
    cardInfo.appendChild(profile)
    cardInfo.appendChild(followers)
    cardInfo.appendChild(following)
    cardInfo.appendChild(bio);
  
    card.append(img);
    card.appendChild(cardInfo)
   
    return card
    
  }
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
  //   axios.get('https://api.github.com/users/haniawees')
  //  .then(response => {
  //   const user = response.data;

    function fetchfollowers(followersUrl){

    
    axios.get(followersUrl)
      .then(followersResponse => {
        const followers = followersResponse.data;

        
        
        followers.forEach(follower => {
          axios.get(follower.url)  
            .then(fullFollowerResponse => {
              const fullFollower = fullFollowerResponse.data;

             
              const followerCard = shabhaan(fullFollower);
              document.querySelector('.cards').appendChild(followerCard);
            })
            .catch(err => console.error("Khalad ayaa dhacay ", err));
          
        });
      })
      

  
}


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
   const usersArray = ["ali","aliya" ,"hassan"]; "hassan" ,"Unknown"
   usersArray.forEach(username => {
    axios.get(`https://api.github.com/users/${username}`)
      .then(response => {
        const userCard = shabhaan(response.data); "shabhaan", "unknown"
        document.querySelector('.cards').appendChild(userCard);
      })
      .catch(error => {
        console.error(`Error fetching data for ${username}:`, error.response?.data || error.message);
      });
  });
  // 🛠️ STRETCH: Add More GitHub Users
  // 1️⃣ Create an array followersArray with at least 5 GitHub usernames.
  // 2️⃣ Loop through the array and send a GET request for each username.
  // 3️⃣ Create a card for each user and append it to .cards.
  // 🌟 BONUS TIP:
  // 🎨 Style your cards using CSS to make them look polished!
  // 🤖 Try experimenting with different GitHub profiles!
  