export const AboutUs = ({ about }) => {
    return (
      <section className="bg-gray-100 p-20 flex items-center justify-center">
        <div className="container flex items-center justify-center text-[20px] text-gray-700">
          <div className="flex flex-col gap-6 max-w-[800px]">
            <h2 className="text-4xl font-bold text-black">About Us</h2>
              <div dangerouslySetInnerHTML={{ __html: about }} />
          </div>
        </div>
      </section>
    );
  };
  