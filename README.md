# O'Clock

Aplicación móvil (Expo + React Native) para microactividades rápidas.

## Requisitos previos
- Node.js 18+
- npm o yarn
- Expo CLI (`npm install -g expo-cli`) o la app **Expo Go** instalada en tu teléfono.

## Cómo ejecutarla
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el bundler de Expo:
   ```bash
   npm run start
   ```
3. Elige una opción:
   - **Expo Go (recomendado):** escanea el QR que aparece en la terminal/browser.
   - **Emulador Android:** pulsa `a` en la terminal con un emulador abierto.
   - **Simulador iOS (macOS):** pulsa `i` con Xcode / simulador en marcha.

## Estructura principal
- `App.tsx`: carga fuentes y envuelve la navegación.
- `src/navigation`: stack de onboarding + tabs principales.
- `src/screens`: pantallas de Onboarding, Home, Explorar, Actividades, Historial, Perfil y Ajustes.
- `src/components`: design system reutilizable (botones, tarjetas, tipografía, etc.).
- `src/theme`: colores, tipografía y estilos globales.
- `src/data`: mock data de categorías y actividades.
- `src/hooks/useAsyncStorageState.ts`: persistencia simple (tema, progreso, historial).

## Notas rápidas
- Tipografía Roboto precargada (Regular, Medium, Bold).
- Modo claro/oscuro basado en estado persistido.
- Temporizador funcional en `ActivityRunnerScreen`.
- Código comentado y listo para iterar en Figma.
