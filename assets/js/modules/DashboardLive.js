/**
 * DashboardLive - Simulación de datos en tiempo real
 * Responsabilidad: Solo actualizar datos del dashboard
 * Principio: Single Responsibility Principle (SRP)
 */

import CONFIG from '../core/config.js';
import { formatTemp, formatTime } from '../utils/formatters.js';
import { updateElement } from '../utils/dom.js';

class DashboardLive {
    /**
     * @param {StateManager} stateManager - Gestor de estado
     */
    constructor(stateManager) {
        this.stateManager = stateManager;
        this.intervalId = null;
        this.updateInterval = CONFIG.TEMPERATURE.UPDATE_INTERVAL;
    }

    /**
     * Iniciar simulación del dashboard
     */
    start() {
        if (this.intervalId) {
            this.stop(); // Evitar múltiples intervals
        }

        this.intervalId = setInterval(() => {
            this.updateTime();
            this.updateTemperature();
        }, this.updateInterval);
    }

    /**
     * Detener simulación
     */
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    /**
     * Actualizar reloj en tiempo real
     * @private
     */
    updateTime() {
        const now = new Date();
        updateElement(CONFIG.ELEMENTS.LIVE_TIME, formatTime(now));
    }

    /**
     * Actualizar temperatura simulada
     * @private
     */
    updateTemperature() {
        const isAlarmActive = this.stateManager.get('isAlarmActive');
        
        // No actualizar si hay alarma activa
        if (isAlarmActive) return;

        const tempEl = document.getElementById(CONFIG.ELEMENTS.VAL_TEMP);
        if (!tempEl) return;

        const variance = CONFIG.TEMPERATURE.VARIANCE;
        const variation = (Math.random() * variance - variance / 2);
        let currentTemp = parseFloat(tempEl.innerText);
        let newTemp = (currentTemp + variation).toFixed(1);

        // Mantener en rango visual realista
        if (newTemp > 5.5) newTemp = 5.0;
        if (newTemp < 4.5) newTemp = 5.0;

        updateElement(CONFIG.ELEMENTS.VAL_TEMP, formatTemp(parseFloat(newTemp)));
        this.stateManager.setState({ temperature: parseFloat(newTemp) });
    }

    /**
     * Verificar si el dashboard está activo
     * @returns {boolean}
     */
    isActive() {
        return this.intervalId !== null;
    }
}

export default DashboardLive;
