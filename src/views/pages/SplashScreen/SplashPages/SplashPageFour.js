import React from 'react';
import PageHeader from '../../../components/PageHeader';
import Button from '@material-ui/core/Button';
import OhShitIcon from '@material-ui/icons/PriorityHigh';
import WelcomeMessage from '../../../components/WelcomeMessage';
import { OH_SHIT } from '../../../components/PageHeader/page-header-constants';

export default function SplashPageFour() {
  const headerText = 'Oh Shit';
  const welcomeMessage =
    'Describe the value added with the Oh Shit button. 1-2 sentences.';
  return (
    <div>
      <PageHeader type={OH_SHIT} text={headerText} />
      <div className="poa-fab oh-shit">
        <Button
          className="btn-oh-shit"
          variant="fab"
          color="primary"
          aria-label="add"
        >
          <OhShitIcon />
        </Button>
      </div>
      <WelcomeMessage message={welcomeMessage} />
    </div>
  );
}
