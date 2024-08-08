import logo from "./logo.png";

const Assignment2 = () => {
  return (
    <div className="h-full bg-slate-50 flex justify-center">
      <div className="bg-[#e0e0e2] body w-[650px] px-4 py-2">
        <div>
          <img
            src={logo}
            id="logo"
            width="250"
            alt="logo"
            className="mx-auto block pb-4"
          />
        </div>
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-[#721817] text-xl">Our Menu</h1>
          <h2 className="text-[#721817]">
            Falafel <span className="text-[#fa9f42] text-[0.75em]">NEW</span>
          </h2>
          <p>Chickpea, herbs, spices.</p>
          <h2>Pasta Salad</h2>
          <p>Pasta, vegetables, mozzarella.</p>
          <h2>Fried Calamari</h2>
          <p>Squid, buttermilk.</p>
        </div>
        <div class="text-center">
          <p className="pt-8 text-[0.75em]">Copyright Little Lemon</p>
        </div>
      </div>
    </div>
  );
};

export default Assignment2;
