import React, { useContext } from 'react';

import { DEFAULT_MOVIE_TAGS } from '../../../../enums/movieEnums';
import MoviesStateContext from '../../../../context/MoviesStateContext';
import SearchMovieContext from '../../../../context/SearchMovieContext';
import CheckboxField from '../../../../components/molecules/CheckboxField';
import Button from '../../../../components/atoms/Button';

const UnlistedMovieActions = () => {
  const { handleAddMovie } = useContext(MoviesStateContext);

  const {
    searchedMovieData,
    isKeepSearchingAfterAdding,
    setIsKeepSearchingAfterAdding,
    handleOpenSearchMovieModal,
    handleResetSearchedMovieData,
  } = useContext(SearchMovieContext);

  /**
   * @param event {InputEvent}
   */
  const onChangeKeepSearchingAfterAdding = (event) => {
    setIsKeepSearchingAfterAdding(event.target.checked);
  };

  const handleAddToDiary = () => {
    handleAddMovie({ ...searchedMovieData, tags: DEFAULT_MOVIE_TAGS });

    if (isKeepSearchingAfterAdding) {
      handleOpenSearchMovieModal();
    } else {
      handleResetSearchedMovieData();
    }
  };

  return (
    <div className="gl-unlisted-movie-actions">
      <CheckboxField
        id="keep-searching-after-adding-checkbox"
        labelContent="Keep searching after adding"
        checked={isKeepSearchingAfterAdding}
        onChange={onChangeKeepSearchingAfterAdding}
      />

      <div className="gl-unlisted-movie-actions__btns">
        <Button theme="warning" onClick={handleOpenSearchMovieModal}>
          Keep searching
        </Button>

        <Button theme="success" onClick={handleAddToDiary}>
          Add to diary
        </Button>
      </div>
    </div>
  );
};

export default UnlistedMovieActions;
