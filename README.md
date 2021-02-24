# Proyecto en React
### Opciones
- npx create-react-app Nombre-del-proyecto
- Manual.
### Pasos de forma manual
1. Crear carpeta con el nombre del proyecto.
2. Inicializar git (git init).
3. Inicializar el proyecto (npm init -y).
4. Crear la estructura del proyecto.
   - Una carpeta "src" para todo el codigo del proyecto.
   - Una carpeta "public" que tendra los archivos que se publicaran en produccion.
   - Una carpeta components en src que tendra los componentes.
   - Un archivo index.js dentro de src que sera la entrada del proyecto.
   - Un archivo index.html dentro de public.
5. Instalar React en el proyecto.
   ~~~
   npm install react react-dom
   ~~~
6. Un archivo .gitignore. (Este esta en el github del proyecto con lo necesario).
7. En index.js importamos React, ReacDOM y el componente a usar ('react', 'react-dom').
   ~~~
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './containers/App';
   ~~~
8. Utilizamos ReactDOM con el metodo render, dentro de el llamamos al componente y con getElementById traemos un div principal que es donde vamos a empujar el componente.
   ~~~
   ReactDOM.render(<App />, document.getElementById('app'));
   ~~~
9. En index.html ponemos la estructura necesaria.
   ~~~
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>P Video</title>
   </head>
   <body>
      <div id="app"></div>
   </body>
   </html>
   ~~~
10. Instalamos babel como dependencia de desarrolo (Solo se va a usar para el desarrollo).
   ~~~
   npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
   ~~~
   - Creamos un archivo ".babelrc" dentro ponemos las herramientas de babel instaladas.
      ~~~
      {
         ""presets"": [
            ""@babel/preset-env"",
            ""@babel/preset-react""
         ],
      }
      ~~~
11. Instalamos webpack con las herramientas necesarias como dependencia de desarrollo.
   ~~~
   npm install webpack webpack-cli html-webpack-plugin html-loader  --save-dev
   ~~~
   - Creamos un archivo "webpack.config.js", aqui vivira la configuracion del proyecto y ponemos lo necesario.
      1. Requerimos path y el plugin instalado.
         ~~~
         const path = require('path');
         const HtmlWebpackPlugin = require('html-webpack-plugin');
         ~~~
      2. Exportamos el modulo con esta configuracion.
         ~~~
         module.exports = {
            entry: './src/index.js',
            output: {
               path: path.resolve(__dirname, 'dist'),
               filename: 'bundle.js',
            },
            resolve: {
               extensions: ['.js', '.jsx'],
            },
            module: {
               rules: [
                  {
                  test: /\.(js|jsx)$/,
                  exclude: /node_modules/,
                  use: {
                     loader: 'babel-loader',
                  },
                  },
                  {
                  test: /\.html$/,
                  use: {
                     loader: 'html-loader',
                  },
                  },
               ],
            },
            plugins: [
               new HtmlWebpackPlugin({
                  template: './public/index.html',
                  filename: './index.html',
               }),
            ],
         };
         ~~~
   - Creamos el script que compilara nuestro proyecto en el "package.json".
      ~~~
      {
         "scripts": {
            "build": "webpack --mode production"
         },
      }
      ~~~
   - Corremos el proyecto para comprovar.
      ~~~
      npm run build
      ~~~
12. Instalamos un paquete de webpack para poder mostrar el proyecto como dependencia de desarrollo (Provar si es necesario intalar porque el script para que funcione es diferente al explicado en el video.).
   ~~~
   npm install --save-dev webpack-dev-server
   ~~~
   - Creamos el script en el "package.json"
      ~~~
      {
         "scripts": {
            "build": "webpack --mode production",
            "start": "webpack serve --mode development --env development" (Nuevo script / Correcto).
            ""start"": ""webpack-dev-server --open --mode development"" (viejo script)
         },
      }
      ~~~
   - Ejecutamos para ver si funciona.
      ~~~
      npm run start
      ~~~
13. Instalamos sass como dependencia de desarrollo.
   ~~~
   npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
   ~~~
   - Añadimos las reglas nuevas para compilar css en el "webpack.config.js".
      ~~~
      const MiniCssExtractPlugin = require('mini-css-extract-plugin');

      // ...

      module: {
         rules: [
            // ...
         
            {
               test: /\.(s*)css$/,
               use: [
               { loader: MiniCssExtractPlugin.loader },
               'css-loader',
               'sass-loader',
               ],
            }, 
         ],
      },

      // ...

      plugins: [
         // ...

         new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
         }),
      ],
      ~~~
   - Creamos una carpeta "assets" dentro de src y dentro una carpeta "styles" con un archivo "App.scss", dentro del archivo colocamos codigo para comprovar.
      ~~~
      body {
         magin: 0;
         background-color: red;
      }
      ~~~
   - Dentro del componente que usemos importamos el archivo para que sea usado y webpack lo detecte, lo compile con sass y lo ubique como un archivo css donde deveria ir en "public".
      ~~~
      import '../assets/styles/App.scss';
   - Corremos con (npm run start) para comprobar que todo funcione.
14. Instalamos ESLint y escribimos el .gitignore como debe ser.
   ~~~
   npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
   ~~~
   - Creamos un archivo ".eslintrc" y el contenido del archivo esta dentro del proyecto.
   - En el archivo ".gitignore" tambien colocamos el contenido que esta en el proyecto.
15. Subir el proyecto al repositorio.
## Comenzamos con el proyecto
#### Componente Header
1. Creamos un componente header el cual importamos dentro del componente principal "App".
   - Creamos una carpeta "containers" y dentro de esta el componente "App.jsx".
   - En components creamos un archivo "Header.jsx" y dentro creamos el componente.
      ~~~
      import React from 'react';

      const Header = () => (
         <header class="header">
            <img class="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video" />
            <div class="header__menu">
               <div class="header__menu--profile">
                  <img src="../assets/user-icon.png" alt="" />
                  <p>Perfil</p>
               </div>
               <ul>
                  <li><a href="/">Cuenta</a></li>
                  <li><a href="/">Cerrar Sesión</a></li>
               </ul>
            </div>
         </header>
      );

      export default Header;
      ~~~
   - Cambiamos "class" por "className" que son el nombre para poder usar clases de css en .jsx.
   - Importamos dentro de "App.jsx" este componente y en este usamos el componente Header que creamos dentro de un div con clase "App".
      ~~~
      import React from 'react';
      import Header from '../components/Header';

      const App = () => (
         <div className="App">
            <Header />
         </div>
      );

      export default App;
      ~~~
   - Dentro de index.js importamos el componente App y lo usamos.
      ~~~
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './containers/App';

      ReactDOM.render(
         <App />,
         document.getElementById('app')
      );
      ~~~
2. Copiamos los stilos en sass.
   - Creamos dentro de "styles" una carpeta "components" y dentro creo un archivo "Header.scss" para solo los estilos del componente Header.
      1. En "Header.jsx" importamos esos estilos.
         ~~~
         import '../assets/styles/components/Header';
         ~~~
      2. Copiamos los estilos en "Header.scss"
         ~~~
         .header {
            align-items: center;
            background: #8f57fd;
            color: white;
            display: flex;
            height: 100px;
            justify-content: space-between;
            top: 0px;
            width: 100%;
            }

            .header__img {
            margin-left: 30px;
            width: 200px;
            }

            .header__menu {
               margin-right: 30px;
            }

            .header__menu ul {
            display: none;
            list-style: none;
            margin: 0px 0px 0px -14px;
            padding: 0px;
            position: absolute;
            width: 100px;
            text-align: right;
            }

            .header__menu:hover ul, ul:hover {
               display: block;
            }

            .header__menu li {
            margin: 10px 0px;
            }

            .header__menu li a {
            color: white;
            text-decoration: none;
            }

            .header__menu li a:hover {
            text-decoration: underline;
            }

            .header__menu--profile {
            align-items: center;
            display: flex;
            cursor: pointer;
            }

            .header__menu--profile img {
            margin-right: 8px;
            width: 40px;
         }
         ~~~
   - En "App.scss" copio los estilos generales que son para todo el proyecto.
      ~~~
      body {
         margin: 0;
         font-family: 'Muli', sans-serif;
         background: #8f57fd;
      }

      * {
         box-sizing: border-box;
      }
      ~~~
   - Importamos los estilos dentro de "App.jsx".
      ~~~
      import '.../assets/styles/App';
      ~~~
#### Componente Search
Para el Search que sera el buscador.
1. Creamos el archivo "search.jsx" en components y el "Search.scss" en styles/components y dentro de cada uno ponemos el codigo correspondiente.
   ~~~
   import React from 'react';
   import '../assets/styles/components/Search';

   const Search = () => (
      <section className="main">
         <h2 className="main__title">¿Qué quieres ver hoy?</h2>
         <input type="text" className="input" placeholder="Buscar..." />
      </section>
   );

   export default Search;
   ~~~
   ~~~
   // ...
   import Search from '../components/Search';
   // ...
   <Header />
   <Search />
   // ...
   ~~~
2. Agregamos el component al contenedor "App".
#### Componente carrusel
1. Creamos un archivo Categories.jsx y .scss para los titulos de cada categoria.
   ~~~
   import React from 'react';
   import '../assets/styles/components/Categories.scss';

   const Categories = ({ children }) => (
      <div className="categories">
         <h3 className="categories__title">Mi lista</h3>
         {children}
      </div>
   );

   export default Categories;
   ~~~
   ~~~
   .categories__title {
      background: #8f57fd;
      color: white;
      font-size: 16px;
      margin-top: -16px;
      position: absolute;
      padding-left: 30px;
      width: 100%;
   }
   ~~~
2. Creamos los archivos "Carousel.jsx" y .scss para el componente Carousel.
   ~~~
   import React from 'react';
   import '../assets/styles/components/Carousel.scss';

   const Carousel = ({children}) => (
      <section className="carousel">
         <div className="carousel__container">
            {children}
         </div>
      </section>
   );

   export default Carousel;
   ~~~
   ~~~
   .carousel {
      overflow: scroll;
      padding-left: 30px;
      width: 100%;
      position: relative;
   }

      .carousel__container {
      transition: 450ms -webkit-transform;
      transition: 450ms transform;
      transition: 450ms transform, 450ms -webkit-transform;
      font-size: 0;
      white-space: nowrap;
      margin: 70px 0px;
      padding-bottom: 10px;
   }
   /* Para evitar que se vea el scroll en sistemas diferentes a Mac*/
   .carousel::-webkit-scrollbar{
      display: none;
   }
   ~~~
3. Creamos los archivos "CarouselItem.jsx" y .scss para el componet CarouselItem.
   ~~~
   import React from 'react';
   import '../assets/styles/components/CarouselItem.scss';

   const CarouselItem = () => (
      <div className="carousel-item">
         <img className="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
         <div className="carousel-item__details">
            <div>
               <img className="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon" /> 
               <img className="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon" /> 
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
         </div>
      </div>
   );

   export default CarouselItem;
   ~~~
   ~~~
   .carousel__container:hover .carousel-item {
      opacity: 0.3;
   }
   
   .carousel__container:hover .carousel-item:hover {
      -webkit-transform: scale(1.5);
            transform: scale(1.5);
      opacity: 1;
   }
   
   .carousel-item {
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      display: inline-block;
      width: 200px;
      height: 250px;
      margin-right: 10px;
      font-size: 20px;
      cursor: pointer;
      transition: 450ms all;
      -webkit-transform-origin: center left;
            transform-origin: center left;
   }
   
   .carousel-item:hover ~ .carousel-item {
      -webkit-transform: translate3d(100px, 0, 0);
            transform: translate3d(100px, 0, 0);
   }
   
   .carousel-item__img {
      width: 200px;
      height: 250px;
      -o-object-fit: cover;
         object-fit: cover;
   }
   
   .carousel-item__details {
      align-items: flex-start;
      background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
      bottom: 0;
      display: flex;
      font-size: 10px;
      flex-direction: column;
      justify-content: flex-end;
      left: 0;
      opacity: 0;
      transition: 450ms opacity;
      padding: 10px;
      position: absolute;
      right: 0;
      top: 0;
   }
   
   .carousel-item__details--img {
      width: 20px;
   }
   
   .carousel-item:hover .carousel-item__details {
      opacity: 1;
   }
   
   .carousel-item__details--title {
      color: white;
      margin: 5px 0px 0px 0px;
   }
   
   .carousel-item__details--subtitle {
      color: white;
      font-size: 8px;
      margin: 3px 0px;
   }
   ~~~
4. Importamos los componentes en App Component.
   ~~~
   // ...
   import Categories from '../components/Categories';
   import Carousel from '../components/Carousel';
   import CarouselItem from '../components/CarouselItem';
   // ...
   <Search />
   <Categories>
      <Carousel>
         <CarouselItem />

         <CarouselItem />

         <CarouselItem />
      </Carousel>
   </Categories>
   // ...
   ~~~
   - Se puede pasar los componentes como vemos en Categories y Carousel (Con apertura y cierre de la etiqueta del componente).
   - Tener en cuenta que para esto hay que poner el children como parametro en la funcion del componente y usarlo justo donde queremos que se muestre el children dentro del componente.
#### Componente Footer
1. Creamos los archivos Footer.jsx y scss
   ~~~
   import React from 'react';
   import '../assets/styles/components/Footer.scss';

   const Footer = () => (
      <footer className="footer">
         <a href="/">Terminos de uso</a>
         <a href="/">Declaración de privacidad</a>
         <a href="/">Centro de ayuda</a>
      </footer>
   );

   export default Footer;
   ~~~
   ~~~
   .footer {
      align-items: center;
      background-color: #8f57fd;
      display: flex;
      height: 100px;
      width: 100%;
   }

   .footer a {
      color: white;
      cursor: pointer;
      font-size: 14px;
      padding-left: 30px;
      text-decoration: none;
   }

   .footer a:hover {
      text-decoration: underline;
   }
   ~~~
2. Importamos el componente en App component.
#### Añadiendo imagenes con Webpack
1. Instalamos file-loader.
   ~~~
   npm install --save-dev file-loader
   ~~~
2. Añadimos una nueva regla en el "webpack.config.js".
   ~~~
   rules: [
      // ...
      {
         test: /\.(png|gif|jpg)$/,
         use: [
            {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' },
            }
         ],
      },
   ],
   // ...
   ~~~
   - Con "hash" le pondremos un nombre aleatorio que se proporciona en forma de hash y con "ext" le dejamos la misma extencion que tenia.
3. Creamos una carpeta "static" dentro de "assets" y dentro ponemos los archivos a usar (Imagenes entre otros).
4. Importamos los archivos de las imagenes el los componentes a usar.
   - Ejemplo.
      ~~~
      import React from 'react';
      import nombreDeLaImagen from '../assets/static/nombre-del-archivo';

      const Component = () => (
      <img src={nombreDeLaImagen} />
      );

      export default Component;
      ~~~
5. Por ultimo, para ver varias listas del carrusel copiamos el codigo del carrusel en "App.jsx" y como queremos un titulo diferente le pasamos el nombre con un parametro / argumento al componente.
#### Importando Variable y Fuentes de Google en Sass
Para mejor experiencia intalar scss intellisense en VS.
1. En un archivo nuevo de sass "Vars.scss" incluiremos las variables y los imports.
   ~~~
   @import url(https://fonts.googleapis.com/css?family=Muli&display=swap);

   $theme-font: 'Muli', sans-serif;
   $main-color: #8f57fd;
   ~~~
2. Importamos dentro de "App.scss"
   ~~~
   @import './Vars.scss';
   body {
      margin: 0;
      font-family: $theme-font;
      background: $main-color;
   }
   // ...
   ~~~
3. Agregamos los demas estilos.
#### Creamos un fake API
Con la finalidad de tener una API para la data del proyecto creamos una de mentira con json-server.
1. Instalamos json-server de manera global y con permisos de admin o corremos un npx para no instalarlo.
   ~~~
   sudo npm install json-server -g
   ~~~
   ~~~
   npx json-server --watch initialState.json
   ~~~
2. Si lo instalamos corremos el servidor.
   ~~~
   json-server initialState.json
   ~~~
3. El archivo "initialState.json" que se usan en los comandos, es un archivo que tendra la data en json para simular las respuestas que devuelve el servidor.
#### Usando React Hooks: useEffect y useState
En resumen useState nos devuelve un array con dos elementos, el primero es el valor de nuesro estado, la segunda es una funcion que nos permite actualizar ese valor. El argumento que le enviamos es por defecto el valor del estado(initial state).
El hook useEffect es una funcion que nos permite ejecutar codigo cuando se monta, desmonta o actualiza un componente. El primer argumento que recibe es una funcion que se ejecutará cuando React monte o actualice el componente, esta funcion puede devolver otra funcion que se ejecuta cuando el componente se desmonte. El segundo argumento es una array donde podemos especificar que propiedades deben cambiar para que Reacr vuelva a llamar nuestro código. Por defecto, cuando no enviamos un segundo argumento, React ejecutara useEffect cada vez que el componente o componente padre se actualice, sin enviamos un array vacio la funcion solo se ejecuta al montar o desmontar el componente.
Esto es por facilitar las clases, podemos usarlo en una funcion evitando el constructor como inicializar los estados y el binding de las funciones. Ademas de que evitamos una cascada de elementos con los componentes y es mas facil transmitir las propiedades por los elementos.
1. importamos desde react useEffect y useState.
   ~~~
   import React, { useEffect, useState } from 'react';
   ~~~
2. La funcion debe tener un return explicito.
   ~~~
   const func = () => {
      return (
         // ...
      );
   }
   ~~~
3. Creamos 2 variables, la primeta sera el estado y la segunda una funcion que modificara ese estado (La primera variable). Estos se crean con la funcion useState(), ella recibe elementos para inicializar el estado. Esta vez queda con un [] porque es lo que necesitamos para el estado.
   ~~~
   const func = () => {
      const [ videos, setVideos ] = useState([]);

      return (
         // ...
      );
   }
   ~~~
4. Creamos la logica que modificara/establecera el estado con useEffect(). Esta traera la informacion de la API y se la pasaremos a setVideo (Que es una funcion traida por useState) que actualizara la variable/estado. useEffect recive una funcion anonima que tendra la logica necesaria para establecer el estado y un segundo parametro, este ultimo recive un parametro que se encarga de estar escuchando una propiedad que pueda cambiar y asi volver a ejecutarce. Si no queremos eso le pasamos un [].
   ~~~
   // ...
   const [ videos, setVideos ] = useState([]);

   useEffect(() => {
      fetch(URL_API)
         .then(response => response.json())
         .then(data => setVideos(data));
   }, []);
   // ...
   ~~~
5. Para comprobar, un console.log.
   ~~~
   // ...
      .then(data => setVideos(data));
   // ...
   console.log(videos);
   ~~~
#### Conectando la informacion de la API
1. Miramos la API para entender que variables nos pasa.
2. Validamos "MyList" ya que tiene un arreglo vacio, no mostramos nada si es asi de lo contrario la mostramos.
   ~~~
   // ...
   {videos.mylist?.length > 0 &&
      <Categories title="Mi Lista">
         <Carousel>
            <CarouselItem />
         </Carousel>
      </Categories>
   }
   // ...
   ~~~
3. Creamos una iteracion por cada item que arroje la API para mostrar tantos componentes de CarouselItem como sean necesarios. Le pasamos los parametros necesarios al componente, ya que son bastantes lo destructuramos y en el componente solo pedimos como parametros los que vamos a user.
   ~~~
   // ...
   <Categories title="Tendencias">
      <Carousel>
         {videos.trends?.map(item =>
            <CarouselItem key={item.id} {...item} />
         )}
      </Carousel>
   </Categories>
   // ...
   ~~~
   - El componente lo modificamos para que reciva los parametros que se destructuran.
      ~~~
      // ...
      const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
         // ... 
         <img className="carousel-item__img" src={cover} alt={title}>
         // ...
         <p className="carousel-item__details--title">{title}</p>
         <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration} minutos`}</p>
         // ...
      );
      ~~~
   - El signo de interrogacion al final de la variable "videos.trends?.length" es para comprobar que ese variable tenga valores dentro.
#### Custom Hooks
Son enpaquetado de funciones hooks personalizadas. Esto para separar la logica
1. Separamos en una carpeta "hooks" dentro de "src" nuestros Custom Hooks. Estos por convencion llevan use seguido del nombre del hooks (useInitialState.js).
2. Pasamos a este la logica de hooks junto con los imports necesarios.
   ~~~
   import { useState, useEffect } from 'react';

   const useInitialState = API => {
      const [ video, setVideo ] = useState([]);
      useEffect(() => {
         fetch(API)
            .then(response => response.json())
            .then(data = setVideo(data));
      }, []);
      return videos;
   }

   export default useInitialState;
   ~~~
3. Usamos el hooks en el componente que se necesita y manejamos los datos que arroja.
   ~~~
   // ...
   import useInitialState from '../hooks/useInitialState';

   const API = 'http://localhost:3000/initialState';

   // ...
   const initialState = useInitialState(API); // Usando el hooks para recivir los datos.
   const categories = Object.keys(initialState);

   return initialState.length === 0 ? <h1>Loading...</h1> : (
      <div className="App">
         <Search />
         {categories.map(categorie =>
         initialState[categorie]?.length > 0 &&
            <Categories key={categorie} title={categorie}>
               <Carousel>
               {initialState[categorie].map(item => 
                  <CarouselItem key={item.id} {...item} />
               )}
               </Carousel>
            </Categories>
         )}
         <Footer />
   // ...
   ~~~
#### PropTypes
Es una manera de trabajar con TS. No hay que confundir los propTypes con validación de datos. Esto solo nos permite asegurarnos que la data que se esta consumiendo es la correcta y evitar así un posible error. Si bien no son una herramienta que obligue al desarrollador a cumplir la validación, si nos ayuda a entender mejor el código.
1. instalamos prop-types con npm.
   ~~~
   npm install --save prop-types
   ~~~
2. Inportamos en el componente a usar y lo implementamos. CarouselItem.propTypes va con p minuscula porque esa es la convencion.
   ~~~
   import PropTypes from 'prop-types';
   // ...
   CarouselItem.propTypes = {
      cover: PropTypes.string,
      title: PropTypes.string,
      year: PropTypes.number,
      contentRating: PropTypes.string,
      duration: PropTypes.number,
   }

   export default CarouselItem;