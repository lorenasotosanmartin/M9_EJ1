import React, { useState, useEffect } from "react";
import contactData from "../data/contact.json";

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load contact data
    setContact(contactData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center">Cargando...</div>
    );
  }

  // Social media icon mapping
  const getIcon = (iconName) => {
    const icons = {
      linkedin: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      github: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      ),


    };

    return icons[iconName] || null;
  };

  return (
    <section id="contact" className="bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary before:content-['■'] before:mr-2 before:text-blue-500 before:scale-75 before:inline-block">Contacto</h2>

        </div>

        <div className="max-w-4xl mx-auto p-8 md:px-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-full pt-6">
              <div className="flex justify-center flex-wrap gap-6">
             
              <a href={`mailto:${contact.email}`} className="flex flex-col items-center group">
              <div className="w-12 h-12 text-white rounded-full bg-secondary flex items-center justify-center text-secondary  transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                </div>
                <span className="mt-2 text-gray-700">Correo</span>
              </a>
           
          
                {contact.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group"
                  >
                    <div className="w-12 h-12 rounded-full text-white bg-secondary flex items-center justify-center text-secondary  transition-all">
                      {getIcon(social.icon)}
                    </div>
                    <span className="mt-2 text-gray-700">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
