/* =========================================================
   K7 MOTO — script.js
   Dữ liệu sản phẩm + toàn bộ logic JS thuần cho website
   ========================================================= */

/* ---------------------------------------------------------
   1. DỮ LIỆU SẢN PHẨM (xe côn tay & sportbike 150–155cc)
   --------------------------------------------------------- */
const products = [
  {
    id: "winner-x-150",
    brand: "Honda",
    name: "Honda Winner X 150",
    category: "naked",
    price: 46990000,
    cc: 150,
    topSpeed: 118,
    weight: 116,
    fuelTank: 4.5,
    transmission: "6 số côn tay",
    origin: "Lắp ráp trong nước",
    warranty: "24 tháng",
    image: "../img/thesis/winner-x-150.svg",
    description:
      "Winner X 150 là mẫu xe côn tay underbone thuần Việt, khung sườn cứng vững, hệ thống côn tự động PGM-FI cho khả năng tăng tốc nhanh trong phố. Phù hợp người mới tập côn tay lẫn dân chạy phượt cự ly ngắn.",
    linkProduct: "https://www.honda.com.vn"
  },
  {
    id: "exciter-155-vva",
    brand: "Yamaha",
    name: "Yamaha Exciter 155 VVA",
    category: "naked",
    price: 50990000,
    cc: 155,
    topSpeed: 122,
    weight: 118,
    fuelTank: 4.2,
    transmission: "6 số côn tay",
    origin: "Lắp ráp trong nước",
    warranty: "24 tháng",
    image: "../img/thesis/exciter-155-vva.svg",
    description:
      "Exciter 155 VVA sở hữu công nghệ van biến thiên VVA giúp tối ưu công suất ở cả vòng tua thấp lẫn cao. Thiết kế cơ bắp, đồng hồ full LCD, là lựa chọn hàng đầu phân khúc xe côn tay thể thao.",
    linkProduct: "https://yamaha-motor.com.vn"
  },
  {
    id: "raider-r150-fi",
    brand: "Suzuki",
    name: "Suzuki Raider R150 Fi",
    category: "naked",
    price: 54990000,
    cc: 150,
    topSpeed: 120,
    weight: 115,
    fuelTank: 4.0,
    transmission: "6 số côn tay",
    origin: "Nhập khẩu nguyên chiếc",
    warranty: "24 tháng",
    image: "../img/thesis/raider-r150-fi.svg",
    description:
      "Raider R150 Fi nổi bật với thiết kế góc cạnh đậm chất đường đua, khung nhôm nhẹ và hệ thống phun xăng điện tử tiết kiệm nhiên liệu. Cảm giác lái nhanh nhẹn, phanh đĩa đôi an toàn.",
    linkProduct: "https://suzuki.com.vn"
  },
  {
    id: "cbr150r",
    brand: "Honda",
    name: "Honda CBR150R",
    category: "fullfairing",
    price: 93990000,
    cc: 150,
    topSpeed: 131,
    weight: 137,
    fuelTank: 12,
    transmission: "6 số côn tay",
    origin: "Nhập khẩu Thái Lan",
    warranty: "24 tháng",
    image: "../img/thesis/cbr150r.svg",
    description:
      "CBR150R full fairing chuẩn sportbike với khung Diamond, phuộc upside-down, phanh ABS 2 kênh. Tư thế lái đua thể thao, ngoại hình lấy cảm hứng từ dòng CBR huyền thoại.",
    linkProduct: "https://www.honda.com.vn"
  },
  {
    id: "mt-15",
    brand: "Yamaha",
    name: "Yamaha MT-15",
    category: "naked",
    price: 79990000,
    cc: 155,
    topSpeed: 130,
    weight: 131,
    fuelTank: 10,
    transmission: "6 số côn tay",
    origin: "Nhập khẩu Indonesia",
    warranty: "24 tháng",
    image: "../img/thesis/mt-15.svg",
    description:
      "MT-15 mang ngôn ngữ thiết kế 'Dark Side of Japan' của dòng MT, động cơ VVA 155cc mạnh mẽ, khung Deltabox nổi tiếng về độ chắc chắn khi vào cua tốc độ cao.",
    linkProduct: "https://yamaha-motor.com.vn"
  },
  {
    id: "gsx-r150",
    brand: "Suzuki",
    name: "Suzuki GSX-R150",
    category: "fullfairing",
    price: 85990000,
    cc: 150,
    topSpeed: 128,
    weight: 134,
    fuelTank: 11,
    transmission: "6 số côn tay",
    origin: "Nhập khẩu Indonesia",
    warranty: "24 tháng",
    image: "../img/thesis/gsx-r150.svg",
    description:
      "GSX-R150 kế thừa DNA từ dòng superbike GSX-R huyền thoại, full fairing khí động học, phanh ABS, phù hợp người yêu thích trải nghiệm sportbike đích thực trong tầm giá phổ thông.",
    linkProduct: "https://suzuki.com.vn"
  }
];

/* ---------------------------------------------------------
   2. TIỆN ÍCH DÙNG CHUNG
   --------------------------------------------------------- */
function formatPrice(vnd) {
  return vnd.toLocaleString("vi-VN") + " đ";
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("k7moto_cart")) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("k7moto_cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId) {
  const cart = getCart();
  const existing = cart.find((it) => it.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: productId, qty: 1 });
  }
  saveCart(cart);
  showToast("Đã thêm vào giỏ hàng");
}

function updateCartBadge() {
  const badge = document.querySelector(".cart-count");
  if (!badge) return;
  const total = getCart().reduce((sum, it) => sum + it.qty, 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? "flex" : "none";
}

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

/* ---------------------------------------------------------
   3. RENDER DANH SÁCH SẢN PHẨM (dùng cho index.html & san-pham.html)
   --------------------------------------------------------- */
function createProductCard(p) {
  const isFullFairing = p.category === "fullfairing";
  return `
    <div class="product-card" data-category="${p.category}" data-price="${p.price}">
      <div class="product-image">
        <span class="product-badge">${p.cc}CC</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">${formatPrice(p.price)}</p>
        <p class="product-desc">${p.description}</p>
        <div class="product-actions">
          <a href="${
            isFullFairing || true
              ? "chi-tiet.html?masp=" + p.id
              : "#"
          }" class="btn btn-outline">Xem chi tiết</a>
          <button class="btn-icon" title="Thêm vào giỏ" onclick="addToCart('${p.id}')">🛒</button>
        </div>
      </div>
    </div>
  `;
}

function renderProductList(list, targetId) {
  const container = document.getElementById(targetId || "product-list");
  if (!container) return;
  if (!list.length) {
    container.innerHTML = `<div class="empty-state">Không tìm thấy sản phẩm phù hợp bộ lọc hiện tại.</div>`;
    return;
  }
  container.innerHTML = list.map(createProductCard).join("");
}

function loadAllProducts(list, targetId) {
  renderProductList(list || products, targetId);
}

/* ---------------------------------------------------------
   4. BỘ LỌC & SẮP XẾP (san-pham.html)
   --------------------------------------------------------- */
function initFilters() {
  const filterBar = document.querySelector(".filter-bar");
  if (!filterBar) return;

  const filterBtns = filterBar.querySelectorAll(".filter-btn");
  const sortSelect = document.querySelector(".sort-select");
  let currentCategory = "all";

  function apply() {
    let list = products.filter(
      (p) => currentCategory === "all" || p.category === currentCategory
    );
    const sortValue = sortSelect ? sortSelect.value : "default";
    if (sortValue === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortValue === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortValue === "cc-desc") list = [...list].sort((a, b) => b.cc - a.cc);
    renderProductList(list);
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      apply();
    });
  });

  if (sortSelect) sortSelect.addEventListener("change", apply);

  apply();
}

/* ---------------------------------------------------------
   5. TRANG CHI TIẾT SẢN PHẨM (chi-tiet.html)
   --------------------------------------------------------- */
function renderProductDetail() {
  const detailRoot = document.getElementById("product-detail");
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("masp");
  const product = products.find((p) => p.id === productId) || products[0];

  document.title = product.name + " | K7 MOTO";

  detailRoot.innerHTML = `
    <div class="detail-image">
      <img src="${product.image}" alt="${product.name}" id="img-product">
    </div>
    <div class="detail-body">
      <span class="detail-brand">${product.brand} · ${product.origin}</span>
      <h1 class="detail-name" id="name">${product.name}</h1>
      <p class="detail-price" id="price">${formatPrice(product.price)}</p>
      <p class="detail-desc" id="desc">${product.description}</p>

      <table class="spec-table">
        <tr><td>Dung tích xy-lanh</td><td>${product.cc} cc</td></tr>
        <tr><td>Tốc độ tối đa</td><td>${product.topSpeed} km/h</td></tr>
        <tr><td>Trọng lượng</td><td>${product.weight} kg</td></tr>
        <tr><td>Dung tích bình xăng</td><td>${product.fuelTank} lít</td></tr>
        <tr><td>Hộp số</td><td>${product.transmission}</td></tr>
        <tr><td>Bảo hành</td><td>${product.warranty}</td></tr>
      </table>

      <div class="detail-actions">
        <button class="btn btn-outline" id="btn-cart">🛒 Thêm vào giỏ hàng</button>
        <button class="btn btn-primary" id="btn-buy">💳 Mua ngay</button>
      </div>
      <a href="${product.linkProduct}" id="link-detail" class="detail-link" target="_blank" rel="noopener">Xem trang hãng chính thức →</a>
    </div>
  `;

  document.getElementById("btn-cart").addEventListener("click", () => addToCart(product.id));
  document.getElementById("btn-buy").addEventListener("click", () => {
    addToCart(product.id);
    showToast("Đang chuyển đến trang thanh toán...");
  });

  // Sản phẩm liên quan: cùng category, khác id
  const relatedRoot = document.getElementById("related-list");
  if (relatedRoot) {
    const related = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
    renderProductList(related.length ? related : products.filter(p => p.id !== product.id).slice(0,3), "related-list");
  }
}

/* ---------------------------------------------------------
   6. FORM LIÊN HỆ (lien-he.html)
   --------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const successBox = document.querySelector(".form-success");

  function setError(group, message) {
    group.classList.add("invalid");
    const err = group.querySelector(".field-error");
    if (err) err.textContent = message;
  }

  function clearError(group) {
    group.classList.remove("invalid");
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const nameGroup = document.getElementById("group-name");
    const phoneGroup = document.getElementById("group-phone");
    const emailGroup = document.getElementById("group-email");
    const messageGroup = document.getElementById("group-message");

    const nameVal = form.name.value.trim();
    const phoneVal = form.phone.value.trim();
    const emailVal = form.email.value.trim();
    const messageVal = form.message.value.trim();

    [nameGroup, phoneGroup, emailGroup, messageGroup].forEach(clearError);

    if (nameVal.length < 2) {
      setError(nameGroup, "Vui lòng nhập họ tên đầy đủ.");
      valid = false;
    }
    if (!/^0\d{9}$/.test(phoneVal)) {
      setError(phoneGroup, "Số điện thoại không hợp lệ (VD: 0912345678).");
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      setError(emailGroup, "Địa chỉ email không hợp lệ.");
      valid = false;
    }
    if (messageVal.length < 10) {
      setError(messageGroup, "Nội dung cần ít nhất 10 ký tự.");
      valid = false;
    }

    if (!valid) return;

    form.reset();
    if (successBox) {
      successBox.classList.add("show");
      successBox.textContent = `Cảm ơn ${nameVal}, K7 MOTO đã nhận được yêu cầu và sẽ liên hệ lại trong vòng 24 giờ.`;
      successBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

/* ---------------------------------------------------------
   7. NAV MOBILE TOGGLE + ACTIVE LINK
   --------------------------------------------------------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }
  updateCartBadge();
}

/* ---------------------------------------------------------
   8. KHỞI CHẠY
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  loadAllProducts(products.slice(0, 4), "product-list-featured");
  loadAllProducts(products, "product-list");
  initFilters();
  renderProductDetail();
  initContactForm();
});