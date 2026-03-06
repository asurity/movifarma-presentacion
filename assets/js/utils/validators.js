/**
 * Validadores de datos
 * Principio: DRY - Validaciones reutilizables
 */

import CONFIG from '../core/config.js';

/**
 * Verificar si la temperatura está en rango seguro
 * @param {number} temp - Temperatura a validar
 * @returns {boolean}
 */
export const isTemperatureInRange = (temp) => {
    return temp >= CONFIG.TEMPERATURE.MIN_SAFE && 
           temp <= CONFIG.TEMPERATURE.MAX_SAFE;
};

/**
 * Verificar si la temperatura es crítica
 * @param {number} temp - Temperatura a validar
 * @returns {boolean}
 */
export const isCriticalTemp = (temp) => {
    return temp < CONFIG.TEMPERATURE.MIN_SAFE || 
           temp > CONFIG.TEMPERATURE.MAX_SAFE;
};

/**
 * Validar número de slide
 * @param {number} slideNumber - Número de slide
 * @returns {boolean}
 */
export const isValidSlideNumber = (slideNumber) => {
    return slideNumber >= 1 && slideNumber <= CONFIG.SLIDES.TOTAL;
};

/**
 * Validar que un elemento existe en el DOM
 * @param {string} id - ID del elemento
 * @returns {boolean}
 */
export const elementExists = (id) => {
    return document.getElementById(id) !== null;
};
