import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { loadProjects, type Project } from '../utils/projectLoader';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    loadProjects().then(setProjects);
  }, []);

  return (
    <main className="col-span-3 grid grid-cols-3">
      <div className="col-span-1"></div>
      <div className="col-span-1"></div>
      <div className="col-span-1 pl-[6px] pr-[6px]">
        <div className="space-y-4">
          {projects.map((project) => (
            <Link key={project.slug} to={`/projecten/${project.slug}`} className="block space-y-2 group">
              <ImageWithFallback 
                src={project.mainImage} 
                alt={project.title}
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <p className="mt-0 group-hover:text-blue-600 transition-colors duration-300">
                <span>{project.title}</span> <span style={{ fontFamily: '"Times New Roman", Times, serif', fontSize: '15px', fontStyle: 'italic' }}>— {project.location}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
