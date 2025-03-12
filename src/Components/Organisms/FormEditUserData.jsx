import Button from "../Atoms/Button.jsx";
import FormInput from '../Molecules/FormInput.jsx';

export default function FormEditUserData() {
    return (

        <>
            <form className='flex flex-1 flex-col justify-between gap-5 mt-6'>
                <div className="flex flex-col justify-between gap-2">
                    <FormInput
                        id="name"
                        text="Name"
                        required={true}
                        type="text"
                        placeholder="Insert your name"
                        value="Paolo"
                    />
                    <FormInput
                        id="surname"
                        text="Surname"
                        required={true}
                        type="text"
                        placeholder="Insert your surname"
                        value="Pichierri"
                    />
                    <FormInput
                        id="birthday"
                        text="Birthday"
                        type="date"
                        required={true}
                        placeholder="Insert your birthday"
                        value="2000-05-04"
                    />
                    <FormInput
                        id="address"
                        text="Address"
                        type="text"
                        required={true}
                        placeholder="Insert your address"
                        value="Via Roma, 1"
                    />

                    <div className="grid grid-cols-2 gap-4 bg-bianco">
                        <FormInput
                            id="city"
                            text="City"
                            type="text"
                            required={true}
                            placeholder="Insert your city"
                            value="Bari"
                        />
                        <FormInput
                            id="postalCode"
                            text="Postal Code"
                            type="text"
                            required={true}
                            placeholder="Insert your postal code"
                            value="70123"
                        />
                    </div>

                </div>
                <div className="bg-bianco text-center flex flex-col items-center mb-6">
                    <Button to="/profile">Confirm</Button>
                </div>
            </form>

        </>
    )
}
