//Função que carrega os audios e salva na DOM
const carregaAudios = ($audio) =>{
    for(let i = 0; i < $audio.length; i++){
        $audio[i].src = `beats/0${(i + 1)}.wav`;
    }
}

//Função que executa cada efeito ACTIVE do css nas teclas pressionadas pelo teclado
const executaEfeito = ($elemento) => {
    $elemento.style.background = "#fff";
    $elemento.style.color = "#000";

    setTimeout((clerEffect) => {
        $elemento.style.background = "rgba(0, 0, 0, 0.8)";
        $elemento.style.color = "#fff";
    }, 200)
}

//Função que adiciona o evento click nas teclas e toca os sons de cada tecla
const addMusicOnButtons = ($notasMusicais, $audio) => {
    for (let i = 0; i < $notasMusicais.length; i++){
        $notasMusicais[i].addEventListener('click', playMusic => {
            console.log($audio[i]);
            executaEfeito($notasMusicais[i]);
            $audio[i].play();
        });
    }
}

//Função que executa os sons ao pressionar determinada tecla do teclado
const playTeclado = (key, $notasMusicais, $audio) => {
    if (key == 'a'){
        $audio[0].play();
        //Executando a função do efeito e mandando a nota que foi pressionada
        executaEfeito($notasMusicais[0]);
    }
    else if (key == 's'){
        $audio[1].play();
        //Executando a função do efeito e mandando a nota que foi pressionada
        executaEfeito($notasMusicais[1]);
    }
    else if (key == 'd'){
        $audio[2].play();
        //Executando a função do efeito e mandando a nota que foi pressionada
        executaEfeito($notasMusicais[2]);
    }
    else if (key == 'f'){
        $audio[3].play();
        //Executando a função do efeito e mandando a nota que foi pressionada
        executaEfeito($notasMusicais[3]);
    }
    else if (key == 'g'){
        $audio[4].play();
        //Executando a função do efeito e mandando a nota que foi pressionada
        executaEfeito($notasMusicais[4]);
    }
    else if (key == 'h'){
        $audio[5].play();
        //Executando a função do efeito e mandando a nota que foi pressionada
        executaEfeito($notasMusicais[5]);
    }
}

carregaAudios(document.getElementsByClassName('beatAudio'));
addMusicOnButtons(document.getElementsByClassName('notasMusicais'), document.getElementsByClassName('beatAudio'));
document.getElementById('telaEvent').addEventListener('keypress', (getTecla) => playTeclado(getTecla.key, document.getElementsByClassName('notasMusicais'), document.getElementsByClassName('beatAudio'), document.getElementsByClassName('notasMusicais'), document.getElementsByClassName('beatAudio')));