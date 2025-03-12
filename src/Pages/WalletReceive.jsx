import MainLayout from "../Layout/MainLayout.jsx";
import ActionHeader from "../Components/Organisms/ActionHeader.jsx";
import FormReceive from "../Components/Organisms/FormReceive.jsx";


export default function WalletReceive() {

    return (

        <>


            <MainLayout
                header={<ActionHeader title="Receive" />}
            >

                <FormReceive />

            </MainLayout>

        </>
    )
}