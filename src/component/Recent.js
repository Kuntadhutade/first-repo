import React from 'react';

function Recent() {
  const posts = [
    {
      title: "Making a design system from scratch",
      date: "12 Feb 2020",
      tags: "Design, Pattern",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },

    {
      title: "Creating pixel perfect icons in Figma",
      date: "12 Feb 2020",
      tags: "Figma, Icon Design",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ];

  return (
    <section className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Recent posts</h3>
      </div>

      <div className="row">
        
       
        <div className="col-md-6 mb-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="fw-bold">Making a design system from scratch</h5>
            <div className="text-muted mb-2">12 Feb 2020 &nbsp;  Design, Pattern</div>
            <p className="text-secondary">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

       
        <div className="col-md-6 mb-4">
          <div className="p-3 border rounded shadow-sm h-100">
            <h5 className="fw-bold">Creating pixel perfect icons in Figma</h5>
            <div className="text-muted mb-2">12 Feb 2020 &nbsp;  Figma, Icon Design</div>
            <p className="text-secondary">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Recent;
