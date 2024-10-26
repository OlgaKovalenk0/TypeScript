import Buyable from '../domain/Buyable';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

function prepareCart(): Cart {
const cart = new Cart();

  cart.add({
    id: 2,
    name: 'Мстители',
    price: 10
  });

  cart.add({
    id: 5,
    name: 'Золушка',
    price: 16
  });

  return cart;
}

test('total', ()=> {
  const cart = prepareCart();
  const total = cart.total();

  expect(total).toBe(26);
});

test('discount total', ()=> {
  const cart = prepareCart();
  const discountTotal = cart.discountedTotal(5);

  expect(discountTotal).toBe(21);
});

test('delete product', ()=> {
  const cart = prepareCart();
  cart.delete(5);
  const index = cart.items.findIndex((item) => {
    return item.id == 5  
  });
  expect(index).toBe(-1);
});

test('delete not existing', ()=> {
  const cart = prepareCart();
  const oldCart = cart.items;
  cart.delete(4);
  const newCart = cart.items;
  
  expect(oldCart).toEqual(newCart);
});