// Toda função assíncrona no JavaScript retorna uma PROMISE !!

// Usando 'async' e 'await'
const getUserInfo = async (id) => {
    try{
        const response = await fetch(`https://jsonplaceholder.typecode.com/users/${id}`);
        const data = await response.json();
        return data;
    } catch(err){
        console.error(err);
    }
};

// Para pegar mais de um usuário por vez
(async () => {
    const usersData = await Promise.all([
        await getUserInfo(1),
        await getUserInfo(2),
        await getUserInfo(3)
    ]);
    console.log(usersData);
});


// Para mostrar um uníco usuário
(async () => {
    const userData = await getUserInfo(1);
    console.log(userData);
});


// Usando .then()
const getUserInfoThen = async (id) => {
    const data = fetch(`https://jsonplaceholder.typecode.com/users/${id}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            return data;
        })
}

getUserInfoThen(1);