import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import ReactPlayer from 'react-player';
import PageHeader from '../PageHeader';
import YFFRLogo from '../YFFRLogo';
import Chance from 'chance';

import CONTENT from '../../../data/content-objects';
import {
  ENERGY_AND_FOCUS,
  DEESCALATION,
  OH_SHIT
} from '../PageHeader/page-header-constants';
import PlayerControls from '../PlayerControls';

const getHeaderTypeFromCategory = category => {
  switch (category) {
    case 'energy':
      return ENERGY_AND_FOCUS;
    case 'deescalation':
      return DEESCALATION;
    case 'oh-shit':
      return OH_SHIT;
  }
  return undefined;
};

const getHeaderTextFromCategory = category => {
  switch (category) {
    case 'energy':
      return "Energy & Focus";
    case 'deescalation':
      return "Deescalation";
    case 'oh-shit':
      return "Oh Shit";
  }
  return undefined;
}

const chance = new Chance();
const getRandomId = max => {
  return chance.natural({
    min: 0,
    max
  });
};

export const getContent = content => (type, category, id) => {
  const typeItems = content[type];
  if (typeItems) {
    const categoryItems = typeItems[category];
    if (categoryItems) {
      let chosenItemId = id === 'random' ? getRandomId(categoryItems.length - 1) : id;
      if (!categoryItems[chosenItemId])
        return undefined;
      return {
        id,
        category,
        type,
        ...categoryItems[chosenItemId]
      }
    }
  }

  return undefined;
};

export const ContentNotFound = () => {
  return (
    <p className="not-found">The item does not exist</p>
  );
};

class ContentToView extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.contentPlayer = React.createRef();
    this.playerControls = React.createRef();
  }

  onPrevious = () => {
    const { history, match } = this.props;

    console.log(match);
  }

  onPause = () => {
    this.setState({
      isPlaying: false
    });
  }

  onProgress = progress => {
    const controls = this.playerControls.current;
    if (controls && controls.onProgress) {
      controls.onProgress(progress);
    }
  }

  onResume = () => {
    this.setState({
      isPlaying: true
    });
  }

  onNext = () => {

  }

  render() {
    const {
      type,
      url,
      title
    } = this.props;

    return (
      <div className={`content-to-view`}>
        <ReactPlayer
          onReady={this.onResume}
          onProgress={this.onProgress}
          progressInterval={500}
          ref={this.contentPlayer}
          id="you-tube-player"
          style={{ display: type === 'audio' ? 'none' : 'block' }}
          url={url}
          width={'auto'}
          height={'260px'}
          controls
          playing={this.state.isPlaying} />
        <p className="title">{title}</p>
        {type === 'audio' ?
          <PlayerControls
            ref={this.playerControls}
            isPlaying={this.state.isPlaying}
            onPrevious={this.onPrevious}
            onPause={this.onPause}
            onResume={this.onResume}
            onNext={this.onNext} /> : null}

      </div>
    );
  }
}

export const ViewableContent = process.env.NODE_ENV === 'test' ?
  ContentToView : withRouter(ContentToView);

export default ({ type, category, id }) => {
  const contentItem = getContent(CONTENT)(type, category, id);

  return (
    <div className={`content-player ${type}`}>
      <PageHeader
        type={getHeaderTypeFromCategory(category)}
        text={getHeaderTextFromCategory(category)} />
      <YFFRLogo />
      {!contentItem ? <ContentNotFound /> : <ViewableContent {...contentItem} />}
    </div>
  );
};