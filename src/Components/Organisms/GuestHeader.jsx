//  HEADER LOGO E TESTO GENERALIZZATI PERCHE' POTREBBE ESSERE UTILE PER ALTRI COMPONENTI

export default function GuestHeader({ children, img }) {

    return (

        <>

            <header className="text-center bg-bianco">
                <img className="w-full max-w-[150px] mx-auto" src={img} alt="welcome header" />
                <h1 className="text-[2.75rem] font-bold mt-5">
                    {children}
                </h1>
            </header>

        </>
    )
}