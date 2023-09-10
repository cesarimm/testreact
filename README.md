Requerimientos previos: 
Node V.18.+

Nota: El proyecto se inicializó en VITE 4.4.5 con una version de React 18.2.+

1. Clonar el repositorio en tu equipo de computo
2. Una vez clonado acceder a la carpeta 'pokedex' por linea de comandos o terminal
3. Ejecutar el comando 'npm install' para instalar todas las dependencias necesarias que se encuentran en el archivo package.json.
4. Ejecutar el comando 'npm run dev' este comando iniciará el servidor de desarrollo.
5. Para probar el proyecto acceder al siguiente enlace 'http://localhost:5173/search'


Se realizó despliegue del proyecto en Netlify para probarlo acceder al siguiente enlace: https://pokedexcimm.netlify.app/search
Tiene un error por temas de configuracion al momento de realizar el despliegue, por cuestiones tiempo no se realizó la corrección del error, pero se resuelve de la siguiente manera dando clic en el texto 'Back to our site'. Y de esta manera se soluciona, este error no se presenta en el ambiente de desarrollo.

![image](https://github.com/cesarimm/testreact/assets/29169664/0f96b6a9-3f56-44b2-a2ff-f2e90e65cc43)


Pequeño manual de usuario:

1. Ingresar el nombre del pokemón a buscar, si el resultado es efectivo se mostrará una tarjeta con los datos del pokemón buscado. Con el botón que se muestra en la parte inferior podrás añadirlo en tu colección.
   Una vez que lo agregues automáticamente te va a dirigir a la parte de 'Mi colección'.

![Captura desde 2023-09-10 10-35-43](https://github.com/cesarimm/testreact/assets/29169664/3606de45-b4dc-45ba-a748-c0ea7812a9f0)


2. En el apartado de mi colección podremos actualizar la cantidad de cada uno de los pokemones que tenemos, ademas de eliminarlos de manera individual.
3. En la parte superiro se encuentra un botón con el cual se pueden 'eliminar todos los polemones de nuestra coleccion'

![Captura desde 2023-09-10 10-44-48](https://github.com/cesarimm/testreact/assets/29169664/52bad0eb-898f-43a2-830f-39ec233fdb53)


4. En el apartado de Pokemon Analytics ( http://localhost:5173/pokemon-analitics) podremos ver una grafica que nos muestra el tipo de pokemones que tenemos en nuestra colección.

![Captura desde 2023-09-10 10-48-07](https://github.com/cesarimm/testreact/assets/29169664/b1ef24e8-fa61-4048-b069-05ffbe9e2bb2)

 


 Mejoras y propuestas

-> Estilos y Personalización de Tarjetas:
En esta fase de mejora, se enfocará en la apariencia visual de la Pokédex.
Crear tarjetas personalizadas para cada Pokémon, con detalles únicos que reflejen la esencia de cada criatura y typo.
Personalizar los estilos del Sweet Alert para que se integren de manera armoniosa con la temática de Pokémon, utilizando colores y elementos visuales que evocan el mundo de los juegos.

-> Ampliación de Campos y Filtros de Búsqueda:
Para mejorar la utilidad de la Pokédex, añadir posibilidad de buscar Pokémon por características específicas como tipo, habilidades, estadísticas, o generación.
Filtros avanzados que permitirán a los usuarios refinar sus búsquedas y encontrar Pokémon de manera más eficiente. La opción de guardar búsquedas personalizadas para su acceso rápido.

-> Paginación para Carga de Tarjetas:
A medida que la colección de Pokémon crezca, se implementará un sistema de paginación para mejorar la velocidad de carga y la experiencia del usuario.
Con el objetivo  de optimizar el rendimiento de la aplicación, reduciendo la carga de datos innecesarios.

-> Implementación de Lazy Loading:
Para mejorar la velocidad de carga de la aplicación y reducir la carga inicial de recursos, se implementará el lazy loading. Cargar imágenes y datos de Pokémon solo cuando el usuario los visualice, en lugar de cargar todo al principio.



Conclusiones personales

Este proyecto de la Pokédex ha sido una experiencia divertida y enriquecedora para mí. Antes de comenzar, tenía un conocimiento limitado sobre el mundo de Pokémon, pero a lo largo de este proyecto, no solo he mejorado mis habilidades técnicas, sino que también he adquirido un mayor entendimiento sobre el tema pokemón.

Uno de los aspectos más destacados fue el fortalecimiento y solides de mis habilidades en tecnologías. Me sumergí en React y sus complementos, como Styled Components para el estilo y Axios para las solicitudes de API. Para navegar de manera efectiva en la aplicación utilizando React Router DOM y gestioné el estado de la aplicación de manera eficiente con Redux y Redux Persist.

Además, tuve la oportunidad de explorar nuevas tecnologías, como Chart.js y react-chartjs-2, para visualizar datos de manera atractiva y funcional. Esta adición proporcionó un componente interactivo a mi proyecto.

Otro aspecto importante fue el despliegue de la aplicación en Netlify. Esta experiencia me enseñó cómo llevar mi proyecto al mundo real, haciéndolo accesible en línea de manera eficiente. Aunque tengo un error y aún no sé como resolverlo.
