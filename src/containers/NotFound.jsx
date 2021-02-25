import React from 'react';
import '../assets/styles/components/NoFound.scss';

const NotFonud = () => (
   <section className="error">
      <div className="error__main">
         <h1 className="animate__pulse">404</h1>
         <label>Pagina no encontrada</label>
      </div>
   </section>
);

export default NotFonud;