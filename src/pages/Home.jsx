import InfoCard from "../components/InfoCard";
import { Link } from "react-router-dom";

const favList = [
  {
    name: "Portfolio project (HTML and CSS)",
    path: "/html-and-css-in-depth/project-portfolio",
  },
  {
    name: "Calculator App",
    path: "/react-basics/calculator-app",
  },
  {
    name: "Practice: Putting it together",
    path: "/advanced-react/practice-putting-it-together",
  },
  {
    name: "Portfolio (Advanced React)",
    path: "/advanced-react/lab-create-portfolio",
  },
];

const welcomeMessage =
  "Welcome to my journey through Meta's Front-End Developer Certificate course! This site, developed in React, is a living portfolio showcasing my progress, challenges, and successes as I deepen my understanding of Front-End development. Throughout the course, I've applied what I've learned, and I've also explored topics beyond the curriculum, such as routing and tools like Tailwind CSS. Here, you'll find examples of labs, projects, and practice exercises, all demonstrating key concepts and techniques. Whether you're a fellow developer, a recruiter, or just curious about React, I invite you to explore and share in my learning experience.";

const Home = () => {
  return (
    <section className="h-full bg-slate-200">
      <div className="flex flex-col gap-4 items-center w-full bg-gradient-to-r from-blue-500 from-20% via-sky-400 via-60% to-blue-500 to-100% p-6">
        <h1 className="text-6xl font-bold text-white">Course Work</h1>
        <h2 className="text-4xl font-bold text-slate-800 bg-white/30 py-2 px-4 rounded-lg mb-2">
          Developing skills - Gaining knowledge
        </h2>
      </div>

      <div className="section-styles">
        <InfoCard
          title="Welcome"
          content={
            <div className="">
              <p className="text-slate-600 text-lg leading-7">
                {welcomeMessage}
              </p>
            </div>
          }
        />

        <div className="section-row">
          <InfoCard
            title="Explore"
            content={
              <div className="max-w-[25rem]">
                <p className="text-slate-600 text-lg leading-7">
                  Use the left sidebar to check out my course work, experiments,
                  and projects.
                </p>
              </div>
            }
          />

          <InfoCard
            title="My favorites"
            content={
              <>
                <p className="text-neutral-600 font-semibold text-xl">
                  The List:
                </p>
                {favList.map((fav) => (
                  <Link
                    key={fav.name}
                    className="text-red-400 hover:text-rose-300 pl-2"
                    to={fav.path}
                  >
                    {fav.name}
                  </Link>
                ))}
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
