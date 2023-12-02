export function getOpciones(url, signal) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => resolve(data.data))
      .catch((err) => reject(err));
  });
}
