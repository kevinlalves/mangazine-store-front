export const handleAddItem = (localCart, { id, name, image, price }) => {
  const isExistProduct = localCart.some((c) => c.product.name === name);
  if (!isExistProduct) {
    return [
      ...localCart,
      { product: { id, name, image, price }, quantity: 1 },
    ];
  } else {
    return localCart.map((c) =>
      c.product.name === name ? { ...c, quantity: c.quantity + 1 } : c
    );
  }
}

