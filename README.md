# Portafolio · Alberto Núñez Trejos

Sitio de una sola página construido con React + Vite, bilingüe (ES/EN) con react-i18next, pensado para desplegarse en Vercel.

## Correr en local

```bash
npm install
npm run dev
```

Abre en `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview   # para probar el build localmente antes de deployar
```

## Desplegar en Vercel

1. Subí este proyecto a un repositorio de GitHub.
2. En Vercel, "Add New Project" → importá el repo. Vercel detecta Vite automáticamente (build command `npm run build`, output directory `dist`).
3. Configurá el dominio propio o un subdominio limpio de Vercel en Project Settings → Domains.

## Desplegar en Firebase Hosting

El proyecto ya incluye `firebase.json` configurado para servir el build de Vite con el rewrite necesario para que las rutas de React Router (`/proyectos/barca`, etc.) no den 404 al entrar directo por el link.

```bash
npm install -g firebase-tools   # si no lo tenés instalado
firebase login
firebase use --add               # elegí o creá el proyecto de Firebase
npm run build
firebase deploy --only hosting
```

## Estructura

```
src/
  i18n/                    # configuración de i18next + diccionarios es.json / en.json
  data/projects.js         # metadata estructural de los 3 proyectos (slug, estado, links)
  components/
    sections/               # secciones del home (Hero, About, Projects, Skills, Experience, Contact)
    project-detail/          # piezas reutilizables de las páginas de detalle
  pages/
    Home.jsx
    project-detail/          # BarcaDetail, MessiDetail, PulperiaDetail
```

Todo el texto narrativo vive en `src/i18n/locales/es.json` y `en.json`. Si necesitás cambiar textos, es ahí, no en los componentes.

## Pendientes reales (no son bugs, son cosas que faltan a propósito)

- **Barça**: el dashboard ya está embebido (`src/data/projects.js`, campo `dashboardPath: 'AlwaysBara/Dashboard1'`). Falta:
  - Confirmar que se configuró la "vista previa de dispositivo móvil" en Tableau para que se vea bien en celular.
  - Agregar el link del repositorio de GitHub en `repoUrl` cuando exista.
- **Messi**: página marcada como "en progreso" a propósito, sin datos ni dashboard todavía. Cuando exista el análisis, hay que:
  - Agregar `dashboardPath` en `src/data/projects.js`.
  - Cambiar `status` de `PROJECT_STATUS.IN_PROGRESS` a `PROJECT_STATUS.DONE`.
  - Sacar la nota de "en progreso" de `projectDetail.messi.statusNote` en ambos idiomas.
- **Pulpería**: la app está terminada, pero faltan las capturas de pantalla reales (con blur en nombres, teléfonos y fotos de clientes). Cuando existan:
  - Reemplazar `ScreenshotPlaceholder` por las imágenes reales en `PulperiaDetail.jsx`.
  - Cambiar `status` a `PROJECT_STATUS.DONE`.
  - Agregar el link del repo en `repoUrl`.
- **Contacto**: el usuario de GitHub en `Contact.jsx` es un placeholder (`TU-USUARIO-AQUI`), reemplazar por el real.
- **Metadatos de preview**: `index.html` referencia `/og-preview.png` para que se vea bien al compartir el link en LinkedIn. Ese archivo todavía no existe, hay que generarlo (1200×630px aprox.) y ponerlo en `public/`.
- **CV**: `public/cv/Alberto_Nunez_Trejos_CV.pdf` es el CV actual, pero según las instrucciones del proyecto, ese CV todavía no refleja los 3 proyectos del portafolio. Cuando se actualice, reemplazar este archivo manteniendo el mismo nombre (o actualizar la ruta en `Header.jsx` y `Experience.jsx`).
