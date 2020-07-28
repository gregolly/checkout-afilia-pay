function cupomInput(){
    const buttonCupom = document.querySelectorAll('.cupom')
    const inputCupom = document.querySelectorAll('.cupom-desconto')
    const fecharCupom = document.querySelectorAll('.fechar-cupom')

    buttonCupom.forEach(el =>{
        el.addEventListener('click', () =>{
            inputCupom[0].classList.add('ativo')
            inputCupom[1].classList.add('ativo')
        })
    })

    fecharCupom.forEach(el =>{
        el.addEventListener('click', () =>{
            inputCupom[0].classList.remove('ativo')
            inputCupom[1].classList.remove('ativo')
        })
    })
}
cupomInput()

