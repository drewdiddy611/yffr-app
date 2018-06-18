import React from 'react';
import PageHeader from '../../../components/PageHeader';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import WelcomeMessage from '../../../components/WelcomeMessage';
import { ENERGY_AND_FOCUS } from '../../../components/PageHeader/page-header-constants';

export default function SplashPageTwo() {
  const headerText = 'Energy & Focus';
  const welcomeMessage =
    'Describe the value added with the Energy & ' +
    'Focus button. 1-2 sentences.';
  return (
    <div>
      <PageHeader type={ENERGY_AND_FOCUS} text={headerText} />
      <div className="poa-fab">
        <Button
          className="btn-default"
          variant="fab"
          color="primary"
          aria-label="Energy and Focus"
        >
          <AddIcon />
        </Button>
      </div>
      <WelcomeMessage message={welcomeMessage} />
    </div>
  );
}
