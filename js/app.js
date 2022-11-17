import { valida } from './validacao.js'

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    if (input.dataset.tipo === 'preco') {

        const args = {            
            allowNegative: false,                        
            prefix: 'R$',            
            fixed: true,
            fractionDigits: 2,
            decimalSeparator: ',',
            thousandsSeparator: '.',
            cursor: 'end'
          };

        SimpleMaskMoney.setMask(input, args);
    }

    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
}) 