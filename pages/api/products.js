export default (req, res) => {
  res.status(200).json([
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 200,
      productImage: '/images/products/product-01a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 300,
      productImage: '/images/products/product-02a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 3000,
      productImage: '/images/products/product-03a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 500,
      productImage: '/images/products/product-04a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 800,
      productImage: '/images/products/product-05a.jpg',
    },
    {
      productName: 'Thread Affair Traveller Suit',
      productPrice: 2500,
      productImage: '/images/products/product-06a.jpg',
    },
  ]);
};
