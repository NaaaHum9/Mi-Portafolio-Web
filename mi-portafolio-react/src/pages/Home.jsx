import gato from '../assets/img/gato.jpg'

export default function Home() {
    return (
        <article id='art-home'>
            <div id='div-info-home'>
                <p>Mi nombre es Nahum</p>
                <p>Soy ingeniero es sistemas computacionales</p>
            </div>
            <div id='div-pic-home'>
                <img src={gato} alt="Foto Nahum" id='picme'/>
            </div>
        </article>
    );
}