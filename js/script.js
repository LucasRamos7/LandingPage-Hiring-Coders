const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    let data = {
        nome,
        email
    }

    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let cadastro = document.getElementById('content')

    let cadastrado = `<p>Muito obrigado por apoiar a Capistore!</p>
    <p>Em breve traremos ofertas incríveis para você!!!</p>
    `
    cadastro.className = 'reload-content';
    cadastro.innerHTML = cadastrado;
})