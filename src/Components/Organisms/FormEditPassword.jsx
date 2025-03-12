// FORM PER MODIFICARE LA PASSWORD NEL MENU GRIGIO DI PROFILEHOME


import Button from "../Atoms/Button.jsx";
import FormInput from "../Molecules/FormInput.jsx";

export default function FormEditPassword() {
    return (
        <>
            <form className='flex flex-1 flex-col justify-between gap-5 mt-6'>
                <div className="flex flex-col justify-between gap-5">
                    <FormInput
                        id="currentPassword"
                        text="Current password"
                        type="password"
                        required={true}
                        placeholder="Enter your current password"
                    />
                    <FormInput
                        id="password"
                        text="New password"
                        type="password"
                        required={true}
                        placeholder="Enter the new password"
                    />
                    <FormInput
                        id="confirmPassword"
                        text="Confirm new password"
                        type="password"
                        required={true}
                        placeholder="Confirm your new password"
                    />

                </div>
                <div className="text-center flex flex-col items-center my-6">
                    <Button to="/profile">confirm</Button>
                </div>
            </form>

        </>

    )

}