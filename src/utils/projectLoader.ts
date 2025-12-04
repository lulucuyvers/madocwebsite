typescript
// Project loader utility for reading markdown files
// This file provides functions to load project data from markdown files

import image_72039f5de393e436aa473964b08b59d629085268 from 'figma:asset/72039f5de393e436aa473964b08b59d629085268.png';
import image_4d66d5e44a1380364199ada1685f52ca640a3b03 from 'figma:asset/4d66d5e44a1380364199ada1685f52ca640a3b03.png';
import image_fdbb1cacdc29a37ef2a7abf9f71fff65baf60f45 from 'figma:asset/fdbb1cacdc29a37ef2a7abf9f71fff65baf60f45.png';

export interface Project {
  title: string;
  location: string;
  slug: string;
  mainImage: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  description?: string;
  published: boolean;
}

// Import projects from CMS markdown files (via Vite plugin)
let cmsProjects: Project[] = [];

// Try to load projects from the virtual module (production/build)
try {
  const virtualProjects = await import('virtual:projects');
  cmsProjects = virtualProjects.default || [];
} catch (e) {
  // Virtual module not available (development in Figma Make)
  console.log('CMS projects not loaded, using fallback data');
}

// Mock data for preview environment
const mockProjects: Project[] = [
  {
    title: "De Poorten",
    location: "Stam, Gent",
    slug: "de-poorten",
    mainImage: image_fdbb1cacdc29a37ef2a7abf9f71fff65baf60f45,
    image1: image_72039f5de393e436aa473964b08b59d629085268,
    image2: image_4d66d5e44a1380364199ada1685f52ca640a3b03,
    image3: "https://images.unsplash.com/photo-1763451161513-33d61eb02bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbmZvcm1hdGlvbiUyMHBhbmVsfGVufDF8fHx8MTc2NDMyMDgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "que conem ratur molupta volupt­tas quae.ria quiditaquiae plitatia eatis que et enimpore nonsend anditibusandigent molut vere si­maximpeles ant liquam rem non­sequis dic to maionseque volo­reste autat.\n\nEm ipsanitis molla voluptat. Lessitatest la dipsunt magnam quo te nim ipenimpore nonsend anditibusandigent molut vere si­maximpeles ant liquam rem non­sequis dic to maionseque volo­reste autat.\n\nEm ipsanitis molla voluptat. Lessitatest la dipsunt magnam quo te nim ip",
    published: true
  },
  {
    title: "Visserijmuseum",
    location: "Oostduinkerke",
    slug: "visserijmuseum",
    mainImage: "https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYWxsZXJ5JTIwc3BhY2V8ZW58MXx8fHwxNzY0Mjk2NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image1: image_72039f5de393e436aa473964b08b59d629085268,
    image2: image_4d66d5e44a1380364199ada1685f52ca640a3b03,
    image3: "https://images.unsplash.com/photo-1763451161513-33d61eb02bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbmZvcm1hdGlvbiUyMHBhbmVsfGVufDF8fHx8MTc2NDMyMDgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Een fascinerend museum gewijd aan de rijke traditie van de Belgische visserij. Ontdek de authentieke verhalen van vissers en hun families aan de kust.",
    published: true
  },
  {
    title: "Cultuurcentrum",
    location: "Leuven",
    slug: "cultuurcentrum-leuven",
    mainImage: "https://images.unsplash.com/photo-1762780087351-703502cdb85a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGNlbnRlciUyMGV4aGliaXRpb258ZW58MXx8fHwxNzY0MzMzMDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image1: "https://images.unsplash.com/photo-1747320735590-cf0571c39c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwbGlnaHRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzY0MzMzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image2: "https://images.unsplash.com/photo-1764079146323-6971a89aee47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMGJ1aWxkaW5nJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0MzMzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Een modern cultuurcentrum met een veelzijdig programma. Het gebouw combineert hedendaagse architectuur met functionele tentoonstellingsruimtes. De lichtinstallaties creëren een unieke sfeer voor elke expositie.\n\nHet centrum biedt plaats aan verschillende culturele manifestaties, van beeldende kunst tot podiumkunsten. De flexibele ruimtes maken diverse opstellingen mogelijk en zorgen voor een dynamische programmatie.",
    published: true
  },
  {
    title: "Museum aan de Stroom",
    location: "Antwerpen",
    slug: "mas-antwerpen",
    mainImage: "https://images.unsplash.com/photo-1737642256355-af3ecc10c5da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQyMzUzMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image1: "https://images.unsplash.com/photo-1654911443323-bc4f32eaf68b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwbXVzZXVtJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTc2NDMzMzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image2: image_4d66d5e44a1380364199ada1685f52ca640a3b03,
    description: "Het MAS vertelt het verhaal van Antwerpen en de haven door innovatieve tentoonstellingen. De architectuur van het gebouw is zelf al een kunstwerk met zijn markante silhouet aan de Schelde.\n\nDe collecties variëren van scheepvaart en handel tot beeldende kunst en volkskunde. Elk verdiep biedt een nieuw perspectief op de stad en haar rijke geschiedenis.",
    published: true
  },
  {
    title: "Erfgoedcentrum",
    location: "Brugge",
    slug: "erfgoedcentrum-brugge",
    mainImage: "https://images.unsplash.com/photo-1649294528168-8b60bd65069e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwcmVzdG9yYXRpb258ZW58MXx8fHwxNzY0MzI4MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image1: "https://images.unsplash.com/photo-1764079146323-6971a89aee47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZXJpdGFnZSUyMGJ1aWxkaW5nJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY0MzMzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image2: "https://images.unsplash.com/photo-1763451161513-33d61eb02bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbmZvcm1hdGlvbiUyMHBhbmVsfGVufDF8fHx8MTc2NDMyMDgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Een gerestaureerd historisch pand dat nu dienst doet als erfgoedcentrum. De zorgvuldige renovatie respecteert de oorspronkelijke architectuur terwijl moderne faciliteiten worden geïntegreerd.\n\nHet centrum verzamelt en presenteert het culturele erfgoed van de regio. Bezoekers ontdekken de geschiedenis door interactieve displays en authentieke objecten uit het verleden.",
    published: true
  },
  {
    title: "Kunstgalerij",
    location: "Mechelen",
    slug: "kunstgalerij-mechelen",
    mainImage: "https://images.unsplash.com/photo-1647628790522-d2716f6fcc61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtdXNldW0lMjBkaXNwbGF5fGVufDF8fHx8MTc2NDMzMzEwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image1: "https://images.unsplash.com/photo-1747320735590-cf0571c39c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwbGlnaHRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzY0MzMzMTA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image2: "https://images.unsplash.com/photo-1647792845543-a8032c59cbdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYWxsZXJ5JTIwc3BhY2V8ZW58MXx8fHwxNzY0Mjk2NTIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Een eigentijdse kunstgalerij met wisselende tentoonstellingen van nationale en internationale kunstenaars. De neutrale witte ruimtes laten de kunstwerken volledig tot hun recht komen.\n\nDe galerij richt zich op hedendaagse kunst in verschillende disciplines. Van schilderkunst tot installaties, elke expositie wordt zorgvuldig samengesteld en gepresenteerd.",
    published: true
  },
  {
    title: "Aquarium",
    location: "Blankenberge",
    slug: "aquarium-blankenberge",
    mainImage: "https://images.unsplash.com/photo-1749563426420-6068c4e1da14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcXVhcml1bSUyMGV4aGliaXQlMjB0YW5rfGVufDF8fHx8MTc2NDMzMzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image1: image_72039f5de393e436aa473964b08b59d629085268,
    image2: "https://images.unsplash.com/photo-1654911443323-bc4f32eaf68b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwbXVzZXVtJTIwaW5zdGFsbGF0aW9ufGVufDF8fHx8MTY0MzMzMzEwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Een fascinerend aquarium dat de onderwaterwereld van de Noordzee en tropische zeeën toont. De grote tanks bieden een indrukwekkend zicht op het maritieme leven.\n\nBezoekers maken kennis met honderden vissoorten en andere zeedieren in hun natuurlijke habitat. Educatieve programma's vergroten het bewustzijn over de oceanen en hun bescherming.",
    published: true
  },
  {
    title: "Maritiem Museum",
    location: "Nieuwpoort",
    slug: "maritiem-museum-nieuwpoort",
    mainImage: "https://images.unsplash.com/photo-1762846700605-f4ec53a1146d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJpdGltZSUyMG11c2V1bSUyMGRpc3BsYXl8ZW58MXx8fHwxNzY0MzMzMTAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    image1: image_4d66d5e44a1380364199ada1685f52ca640a3b03,
    image2: "https://images.unsplash.com/photo-1763451161513-33d61eb02bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbmZvcm1hdGlvbiUyMHBhbmVsfGVufDF8fHx8MTc2NDMyMDgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Het Maritiem Museum vertelt het verhaal van de visserij en scheepvaart aan de Belgische kust. Authentieke objecten en scheepsmodellen illustreren de rijke maritieme traditie.\n\nDe collectie omvat navigatie-instrumenten, vissersgereedschap en historische documenten. Temporaire tentoonstellingen belichten specifieke aspecten van het maritieme erfgoed.",
    published: true
  }
];

// Get all projects
export async function getAllProjects(): Promise<Project[]> {
  // In Figma Make preview: use mock data
  // When deployed locally/production with Vite: markdown files will be loaded
  // via a build-time plugin or dynamic import
  
  // TODO: When deploying, replace this with actual markdown loading via Vite plugin
  return Promise.resolve(cmsProjects.length > 0 ? cmsProjects : mockProjects);
}

// Get a single project by slug
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const allProjects = await getAllProjects();
  return allProjects.find(p => p.slug === slug) || null;
}

// Get all images for a project
export function getProjectImages(project: Project): string[] {
  const images: string[] = [project.mainImage];
  
  if (project.image1) images.push(project.image1);
  if (project.image2) images.push(project.image2);
  if (project.image3) images.push(project.image3);
  if (project.image4) images.push(project.image4);
  if (project.image5) images.push(project.image5);
  
  return images;
}
