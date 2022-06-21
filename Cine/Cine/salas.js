document.addEventListener("DOMContentLoaded", function(evt){
    document.getElementById("buscar").addEventListener("click", function(){
        const sala = document.getElementById("buscarFilme")
        console.log(sala.value)
        buscarSala(sala.value)
    })
})


const buscarSala = function(sala){
    listaSalas = document.getElementById("listaSalas")
    listaSalas.innerHTML = " "

    const uri = `https://central-atendimento-cliente.herokuapp.com/api/atendimento/id/${sala}`

    fetch(uri).then(r => r.json().then(r => {
        r.forEach(r1 => {
            listaSalas.innerHTML += `<li class="list-group-item">${r1.sala}</li>`
            
        });
    }))
}