import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/usuario_padrao.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo</h1>
                <p className={styles.paragrafo}>De uma breve introdução sobre você, de forma rápida e concisa.</p>
            </div>

            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}/>
                <img className={styles.minhaFoto} src={minhaFoto} alt='Sua foto'/>
            </div>
        </div>
    ) 
}