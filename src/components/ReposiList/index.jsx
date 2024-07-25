import { useEffect, useState } from "react";
import PropTypes from 'prop-types'; // Importa PropTypes
import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);

  useEffect(() => {
    if (!nomeUsuario) return;

    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al obtener los repositorios');
        }
        return res.json();
      })
      .then(resJson => {
        setTimeout(() => {
          setEstaCarregando(false);
          setRepos(resJson);
        }, 3000);
      })
      .catch(error => {
        setEstaCarregando(false);
        alert("O usuário não foi encontrado, verifique e tente novamente")
        console.error(error);
      });
  }, [nomeUsuario]);

  return (
    <div className="container">
      {estaCarregando && (
        <h1>Esta carregando...</h1>
      )}
      <ul className={styles.list}>
        {repos.map(repositorio => (
          <li className={styles.listItem} key={repositorio.id}>
            <div className={styles.itemName}>
              <b>Nome:</b> {repositorio.name}
            </div>
            <div className={styles.itemLanguage}>
              <b>Linguagem:</b> {repositorio.language}
            </div>
            <a className={`${styles.itemLink} ${styles.itemLinkHover}`} target="_blank" rel="noopener noreferrer" href={repositorio.html_url}>Visitar no github</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Definir los propTypes para el componente
ReposList.propTypes = {
  nomeUsuario: PropTypes.string.isRequired, // `nomeUsuario` debe ser una cadena y es requerido
};

export default ReposList;