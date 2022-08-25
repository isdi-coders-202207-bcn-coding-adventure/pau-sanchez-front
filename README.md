CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Cuando quiero memoizar una función. A useCallback le pasamos una callback, useCallback nos guarda una referencia de la instancia de esa función. useCallback devolverà esa misma instancia hasta que cambie alguna de las dependencias especificadas en la array de dependencias. Si hay cambios en la array de dependencias, la callback que le hemos pasado a useCallback se ejecutará una vez más y la referencia se actualizará. Para qué quiero memoizar una función? Normalmente memoizamos funciones que existen como array de dependencias en el hook useEffect para evitar bucles infinitos. Si no guardo una referencia de la función en el array de dependencias, cada vez que el código pase por ese useEffect, react la interpretará cómo una nueva función/objeto, y la ejecutará de nuevo, dando lugar a un bucle infinito.

Fase 2: Tienes que crear un componente que muestre una cuenta atrás en el tiempo. En la imagen counter.png de raíz puedes ver cómo tiene que quedar. En este punto tendrás que crear sólo el HTML y hacer que el contador se vea en pantalla.

Fase 3: Dale estilos al componente contador (utiliza styled-components).

Dale la funcionalidad. Guarda la fecha clave en una constante que puedas usar en cualquier componente.

Fase 6. Crea dos rutas: /home y /register. En /home debe verse el contador si aún no ha llegado la fecha clave, y si ya ha pasado debe verse un encabezado.
