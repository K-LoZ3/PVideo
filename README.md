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