# Aprende Jugando

Juego educativo para niños de 3 a 7 años: contar, letras con tipografía escolar,
trazo, vecinos de la tabla del 100, sumas y restas, duelo matemático y formar
palabras. Funciona en el móvil y se puede añadir a la pantalla de inicio.

## Publicar

1. Sube `index.html`, `sw.js`, `LICENSE` y este `README.md` a un repositorio.
2. Settings → Pages → Source: `Deploy from a branch`, rama `main`, carpeta `/ (root)`.
3. En un par de minutos estará en `https://TUUSUARIO.github.io/TUREPO/`.

## Actualizar

Sube el `index.html` nuevo y **cambia el número de versión** en la primera línea
de `sw.js` (`aprende-jugando-v1` → `v2`). Si no, los móviles que ya lo tengan
guardado seguirán viendo la versión anterior.

## Datos

Todo lo del juego (jugadores, monedas, cofres, estadísticas) se guarda en el
propio navegador con `localStorage`. No hay servidor ni cuentas: nada sale del
dispositivo y cada móvil tiene su propia clasificación.

Las estadísticas de uso son opcionales y están desactivadas. Para activarlas,
pon tu código de GoatCounter en `window.GC_CODE` dentro de `index.html`.

## Autor

Pablo María de Guinea Echevarría

## Licencia

MIT © 2026 Pablo María de Guinea Echevarría. Puedes usarlo, copiarlo, modificarlo
y distribuirlo libremente, manteniendo el aviso de copyright.

Las librerías usadas son Tailwind CSS y canvas-confetti (MIT) y las fuentes
Playwrite ES, Andika, Fredoka y Outfit (SIL Open Font License).
