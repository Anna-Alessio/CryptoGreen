// PAGINA DI CARICAMENTO DOCUMENTI SI ACCEDE PREMENDO NEXT DALLA PAGINA DI REGISTRAZIONE NUOVO UTENTE

import FormUploadDocuments from "../Components/Organisms/FormUploadDocuments.jsx";
import GuestHeader from "../Components/Organisms/GuestHeader.jsx";
import GuestLayout from "../Layout/GuestLayout.jsx";

export default function UploadDocuments() {

    return (

        <>

            <GuestLayout >

                <GuestHeader img="/src/assets/media/welcome-header.png">

                    <span className="text-accento">R</span>egister

                </GuestHeader>

                <FormUploadDocuments></FormUploadDocuments>


            </GuestLayout>

        </>

    )
}