//requireds
const fs = require('fs');

let listarTabla= async (base, limite) =>{

    if(!Number(base) || !Number(limite) ){
        throw new Error(`la base o el limite no es un número`);
    }

    for(let i=1; i<= limite; i++)
    {
        console.log(`${base} x ${i} = ${base*i}`);
    }
}



let getMultiplicar= async (base, limite)=>{

    let respuesta="";
    

    if(!Number(base) || !Number(limite) ){
        throw new Error(`la base o el limite no es un número`);
    }


    let data="";
    
    for(let i=1 ; i<=limite; i++){
        data += `${base} * ${i} = ${base*i} \n`;
    }
    
    fs.writeFile(`tabla del ${base}.txt`, data, (err) => {
        if (err) throw Error(err);
        
        console.log(`la tabla del ${base}.txt fue creada`);
        
    });

    

};

module.exports={
    getMultiplicar: getMultiplicar,
    listarTabla: listarTabla
}