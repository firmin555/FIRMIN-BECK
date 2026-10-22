import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { RealisationSection } from './components/RealisationSection';
import { WhyChooseMeSection } from './components/WhyChooseMeSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServicesEstimatorModal } from './components/ServicesEstimatorModal';
import { PortfolioBookModal } from './components/PortfolioBookModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [estimatorInitialService, setEstimatorInitialService] = useState<string>('');
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('accueil');
  
  // Official 19-Page Portfolio Book Reader state
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [bookModalPage, setBookModalPage] = useState<number>(1);

  // Track active section on scroll for navbar indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'temoignages', 'portfolio', 'services', 'a-propos'];
      const scrollY = window.scrollY;

      if (scrollY < 300) {
        setActiveSection('accueil');
        return;
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = (customMessage?: string) => {
    if (customMessage) {
      setContactInitialMessage(customMessage);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookReader = (pageNumber: number = 1) => {
    setBookModalPage(pageNumber);
    setIsBookModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setEstimatorInitialService(serviceName);
    setIsEstimatorOpen(true);
  };

  const handleSelectServiceFromProject = (serviceName: string) => {
    setEstimatorInitialService(serviceName);
    setIsEstimatorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0e12] text-slate-100 flex flex-col font-sans selection:bg-[#f5b716] selection:text-slate-950">
      {/* 1. Header Navigation */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        onOpenBook={() => handleOpenBookReader(1)}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 2. Hero Section (Dark) */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* 3. Mes Services (Light) */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* 4. À propos de moi (Dark) with Page 2 Sketch Portrait & Bio */}
        <AboutSection onOpenBookReader={handleOpenBookReader} />

        {/* 5. Mes Réalisations (Light) - Official 19 Portfolio Pages aligned 1 to 19 */}
        <RealisationSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenBookReader={handleOpenBookReader}
        />

        {/* 6. Pourquoi me choisir ? + CTA Box (Light) */}
        <WhyChooseMeSection onOpenContact={() => handleOpenContact()} />

        {/* 7. Témoignages Clients (Dark) */}
        <TestimonialsSection />

        {/* 8. Contact Direct & Devis (Dark) */}
        <ContactSection initialMessage={contactInitialMessage} />
      </main>

      {/* 9. Footer (Dark) */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Official 19-Page Interactive Portfolio Book Reader */}
      <PortfolioBookModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
        initialPageNumber={bookModalPage}
        onOpenContact={handleOpenContact}
      />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectService={handleSelectServiceFromProject}
      />

      {/* Full Services & Quote Estimator Modal */}
      <ServicesEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onOpenContact={handleOpenContact}
        initialService={estimatorInitialService}
      />
    </div>
  );
}
