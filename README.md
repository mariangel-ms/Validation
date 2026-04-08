# 🌌 Formulario de Registro con Validación en Tiempo Real

Este proyecto consiste en un formulario de registro diseñado para gestionar la entrada de datos de manera segura y eficiente.
## 🚀 Características

- **Diseño Ultra-Moderno:** Interfaz con efectos de desenfoque de fondo, bordes sutiles y sombras de neón.
- **Validación con Regex:** Control estricto de entradas mediante Expresiones Regulares para Username, Email, Teléfono y Contraseñas.
- **Interactividad Inteligente:**
  - El botón de registro se habilita solo cuando todos los campos son válidos.
  - El selector de países actualiza automáticamente el prefijo telefónico.
  - Los campos de entrada y el código de país cambian de color (Verde/Rojo) simultáneamente según la validez.
- **Responsive Design:** Adaptable a dispositivos móviles y cualquier tipo de pantalla.

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica de los campos de entrada.
- **CSS3:** Flexbox, animaciones de bordes, gradientes radiales y diseño responsivo.
- **JavaScript (ES6+):** Manipulación dinámica del DOM, validación de patrones y gestión de eventos de entrada.

## 📝 Reglas de Validación

| Campo | Regla de Validación |
| :--- | :--- |
| **Username** | De 5-16 caracteres, permite letras y números. |
| **Email** | Debe seguir un formato válido (`ejemplo@correo.com`). |
| **Teléfono** | Entre 7 y 15 dígitos numéricos. |
| **Contraseña** | 6-16 caracteres, debe incluir al menos una mayúscula, una minúscula y un número. |
| **Confirmación** | Debe coincidir exactamente con la contraseña principal. |

## 👤 Autor

Desarrollado por [Mariangel Martinez](https://github.com/mariangel-ms).