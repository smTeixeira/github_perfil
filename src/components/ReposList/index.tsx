import { useState, useEffect } from "react";
import style from './ReposList.module.css'

const ReposList = ({ nomeUsuario }: any) => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setRepos(resJson);
            })
    }, [nomeUsuario]);

    return (
        <div className="container">
            <ul className={style.list}>
                {repos.map(({ id, name, language, html_url }) => (
                    <li key={id}>
                        <div className={style.itemName}>
                            <b>Nome:</b> {name} <br />
                        </div>
                        <div className={style.itemLanquage}>
                            <b>Linguagem:</b> {language} <br />
                        </div>
                        <a className={style.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList;