import React from "react";

const info = {
  name: "Milhouse",
  image: "https://randomuser.me/api/portraits/men/38.jpg",
  details: [
    {
      title: "Age",
      stat: "34",
    },
    {
      title: "Gender",
      stat: "Male",
    },
    {
      title: "Occupation",
      stat: "Software Engineer",
    },
    {
      title: "Tech Literate",
      stat: "High",
    },
  ],
  quote:
    "Coffee enthusiast, weekend gamer, efficient multitasker, and dedicated to self-improvement.",
  bio: "Milhouse lives in Seattle and works as a Software Engineer for a tech startup. He's single, enjoys trying out new coffee blends, and spends his weekends gaming or attending tech meetups. He's always looking for ways to optimize his time and improve his skills.",
  coreNeeds: [
    "Convenient meal options that fit into his busy schedule.",
    "Healthy food choices that cater to his active lifestyle.",
    "A service that remembers his past orders and preferences.",
  ],
  frustrations: [
    "Long delivery times during peak hours.",
    "Lack of customization options in meal choices.",
    "Inconsistent quality in food delivery services.",
  ],
};

const ProjectPersona = () => {
  return (
    <section className="h-full bg-white flex justify-center">
      <div className="bg-cyan-500 p-6 flex gap-4 size-fit mt-4">
        <div className="flex flex-col gap-4">
          <div className="bg-white px-4 py-6 rounded-md flex flex-col w-72">
            <p className="text-2xl w-full text-center">{info.name}</p>
            <div className="w-full flex justify-center">
              <img
                src={info.image}
                alt={info.name}
                className="rounded-full size-44 my-6 object-cover"
              />
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col gap-2">
                {info.details.map((detail) => (
                  <p className="font-extralight ">{detail.title}</p>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {info.details.map((detail) => (
                  <p>{detail.stat}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md flex w-72">
            <p className="text-3xl">"</p>
            <p>{info.quote}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white p-4 rounded-md flex flex-col w-[450px]">
            <p className="font-bold mb-2 text-lg">Bio</p>
            <p>{info.bio}</p>
          </div>

          <div className="bg-white p-4 rounded-md flex flex-col w-[450px]">
            <p className="font-bold mb-2 text-lg">Core needs</p>
            <ul>
              {info.coreNeeds.map((need) => (
                <li className="list-disc ml-5">{need}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded-md flex flex-col w-[450px]">
            <p className="font-bold mb-2 text-lg">Frustrations</p>
            <ul>
              {info.frustrations.map((item) => (
                <li className="list-disc ml-5">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPersona;
