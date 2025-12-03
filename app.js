/**
 * Função principal que é chamada ao clicar no botão "Sortear".
 * Ela lê os valores dos inputs, gera números aleatórios únicos e os exibe na tela.
 */
function sortear() {
    // Obtém os valores dos campos de input do HTML e os converte para números inteiros.
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }

    // Cria um array para armazenar os números que serão sorteados.
    let sorteados = [];
    let numero;

    // Loop que executa 'quantidade' de vezes para sortear os números.
    for (let i = 0; i < quantidade; i++) {
        // Gera um número aleatório dentro do intervalo especificado [de, ate].
        numero = obterNumroAleatorio(de, ate);

        // Verifica se o número gerado já existe no array 'sorteados'.
        // Se já existir, gera um novo número até que seja um número único.
        while (sorteados.includes(numero)) {
            numero = obterNumroAleatorio(de, ate);
        }

        // Adiciona o número único sorteado ao final do array 'sorteados'.
        sorteados.push(numero);
    }

    // Seleciona o elemento no HTML onde o resultado será exibido.
    let resultado = document.getElementById('resultado');
    // Atualiza o conteúdo HTML para mostrar os números sorteados.
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    // Habilita o botão "Reiniciar" após o sorteio ser concluído.
    alterarStatusBotao();
}

/**
 * Gera e retorna um número inteiro aleatório dentro de um intervalo.
 * @param {number} min - O valor mínimo do intervalo (inclusivo).
 * @param {number} max - O valor máximo do intervalo (inclusivo).
 * @returns {number} Um número inteiro aleatório.
 */
function obterNumroAleatorio(min, max) {
    // Math.random() gera um número entre 0 (inclusivo) e 1 (exclusivo).
    // A fórmula ajusta esse número para o intervalo desejado [min, max].
    // Math.floor() arredonda o resultado para o número inteiro mais próximo (para baixo).
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Alterna a aparência e o estado (habilitado/desabilitado) do botão "Reiniciar".
 */
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    // Verifica se o botão está com a classe de desabilitado.
    if (botao.classList.contains('container__botao-desabilitado')) {
        // Se estiver desabilitado, remove a classe de desabilitado e adiciona a classe de habilitado.
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        // Se estiver habilitado, faz o inverso.
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

/**
 * Função chamada ao clicar no botão "Reiniciar".
 * Limpa os campos de input, reseta a exibição dos resultados e desabilita o botão "Reiniciar".
 */
function reiniciar() {
    // Limpa os valores dos campos de input.
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    // Restaura a mensagem inicial na área de resultados.
    document.getElementById('resultado').innerHTML = '                    <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    // Desabilita o botão "Reiniciar".
    alterarStatusBotao();
}