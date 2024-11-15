// ASYNC / AWAIT
// A palavra chave 'async' indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.
// O 'await' irá indicar a promise que devemos esperar.
// Faz parte do ES8

async function puxarDados() {
    const dadosResponse = await fetch('./dados.json');
    const dadosJson = await dadosResponse.json();

    document.body.innerText = dadosJson.titulo;
};

puxarDados();


// THEN / ASYNC
// A diferença é uma sintaxe mais limpa

// THEN
function iniciarFetch() {
    fetch('./dados.json')
        .then((dadosResponse) => dadosResponse.json())
        .then((dadosJson) => {
            document.body.innerText = dadosJson.titulo;
        })
}
iniciarFetch()

// ASYNC
async function iniciarAsync() {
    const dadosResponse = await fetch('./dados.json');
    const dadosJson = await dadosResponse.json();
    document.body.innerText = dadosJson.titulo;
};
iniciarAsync();



// TRY / CATCH
// Para lidarmos com erros nas promises, podemos utilizar o 'try' e o 'catch' na função

async function puxarDados() {
    try {
        const dadosResponse = await fetch('./dados.json');
        const dadosJson = await dadosResponse.json();
        document.body.innerText = dadosJson.titulo;
    } catch (erro) {
        console.log(erro);
    };
}
puxarDados();



// Iniciar Fetch ao Mesmo Tempo
// Não precisamos esperar um 'fetch' para começarmos outro.
// Porém precisamos esperar a resposta resolvida do 'fetch' para transformar a response em 'json'.

async function iniciarAssyn() {
    const dadosResponse = fetch('./dados.json');
    const clientesResponse = fetch('./clientes.json');

    // ele espera o que está dentro da expressão () ocorrer primeiro.
    const dadosJson = await (await dadosResponse).json();
    const clientesJson = await (await clientesResponse).json();
}
iniciarAssyn();



// Promise
// O resultado da expressão à frente de 'await' tem que ser uma 'promise'.
// E o retorno do 'await' será sempre o resultado desta 'promise'.

async function asynPromise() {
    // Console irá esperar.
    await setTimeout(() => console.log('Depois de 1s'), 1000);
    console.log('acabou');
}
asynPromise();

async function iniciarAsync(){
    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });
    console.log('Depois de 1s');
};
iniciarAsync();