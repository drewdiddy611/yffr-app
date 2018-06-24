import React from 'react';
import { configure, shallow } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import contentPages from '../ContentPages';

// Content List Page components
import YFFRLogo from '../../../components/YFFRLogo';
import ContentListFilterBar from '../../../components/ContentListFilterBar';
import ContentListWrapper from '../../../components/ContentListWrapper';

// Content View Page components'
import { ContentNotFound } from '../../ContentScreen/ContentPages/ContentViewPage';

import EnzymeAdapter from 'enzyme-adapter-react-16';
import ContentPlayer from '../../../components/ContentPlayer/ContentPlayer';
configure({ adapter: new EnzymeAdapter() });
chai.use(chaiEnzyme());

describe('YFFR content pages testing', () => {
    const {
        ContentListPage,
        ContentViewPage
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
                mainDiv.find('.hr'),
                'must have a horizontal rule separating logo and content'
            ).to.have.length(1);
            expect(
                mainDiv.find(ContentListFilterBar),
                'must have the content list filter bar'
            ).to.have.length(1);

            const contentListWrapper = mainDiv.find(ContentListWrapper);
            expect(
                contentListWrapper,
                'must have the content list wrapper'
            ).to.have.length(1);
        });
    });

    describe('Content view page component testing', () => {
        it('renders the content player', () => {
            const mockRouterProps = {
                match: {
                    params: {}
                }
            };
            const wrapper = shallow(<ContentViewPage {...mockRouterProps} />);

            const mainDiv = wrapper.find('div.content-screen');
            expect(mainDiv).to.have.length(1);
            expect(mainDiv.children()).to.have.length(1);
            expect(mainDiv.find(ContentPlayer)).to.have.length(1);
        });


    });
});