module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'darkslateblue': '#00397d',
                'yellowgreen': '#a4cc37 ',
                'light-g-yellow': '#e6f4c1',
                'locura43': '#638016',
                'locura': '#966C05',
                'golden': '#09173B',
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