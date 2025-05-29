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
  }
];

// Cart functionality
let cart = [];

document.addEventListener('DOMContentLoaded', function () {
  loadBouquets();
  updateCartCount();
});

function loadBouquets() {
  const bouquetGrid = document.getElementById('bouquet-grid');
  bouquets.forEach(bouquet => {
    const bouquetCard = createBouquetCard(bouquet);
    bouquetGrid.appendChild(bouquetCard);
  });
}

function createBouquetCard(bouquet) {
  const colDiv = document.createElement('div');
  colDiv.className = 'col-lg-3 col-md-6';

  colDiv.innerHTML = `
    <div class="card bouquet-card h-100 border-0 shadow-sm">
      <div class="position-relative overflow-hidden" style="height: 250px;">
        <img 
          src="${bouquet.image}" 
          class="card-img-top w-100 h-100"
          style="object-fit: cover;"
          alt="${bouquet.name}"
        />
        <div class="position-absolute top-0 end-0 m-3">
          <span class="badge bg-muted-gold text-white px-3 py-2 rounded-pill">
            ${bouquet.shape}
          </span>
        </div>
      </div>
      <div class="card-body d-flex flex-column p-4">
        <h5 class="card-title playfair fw-bold text-dark-brown mb-2">
          ${bouquet.name}
        </h5>
        <p class="card-text text-muted flex-grow-1 mb-3">
          ${bouquet.description}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="fs-4 fw-bold text-dark-brown">
            $${bouquet.price.toFixed(2)}
          </span>
          <button 
            class="btn btn-primary-custom btn-sm px-4"
            onclick="addToCart(${bouquet.id})"
          >
            <i class="fas fa-plus me-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
  return colDiv;
}

function addToCart(bouquetId) {
  const bouquet = bouquets.find(b => b.id === bouquetId);
  if (!bouquet) return;

  const existingItem = cart.find(item => item.id === bouquetId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...bouquet, quantity: 1 });
  }

  updateCartCount();
  updateCartDisplay();
  showAddToCartFeedback();
}

function removeFromCart(bouquetId) {
  cart = cart.filter(item => item.id !== bouquetId);
  updateCartCount();
  updateCartDisplay();
}

function updateQuantity(bouquetId, change) {
  const item = cart.find(item => item.id === bouquetId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(bouquetId);
  } else {
    updateCartCount();
    updateCartDisplay();
  }
}

function updateCartCount() {
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartBadge = document.getElementById('cart-count');
  cartBadge.textContent = cartCount;
  cartBadge.style.display = cartCount > 0 ? 'flex' : 'none';
}

function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-cart"></i>
        <h5>Your cart is empty</h5>
        <p>Add some beautiful bouquets to get started!</p>
      </div>
    `;
    cartTotal.textContent = '0.00';
    return;
  }

  cartItemsContainer.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
        <div class="quantity-controls">
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
            <i class="fas fa-minus"></i>
          </button>
          <span class="quantity-display">${item.quantity}</span>
          <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
            <i class="fas fa-plus"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger ms-3" onclick="removeFromCart(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </div>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
  updateCartDisplay();
  const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
  cartModal.show();
}

function openWhatsAppCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add some items before checkout.');
    return;
  }

  let orderText = "Hello! I'd like to place an order:\n\n";
  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    orderText += `${item.name} x${item.quantity} - $${itemTotal.toFixed(2)}\n`;
  });

  orderText += `\nTotal: $${total.toFixed(2)}\n\nThank you!`;

  const whatsappNumber = "201094543689"; // <-- Replace with your number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderText)}`;

  window.open(whatsappUrl, '_blank');
}

function scrollToMenu() {
  document.getElementById('menu-section').scrollIntoView({ behavior: 'smooth' });
}

function showAddToCartFeedback() {
  const feedback = document.createElement('div');
  feedback.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(45deg, #7f5539, #b08968);
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
    z-index: 9999;
    font-weight: 500;
    box-shadow: 0 10px 20px rgba(127, 85, 57, 0.3);
    transition: all 0.3s ease;
    transform: translateY(-20px);
    opacity: 0;
  `;
  feedback.innerHTML = '<i class="fas fa-check me-2"></i>Added to cart!';

  document.body.appendChild(feedback);

  setTimeout(() => {
    feedback.style.transform = 'translateY(0)';
    feedback.style.opacity = '1';
  }, 100);

  setTimeout(() => {
    feedback.style.transform = 'translateY(-20px)';
    feedback.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(feedback);
    }, 300);
  }, 2000);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
