import React, { useEffect, useState } from 'react';
type Dimensions = {
  depth: number;
  height: number;
  width: number;
};

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type Product = {
  availabilityStatus: string;
  brand: string;
  category: string;
  description: string;
  dimensions: Dimensions;
  discountPercentage: number;
  id: number;
  images: string[];
  meta: {
    barcode: string;
    createdAt: string;
    qrCode: string;
    updatedAt: string;
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
};

const LoadMoreData = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [disableButton, setDissableButton] = useState<boolean | undefined>(
    false
  );
  console.log('data', products);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDissableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=' flex flex-col justify-center items-center gap-5'>
      <div className=' grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {products && products.length
          ? products.map((item) => (
              <div
                key={item.id}
                className=' border-2 border-gray-400 shadow-md'
              >
                <img src={item.thumbnail} alt={item.title} />
                <h2>{item.title}</h2>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
          className=' border-2 border-black font-semibold'
        >
          Load more products
        </button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
