export const Hero = ({ ministry }) => {
  return (
    <section className="flex items-center justify-center">
      <div
        className="relative p-24 w-full max-w-[1700px] bg-cover bg-center pb-48 pt-36 text-white"
        style={{
          backgroundImage: `url(${ministry.heroDetails.hero_image})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col gap-6 container pb-16">
          <p className="text-5xl font-bold max-w-[550px]">
            {ministry.heroDetails.title}
          </p>
          <p className="text-[18px]">{ministry.heroDetails.subtitle}</p>
          <div>
            <a href={ministry.heroDetails.button_link}>
              <button className="bg-green-500 p-3 rounded-lg hover:bg-green-700 text-white font-bold">
                {ministry.heroDetails.button_text}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
