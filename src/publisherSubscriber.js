/**
 * Clase PubSub para implementar el patrón de diseño de publicación/suscripción (pub/sub).
 */
class PubSub {
    /**
     * Crea una instancia de la clase PubSub.
     */
    constructor() {
      /**
       * Almacena los suscriptores para cada evento.
       * @type {Object}
       */
      this.subscribers = {};
    }
  
    /**
     * Suscribe una función de devolución de llamada a un evento específico.
     * @param {string} event - El nombre del evento al que suscribirse.
     * @param {Function} callback - La función de devolución de llamada que se llamará cuando se publique el evento.
     */
    subscribe(event, callback) {
      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }
      this.subscribers[event].push(callback);
    }
  
    /**
     * Publica un evento junto con los datos asociados.
     * @param {string} event - El nombre del evento a publicar.
     * @param {*} data - Los datos asociados al evento.
     * @param {string} id - Identificador opcional para validar.
     */
    publish(event, data) {
      if (!this.subscribers[event]) {
        return;
      }
      this.subscribers[event].forEach(callback => {
        callback(data);
      });
    }
    
    publishWithId(event, data, id) {
      if (!this.subscribers[event]) {
        return;
      }
      this.subscribers[event].forEach(callback => {
        callback(data, id);
      });
    }
  }
  
  
  export const pubsub = new PubSub();
  