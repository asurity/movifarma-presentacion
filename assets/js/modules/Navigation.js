/**
 * Navigation - Gestión de eventos de navegación
 * Responsabilidad: Solo manejar eventos de usuario (teclado, botones)
 * Principio: Single Responsibility Principle (SRP)
 */

class Navigation {
    /**
     * @param {SlideManager} slideManager - Gestor de slides
     */
    constructor(slideManager) {
        this.slideManager = slideManager;
    }

    /**
     * Adjuntar todos los event listeners
     */
    attachEvents() {
        this.attachKeyboardEvents();
        this.attachButtonEvents();
    }

    /**
     * Eventos de teclado (flechas)
     * @private
     */
    attachKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                this.slideManager.nextSlide();
            } else if (e.key === 'ArrowLeft') {
                this.slideManager.prevSlide();
            }
        });
    }

    /**
     * Eventos de botones de navegación
     * @private
     */
    attachButtonEvents() {
        // Los botones usan onclick inline, pero podríamos migrarlos aquí
        window.nextSlide = () => this.slideManager.nextSlide();
        window.prevSlide = () => this.slideManager.prevSlide();
    }
}

export default Navigation;
