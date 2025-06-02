function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container') 
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
    <article class="cartao">
            <div class="cartao__conteudo">
                <h3>Programação</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>O que é Javascript?</p>
                </div>
                <div class="cartao__conteudo__resposta">
                 <p>JS é uma linguagem de programação.</p>
                </div>
            </div>
        </article>
        <article class="cartao">
            <div class="cartao__conteudo">
                <h3>Programação</h3>
                <div class="cartao__conteudo__pergunta">
                  <p>  O que é Javascript?</p>
                </div>
                <div class="cartao__conteudo__resposta">
                    <p>JS é uma linguagem de programação.</p>
                </div>
            </div>
        </article>
        `
        container.appendChild(cartao)
}