document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card");
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((comments) => {
      comments.forEach((comment) => {
        const commentCard = createCommentCard(comment);
        cardContainer.appendChild(commentCard);
      });
    })
    .catch((error) => console.error("Error fetching comments:", error));
});
function createCommentCard(comment) {
  const cards = document.createElement("div");
  cards.classList.add("cards");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = comment.name;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = comment.body;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  cards.appendChild(cardBody);

  return cards;
}
