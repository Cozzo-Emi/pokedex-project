# 🔴 Pokédex Nacional - Vanilla JS & Fetch API

Este proyecto es una aplicación web interactiva que consume la **PokeAPI** para buscar y renderizar información de Pokémon en tiempo real. Desarrollado con un fuerte enfoque en buenas prácticas, destaca por su uso de **Arquitectura  (MVC)** y manipulación  del DOM sin frameworks.

 **[¡Probala en vivo acá!](https://Cozzo-Emi.github.io/pokedex-project/)** 

## 🛠️ Stack Tecnológico
* **Lenguaje:** Vanilla JavaScript (ES6+)
* **Estilos:** CSS3 Puro (Efectos Scanline / Dot Matrix)
* **Integración:** Fetch API (Async/Await)

## Características y Arquitectura
* **Arquitectura Modular (MVC):** Código en capas separando estrictamente la lógica de red (`api.js`), la manipulación visual (`ui.js`) y el orquestador/controlador principal (`app.js`).
* **Diseño UI/UX Retro:** Recreación de la estética clásica de consolas portátiles de los 90s usando tipografías web, propiedades como `image-rendering: pixelated` y fondos *Scanline* generados con gradientes de CSS.
* **Multimedia Dinámica (Web Audio API):** Implementación de la regla de interacción ("primer clic") para respetar las políticas de *autoplay* de los navegadores, reproduciendo música de fondo ambiental y los "cries" oficiales de cada Pokémon al renderizar.
* **Manejo de Asincronía y Errores:** Consumo de APIs externas con validaciones tempranas y captura de errores HTTP (como Status 404), brindando feedback visual claro al usuario si hay problemas de red o tipeo.

## 👨‍💻 Sobre el Autor
Soy estudiante avanzado de desarrollo de software con base técnica en **Soporte IT**. Cuento con la certificación de **Soporte de TI de Google** y experiencia coordinando talleres de tecnología.
---
*Explora mi código y conectemos en [LinkedIn](https://www.linkedin.com/in/emi-cozzolino/).*
