import React from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import PageHeader from '../PageHeader';
import YFFRLogo from '../YFFRLogo';
import Chance from 'chance';

import CONTENT from '../../../data/content-objects';
import {
  ENERGY_AND_FOCUS,
  DEESCALATION,
  OH_SHIT
} from '../PageHeader/page-header-constants';

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
      const chosenItemId = id === 'random' ? getRandomId(categoryItems.length - 1) : id;
      return categoryItems[chosenItemId];
    }
  }

  return undefined;
};

export const ContentNotFound = () => {
  return (
    <p className="not-found">The item does not exist</p>
  );
};


export const ContentToView = contentItem => {
  return (
    <div className="content-to-view">
    </div>
  );
};

export default ({ type, category, id }) => {
  const contentItem = getContent(CONTENT)(type, category, id);

  return (
    <div className="content-player">
      <PageHeader
        type={getHeaderTypeFromCategory(category)}
        text={getHeaderTextFromCategory(category)} />
      <YFFRLogo />
      {
        !contentItem ? <ContentNotFound /> :
          <ContentToView {...contentItem} />
      }
    </div>
  );
};