import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/usuario_padrao.png"
import styles from "./SobreMim.module.css"

export default function SobreMim(){
    return (
       <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>Olá, eu sou o(a)...</h3>
            <img className={styles.fotoSobreMim} src={fotoSobreMim} alt="Foto do..."/>

            <p className={styles.paragrafo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet odio vitae purus pellentesque, id accumsan nisl tristique. Proin sollicitudin venenatis mi, at semper sem fermentum non. Nullam gravida elit eget sodales luctus. Aliquam sed felis turpis. Quisque tristique diam eu fermentum varius. Vestibulum turpis tortor, ultricies eu nisi sed, volutpat faucibus sem. Phasellus sed lacinia nisl, ut efficitur erat. Duis gravida, dolor ut dignissim bibendum, massa justo consequat erat, ut interdum libero purus vitae quam. Nulla facilisi.
            </p>           
           
            <p className={styles.paragrafo}>
            Vivamus id enim a lorem dignissim consectetur et non dui. Fusce pulvinar leo ut arcu convallis porttitor. Integer at iaculis nibh. Nunc quis egestas massa, vel blandit magna. Sed congue diam tortor, a vehicula massa egestas et. Praesent bibendum tempor ex, sed fringilla tellus pulvinar a. Vivamus bibendum at leo blandit facilisis. Fusce semper dolor ac diam luctus, sit amet aliquet nulla mattis. Phasellus sed augue finibus, commodo nisi et, placerat neque. Integer et eros turpis. Duis sed viverra magna. Donec vel molestie elit, vel venenatis urna. Proin ac purus vel diam bibendum luctus a vitae lorem. Vivamus arcu dui, fringilla eget efficitur nec, pharetra nec tellus. Nullam egestas nunc tortor, eu mattis quam luctus quis.
            </p>
       </PostModelo>
    )
}