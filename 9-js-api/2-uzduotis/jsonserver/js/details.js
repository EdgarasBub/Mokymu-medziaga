const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");
const deleteButton = document.querySelector(".delete");
const successMessages = document.querySelector(".success-delete");
const backButton = document.querySelector(".back-button");

const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/posts/" + id);
  const post = await res.json();

  const template = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>

    `;

  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderDetails());

deleteButton.addEventListener("click", async () => {
 let response = await fetch(`http://localhost:3000/posts/` + id, {
    method: "DELETE",
  });

  if (response.ok) {
    successMessages.style.display = "block";
    container.style.display = "none";
    deleteButton.style.display = "none"
    backButton.style.display = "none"

  }
});