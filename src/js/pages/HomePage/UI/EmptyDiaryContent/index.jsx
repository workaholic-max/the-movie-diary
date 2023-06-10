import React, { useContext } from 'react';

import SearchMovieContext from '../../../../context/SearchMovieContext';

const EmptyDiaryContent = () => {
  const { handleOpenSearchMovieModal } = useContext(SearchMovieContext);

  return (
    <div className="gl-empty-diary-content">
      To get started, you can <span onClick={handleOpenSearchMovieModal}>search</span> for your
      favorite movies and add them to your diary.
    </div>
  );
};

export default EmptyDiaryContent;
