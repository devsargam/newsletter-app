import { HeroSection } from '@/components/hero-section';
import { MainNav } from '@/components/nav-bar';

export default async function Home() {
  return (
    <main className='App'>
      <MainNav />
      <HeroSection />
    </main>
  );
}
