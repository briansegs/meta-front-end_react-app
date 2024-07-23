import logo1 from "./assets/Artboard 1.png";
import logo2 from "./assets/Artboard 19.png";
import colors2 from "./assets/colors2.png";
import feature from "./assets/feature2.png";

const ProjectPortfolio = () => {
  return (
    <div className="bg-white">
      <section className="flex justify-center items-center py-8">
        <section>
          <img className="w-[200px]" src={logo1} alt="header-logo" />
        </section>
      </section>

      <nav className="flex justify-center items-center pb-8 mx-80" id="home">
        <ul className="w-full flex justify-between items-center">
          <li className="text-black font-medium text-2xl leading-6 capitalize mx-4">
            <a
              className="border-b-white border-0 duration-[0.5s] ease hover:border-b-[1px] hover:border-[#81AFDD]"
              href="#home"
            >
              Home
            </a>
          </li>
          <li className="text-black font-medium text-2xl leading-6 capitalize mx-4">
            <a
              className="border-b-white border-0 duration-[0.5s] ease hover:border-b-[1px] hover:border-[#81AFDD]"
              href="#about"
            >
              About
            </a>
          </li>
          <li className="text-black font-medium text-2xl leading-6 capitalize mx-4">
            <a
              className="border-b-white border-0 duration-[0.5s] ease hover:border-b-[1px] hover:border-[#81AFDD]"
              href="#colors"
            >
              Colors
            </a>
          </li>
          <li className="text-black font-medium text-2xl leading-6 capitalize mx-4">
            <a
              className="border-b-white border-0 duration-[0.5s] ease hover:border-b-[1px] hover:border-[#81AFDD]"
              href="#home"
            >
              Book
            </a>
          </li>
          <li className="text-black font-medium text-2xl leading-6 capitalize mx-4">
            <a
              className="border-b-white border-0 duration-[0.5s] ease hover:border-b-[1px] hover:border-[#81AFDD]"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div>
        <section
          className="bg-[#eeeeee] flex justify-between items-center min-h-screen py-16 px-24"
          id="about"
        >
          <section className="promo__container">
            <h3 className="text-[#81AFDD] mb-4 text-base">
              Specializing in Cuts, Color and Styling
            </h3>
            <div className="w-[60px] border-4 border-black mb-8"></div>
            <h1 className="bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent font-extrabold text-[62px] leading-[65px] mb-8">
              Edgy hair colors and on-trend cuts
            </h1>
            <p className="text-xl leading-[27px] text-[#1951a5] mr-8">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment.
            </p>
            <button
              type="button"
              className="bg-black text-white font-bold capitalize leading-[30px] text-[23px] border-[1px] border-black outline-none cursor-pointer py-2 px-4 my-8 mx-0 hover:text-[#81AFDD] hover:border-[#cf715c]"
            >
              Book Appointment
            </button>
          </section>
          <section className="w-full flex justify-center items-center">
            <img className="w-full" src={feature} alt="feature" />
          </section>
        </section>

        <section
          class="flex flex-col justify-center items-center min-h-screen py-16 px-24"
          id="colors"
        >
          <section class="flex flex-col justify-center items-center">
            <section>
              <h1 class="bg-clip-text bg-gradient-to-r from-[#AE67FA] to-[#F49867] text-transparent font-extrabold text-[62px] leading-[65px] mb-8">
                Unique Styles and Colors
              </h1>
            </section>
            <section>
              <img
                className="opacity-50 saturate-0 duration-[0.2s] ease hover:opacity-100 hover:saturate-100"
                src={colors2}
                alt="colors"
              />
            </section>
          </section>
          <section class="flex justify-center items-center">
            <section className="py-8 px-16">
              <h3 className="text-xl leading-5 font-semibold text-[#81AFDD] pb-2">
                Color
              </h3>
              <div className="w-[60px] border-[3px] border-black mb-4"></div>
              <p className="text-base leading-[25px] text-[#1951a5]">
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought.
              </p>
            </section>
            <section>
              <h3 className="text-xl leading-5 font-semibold text-[#81AFDD] pb-2">
                Cut
              </h3>
              <div className="w-[60px] border-[3px] border-black mb-4"></div>
              <p className="text-base leading-[25px] text-[#1951a5]">
                At jointure ladyship an insisted so humanity he. Friendly
                bachelor entrance to on by. As put impossible own apartments b
              </p>
            </section>
            <section>
              <h3 className="text-xl leading-5 font-semibold text-[#81AFDD] pb-2">
                Style
              </h3>
              <div className="w-[60px] border-[3px] border-black mb-4"></div>
              <p className="text-base leading-[25px] text-[#1951a5]">
                Whole front do of plate heard oh ought. Friendly bachelor
                entrance to on by. As put impossible own apartments.
              </p>
            </section>
          </section>
        </section>
      </div>

      <div
        class="py-8 px-16 flex justify-between items-center min-h-[30vh] bg-[#eeeeee]"
        id="contact"
      >
        <img className="w-[200px]" src={logo2} alt="footer_logo" />
        <section className="flex flex-col justify-center items-center">
          <h3 className="text-xl leading-[25px] text-black pb-4">Hours</h3>
          <p className="text-base leading-[25px] text-black">
            Monday - Thursday{" "}
          </p>
          <p className="text-base leading-[25px] text-black">9am - 10pm</p>
          <p className="text-base leading-[25px] text-black">
            Friday & Saturday
          </p>
          <p className="text-base leading-[25px] text-black">11am - 5pm</p>
        </section>
        <section className="flex flex-col justify-center items-center">
          <h3 className="text-xl leading-[25px] text-black pb-4">Contact</h3>
          <p className="text-base leading-[25px] text-black">
            Crechterwood K12 182 DK Alknjkcb
          </p>
          <p className="text-base leading-[25px] text-black">085-132567</p>
          <p className="text-base leading-[25px] text-black">info@payme.net</p>
        </section>
        <section className="flex flex-col justify-center items-center">
          <p className="text-base leading-[25px] text-black">
            Copyright Hair Day
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
