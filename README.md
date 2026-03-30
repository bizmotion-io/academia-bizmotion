# Academia Bizmotion

Sitio de cursos construido con Docusaurus.

## Requisitos

- Node.js 18+

## Instalacion

```bash
npm install
```

## Desarrollo local

```bash
npm run start
```

## Build

```bash
npm run build
```

## Sitio publico

- https://academia.bizmotion.io

## Estructura de contenido

- `cursos/index.md`: catalogo de cursos
- `cursos/<slug-curso>/`: contenido de cada curso

Para crear un curso nuevo:

1. Crea una carpeta nueva dentro de `cursos/`.
2. Agrega un `index.md` para la portada del curso.
3. Agrega modulos/clases en subcarpetas.
4. Opcional: agrega `_category_.json` para etiquetas y orden en sidebar.
