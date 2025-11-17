const nodemailer = require('nodemailer');

// Configuração do transportador de e-mail
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Função para enviar e-mail de contato
async function enviarEmailContato(dados) {
  const { nome, email, telefone, assunto, mensagem } = dados;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Contato: ${assunto}`,
    html: `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Assunto:</strong> ${assunto}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${mensagem}</p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail enviado:', info.messageId);
    return { sucesso: true, messageId: info.messageId };
  } catch (erro) {
    console.error('Erro ao enviar e-mail:', erro);
    return { sucesso: false, erro: erro.message };
  }
}

module.exports = { enviarEmailContato };