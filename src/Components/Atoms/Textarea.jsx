// TEXT AREA DELLA PAGINA SUPPORT

export default function Textarea({ id, placeholder }) {
    return (

        <>

            <textarea
                id={id}
                name={id}
                placeholder={placeholder}
                className="py-2 px-4 border min-h-[150px] border-secondary rounded-xl
     focus:border-primary focus-visible:border-primary mt-1"
            >
            </textarea>

        </>

    )
}