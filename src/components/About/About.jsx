import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <h1 className={style.aboutTitle}>Sobre mí</h1>
      <p className={style.aboutDescription}>
        ¡Hola! Mi nombre es [Nombre del creador] y soy el creador de esta
        página. Me apasiona [lo que te apasiona] y he trabajado como [tu
        profesión o experiencia relevante] durante [tiempo que llevas
        trabajando].
      </p>
      <p className={style.aboutDescription}>
        En mi tiempo libre me gusta [hobbies o actividades que te gusten hacer]
        y [algo más sobre ti].
      </p>
      <p className={style.aboutDescription}>
        Si tienes alguna pregunta o sugerencia sobre esta página, no dudes en
        contactarme en [correo electrónico o redes sociales]. ¡Gracias por
        visitar mi sitio!
      </p>
    </div>
  );
};

export default About;
