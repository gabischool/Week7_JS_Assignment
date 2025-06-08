// 🛠️ STEP 1: Fetch GitHub Data
// 1️⃣ Use Axios to send a GET request to `https://api.github.com/users/your_github_username`.
// 2️⃣ Log the response data to inspect its structure.
// 3️⃣ Look at important fields like `name`, `avatar_url`, `location`, `followers`, `following`, `bio`, and `followers_url`.
// 4️⃣ Pass the data into a function to create a user card.
// 5️⃣ Append the created card to the `.cards` container in the DOM.

 function git_api() {
        
        return axios.get("https://api.github.com/users/abdinasir00")

          .then((response) => response.data)
          .catch((error) => console.log(error))
          
 }
 function duraanali() {
        
        return axios.get("https://api.github.com/users/duraanali")

          .then((response) => response.data)
          .catch((error) => console.log(error))
          
 }


//  git_hub()

 function github(git){
        
        const card = document.querySelector(".cards")

        card.innerHTML = "";

    const mainDiv = document.createElement("div")
    mainDiv.className = "card"

    const image = document.createElement("img")
    image.src = git.avatar_url

    const contentDiv = document.createElement("div")
    contentDiv.className ="card-info"

    const h3 = document.createElement("h3")
    h3.className = "name"
    h3.textContent = git.name

    const p1 = document.createElement("p")
    p1.className = "username"
    p1.textContent = git.login
    

       const p2 =document.createElement("p")
    p2.textContent = `Location : ${git.location}`


       const p3 =document.createElement("p")

       p3.textContent = " profile: "

     const aa = document.createElement("a")
     aa.href = git.html_url
     aa.textContent = git.html_url

       const p4 = document.createElement("p")
    p4.textContent = ` followers: ${git.followers}`

       const p5 =document.createElement("p")
 
        p5.textContent = ` followering: ${git.following}`

       const p6 = document.createElement("p")
        p6.textContent = `Bio: ${git.bio}`


        //  is ku xidh 

        mainDiv.append(image)
        mainDiv.appendChild(contentDiv)
        
        contentDiv.appendChild(h3)
        contentDiv.appendChild(p1)
        contentDiv.appendChild(p2)
        contentDiv.appendChild(p3)
        p3.appendChild(aa)
        contentDiv.appendChild(p4)
        contentDiv.appendChild(p5)
        contentDiv.appendChild(p6)

        card.append(mainDiv)

        return mainDiv;


 }

  function x(y){
        const card = document.querySelector(".cards1")
        card.innerHTML = "";

        const mainDiv = document.createElement("div")
        mainDiv.className = "card"

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

        const image = document.createElement("img")
        image.src = y.avatar_url;

        const contentDiv = document.createElement("div")
        contentDiv.className = "card-info";

        const h3 = document.createElement("h3")
        h3.className = "name";
        h3.textContent = y.name;

        const p1 = document.createElement("p")
        p1.className = "userName";
        p1.textContent = y.login;

        const p2 = document.createElement("p")
        p2.textContent = ` Location ${y.location}`

        const p3 = document.createElement("p")
        p3.textContent = "Profile: "

        const a = document.createElement("a")
        a.href  = y.html_url;
        a.textContent = y.html_url;

        const p4 = document.createElement("p")
        p4.textContent = `followers: ${y.followers}`

        const p5 = document.createElement("p")
        p5.textContent = `following ${y.following}`

        const p6 = document.createElement("p")
        p6.textContent = `bio: ${y.bio}`


        mainDiv.append(image)
        mainDiv.append(contentDiv)

        contentDiv.append(h3)
        contentDiv.append(p1)
        contentDiv.append(p2)
        contentDiv.append(p3)
        p3.append(a)

        contentDiv.append(p4)
        contentDiv.append(p5)
        contentDiv.append(p6)

        card.append(mainDiv)





  }


   function displaygithub() {
        git_api()
         .then((git) => {
                github(git)
         })

   }


   function displaygithubX() {
        duraanali()
         .then((y) => {
                x(y)
         })

   }

displaygithubX()
displaygithub()




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
// 1️⃣ Use the `followers_url` from the GitHub user data or 
        //Use this: https://api.github.com/users/your_username/followers
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
