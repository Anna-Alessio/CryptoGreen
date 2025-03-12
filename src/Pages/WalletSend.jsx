import ActionHeader from "../Components/Organisms/ActionHeader.jsx";
import MainLayout from "../Layout/MainLayout.jsx";
import FormSend from "../Components/Organisms/FormSend.jsx";


export default function WalletSend() {


    return (


        <>
            <MainLayout

                header={<ActionHeader title="Send" />}
            >


                <FormSend />

            </MainLayout>




        </>
    )
}