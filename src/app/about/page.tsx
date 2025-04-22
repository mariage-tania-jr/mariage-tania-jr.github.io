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
    </AboutLayout>
  );
};

export default About;
