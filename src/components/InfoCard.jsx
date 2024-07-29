const InfoCard = ({ title, content }) => (
  <div className="m-8 w-fit rounded-lg border-[1px] border-white bg-slate-50">
    <div className="flex items-center rounded-t-lg px-8 py-6 justify-center w-full bg-gradient-to-r from-blue-400 to-cyan-300">
      <p className="text-white text-3xl font-semibold">{title}</p>
    </div>
    <div className="p-4 flex flex-col">{content}</div>
  </div>
);

export default InfoCard;
