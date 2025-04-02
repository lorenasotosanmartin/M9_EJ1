import React, { useState, useEffect } from "react";
import personalData from "../data/personal.json";

const Hero = () => {
  const [personal, setPersonal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load personal data
    setPersonal(personalData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  return (
    <section id="home"
className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted"
>
  <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
   
  <div className="">
    <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden animate-fade-in mb-4 md:mb-0">
      <img
        src={personal.avatarUrl}
        alt={personal.name}
        className="w-full h-full object-cover"
      />
    </div>
    </div>
    <div className="md:w-1/2 text-center md:text-left animate-fade-in">
      <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">
        {personal.name}
      </h1>
      <h2 className="text-2xl text-center md:text-3xl text-gray-600 mb-4 md:mb-6">
        {personal.profession}
      </h2>
    
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-4">
          <a
            href="#projects"
            className="inline-block flex-1 text-center bg-secondary hover:bg-secondary/90 text-white py-3 px-8 rounded-full shadow-xl transition-colors"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="inline-block flex-1 text-center bg-white hover:bg-gray-100 text-primary py-3 px-8 rounded-full shadow-xl border border-gray-200 transition-colors"
          >
            Contacto
          </a>
        </div>
      <div className="flex flex-col gap-4 justify-center md:justify-start">
        <p className="text-lg text-justify text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
          {personal.shortBio}
        </p>
      
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;
