// async function Logar(){
//     let usuarios = await fetch("Usuario.json").then(data => {return data.json()}).then(json => {
//         let Usuarios = Object.getOwnPropertyNames(usuarios);
//         Usuarios.forEach(usuario => {
//             let Nome = document.getElementById("NomeUsuario").value
//             let Senhua = document.getElementById("SenhaUsuario").value
//             if (usuario.nome == Nome) {
//                 console.log("confirmado")
//             }
//             else{
//                 console.log("Negado")
//             }
//         });
//     })
// }

let divUsuarios = document.querySelector("#usuarios")

fetch("dados.json").then((response) => {
        response.json().then((usuarios) => {
            console.log(usuarios);
        })
})