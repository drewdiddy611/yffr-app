import React from 'react';
import YFFRLogoImg from '../../../img/logo.png';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';

import YFFRLogo from '../../components/YFFRLogo';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });

describe('YFFR Logo for the application', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<YFFRLogo />);
    const logo = (
      <div className="yffr-logo-header">
        <img alt="YFFR Logo" className="yffr-logo" src={YFFRLogoImg} />
      </div>
    );

    expect(wrapper.contains(logo)).to.equal(true);
  });
});
