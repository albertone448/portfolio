import { Hero } from '../components/sections/Hero';
import { SelectedWork } from '../components/sections/SelectedWork';
import { Experience } from '../components/sections/Experience';
import { Toolkit } from '../components/sections/Toolkit';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <Experience />
      <Toolkit />
      <About />
      <Contact />
    </>
  );
}
