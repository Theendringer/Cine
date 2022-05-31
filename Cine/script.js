
function exibirNome(){

    listaSala = document.getElementById("list")
    listaSala.innerHTML = ""
    
    const uri = `https://central-atendimento-cliente.herokuapp.com/api/atendimentos/dia/`
    fetch(uri).then(r => r.json().then(r => {

             console.log(r)
             listaSala.innerHTML += `<li class="list-group-item">${r.numero_atendimento}${r.sufixo_atendimento}</li>`

    }))

}