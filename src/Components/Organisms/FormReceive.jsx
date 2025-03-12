// COMPONENTE PER IL FORM DELLA PAGINA RECEIVE

import Button from "../Atoms/Button.jsx";
import FormInput from "../Molecules/FormInput.jsx";

export default function FormReceive() {


    return (

        <>

            <form className="flex flex-col items-center py-4 font-bold">

                <img className="mb-6 w-72" src="../src/assets/media/qrcode.png" alt="qr code" />
                <FormInput
                    id="walletAddress"
                    text="Wallet Address"
                    type="text"
                    required={true}
                    placeholder="shd9uqwd7jekwu6end5n"
                />
                <div className="mt-16">
                    <Button to="/wallet">Copy link</Button>
                </div>

            </form>

        </>

    )
}