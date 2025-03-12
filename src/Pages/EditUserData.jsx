// SEZIONE EDITUSERDATA IN MENU GRIGIO DI PROFILEHOME


import MainLayout from "../Layout/MainLayout.jsx";
import ActionHeader from "../Components/Organisms/ActionHeader.jsx";
import FormEditUserData from "../Components/Organisms/FormEditUserData.jsx";

export default function EditUserData() {

    return (

        <>
            <MainLayout
                header={<ActionHeader title="Edit user data" />}
            >

                <FormEditUserData />

            </MainLayout>

        </>
    )
}