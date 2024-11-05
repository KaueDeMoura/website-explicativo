// Manipulação de DOM
document.getElementById('exemplo-manipulacao').addEventListener('click', () => {
    const demoDiv = document.getElementById('demo-manipulacao');
    demoDiv.innerHTML = ''; // Limpar o conteúdo antes de adicionar novos elementos
    const newElement = document.createElement('p');
    newElement.textContent = 'Este parágrafo foi adicionado dinamicamente usando JavaScript!';
    demoDiv.appendChild(newElement);
});

// - Eventos
document.getElementById('exemplo-evento').addEventListener('click', () => {
    const eventoDiv = document.getElementById('evento-click');
    eventoDiv.innerHTML = 'Você clicou no botão!';
});

// Manipulação de Dados
document.getElementById('exemplo-dados').addEventListener('click', () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);
    document.getElementById('demo-dados').innerHTML = `Array original: ${numbers} <br> Array dobrado: ${doubled}`;
});

// Fetch API
document.getElementById('exemplo-fetch').addEventListener('click', async () => {
    const demoFetch = document.getElementById('demo-fetch');
    demoFetch.innerHTML = 'Carregando...';
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        demoFetch.innerHTML = `Título da tarefa: ${data.title}`;
    } catch (error) {
        demoFetch.innerHTML = 'Erro ao carregar dados.';
    }
});
