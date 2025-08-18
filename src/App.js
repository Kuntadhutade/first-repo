





// import React from 'react';
// import Hero from './component/Hero';
// import Recent from './component/Recent';
// import ProjectCard from './component/ProjectCard';
// import BlogPage from './component/BlogPage';

// import FeaturedWorks from './component/FeatureWorks';
// import img from './image/img.png';
// import img2 from './image/img2.png'; 
// import img3 from './image/img3.png'; 
// import img4 from './image/img4.png'; 




// function App() {
//   return (
//     <div>
     
//        <Hero/>
//      <Recent/>
//       <BlogPage />

//        {/* <FeaturedWorks/>  */}

//        {/* <div className="container mt-5">
//         <h2 className="mb-4">Featured Works</h2> */}

//         <ProjectCard
//           image={img2}
//           title="Designing Dashboards"
//           description="Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat suntnostrud amet."
//           year="2024"
//         />
//         <ProjectCard
//           image={img3}
//           title="Vibrant Portraits of 2020"
//           description="Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat suntnostrud amet."
//           year="2023"
//         />
//         <ProjectCard
//           image={img4}
//           title="36 Days of Malayalam type"
//           description="Amet minim mollit deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam consequat suntnostrud amet"
//           year="2022"
//         />
//        </div>

//     //  </div>
//  );
//   } 
   


// export default App;



import React from 'react';
// import NavBar from './component/NavBar';
// import Hero from './component/Hero';
// import Recent from './component/Recent';
// import ProjectCard from './component/ProjectCard';
// import BlogPage from './component/BlogPage';
//  import UserList from './component/UserList';
// import Todos from './component/Todos';
import TodoList from './component/TodoList';



// import img from './image/img.png';
// import img2 from './image/img2.png';
// import img3 from './image/img3.png';
// import img4 from './image/img4.png';

function App() {
  return (
    <div>
      {/* <NavBar />
      <Hero />
      <Recent /> */}
      {/* <Todos/> */}
      <TodoList/>

     {/* <UserList/> */}

       {/* <section className="container my-5">
  <h2 className="mb-4">Featured Works</h2>
  <div className="row">
    <div className="col-12">
      <ProjectCard 
        image={img2} 
        title="Vibrant Portraits" 
        description="Amet minim mollit..." 
        year="2023" 
      />
    </div>

    <div className="col-12">
      <ProjectCard 
        image={img3} 
        title="36 Days of Malayalam type" 
        description="Amet minim mollit..." 
        year="2022" 
      />
    </div>

    <div className="col-12">
      <ProjectCard 
        image={img4} 
        title="Creative Illustrations" 
        description="Amet minim mollit..." 
        year="2021" 
      />
    </div>
  </div>
</section> 


      
      <BlogPage /> */}
    </div>
  );
}

export default App;
