'use client'
import { useCallback, useState } from 'react';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Mic, Calendar, Bell, Star , ChevronDown, ChevronUp} from "lucide-react";
import { useRef} from 'react';
import Image from 'next/image';
// Interfaz para las props de FeatureCard
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Interfaz para las props de TestimonialCard
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

// Interfaz para las props de FaqItem
interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const scrollToTop = useCallback(() => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col w-full max-w-full overflow-x-hidden">
  {/* Header simplificado con botón CTA */}
  <header className="bg-white fixed top-0 z-10 w-full">
  <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
    {/* Logo con imagen */}
    <button onClick={scrollToTop} className="flex items-center">
    <Image src="/logo.jpeg" alt="Galo Logo" width={40} height={40} className="rounded-full mr-2" />
      <span className="text-2xl font-bold text-gray-800">Galo</span>
    </button>

    {/* Botón CTA */}
    <a href="https://wa.me/5491124956544" target="_blank" rel="noopener noreferrer">
      <Button className="bg-green-300 hover:bg-green-400 text-white px-6 sm:px-4 py-3 rounded-full text-lg sm:text-md font-semibold transition-colors duration-300">
        Comenzar a usar Galo
      </Button>
    </a>
  </div>
</header>

      {/* Sección Principal */}
      <main className="flex-grow pt-20">
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-green-100 to-white">
  <h1 className="text-6xl font-bold text-gray-800 mb-4">Galo</h1>
  <p className="text-2xl text-gray-600 mb-8">Tu asistente de WhatsApp con IA</p>

  {/* Botón CTA con enlace a WhatsApp */}
  <a href="https://wa.me/5491124956544" target="_blank" rel="noopener noreferrer">
    <Button className="bg-green-300 hover:bg-green-400 text-white px-6 sm:px-4 py-3 rounded-full text-lg sm:text-md font-semibold transition-colors duration-300">
      Comenzar a usar Galo
    </Button>
  </a>
</section>

  <section ref={featuresRef} id="features" className="py-20 bg-white">
    <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Características</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Mic className="w-6 h-6 text-blue-500" />}
          title="Transcripción de audio"
          description="Convierte tus mensajes de voz en texto fácilmente"
        />
        <FeatureCard
          icon={<Bell className="w-6 h-6 text-green-500" />}
          title="Recordatorios"
          description="Agenda y recibe recordatorios importantes"
        />
        <FeatureCard
          icon={<Calendar className="w-6 h-6 text-purple-500" />}
          title="Sincronización de calendario"
          description="Mantén tus eventos sincronizados automáticamente"
        />
        <FeatureCard
          icon={<MessageSquare className="w-6 h-6 text-yellow-500" />}
          title="Chat inteligente"
          description="Interactúa con una IA avanzada para resolver tus dudas"
        />
      </div>
    </div>
  </section>

        <section ref={testimonialsRef} id="testimonials" className="py-20 bg-gray-50">
          <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Lo que dicen nuestros usuarios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="María García"
                role="Emprendedora"
                content="Galo me ayudó completamente a manejar mis tareas diarias. ¡Es como tener un asistente personal adentro de WhatsApp!"
              />
              <TestimonialCard
                name="Carlos Rodríguez"
                role="Gerente de Proyectos"
                content="La sincronización con Google Calendar me resuelve la vida. Galo es una herramienta increíble."
              />
              <TestimonialCard
                name="Ana Martínez"
                role="Estudiante"
                content="La transcripción de audio es increíblemente útil para mi vida universitaria. Durante la clase puedo transcribir audios cuando no puedo escuchar."
              />
            </div>
          </div>
        </section>

        <section ref={faqRef} id="faq" className="py-20 bg-white">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Preguntas frecuentes</h2>
    <div className="space-y-4">
      <FaqItem
        question="¿Cómo puedo empezar a usar Galo?"
        answer="Para comenzar a usar Galo, simplemente agrega nuestro número de WhatsApp a tus contactos y envía un mensaje. Te guiaremos a través del proceso de configuración."
        isOpen={openFaq === 0}
        toggle={() => toggleFaq(0)}
      />
      <FaqItem
        question="¿Es seguro usar Galo con mi información personal?"
        answer="Sí, la seguridad de tus datos es nuestra prioridad. Utilizamos encriptación de extremo a extremo y no almacenamos información sensible."
        isOpen={openFaq === 1}
        toggle={() => toggleFaq(1)}
      />
      <FaqItem
        question="¿Puedo usar Galo en múltiples dispositivos?"
        answer="Sí, Galo se sincroniza con tu cuenta de WhatsApp, por lo que puedes usarlo en cualquier dispositivo donde tengas WhatsApp instalado."
        isOpen={openFaq === 2}
        toggle={() => toggleFaq(2)}
      />
    </div>
  </div>
</section>


<section ref={contactRef} id="contact" className="py-20 bg-gray-50">
  <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contáctanos</h2>
    
    {/* Formulario de contacto */}
    <form className="space-y-6">
      {/* Campo de Email con ícono */}
      <div className="relative">
        <input 
          type="email" 
          placeholder="Tu email" 
          className="w-full pl-10 py-4 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300 transition-shadow duration-200" 
        />
        {/* Ícono de Email */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2zm0 4l9 6 9-6" />
</svg>
  </div>
      </div>
      
      {/* Campo de Mensaje */}
      <textarea
        placeholder="Escribe tu mensaje"
        className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-300 transition-shadow duration-200"
        rows={4}
      ></textarea>

      {/* Botón de Enviar */}
      <button className="w-full bg-green-300 hover:bg-green-400 text-white py-4 rounded-full font-semibold transition-colors duration-300">
        Enviar mensaje
      </button>
    </form>
  </div>
</section>

      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Galo AI</h3>
              <p>Tu asistente de WhatsApp con IA</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 Galo AI. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          {/* Ajusta el color del título a negro */}
          <h3 className="text-xl font-semibold ml-3 text-black">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  return (
    <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400" />
        </div>
        <p className="text-gray-600 mb-4">{content}</p>
        <div>
          <p className="font-semibold text-black">{name}</p>
          <p className="font-i text-gray-500 mb-4">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function FaqItem({ question, answer, isOpen, toggle }: FaqItemProps) {
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggle}
      >
        {/* Cambia el color de las preguntas a un tono más oscuro */}
        <span className={`text-lg font-semibold ${isOpen ? 'text-gray-800' : 'text-gray-800'}`}>
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600">{answer}</p>
      )}
    </div>
  );
}
