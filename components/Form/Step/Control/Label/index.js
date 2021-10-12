import styles from './styles.scss';

export default function StepLabel({ label }) {
  return (
    <>
      <label className="step-label">
        {label}
      </label>
      <style jsx>{styles}</style>
    </>
  );
}
