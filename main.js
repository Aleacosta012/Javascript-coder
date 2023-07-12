


function calculadoraIva(){
    let valor = prompt("Ingrese el monto de su compra")

    if( valor > 0){

    alert (`El valor sin IVA es: ${100*valor/122}`)
    }
    
    else{
        alert ("El valor debe ser un numero mayor a 0")
    }
}

console.log(calculadoraIva())

