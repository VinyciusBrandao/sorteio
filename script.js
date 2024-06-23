// Definindo os nomes dos colaboradores e dos postos de trabalho
const colaboradores = ["Vinycius", "Jadson", "Gilson", "Fernando", "Fabrício", "Anderson", "Tony"];
const postosTrabalho = ["Biometria", "Baliza", "Baliza", "4&5", "4&5", "Moto", "Garagem"];


let numCliques = 0;

// Função para sortear os postos de trabalho com um tempo de espera de 1 segundo
function sortearPostos() {
    // Embaralha os colaboradores
    const colaboradoresEmbaralhados = colaboradores.sort(() => Math.random() - 0.5);

    // Limpa a lista de postos de trabalho
    const postosTrabalhoElement = document.getElementById("postosTrabalho");
    postosTrabalhoElement.innerHTML = "";
    
    //Exibe a data e a hora do sorteio
    const dataHoraSorteio = new Date().toLocaleString();
    const dataHoraElement = document.getElementById("dataHoraSorteio");
    dataHoraElement.textContent = `Data e hora do sorteio: ${dataHoraSorteio}`;

    // Exibe um texto de carregamento
    postosTrabalhoElement.textContent = "🎲 Sorteando...";

    // Incrementa o número de cliques
    numCliques++;

    // Exibe o número de cliques
    const numCliquesElement = document.getElementById("numCliques");
    numCliquesElement.textContent = `Número de Sorteios: ${numCliques}`;

    // Espera 1 segundo antes de exibir o resultado do sorteio
    setTimeout(function() {
        // Limpa o texto de carregamento
        postosTrabalhoElement.textContent = "";

        // Distribui os colaboradores nos postos de trabalho
        for (let i = 0; i < postosTrabalho.length; i++) {
            const posto = colaboradoresEmbaralhados[i];
            const postoLi = document.createElement("li");
            postoLi.textContent = `${postosTrabalho[i]}: ${posto}`;
            postosTrabalhoElement.appendChild(postoLi);
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}

// Adiciona o evento de clique ao botão de sorteio
const sortearBtn = document.getElementById("sortearBtn");
sortearBtn.addEventListener("click", sortearPostos);

// Realiza o primeiro sorteio ao carregar a página



