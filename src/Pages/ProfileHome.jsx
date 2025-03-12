// SEZIONE PROFILE DELLA NAVBAR


import MainLayout from "../Layout/MainLayout.jsx";
import MainHeader from "../Components/Organisms/MainHeader.jsx";
import ButtonBlock from "../Components/Atoms/ButtonBlock.jsx";
import ButtonBlockBlack from "../Components/Atoms/ButtonBlockBlack.jsx";

export default function ProfileHome() {

    return (
        <>

            <MainLayout
                header={
                    <MainHeader
                        title="Profile"
                        subtitle={<span>Welcome,
                            <span className="font-bold"> Name</span></span>}
                    />}
            >



                <div className="flex flex-col gap-3 mt-8">

                    <ButtonBlock to="/profile/edit-user-data" text="Edit user data" type="secondary" />
                    <ButtonBlock to="/profile/edit-password" text="Edit password" type="secondary" />
                    <ButtonBlock to="/profile/support" text="Support" type="secondary" />
                    <ButtonBlock to="/profile/FAQ" text="F.A.Q." type="secondary" />
                    <ButtonBlockBlack to="/" text="Logout" type="primary" />


                </div>



            </MainLayout>

        </>
    )
}