import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';

import '../assets/styles/App.scss';

const App = () => (
   <div className="App">
      <Header />
      <Search />
   </div>
);

export default App;

// Archivo html completo.
/* 
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet">
  <!-- Styles -->
  <link rel="stylesheet" href="./styles.css">
  <!-- Title -->
  <title>PlatziVideo</title>
</head>
<body>
  <header class="header">
    <img class="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Platzi Video">
    <div class="header__menu">
      <div class="header__menu--profile">
        <img src="../assets/user-icon.png" alt="">
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>

  <section class="main">
    <h2 class="main__title">¿Qué quieres ver hoy?</h2>
    <input type="text" class="input" placeholder="Buscar...">
  </section>

  <h3 class="categories__title">Mi lista</h3>

  <section class="carousel">
    <div class="carousel__container">
  
      <div class="carousel-item">
        <img class="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div class="carousel-item__details">
          <div>
            <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon"> 
            <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon"> 
          </div>
          <p class="carousel-item__details--title">Título descriptivo</p>
          <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
            <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
          </div>
          <p class="carousel-item__details--title">Título descriptivo</p>
          <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
      </div>

    </div>
  </section>

  <h3 class="categories__title">Tendencias</h3>

  <section class="carousel">
    <div class="carousel__container">

      <div class="carousel-item">
        <img class="carousel-item__img" src="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
            <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
          </div>
          <p class="carousel-item__details--title">Título descriptivo</p>
          <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="carousel-item__img" src="https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""  />
        <div class="carousel-item__details">
          <div>             
            <img class="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon">
            <img class="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon">
          </div>
          <p class="carousel-item__details--title">Título descriptivo</p>
          <p class="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
        </div>
      </div>

    </div>
  </section>

  <footer class="footer">
    <a href="/">Terminos de uso</a>
    <a href="/">Declaración de privacidad</a>
    <a href="/">Centro de ayuda</a>
  </footer>
</body>
</html> 
*/