import styles from "./labFormStyles.module.css";
import logo from "./logo.png";

const LabForm = () => {
  return (
    <div className="h-full flex justify-center bg-slate-50">
      <div className={`${styles.body} w-[650px] px-4 py-2`}>
        <header>
          <img className={styles.img} alt="logo" src={logo} />
        </header>
        <main className={styles.main}>
          <form className={styles.form}>
            <div className="py-2">
              <label for="email">Email:</label>
              <input
                className={`${styles.input} ml-2 rounded-md p-1`}
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="pb-2">
              <label for="date">Date:</label>
              <input
                className={`${styles.input} ml-2 rounded-md p-1`}
                type="date"
                id="date"
                name="date"
              />
            </div>
            <div className="pb-2">
              <label for="numpeople">Number of people:</label>
              <input
                className={`${styles.input} ml-2 rounded-md p-1`}
                type="number"
                id="numpeople"
                min="1"
                max="8"
                name="numpeople"
              />
            </div>
            <div className="pb-2">
              <label for="agree">
                <input
                  className={`${styles.input} mr-2 size-4`}
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                />
                I agree to the cancellation policy
              </label>
            </div>
            <button
              className="bg-emerald-800 text-white mt-2 py-2 px-4 rounded-lg hover:bg-white hover:text-emerald-800"
              type="submit"
            >
              Book Now
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default LabForm;
