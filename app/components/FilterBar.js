import React from 'react';

const FilterBar = ({ onFilterChange }) => {
  return (
    <div>
      <label htmlFor="season">Saison :</label>
      <select id="season" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">Toutes</option>
        <option value="été">Été</option>
        <option value="printemps">Printemps</option>
        <option value="automne">Automne</option>
        <option value="hiver">Hiver</option>
      </select>
    </div>
  );
};

export default FilterBar;
