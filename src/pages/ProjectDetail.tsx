import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { getProjectBySlug, getProjectImages, type Project } from '../utils/projectLoader';

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      getProjectBySlug(slug).then((p) => {
        setProject(p);
        setLoading(false);
      });
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="col-span-3 grid grid-cols-3">
        <div className="col-span-2 px-6 py-12">
          <p>Laden...</p>
        </div>
      </main>
    );
  }

  if (!project) {
    return (
      <main className="col-span-3 grid grid-cols-3">
        <div className="col-span-2 px-6 py-12">
          <p>Project niet gevonden</p>
        </div>
      </main>
    );
  }

  const images = getProjectImages(project);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: -scrollContainerRef.current.clientHeight, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ top: scrollContainerRef.current.clientHeight, behavior: 'smooth' });
    }
  };

  return (
    <main className="col-span-3 grid grid-cols-3 h-[calc(100vh-88px)]">
      <div className="col-span-2 pl-[6px] pr-[6px] relative overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div 
          ref={scrollContainerRef}
          className="flex flex-col gap-[6px] snap-y snap-mandatory"
        >
          {images.map((image, index) => (
            <div key={index} className="snap-start">
              <ImageWithFallback 
                src={image} 
                alt={`${project.title} - afbeelding ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 pl-[6px] pr-[6px] overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div>
          <ImageWithFallback 
            src={project.mainImage} 
            alt={project.title}
            className="w-full h-auto mb-[6px] cursor-pointer"
            onClick={() => navigate('/projecten')}
          />
          <p className="text-blue-600 mb-4">
            <span>{project.title}</span> <span style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '15px', fontStyle: 'italic' }}>— {project.location}</span>
          </p>
          <p className="whitespace-pre-line">{project.description}</p>
        </div>
      </div>
    </main>
  );
}
