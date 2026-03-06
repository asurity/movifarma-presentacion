/**
 * SlideManager - Gestor de navegación de slides
 * Responsabilidad: Solo gestionar cambio entre slides
 * Principio: Single Responsibility Principle (SRP)
 */

import CONFIG from '../core/config.js';

class SlideManager {
    /**
     * @param {StateManager} stateManager - Gestor de estado
     * @param {EventBus} eventBus - Bus de eventos
     */
    constructor(stateManager, eventBus) {
        this.stateManager = stateManager;
        this.eventBus = eventBus;
        this.totalSlides = CONFIG.SLIDES.TOTAL;
    }

    /**
     * Inicializar el slide manager
     */
    init() {
        const initialSlide = CONFIG.SLIDES.INITIAL_SLIDE;
        this.stateManager.setState({ currentSlide: initialSlide });
        this.updateDOM();
    }

    /**
     * Ir al siguiente slide
     */
    nextSlide() {
        const current = this.stateManager.get('currentSlide');
        if (current < this.totalSlides) {
            this.goToSlide(current + 1);
        }
    }

    /**
     * Ir al slide anterior
     */
    prevSlide() {
        const current = this.stateManager.get('currentSlide');
        if (current > 1) {
            this.goToSlide(current - 1);
        }
    }

    /**
     * Ir a un slide específico
     * @param {number} slideNumber - Número del slide (1-indexed)
     */
    goToSlide(slideNumber) {
        if (slideNumber >= 1 && slideNumber <= this.totalSlides) {
            this.stateManager.setState({ currentSlide: slideNumber });
            this.updateDOM();
            this.eventBus.emit('slideChanged', slideNumber);
        }
    }

    /**
     * Obtener el slide actual
     * @returns {number} Número del slide actual
     */
    getCurrentSlide() {
        return this.stateManager.get('currentSlide');
    }

    /**
     * Actualizar el DOM con el slide activo
     * @private
     */
    updateDOM() {
        const current = this.getCurrentSlide();
        
        // Remover clases y atributos de todos
        document.querySelectorAll('.slide').forEach(slide => {
            slide.classList.remove('active');
            slide.removeAttribute('aria-current');
        });
        
        // Activar slide actual
        const currentSlide = document.getElementById(`slide${current}`);
        if (currentSlide) {
            currentSlide.classList.add('active');
            currentSlide.setAttribute('aria-current', 'slide');
        }
    }
}

export default SlideManager;
