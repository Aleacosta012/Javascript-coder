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


let paises = document.getElementById("paises")
fetch("paises.json")
 
.then((resp) =>resp.json())
.then((data) =>{
 console.log(data)

 data.map((item)=>{
  let div =document.createElement("div")
  div.className="flex-column"

  div.innerHTML=`
  <input type="radio" name="pais" id=${item.paisid} class="radio-checked">
  <label for=${item.paisid}> <img class="banderas" src="${item.img}"></img></label>
  <label class=${item.paisid} for=${item.paisid}>${item.pais}</label>
  
  `
  paises.appendChild(div)
 
  
   })

   
 }).catch(()=>{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Hubo un problema al cargar la pagina',
    footer:'<a href=main.html>Prueba recargando la pagina</a>'
  
  });
 })

 /*Esta parte de codigo, me quedo sin funcionar, cuando tenia los paises agregados en el html cargaban sin problema, al 
 agregarlos de forma dinamica, no me funciono mas */ 
const radioButtons = document.querySelectorAll("input[type='radio']");

radioButtons.forEach((b) => {
  b.addEventListener("change", function () {
    const buttonId = b.getAttribute("id");
    const label = document.querySelector(`label.${buttonId}`);
    if (this.checked) {
      label.classList.add("color");
    }

    const rest = document.querySelectorAll("input[type='radio']:not(:checked)")
    rest.forEach((b)=>{
      const buttonId = b.getAttribute("id");
      const label = document.querySelector(`label.${buttonId}`);
      label.classList.remove('color')
    })


  });
});
/*Aca finaliza la parte de codigo que no me funciona*/


function calculadoraIva() {
  let iva;
 
  let paisSeleccionado;
  paisSeleccionado = document.querySelector(`input[type='radio']:checked`);
  paisSeleccionado = paisSeleccionado.getAttribute("id");

let ivaMapping ={
  uruguay : 122,
  argentina:121,
  chile:119
}

iva =ivaMapping[paisSeleccionado]
  

  let monto = document.getElementById("monto");
  let valor = monto.value;
  let valSin;

  if (valor > 0) {
    Swal.fire(`El valor sin IVA es: ${(100 * valor) / iva}`);
    valSin = (100 * valor) / iva;
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El valor debe ser un numero mayor a 0',
    
    });
  }
  localStorage.setItem("Monto sin IVA", valSin);
  localStorage.setItem("Monto con IVA", valor);
}

document.get;
let boton = document.getElementById("boton");
let valAnt = document.getElementById("valAnt");
let form = document.getElementsByTagName("form");

form[0].addEventListener("submit", (e) => {
  e.preventDefault();
  calculadoraIva();
});

valAnt.addEventListener("click", () => {
  Swal.fire(
    "El valor con IVA anterior es = " +
      localStorage.getItem("Monto con IVA") +
      " y el valor sin IVA es = " +
      localStorage.getItem("Monto sin IVA")
  );
});
boton.addEventListener("click", calculadoraIva);
