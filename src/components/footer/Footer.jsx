import s from '../footer/footer.module.scss'
import React from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
    return (
        <footer>
            <section className={s.topFooter}>
                <p>4002-8922</p>
                <div>
                    <FontAwesomeIcon icon={faFacebook} size='3x'/>
                    <FontAwesomeIcon icon={faTwitter} size='3x'/>
                    <FontAwesomeIcon icon={faYoutube} size='3x'/>
                    <FontAwesomeIcon icon={faLinkedin} size='3x'/>
                    <FontAwesomeIcon icon={faInstagram} size='3x'/>
                </div>
            </section>
            <section className={s.bottomFooter}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
            </section>
        </footer>
    )
}