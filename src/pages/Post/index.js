import { Route, Routes, useParams } from 'react-router-dom'
import posts from 'json/posts.json'
import PostModelo from 'components/PostModelo'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import './Post.css'
import NaoEncontrada from 'pages/NaoEncontada'
import PaginaPadrao from 'components/PaginaPadrao'
import PostCard from 'components/PostCard'
import styles from './Post.module.css'

export default function Post() {

    const parametros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if(!post){
        return <NaoEncontrada/>
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 3);

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao/>}>
                <Route index element={
                    <PostModelo 
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <PostCard post={item}/>
                                    </li>
                                )
                            })}
                        </ul>
                    </PostModelo>
                }/>             
            </Route>
        </Routes>
    )
}