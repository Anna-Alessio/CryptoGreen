// HO CREATO LA PAGINA LOGIN

import GuestHeader from "../Components/Organisms/GuestHeader.jsx";
import GuestLayout from "../Layout/GuestLayout.jsx";
import "../App.css";
import FormLogin from "../Components/Organisms/FormLogin.jsx";
import MainLayout from "../Layout/MainLayout.jsx";

export default function Login(params) {


    return (


        <>

            <GuestLayout >

                <GuestHeader
                    img="/src/assets/media/welcome-header.png">
                    <span className="text-accento">L</span>ogin
                </GuestHeader>

                <FormLogin>



                </FormLogin>

            </GuestLayout>


        </>


    )

}
