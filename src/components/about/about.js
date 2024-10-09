import React from 'react'


const About = (props) => {



    return (
      <section id="about" className={"" + props.hclass}>
        <div className="wraper">
          <div className="section-top-content">
            <h2 className="poort-text poort-in-right">About Me</h2>
            <h3 className="poort-text poort-in-right">
              Design is My Passion, Which Create Me More Professional.
            </h3>
            <h4
              className="scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              I have
              <span> 2+ </span>
              years of experiences in this design field for give you better
              services.
            </h4>
            <p
              className="scroll-text-animation"
              data-animation="fade_from_bottom"
            >
              I am an innovative front-end developer with 2+ years of experience
              in building and maintaining websites. I am proficient in
              converting Figma/PSD/Xd designs in to HTML, CSS, and WordPress, as well as
              utilizing Bootstrap and JavaScript, with a focus on modern
              libraries like React JS. I am passionate about bringing designs to
              life and creating beautiful, user-friendly experiences for all
              users. I possess strong interpersonal skills, enabling me to build
              productive working relationships. As an excellent team player with
              a global mindset, I thrive in collaborative environments.
            </p>
          </div>
          {/* <ul
            className="scroll-text-animation"
            data-animation="fade_from_bottom"
          >
            <li>Vestibulum nisl tempor enim pretium vulputate venenatis.</li>
            <li>At donec interdiet adipiscing veptubtl cursus.</li>
            <li>Magna enim viverra vitae egestas interdum lobortis.</li>
          </ul> */}
        </div>
        <div className="line-shape"></div>
      </section>
    );
}

export default About;