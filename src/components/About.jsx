import React, { useState, useEffect } from "react";
import curriculumData from "../data/curriculum.json";
import educationData from "../data/education.json";

const CurriculumCard = ({ curriculum }) => {
  return (
    <>
      <div className="card bg-muted py-6 flex lg:flex-row gap-10 items-center justify-center">
        <div class="space-y-2">
          <h3 class="text-xl font-bold mb-2 text-secondary">{curriculum.fecha}</h3>
          <h4 class="font-bold">{curriculum.puesto}</h4>
          <p class="text-gray-600">{curriculum.empresa}</p>
        </div>
        <p class="leading-relaxed text-gray-600 w-1/2 text-justify">
        {curriculum.shortBio}
        </p>
      </div>
    </>
  );
}

const EducationCard = ({ education }) => {
  return (
    <>
      <div className="card bg-muted py-6 flex lg:flex-row gap-10 items-center justify-center">
        <div class="space-y-2">
          <h3 class="text-xl font-bold mb-2 text-secondary">{education.fecha}</h3>
          <h4 class="font-bold">{education.titulo}</h4>
          <p class="text-gray-600">{education.universidad}</p>
        </div>
        <p class="leading-relaxed text-gray-600 w-1/2 text-justify">
          {education.shortBio}
        </p>
      </div>
    </>
  );
}

const About = () => {
  const [curriculums, setCurriculum] = useState(null);
  const [educations, setEducation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCurriculum(curriculumData);
    setEducation(educationData);
    setLoading(false);
  }, []);




  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">Cargando...</div>
    );
  }

  return (
    <section id="curriculum" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary before:content-['■'] before:mr-2 before:text-blue-500 before:scale-75 before:inline-block">Currículum</h2>
        </div>
        <div className=" py-6 flex justify-between flex-row lg:flex-row gap-10 ">
          <div class="space-y-2 justify-left">
            <h3 class="text-xl font-bold mb-2 ">Experiencia</h3>
          </div>
          <a
            href="/LorenaSotoSanMartin_CV.pdf"
            download="LorenaSotoCV.pdf"
            className="inline-block text-center bg-secondary hover:bg-secondary/90 text-white py-3 px-8 rounded-full shadow-xl transition-colors"
          >
            Descargar CV
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols12 gap-8">
          {curriculums.map((curriculum) => (
            <CurriculumCard curriculum={curriculum} />
          ))}
        </div>
        <div className=" py-6 flex flex-col lg:flex-row gap-10 ">
          <div class="space-y-2 justify-left">
            <h3 class="text-xl font-bold mb-2 ">Educación</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols12 gap-8">
          {educations.map((education) => (
            <EducationCard education={education} />
          ))}
        </div>
      </div>
    </section>
  )


};

export default About;
