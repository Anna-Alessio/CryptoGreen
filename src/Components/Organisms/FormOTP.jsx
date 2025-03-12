// COMPONENTE CON ELEMENTI GENERALIZZATI PER LA PAGINA OTP

import Button from "../Atoms/Button.jsx";
import "../../App.css";
import InputOTP from "../Atoms/InputOTP.jsx";
import TextLg from "../Atoms/TextLg.jsx";

export default function FormOTP() {

    return (

        <>
            <form className='flex flex-1 flex-col justify-between gap-5 mt-6'>

                <div className="justify-items-center">


                    <TextLg className='text-secondario text-lg font-bold'>
                        We have sent you an OTP to your email address.
                        Please enter the OTP below to verify your email address.
                    </TextLg>


                    <div className="flex justify-between mt-10">


                        <InputOTP></InputOTP>
                        <InputOTP></InputOTP>
                        <InputOTP></InputOTP>
                        <InputOTP></InputOTP>
                        <InputOTP></InputOTP>
                        <InputOTP></InputOTP>

                    </div>

                    <TextLg className='text-secondario text-center mt-6'>
                        <span className='font-bold'>Sending new code in</span> : 00:20
                    </TextLg>

                </div>

                <div className="text-center flex flex-col items-center mb-6 mt-10">

                    <Button to="/wallet">next</Button>

                </div>

            </form>

        </>
    )
}