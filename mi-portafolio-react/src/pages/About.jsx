import gato from '../assets/img/gato.jpg';

export default function About() {
    return(
        <article id='art-about'>
            <div id='div-pic-about'>
                <img src={gato} alt="Imagen perfil" id='picimage' />
            </div>
            <div id='div-info-about'>
                <p id='info-about'>
                    Estudiante de 6° semestre de Ingeniería en Sistemas Computacionales en la Escuela Superior de Cómputo (IPN),
                    con experiencia en desarrollo web, metodologías ágiles (Scrum y Kanban) y conocimientos en áreas emergentes como
                    Inteligencia Artificial, Análisis de Datos y Machine Learning. Proactivo, con interés en contribuir a soluciones
                    tecnológicas innovadoras.
                </p>
            </div>
        </article>
    );
}