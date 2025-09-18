function valTel(tel) {
    if(tel == '') return false;

    if (tel.length != 11)
        return false;

    if (tel == "000000000" || 
        tel == "111111111" || 
        tel == "222222222" || 
        tel == "333333333" || 
        tel == "444444444" || 
        tel == "555555555" || 
        tel == "666666666" || 
        tel == "777777777" || 
        tel == "888888888" || 
        tel == "999999999")
        return false;
}
function valSenha(senhan) {
    if(senhan == '') return false;

    body('senha')
    .isLength({ min: 6, max: 20 }).withMessage('A senha deve conter de 6 a 20 caracteres')
    .custom((value, { req }) => {
      // Expressão regular para a validação
      const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,20}$/;
      if (!regex.test(value)) {
        throw new Error('A senha deve conter pelo menos um número, uma letra maiúscula e um caractere especial');
      }
      return true;
    })
}
function valCsenha(csenha) {
    if(csenha == '') return false;

    if(csenha !== senhan) return false;
}