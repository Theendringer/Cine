
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
        "nome" : agendamentoNome,
        "idade" : agendamentoIdade,
        "filme" : agendamentoFilme
    }


    fetch("banco.json", {
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



function agendarPessoa(){
  const agendamentoPessoa = {
    "nome": document.getElementById("agendamentoNome").value,
    "idade": document.getElementById("agendamentoIdade").value,
    "filme": document.getElementById("agendamentoFilme").value
  }

  fetch("banco.json", {method: 'post', body: agendamentoPessoa}).then(r =>{
    console.log(agendamentoPessoa)

    alert("DEU CERTO KRLLL!!!!")
  })
}

function exibirSalas(){
  const dados = fetch("banco.json")
  const lista = document.getElementById("listaSalas")
  lista.innerHTML = " "

  dados.then(d => {
    resp = d.json()
    resp.then(r => {
      r.forEach(a => {

        lista.innerHTML += `<li>${a}</li>`
        
      });
    })
  } )
}