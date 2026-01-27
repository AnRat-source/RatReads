const comics = [
    {
        title: "Combat Company: Operator Orange Vol 1",
        file: "comics/Combat Company; Operator Orange Vol 1.pdf",
        cover: "covers/CC Operator Orange Vol 1.png"
    },
];

const grid = document.getElementById("comicGrid");

comics.forEach(comic => {
    const card = document.createElement("div");
    card.className = "comic-card";
    card.innerHTML = `
        <img src="${comic.cover}" alt="cover">
        <div class="comic-title">${comic.title}</div>
    `;
    card.onclick = () => {
        window.location.href = `viewer.html?file=${encodeURIComponent(comic.file)}&title=${encodeURIComponent(comic.title)}`;
    };
    grid.appendChild(card);
});
