import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <ul>
          <h2> Technologies Used:</h2>
          <li> React</li>
          <li> Redux</li>
          <li> Redux Saga</li>
          <li> Node JS</li>
          <li> Express</li>
          <li> PostgreSQL</li>
          <li> Material UI</li>
          <li> Adobe Illustrator</li>
          <li> Lucid</li>
          <h2> Future Additions </h2>
          <li> User to user interaction</li>
            <p> Including: searchable users and messaging </p><br />
          <li>Match play in addition to single <br />
             game logging</li><br />
           <li> Implement Google Places</li><br />
           <li> Live scoring </li>

             <h2>Acknowledgments</h2>
             <li>Prime Academy</li>
             <li>Instructor: Chris Black</li>
             <li>Code Coach: Peter DeMaio</li>
             <li>Phrygian Cohort</li>
             <li>Mentors: Jake and Amanda</li>
             <li>Prime Alumni</li>
             <li>Most of all, friends and family <br />
             for their support</li>
             
             
          


          

        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
