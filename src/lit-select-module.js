function generateUniqueID() {
  const timestamp = new Date().getTime().toString(16); // Valor de tiempo actual en hexadecimal
  const randomSuffix = Math.random().toString(16).substr(2, 8); // Sufijo aleatorio
  const uniqueID = timestamp + randomSuffix;
  return uniqueID;
}

export { generateUniqueID };
