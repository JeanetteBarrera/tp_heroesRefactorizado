module.exports = { // modulo a exportar 
    index : (req, res) => {
        res.send('​Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.')
    },
    creditos : (req, res)=> { 
        res.send(`Integrante del grupo 1 : <br>Autora: Jeanette Garcia Barrera`);
    }
}