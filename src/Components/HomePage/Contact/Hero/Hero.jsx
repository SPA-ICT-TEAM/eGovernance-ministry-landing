export const Hero = ({ text, title })=>{
    return(
        <section className="bg-green-600 flex items-center justify-center p-12">
            <div className="text-white container flex flex-col items-center p-10 gap-5">
                <p className="text-5xl font-semibold">{title}</p>
                <p className="text-[20px] text-center">{text}</p>
            </div>
        </section>
    )
}