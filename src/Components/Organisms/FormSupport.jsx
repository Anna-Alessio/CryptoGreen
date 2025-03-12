// FORM SUPPPORT QUI INSERIRE LE VARIE OPZIONI DA SELEZIONARE

import FormSelect from "../Molecules/FormSelect.jsx";
import Button from "../Atoms/Button.jsx";
import FormTextarea from "../Molecules/FormTextarea.jsx";

export default function FormSupport() {
    return (

        <>

            <form className='flex flex-1 flex-col justify-between gap-5 mt-6'>
                <div className="flex flex-col justify-between gap-5 font-bold">

                    <FormSelect
                        id="problem"
                        text="Problem"
                        required={true}
                        placeholder="Choose a problem"
                        options={['Problem with the app', 'Problem with the website',
                            'Problem with the payment', 'Other']}
                    />

                    <FormTextarea
                        id="description"
                        text="Description"
                        required={true}
                        placeholder="Describe your problem"
                    />

                </div>
                <div className="text-center flex flex-col items-center my-6">
                    <Button to="/profile">confirm</Button>
                </div>
            </form>

        </>

    )
}