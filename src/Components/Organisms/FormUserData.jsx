// FORM MODELLO COMPLETO DI ATOMI E MOLECOLE CON INSERIMENTO DEI TESTI PER OGNI SINGOLO MODULO DA POTER INSERIRE PER CREARE PAGINA SIMILE

import Button from "../Atoms/Button.jsx";
import FormInput from "../Molecules/FormInput.jsx";

export default function FormAccessData() {

    return (

        <>

            <form className='flex flex-col items-center justify-center gap-1 mt-4 font-bold'>





                <FormInput
                    id="Name"
                    text="Name"
                    type="text"
                    required={true}
                    placeholder="Enter your Name"
                />


                <FormInput
                    id="Surname"
                    text="Surname"
                    type="text"
                    required={true}
                    placeholder="Enter your Surname"
                />

                <FormInput
                    id="Birthday"
                    text="Bithday"
                    type="date"
                    required={true}
                    placeholder=""
                />

                <FormInput
                    id="Address"
                    text="Address"
                    type="text"
                    required={true}
                    placeholder="Insert your address"
                />


                <div className="grid grid-cols-2 gap-4">

                    <FormInput
                        id="city"
                        text="City"
                        type="text"
                        required={true}
                        placeholder="Insert your city"
                    />

                    <FormInput
                        id="postalCode"
                        text="Postal Code"
                        type="text"
                        required={true}
                        placeholder="Insert your postal code"
                    />

                </div>


                <div className="text-center flex flex-col items-center py-10">

                    <Button to="/register/upload-documents">next</Button>
                </div>

            </form>

        </>

    )
}
