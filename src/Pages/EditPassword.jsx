// PAGINA EDIT PASSWORD DEL MENU GRIGIO DI PROFILEHOME

import MainLayout from "../Layout/MainLayout.jsx";
import ActionHeader from "../Components/Organisms/ActionHeader.jsx";
import FormEditPassword from "../Components/Organisms/FormEditPassword.jsx";

export default function EditPassword() {

    return (
        <>

            <MainLayout
                header={<ActionHeader title="Edit Password" />}
            >
                <FormEditPassword />

            </MainLayout>


        </>
    )
}