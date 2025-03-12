// FORM DI SELEZIONE PER PAGINA DI SUPPORTO

import Label from "../Atoms/Label.jsx";
import Select from "../Atoms/Select.jsx";


export default function FormSelect({ id, text, placeholder,
    required = false, options = [] }) {
    return (

        <>

            <div className="flex flex-col text-left w-full mt-2">
                <Label htmlFor={id} required={required}>{text}</Label>
                <Select id={id} placeholder={placeholder} options={options} />
            </div>

        </>
    )
}