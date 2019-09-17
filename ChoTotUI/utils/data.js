const Cities_VN = ['Hà Nội', 'TP Hồ Chí Minh', 'Hải Phòng', 'Bắc Ninh', 'Nam Định', 'Đà Nẵng', 'Đồng Nai', 'Cần Thơ', 'Long An'];
const Cities = ['ha noi', 'tp ho chi minh', 'hai phong', 'bac ninh', 'nam dinh', 'da nang', 'dong nai', 'can tho', 'long an'];

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
    image: require('../assets/images/banners/buyer_collection_y_homepage_banner_1564111461475.jpg')
  },
  {
    link: "",
    image: require('../assets/images/banners/buyer_collection_y_homepage_banner_1565608864238.jpg')
  },
  {
    link: "",
    image: require('../assets/images/banners/buyer_collection_y_homepage_banner_1567656679842.jpg')
  },
  {
    link: "",
    image: require('../assets/images/banners/buyer_collection_y_homepage_banner_1568203049943.jpg')
  },
]

export { Cities_VN, Cities, danhMuc, ads };