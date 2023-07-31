function calculadoraIva(){
    let bucleIva = true;
    let buclePais=true
    let array =  [{pais: "uruguay", iva: 122},
                 {pais: "argentina", iva: 121},
                 {pais: "chile", iva: 119}];
    
    while(buclePais){
    let paisIngr= prompt("Ingrese su país:").toLowerCase()
    
    let iva;
    
    let paisEncontrado= array.find((el)=> el.pais==paisIngr)

    if (paisEncontrado) {
        iva = paisEncontrado.iva
        buclePais=false
      } else {
        alert("Ese pais no esta disponible");
      }
    }  

    while(bucleIva){


        let valor =prompt("Ingrese el monto de su compra o escriba 'fin' para finalizar el programa").toUpperCase()
        
        
        if( valor > 0){

        alert (`El valor sin IVA es: ${100*valor/paisEncontrado.iva}`)
        }
        else if (valor!= "FIN"){
            alert ("El valor debe ser un número mayor a 0")
            }

        else if(valor = "FIN"){
        bucleIva = false
        alert("El programa finalizó")
        }

       
    }
}

console.log(calculadoraIva())

