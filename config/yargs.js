const argv= require("yargs")
                        //.command("comando", "ayuda al usuario", {objeto que recive la configuracion de flags})
                .command("listar", "imprime tabla", {
                  base:{
                    demand:true, //demand indica que sera un comando obliigatorio
                    alias:"b"
                  },
                  limite:{
                    alias:"l",
                    default:10
                  }
                })
                .command("crear", "imprime tabla en consola", {
                  base:{
                    demand:true, //demand indica que sera un comando obliigatorio
                    alias:"b"
                  },
                  limite:{
                    alias:"l",
                    default:10
                  }
                })
                .help()
                .argv;


module.exports={
    argv:argv
}