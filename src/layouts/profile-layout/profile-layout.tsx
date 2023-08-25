import AboutSection from './components/about-section';
import TechSection from './components/tech-section';
import EducationSection from './components/education-section';
import CompanySection from './components/company-section';

export default function ProfileLayout() {
  return (
    <main>
      <AboutSection />
      <TechSection />
      <EducationSection />
      <CompanySection />
    </main>
  );
}
