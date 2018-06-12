import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Chance from 'chance';

import PageHeader from './PageHeader';

import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

const chance = new Chance();
const givenText = () => chance.string();

describe('Page header component testing', () => {
  it('should render the header text for the page using the energy and focus class', () => {
    const expectedText = givenText();
    const wrapper = shallow(<PageHeader type={'energy'} text={expectedText} />);
    const expectedHeader = (
      <h1 className={'energy-and-focus'}>{expectedText}</h1>
    );

    expect(wrapper, 'should contain the energy and focus header').to.contain(
      expectedHeader
    );
  });

  it('should render the header text for the page using the deescalation class', () => {
    const expectedText = givenText();
    const wrapper = shallow(
      <PageHeader type={'deescalation'} text={expectedText} />
    );
    const expectedHeader = <h1 className={'deescalation'}>{expectedText}</h1>;

    expect(wrapper, 'should contain the deescalation header').to.contain(
      expectedHeader
    );
  });

  it('should render the header text for the page using the oh shit class', () => {
    const expectedText = givenText();
    const wrapper = shallow(
      <PageHeader type={'oh-shit'} text={expectedText} />
    );
    const expectedHeader = <h1 className={'oh-shit'}>{expectedText}</h1>;

    expect(wrapper, 'should contain the oh shit header').to.contain(
      expectedHeader
    );
  });

  it('should render the header text for the page using the training class', () => {
    const expectedText = givenText();
    const wrapper = shallow(
      <PageHeader type={'training-and-development'} text={expectedText} />
    );
    const expectedHeader = (
      <h1 className={'training-and-development'}>{expectedText}</h1>
    );

    expect(
      wrapper,
      'should contain the training and development header'
    ).to.contain(expectedHeader);
  });

  it('should not render unless a valid type is passed', () => {
    const expectedText = givenText();
    const randomType = givenText();
    const wrapper = shallow(
      <PageHeader type={randomType} text={expectedText} />
    );

    expect(wrapper.equals(null), 'should not render anything').to.equal(true);
  });
});
