// BOTTONE CON FRECCIA PER TORNARE ALLA PAGINA PRECEDENTE

import { useNavigate } from "react-router-dom";

export default function BackButton() {

    const navigate = useNavigate();

    function Back() {
        navigate(-1)
    }

    return (

        <>

            <button onClick={Back} className="bg-primario w-12 h-12 flex items-center justify-center rounded-full fill-white">

                <svg className="fill-inherited w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5
                12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0
                32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5
                12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>

                </svg>

            </button>

        </>

    )
}