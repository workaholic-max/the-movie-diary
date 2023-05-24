import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../../atoms/Button';
import { TAGS_TITLES_BY_NAME } from './config';

// TODO: move
const MovieTags = ({ tags }) => {
  const areAllTagsAdded = Object.entries(tags).every((tagData) => tagData[1] !== 0);

  /**
   * @param tagData {Array}
   */
  const renderTag = (tagData) => {
    const [tagName, tagPriority] = tagData;

    const isTagActive = tagPriority > 0;

    const tagTitle = TAGS_TITLES_BY_NAME[tagName];

    return (
      <Button
        key={tagTitle}
        theme={isTagActive ? 'success' : 'primary'}
        className="movie-tags__tag"
      >
        {tagTitle}

        {isTagActive && <span>{tagPriority}</span>}
      </Button>
    );
  };

  const renderMovieTags = () => {
    const tagsEntries = Object.entries(tags);

    if (tagsEntries.every((tagData) => tagData[1] === 0)) {
      return <div className="movie-tags__empty-message">Tags not added yet..</div>;
    }

    return tagsEntries.map(renderTag);
  };

  return (
    <div
      className={classNames('movie-tags', {
        'movie-tags--all': areAllTagsAdded,
      })}
    >
      {renderMovieTags()}
    </div>
  );
};

MovieTags.propTypes = {
  tags: PropTypes.object.isRequired,
};

export default MovieTags;
