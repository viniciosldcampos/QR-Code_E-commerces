const mainPrompt = [
{
    name: "select",
    description: "Escolha a ferramenta (1 - QRCODE) ou (2 - PASSWORD)",
    pattern: /^[1-2]+$/,
    message: "Escolha apenas entre 1 e 2",
    required: true,
},
];

export default mainPrompt;

// Esse arquivo será de todas as configurações do prompt.

// Essa constante mainPrompt é um objeto de configuração do prompt.

//O pattern força o usuário a escolher ou a opção 1 ou 2.

//O required mostra que é obrigatório.