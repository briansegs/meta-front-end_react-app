import photo from "./photo.jpg";

const Assignment3 = () => {
  return (
    <div className="w-full bg-slate-50 flex justify-center">
      <div className="bg-white w-[650px] px-4 py-2 flex flex-col items-center">
        <div className="m-1">
          <h1 className="text-blue-600 text-xl">Brian Segers</h1>
        </div>
        <div className="m-1">
          <img
            className="border-blue-600 border-[2px]"
            src={photo}
            alt="profile-img"
            id="photo"
            width="200"
          />
          <div className="m-1">
            <h2 className="text-gray-500 text-lg">Favorite Music Artists</h2>
            <ul className="ml-2">
              <li>Incubus</li>
              <li>A tribe called quest</li>
              <li>Nas</li>
              <li>Linkin Park</li>
              <li>Jay-z</li>
            </ul>
          </div>
          <div className="m-1">
            <h2 className="text-gray-500 text-lg">Favorite Films</h2>
            <ol className="ml-2">
              <li>Drunkin Master</li>
              <li>Kung Pow</li>
              <li>Action</li>
              <li>Sci-fy</li>
              <li>Avengers</li>
            </ol>
          </div>
          <div className="m-1 text-red-500 hover:text-red-300">
            <a href="https://www.meta.com/">My Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment3;
