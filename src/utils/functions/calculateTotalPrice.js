export const calculateTotalPrice = (cart)=>{
    let totalValue = 0;
    cart.forEach(({product, quantity}) => {
        const {price} = product;
        totalValue += price*quantity;
    });
    return totalValue.toFixed(2).replace(".",",");
}