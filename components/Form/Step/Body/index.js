import styles from './styles.scss';

export default function StepBody({ children }) {
  return (
    <>
      <div className="step-body">
        {(children)}
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
