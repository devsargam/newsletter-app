import { MainNav } from '@/components/NavBar';
import { HeroSection } from '@/components/hero-section';

export default async function Home() {
  return (
    <main className="App">
      <MainNav />
      <HeroSection />
    </main>
  );
}
