import s from '../inicio/inicio.module.scss'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'

export default function Inicio () {
    return (
        <main>
            <section className={s.topSection}>
                <h2>
                    VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO
                </h2>
            </section>
            <section className={s.bottomSection}>
                <h2>
                    Por que devo doar?
                </h2>
                <div>
                    <figure>
                        <img src={img1} alt="Círculo de quatro pessoas"/>
                        <figcaption>
                        Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={img2} alt="Uma pessoa lendo"/>
                        <figcaption>
                        Estimula o hábito da leitura e o aprendizado contínuo.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={img3} alt="Pessoas com pensamento coletivo"/>
                        <figcaption>
                        Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.
                        </figcaption>
                    </figure>
                    <figure>
                        <img src={img4} alt="Uma balança antiga"/>
                        <figcaption>
                        Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.
                        </figcaption>
                    </figure>
                </div>
            </section>
        </main>
    )
}