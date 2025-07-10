import { useState, useEffect } from 'react';

export default function Works() {
  const [filter, setFilter] = useState('frontend');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProjects = projects.filter((project) => project.category === filter);

  return (
    <article id="art-works">
      <h2>Proyectos</h2>
      <div id="btns-works">
        <button onClick={() => setFilter('frontend')}>Frontend Developer</button>
        <button onClick={() => setFilter('data')}>Data Analyst</button>
        <button onClick={() => setFilter('machine')}>Machine Learning</button>
        <button onClick={() => setFilter('others')}>Others</button>
      </div>

      <div className="mostrar-proyectos">
        {filteredProjects.length === 0 ? (
          <p>No hay proyectos para esta categoría.</p>
        ) : (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image_url}
                alt={project.title}
                style={{ width: '100%', borderRadius: '10px' }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div style={{ marginTop: '10px' }}>
                <a href={project.github_url} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
                <a href={project.youtube_url} target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </div>
          ))
        )}
      </div>
    </article>
  );
}
