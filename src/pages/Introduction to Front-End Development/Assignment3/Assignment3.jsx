import photo from "./photo.jpg";

const Assignment3 = () => {
  return (
    <div>
      <div className="m-1">
        <h1 className="text-blue-600">Brian Segers</h1>
      </div>
      <div className="m-1">
        <img
          className="border-blue-600 border-[2px]"
          src={photo}
          alt="profile-img"
          id="photo"
          width="200"
        />
      </div>
      <div className="m-1">
        <h2 className="text-gray-500">Favorite Music Artists</h2>
        <ul>
          <li>Incubus</li>
          <li>A tribe called quest</li>
          <li>Nas</li>
          <li>Linkin Park</li>
          <li>Jay-z</li>
        </ul>
      </div>
      <div className="m-1">
        <h2 className="text-gray-500">Favorite Films</h2>
        <ol>
          <li>Drunkin Master</li>
          <li>Kung Pow</li>
          <li>Action</li>
          <li>Sci-fy</li>
          <li>Avengers</li>
        </ol>
      </div>
      <div className="m-1">
        <a href="https://www.meta.com/">My Profile</a>
      </div>
    </div>
  );
};

export default Assignment3;
