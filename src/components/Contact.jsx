import { profile, socials } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <h2 className="section__title section__title--center">
          <span className="section__num">03.</span> Get In Touch
        </h2>
        <p className="contact__lead">
          I'm always open to new projects, collaborations, or just a friendly
          chat. Drop me a message and I'll get back to you.
        </p>

        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
          Say hello
        </a>

        <div className="contact__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
