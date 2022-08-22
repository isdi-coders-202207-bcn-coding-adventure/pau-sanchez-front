CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Cuando quiero memoizar una función. A useCallback le pasamos una callback, useCallback nos guarda una referencia de la instancia de esa función. useCallback devolverà esa misma instancia hasta que cambie alguna de las dependencias especificadas en la array de dependencias. Si hay cambios en la array de dependencias, la callback que le hemos pasado a useCallback se ejecutará una vez más y la referencia se actualizará. Para qué quiero memoizar una función? Normalmente memoizamos funciones que existen como array de dependencias en el hook useEffect para evitar bucles infinitos. Si no guardo una referencia de la función en el array de dependencias, cada vez que el código pase por ese useEffect, react la interpretará cómo una nueva función/objeto, y la ejecutará de nuevo, dando lugar a un bucle infinito.
