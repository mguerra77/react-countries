```

## Cómo levantar el proyecto

1. Instalar  dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abre tu navegador en [http://localhost:5173]


Challenge React

Implementar un buscador de países. Al introducir texto, se deberá buscar los países que coincidan con la búsqueda usando una API pública. Mostrar los resultados en formato de lista. Permitiendo marcar el puntaje del país usando un sistema de estrellas (1 a 5 estrellas). Los requisitos se detallarán más abajo.


Requisitos:

Se pueden usar librerías, el diseño no hace falta que sea idéntico pero sí un aproximado.
La búsqueda es al tipear, no con un submit del form.
El request debe ser un GET a https://restcountries.com/v3.1/name/<name> donde <name> es el string de la búsqueda.
Todos los campos necesarios están en el payload de la API.
Usar Typescript para el challenge.
La selección del score debe guardarse en memoria. Si se realiza otra búsqueda el score no debe perderse. (Ej: buscas argentina, ponés score 5, después buscas España, y después buscas Argentina de nuevo, el 5 debe mantenerse). Sin embargo, al refrescar la página no hace falta persistir el estado. Por default el score empieza en 0 (sin estrellas) para todos los países.
Mostrar estados de loading/error + empty state cuando no haya resultados.
Ante dudas, hacer lo que te parezca correcto, si elegís cierta decisión dejá un comentario en el código del porqué de la decisión.
