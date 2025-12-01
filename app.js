// Datos base de actividades
const activities = [
  {
    id: 1,
    category: 'jugar',
    title: 'Juego mental rápido',
    duration: '2 min',
    description: 'Piensa en 5 cosas de un color y 5 de otro lo más rápido posible.',
    steps: [
      'Elige dos colores que tengas a la vista.',
      'Di mentalmente 5 objetos de un color y luego 5 del otro.',
      'Intenta hacerlo en menos de dos minutos.',
    ],
  },
  {
    id: 2,
    category: 'jugar',
    title: 'Encuentra la palabra',
    duration: '3 min',
    description: 'Adivina una palabra en menos de 6 intentos usando pistas de categorías.',
    steps: [
      'Piensa en una palabra de 5 letras.',
      'Dile la categoría a quien esté contigo o a ti mismo.',
      'Da pistas letra por letra hasta adivinarla.',
    ],
  },
  {
    id: 3,
    category: 'jugar',
    title: 'Mini reto visual',
    duration: '2-3 min',
    description: 'Cuenta cuántos objetos redondos ves alrededor y ordénalos mentalmente.',
    steps: [
      'Mira a tu alrededor y busca objetos redondos.',
      'Cuenta hasta 10 y ordénalos por tamaño.',
      'Intenta recordar el orden sin mirar de nuevo.',
    ],
  },
  {
    id: 4,
    category: 'aprender',
    title: 'Dato curioso del día',
    duration: '2 min',
    description: 'Descubre un dato para compartir más tarde.',
    steps: [
      'Busca mentalmente un tema que te interese.',
      'Piensa en un dato que conozcas y compleméntalo con una pregunta.',
      'Anota la pregunta en notas para investigarla luego.',
    ],
  },
  {
    id: 5,
    category: 'aprender',
    title: 'Nueva palabra en inglés',
    duration: '3 min',
    description: 'Aprende una palabra y úsala en dos frases.',
    steps: [
      'Elige una palabra que quieras aprender.',
      'Piensa o busca su significado y pronunciación.',
      'Crea dos frases cortas con ella para recordarla.',
    ],
  },
  {
    id: 6,
    category: 'aprender',
    title: 'Mini quiz',
    duration: '4 min',
    description: 'Hazte tres preguntas rápidas de cultura general.',
    steps: [
      'Elige tres temas diferentes (música, ciencia, viajes).',
      'Formula una pregunta corta de cada tema.',
      'Responde sin mirar internet y evalúa tu certeza.',
    ],
  },
  {
    id: 7,
    category: 'relajar',
    title: 'Respiración 1 minuto',
    duration: '1-2 min',
    description: 'Respira lento para bajar pulsaciones.',
    steps: [
      'Inhala profundo por la nariz contando 4.',
      'Sostén el aire 2 segundos.',
      'Exhala lento por la boca contando 6.',
      'Repite 5 veces.',
    ],
  },
  {
    id: 8,
    category: 'relajar',
    title: 'Mini meditación',
    duration: '3 min',
    description: 'Conecta con tu cuerpo en pocos minutos.',
    steps: [
      'Cierra los ojos y relaja hombros.',
      'Escucha los sonidos cercanos sin juzgar.',
      'Respira suave mientras cuentas 10 respiraciones.',
    ],
  },
  {
    id: 9,
    category: 'relajar',
    title: 'Estiramientos suaves',
    duration: '3-4 min',
    description: 'Despierta el cuerpo con movimientos ligeros.',
    steps: [
      'Estira cuello hacia ambos lados durante 10 segundos.',
      'Rueda hombros hacia atrás y hacia adelante 10 veces.',
      'Estira brazos y espalda como si te despertaras.',
    ],
  },
];

// Historial inicial de ejemplo
const historyData = [
  { title: 'Respiración 1 minuto', category: 'Relajarme', duration: '2 min', time: 'Hoy, 10:20' },
  { title: 'Dato curioso del día', category: 'Aprender', duration: '2 min', time: 'Ayer, 18:45' },
  { title: 'Juego mental rápido', category: 'Jugar', duration: '2 min', time: 'Ayer, 12:15' },
];

let favorites = [];
let currentCategory = 'todas';
let currentActivity = null;

// Elementos del DOM
const screens = document.querySelectorAll('.screen');
const navBar = document.getElementById('navBar');
const navItems = document.querySelectorAll('.nav-item');
const activitiesList = document.getElementById('activitiesList');
const activitiesCategory = document.getElementById('activitiesCategory');
const recentActivity = document.getElementById('recentActivity');
const totalTime = document.getElementById('totalTime');
const timeTotal = document.getElementById('timeTotal');
const favoritesList = document.getElementById('favoritesList');
const historyList = document.getElementById('historyList');
const goalSelect = document.getElementById('goalSelect');
const goalMessage = document.getElementById('goalMessage');

// Detalle de actividad
const detailCategory = document.getElementById('detailCategory');
const detailTitle = document.getElementById('detailTitle');
const detailDuration = document.getElementById('detailDuration');
const detailTime = document.getElementById('detailTime');
const detailSteps = document.getElementById('detailSteps');
const favoriteButton = document.getElementById('favoriteButton');

// Botones de navegación inicial y onboarding
const startButton = document.getElementById('startButton');
const onboardingButtons = document.querySelectorAll('[data-next]');
const backButtons = document.querySelectorAll('[data-back]');
const categoryCards = document.querySelectorAll('.card.category');
const surpriseButton = document.getElementById('surpriseButton');

/**
 * Muestra la sección indicada y oculta el resto
 * @param {string} id - identificador de la pantalla a mostrar
 */
function showScreen(id) {
  screens.forEach((screen) => {
    screen.hidden = screen.id !== id;
  });
  // Activar barra de navegación en pantallas principales
  const mainScreens = ['home', 'activities', 'history', 'profile', 'activityDetail'];
  navBar.hidden = !mainScreens.includes(id);
  updateNavState(id);
}

/**
 * Actualiza estado activo de la barra inferior
 */
function updateNavState(id) {
  navItems.forEach((item) => {
    const target = item.dataset.target;
    item.classList.toggle('active', target === id || (id === 'activityDetail' && target === 'activities'));
  });
}

/**
 * Pinta la lista de actividades filtradas por categoría
 * @param {string} category
 */
function renderActivities(category = 'todas') {
  activitiesList.innerHTML = '';
  const filtered = category === 'todas' ? activities : activities.filter((item) => item.category === category);

  filtered.forEach((activity) => {
    const card = document.createElement('button');
    card.className = 'activity-card';
    card.innerHTML = `
      <div class="card-title">${activity.title}</div>
      <p class="muted">${activity.description}</p>
      <div class="pill">${activity.duration}</div>
    `;
    card.addEventListener('click', () => openActivityDetail(activity));
    activitiesList.appendChild(card);
  });

  activitiesCategory.textContent = category === 'todas' ? 'Actividades' : `Categoría: ${capitalize(category)}`;
}

/**
 * Abre la pantalla de detalle de una actividad
 * @param {*} activity
 */
function openActivityDetail(activity) {
  currentActivity = activity;
  detailCategory.textContent = `Categoría: ${capitalize(activity.category)}`;
  detailTitle.textContent = activity.title;
  detailDuration.textContent = `Duración: ${activity.duration}`;
  detailTime.textContent = activity.duration;
  favoriteButton.textContent = isFavorite(activity.id) ? 'Marcada como favorita' : 'Marcar como favorita';

  detailSteps.innerHTML = '';
  activity.steps.forEach((step) => {
    const li = document.createElement('li');
    li.textContent = step;
    detailSteps.appendChild(li);
  });

  showScreen('activityDetail');
}

/**
 * Capitaliza cadenas para mostrar categorías
 */
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Comprueba si una actividad está en favoritos
 */
function isFavorite(id) {
  return favorites.some((item) => item.id === id);
}

/**
 * Pinta el historial simulado
 */
function renderHistory() {
  historyList.innerHTML = '';
  historyData.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'history-card';
    card.innerHTML = `
      <div class="card-title">${item.title}</div>
      <p class="muted">${item.category} • ${item.duration}</p>
      <span class="badge">${item.time}</span>
    `;
    historyList.appendChild(card);
  });
}

/**
 * Pinta los favoritos guardados en memoria
 */
function renderFavorites() {
  favoritesList.innerHTML = '';

  if (favorites.length === 0) {
    favoritesList.innerHTML = '<p class="muted">Aún no tienes favoritos. Marca tus favoritos desde el detalle.</p>';
    return;
  }

  favorites.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'favorite-card';
    card.innerHTML = `
      <div class="card-title">${item.title}</div>
      <p class="muted">${capitalize(item.category)} • ${item.duration}</p>
    `;
    favoritesList.appendChild(card);
  });
}

/**
 * Actualiza mensajes y contadores simulados
 */
function updateStats() {
  const totalMinutes = historyData.reduce((acc, item) => acc + parseInt(item.duration), 0);
  totalTime.textContent = `${totalMinutes} min`;
  timeTotal.textContent = `${totalMinutes} min`;
  recentActivity.textContent = `${historyData[0].title} • ${historyData[0].duration}`;
}

/**
 * Maneja cambios en el select de objetivo
 */
function handleGoalChange() {
  const value = goalSelect.value;
  const messages = {
    relajar: 'Te ayudaremos a encontrar pausas que bajen tus pulsaciones.',
    aprovechar: 'Te mostraremos actividades que suman rápido a tu día.',
    divertirme: 'Prepárate para retos breves y ligeros.',
  };
  goalMessage.textContent = messages[value];
}

/**
 * Lógica principal
 */
function init() {
  renderActivities();
  renderHistory();
  renderFavorites();
  updateStats();

  // Splash y onboarding
  startButton.addEventListener('click', () => showScreen('onboarding1'));
  onboardingButtons.forEach((btn) => {
    btn.addEventListener('click', () => showScreen(btn.dataset.next));
  });

  // Botones atrás
  backButtons.forEach((btn) => {
    btn.addEventListener('click', () => showScreen(btn.dataset.back));
  });

  // Selección de categoría desde home
  categoryCards.forEach((card) => {
    card.addEventListener('click', () => {
      currentCategory = card.dataset.category;
      renderActivities(currentCategory);
      showScreen('activities');
    });
  });

  // Barra de navegación
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      const target = item.dataset.target;
      currentCategory = 'todas';
      if (target === 'activities') renderActivities();
      showScreen(target);
    });
  });

  // Botón sorpréndeme
  surpriseButton.addEventListener('click', () => {
    const random = activities[Math.floor(Math.random() * activities.length)];
    openActivityDetail(random);
  });

  // Botón favorito
  favoriteButton.addEventListener('click', () => {
    if (!currentActivity) return;
    const exists = favorites.some((item) => item.id === currentActivity.id);
    if (!exists) {
      favorites.push(currentActivity);
      renderFavorites();
      favoriteButton.textContent = 'Marcada como favorita';
    }
  });

  // Cambios de objetivo en perfil
  goalSelect.addEventListener('change', handleGoalChange);

  // Botón de acción principal de detalle
  document.getElementById('startActivity').addEventListener('click', () => {
    alert('¡Que disfrutes la actividad!');
  });
}

// Iniciar al cargar el DOM
window.addEventListener('DOMContentLoaded', init);
