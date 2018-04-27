# Juego 3 en raya

El juego *3 en raya* es una aplicación de frontend que utiliza la librería *React* para implementar la funcionalidad del famoso juego *3 en raya*. Está desarrollado con *props* y *states*. También guarda toda la información de la partida actual y de su histórico de partidas en el *LocalStorage* del navegador para persistir las partidas en el tiempo.

Para arrancar la aplicación, abra una consola en la carpeta de trabajo y teclee:

```sh
npm run start
```

o bien 

```sh
yarn start
```

La aplicación utilizará la siguiente url por defecto: http://localhost:3000

Su funcionamiento es el siguiente: el primer jugador coloca su ficha en una casilla y pasa el turno al segundo jugador que coloca la suya y así hasta que uno de los dos jugadores consiga enlazar 3 fichas seguidas (ya sea de forma horizontal, vertical o diagonal). Si llegado el caso se acaban las casillas vacías y ningún jugador consigue esas tres fichas seguidas, se considera que la partida ha quedado en empate. 

Contiene dos opciones de menú: 

* El juego de *3 en raya*.
* Un histórico de partidas jugadas.

## 1. Pantalla del juego

La pantalla contiene:

* Un *tablero de 3 x 3 posiciones*. Cada vez que se pulse una casilla vacía, se asigna al jugador que la pulsa y muestra además el número de turno en el que ha posicionado la ficha.

* Un *botón de reinicio* para descartar la partida actual y volver a jugar una partida desde el principio.

* Una zona informativa que muestra qué jugador contiene el turno actual, el número de turno y en caso de fin de partida muestra el ganador de la misma o, por el contrario, si ha ocurrido un empate.


## 2. Pantalla del histórico del juego

La pantalla contiene:

* Un contador de partidas jugadas.

* Una lista de partidas jugadas.

Cuando se pulsa una de las partidas, la aplicación mostrará el tablero de dicha partida.
