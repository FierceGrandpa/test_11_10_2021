import styles from './styles.scss';

import StepLabel from './Label';
import StepInput from './Input';

function StepControl({ children }) {
  return (
    <>
      <div className="step-control">
        {(children)}
      </div>
      <style jsx>{styles}</style>
    </>
  );
}

StepControl.Label = StepLabel;
StepControl.Input = StepInput;

export default StepControl;
