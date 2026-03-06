/**
 * Formateadores de datos
 * Principio: DRY - Lógica de formateo centralizada
 */

/**
 * Formatear temperatura con unidad
 * @param {number} temp - Temperatura en °C
 * @returns {string} Temperatura formateada
 */
export const formatTemp = (temp) => {
    return `${temp.toFixed(1)}°C`;
};

/**
 * Formatear tiempo en formato local
 * @param {Date} date - Objeto Date
 * @returns {string} Hora formateada
 */
export const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES');
};

/**
 * Formatear velocidad con unidad
 * @param {number} speed - Velocidad en km/h
 * @returns {string} Velocidad formateada
 */
export const formatSpeed = (speed) => {
    return `${speed} km/h`;
};

/**
 * Formatear número con decimales
 * @param {number} num - Número a formatear
 * @param {number} decimals - Cantidad de decimales
 * @returns {string}
 */
export const formatNumber = (num, decimals = 2) => {
    return num.toFixed(decimals);
};
