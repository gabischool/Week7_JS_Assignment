// components/GithubCard.js
function GithubCard(user) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${user.avatar_url}" alt="${user.login} avatar" />
    <div class="card-info">
      <h3 class="name">${user.name ?? user.login}</h3>
      <p class="username">${user.login}</p>
      <p>Location: ${user.location ?? "Not available"}</p>
      <p>Profile: <a href="${user.html_url}" target="_blank">${user.html_url}</a></p>
      <p>Followers: ${user.followers}</p>
      <p>Following: ${user.following}</p>
      <p>Bio: ${user.bio ?? "No bio provided"}</p>
    </div>
  `;
  return card;
}
