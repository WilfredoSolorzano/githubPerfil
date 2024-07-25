import { useState } from "react";
import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposiList";
import UsuarioInput from "./components/UsuarioInput";




function App() {
  const [formularioEstadoVisivel, setFormularioEstadoVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <div>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <UsuarioInput setNomeUsuario={setNomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {nomeUsuario.length <= 4 && (
        <UsuarioInput setNomeUsuario={setNomeUsuario} />
      )}

      {/* {formularioEstadoVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstadoVisivel(!formularioEstadoVisivel)} type="button">toggle form</button> */}
    </div>
  );
}

export default App
