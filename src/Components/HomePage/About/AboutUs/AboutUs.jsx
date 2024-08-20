export const AboutUs = () => {
    return (
      <section className="bg-gray-100 p-20 flex items-center justify-center">
        <div className="container flex items-center justify-center text-[20px] text-gray-700">
          <div className="flex flex-col gap-6 max-w-[800px]">
            <h2 className="text-4xl font-bold text-black">About Us</h2>
            <p>
              The Enugu Ministry of Transport is dedicated to spearheading
              innovative solutions to revolutionize the state’s transportation
              landscape, fostering seamless connectivity and sustainable mobility
              for its residents. With a commitment to modernization, the ministry
              aims to enhance infrastructure, promote public transit, and ensure a
              forward-looking and integrated transport system.
            </p>
            <p>
              To realize the vision of building a world-class, efficient,
              sustainable, and smart transport system, we have set up the Smart
              Transport Program (STP). This program will transform the Enugu State
              Ministry of Transport and the transport sector.
            </p>
            <p>The STP focuses on four key thematic areas:</p>
            <ol className="list-decimal pl-5 flex flex-col gap-2">
              <li>Digitization of ministry processes and e-payment</li>
              <li>World-class traffic management system</li>
              <li>Multi-modal transport system and carbon footprint reduction</li>
              <li>Jobs and empowerment to the youth through the transport sector</li>
            </ol>
          </div>
        </div>
      </section>
    );
  };
  