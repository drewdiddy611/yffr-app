import React from 'react';
import PageHeader from '../../../components/PageHeader';
import WelcomeMessage from '../../../components/WelcomeMessage';
import { TRAINING_AND_DEVELOPMENT } from '../../../components/PageHeader/page-header-constants';
import tAndDImg from '../../../../img/t-and-d-feature-img.png';
import Button from '@material-ui/core/Button';

export default function SplashPageFive() {
  const headerText = 'Training & Development';
  const welcomeMessage =
    'Describe the value added with the Training & ' +
    'Development button. 1-2 sentences.';
  const altText = 'Traning and Development Feature';
  return (
    <div className="splash-page-five">
      <PageHeader type={TRAINING_AND_DEVELOPMENT} text={headerText} />
      <div className="poa-t-and-d">
        <img src={tAndDImg} alt={altText} />
      </div>
      <WelcomeMessage message={welcomeMessage} />
      <div className="acknowledgement-container">
        <Button className="btn-default" variant="contained" color="primary">
          Got it!
        </Button>
      </div>
    </div>
  );
}
