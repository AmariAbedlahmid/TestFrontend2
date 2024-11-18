'use client';  // Ajoutez cette ligne au début du fichier

import React, { useState, useEffect } from 'react';
import FilterBar from './components/FilterBar';
import PriceDisplay from './components/PriceDisplay';
import ChartComponent from './components/ChartComponent';
import SecondChartComponent from './components/SecondChartComponent'; 

type Item = {
  id: number;
  saison: string;
  prix: number;
  age: number;  
  niveau: string;
  compte: boolean;
  passe: string;
};

export default function Home() {
  const [data, setData] = useState<Item[]>([]);
  const [filteredData, setFilteredData] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/database.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  const handleFilterChange = (filter: string) => {
    if (filter) {
      setFilteredData(data.filter((item) => item.saison === filter));
    } else {
      setFilteredData(data);
    }
  };

  const totalPrice = filteredData.reduce((sum, item) => sum + item.prix, 0);

  return (
    <div className="p-4">
      <FilterBar onFilterChange={handleFilterChange} />
      <PriceDisplay price={totalPrice} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <ChartComponent data={filteredData} />
        </div>
        <div>
          <SecondChartComponent data={filteredData} />  {/* Affichage du deuxième graphique */}
        </div>
      </div>
    </div>
  );
}



