/*
"splash": {
  "image": "./assets/images/logos/logo.png",
  "resizeMode": "contain",
  "backgroundColor": "#ffffff"
},*/

const Cities_VN = ["An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái", "Phú Yên", "Cần Thơ", "Đà Nẵng", "Hải Phòng", "Hà Nội", "TP Hồ Chí Minh"];
const Cities = ["an giang", "ba ria vung tau", "bac giang", "bac kan", "bac lieu", "bac ninh", "ben tre", "binh dinh", "binh duong", "binh phuoc", "binh thuan", "ca mau", "cao bang", "dak lak", "dak nong", "dien bien", "dong nai", "dong thap", "gia lai", "ha giang", "ha nam", "ha tinh", "hai duong", "hau giang", "hoa binh", "hung yen", "khanh hoa", "kien giang", "kon tum", "lai chau", "lam dong", "lang son", "lao cai", "long an", "nam dinh", "nghe an", "ninh binh", "ninh thuan", "phu tho", "quang binh", "quang nam", "quang ngai", "quang ninh", "quang tri", "soc trang", "son la", "tay ninh", "thai binh", "thai nguyen", "thanh hoa", "thua thien hue", "tien giang", "tra vinh", "tuyen quang", "vinh long", "vinh phuc", "yen bai", "phu yen", "can tho", "da nang", "hai phong", "ha noi", "tp ho chi minh"];

const danhMuc = {

  big: [{
    name: 'Bất động sản',
    cg: 1000,
    image: require('../assets/images/categories/cho-tot-nha.png')
  }, {
    name: 'Xe cộ',
    cg: 2000,
    image: require('../assets/images/categories/cho-tot-xe.png')
  }],

  small: [{
    name: 'Đồ điện tử',
    cg: 5000,
    image: require('../assets/images/categories/do-dien-tu.png')
  }, {
    name: 'Thú cưng',
    cg: 12000,
    image: require('../assets/images/categories/thu-cung.png')
  }, {
    name: 'Mẹ và bé',
    cg: 11000,
    image: require('../assets/images/categories/me-va-be.png')
  }, {
    name: 'Thời trang, Đồ dùng cá nhân',
    cg: 3000,
    image: require('../assets/images/categories/thoi-trang-do-dung-ca-nhan.png')
  }, {
    name: 'Dịch vụ, Du lịch',
    cg: 6000,
    image: require('../assets/images/categories/dich-vu-du-lich.png')
  }, {
    name: 'Cho tặng miễn phí',
    giveaway: true,
    image: require('../assets/images/categories/cho-tang-mien-phi.png')
  }, {
    name: 'Việc làm',
    cg: 13000,
    image: require('../assets/images/categories/viec-lam.png')
  }, {
    name: 'Nội ngoại thất, Đồ gia dụng',
    cg: 9000,
    image: require('../assets/images/categories/noi-ngoai-that.png')
  }, {
    name: 'Giải trí, Thể thao, Sở thích',
    cg: 4000,
    image: require('../assets/images/categories/giai-tri-the-thao-so-thich.png')
  }, {
    name: 'Đồ văn phòng, Công nông nghiệp',
    cg: 8000,
    image: require('../assets/images/categories/do-van-phong.png')
  }, {
    name: 'Các loại khác',
    cg: 7000,
    image: require('../assets/images/categories/cac-loai-khac.png')
  }, {
    name: 'Tất cả danh mục',
    image: require('../assets/images/categories/tat-ca-danh-muc.png')
  },]
}

const banners = [
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

const labelData = [
  {
    id: 1,
    title: 'Dung lượng cao',
  },
  {
    id: 2,
    title: 'Game',
  },
  {
    id: 3,
    title: 'Trả góp',
  },
  {
    id: 4,
    title: 'Bảo hành',
  },
  {
    id: 5,
    title: 'Chưa dùng',
  },
  {
    id: 6,
    title: 'Cấu hình',
  },
];

const categoryData = [
  {
    id: 1,
    title: 'Máy tính bảng',
    icon: 'ios-tablet-portrait'
  },
  {
    id: 2,
    title: 'Laptop',
    icon: 'ios-laptop'
  },
  {
    id: 3,
    title: 'Điện thoại',
    icon: 'ios-phone-portrait'
  },
  {
    id: 4,
    title: 'Máy tính để bàn',
    icon: 'ios-desktop'
  },
  {
    id: 5,
    title: 'Máy ảnh',
    icon: 'ios-camera'
  },
  {
    id: 6,
    title: 'Tivi, Âm thanh',
    icon: 'ios-tv'
  },
  {
    id: 7,
    title: 'Thiết bị đeo',
    icon: 'md-watch'
  },
];

const labelProductData = [
  {
    id: 1,
    title: 'Dung lượng cao',
    color: '#ff630b',
  },
  {
    id: 2,
    title: 'Game',
    color: '#68c0ff',
  },
  {
    id: 3,
    title: 'Bảo hành',
    color: '#ffd428',
  },
  {
    id: 4,
    title: 'Trả góp',
    color: '#5aed69',
  },
  {
    id: 5,
    title: 'Cấu hình',
    color: '#73eedc',
  },
  {
    id: 6,
    title: 'Mới',
    color: '#f1f2f6',
  },
  {
    id: 7,
    title: 'Selfie',
    color: '#c1dbe3'
  },
];

const defaultAccountInfo = {
  info: {
    "account_id": 4863117,
    "account_oid": "9a4b897ab7a6bc3d3364b501e125299f",
    "address": "",
    "avatar": "https://st.chotot.com/imaginary/978098b1c99410ea2b7f22842b0b620a15d87e8a/profile_avatar/0a5945b2de1bf133058d8744feb66b3e9bc5c8ab/thumbnail?width=32",
    "create_time": 1500008889,
    "email_verified": "f",
    "facebook_id": "387430521728682",
    "full_name": "...",
    "is_active": true,
    "location": [
      -1,
      -1
    ],
    "old_phone": "",
    "phone": "",
    "phone_verified": "t",
    "start_time": 1500008889,
    "update_time": 1535006183
  },
  chat: {
    "status": "success",
    "result": {
      "user_id": "2284208",
      "response_time": 0,
      "response_rate": 0.78,
      "account_oid": "f4d48fb7644dd555c1fa739eb1ca49cb",
      "deviation": "0",
      "email_verified": "f",
      "phone_verified": "t",
      "start_time": 1459397902,
      "member_id": "2284208",
      "member_displayname": "",
      "display_image": "https://st.chotot.com/imaginary/b06eeec57cd91bfbd1743af0184f072900d73082/profile_avatar/5c9fb32431ffa4a295e7804bd9c88be671fe4b05/thumbnail?width=160",
      "online_status": false,
      "online_time": 0,
      "response_rate_text": "",
      "response_time_text": ""
    }
  },
  rating: {
    "average_rating": 0,
    "total_rating": 0
  }
};

const regionId = {
  'Hà Nội': 12000,
  'Tp Hồ Chí Minh': 13000,
  'Đà Nẵng': 3017,
  'Cần Thơ': 5027,
  'Bình Dương': 2011,
  'An Giang': 5024,
  'Bà Rịa - Vũng Tàu': 2010,
  'Bắc Giang': 10060,
  'Bắc Kạn': 10059,
  'Bạc Liêu': 5025,
  'Bắc Ninh': 1001,
  'Bến Tre': 5026,
  'Bình Định': 7043,
  'Bình Phước': 2012,
  'Bình Thuận': 7042,
  'Cà Mau': 5028,
  'Cao Bằng': 10061,
  'Đắk Lắk': 9053,
  'Đắk Nông': 9054,
  'Điện Biên': 11067,
  'Đồng Nai': 2013,
  'Đồng Tháp': 5029,
  'Gia Lai': 9056,
  'Hà Giang': 10062,
  'Hà Nam': 1003,
  'Hà Tĩnh': 8049,
  'Hải Dương': 1004,
  'Hải Phòng': 4019,
  'Hậu Giang': 5030,
  'Hòa Bình': 1005,
  'Hưng Yên': 1006,
  'Khánh Hòa': 7044,
  'Kiên Giang': 5031,
  'Kon Tum': 9055,
  'Lai Châu': 11068,
  'Lâm Đồng': 9057,
  'Lạng Sơn': 10063,
  'Lào Cai': 11069,
  'Long An': 5032,
  'Nam Định': 4020,
  'Nghệ An': 8050,
  'Ninh Bình': 1007,
  'Ninh Thuận': 7045,
  'Phú Thọ': 1002,
  'Phú Yên': 7046,
  'Quảng Bình': 6038,
  'Quảng Nam': 3016,
  'Quảng Ngãi': 7047,
  'Quảng Ninh': 10130,
  'Quảng Trị': 6039,
  'Sóc Trăng': 5033,
  'Sơn La': 11070,
  'Tây Ninh': 2014,
  'Thái Bình': 4021,
  'Thái Nguyên': 10064,
  'Thanh Hóa': 8051,
  'Thừa Thiên Huế': 6040,
  'Tiền Giang': 5034,
  'Trà Vinh': 5035,
  'Tuyên Quang': 10065,
  'Vĩnh Long': 5036,
  'Vĩnh Phúc': 1008,
  'Yên Bái': 11071,
};

export {
  Cities_VN, Cities, danhMuc, banners, labelData, categoryData, labelProductData, defaultAccountInfo, regionId
};
