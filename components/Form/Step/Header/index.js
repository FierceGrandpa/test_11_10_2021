import styles from './styles.scss';

export default function StepHeader({ step, title }) {
  return (
    <>
      <div className="step-header">
        <span className="step-header__step-number">
          {step}
        </span>
        <h3 className="step-header__title">
          {title}
        </h3>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
