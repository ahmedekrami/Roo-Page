// Bouquet data
const bouquets = [
  {
    id: 1,
    name: "Small Butterfly Bouquet",
    price: 60,
    image: "https://scontent.faly2-1.fna.fbcdn.net/v/t39.30808-6/493225583_998205442423127_5406396705883785461_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fmYlljV74lwQ7kNvwGxG1EP&_nc_oc=Adl0u1VCXgzJUHUb00JMO2CzDhyxYLw_Ym-yJlN2yiBD0v62D_zqdDtkYu3tmQ7QSK4&_nc_zt=23&_nc_ht=scontent.faly2-1.fna&_nc_gid=wuFMQXIQonU2rhLoO_qO_Q&oh=00_AfLefqCqKEUJBysuxWBwBnvpZRAO8ld2Bovo5WYhKpcHow&oe=683CAEDE",
    description: "Romantic heart-shaped arrangement perfect for special occasions",
    shape: "Blue"
  },
  {
    id: 2,
    name: "20 Butterflies Bouquet",
    price: 200,
    image: "https://scontent.faly2-2.fna.fbcdn.net/v/t39.30808-6/475547306_935529652024040_3085058709592978331_n.jpg?stp=dst-jpegr_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TCUQuFf0qykQ7kNvwEW1cDZ&_nc_oc=AdmaFADlDkwhcmk6PQGqgimnc-jqO5FIcCDyLrHAs3XpGQLyvuoSdw4huku5w4s_oQo&_nc_zt=23&se=-1&_nc_ht=scontent.faly2-2.fna&_nc_gid=Edh4zKsmokFYZeu0Zjjn3A&oh=00_AfJ1JWH-7bclZ36LzmhvNurQAhm49iDdvuJVQy7PIXDR2w&oe=683CBDE9",
    description: "Classic circular arrangement with seasonal flowers",
    shape: "Red"
  },
  {
    id: 3,
    name: "30 Butterflies Bouquet",
    price: 300,
    image: "https://scontent.faly2-1.fna.fbcdn.net/v/t39.30808-6/482024349_962441199332885_7943339677070416695_n.jpg?stp=dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=I8oJoBqxwIkQ7kNvwHf59S9&_nc_oc=AdkVYJw9-FhQ3Jyc-QAZS10HeKt3yCy3c5nZ4RPyn30tw9qlCsOB-0Tto7OG2B9JGjc&_nc_zt=23&se=-1&_nc_ht=scontent.faly2-1.fna&_nc_gid=QdAbgdSkuK31gippF0Z67Q&oh=00_AfLe13MXDVNIsYMWBhLJKHlismHZhd7tniINsCu8m7KRJg&oe=683CD140",
    description: "Rustic basket filled with fresh garden flowers",
    shape: "Rose"
  },
  {
    id: 4,
    name: "20 Butterflies Bouquet",
    price: 200,
    image: "https://scontent.faly2-1.fna.fbcdn.net/v/t39.30808-6/497584340_1009709351272736_8712983363238441335_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_blstFURyB8Q7kNvwGycewn&_nc_oc=Adm5FP2n07pvk-xyXTE6W3NdLnlFh2xILUnfYZH7FigA1JDuoiET4ufpu8cNtbvt2ak&_nc_zt=23&_nc_ht=scontent.faly2-1.fna&_nc_gid=C-_DuSANSKj52cm-mortLQ&oh=00_AfJbSz9v4w7njNv4ogxtXBm6RybdvR80jR0XDB_QarDxng&oe=683CE189",
    description: "Elegant cone-shaped arrangement wrapped in natural paper",
    shape: "Blue"
  },
  {
    id: 5,
    name: "Red Flower Bouquet",
    price: 400,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Bouquet%20(1).jpg?raw=true",
    description: "Romantic heart-shaped arrangement perfect for special occasions",
    shape: "red"
  },
  {
    id: 6,
    name: "Pink Flower Bouquet",
    price: 150,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Bouquet%20(3).jpg?raw=true",
    description: "Classic circular arrangement with seasonal flowers",
    shape: "Pink"
  },
  {
    id: 7,
    name: "Blue & Black Flower Bouquet",
    price: 250,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Bouquet%20(5).jpg?raw=true",
    description: "Rustic basket filled with fresh garden flowers",
    shape: "Blue"
  },
  {
    id: 8,
    name: "Brown & White Flower Bouquet",
    price: 250,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Bouquet%20(6).jpg?raw=true",
    description: "Elegant cone-shaped arrangement wrapped in natural paper",
    shape: "Brown"
  },
  {
    id: 9,
    name: "Purple & White Flower Bouquet",
    price: 350,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Bouquet%20(7).jpg?raw=true",
    description: "Romantic heart-shaped arrangement perfect for special occasions",
    shape: "Purple"
  },
  {
    id: 10,
    name: "Blue Flower Bouquet",
    price: 600,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Bouquet%20(8).jpg?raw=true",
    description: "Classic circular arrangement with seasonal flowers",
    shape: "Blue"
  },
  {
    id: 11,
    name: "Pink & Purple Flower Bouquet",
    price: 200,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Bouquet%20(9).jpg?raw=true",
    description: "Rustic basket filled with fresh garden flowers",
    shape: "Pink"
  },
  {
    id: 12,
    name: "Mini Flower Bouquet",
    price: 35,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Bouquet%20(2).jpg?raw=true",
    description: "Elegant cone-shaped arrangement wrapped in natural paper",
    shape: "Pink"
  },
];









// Candle data
const candles = [
  {
    id: 13,
    name: "Berry Candel",
    price: 300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(1).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Pink"
  },
  {
    id: 14,
    name: "Heart Candel",
    price: 300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(3).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Pink"
  },
  {
    id: 15,
    name: "Candy Candel",
    price: 300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(4).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Round"
  },
  {
    id: 16,
    name: "Coffee Candel",
    price: 300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(5).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Brown"
  },
  {
    id: 17,
    name: "Autumn Candel",
    price: 300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(7).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Brown"
  },
  {
    id: 18,
    name: "Autumn Candel",
    price: 300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(8).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Orange"
  },
  {
    id: 19,
    name: "Berry Candel",
    price: 300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(9).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Red"
  },
  {
    id: 20,
    name: "Flower Candel",
    price: 300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(14).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Pink"
  },
  {
    id: 21,
    name: "Heart Candel",
    price: 300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(15).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Brown"
  },
  {
    id: 22,
    name: "Sunflower Candel",
    price: 500,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(13).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Yellow"
  },
  {
    id: 23,
    name: "Berry Candel",
    price: 500,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(12).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Brown"
  },
  {
    id: 24,
    name: "Flower Candel",
    price: 500,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/candel%20(11).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Blue"
  },
  

];

// Box data
const boxes = [
  {
    id: 25,
    name: "Box of Love",
    price: 650,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(7).jpg?raw=true",
    description: "Beautiful flower arrangement inside a decorative box.",
    shape: "red"
  },
  {
    id: 26,
    name: "Beauty & Care Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(8).jpg?raw=true",
    description: "Luxury chocolates in an elegant gift box.",
    shape: "Blue"
  },
  {
    id: 27,
    name: "Butterfly Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(9).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Light Blue"
  },
  {
    id: 28,
    name: "Self Care Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(10).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Pink"
  },
  {
    id: 29,
    name: "Self Care Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(11).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Pink"
  },
  {
    id: 30,
    name: "Chocolate Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(2).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Brown"
  },
  {
    id: 31,
    name: "Self Care Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(3).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Green"
  },
  {
    id: 32,
    name: "Magical Moments Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(4).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Purble"
  },
  {
    id: 33,
    name: "Self Care Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(5).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Natural"
  },
  {
    id: 34,
    name: "Happy Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(6).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Blue"
  },
  {
    id: 35,
    name: "Self Care Box",
    price: 1000,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/Box%20(1).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Natural"
  },
  {
    id: 36,
    name: "Self Care Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(1).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "red"
  },
  {
    id: 37,
    name: "Butterfly Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(2).jpg?raw=true",
    description: "Beautiful flower arrangement inside a decorative box.",
    shape: "Blue"
  },
  {
    id: 38,
    name: "Stitch Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(3).jpg?raw=true",
    description: "Luxury chocolates in an elegant gift box.",
    shape: "Blue"
  },
  {
    id: 39,
    name: "Self Care Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(4).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Purble"
  },
  {
    id: 40,
    name: "Self Care Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(5).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Yellow"
  },
  {
    id: 41,
    name: "Make up Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(7).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Pink"
  },
  {
    id: 42,
    name: "Self Care Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(6).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Brown"
  },
  {
    id: 43,
    name: "Self Care Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(8).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Pink"
  },
  {
    id: 44,
    name: "Self Care & Flower Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(9).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Pink"
  },
  {
    id: 45,
    name: "Pink Self Care Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(10).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Pink"
  },
  {
    id: 46,
    name: "Self Care and Chocolate Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(11).jpg?raw=true",
    description: "Relaxing lavender-scented candle for peaceful sleep.",
    shape: "Pink"
  },
  {
    id: 47,
    name: "Eid Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(12).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Natural"
  },
  {
    id: 48,
    name: "Self Care Box",
    price: 1300,
    image: "https://github.com/ahmedekrami/Roo-Page/blob/main/images/newboxes%20(13).jpg?raw=true",
    description: "Aromatherapy candle with natural rose scent.",
    shape: "Pink"
  },
];

// Cart
let cart = [];

// Load all items on DOM ready
document.addEventListener('DOMContentLoaded', function () {
  loadBouquets();
  loadCandles();
  loadBoxes();
  updateCartCount();
});

function loadBouquets() {
  const grid = document.getElementById('bouquet-grid');
  if (!grid) return;
  bouquets.forEach(item => {
    grid.appendChild(createItemCard(item, 'bouquet'));
  });
}

function loadCandles() {
  const grid = document.getElementById('candel-grid');
  if (!grid) return;
  candles.forEach(item => {
    grid.appendChild(createItemCard(item, 'candle'));
  });
}

function loadBoxes() {
  const grid = document.getElementById('box-grid');
  if (!grid) return;
  boxes.forEach(item => {
    grid.appendChild(createItemCard(item, 'box'));
  });
}

// Generic card creation
function createItemCard(item, type) {
  const colDiv = document.createElement('div');
  colDiv.className = 'col-lg-3 col-md-6';
  colDiv.innerHTML = `
    <div class="card bouquet-card h-100 border-0 shadow-sm">
      <div class="position-relative overflow-hidden" style="height: 250px;">
        <img 
          src="${item.image}" 
          class="card-img-top w-100 h-100"
          style="object-fit: cover;"
          alt="${item.name}"
        />
        <div class="position-absolute top-0 end-0 m-3">
          <span class="badge bg-muted-gold text-white px-3 py-2 rounded-pill">
            ${item.shape}
          </span>
        </div>
      </div>
      <div class="card-body d-flex flex-column p-4">
        <h5 class="card-title playfair fw-bold text-dark-brown mb-2">${item.name}</h5>
        <p class="card-text text-muted flex-grow-1 mb-3">${item.description}</p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="fs-4 fw-bold text-dark-brown">$${item.price.toFixed(2)}</span>
          <button class="btn btn-primary-custom btn-sm px-4" onclick="addToCartFromSection(${item.id}, '${type}')">
            <i class="fas fa-plus me-2"></i>Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
  return colDiv;
}

// Add to cart from any section
function addToCartFromSection(itemId, itemType) {
  let item;
  if (itemType === 'bouquet') item = bouquets.find(b => b.id === itemId);
  else if (itemType === 'candle') item = candles.find(c => c.id === itemId);
  else if (itemType === 'box') item = boxes.find(b => b.id === itemId);

  if (!item) return;

  const existing = cart.find(i => i.id === itemId && i.type === itemType);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1, type: itemType });
  }

  updateCartCount();
  updateCartDisplay();
  showAddToCartFeedback();
}

// Update cart count
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const badge = document.getElementById('cart-count');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

// Display cart items
function updateCartDisplay() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <h5>Your cart is empty</h5>
        <p>Add some beautiful items to get started!</p>
      </div>`;
    totalEl.textContent = '0.00';
    return;
  }

  container.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="60">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1, '${item.type}')"><i class="fas fa-minus"></i></button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1, '${item.type}')"><i class="fas fa-plus"></i></button>
          <button class="btn btn-sm btn-outline-danger ms-3" onclick="removeFromCart(${item.id}, '${item.type}')"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `;
    container.appendChild(div);
  });

  totalEl.textContent = total.toFixed(2);
}

// Quantity update
function updateQuantity(itemId, change, itemType) {
  const item = cart.find(i => i.id === itemId && i.type === itemType);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(itemId, itemType);
  } else {
    updateCartCount();
    updateCartDisplay();
  }
}

// Remove item from cart
function removeFromCart(itemId, itemType) {
  cart = cart.filter(i => !(i.id === itemId && i.type === itemType));
  updateCartCount();
  updateCartDisplay();
}

// Open cart modal
function toggleCart() {
  updateCartDisplay();
  const modal = new bootstrap.Modal(document.getElementById('cartModal'));
  modal.show();
}

// WhatsApp checkout
function openWhatsAppCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let message = "Hello! I'd like to place an order:\n\n";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    message += `${item.name} x${item.quantity} - $${itemTotal.toFixed(2)}\n`;
  });

  message += `\nTotal: $${total.toFixed(2)}\nThank you!`;

  const whatsappNumber = "201066509696"; // Replace with your number
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// Scroll to menu
function scrollToMenu() {
  document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
}

// Show feedback when adding to cart
function showAddToCartFeedback() {
  const el = document.createElement('div');
  el.style.cssText = `
    position: fixed; top: 20px; right: 20px; z-index: 9999;
    background: linear-gradient(45deg, #7f5539, #b08968); color: white; 
    padding: 15px 25px; border-radius: 50px; font-weight: 500;
    transition: opacity 0.3s, transform 0.3s; opacity: 0; transform: translateY(-20px);
  `;
  el.innerHTML = '<i class="fas fa-check me-2"></i>Added to cart!';
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 100);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateY(-20px)'; }, 2000);
  setTimeout(() => { document.body.removeChild(el); }, 2300);
}
