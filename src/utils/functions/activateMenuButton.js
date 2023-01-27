const activateMenuButton = (buttonName, statusButton) => {
  const status = { ...statusButton };
  Object.assign(status, {
    user: false,
    home: false,
    orders: false,
    cart: false,
  });
  status[buttonName] = true;
  return status;
};

export default activateMenuButton;
