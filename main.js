var formulario = document.getElementById("formulario");
var tipo = document.getElementById("tipo");
var nombre = document.getElementById("nombre");
var clienteunico = document.getElementById("clienteunico");
var saldo = document.getElementById("saldo");
var opcionesTitular = document.getElementById("opcionesTitular");
var parrafo = document.getElementById("mensaje");
var boton = document.getElementById("generar");
var botonCopiar = document.getElementById("boton");

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
      parrafo.innerText = 'Banco Azteca \n \n Le pedimos de la manera más \n atenta le informe al cliente: \n ' + nombre.value + '\n que es de nuestro especial interés \ncontactarle, por lo que le pedimos \nporfavor atienda nuestra petición \ny se comunique o acuda a una de \nnuestras sucursales. \nDe ante mano agardecemos su \napoyo y esperamos tenga excelente \ndía. \nTel: 2291298074';
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
          parrafo.innerText = 'Departamento de Crédito \ny Cobranza de Banco  Azteca: \n \n Cliente: ' + nombre.value + '\n No. Cte.: ' + clienteunico.value + '\nSaldo: $' + saldo.value + '\n\nDebido a que usted está \nincumpliendo en sus pagos de \naucerdo a los términos delcontrato, \nnos vemos en la necesidad de \nrequerir su pago INMEDIATO, con \nel fin de no recurrir a la cláusula \n de vencimiento anticipado la cual \nimplicaría la liquidación del adeudo \nen una sola exhibición. \n\n Si su falta de pago persiste \n en los proximos días, pone en \nriesgo su crédito, su historial y \nsu buena reputación en Buró de \nCrédito Nacional, es por eso que le \n solicitamos que acuda a sucursal \ny liquide el atraso de su cuenta \npara que pueda continuar con los \nbeneficios de su crédito.';
        }else{
          parrafo.innerText = 'Departamento de Crédito \ny Cobranza de Banco  Azteca: \n \n Cliente: ' + nombre.value + '\n No. Cte.: ' + clienteunico.value + '\nSaldo: $' + saldo.value + '\n\nEstimado cliente le invitamos para que \npase a sucrusal a realizar el pago de su \ncrédito de la TARJETA ORO. \n\nTu crédito de la TARJETA ORO es revolvente, \nsi pagas tendrás más crédito disponible! \n\nRecuerda que la fecha de corte son los \ndías 5 y la fecha límite de pago son los \ndías 25 de cada mes.'
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