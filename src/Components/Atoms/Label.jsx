// ASTERISCO ROSSO CHE VIENE INSERITO PER RENDERE OBBLIGATORIO UN PASSAGGIO

export default function Label({ htmlFor, children, required = false }) {

    return (

        <>

            <label
                htmlFor={htmlFor}
                className="font-bold">
                {children} {required && <span className="text-red-500">*</span>}
            </label>

        </>
    )
}