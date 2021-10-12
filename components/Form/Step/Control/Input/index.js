import styles from './styles.scss';

export default function StepInput({ type, placeholder }) {
  return (
    <>
      <input type={type} placeholder={placeholder} className="step-input" />
      <style jsx>{styles}</style>
    </>
  );
}
