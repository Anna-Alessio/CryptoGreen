import MainLayout from "../Layout/MainLayout.jsx";
import ActionHeader from "../Components/Organisms/ActionHeader.jsx";
import FormSupport from "../Components/Organisms/FormSupport.jsx";

export default function ProfileSupport() {

    return (
        <>

            <MainLayout
                header={<ActionHeader title="Support" />}
            >

                <FormSupport></FormSupport>


            </MainLayout>

        </>
    )
}