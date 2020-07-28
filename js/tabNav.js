const jpCard = document.querySelector('.jp-card-container').style.transform = 'scale(1)'
function tabAll(){
    const cartaoCredito = document.querySelectorAll('.cartao-credito')
    const boleto = document.querySelectorAll('.boleto')
    const formCartao = document.querySelector('#cartao')
    const formBoleto = document.querySelector('#boleto')
    const boletoSpan = document.querySelector('.boleto-span')
    const card = document.querySelector('.wIcon')

    formCartao.classList.add('ativo')
    cartaoCredito[0].classList.add('bg-color')



    cartaoCredito.forEach(el =>{
        el.addEventListener('click', () =>{
            formCartao.classList.add('ativo')
            formBoleto.classList.remove('ativo')
            boleto[1].classList.remove('bg-color')
            cartaoCredito[0].classList.add('bg-color')
            boletoSpan.classList.remove('color-span')
        })
    })

    boleto.forEach(el =>{
        el.addEventListener('click', () =>{
            formBoleto.classList.add('ativo')
            formCartao.classList.remove('ativo')
            boleto[1].classList.add('bg-color')
            cartaoCredito[0].classList.remove('bg-color')
            boletoSpan.classList.add('color-span')
        })
    })
}
tabAll()
