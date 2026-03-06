/**
 * Configuración centralizada de la aplicación
 * Principio: DRY - Todos los valores hardcodeados se definen aquí
 */

export const CONFIG = {
    SLIDES: {
        TOTAL: 6,
        TRANSITION_DURATION: 600,
        INITIAL_SLIDE: 1
    },
    TEMPERATURE: {
        MIN_SAFE: 2.0,
        MAX_SAFE: 8.0,
        CRITICAL_THRESHOLD: 8.0,
        DEFAULT_VALUE: 5.0,
        UPDATE_INTERVAL: 1000,
        VARIANCE: 0.4
    },
    VEHICLE: {
        ID: 'FLOTA-042',
        DEFAULT_SPEED: 65
    },
    UI: {
        ANIMATION_TIMING: 'cubic-bezier(0.16, 1, 0.3, 1)',
        DASHBOARD_SLIDE_INDEX: null // Dashboard no implementado en esta versión
    },
    ELEMENTS: {
        LIVE_TIME: 'live-time',
        VAL_TEMP: 'val-temp',
        PANEL_TEMP: 'panel-temp'
    }
};

export default CONFIG;
