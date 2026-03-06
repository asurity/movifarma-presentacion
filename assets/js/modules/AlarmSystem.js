/**
 * AlarmSystem - Sistema de alarmas y notificaciones
 * Responsabilidad: Solo manejar alarmas térmicas
 * Principio: Single Responsibility Principle (SRP)
 */

import CONFIG from '../core/config.js';

class AlarmSystem {
    /**
     * @param {StateManager} stateManager - Gestor de estado
     * @param {EventBus} eventBus - Bus de eventos
     */
    constructor(stateManager, eventBus) {
        this.stateManager = stateManager;
        this.eventBus = eventBus;
    }

    /**
     * Disparar alarma de excursión térmica
     */
    triggerThermalExcursion() {
        const tempEl = document.getElementById(CONFIG.ELEMENTS.VAL_TEMP);
        const panel = document.getElementById(CONFIG.ELEMENTS.PANEL_TEMP);

        if (!tempEl || !panel) return;

        // Actualizar UI
        tempEl.classList.remove('text-ok');
        tempEl.classList.add('text-alert');
        tempEl.innerText = CONFIG.TEMPERATURE.CRITICAL_THRESHOLD.toFixed(1) + '°C';
        
        panel.style.borderLeftColor = 'var(--alert)';
        panel.setAttribute('aria-live', 'assertive');

        // Actualizar estado
        this.stateManager.setState({ 
            isAlarmActive: true,
            temperature: CONFIG.TEMPERATURE.CRITICAL_THRESHOLD
        });

        // Emitir evento
        this.eventBus.emit('alarmTriggered', {
            type: 'thermal',
            temperature: CONFIG.TEMPERATURE.CRITICAL_THRESHOLD
        });

        // Notificar usuario
        setTimeout(() => {
            this.notifyUser('🚨 ALERTA DE EXCURSIÓN: TEMPERATURA CRÍTICA DETECTADA');
            panel.setAttribute('aria-live', 'polite');
        }, 300);
    }

    /**
     * Resetear alarma al estado normal
     */
    resetAlarm() {
        const tempEl = document.getElementById(CONFIG.ELEMENTS.VAL_TEMP);
        const panel = document.getElementById(CONFIG.ELEMENTS.PANEL_TEMP);

        if (!tempEl || !panel) return;

        tempEl.classList.remove('text-alert');
        tempEl.classList.add('text-ok');
        tempEl.innerText = CONFIG.TEMPERATURE.DEFAULT_VALUE.toFixed(1) + '°C';
        
        panel.style.borderLeftColor = 'var(--success)';

        this.stateManager.setState({ 
            isAlarmActive: false,
            temperature: CONFIG.TEMPERATURE.DEFAULT_VALUE
        });

        this.eventBus.emit('alarmReset', {});
    }

    /**
     * Notificar al usuario
     * @param {string} message - Mensaje a mostrar
     * @private
     */
    notifyUser(message) {
        alert(message);
        // En producción: usar toast notifications modernas
    }
}

export default AlarmSystem;
