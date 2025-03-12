// PAGINA PRINCIPALE DI ENTRATA SU WEB APP lo sfondo di questa pagina si modifica da qui

import "../App.css";
import { Link } from "react-router-dom";
import Button from "../Components/Atoms/Button.jsx";
export default function Welcome() {


  return (

    <>

      {/* CONTENITORE */}
      <div className="h-screen bg-bianco flex flex-col justify-center">
        <header className="text-center">
          {/* LOGO */}
          <img className="w-full max-w-xs mx-auto" src="src/assets/media/welcome-header.png"
            alt="welcome header" />
          {/* LOGO */}

          {/* TITOLO */}
          <h1 className="text-5xl font-bold mt-5">Crypto<span className="text-accento">G</span>reen</h1>
          {/* TITOLO */}

        </header>


        <div className='mt-20 flex flex-col items-center justify-center gap-4'>

          {/* BOTTONE E COLLEGAMENTI GENERALIZZATI CON LINK */}

          <Button to="/login" >log in</Button>

          <Link to="/register/user-data" className='uppercase font-bold text-xl'>sign up</Link>

          {/* BOTTONE E COLLEGAMENTI GENERALIZZATI CON LINK */}


        </div>
      </div>
      {/* CONTENITORE */}

    </>
  )
}

