// PAGINA OTP APERTA IN SOTTOCARTELLA COME DA INDICAZIONI DEL PDF OVVIAMENTE HO DOVUTO ATTENZIONARE I VARI PERCORSI

import GuestHeader from "../../Components/Organisms/GuestHeader.jsx";
import GuestLayout from "../../Layout/GuestLayout.jsx";
import FormOTP from "../../Components/Organisms/FormOTP.jsx";
import "../../App.css";


export default function OTP() {


    return (


        <>

            <GuestLayout>

                <GuestHeader img="/src/assets/media/welcome-header.png">
                    <span className="text-accento">L</span>ogin



                </GuestHeader>

                <FormOTP></FormOTP>

            </GuestLayout>

        </>


    )



}



