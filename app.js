const { getMultiplicar, listarTabla } = require("./multiplicar/multiplicar.js");

const argv= require("./config/yargs.js").argv;


let comando= argv._[0];


let getInfromacion= async (base, limite)=>{

  let multiplicacion= await getMultiplicar(base, limite); //await espera una respuesta de la funcion, pero que sea satisfactoria
    
  return "ya puede revisar el archivo";
  
}

let printInformacion= async (base, limite) =>{

  let respuesta= await listarTabla(base, limite);

  return `\n tabla del ${base} hasta el ${limite}`;

}

switch (comando){

  case "listar":
      printInformacion(argv.base, argv.limite)
      .then((mensaje) => console.log(mensaje))
      .catch((error) => console.log(error));
    break;
  
  case "crear":
      getInfromacion(argv.base, argv.limite)
      .then( (mensaje) => console.log(mensaje))
      .catch( (erro) => console.log(erro));
    break;
  
  default:
    console.log("este comando no es reconocido");

}





