export const Hero = ({ name })=>{
    return(
        <section className="bg-green-600 flex items-center justify-center p-12 pt-24">
            <div className="text-white container flex flex-col items-center p-10 gap-5">
                <p className="text-5xl font-semibold">About Us</p>
                <p className="text-[20px]">{name?.toUpperCase()}</p>
            </div>
        </section>
    )
}
