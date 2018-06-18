import React from 'react';
import PageHeader from '../../../components/PageHeader';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import WelcomeMessage from '../../../components/WelcomeMessage';
import { DEESCALATION } from '../../../components/PageHeader/page-header-constants';

export default function SplashPageThree() {
  const headerText = 'Deescalation';
  const welcomeMessage =
    'Describe the value added with the deescalation button. ' +
    '1-2 sentences.';
  return (
    <div>
      <PageHeader type={DEESCALATION} text={headerText} />
      <div className="poa-fab">
        <Button
          className="btn-default"
          variant="fab"
          color="primary"
          aria-label="Deescalation"
        >
          <RemoveIcon />
        </Button>
      </div>
      <WelcomeMessage message={welcomeMessage} />
    </div>
  );
}
