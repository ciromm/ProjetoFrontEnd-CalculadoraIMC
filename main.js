function calculadoraIMC() {
    const form = document.querySelector('.form');
    const resultados = document.querySelector('.resultado');

    function dadosIMC(evento) {
        evento.preventDefault();

        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const contaIMC = (Number(peso.value) / Number(altura.value) ** Number(altura.value)).toFixed(2);
        console.log(contaIMC);

        if (!altura.value && !peso.value) {
            resultados.innerHTML = `<p>Coloque seu Peso e Altura para calcular!</p>`
        }
        else if (!altura.value) {
            resultados.innerHTML = `<p>Altura inválida.</p>`
        }
        else if (!peso.value) {
            resultados.innerHTML = `<p>Peso inválido.</p>`

        }
        else if (contaIMC <= 18.5) {
            resultados.innerHTML = `<p>Seu IMC é ${contaIMC} (Você está abaixo do peso).</p>`

        }
        else if (contaIMC >= 18.5 && contaIMC <= 24.9) {
            resultados.innerHTML = `<p>Seu IMC é ${contaIMC} (Você está no peso ideal).</p>`
        }
        else if (contaIMC >= 25 && contaIMC <= 29.9) {
            resultados.innerHTML = `<p>Seu IMC é ${contaIMC} (Você está com sobrepeso).</p>`
        }
        else if (contaIMC >= 30 && contaIMC <= 34.9) {
            resultados.innerHTML = `<p>Seu IMC é ${contaIMC} (Você está com obesidade grau 1).</p>`
        }
        else if (contaIMC >= 35 && contaIMC <= 39.9) {
            resultados.innerHTML = `<p>Seu IMC é ${contaIMC} (Você está com obesidade grau 2).</p>`
        }
        else if (contaIMC > 40) {
            resultados.innerHTML = `<p>Você está com obesidade grau 3</p>`
        }
    }
    form.addEventListener('submit', dadosIMC); //
}
calculadoraIMC();
