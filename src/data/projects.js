// Todo el texto narrativo vive en los diccionarios de i18n (es.json / en.json).
// Acá solo va lo estructural: a qué proyecto corresponde cada card, su estado
// real de avance, y los links externos que ya existen.
//
// dashboardUrl y repoUrl quedan en null hasta que existan. Los componentes de
// detalle usan ese null para decidir si muestran el contenido real o el
// placeholder explicando qué falta.

export const PROJECT_STATUS = {
  DONE: 'done',
  IN_PROGRESS: 'inProgress',
  PENDING_MEDIA: 'pendingMedia',
}

export const projects = [
  {
    slug: 'barca',
    status: PROJECT_STATUS.DONE,
    accentColor: null,
    // Los 4 dashboards viven en el mismo workbook de Tableau Public, cada uno
    // publicado como una vista independiente. "titleKey" apunta a la entrada
    // correspondiente en projectDetail.barca.dashboards del diccionario i18n.
    dashboards: [
      { path: 'AlwaysBara/Dashboard1', titleKey: 'overview' },
      { path: 'AlwaysBara/UsodecanteranosFase2', titleKey: 'academy' },
      { path: 'AlwaysBara/Fase3Valordeplantilla', titleKey: 'squadValue' },
      { path: 'AlwaysBara/Dashboard4', titleKey: 'conclusions' },
    ],
    // TODO: confirmar si ya se configuró la "vista previa de dispositivo móvil"
    // en Tableau antes de dar esto por terminado del todo en mobile.
    dashboardMobileConfigured: false,
    repoUrl: null,
  },
  {
    slug: 'messi',
    status: PROJECT_STATUS.IN_PROGRESS,
    accentColor: null,
    dashboards: [],
    repoUrl: null,
  },
  {
    slug: 'pulperia',
    status: PROJECT_STATUS.PENDING_MEDIA,
    // Los colores del Barça viven únicamente en la página de este proyecto que
    // no es el Barça, así que acá no aplica. Este acento es propio de la app.
    accentColor: null,
    screenshots: [], // se llena cuando exista la sesión de capturas con blur aplicado
    repoUrl: null,
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
