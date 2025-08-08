





import React from 'react';
import Hero from './component/Hero';
import Recent from './component/Recent';

import ProjectCard from './component/ProjectCard';

import img from './image/img.png';
import img2 from './image/img2.png'; 
import img3 from './image/img3.png'; 
import img4 from './image/img4.png'; 




function App() {
  return (
    <div>
     
      <Hero/>
      <Recent/>

      
      <div className="container mt-5">
        <h2 className="mb-4">Featured Works</h2>

        <ProjectCard
          image={img2}
          title="Designing Dashboards"
          description="Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat suntnostrud amet."
          year="2024"
        />
        <ProjectCard
          image={img3}
          title="Vibrant Portraits of 2020"
          description="Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat suntnostrud amet."
          year="2023"
        />
        <ProjectCard
          image={img4}
          title="36 Days of Malayalam type"
          description="Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat suntnostrud amet"
          year="2022"
        />
      </div>
    </div>
  );
}

export default App;