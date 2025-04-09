import AboutLayout from '@/components/AboutLayout';


const About = () => {
  return (
    <AboutLayout
      title="Jean-Romain Luttringer"
      subtitle={`Assistant  Professor\nICube, Network Research Group\nIUT Robert Schuman / Master SIRIS`}
    >
      {/* Introduction paragraph */}
      <div className="intro">
        <p>
          I am a Ph.D. in Computer Networks currently working as an Assistant Professor at the University of Strasbourg, in the Network Research Group of the ICube laboratory, 
          
          where I also did my Ph.D. under the guidance of Cristel Pelsser, Pascal Mérindol and Quentin Bramas.
        </p>
        <p>
        My work focuses around routing, from inter-domain routing to intra-domain traffic engineering. I have also worked on Internet topology discovery and large-scale monitoring.
        </p>
        <p>
          I have also taught around 500 hours in programming, development, and computer networks to 1st-5th year students -- and thoroughly enjoyed doing so!
        </p>
      </div>
      
      {/* Research Interests and Education side by side */}
      {/* <div className="about-sections">
        <div className="section">
          <h3>Research Interests</h3>
          <ul>
            <li>Programmable networks</li><br />
            <li>Inter- and Intra-Domain Path Computation</li><br />
            <li>Internet topology discovery</li><br />
            <li>Large-scale network monitoring</li><br />
          </ul>
        </div> */}

        {/* <div className="section">
        <h3>Education</h3>
            <ul className="custom-bullets">
              <li>
                Ph.D. in Computer Networks (2022)
                <br />
                <span className="education-details">University of Strasbourg </span>
                <br />
              </li>
              <li>
                M.Sc. in Computer Networks and <br/> Embedded Systems (2019)
                <br />
                <span className="education-details">University of Strasbourg <br /> Highest Honors</span>
                <br />
              </li>
              <li>
                B.Sc. in Maths and Computer Science (2017)
                <br />
                <span className="education-details">University of Strasbourg <br /> Honors</span>
                <br />
              </li>
            </ul>
        </div> */}
      {/* </div> */}
    </AboutLayout>
  );
};

export default About;
