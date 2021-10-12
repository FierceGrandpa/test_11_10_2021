import StepHeader from './Header';
import StepBody from './Body';
import StepControl from './Control';

import styles from './styles.scss';

const Step = ({ id, children }) => (
  <>
    <div id={id} className="step">
      {(children)}
    </div>
    <style jsx>{styles}</style>
  </>
);

Step.Header = StepHeader;
Step.Body = StepBody;
Step.Control = StepControl;
Step.Label = StepControl.Label;
Step.Input = StepControl.Input;

export default Step;
