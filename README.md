# Academia Bizmotion

Sitio de cursos de Bizmotion construido con [Docusaurus 3](https://docusaurus.io/), orientado a formacion practica en contabilidad y ERP.

URL publica: [https://academia.bizmotion.io](https://academia.bizmotion.io)

## Stack y alcance

- Docusaurus `3.7.x`
- React `19`
- Plugin de docs dedicado a cursos (`@docusaurus/plugin-content-docs`) con:
  - `path: cursos`
  - `routeBasePath: /cursos`
  - Sidebar autogenerada (`sidebars/sidebarsCursos.js`)
- Home personalizada en `src/pages/index.js`

## Requisitos

- Node.js `>=18`
- npm

## Instalacion

```bash
npm install
```

## Variables de entorno

El proyecto usa variables para la busqueda de Algolia:

```bash
ALGOLIA_APP_ID=...
ALGOLIA_API_KEY=...
ALGOLIA_INDEX_NAME=...
```

Puedes definirlas en `.env` para desarrollo local.

## Comandos disponibles

```bash
# Desarrollo local
npm run start

# Compilar sitio estatico
npm run build

# Servir build localmente
npm run serve

# Limpiar cache de docusaurus
npm run clear

# Verificacion de tipos (TS)
npm run typecheck

# Deploy (segun configuracion de Docusaurus)
npm run deploy
```

## Estructura del proyecto

```text
.
├── cursos/                       # Contenido principal del sitio de cursos
│   ├── index.md                  # Catalogo (ruta /cursos)
│   └── <slug-curso>/             # Curso individual
│       ├── index.md              # Landing del curso
│       ├── _category_.json       # (Opcional) metadata/orden en sidebar
│       └── <modulo-o-clase>/     # Lecciones y ejercicios
├── sidebars/sidebarsCursos.js    # Sidebar autogenerada
├── src/pages/                    # Paginas (incluye home)
├── src/components/               # Componentes reutilizables (ej: CourseCard)
├── src/theme/                    # Overrides de tema Docusaurus
├── static/                       # Assets estaticos
└── docusaurus.config.js          # Configuracion global
```

## Flujo recomendado para crear un curso nuevo

1. Crear carpeta en `cursos/<slug-del-curso>/`.
2. Crear `index.md` con frontmatter minimo:

```md
---
title: Titulo del curso
slug: /<slug-del-curso>
sidebar_position: 1
---
```

3. Crear modulos o clases en subcarpetas con sus archivos `.md`.
4. Agregar `_category_.json` cuando necesites titulo/orden personalizado.
5. Verificar en local con `npm run start`.
6. Actualizar `cursos/index.md` para mostrar el curso en el catalogo.
7. Si aplica, agregar el nuevo curso al navbar (`docusaurus.config.js`).

## Criterios de contenido

- Mantener slugs cortos, estables y en minusculas.
- Usar nombres de archivos descriptivos (`...-teoria.md`, `...-ejercicios.md`).
- Evitar romper rutas ya publicadas para no afectar SEO y enlaces externos.

## Troubleshooting rapido

- Si hay comportamientos raros de cache: `npm run clear`.
- Si falla la build por links rotos, revisar rutas internas y frontmatter.
- Si no aparece contenido nuevo en sidebar, comprobar ubicacion dentro de `cursos/` y formato de frontmatter.
