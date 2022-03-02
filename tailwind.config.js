module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'darkslateblue': '#00397d',
                'locuraaa': '#223f86',
                'yellowgreen': '#a4cc37 ',
                'light-g-yellow': '#e6f4c1',
                'black': '#1a1a1a',
                'golden': '#09173B',
            },

            fontFamily: {
                roboto: "'Roboto', sans-serif "
            },
            height: {
                '20vh': '20vh',
                '30vw': '30vw',
                'card-planos': '700px',
            },
            width: {

            },
            margin: {
                '30%': '30%',
                '20%': '20%',
            },
            backgroundImage: {
                'contato-banner': "url('../../imagens/fale-conosco.jpg')",
            },
        },
    },
    plugins: [],
}