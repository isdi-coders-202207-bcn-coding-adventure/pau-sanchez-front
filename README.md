CODING ADVENTURE

1. ¿Cuándo tengo que usar useCallback()?

- Cuando queremos que una función sólo sea ejecutada cuando aquello que le pasamos por la array de dependencias haya cambiado.
  Esto nos sirve para evitar renderizados innecesarios y bucles infinitos.
