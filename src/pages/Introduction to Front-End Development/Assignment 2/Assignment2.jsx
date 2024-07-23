import logo from "./logo.png";

const Assignment2 = () => {
  return (
    <html>
      <body className="bg-[#e0e0e2] body w-full mx-4 my-2">
        <div>
          <img
            src={logo}
            id="logo"
            width="250"
            alt="logo"
            className="mx-auto block"
          />
        </div>
        <div className="text-center">
          <h1 className="text-[#721817]">Our Menu</h1>
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
          <p className="p-3 text-[0.75em]">Copyright Little Lemon</p>
        </div>
      </body>
    </html>
  );
};

export default Assignment2;
