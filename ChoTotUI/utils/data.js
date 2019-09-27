const Cities_VN = ["An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái", "Phú Yên", "Cần Thơ", "Đà Nẵng", "Hải Phòng", "Hà Nội", "TP HCM"];
const Cities = ["an giang", "ba ria vung tau", "bac giang", "bac kan", "bac lieu", "bac ninh", "ben tre", "binh dinh", "binh duong", "binh phuoc", "binh thuan", "ca mau", "cao bang", "dak lak", "dak nong", "dien bien", "dong nai", "dong thap", "gia lai", "ha giang", "ha nam", "ha tinh", "hai duong", "hau giang", "hoa binh", "hung yen", "khanh hoa", "kien giang", "kon tum", "lai chau", "lam dong", "lang son", "lao cai", "long an", "nam dinh", "nghe an", "ninh binh", "ninh thuan", "phu tho", "quang binh", "quang nam", "quang ngai", "quang ninh", "quang tri", "soc trang", "son la", "tay ninh", "thai binh", "thai nguyen", "thanh hoa", "thua thien hue", "tien giang", "tra vinh", "tuyen quang", "vinh long", "vinh phuc", "yen bai", "phu yen", "can tho", "da nang", "hai phong", "ha noi", "tp hcm"];

const danhMuc = {

  big: [{
    name: 'Bất động sản',
    image: require('../assets/images/categories/cho-tot-nha.png')
  }, {
    name: 'Xe cộ',
    image: require('../assets/images/categories/cho-tot-xe.png')
  }],

  small: [{
    name: 'Đồ điện tử',
    image: require('../assets/images/categories/do-dien-tu.png')
  }, {
    name: 'Thú cưng',
    image: require('../assets/images/categories/thu-cung.png')
  }, {
    name: 'Mẹ và bé',
    image: require('../assets/images/categories/me-va-be.png')
  }, {
    name: 'Thời trang, Đồ dùng cá nhân',
    image: require('../assets/images/categories/thoi-trang-do-dung-ca-nhan.png')
  }, {
    name: 'Dịch vụ, Du lịch',
    image: require('../assets/images/categories/dich-vu-du-lich.png')
  }, {
    name: 'Cho tặng miễn phí',
    image: require('../assets/images/categories/cho-tang-mien-phi.png')
  }, {
    name: 'Việc làm',
    image: require('../assets/images/categories/viec-lam.png')
  }, {
    name: 'Nội ngoại thất, Đồ gia dụng',
    image: require('../assets/images/categories/noi-ngoai-that.png')
  }, {
    name: 'Giải trí, Thể thao, Sở thích',
    image: require('../assets/images/categories/giai-tri-the-thao-so-thich.png')
  }, {
    name: 'Đồ văn phòng, Công nông nghiệp',
    image: require('../assets/images/categories/do-van-phong.png')
  }, {
    name: 'Các loại khác',
    image: require('../assets/images/categories/cac-loai-khac.png')
  }, {
    name: 'Tất cả danh mục',
    image: require('../assets/images/categories/tat-ca-danh-muc.png')
  },]
}

const ads = [
  {
    link: "",
    mobileImage: require('../assets/images/banners/buyer_collection_y_homepage_banner_1564111461475.jpg')
  },
  {
    link: "",
    mobileImage: require('../assets/images/banners/buyer_collection_y_homepage_banner_1565608864238.jpg')
  },
  {
    link: "",
    mobileImage: require('../assets/images/banners/buyer_collection_y_homepage_banner_1567656679842.jpg')
  },
  {
    link: "",
    mobileImage: require('../assets/images/banners/buyer_collection_y_homepage_banner_1568203049943.jpg')
  },
]

export { Cities_VN, Cities, danhMuc, ads };
