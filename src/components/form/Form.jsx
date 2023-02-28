import styles from "./index.module.scss";

const Form = () => {
  return (
    <div className={styles.Form}>
      <form
        className={styles.form}
        action="mailto:chiara.cirrito1602@gmail.com"
        id="contact"
        method="get"
      >
        <input type="text" id="nome" placeholder="Nome" />
        <input type="text" id="cognome" placeholder="Cognome" />
        <input type="text" id="motivo" className={styles.special} />
        <input type="submit" className={styles.submit} />
      </form>
    </div>
  );
};

export default Form;
