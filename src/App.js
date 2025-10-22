async function loadProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "<p class='loading-msg'>Se încarcă proiectele...</p>";

    try {
        const response = await fetch("/api/projects");
        const projects = await response.json();

        container.innerHTML = "";
        projects.forEach(proj => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");

            projectCard.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}">
        <h3>${proj.title}</h3>
        <p class="short-desc">${proj.shortDescription}</p>
        <button class="details-btn">Detalii</button>
        <div class="long-desc hidden">${proj.longDescription}</div>
      `;

            container.appendChild(projectCard);
        });

        document.querySelectorAll(".details-btn").forEach(btn => {
            btn.addEventListener("click", e => {
                const card = e.target.closest(".project-card");
                const desc = card.querySelector(".long-desc");
                desc.classList.toggle("hidden");
            });
        });

    } catch (error) {
        console.error("Eroare la încărcarea proiectelor:", error);
        container.innerHTML = "<p>Eroare la încărcarea proiectelor.</p>";
    }
}
