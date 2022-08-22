CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Cuando quiero memoizar una función. Con useCallback guardamos una referencia de la función que le pasamos por argumentos, una instancia de la función callback. useCallback devolverà esa misma instancia hasta que cambie alguna de las dependencias especificadas, y en ese momento actualizará la referencia y se ejecutará de nuevo.
