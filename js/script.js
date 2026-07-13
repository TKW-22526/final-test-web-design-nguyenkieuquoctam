/* =========================================================
   K7 MOTO — script.js
   Dữ liệu sản phẩm + toàn bộ logic JS thuần cho website
   ========================================================= */

/* Tự nhận biết trang đang chạy ở thư mục gốc hay trong /html/
   để tính đúng đường dẫn ảnh & link chi tiết. */
const IN_HTML_FOLDER = window.location.pathname.includes("/html/");
const IMG_BASE = IN_HTML_FOLDER ? "../img/thesis/" : "img/thesis/";
const DETAIL_BASE = IN_HTML_FOLDER ? "chi-tiet.html" : "html/chi-tiet.html";

/* ---------------------------------------------------------
   1. BẢNG MÀU DÙNG CHUNG (mỗi sản phẩm có đủ 4 màu)
   --------------------------------------------------------- */
const COLOR_LIST = [
  { code: "den",   name: "Đen",         hex: "#111111" },
  { code: "trang", name: "Trắng",       hex: "#f5f5f0" },
  { code: "do",    name: "Đỏ",          hex: "#e10600" },
  { code: "xanh",  name: "Xanh dương",  hex: "#1e6fd9" }
];

function colorImage(slug, code) {
  return `${IMG_BASE}${slug}-${code}.svg`;
}

function buildColors(slug) {
  return COLOR_LIST.map((c) => ({ ...c, image: colorImage(slug, c.code) }));
}

/* ---------------------------------------------------------
   2. DỮ LIỆU SẢN PHẨM (12 mẫu xe côn tay & sportbike 150–155cc)
   --------------------------------------------------------- */
const products = [
  {
    id: "winner-x-150", brand: "Honda", name: "Honda Winner X 150", category: "naked",
    price: 46990000, cc: 150, topSpeed: 118, weight: 116, fuelTank: 4.5,
    transmission: "6 số côn tay", origin: "Lắp ráp trong nước", warranty: "24 tháng",
    description: "Winner X 150 là mẫu xe côn tay underbone thuần Việt, khung sườn cứng vững, hệ thống PGM-FI cho khả năng tăng tốc nhanh trong phố.",
    linkProduct: "https://www.honda.com.vn", colors: buildColors("winner-x-150")
  },
  {
    id: "exciter-155-vva", brand: "Yamaha", name: "Yamaha Exciter 155 VVA", category: "naked",
    price: 50990000, cc: 155, topSpeed: 122, weight: 118, fuelTank: 4.2,
    transmission: "6 số côn tay", origin: "Lắp ráp trong nước", warranty: "24 tháng",
    description: "Exciter 155 VVA sở hữu công nghệ van biến thiên VVA giúp tối ưu công suất ở cả vòng tua thấp lẫn cao, đồng hồ full LCD.",
    linkProduct: "https://yamaha-motor.com.vn", colors: buildColors("exciter-155-vva")
  },
  {
    id: "raider-r150-fi", brand: "Suzuki", name: "Suzuki Raider R150 Fi", category: "naked",
    price: 54990000, cc: 150, topSpeed: 120, weight: 115, fuelTank: 4.0,
    transmission: "6 số côn tay", origin: "Nhập khẩu nguyên chiếc", warranty: "24 tháng",
    description: "Raider R150 Fi nổi bật với thiết kế góc cạnh đậm chất đường đua, khung nhôm nhẹ và hệ thống phun xăng điện tử tiết kiệm nhiên liệu.",
    linkProduct: "https://suzuki.com.vn", colors: buildColors("raider-r150-fi")
  },
  {
    id: "cbr150r", brand: "Honda", name: "Honda CBR150R", category: "fullfairing",
    price: 93990000, cc: 150, topSpeed: 131, weight: 137, fuelTank: 12,
    transmission: "6 số côn tay", origin: "Nhập khẩu Thái Lan", warranty: "24 tháng",
    description: "CBR150R full fairing chuẩn sportbike với khung Diamond, phuộc upside-down, phanh ABS 2 kênh, tư thế lái đua thể thao.",
    linkProduct: "https://www.honda.com.vn", colors: buildColors("cbr150r")
  },
  {
    id: "mt-15", brand: "Yamaha", name: "Yamaha MT-15", category: "naked",
    price: 79990000, cc: 155, topSpeed: 130, weight: 131, fuelTank: 10,
    transmission: "6 số côn tay", origin: "Nhập khẩu Indonesia", warranty: "24 tháng",
    description: "MT-15 mang ngôn ngữ thiết kế 'Dark Side of Japan', động cơ VVA 155cc mạnh mẽ, khung Deltabox chắc chắn khi vào cua tốc độ cao.",
    linkProduct: "https://yamaha-motor.com.vn", colors: buildColors("mt-15")
  },
  {
    id: "gsx-r150", brand: "Suzuki", name: "Suzuki GSX-R150", category: "fullfairing",
    price: 85990000, cc: 150, topSpeed: 128, weight: 134, fuelTank: 11,
    transmission: "6 số côn tay", origin: "Nhập khẩu Indonesia", warranty: "24 tháng",
    description: "GSX-R150 kế thừa DNA từ dòng superbike GSX-R huyền thoại, full fairing khí động học, phanh ABS, trải nghiệm sportbike đích thực.",
    linkProduct: "https://suzuki.com.vn", colors: buildColors("gsx-r150")
  },
  {
    id: "sonic-150r", brand: "Honda", name: "Honda Sonic 150R", category: "naked",
    price: 58990000, cc: 150, topSpeed: 121, weight: 117, fuelTank: 4.1,
    transmission: "6 số côn tay", origin: "Nhập khẩu Thái Lan", warranty: "24 tháng",
    description: "Sonic 150R thiết kế thể thao với đèn LED định vị đặc trưng, khung sườn kim cương và động cơ DOHC bốc trong tầm vòng tua cao.",
    linkProduct: "https://www.honda.com.vn", colors: buildColors("sonic-150r")
  },
  {
    id: "yzf-r15", brand: "Yamaha", name: "Yamaha YZF-R15", category: "fullfairing",
    price: 89990000, cc: 155, topSpeed: 133, weight: 142, fuelTank: 11,
    transmission: "6 số côn tay", origin: "Nhập khẩu Indonesia", warranty: "24 tháng",
    description: "YZF-R15 sở hữu khung Deltabox, phuộc upside-down và ngoại hình thừa hưởng từ dòng R-series đua đường trường của Yamaha.",
    linkProduct: "https://yamaha-motor.com.vn", colors: buildColors("yzf-r15")
  },
  {
    id: "satria-f150", brand: "Suzuki", name: "Suzuki Satria F150", category: "naked",
    price: 52990000, cc: 150, topSpeed: 119, weight: 114, fuelTank: 4.0,
    transmission: "6 số côn tay", origin: "Nhập khẩu Indonesia", warranty: "24 tháng",
    description: "Satria F150 mang phong cách hyper underbone, tem xe nổi bật, phù hợp người thích cá tính và khả năng luồn lách linh hoạt.",
    linkProduct: "https://suzuki.com.vn", colors: buildColors("satria-f150")
  },
  {
    id: "ninja-rr-mono", brand: "Kawasaki", name: "Kawasaki Ninja RR Mono 150", category: "fullfairing",
    price: 76990000, cc: 150, topSpeed: 124, weight: 129, fuelTank: 4.5,
    transmission: "6 số côn tay", origin: "Nhập khẩu Indonesia", warranty: "24 tháng",
    description: "Ninja RR Mono 150 mang thiết kế full fairing đậm chất Ninja, khung trellis đặc trưng Kawasaki, phanh trước đĩa đơn cỡ lớn.",
    linkProduct: "https://kawasaki.com.vn", colors: buildColors("ninja-rr-mono")
  },
  {
    id: "supra-gtr-150", brand: "Honda", name: "Honda Supra GTR 150", category: "naked",
    price: 48990000, cc: 150, topSpeed: 117, weight: 113, fuelTank: 4.0,
    transmission: "6 số côn tay", origin: "Nhập khẩu Indonesia", warranty: "24 tháng",
    description: "Supra GTR 150 kiểu dáng underbone sport gọn gàng, tiết kiệm nhiên liệu, phù hợp di chuyển hàng ngày trong đô thị.",
    linkProduct: "https://www.honda.com.vn", colors: buildColors("supra-gtr-150")
  },
  {
    id: "mx-king-150", brand: "Yamaha", name: "Yamaha Jupiter MX King 150", category: "naked",
    price: 51990000, cc: 150, topSpeed: 118, weight: 116, fuelTank: 4.2,
    transmission: "6 số côn tay", origin: "Nhập khẩu Indonesia", warranty: "24 tháng",
    description: "MX King 150 nổi bật với đèn pha LED hình chữ V và khả năng vận hành linh hoạt, phù hợp cả đi phố lẫn phượt ngắn ngày.",
    linkProduct: "https://yamaha-motor.com.vn", colors: buildColors("mx-king-150")
  }
];

/* ---------------------------------------------------------
   3. TIỆN ÍCH DÙNG CHUNG
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

function addToCart(productId, colorCode) {
  const cart = getCart();
  const key = productId + "|" + (colorCode || "den");
  const existing = cart.find((it) => it.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ key, id: productId, color: colorCode || "den", qty: 1 });
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
   4. RENDER DANH SÁCH SẢN PHẨM (dùng cho index.html & san-pham.html)
   preferredColor: nếu truyền vào, card sẽ hiển thị ảnh theo màu đó
   (dùng cho tính năng "tìm sản phẩm theo màu")
   --------------------------------------------------------- */
function createProductCard(p, preferredColor) {
  const initialColor =
    p.colors.find((c) => c.code === preferredColor) || p.colors[0];

  const swatches = p.colors
    .map(
      (c) => `
      <button type="button"
        class="swatch-dot ${c.code === initialColor.code ? "active" : ""}"
        style="background:${c.hex}"
        title="${c.name}"
        data-product="${p.id}"
        data-color="${c.code}"
        onclick="event.preventDefault(); switchCardColor(this)">
      </button>`
    )
    .join("");

  return `
    <div class="product-card" data-category="${p.category}" data-price="${p.price}">
      <div class="product-image">
        <span class="product-badge">${p.cc}CC</span>
        <img src="${initialColor.image}" alt="${p.name} - ${initialColor.name}" loading="lazy" class="card-img" data-product="${p.id}">
      </div>
      <div class="product-info">
        <span class="product-brand">${p.brand}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-price">${formatPrice(p.price)}</p>
        <p class="product-desc">${p.description}</p>
        <div class="swatch-row">${swatches}</div>
        <div class="product-actions">
          <a href="${DETAIL_BASE}?masp=${p.id}&mau=${initialColor.code}" class="btn btn-outline">Xem chi tiết</a>
          <button class="btn-icon" title="Thêm vào giỏ" onclick="addToCart('${p.id}')">🛒</button>
        </div>
      </div>
    </div>
  `;
}

function switchCardColor(btn) {
  const productId = btn.dataset.product;
  const colorCode = btn.dataset.color;
  const product = products.find((p) => p.id === productId);
  const color = product.colors.find((c) => c.code === colorCode);
  const card = btn.closest(".product-card");

  card.querySelector(".card-img").src = color.image;
  card.querySelectorAll(".swatch-dot").forEach((d) => d.classList.remove("active"));
  btn.classList.add("active");

  const detailLink = card.querySelector(".product-actions a");
  if (detailLink) detailLink.href = `${DETAIL_BASE}?masp=${productId}&mau=${colorCode}`;
}

function renderProductList(list, targetId, preferredColor) {
  const container = document.getElementById(targetId || "product-list");
  if (!container) return;
  if (!list.length) {
    container.innerHTML = `<div class="empty-state">Không tìm thấy sản phẩm phù hợp với bộ lọc / từ khoá hiện tại.</div>`;
    return;
  }
  container.innerHTML = list.map((p) => createProductCard(p, preferredColor)).join("");
}

function loadAllProducts(list, targetId) {
  renderProductList(list || products, targetId);
}

/* ---------------------------------------------------------
   5. BỘ LỌC, TÌM KIẾM THEO TÊN & LỌC THEO MÀU (san-pham.html)
   --------------------------------------------------------- */
function initFilters() {
  const filterBar = document.querySelector(".filter-bar");
  if (!filterBar) return;

  const filterBtns = filterBar.querySelectorAll(".filter-btn");
  const colorBtns = document.querySelectorAll(".color-filter-btn");
  const sortSelect = document.querySelector(".sort-select");
  const searchInput = document.getElementById("search-input");
  const resultCount = document.getElementById("result-count");

  let currentCategory = "all";
  let currentColor = "all";

  function apply() {
    let list = products.filter(
      (p) => currentCategory === "all" || p.category === currentCategory
    );

    // Tìm kiếm theo tên xe / hãng xe
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";
    if (keyword) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(keyword) ||
          p.brand.toLowerCase().includes(keyword)
      );
    }

    // Sắp xếp
    const sortValue = sortSelect ? sortSelect.value : "default";
    if (sortValue === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sortValue === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sortValue === "cc-desc") list = [...list].sort((a, b) => b.cc - a.cc);

    // currentColor === "all" -> mỗi thẻ hiện màu mặc định (đầu tiên)
    // chọn màu cụ thể -> toàn bộ ảnh trong danh sách đổi sang màu đó
    renderProductList(list, "product-list", currentColor === "all" ? null : currentColor);

    if (resultCount) {
      resultCount.textContent = `${list.length} sản phẩm được tìm thấy`;
    }
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      apply();
    });
  });

  colorBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      colorBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentColor = btn.dataset.color;
      apply();
    });
  });

  if (sortSelect) sortSelect.addEventListener("change", apply);
  if (searchInput) searchInput.addEventListener("input", apply);

  apply();
}

/* ---------------------------------------------------------
   6. TRANG CHI TIẾT SẢN PHẨM (chi-tiet.html)
   --------------------------------------------------------- */
function renderProductDetail() {
  const detailRoot = document.getElementById("product-detail");
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("masp");
  const requestedColor = params.get("mau");
  const product = products.find((p) => p.id === productId) || products[0];
  let activeColor =
    product.colors.find((c) => c.code === requestedColor) || product.colors[0];

  document.title = product.name + " | K7 MOTO";

  function renderSwatches() {
    return product.colors
      .map(
        (c) => `
        <button type="button"
          class="color-swatch-lg ${c.code === activeColor.code ? "active" : ""}"
          style="background:${c.hex}"
          data-color="${c.code}"
          title="${c.name}">
        </button>`
      )
      .join("");
  }

  detailRoot.innerHTML = `
    <div class="detail-image">
      <img src="${activeColor.image}" alt="${product.name} - ${activeColor.name}" id="img-product">
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

      <div class="color-picker">
        <span class="color-picker-label">Màu sắc: <strong id="color-name">${activeColor.name}</strong></span>
        <div class="color-swatch-row" id="color-swatch-row">${renderSwatches()}</div>
      </div>

      <div class="detail-actions">
        <button class="btn btn-outline" id="btn-cart">🛒 Thêm vào giỏ hàng</button>
        <button class="btn btn-primary" id="btn-buy">💳 Mua ngay</button>
      </div>
      <a href="${product.linkProduct}" id="link-detail" class="detail-link" target="_blank" rel="noopener">Xem trang hãng chính thức →</a>
    </div>
  `;

  document.getElementById("color-swatch-row").addEventListener("click", (e) => {
    const btn = e.target.closest(".color-swatch-lg");
    if (!btn) return;
    activeColor = product.colors.find((c) => c.code === btn.dataset.color);
    document.getElementById("img-product").src = activeColor.image;
    document.getElementById("color-name").textContent = activeColor.name;
    document
      .querySelectorAll("#color-swatch-row .color-swatch-lg")
      .forEach((s) => s.classList.remove("active"));
    btn.classList.add("active");

    const url = new URL(window.location);
    url.searchParams.set("mau", activeColor.code);
    window.history.replaceState({}, "", url);
  });

  document.getElementById("btn-cart").addEventListener("click", () =>
    addToCart(product.id, activeColor.code)
  );
  document.getElementById("btn-buy").addEventListener("click", () => {
    addToCart(product.id, activeColor.code);
    showToast("Đang chuyển đến trang thanh toán...");
  });

  const relatedRoot = document.getElementById("related-list");
  if (relatedRoot) {
    const related = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 3);
    renderProductList(
      related.length ? related : products.filter((p) => p.id !== product.id).slice(0, 3),
      "related-list"
    );
  }
}

/* ---------------------------------------------------------
   7. FORM LIÊN HỆ (lien-he.html)
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
   8. NAV MOBILE TOGGLE + CART BADGE
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
   9. KHỞI CHẠY
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  loadAllProducts(products.slice(0, 4), "product-list-featured");
  loadAllProducts(products, "product-list");
  initFilters();
  renderProductDetail();
  initContactForm();
});