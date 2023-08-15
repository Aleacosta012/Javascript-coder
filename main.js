/*function calculadoraIva(){
    let bucleIva = true;
    let buclePais=true
    let array =  [{pais: "uruguay", iva: 122},
                 {pais: "argentina", iva: 121},
                 {pais: "chile", iva: 119}];
    let paisEncontrado;
    while(buclePais){
    let paisIngr= prompt("Ingrese su país:").toLowerCase()
    
    let iva;
    
    paisEncontrado= array.find((el)=> el.pais==paisIngr)

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

console.log(calculadoraIva())*/




function calculadoraIva(){
 
  
  let iva;
 
  
  let uruguay = document.getElementById("uruguay")
  let argentina = document.getElementById("argentina")
  let chile = document.getElementById("chile")
  
  let array =  [{pais: "uruguay", iva: 122},
                {pais: "argentina", iva: 121},
                {pais: "chile", iva: 119}];
  
  let paisSeleccionado
  paisSeleccionado = document.querySelector(".radio:checked")

   if (paisSeleccionado = uruguay){
    iva = 122
   }
   else if( paisSeleccionado = argentina){
    iva = 121
   }
   else if(paisSeleccionado = chile){
    iva = 119
   }


  let monto = document.getElementById("monto")
  let valor = monto.value
  let valSin

      if( monto.value > 0){

      alert (`El valor sin IVA es: ${100*valor/iva}`)
      valSin = 100*valor/iva
      }
      else{
          alert ("El valor debe ser un número mayor a 0")
          }
    localStorage.setItem("Monto sin IVA", valSin)
    localStorage.setItem("Monto con IVA", monto.value)
}

let boton =document.getElementById("boton")
let valAnt = document.getElementById("valAnt")

valAnt.addEventListener("click", ()=>{ alert("El valor con IVA anterior es = "+ localStorage.getItem("Monto con IVA") + " y el valor sin IVA es = "+ localStorage.getItem("Monto sin IVA"))})
boton.addEventListener("click", calculadoraIva)
