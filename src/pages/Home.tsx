import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleImg from "../assets/images/google-icon.svg";

import { Button } from "../components/Button";

import { useHistory } from "react-router-dom";

import "../styles/auth.scss";
import { useContext } from "react";
import { AuthContext } from "../App";

export function Home() {
  const history = useHistory();

  const { signInWithGoogle, user } = useContext(AuthContext);

  async function handleCreateRoom() {

    if(!user){
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="ilustração simbolizando perguntas e respostas"
        />

        <strong> Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleImg} alt="logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre uma sala</div>

          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit"> Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
