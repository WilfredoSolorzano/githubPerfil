import styles from './UsuarioInput.module.css';

// eslint-disable-next-line react/prop-types
const UsuarioInput = ({ setNomeUsuario }) => {
    return (
      <input 
        type="text" 
        onBlur={(e) => setNomeUsuario(e.target.value)}
        className={styles.input}
        placeholder="Ingrese nome de usuario"
      />
    );
  };
  
  export default UsuarioInput;