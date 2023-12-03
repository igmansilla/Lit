export function getOpciones(url, signal) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((data) => data.json())
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}
