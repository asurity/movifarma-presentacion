/**
 * Aplicación Principal - Entry Point
 * Patrón: Facade - Orquesta todos los módulos
 * Principio: Dependency Inversion - Inyección de dependencias
 */

import CONFIG from './core/config.js';
import EventBus from './core/EventBus.js';
import StateManager from './core/StateManager.js';
import SlideManager from './modules/SlideManager.js';
import Navigation from './modules/Navigation.js';
import DashboardLive from './modules/DashboardLive.js';
import AlarmSystem from './modules/AlarmSystem.js';

/**
 * Clase principal de la aplicación
 * Patrón Facade: Simplifica la inicialización
 */
class App {
    constructor() {
        // Core
        this.eventBus = new EventBus();
        this.stateManager = new StateManager();

        // Módulos con inyección de dependencias
        this.slideManager = new SlideManager(this.stateManager, this.eventBus);
        this.navigation = new Navigation(this.slideManager);
        this.dashboardLive = new DashboardLive(this.stateManager);
        this.alarmSystem = new AlarmSystem(this.stateManager, this.eventBus);

        this.setupEventListeners();
    }

    /**
     * Configurar listeners de eventos
     * @private
     */
    setupEventListeners() {
        // Cuando cambia el slide, gestionar dashboard
        this.eventBus.on('slideChanged', (slideNumber) => {
            this.handleSlideChange(slideNumber);
        });

        // Cuando se dispara alarma, detener dashboard
        this.eventBus.on('alarmTriggered', () => {
            this.dashboardLive.stop();
        });

        // Cleanup al cerrar ventana
        window.addEventListener('beforeunload', () => {
            this.cleanup();
        });
    }

    /**
     * Manejar cambio de slide
     * @param {number} slideNumber - Número del nuevo slide
     * @private
     */
    handleSlideChange(slideNumber) {
        // Dashboard deshabilitado en esta versión
        // Funcionalidad reservada para futura implementación con monitoreo en tiempo real
        this.stateManager.setState({ isDashboardActive: false, currentSlide: slideNumber });
    }

    /**
     * Inicializar la aplicación
     */
    init() {
        console.log('🚀 Inicializando aplicación...');
        
        // Inicializar módulos
        this.slideManager.init();
        this.navigation.attachEvents();

        // Dashboard no activado en esta versión
        // La arquitectura está preparada para implementación futura

        // Exponer funciones globales para onclick inline (temporal)
        this.exposeGlobalFunctions();

        console.log('✅ Aplicación inicializada correctamente');
    }

    /**
     * Exponer funciones necesarias para onclick inline
     * TODO: Migrar a event listeners en Navigation
     * @private
     */
    exposeGlobalFunctions() {
        window.triggerAlarm = () => this.alarmSystem.triggerThermalExcursion();
        window.nextSlide = () => this.slideManager.nextSlide();
        window.prevSlide = () => this.slideManager.prevSlide();
    }

    /**
     * Limpiar recursos al cerrar
     * @private
     */
    cleanup() {
        this.dashboardLive.stop();
        console.log('🧹 Recursos limpiados');
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const app = new App();
    app.init();
});

export default App;
