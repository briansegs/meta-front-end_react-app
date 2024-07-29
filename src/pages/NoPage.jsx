import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center bg-slate-100">
      <div className="bg-white size-fit mt-12 mx-4 mb-4 px-14 py-12 rounded-xl flex flex-col items-center border-[1px] border-slate-200">
        <h1 className="text-6xl mb-2">404</h1>
        <h2 className="text-4xl mb-4">Page not found</h2>
        <button
          className="border-2 text-xl px-4 py-2 rounded-xl hover:border-gray-300 hover:bg-gray-100"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NoPage;
