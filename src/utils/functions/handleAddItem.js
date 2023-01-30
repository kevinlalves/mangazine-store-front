export const handleAddItem = (localCart, product) => {
  const isExistProduct = localCart.some((c) => c.product.name === product.name);
  if (!isExistProduct) {
    return [
      ...localCart,
      { product, quantity: 1 },
    ];
  } else {
    return localCart.map((c) =>
      c.product.name === product.name ? { ...c, quantity: c.quantity + 1 } : c
    );
  }
}

