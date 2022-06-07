
function exibirNome(){

    listaSala = document.getElementById("list")
    listaSala.innerHTML = ""
    
    const uri = `https://central-atendimento-cliente.herokuapp.com/api/atendimentos/dia/`
    fetch(uri).then(r => r.json().then(r => {

    }))

}

function agendamento(){
    const agendamentoNome = document.getElementById("agendamentoNome").value
    const agendamentoIdade = document.getElementById("agendamentoIdade").value
    const agendamentoFilme = document.getElementById("agendamentoFilme").value
    console.log(agendamentoNome)
    console.log(agendamentoIdade)
    console.log(agendamentoFilme)

    body = {
        "name" : agendamentoNome,
        "idade" : agendamentoIdade,
        "filme" : agendamentoFilme
    }


    fetch("https://backefront.com.br/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify()
})
}

function programacao(){
    const filmeNome = document.getElementById("filmeNome").value
    const filmeClass = document.getElementById("filmeClass").value
    const filmeCapacidade = document.getElementById("filmeCapacidade").value
    console.log(filmeNome)
    console.log(filmeClass)
    console.log(filmeCapacidade)

    body = {
        "filmeName" : filmeNome,
        "class" : filmeClass,
        "capacidade" : filmeCapacidade
    }


    fetch("https://backefront.com.br/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify()
})
}