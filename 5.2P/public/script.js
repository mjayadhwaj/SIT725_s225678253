// fetch all books and show them
fetch("/api/books")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("books");

    data.forEach(b => {
      const div = document.createElement("div");
      div.className = "book";

      div.innerHTML = `
        <h2>${b.title}</h2>
        <p><strong>Author:</strong> ${b.author}</p>
        <p><strong>Genre:</strong> ${b.genre}</p>
        <p>${b.description}</p>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => console.log("Error loading books:", err));
