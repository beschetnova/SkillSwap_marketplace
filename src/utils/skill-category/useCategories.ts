import { useEffect, useState } from 'react';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/db/skills.json')
      .then((res) => res.json())
      .then(setCategories)
      .catch((error) => {
        console.error('Failed to fetch categories:', error);
      });
  }, []);

  return categories;
};
