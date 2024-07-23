import styles from "./labFormStyles.module.css";
import logo from "./logo.png";

const LabForm = () => {
  return (
    <div className="w-full">
      <div className={styles.body}>
        <header>
          <img className={styles.img} alt="logo" src={logo} />
        </header>
        <main className={styles.main}>
          <form className={styles.form}>
            <div>
              <label for="email">Email:</label>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div>
              <label for="date">Date:</label>
              <input
                className={styles.input}
                type="date"
                id="date"
                name="date"
              />
            </div>
            <div>
              <label for="numpeople">Number of people:</label>
              <input
                className={styles.input}
                type="number"
                id="numpeople"
                min="1"
                max="8"
                name="numpeople"
              />
            </div>
            <div>
              <label for="agree">
                <input
                  className={styles.input}
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                />
                I agree to the cancellation policy
              </label>
            </div>
            <button type="submit">Book Now</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default LabForm;
