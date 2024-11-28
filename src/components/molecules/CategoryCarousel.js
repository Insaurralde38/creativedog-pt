import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CategoryCard from '@/components/atoms/CategoyCard';
import styles from '@/globalStyles.module.css';

const CategoryCarousel = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://jellyfish-app-mpahs.ondigitalocean.app/api/categories', {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setCategories(data.data))
      .catch((error) => console.error('Error fetching categories:', error));

    fetch('https://jellyfish-app-mpahs.ondigitalocean.app/api/products', {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const calculateProductCount = (categoryId) => {
    return products.filter((product) =>
      product.categories.some((category) => category.id === categoryId)
    ).length;
  };

  return (
    <Swiper spaceBetween={10} slidesPerView={3} className={styles.categoryCarousel}>
      {categories.map((category) => {
        const productCount = calculateProductCount(category.id);
        return (
          <SwiperSlide key={category.id}>
            <CategoryCard
              name={category.name}
              imageUrl={category.image?.formats?.small?.url || category.image?.url}
              productCount={productCount}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CategoryCarousel;