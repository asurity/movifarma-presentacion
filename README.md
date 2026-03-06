# 🚛 Propuesta de Calificación OQ/PQ - Vehículos Movifarma

> Presentación profesional para la calificación de vehículos de transporte de medicamentos refrigerados

---

## 📋 Descripción del Proyecto

Presentación interactiva diseñada para proponer la **Calificación de Operación (OQ) y Desempeño (PQ)** de los vehículos **RPPW-23** y **PZWR-14** de la empresa **Movifarma**, dedicados al transporte de medicamentos refrigerados y con condiciones ambientales controladas.

### 🎯 Objetivo

Presentar una propuesta técnica completa que garantice el cumplimiento de las normativas del **ISP (Instituto de Salud Pública de Chile)**, específicamente:
- **Norma Técnica 147**: Buenas Prácticas de Distribución
- **Guía 1542**: Calificación de Equipos de Cadena de Frío
- **Guía 1543**: Calificación de Sistemas de Embalaje Pasivos

---

## 📊 Contenido de la Presentación

### Slide 1: Portada
- Título del proyecto
- Unidades a calificar (RPPW-23 y PZWR-14)
- Fecha de calificación: **Marzo 2026**

### Slide 2: Situación Actual - Escenario de Calificación
- **Zona Refrigerada (2°C a 8°C)**: Sistema activo con HVAC
- **Zona Ambiente (15°C a 25°C)**: Sistema pasivo con aislamiento
- Desafío identificado: Excursión de temperatura en zona ambiente
- Gráfico de monitoreo de temperatura ambiente

### Slide 3: Estrategia de Calificación y Justificación Técnica
1. **Enfoque en temperatura real del producto** (no del aire)
2. **Verificación mediante sistemas pasivos** (embalaje + aislantes)
3. **Calificación de zona refrigerada** con masa térmica
- Fundamentación en Guías 1542/1543

### Slide 4: Análisis Basado en el Riesgo
- Alineación con normativas (NT 147, Guías 1542/1543)
- Tolerancia de desviaciones de corta duración
- Conclusión: Sistema de transporte apto para propósito previsto

### Slide 5: Programa de Calificación OQ/PQ
Detalle completo de las fases:
1. **Fase Administrativa y de Cumplimiento**
   - Verificación de cierre IQ
   - Revisión de documentación operativa
   - Evaluación de rutas de despacho
   
2. **Metrología y Funcionalidad del Sistema**
   - Calibración de instrumentos
   - Prueba de puesta en marcha
   - Verificación de alarmas
   
3. **Caracterización Térmica y Pruebas de Estrés (OQ)**
   - Distribución térmica estática (24h)
   - Prueba de arranque y estabilización
   - Perfil térmico en ruta
   - Prueba de apertura de puertas
   - Simulación de corte energético
   
4. **Calificación de Desempeño en Ruta (PQ)**
   - Monitoreo con carga mínima
   - Monitoreo con carga máxima
   - Desafío estacional (verano/invierno)
   - Monitoreo de despacho real

### Slide 6: Valores para Ejecutar el Proceso
- **Costo**: 20 UF por vehículo
- **Plazo**: 16 al 18 de marzo 2026
- **Entregables**: Protocolo OQ, Informe OQ, documentación de respaldo

---

## 🏗️ Arquitectura Técnica

### Estructura del Proyecto

```
/Resultados Finales
├── index.html              # Presentación principal
├── logo.png / logo.svg     # Recursos gráficos
├── assets/
│   ├── css/               # Estilos modulares
│   │   ├── base/         # Variables, reset, tipografía
│   │   ├── components/   # Botones, cards, slides, dashboard
│   │   ├── layout/       # Backgrounds, grid
│   │   └── main.css      # Importador principal
│   ├── images/           # Imágenes de la presentación
│   │   └── Grafico Temperatura Ambiente.png
│   └── js/               # JavaScript modular (ES6)
│       ├── core/         # Configuración, EventBus, StateManager
│       ├── modules/      # SlideManager, Navigation, DashboardLive, AlarmSystem
│       ├── utils/        # DOM, formatters, validators
│       └── app.js        # Entry point
└── README.md             # Este archivo
```

### Tecnologías Utilizadas

- **HTML5** con semántica y accesibilidad (ARIA)
- **CSS3** modular con variables CSS
- **JavaScript ES6** con módulos nativos
- **Arquitectura SOLID** (principios de diseño de software)
- **Google Fonts**: Montserrat, Roboto Mono

### Principios de Diseño Aplicados

#### **SOLID**
1. **Single Responsibility**: Cada módulo tiene una única responsabilidad
2. **Open/Closed**: Módulos extensibles sin modificación
3. **Liskov Substitution**: Interfaces consistentes
4. **Interface Segregation**: Exposición mínima necesaria
5. **Dependency Inversion**: Inyección de dependencias

#### **DRY (Don't Repeat Yourself)**
- Configuración centralizada en `config.js`
- Utilidades reutilizables
- Variables CSS globales

#### **Separation of Concerns**
- CSS modular por responsabilidad
- JavaScript organizado en capas (core/modules/utils)

---

## 🚀 Uso

### Abrir la Presentación

1. Abrir `index.html` en un navegador moderno (Chrome, Firefox, Edge)
2. Navegar con:
   - Botones **"Anterior"** / **"Siguiente"**
   - Flechas del teclado: `←` / `→`

### Navegación

- Total de slides: **6**
- Transiciones suaves con animaciones CSS
- Diseño responsive (adaptable a diferentes tamaños de pantalla)

---

## 📱 Características

### ✅ Implementado

- ✅ 6 slides con contenido técnico completo
- ✅ Navegación fluida con teclado y botones
- ✅ Diseño glassmorphism moderno
- ✅ Efectos visuales (glow, grid animado)
- ✅ Accesibilidad (ARIA labels, skip navigation)
- ✅ Gráfico de temperatura ambiente
- ✅ Sistema de grid responsive
- ✅ Arquitectura modular escalable

### 🔮 Preparado para Futuro

- 🔮 Sistema de alarmas térmicas
- 🔮 Dashboard con monitoreo en tiempo real
- 🔮 Simulación de datos IoT
- 🔮 EventBus para comunicación entre módulos

*La arquitectura está diseñada para agregar estas funcionalidades sin modificar el código existente (principio Open/Closed)*

---

## 🎨 Diseño Visual

### Paleta de Colores

- **Primary**: `#00f2ff` (Cyan brillante)
- **Secondary**: `#0a0e27` (Azul oscuro profundo)
- **Success**: `#4caf50` (Verde)
- **Warning**: `#ffc107` (Ámbar)
- **Danger**: `#f44336` (Rojo)

### Tipografía

- **Headings**: Montserrat (300, 600, 800)
- **Body**: Montserrat (regular)
- **Monospace**: Roboto Mono (para valores numéricos)

### Efectos

- Glass morphism en tarjetas
- Glow effect en fondo
- Grid animado
- Transiciones suaves

---

## 📝 Notas Técnicas

### Configuración

Todos los valores configurables están centralizados en `assets/js/core/config.js`:

- Total de slides: 6
- Duración de transición: 600ms
- Slide inicial: 1
- Rangos de temperatura para futuras funciones de monitoreo

### Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+

Requiere soporte para:
- ES6 Modules
- CSS Variables
- CSS Grid
- Flexbox

---

## 👨‍💼 Información del Proyecto

- **Cliente**: Movifarma
- **Empresa**: Asurity SPA
- **Fecha**: Marzo 2026
- **Tipo**: Propuesta Técnica y Comercial
- **Servicio**: Calificación OQ/PQ de Vehículos

---

## 📄 Licencia

Documento confidencial - Uso exclusivo para el proyecto Movifarma

---

**Desarrollado con atención al detalle y cumplimiento normativo** 🚛❄️
