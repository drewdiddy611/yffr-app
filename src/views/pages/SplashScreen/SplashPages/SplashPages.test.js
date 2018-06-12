import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

import splashPages from '../SplashPages';
import PageHeader, * as PageHeaderConstants from '../../../components/PageHeader';
import {
  ENERGY_AND_FOCUS,
  DEESCALATION,
  OH_SHIT,
  TRAINING_AND_DEVELOPMENT
} from '../../../components/PageHeader/page-header-constants';

import Button from '@material-ui/core/Button';

// Page one components
import YFFRLogo from '../../../components/YFFRLogo';
import WelcomeMessage from '../../../components/WelcomeMessage';

// Page two components
import AddIcon from '@material-ui/icons/Add';

// Page three components
import RemoveIcon from '@material-ui/icons/Remove';

// Page four components
import OhShitIcon from '@material-ui/icons/PriorityHigh';

// Page five components
import tAndDImg from '../../../../img/t-and-d-feature-img.png';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('YFFR splash pages testing', () => {
  const [
    SplashPageOne,
    SplashPageTwo,
    SplashPageThree,
    SplashPageFour,
    SplashPageFive
  ] = splashPages;
  describe('Page one of splash pages component testing', () => {
    let pageOneWrapper;
    beforeEach(() => {
      pageOneWrapper = shallow(<SplashPageOne />);
    });

    it('should render the YFFR logo and welcome message', () => {
      const logo = <YFFRLogo />;
      const welcomeMessage = <WelcomeMessage />;

      expect(pageOneWrapper, 'correctly renders the logo').to.contain(logo);
      expect(
        pageOneWrapper,
        'correctly renders the welcome message'
      ).to.contain(welcomeMessage);
    });
  });

  describe('Page two of splash pages component testing', () => {
    let pageTwoWrapper;
    beforeEach(() => {
      pageTwoWrapper = shallow(<SplashPageTwo />);
    });

    it('should render the energy and focus header, plus fab, and message', () => {
      const headerText = 'Energy & Focus';
      const header = <PageHeader type={ENERGY_AND_FOCUS} text={headerText} />;

      const fab = (
        <Button className="btn-default" variant="fab" color="primary" aria-label="add">
          <AddIcon />
        </Button>
      );

      const message =
        'Describe the value added with the Energy & ' +
        'Focus button. 1-2 sentences.';
      const welcomeMessage = <WelcomeMessage message={message} />;

      expect(pageTwoWrapper, 'correctly renders the header').to.contain(header);
      expect(pageTwoWrapper, 'correctly renders the fab').to.contain(fab);
      expect(
        pageTwoWrapper,
        'correctly renders the welcome message'
      ).to.contain(welcomeMessage);
    });
  });

  describe('Page three of the splash pages component testing', () => {
    let pageThreeWrapper;
    beforeEach(() => {
      pageThreeWrapper = shallow(<SplashPageThree />);
    });

    it('should render the deescalation header, plus fab, and message', () => {
      const headerText = 'Deescalation';
      const header = <PageHeader type={DEESCALATION} text={headerText} />;

      const fab = (
        <Button className="btn-default" variant="fab" color="primary" aria-label="add">
          <RemoveIcon />
        </Button>
      );

      const message =
        'Describe the value added with the deescalation button. ' +
        '1-2 sentences.';
      const welcomeMessage = <WelcomeMessage message={message} />;

      expect(pageThreeWrapper, 'correctly renders the header').to.contain(
        header
      );
      expect(pageThreeWrapper, 'correctly renders the fab').to.contain(fab);
      expect(
        pageThreeWrapper,
        'correctly renders the welcome message'
      ).to.contain(welcomeMessage);
    });
  });

  describe('Page four of the splash pages component testing', () => {
    let pageFourWrapper;
    beforeEach(() => {
      pageFourWrapper = shallow(<SplashPageFour />);
    });

    it('should render the oh shit header, plus fab, and message', () => {
      const headerText = 'Oh Shit';
      const header = <PageHeader type={OH_SHIT} text={headerText} />;

      const fab = (
        <div className="poa-fab oh-shit">
          <Button className="btn-oh-shit" variant="fab" color="primary" aria-label="add">
            <OhShitIcon />
          </Button>
        </div>
      );

      const message =
        'Describe the value added with the Oh Shit button. 1-2 sentences.';
      const welcomeMessage = <WelcomeMessage message={message} />;

      expect(pageFourWrapper, 'correctly renders the header').to.contain(
        header
      );
      expect(pageFourWrapper, 'correctly renders the fab').to.contain(fab);
      expect(
        pageFourWrapper,
        'correctly renders the welcome message'
      ).to.contain(welcomeMessage);
    });
  });

  describe('Page five of the splash pages component testing', () => {
    let pageFiveWrapper;
    beforeEach(() => {
      pageFiveWrapper = shallow(<SplashPageFive />);
    });

    it('should render the training and development header, plus fab, and message', () => {
      const headerText = 'Training & Development';
      const header = (
        <PageHeader type={TRAINING_AND_DEVELOPMENT} text={headerText} />
      );

      const altText = 'Traning and Development Feature';
      const trainingAndDevelopmentImg = (
        <div className="poa-t-and-d">
          <img src={tAndDImg} alt={altText} />
        </div>
      );

      const message =
        'Describe the value added with the Training & ' +
        'Development button. 1-2 sentences.';
      const welcomeMessage = <WelcomeMessage message={message} />;

      const acknowledgeButton = (
        <div className="acknowledgement-container">
          <Button className="btn-default" variant="contained" color="primary">
            Got it!
          </Button>
        </div>
      );

      expect(pageFiveWrapper, 'correctly renders the header').to.contain(
        header
      );
      expect(pageFiveWrapper, 'correctly renders the fab').to.contain(
        trainingAndDevelopmentImg
      );
      expect(
        pageFiveWrapper,
        'correctly renders the welcome message'
      ).to.contain(welcomeMessage);
      expect(pageFiveWrapper, 'correctly renders the acknowledgement button').to.contain(
        acknowledgeButton
      );
    });
  });
});
