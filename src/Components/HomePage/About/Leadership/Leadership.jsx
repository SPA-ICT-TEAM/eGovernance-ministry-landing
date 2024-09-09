import leaderImg from "../../../../assets/images/about-peter.jpg";

export const Leadership = ({ leader }) => {

  const commissioner = {
        "name": "OUR LEADER",
        "biography": "At the helm of our government services is a dedicated and visionary leadership team committed to the progress and development of Enugu State."+
        "Our leaders bring a wealth of experience, integrity, and a steadfast commitment to serving the public."+
        "They work tirelessly to ensure that government operations are efficient, transparent, and responsive to the needs of all citizens."+
        "Our leadership is guided by the principles of accountability, innovation, and excellence."+
        "They strive to create policies and implement programs that promote sustainable development, economic growth, and social welfare."+
        "By fostering a collaborative and inclusive environment, they ensure that every voice is heard and every community is served."+
        "We are proud of our leaders who uphold the highest standards of public service and governance."+
        "Their dedication to making a positive impact in the lives of the citizens of Enugu State is evident in every initiative and project they undertake."+
        "Together, they lead with vision and purpose, driving the state towards a brighter and more prosperous future."+
        "This section will be updated with specific information about our leadership team as it becomes available."
    }

    // const leaderPhoto = leader?.photo ?? leaderImg;
    // console.log('leader Photo:', leaderPhoto);

  return (
    <section className="p-10 flex items-center justify-center">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        <div className="text-[18px] max-w-[650px] space-y-4 order-1 md:order-2">
          <h2 className="text-4xl text-green-600 font-bold">Leadership</h2>
          <div className="w-full rounded-lg overflow-hidden md:hidden">
            <img
              src={leader?.photo ?? leaderImg}
              alt={leader?.name}
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="font-extrabold text-[20px]">{leader?.name}</h3>
          <div dangerouslySetInnerHTML={{ __html: leader?.biography ?? commissioner.biography}} />
        </div>
        <div className="w-full rounded-lg overflow-hidden order-2 md:order-1 hidden md:block">
          <img
            src={leader?.photo ?? leaderImg}
            alt={leader?.name ?? commissioner.name}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
