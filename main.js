function calculadoraIva(){
    let bucle = true;
    
    while(bucle){
        
        let valor =prompt("Ingrese el monto de su compra o escriba 'fin' para finalizar el programa").toUpperCase()
        
        
        if( valor > 0){

        alert (`El valor sin IVA es: ${100*valor/122}`)
        }
        else if (valor!= "FIN"){
            alert ("El valor debe ser un numero mayor a 0")
            }

        else if(valor = "FIN"){
        bucle = false
        alert("El programa finalizo")
        }

       
    }
}


console.log(calculadoraIva())

