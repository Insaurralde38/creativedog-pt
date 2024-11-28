import React from 'react';
import CategoryCarousel from '@/components/molecules/CategoryCarousel';

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>¡Bienvenido a la página de inicio!</h1>
      <p>Has iniciado sesión correctamente.</p>
      <h1 className="text-center my-5">Categorías</h1>
      <CategoryCarousel />
    </div>
  );
};

export default HomePage;