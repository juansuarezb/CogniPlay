# Contributing Guide – CogniPlay

Gracias por contribuir a **CogniPlay**. Este documento define el flujo de trabajo, estándares y buenas prácticas que debemos seguir para desarrollar nuevas funcionalidades de forma ordenada y segura.

---

## Flujo de trabajo (obligatorio)

### 1. Crear una Issue
Antes de empezar a programar:
- Crea una **Issue** describiendo claramente el problema o la funcionalidad.
- Usa un título claro y descriptivo.
- Asigna la issue a ti mismo.

Ejemplos:
- `fix: área clickeable de tarjetas de juego`
- `feature: pantalla prePartida para Memorización`

---

### 2. Crear una rama de feature
Nunca trabajes directamente sobre `main`.

Desde `main`:

```
git checkout main
git pull origin main
git checkout -b feature/nombre-feature
```

Convención de nombres:
- `feature/descripcion-corta`
- `fix/descripcion-corta`

Ejemplo:
- `feature/prepartida-memorizacion`
- `fix/click-tarjeta-juego`

---

### 3. Desarrollo

- Mantén los cambios enfocados **solo en la issue asignada**.
- Evita mezclar refactors grandes con features pequeñas.
- Respeta la estructura del proyecto.

---

### 4. Commits

Usa mensajes de commit claros:

```
feat: permitir click en toda la tarjeta del juego
fix: corregir overlay de botón play
style: ajustes de css en tarjetas
```

---

### 5. Pull Request (PR)

Cuando la feature esté lista:

1. Haz push de tu rama:
```
git push origin feature/nombre-feature
```

2. Crea un **Pull Request hacia `main`**.
3. En la descripción del PR:
   - Indica qué issue resuelve (`Closes #ID`).
   - Explica brevemente qué se hizo.
   - Adjunta capturas si hay cambios visuales.

---

### 6. Revisión y merge

- El PR debe ser revisado antes de hacer merge.
- No se hace merge si el código rompe la navegación o GitHub Pages.
- Una vez aprobado, se hace merge a `main`.

---

## Estándares técnicos

### HTML
- Estructura semántica (`main`, `section`, `article`).
- Evitar duplicación innecesaria.

### CSS
- Clases claras y reutilizables.
- Evitar estilos inline.

### JavaScript
- Código legible y comentado cuando sea necesario.
- No romper compatibilidad con GitHub Pages (solo frontend).

---

## Notas importantes

- Todo cambio debe pasar por una Issue y un PR.
- `main` siempre debe estar desplegable en GitHub Pages.
- Si tienes dudas, pregunta antes de implementar.

---

Gracias por contribuir a CogniPlay 🚀

