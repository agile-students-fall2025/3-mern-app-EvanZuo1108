import React from 'react'
import myPhoto from './my-photo.jpg'
import './about.css'

const About = () => {
  return (
    <section className="about-wrap">
      <div className="about-hero">
        <img
          src={myPhoto}
          alt="Cartoon of a blue sleepy creature and a smaller friend"
          className="about-photo"
        />
        <div className="about-title">
          <h1>About Me</h1>
          <p>Hi! I’m <strong>Evan Zuo</strong> — A student passionate about gaming and website development </p>
        </div>
      </div>

      <article className="about-body">
        <p>
          My interests range from interactive web development to computer graphics and 3D modeling in Blender and Unity.
        </p>
        <p>
          I’m passionate about learning new technologies and transforming ideas into
          functional, elegant interfaces. 
        </p>
        <p>
          Outside of coding, I love coffee, long walks, and exploring creative projects
          that mix art and technology. My dream is to contribute to tools that make
          learning and creativity more accessible to everyone.
        </p>
      </article>
    </section>
  )
}

export default About