async function carregarProjetos() {

    try {

        const resposta = await fetch("./projetos.json");

        const projetos = await resposta.json();

        const container = document.getElementById("container");

        projetos.forEach(projeto => {

            const card = document.createElement("div");

            card.classList.add("card");

            card.innerHTML = `
                <a href="${projeto.link}" target="_blank">
                    ${projeto.nome}
                </a>

                <div class="tag">
                    ${projeto.tag || "Projeto"}
                </div>
            `;

            container.appendChild(card);

        });

    } catch (erro) {

        console.error("Erro ao carregar JSON:", erro);

        document.getElementById("container").innerHTML = `
            <p style="color:red;">
                Erro ao carregar projetos.json
            </p>
        `;
    }

}

carregarProjetos();
