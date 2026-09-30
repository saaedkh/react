//componets/MySotre.jsx
import { makeAutoObservable, runInAction } from 'mobx';

class Store {
  products = [];
  cartItems = [];

  constructor() {
    makeAutoObservable(this);
    this.fetchProducts();
  }

  async fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products'); 
      const data = await response.json();
      runInAction(() => {
        this.products = data;
      });
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  }

  addToCart(product) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      runInAction(() => {
        existingItem.quantity += 1;
      });
    } else {
      runInAction(() => {
        this.cartItems.push({ ...product, quantity: 1 });
      });
    }
  }

  removeFromCart(product) {
    runInAction(() => {
      this.cartItems = this.cartItems.filter(item => item.id !== product.id);
    });
  }

  clearCart() {
    runInAction(() => {
      this.cartItems = [];
    });
  }

  get cartTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

const store = new Store();
export default store;
