// FORM MODELLO COMPLETO DI ATOMI E MOLECOLE CON INSERIMENTO DEI TESTI PER OGNI SINGOLO MODULO DA POTER INSERIRE PER CREARE PAGINA SIMILE

import Button from "../Atoms/Button.jsx";
import InputUploadFile from "../Molecules/InputUploadFile.jsx";
export default function FormUploadDocuments() {

    return (

        <>

            <form className='flex flex-1 flex-col justify-between gap-5 mt-10 font-bold'>

                <div className="flex flex-col justify-between gap-10">


                    <InputUploadFile text="Upload your ID" id="userID" />

                    <InputUploadFile text="Upload your photo" id="userPhoto" />

                </div>

                <div className="text-center flex flex-col items-center mb-6 mt-30">

                    <Button to="/login">next</Button>

                </div>

            </form>

        </>
    )
}