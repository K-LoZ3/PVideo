# Proyecto en React
## Nuevo curso de React router y redux
Para empezar preparando todo el prof crea una rama diferente para este curso e instalamos. "react-router-dom"
   ~~~
   npm install react-router-dom --save
   ~~~
### Atributos para los Route Objectos:
path: la ruta en la que se renderizará el componente en forma de cadena de texto
exact: un booleano para definir si queremos que la ruta tiene o no que ser exacta para renderizar un componente. Eg: /index !== /index/all.
strict: un booleano para definir si queremos que el último slash sea tomado en cuenta para renderizar un componente. Eg: /index !== /index/.
sensitive: un booleano para definir si queremos distinguir entre minúsculas y mayúsculas, y tomar esto en cuenta para renderizar un componente. Eg: /index !== /Index
component: recibe un componente a renderizar. Crea un nuevo elemento de React cada vez. Esto causa que el componente se monte y desmonte cada vez (no actualiza).
render: recibe un método que retorna un componente. A diferencia de component no remonta el componente.
#### Crear nuestro archivo de Rutas
Dentro de nuestro proyecto vamos a crear una carpeta llamada routes donde vamos a ir añadiendo las rutas que necesitemos en la aplicación.
Las rutas que añadamos debemos definirlas con el componente Route y estas deben estar encapsuladas dentro del componente BrowserRouter del paquete de react-router-dom. Para definir una ruta con el componente Route debemos pasarle las props de:
path para indicar la url.
exact si queremos que funcione única y exactamente con la url que le digamos.
component para indicarle el componente que va a renderizar.
1. Creamos un archivo "App.js" en este pondremos la logica de react para las rutas.
   ~~~
   import React from 'react';
   import { BrowserRouter, Route } from 'react-router-dom';
   import Home from '../containers/Home';

   const App = () => (
      <BrowserRouter>
         <Route exact path="/" component={Home} />
      </BrowserRouter>
   );

   export default App;
   ~~~
2. Renombramis el componente App creado antes por para usarlos desde este archivo.
3. Cambiamos el import en index.js para que reiba como componente principal a este archivo.
   ~~~
   import App from './routes/App';
   // ...
   ~~~
#### Container Login
Manejamos multiples rutas con react.
1. Creamos en "containers" un componente "Login.jsx". dentro pondremos el componente.
   ~~~
    import React from 'react';

    const Login = () => (
       <section className='login'>
         <section className='login__container'>
            <h2>Inicia sesión</h2>
            <form className='login__container--form'>
               <input className='input' type='text' placeholder='Correo' />
               <input className='input' type='password' placeholder='Contraseña' />
               <button className='button'>Iniciar sesión</button>
               <div className='login__container--remember-me'>
                  <label>
                     <input type='checkbox' id='cbox1' value='first_checkbox' />
                     Recuérdame
                  </label>
                  <a href='/'>Olvidé mi contraseña</a>
               </div>
            </form>
            <section className='login__container--social-media'>
               <div>
                  <img src='../assets/google-icon.png' /> Inicia sesión con Google
               </div>
               <div>
                  <img src='../assets/twitter-icon.png' /> Inicia sesión con Twitter
               </div>
            </section>
            <p className='login__container--register'>
               No tienes ninguna cuenta <a href=''>Regístrate</a>
            </p>
         </section>
      </section>
   );

   export default Login;
   ~~~
2. incorporamos las imagenes entro del archivo.
   ~~~
   import googleIcon from '../assets/static/google-icon.png';
   import twitterIcon from '../assets/static/twitter-icon.png';
   // ...
   <section className='login__container--social-media'>
      <div>
         <img src={googleIcon} /> Inicia sesión con Google
      </div>
      <div>
         <img src={twitter} /> Inicia sesión con Twitter
      </div>
   </section>
   // ...
   ~~~
2. Creamos el Login.scss para los estilos de este conteiner ademas de importar los estilos dentro del componente.
   ~~~
   .login {
      background-image: linear-gradient(#21c08b, #8f57fd);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      padding: 0px 30px;
      min-height: calc(100vh - 200px); /* El ancho será igual al tamaño de todo el height menos 200px (100px del header + 100px del footer) */
   }

   .login__container {
      background-color: rgba(255,255,255,0.1);
      border: 2px solid white;
      border-radius: 40px;
      box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      min-height: 700px;
      padding: 60px 60px 40px;
      width: calc(100% / 2);
   }

   .login__container--form {
      display: flex;
      flex-direction: column;
   }

   .login__container--form label {
      font-size: 14px;
   }

   .login__container--remember-me {
      color: white;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
   }

   .login__container--remember-me a {
      color: white;
      font-size: 14px;
      text-decoration: none;
   }

   .login__container--remember-me a:hover {
      text-decoration: underline;
   }

   .login__container--social-media > div {
      align-items: center;
      display: flex;
      font-size: 14px;
      margin-bottom: 10px;
   }

   .login__container--social-media > div > img {
      margin-right: 10px;
      width: 30px;
   }

   .login__container--register {
      font-size: 14px;
   }

   .login__container--register a {
      color: white;
      font-weight: bold;
      font-size: 16px;
      text-decoration: none;
   }

   .login__container--register a:hover {
      text-decoration: underline;
   }

   .login__container--form > .input {
      background-color: transparent;
      border-bottom: 2px solid white;
      border-left: 0px;
      border-right: 0px;
      border-top: 0px;
      color: white;
      font-family: 'Muli', sans-serif;
      font-size: 16px;
      height: 50px;
      margin-bottom: 20px;
      outline: none;
      padding: 0px 20px;
      min-width: 100%;
   }

   ::placeholder {
      color: white;
   }

   .button {
      background-color: rgba(255, 255, 255, 0.3);
      border: none;
      border-radius: 25px;
      color: white;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      font-family: 'Muli', sans-serif;
      height: 50px;
      letter-spacing: 1px;
      margin: 10px 0px;
   }
   ~~~
3. En "App.js" importamos login y lo añadimos a una ruta.
   ~~~
   import Login from '../containers/Login';
   // ...
   <Route exact path="/" component={Home} />
   <Route exact path="/login" component={Login} />
   // ...
   ~~~
4. Debemos modificar nuestra configuración del entorno de desarrollo local para que pueda funcionar con el uso de rutas, debemos ir al archivo webpack.config.js y añadir este fragmento de código antes de plugins:
   ~~~
   // ...
   devServer: {  
      historyApiFallback: true,  
   },
   plugins: [
   // ...
   ~~~
#### Cntainer Register
Hacemos lo mismo que con login.
1. Creamos el container.
2. Creamos los estilos y los importamos en el container.
3. Agregamos la ruta "/regiter" al App.js.
4. Incluimos switch en el proyecto importandolo de react-router-dom.
   - Para asegurar que nuestras rutas solamente se rendericen con la que haga match con la url debemos encapsular las rutas dentro del componente .
   ~~~
   <Switch>
   // Rutas
   </Switch>
   ~~~
   - La diferencia entre poner el switch y no ponerlo es que cuando tienes el mismo path para todos solamente toma el primero y lo renderiza.
#### Container NotFound
Este es el componente que se mostrara cuando no se encuentre la ruta dentro del proyecto. Los pasos son los mismos salvo que la ruta no tendra path ni sera exact, de esta manera este coponente pasara cuando se coloque alguna ruta que no este expecificada. Debemos añadir esta ruta al final del Switch para que sea el caso por default.
#### Componente Layout
Este componente se encargara de presentar el header y el footer simpre para que no haga falta importarlos en cada componente.
1. Lo creamos y dentro le ponemos la funcionalidad de recibir un hijo.
2. lo importamos dentro de App.js y el hijo que recivira sera el Switch component con las rutas que manejara.
#### Manejando enlaces y configuraciones
Esto es con el Componente Link de "react-router-dom".El componente es similar a un elemento ya que nos permite navegar dentro de la aplicación, pero sin la necesidad de tener que recargar la página. Para indicarle el destino a simplemente debemos pasarle la prop to='/mi-enlace'.
1. Importamos Link en cada componente que se necesite.
2. Cada enlace se cambiara por este componente y su ruta.
### Redux
#### ¿Que es Redux?
Redux nos permite tener un contenedor predecible del estado en aplicaciones creadas con JavaScript, Nos ayuda a escribir aplicaciones que se comportan de una manera consistente, Esto significa que podemos utilizar esta lógica en aplicaciones del lado del cliente, trabajar del lado del servidor o crear aplicaciones para dispositivos móviles.
Uno de los principales uso que tiene Redux es con React pero puede ser implementado en cualquier librería o proyecto que este construido con JavaScript, lo cual incluye a Angular, Vue o algún otro framework o librería.
Redux nace de la arquitectura Flux, tomando inspiración del lenguaje funcional Elm y es creado por Dan Abramov y Andrew Clark en el 2015, Hoy en día es una de las librerías más utilizadas para el manejo del flujo de la información en aplicaciones.
Una de las principales motivaciones para crear Redux nace en resolver un problema y era el manejo del estado y el flujo de nuestras aplicaciones creadas en JavaScript. Redux propone una forma de manejar el estado donde podamos controlar cómo vamos a interactuar con otros elementos (llamadas a un API) o interacciones dentro de nuestra aplicación, teniendo en cuenta esto, Redux intenta de predecir las mutaciones que pueda sufrir el estado, creando restricciones de cuando y como pueden ser ejecutadas las actualizaciones en nuestras aplicaciones.
Redux es una librería muy pequeña que se puede incorporar en cualquier proyecto construido en JavaScript y se basa en tres principios:
###### Única fuente de la verdad:
Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.
###### El estado es de solo lectura
La única forma de modificar el estado es emitiendo un acción, este objeto describe lo que va a ocurrir.
###### Los cambios se realizan con funciones puras
Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias.
Teniendo en cuenta esta información continuaremos en el curso explicando cada uno de estos elementos que incorpora Redux en nuestra aplicación Platzi Video.
###### Provider
Recuerdar que se tiene que encapsular nuestra aplicación dentro de un provider, porque nada fuera del provider podrá acceder al store.
El Provider hace que la store de Redux esté disponible para cualquier componente anidado que se haya incluido en la función connect().
Dado que cualquier componente React en una aplicación React Redux se puede conectar, la mayoría de las aplicaciones mostrarán un Provider en el nivel superior, con el árbol de componentes completo de la aplicación dentro de él Normalmente, no puede usar un componente conectado a menos que esté anidado dentro de un Provider.
EL lugar donde se usa el Provider es en index.js ya que si encapsulamos el componente App al momento de pasarlo al render todos los componentes podran entrar al Provider.
1. Instalamos redux y react-dedux como dependencia de produccion.
   ~~~
   npm install redux react-redux --save
   ~~~
2. Creamos las carpetas "actions" y "reducers", dentro de cada una incluiremos un index.js que tendra la logica de cada uno.
3. Importamos react-redux y el redux para el Provider y el createStore dentro del index.js principal.
*Esta basado en el patrón de diseño Flux
*Toda la data de la aplicación, se encuentra en una estructura previamente definida.
*Toda la informción se encontrará almacenada en un único lugar llamado STORE.
*El STORE jamas se modifica de forma directa.
*Interacciones de usuario y/o código, dispara acciones que describen qué sucedió
*El valor actual de la información de la aplicación se llama - State
*Un nuevo estado es creado, en base a la combinanción del viejo estado y una acción, por una función llamada Reducer.
###### Creando el Store de Redux
Para crear un Store necesitamos llamar a la función createStore del paquete de redux pasándole los parámetros del reducer y initialState.
Para conectar un componente a Redux vamos a necesitar importar connect de react-redux, connect va a aceptar dos parámetros:
mapStateToProps: es una función que le va a indicar al provider qué información necesitamos del store.
mapDispatchToProps: es un objeto con las distintas funciones para ejecutar una action en Redux.
4. Usamos el create estore para crear el store con los datos iniciales y cargarlos al provider.
   ~~~
   const store = createStore(reducer, initialState);
   ~~~
   - El initialState tendra el Json de toda la base de datos. todo el Json del initialState.json.
5. En el "Home" que es el unico componente que de momento necesita datos aremos los cambios para que use el store creado.
   - Importamos connect de react-redux para conenctar con el store y lo implementamos al exportar el componente.
      ~~~
      export default connet(mapStateToProps, null)(Home);
      ~~~
      Los parametros estan definidos arriba. En el segundo pasamos null porque no tenemos acciones dentro del proyecto, estas la agregaremos luego.
   - Creamos la funcion del primer parametro.
      ~~~
      const mapStateToProps = state => {
         return {
            myList: state.myList,
            trends: state.trends,
            originals: state.originals,
         }
      }
      ~~~
   Ya state que es el parametro que recive esta funcion se lo pasa connect dentro de ella cuando esta conectando y esto seria el estado inicial, o store con el estado inicial que le pasamos, o el estado que tenga si fue modificado. Es por eso que puede llamar a los elementos del initialState, luego retornamos un objeto con esos valores en sus respectivos argumentos para que los reciba Home component desde los props de manera destrusturada los podemos usar muy facil.
      ~~~
      // ...
      const Home = ({ myList, trends, originals }) => {
      // ...
      ~~~
6. Creamos el reducer ('src/reducers/index.js') que le pasamos a la funcion createStore en el index pricipal y lo importamos en este.
   ~~~
   const reducer = (state, action) => {
      return state;
   }

   export default reducer;
   ~~~
   Este es sencillo puesto que no se tenemos ni acciones ni nada que necesite cambiar el store. Retornamos el estado inicial tal cual lo recibimos.