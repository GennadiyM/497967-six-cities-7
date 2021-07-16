import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SortType } from '../../const';

const ClassName = {
  OPEN: 'places__options--opened',
  ACTIVE_OPTION: 'places__option--active',
};

function Sorting (props) {
  const { currentSortType, changeSortTypeHandler } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => setIsOpen(!isOpen)}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        {SortType[currentSortType].NAME}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen && ClassName.OPEN}`}>
        {Object.entries(SortType).map(([, {VALUE: value, NAME: name}]) => (
          <li className={`places__option ${currentSortType === value && ClassName.ACTIVE_OPTION}`}
            tabIndex="0"
            data-value={value}
            key={value}
            onClick={() => changeSortTypeHandler(value)}
          >
            {name}
          </li>
        ))}
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  changeSortTypeHandler: PropTypes.func.isRequired,
  currentSortType: PropTypes.string.isRequired,
};

export default Sorting;
