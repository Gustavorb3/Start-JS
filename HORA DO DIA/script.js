//script.js
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}:00 Horas.`
    
    if (hora >=0 && hora <12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#2e1d08'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#edb063'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#7a5676'
    }
}