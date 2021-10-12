import styles from './styles.scss';

import Step from './Step';

function Form({ children }) {
  return (
    <>
      <form className="form">
        {children}
      </form>
      <style jsx>{styles}</style>
    </>
  );
}

export { Step };
export default Form;
