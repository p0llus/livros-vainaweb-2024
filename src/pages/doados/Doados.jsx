import s from '../doados/doados.module.scss'
import livroProtagonista from '../../assets/livroProtagonista.jpg'

export default function Doados () {
    return (
        <section className={s.doados}>
            <h2>Livros Doados</h2>
            <div>
                <article>
                    <img src={livroProtagonista} alt="livro - Protagonista"/>
                    <div>
                        <h3>Protagonista</h3>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>
                    </div>
                </article>
            </div>
        </section>
    )
}