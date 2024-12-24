'use client'

import React, { useEffect, useState } from 'react';

// Define the type for the items in the data array
interface Item {
  id: number;
  name: string;
}

const MyComponent = () => {
  const [data, setData] = useState<Item[]>([]); // Initialize as an empty array of Item type

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api');
        const result = await response.json();
        setData(result); // Ensure the result is an array of Item objects
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default MyComponent;
