var formulario = document.getElementById("formulario");
var tipo = document.getElementById("tipo");
var nombre = document.getElementById("nombre");
var clienteunico = document.getElementById("clienteunico");
var saldo = document.getElementById("saldo");
var opcionesTitular = document.getElementById("opcionesTitular");
var parrafo = document.getElementById("mensaje");
var boton = document.getElementById("generar");
var botonCopiar = document.getElementById("boton");

//Mensajes

// Referencias
function refe(name){
    var mensaje;
    return mensaje = 'Hola buenos días! \n \nNuestro cliente: ' + name +', le ha puesto a usted como REFERENCIA, el día de hoy realizamos una visita domiciliaria para tratar un asunto relacionado con su crédito pero no pudimos contactarlo, nos gustaría que pudiera apoyarnos haciéndole llegar el mensaje de que estamos tratando de localizarlo de parte de Banco Azteca y si se puede comunicar a este número o acudir a una de las sucursales para atender el pendiente en su línea de crédito. De ante mano agradecemos su atención y su apoyo, que tenga usted excelente día!.';
}

// Credimax
function credito(name, cliente, saldo){
  var mensaje;
  return mensaje = 'Departamento de Crédito \ny Cobranza de Banco  Azteca: \n \n Cliente: ' + name + '\n No. Cte.: ' + cliente + '\nSaldo: $' + saldo + '\n\nDebido a que usted está \nincumpliendo en sus pagos de \naucerdo a los términos delcontrato, \nnos vemos en la necesidad de \nrequerir su pago INMEDIATO, con \nel fin de no recurrir a la cláusula \n de vencimiento anticipado la cual \nimplicaría la liquidación del adeudo \nen una sola exhibición. \n\n Si su falta de pago persiste \n en los proximos días, pone en \nriesgo su crédito, su historial y \nsu buena reputación en Buró de \nCrédito Nacional, es por eso que le \n solicitamos que acuda a sucursal \ny liquide el atraso de su cuenta \npara que pueda continuar con los \nbeneficios de su crédito.';
}

// Oro
function oro(name, cliente, saldo){
  var mensaje;
  return mensaje = 'Departamento de Crédito \ny Cobranza de Banco  Azteca: \n \n Cliente: ' + name + '\n No. Cte.: ' + cliente + '\nSaldo: $' + saldo + '\n\nEstimado cliente le invitamos para que \npase a sucrusal a realizar el pago de su \n TARJETA ORO. \n\nEl crédito de la TARJETA ORO es revolvente, \nsi pagas tendrás más crédito disponible! \n\nRecuerda que la fecha de corte son los \ndías 5 y la fecha límite de pago son los \ndías 25 de cada mes.';
}

function estadoInputs(){
  if (tipo.value == 'titular'){
    clienteunico.classList.remove('inactive');
    saldo.classList.remove('inactive');
    opcionesTitular.classList.remove('inactive');
  }else{
    clienteunico.classList.toggle('inactive');
    saldo.classList.toggle('inactive');
    opcionesTitular.classList.toggle('inactive');
  }
}

function mensaje (){

  if (nombre.value.trim() === '') {
    alert('Por favor ingrese el nombre');
    nombre.focus();
    return;
  } else{
    if(tipo.value == 'referencia'){
      parrafo.innerText = refe(nombre.value);
    }else{

      if (clienteunico.value.trim() === '') {
        alert('Por favor ingrese el CU');
        clienteunico.focus();
        return;
      } else if (saldo.value.trim() === '') {
        alert('Por favor ingrese el saldo');
        saldo.focus();
        return;
      } else{
        if (opcionesTitular.value == "credimax"){
          parrafo.innerText = credito(nombre.value, clienteunico.value, saldo.value);
        }else{
          parrafo.innerText = oro(nombre.value, clienteunico.value, saldo.value);
        }
      }
    }
    botonCopiar.classList.remove('inactive');
    formulario.classList.add('inactive');
  }
}

estadoInputs();

tipo.addEventListener(  "change", estadoInputs);

boton.addEventListener("click", mensaje);

function copiarAlPortapapeles() {
  //const texto = document.getElementById("texto").innerText;
  navigator.clipboard.writeText(parrafo.innerText)
    .then(() => {
      alert("¡El texto se ha copiado al portapapeles!");
    })
    .catch((error) => {
      console.error("Error al copiar al portapapeles: ", error);
    });
}