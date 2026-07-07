/* ==========================================================================
   1. DATA SOURCE (Danh sách dữ liệu xe côn tay & Phân khối lớn)
   ========================================================================== */
const SẢN_PHẨM_DB = [
    {
        maXe: "EX155-01",
        ten: "Yamaha Exciter 155 VVA - Phiên bản Cao cấp",
        hang: "Yamaha",
        phanKhoi: 155,
        gia: 48000000,
        anh: "assets/img/thesis/exciter155.jpg",
        moTa: "Mẫu xe côn tay mang DNA thể thao đỉnh cao của Yamaha với công nghệ van biến thiên VVA vượt trội.",
        thongSo: "Hệ thống cơ cấu: VVA; Công suất tối đa: 17.7 mã lực; Hệ thống phanh: Đĩa đơn.",
        tinhTrang: "Còn hàng",
        mauSac: "Xanh GP, Đen Nhám, Đỏ Bạc",
        noiBat: true
    },
    {
        maXe: "WIN-01",
        ten: "Honda Winner X v4 - Đặc biệt",
        hang: "Honda",
        phanKhoi: 150,
        gia: 46500000,
        anh: "assets/img/thesis/winnerx.jpg",
        moTa: "Thiết kế góc cạnh mạnh mẽ đậm chất khí động học, trang bị hệ thống phanh ABS an toàn tuyệt đối.",
        thongSo: "Động cơ: DOHC 150cc; Công suất: 15.4 mã lực; Hộp số: 6 cấp.",
        tinhTrang: "Còn hàng",
        mauSac: "Đỏ Đen, Bạc Đen, Đen Vàng",
        noiBat: true
    },
    {
        maXe: "R15-01",
        ten: "Yamaha YZF-R15 V4",
        hang: "Yamaha",
        phanKhoi: 155,
        gia: 78000000,
        anh: "assets/img/thesis/r15.jpg",
        moTa: "Kiểu dáng thuần Sportbike phân khúc nhỏ mạnh mẽ nhất thế hệ mới, thừa hưởng thiết kế từ siêu xe R1.",
        thongSo: "Động cơ: SOHC VVA; Phuộc: Upside Down KYB; Kiểm soát lực kéo: TCS.",
        tinhTrang: "Còn hàng",
        mauSac: "Xanh Racing, Đen Bóng",
        noiBat: true
    },
    {
        maXe: "CBR-01",
        ten: "Honda CBR150R - Thể thao",
        hang: "Honda",
        phanKhoi: 150,
        gia: 72000000,
        anh: "assets/img/thesis/cbr150r.jpg",
        moTa: "Mẫu Sportbike đô thị linh hoạt, tư thế lái thoải mái cùng hệ thống ly hợp chống trượt Slipper Clutch.",
        thongSo: "Động cơ: DOHC 4 van; Trọng lượng: 139kg; Phanh: ABS 2 kênh.",
        tinhTrang: "Còn hàng",
        mauSac: "Đỏ Khói, Đen Tuyền",
        noiBat: false
    },
    {
        maXe: "SAT-01",
        ten: "Suzuki Satria F150 Fi",
        hang: "Suzuki",
        phanKhoi: 150,
        gia: 53500000,
        anh: "assets/img/thesis/satria.jpg",
        moTa: "Ông vua phân khúc Hyper Underbone với tỷ số công suất trên trọng lượng tối ưu nhất.",
        thongSo: "Khối động cơ: Twincam DOHC; Công suất: 18.2 mã lực; Trọng lượng siêu nhẹ: 109kg.",
        tinhTrang: "Còn hàng",
        mauSac: "Xanh Xi măng, Đen Đỏ",
        noiBat: true
    },
    {
        maXe: "RAI-01",
        ten: "Suzuki Raider R150",
        hang: "Suzuki",
        phanKhoi: 150,
        gia: 51000000,
        anh: "assets/img/thesis/raider.jpg",
        moTa: "Kiểu dáng thể thao độc lạ cá tính, bứt tốc cực mạnh trong cự ly ngắn.",
        thongSo: "Động cơ: 4 thì, DOHC; Làm mát: Dung dịch; Công suất: 18.5 mã lực.",
        tinhTrang: "Hết hàng",
        mauSac: "Đỏ Đen, Xanh Đen",
        noiBat: false
    },
    {
        maXe: "CB650-01",
        ten: "Honda CB650R E-Clutch (PKL)",
        hang: "Honda",
        phanKhoi: 650,
        gia: 246000000,
        anh: "assets/img/thesis/cb650r.jpg",
        moTa: "Siêu phẩm Neo Sports Café trang bị công nghệ ly hợp điện tử E-Clutch tân tiến thế giới.",
        thongSo: "Động cơ: 4 xy-lanh thẳng hàng; Công suất: 83 mã lực; Mô-men xoắn: 63 Nm.",
        tinhTrang: "Còn hàng",
        mauSac: "Xám Đen, Đỏ Nhám",
        noiBat: true
    },
    {
        maXe: "MT03-01",
        ten: "Yamaha MT-03 Thế hệ mới (PKL)",
        hang: "Yamaha",
        phanKhoi: 321,
        gia: 129000000,
        anh: "assets/img/thesis/mt03.jpg",
        moTa: "Kẻ săn đêm phân khúc Hyper Naked, diện mạo hầm hố, mô-men xoắn cực đại ở vòng tua sớm.",
        thongSo: "Động cơ: 2 xy-lanh, DOHC; Công suất: 42 mã lực; Chiều cao yên: 780mm.",
        tinhTrang: "Còn hàng",
        mauSac: "Xám Xanh Cyan, Đen Tuyền",
        noiBat: false
    },
    {
        maXe: "GSX-01",
        ten: "Suzuki GSX-R150",
        hang: "Suzuki",
        phanKhoi: 150,
        gia: 55000000,
        anh: "assets/img/thesis/gsxr150.jpg",
        moTa: "Dòng xe thuần chủng Sport phân khối 150cc với tính năng khí động học ưu việt.",
        thongSo: "Động cơ: DOHC 150cc; Phun xăng điện tử Fi; Hệ thống khóa thông minh Smartkey.",
        tinhTrang: "Hết hàng",
        mauSac: "Xanh Moto GP",
        noiBat: false
    },
    {
        maXe: "XSR-01",
        ten: "Yamaha XSR 155 Neo Retro",
        hang: "Yamaha",
        phanKhoi: 155,
        gia: 77000000,
        anh: "assets/img/thesis/xsr155.jpg",
        moTa: "Sự kết hợp hoàn hảo giữa phong cách cổ điển hoài niệm và hiệu năng vận hành hiện đại.",
        thongSo: "Động cơ: 155cc kèm VVA; Ly hợp: Chống trượt A&S; Bình xăng: 10 Lít.",
        tinhTrang: "Còn hàng",
        mauSac: "Bạc Nhám, Đen Nhám, Xanh Rêu",
        noiBat: true
    },
    {
        maXe: "KAWA-01",
        ten: "Kawasaki Ninja ZX-25R (PKL)",
        hang: "Kawasaki",
        phanKhoi: 250,
        gia: 198000000,
        anh: "assets/img/thesis/zx25r.jpg",
        moTa: "Mẫu xe duy nhất phân khúc 250cc sở hữu khối động cơ 4 xy-lanh gầm rú xé gió.",
        thongSo: "Động cơ: 4 xy-lanh thẳng hàng; Vòng tua cực đại: 17.000 vòng/phút; Quickshifter 2 chiều.",
        tinhTrang: "Còn hàng",
        mauSac: "Xanh KRT, Đỏ Xám",
        noiBat: true
    },
    {
        maXe: "Z900-01",
        ten: "Kawasaki Z900 ABS (PKL)",
        hang: "Kawasaki",
        phanKhoi: 948,
        gia: 320000000,
        anh: "assets/img/thesis/z900.jpg",
        moTa: "Quái thú Naked-bike mang ngôn ngữ thiết kế Sugomi dữ tợn, công suất hủy diệt đường nhựa.",
        thongSo: "Động cơ: 948cc; Công suất: 125 mã lực; Kiểm soát lực kéo KTRC đa cấp độ.",
        tinhTrang: "Còn hàng",
        mauSac: "Xanh Đen, Đỏ Khung Trắng",
        noiBat: false
    },
    {
        maXe: "EX150-01",
        ten: "Yamaha Exciter 150 Phiên bản Giới hạn",
        hang: "Yamaha",
        phanKhoi: 150,
        gia: 44500000,
        anh: "assets/img/thesis/exciter150.jpg",
        moTa: "Huyền thoại đường phố Việt Nam, kiểu dáng nhỏ gọn năng động linh hoạt.",
        thongSo: "Động cơ: 150cc SOHC; Đèn chiếu sáng: Full LED; Lốp sau bản lớn: 120/70.",
        tinhTrang: "Còn hàng",
        mauSac: "Xám Xi Măng, Matte Green",
        noiBat: false
    },
    {
        maXe: "CB150R-01",
        ten: "Honda CB150R Exmotion",
        hang: "Honda",
        phanKhoi: 150,
        gia: 105000000,
        anh: "assets/img/thesis/cb150r.jpg",
        moTa: "Naked cổ điển cao cấp nhập khẩu nguyên chiếc, độ hoàn thiện tinh xảo từ Honda.",
        thongSo: "Phuộc trước: Hành trình ngược Showa 41mm; Phanh: Heo dầu Nissin Radial Mount.",
        tinhTrang: "Còn hàng",
        mauSac: "Đen Đỏ, Bạc Tối",
        noiBat: false
    },
    {
        maXe: "DUKE-01",
        ten: "KTM Duke 390 (PKL)",
        hang: "KTM",
        phanKhoi: 373,
        gia: 185000000,
        anh: "assets/img/thesis/duke390.jpg",
        moTa: "Chiến mã xi-lanh đơn bốc nhất phân khúc, lực kéo mạnh bạo ngay từ ga đầu.",
        thongSo: "Động cơ: Xi-lanh đơn 373cc; Màn hình: TFT màu kết nối Bluetooth; Trọng lượng khô: 149kg.",
        tinhTrang: "Còn hàng",
        mauSac: "Cam Trắng, Cam Đen",
        noiBat: false
    }
];

/* ==========================================================================
   2. APP INITIALIZATION & CORE FUNCTIONS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initCommonFeatures();       // Khởi chạy các chức năng dùng chung (Menu, Scroll, Top)
    initIndexPage();            // Khởi chạy logic Trang Chủ
    initProductPage();          // Khởi chạy logic Trang Sản Phẩm
    initDetailPage();           // Khởi chạy logic Trang Chi Tiết
    initContactPage();          // Khởi chạy logic Trang Liên Hệ
});

/**
 * Xử lý các hiệu ứng chung: Sticky Menu, Mobile Navbar, Back to Top
 */
function initCommonFeatures() {
    const header = document.querySelector(".main-header");
    const backToTopBtn = document.getElementById("backToTop");
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    // 1. Hiệu ứng cuộn trang (Sticky Header & Back To Top)
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        if (window.scrollY > 400) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    // 2. Nút bấm cuộn lên đầu trang
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 3. Responsive Mobile Menu
    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            mainNav.classList.toggle("active");
            const icon = menuToggle.querySelector("i");
            if (mainNav.classList.contains("active")) {
                icon.className = "fas fa-times"; // Đổi sang icon Đóng
            } else {
                icon.className = "fas fa-bars";  // Đổi sang icon Menu
            }
        });
    }
}

/**
 * Tạo cấu trúc mã HTML cho một Card sản phẩm dựa trên Object dữ liệu xe
 */
function createProductCardHTML(xe) {
    // Định dạng hiển thị giá tiền sang tiền tệ VNĐ
    const giaVND = xe.gia.toLocaleString('vi-VN') + " đ";
    
    return `
        <div class="product-card">
            ${xe.tinhTrang === "Hết hàng" ? `<div class="product-badge" style="background:#555;">HẾT HÀNG</div>` : xe.noiBat ? `<div class="product-badge">HOT</div>` : ''}
            <div class="product-img-box">
                <img src="${xe.anh}" alt="${xe.ten}" onerror="this.src='https://placehold.co/600x400/111/fff?text=${xe.hang}+Bike'">
            </div>
            <div class="product-info">
                <span class="product-brand">${xe.hang}</span>
                <h3 class="product-name">${xe.ten}</h3>
                <div class="product-meta">
                    <span><i class="fas fa-motorcycle"></i> ${xe.phanKhoi}cc</span>
                    <span><i class="fas fa-palette"></i> ${xe.tinhTrang}</span>
                </div>
                <div class="product-price">${giaVND}</div>
                <button class="btn btn-primary" style="width:100%;" onclick="navigateToDetail('${xe.maXe}')">
                    XEM CHI TIẾT
                </button>
            </div>
        </div>
    `;
}

/**
 * Hàm điều hướng sang trang chi tiết bằng cách đính mã sản phẩm lên URL
 */
function navigateToDetail(maXe) {
    // Xác định tiền tố đường dẫn tùy thuộc vào vị trí file hiện tại
    const isSubPage = window.location.pathname.includes('/html/');
    const targetPath = isSubPage ? 'chi-tiet.html' : 'assets/html/chi-tiet.html';
    window.location.href = `${targetPath}?ma=${maXe}`;
}

/* ==========================================================================
   3. PAGE LOGIC IMPLEMENTATION
   ========================================================================== */

/**
 * Xử lý hiển thị trên Trang Chủ (index.html)
 */
function initIndexPage() {
    const grid = document.getElementById("featured-products-grid");
    if (!grid) return; // Nếu không nằm ở index.html thì bỏ qua

    // Lọc ra các sản phẩm cấu hình nổi bật (noiBat = true)
    const danhSachNoiBat = SẢN_PHẨM_DB.filter(item => item.noiBat);
    
    grid.innerHTML = ""; // Xóa dòng chữ Loading
    danhSachNoiBat.forEach(xe => {
        grid.innerHTML += createProductCardHTML(xe);
    });
}

/**
 * Xử lý Tìm kiếm - Lọc - Sắp xếp trên Trang Sản Phẩm (san-pham.html)
 */
function initProductPage() {
    const grid = document.getElementById("all-products-grid");
    if (!grid) return; // Kiểm tra nếu không thuộc trang danh mục sản phẩm

    // Các phần tử bộ lọc trên DOM
    const inputSearch = document.getElementById("searchKey");
    const selectHang = document.getElementById("filterHang");
    const selectPhanKhoi = document.getElementById("filterCC");
    const selectGia = document.getElementById("filterGia");
    const selectSort = document.getElementById("sortPrice");

    // Hàm thực hiện lọc và render lại danh sách
    function filterAndRender() {
        let listResult = [...SẢN_PHẨM_DB];

        // 1. Lọc theo từ khóa tìm kiếm (Tên hoặc Mã xe)
        if (inputSearch && inputSearch.value.trim() !== "") {
            const key = inputSearch.value.toLowerCase().trim();
            listResult = listResult.filter(xe => xe.ten.toLowerCase().includes(key) || xe.maXe.toLowerCase().includes(key));
        }

        // 2. Lọc theo hãng sản xuất
        if (selectHang && selectHang.value !== "all") {
            listResult = listResult.filter(xe => xe.hang.toLowerCase() === selectHang.value.toLowerCase());
        }

        // 3. Lọc theo phân khối xe
        if (selectPhanKhoi && selectPhanKhoi.value !== "all") {
            if (selectPhanKhoi.value === "150-155") {
                listResult = listResult.filter(xe => xe.phanKhoi >= 150 && xe.phanKhoi <= 155);
            } else if (selectPhanKhoi.value === "pkl") {
                listResult = listResult.filter(xe => xe.phanKhoi > 155);
            }
        }

        // 4. Lọc theo khoảng giá
        if (selectGia && selectGia.value !== "all") {
            if (selectGia.value === "under-50") {
                listResult = listResult.filter(xe => xe.gia < 50000000);
            } else if (selectGia.value === "50-100") {
                listResult = listResult.filter(xe => xe.gia >= 50000000 && xe.gia <= 100000000);
            } else if (selectGia.value === "over-100") {
                listResult = listResult.filter(xe => xe.gia > 100000000);
            }
        }

        // 5. Sắp xếp giá tăng / giảm dần
        if (selectSort && selectSort.value !== "none") {
            if (selectSort.value === "asc") {
                listResult.sort((a, b) => a.gia - b.gia);
            } else if (selectSort.value === "desc") {
                listResult.sort((a, b) => b.gia - a.gia);
            }
        }

        // Tiến hành render ra màn hình
        grid.innerHTML = "";
        if (listResult.length === 0) {
            grid.innerHTML = `<div class="loading-placeholder">Không tìm thấy mẫu xe nào phù hợp với bộ lọc hiện tại.</div>`;
        } else {
            listResult.forEach(xe => {
                grid.innerHTML += createProductCardHTML(xe);
            });
        }
    }

    // Gắn sự kiện lắng nghe sự thay đổi của bộ lọc
    [inputSearch, selectHang, selectPhanKhoi, selectGia, selectSort].forEach(element => {
        if (element) {
            element.addEventListener("input", filterAndRender);
            element.addEventListener("change", filterAndRender);
        }
    });

    // Kiểm tra xem có nhận tiêu điểm từ ô tìm kiếm nhanh ở trang chủ không
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams.get('focus') === 'search' && inputSearch) {
        inputSearch.focus();
    }

    // Chạy render lần đầu tiên
    filterAndRender();
}

/**
 * Xử lý Trang Chi Tiết Sản Phẩm (chi-tiet.html) - Đọc Parameter URL để tải thông số kỹ thuật xe tương ứng
 */
function initDetailPage() {
    const detailContainer = document.getElementById("detail-page-wrapper");
    if (!detailContainer) return;

    // Đọc mã xe từ chuỗi URL (?ma=...)
    const urlParams = new URLSearchParams(window.location.search);
    const maXeTarget = urlParams.get('ma');

    const xeTimThay = SẢN_PHẨM_DB.find(item => item.maXe === maXeTarget);

    if (!xeTimThay) {
        detailContainer.innerHTML = `
            <div class="container text-center" style="padding:10rem 0;">
                <h2 class="main-title">KHÔNG TÌM THẤY SẢN PHẨM</h2>
                <p style="color:var(--gray-text); margin: 1rem 0 2rem;">Mã xe này không tồn tại hoặc đã dừng kinh doanh.</p>
                <a href="san-pham.html" class="btn btn-primary">QUAY LẠI CỬA HÀNG</a>
            </div>
        `;
        return;
    }

    // Điền dữ liệu chi tiết xe vào Layout
    document.title = `${xeTimThay.ten} | X-Speed`;
    
    // Phân tách chuỗi thông số kỹ thuật để tạo danh sách li
    const arrayThongSo = xeTimThay.thongSo.split(';');
    let stringLiThongSo = "";
    arrayThongSo.forEach(info => {
        if(info.trim() !== "") {
            stringLiThongSo += `<li><i class="fas fa-check-circle text-red"></i> ${info.trim()}</li>`;
        }
    });

    detailContainer.innerHTML = `
        <div class="container detail-layout" style="padding-top:120px;">
            <div class="detail-back-link">
                <a href="san-pham.html"><i class="fas fa-arrow-left"></i> Quay lại danh sách sản phẩm</a>
            </div>
            
            <div class="detail-main-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:4rem; margin-top:2rem;">
                <div class="detail-image-panel" style="border:1px solid var(--border-color); background:#000;">
                    <img src="${xeTimThay.anh}" alt="${xeTimThay.ten}" style="width:100%; object-fit:cover;" onerror="this.src='https://placehold.co/600x400/111/fff?text=${xeTimThay.hang}+Bike'">
                </div>
                
                <div class="detail-info-panel">
                    <span style="color:var(--primary-color); font-weight:700; text-transform:uppercase; font-family:var(--font-heading); font-size:0.9rem; letter-spacing:1px;">${xeTimThay.hang}</span>
                    <h1 style="font-family:var(--font-heading); font-size:2.5rem; font-weight:800; margin:0.5rem 0 1rem; line-height:1.2;">${xeTimThay.ten}</h1>
                    
                    <div style="font-family:var(--font-heading); font-size:2rem; font-weight:700; color:var(--primary-color); margin-bottom:1.5rem;">
                        ${xeTimThay.gia.toLocaleString('vi-VN')} đ
                    </div>
                    
                    <div style="border-top:1px solid var(--border-color); border-bottom:1px solid var(--border-color); padding:1rem 0; margin-bottom:1.5rem; font-size:0.95rem; color:var(--gray-text);">
                        <p style="margin-bottom:0.5rem;"><strong>Mã sản phẩm:</strong> ${xeTimThay.maXe}</p>
                        <p style="margin-bottom:0.5rem;"><strong>Phân khối:</strong> ${xeTimThay.phanKhoi} cc</p>
                        <p style="margin-bottom:0.5rem;"><strong>Màu sắc phân phối:</strong> ${xeTimThay.mauSac}</p>
                        <p><strong>Tình trạng:</strong> <span style="color:${xeTimThay.tinhTrang === 'Còn hàng' ? '#28a745' : '#dc3545'}">${xeTimThay.tinhTrang}</span></p>
                    </div>

                    <h3 style="font-family:var(--font-heading); font-size:1.1rem; text-transform:uppercase; margin-bottom:0.5rem;">Mô tả tổng quan</h3>
                    <p style="color:var(--gray-text); margin-bottom:2rem; font-size:0.95rem;">${xeTimThay.moTa}</p>

                    <h3 style="font-family:var(--font-heading); font-size:1.1rem; text-transform:uppercase; margin-bottom:0.5rem;">Thông số kỹ thuật nổi bật</h3>
                    <ul class="specs-list" style="margin-bottom:2.5rem; color:var(--gray-text); font-size:0.95rem; display:flex; flex-direction:column; gap:0.5rem;">
                        ${stringLiThongSo}
                    </ul>

                    <button class="btn btn-primary" style="padding:1rem 2.5rem;" onclick="alert('Cảm ơn bạn đã quan tâm! Nhân viên tư vấn của X-Speed sẽ liên hệ báo giá lăn bánh trong 15 phút.')">
                        ĐĂNG KÝ TƯ VẤN NGAY <i class="fas fa-phone-alt" style="margin-left:8px;"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Xử lý Form Validation phía Client tại Trang Liên Hệ (lien-he.html)
 */
function initContactPage() {
    const formElement = document.getElementById("contactForm");
    if (!formElement) return;

    formElement.addEventListener("submit", (e) => {
        e.preventDefault(); // Ngăn trình duyệt reload trang mặc định

        // Thu thập các giá trị input trường dữ liệu
        const hoTen = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const dienThoai = document.getElementById("contactPhone").value.trim();
        const tinNhan = document.getElementById("contactMessage").value.trim();

        // Regex cơ bản kiểm tra cấu trúc Email & Số điện thoại Việt Nam
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const regexPhone = /(0[3|5|7|8|9])+([0-9]{8})\b/g;

        // Tiến hành Validate logic
        if (hoTen.length < 2) {
            alert("Vui lòng nhập Họ tên hợp lệ (tối thiểu 2 ký tự)!");
            return;
        }

        if (!regexEmail.test(email)) {
            alert("Định dạng Email không chính xác. Vui lòng kiểm tra lại!");
            return;
        }

        if (!regexPhone.test(dienThoai)) {
            alert("Số điện thoại không đúng cấu trúc mạng Việt Nam (Ví dụ: 0987654321)!");
            return;
        }

        if (tinNhan.length < 10) {
            alert("Nội dung tin nhắn tư vấn quá ngắn (tối thiểu cần 10 ký tự)!");
            return;
        }

        // Trường hợp tất cả thông tin hợp lệ
        alert(`Gửi yêu cầu thành công!\nXin chào ${hoTen}, X-Speed đã ghi nhận lời nhắn và sẽ gửi email phản hồi về địa chỉ ${email} sớm nhất.`);
        formElement.reset(); // Xóa sạch dữ liệu trên form để người dùng điền lượt mới
    });
}