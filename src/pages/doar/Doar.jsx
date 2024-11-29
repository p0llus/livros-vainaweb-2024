import s from '../doar/doar.module.scss'
import livroForm from '../../assets/livroForm.png'

export default function Doar () {
    return (
        <section className={s.doar}>
            <p>
                Por favor, preencha o formulário com suas informações e as do Livro
            </p>
            <form action="">
                <figure>
                    <img src={livroForm} alt="Um livro aberto"/>
                    <figcaption>
                        Informações do Livro
                    </figcaption>
                </figure>
                <input type="text" name="" id="" placeholder='Título'/>
                <input type="text" name="" id="" placeholder='Categoria'/>
                <input type="text" name="" id="" placeholder='Autor'/>
                <input type="text" name="" id="" placeholder='Link da imagem'/>
                <input type="submit" value="Doar"/>
            </form>
        </section>
    )
}