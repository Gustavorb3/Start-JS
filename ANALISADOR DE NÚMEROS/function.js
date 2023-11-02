let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores  = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n) {
    if (valores.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function handleKeyPress(event) {
    if (event.key == "Enter") {
        adicionar()
    }
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        for (let pos in valores) {
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]

            soma += valores[pos] // adiciona valores a soma
        }
        let media = soma / tot // realiza a média
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor é ${maior}.</p>`
        res.innerHTML += `<p> O menor valor é ${menor}.</p>`
        res.innerHTML += `<p> A média dos valores é ${media.toFixed(2)}.</p>` // arrendonda a média para 2 casas após a vírgula
    }
}

function limpar() {
    valores = [] // limpa lista de valores
    lista.innerHTML = '' // remove os elementos da lista no HTML
    res.innerHTML = '' // limpa o resultado
    num.value = '' // limpa o campo de entrada
    num.focus() // foco ao campo de entrada para que o usuário possa adicionar novos valores
}