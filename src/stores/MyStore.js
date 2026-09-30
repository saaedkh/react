//src/stores/MySotre
import { makeAutoObservable } from 'mobx';
import { fetchFakeStoreProducts } from './fakeStoreApi';
class Store {
  products = [
    { id: 1, name: 'Adidas Hoodie', price: 199, image: '/images/AdidasHoodie.jpg', description: 'A stylish Adidas hoodie made from premium materials, perfect for casual outings and staying warm.' },
    { id: 2, name: 'Adidas Running Shoes', price: 80, image: '/images/AdidasRunningShoes.jpg', description: 'Comfortable and durable running shoes designed to enhance your performance with excellent cushioning and support.' },
    { id: 3, name: 'Adidas T-Shirt', price: 50, image: '/images/AdidasTShirt.jpg', description: 'A classic Adidas T-shirt made from soft cotton, ideal for everyday wear with a sleek design.' },
    { id: 4, name: 'Adidas SuperStar', price: 100, image: '/images/AdidasSuper.jpg', description: 'The iconic Adidas SuperStar sneakers with a timeless design and durable leather upper for a fashionable and comfortable fit.' },
    { id: 5, name: 'Argentina Adidas Home', price: 140, image: '/images/MessiShirt.jpg', description: 'Official Argentina home jersey, designed for fans and players with breathable fabric and a stylish look inspired by the national team.' },
    { id: 6, name: 'Real Madrid Adidas Home', price: 115, image: '/images/MbappeShirt.jpg', description: 'Authentic Real Madrid home jersey featuring advanced moisture-wicking technology and a design that celebrates the storied club.' },
    { id: 7, name: 'Kros Football Shoes', price: 110, image: '/images/KrosShoes.jpg', description: 'High-performance football shoes engineered for agility and control on the field, with a comfortable fit and durable construction.' },
    { id: 8, name: 'Adidas Originals Women Shirt', price: 40, image: '/images/AdidasWomenShirt.jpg', description: 'A chic Adidas Originals shirt designed for women, offering a flattering fit and stylish design suitable for various occasions.' },
    { id: 9, name: 'Adidas Originals Men Short', price: 65, image: '/images/ShortMen.jpg', description: 'Comfortable Adidas Originals shorts for men, featuring a relaxed fit and breathable fabric for optimal comfort during workouts or leisure.' },
    { id: 10, name: 'Adidas Sport Women Short', price: 70, image: '/images/ShortWomen.jpg', description: 'Sporty and functional shorts for women by Adidas, designed with moisture-wicking technology and an ergonomic fit for active performance.' },
    { id: 11, name: 'Adidas Socks', price: 15, image: '/images/MenSock.jpg', description: 'High-quality Adidas socks with cushioning and arch support, providing all-day comfort and durability for your feet.' },
    { id: 12, name: 'Adidas Water Bottle', price: 10, image: '/images/AdidasWaterBo.jpg', description: 'Stylish and practical Adidas water bottle, perfect for staying hydrated during workouts or daily activities, featuring a secure lid and sleek design.' },
    { id: 13, name: 'Adidas HandBag', price: 45, image: '/images/AdidasHandBag.jpg', description: 'A fashionable Adidas handbag with ample space and a modern design, ideal for carrying your essentials with style.' },
    { id: 14, name: 'Adidas Bag', price: 60, image: '/images/AdidasBag.jpg', description: 'Versatile Adidas bag suitable for sports or everyday use, offering plenty of storage and a robust build for all your needs.' },
    { id: 15, name: 'Adidas Pencil Case', price: 5, image: '/images/AdidasPencilCa.jpg', description: 'A compact and durable Adidas pencil case, perfect for organizing your stationery with a sleek and sporty design.' }
  ];
  
  
  cartItems = [];

  constructor() {
    makeAutoObservable(this);
    this.loadFakeStoreProducts();
  }

  async loadFakeStoreProducts() {
    const apiProducts = await fetchFakeStoreProducts();
 
    this.products = [
      ...this.products,
      ...apiProducts.slice(0, 3).map(product => ({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
        description: product.description
      }))
    ];
  }

  addToCart = (product) => {
    const existingItem = this.cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  };

  removeFromCart = (product) => {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
  };

  clearCart = () => {
    this.cartItems = [];
  };

  get cartTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

const store = new Store();
export default store;