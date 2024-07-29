import video from "./video.mp4";

const LabRateTheMedia = () => {
  return (
    <div className="w-full px-4 py-2">
      <video controls width="320" height="240">
        <source src={video} type="video/mp4" />
      </video>
      <form className="flex flex-col gap-4 items-start mt-4">
        <div className="flex gap-4">
          <label for="rating">Rating:</label>
          <input type="range" id="rating" min="1" max="5" list="ratings" />
          <datalist id="ratings">
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
            <option value="4" label="4"></option>
            <option value="5" label="5"></option>
          </datalist>
        </div>
        <button
          className="border-2 p-2 rounded-md hover:border-neutral-300 hover:bg-neutral-100"
          type="submit"
        >
          Submit Rating
        </button>
      </form>
    </div>
  );
};

export default LabRateTheMedia;
