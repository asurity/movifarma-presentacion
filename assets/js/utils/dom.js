/**
 * Helpers para manipulación del DOM
 * Principio: DRY - Funciones reutilizables
 */

/**
 * Actualizar texto de un elemento por ID
 * @param {string} id - ID del elemento
 * @param {string} value - Nuevo valor
 * @returns {boolean} true si tuvo éxito
 */
export const updateElement = (id, value) => {
    const el = document.getElementById(id);
    if (el) {
        el.innerText = value;
        return true;
    }
    return false;
};

/**
 * Obtener elemento por ID de forma segura
 * @param {string} id - ID del elemento
 * @returns {HTMLElement|null}
 */
export const getElement = (id) => {
    return document.getElementById(id);
};

/**
 * Agregar clase a un elemento
 * @param {string} id - ID del elemento
 * @param {string} className - Nombre de la clase
 * @returns {boolean}
 */
export const addClass = (id, className) => {
    const el = getElement(id);
    if (el) {
        el.classList.add(className);
        return true;
    }
    return false;
};

/**
 * Remover clase de un elemento
 * @param {string} id - ID del elemento
 * @param {string} className - Nombre de la clase
 * @returns {boolean}
 */
export const removeClass = (id, className) => {
    const el = getElement(id);
    if (el) {
        el.classList.remove(className);
        return true;
    }
    return false;
};

/**
 * Verificar si un elemento tiene una clase
 * @param {string} id - ID del elemento
 * @param {string} className - Nombre de la clase
 * @returns {boolean}
 */
export const hasClass = (id, className) => {
    const el = getElement(id);
    return el ? el.classList.contains(className) : false;
};
