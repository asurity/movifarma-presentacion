/**
 * State Manager - Gestión centralizada del estado
 * Principio: Single Source of Truth
 */

class StateManager {
    constructor() {
        this.state = {
            currentSlide: 1,
            temperature: 5.0,
            speed: 65,
            isAlarmActive: false,
            isDashboardActive: false
        };
        this.listeners = {};
    }

    /**
     * Obtener el estado actual
     * @returns {Object} Estado completo
     */
    getState() {
        return { ...this.state };
    }

    /**
     * Actualizar el estado (inmutable)
     * @param {Object} updates - Propiedades a actualizar
     */
    setState(updates) {
        const oldState = { ...this.state };
        this.state = { ...this.state, ...updates };
        
        // Notificar a los listeners de cambios
        Object.keys(updates).forEach(key => {
            if (this.listeners[key]) {
                this.listeners[key].forEach(callback => {
                    callback(this.state[key], oldState[key]);
                });
            }
        });
    }

    /**
     * Suscribirse a cambios de una propiedad
     * @param {string} property - Propiedad a observar
     * @param {Function} callback - Función a ejecutar en cambio
     */
    subscribe(property, callback) {
        if (!this.listeners[property]) {
            this.listeners[property] = [];
        }
        this.listeners[property].push(callback);
    }

    /**
     * Obtener valor de una propiedad específica
     * @param {string} property - Nombre de la propiedad
     * @returns {*} Valor de la propiedad
     */
    get(property) {
        return this.state[property];
    }
}

export default StateManager;
