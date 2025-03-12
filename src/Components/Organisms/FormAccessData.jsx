// FORM MODELLO COMPLETO DI ATOMI E MOLECOLE CON INSERIMENTO DEI TESTI PER OGNI SINGOLO MODULO DA POTER INSERIRE PER CREARE PAGINA SIMILE

import { Link } from "react-router-dom";
import Button from "../Atoms/Button.jsx";
import FormInput from "../Molecules/FormInput.jsx";

export default function FormAccessData() {

    return (

        <>

            <form className='flex flex-col items-center justify-center gap-5 mt-6'>

                <FormInput
                    id="email"
                    text="Email"
                    type="email"
                    required={true}
                    placeholder="Enter your email"
                />

                <FormInput
                    id="password"
                    text="Password"
                    type="password"
                    required={true}
                    placeholder="Password"
                />

                <FormInput
                    id="confirmPassword"
                    text="Confirm Password"
                    type="password"
                    required={true}
                    placeholder="Confirm Password"
                />


                <div className="text-center flex flex-col items-center mb-6 mt-30">

                    <Button to="/register/user-data"> next </Button>
                    <Link to="" className='uppercase font-bold text-xl mt-3'>Log In</Link>
                </div>

            </form>

        </>
    )
}