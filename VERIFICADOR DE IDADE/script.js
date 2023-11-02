function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res') 
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'macho uai'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'adolescente-masc.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else {
            genero = 'muie uai'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','criança-menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','adolescente-masc.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','mulher.png')
            } else {
                //idoso
                img.setAttribute('src','idoso-fem.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `o sexo é ${genero} e a idade é ${idade} anos sô`
        res.appendChild(img)
    }
}