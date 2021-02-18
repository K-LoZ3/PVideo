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