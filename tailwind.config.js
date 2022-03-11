module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cor-1': '#00397d',
                'cor-2': '#a4cc37 ',
                'cor-3': '#09173B',
                'cor-4': '#638016',

            },

            fontFamily: {
                roboto: "'Roboto', sans-serif "
            },
            width: {

            },
            margin: {
                '30%': '30%',
                '20%': '20%',
            },
            backgroundImage: {
                'contato-banner': "url('./imagens/fale-conosco.jpg')",
                'img-aluno': "url('./imagens-alunos/bg-alunos.jpg')",
            },
        },
    },
    plugins: [],
}