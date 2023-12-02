/**
*
* La funcion evalúa si existe otro codigo para mostrar en el selector y si es así los busca en el extraData y lo trimea
* @params Objeto con las propiedades value y codigo
* @return {String} codigo
*/
function setCodigo({...props}) {
	return ((props.codigo != "codigo" && props.value?.extraData) && props.value?.extraData[props.codigo].toString().trim()) || props.value?.codigo
}

function generateUniqueID() {
    const timestamp = new Date().getTime().toString(16); // Valor de tiempo actual en hexadecimal
    const randomSuffix = Math.random().toString(16).substr(2, 8); // Sufijo aleatorio
    const uniqueID = timestamp + randomSuffix;
    return uniqueID;
  }

export { setCodigo, generateUniqueID } 