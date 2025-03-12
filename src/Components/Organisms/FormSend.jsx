// COMPONENTE PER IL FORM DELLA PAGINA SEND

import Button from "../Atoms/Button.jsx";
import FormInput from "../Molecules/FormInput.jsx";

export default function FormSend() {

    return (

        <>
            <form className='flex flex-1 flex-col justify-between gap-5 mt-6 font-bold'>

                <div className="flex flex-col justify-between gap-5">


                    <FormInput id="email"
                        text="Withdrawal Address"
                        type="email"
                        required={true}
                        placeholder="Withdrawal Address"
                    />

                    <FormInput
                        id="number"
                        text="Withdrawal Amount"
                        type="number"
                        required={true}
                        placeholder="Withdrawal Amount"
                    />

                </div>


                <div className="text-center flex flex-col items-center mb-6 mt-30">
                    <Button to="/wallet">SEND</Button>

                </div>


            </form>


        </>



    )


}