// public/script.js
async function loadBooks() {
  try {
    const res = await fetch("/api/books");
    if (!res.ok) throw new Error("Failed to fetch books");
    const data = await res.json();
    renderBooks(data);
  } catch (err) {
    document.getElementById("books").innerText = "Error loading books: " + err;
  }
}

function renderBooks(list) {
  const container = document.getElementById("books");
  container.innerHTML = "";

  if (!list.length) {
    container.innerText = "No books available.";
    return;
  }

  list.forEach((b) => {
    const el = document.createElement("div");
    el.className = "book";
    el.innerHTML = `
      <h2>${escapeHtml(b.title)}</h2>
      <p class="meta"><strong>Author:</strong> ${escapeHtml(b.author)} &nbsp;|&nbsp; <strong>Genre:</strong> ${escapeHtml(b.genre)}</p>
      <p>${escapeHtml(b.description)}</p>
      <p style="margin-top:8px;"><a href="/api/books/${b.id}" target="_blank">Open JSON</a></p>
    `;
    container.appendChild(el);
  });
}

// small helper to avoid simple HTML injection
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

loadBooks();
