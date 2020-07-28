var card = new Card({
    form: document.querySelector('#form'),
    container: '.form-teste',

    formSelectors: {
            numberInput:'input[name="number"]',
            expiryInput:'input[name="expiry"]',
            cvcInput:'input[name="cvc"]',
            nameInput:'input[name="name"]'
          },

    width: 300, 
    formatting: true, 

    messages: {
        validDate: 'Data\nexpiração', 
        monthYear: 'mês/ano', 
    },

    placeholders: {
        number: '•••• •••• •••• ••••',
        name: 'Nome completo',
        expiry: 'Mês/Ano',
        cvc: '•••'
    },

    // masks: {
    //     cardNumber: '' 
    // },

    debug: false 
});