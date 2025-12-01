export type Activity = {
  id: string;
  category: 'play' | 'learn' | 'relax' | 'surprise';
  title: string;
  description: string;
  duration: string;
  steps?: string[];
};

export const activities: Activity[] = [
  {
    id: 'reaction-tap',
    category: 'play',
    title: 'Reflejos exprés',
    description: 'Toca la pantalla cada vez que cambie el color.',
    duration: '30-60 seg',
    steps: ['Observa el color', 'Toca cuando cambie', 'Cuenta tus aciertos'],
  },
  {
    id: 'word-quiz',
    category: 'learn',
    title: 'Mini trivia',
    description: 'Preguntas rápidas de cultura general.',
    duration: '1 min',
    steps: ['Lee la pregunta', 'Elige la opción', 'Comparte tu resultado mentalmente'],
  },
  {
    id: 'breath-box',
    category: 'relax',
    title: 'Respiración en caja',
    description: 'Respira 4-4-4-4 para recargar energía.',
    duration: '1-2 min',
    steps: ['Inhala 4s', 'Mantén 4s', 'Exhala 4s', 'Mantén 4s'],
  },
  {
    id: 'stretch-neck',
    category: 'relax',
    title: 'Estira cuello',
    description: 'Tres movimientos suaves para liberar tensión.',
    duration: '45 seg',
    steps: ['Inclina derecha', 'Inclina izquierda', 'Círculos suaves'],
  },
  {
    id: 'flash-cards',
    category: 'learn',
    title: 'Tarjetas relámpago',
    description: 'Repasa un concepto en pocos segundos.',
    duration: '1-2 min',
    steps: ['Elige tema', 'Lee el dato', 'Repítelo en voz baja'],
  },
  {
    id: 'surprise-me',
    category: 'surprise',
    title: 'Algo nuevo',
    description: 'Deja que O’Clock elija por ti.',
    duration: '60-90 seg',
  },
];
