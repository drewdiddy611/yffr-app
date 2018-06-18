import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import contentPages from '../ContentPages';

// Content List Page components
import YFFRLogo from '../../../components/YFFRLogo';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('YFFR content pages testing', () => {
  const {
    ContentListPage
  } = contentPages;
  describe('Content list page component testing', () => {
    let contentListPageWrapper;
    beforeEach(() => {
      contentListPageWrapper = shallow(<ContentListPage />);
    });

    it('renders the YFFR logo, hr, filter menus and content and content list', () => {
      const mainDiv = contentListPageWrapper.find('div.content-screen');
      expect(
        mainDiv,
        'must have div with class content-screen'
      ).to.have.length(1);

      expect(
        mainDiv.find(YFFRLogo),
        'must have the yffr logo'
      ).to.have.length(1);
      expect(
        mainDiv.find('div.hr'),
        'must have a horizontal rule separating logo and content'
      ).to.have.length(1);
    });
  });
});