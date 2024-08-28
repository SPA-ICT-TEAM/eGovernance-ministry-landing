export const Qualifications = ({ achievements, professional}) => {
  return (
    <section className="bg-slate-100 p-20 flex items-center justify-center">
      <div className="container flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[19px]">Professional Background and Qualifications</p>
          <p dangerouslySetInnerHTML={{ __html: professional }} />
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-bold text-[19px]">Achievements and Initiatives</p>
          <p dangerouslySetInnerHTML={{ __html: achievements }} />
        </div>
      </div>
    </section>
  );
};
