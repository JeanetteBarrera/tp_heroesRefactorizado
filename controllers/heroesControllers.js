const fs = require("fs"); // requiero modulo nativo fs

const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8')); // guardo en la variable el archivo heroes.json parseado

module.exports = { // creo un modulo que luego exportare
   lista : (req, res)=> {  // metodo que retorna el archivo parseado
       res.send(heroes);
   },
   //metodo que devuelve info de el heroe solicitado por id
   detalle : (req, res) => {
       
       let heroe = heroes.find(heroe => heroe.id == req.params.id);
       
       if(heroe == undefined){
           return res.send("No se encontro heroe")
       }
       else{
           return res.send(`Hola mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
       }
   },
   // metodo que devuelve 
   detalleConBio : (req, res) =>{
        let heroe = heroes.find(heroe => heroe.id == req.params.id);

        if(heroe == undefined) {
            res.send(`No encontramos un heroe para mostrar su biografia`);
        }
        else{
            if(req.params.ok == "ok") {
                return res.send(`${heroe.nombre.toUpperCase()}: <br><br>${heroe.resenia}`);
            }else{
                return res.send(`${heroe.nombre.toUpperCase()}: <br><br>→ Lamento que no desees saber más de mi :(.`);
            }
        }
    }
}
