/*
"splash": {
  "image": "./assets/images/logos/logo.png",
  "resizeMode": "contain",
  "backgroundColor": "#ffffff"
},*/

const Cities_VN = ["An Giang", "Bà Rịa - Vũng Tàu", "Bắc Giang", "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Dương", "Bình Phước", "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông", "Điện Biên", "Đồng Nai", "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương", "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai", "Long An", "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị", "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên", "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang", "Vĩnh Long", "Vĩnh Phúc", "Yên Bái", "Phú Yên", "Cần Thơ", "Đà Nẵng", "Hải Phòng", "Hà Nội", "TP HCM"];
const Cities = ["an giang", "ba ria vung tau", "bac giang", "bac kan", "bac lieu", "bac ninh", "ben tre", "binh dinh", "binh duong", "binh phuoc", "binh thuan", "ca mau", "cao bang", "dak lak", "dak nong", "dien bien", "dong nai", "dong thap", "gia lai", "ha giang", "ha nam", "ha tinh", "hai duong", "hau giang", "hoa binh", "hung yen", "khanh hoa", "kien giang", "kon tum", "lai chau", "lam dong", "lang son", "lao cai", "long an", "nam dinh", "nghe an", "ninh binh", "ninh thuan", "phu tho", "quang binh", "quang nam", "quang ngai", "quang ninh", "quang tri", "soc trang", "son la", "tay ninh", "thai binh", "thai nguyen", "thanh hoa", "thua thien hue", "tien giang", "tra vinh", "tuyen quang", "vinh long", "vinh phuc", "yen bai", "phu yen", "can tho", "da nang", "hai phong", "ha noi", "tp hcm"];

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

const fakeAdsInfo = {
  "ad": {
    "ad_id": 91613594,
    "list_id": 63282145,
    "list_time": 1569383744000,
    "date": "50 giây trước",
    "account_id": 10371590,
    "account_oid": "9001c8756d2539dbcedef8f952a78636",
    "account_name": "Hoàng Trần",
    "subject": "Samsung Galaxy Note 9 128GB đen",
    "body": "Máy đẹp zin keng\nFull áp suất\nMàn đẹp, bản 2 sim\nCấu hình khủng",
    "area": 50,
    "area_name": "Thành phố Vinh",
    "region": 8,
    "region_name": "Nghệ An",
    "category": 5010,
    "category_name": "Điện thoại",
    "company_ad": true,
    "phone": "0853563567",
    "condition_ad": 1,
    "type": "s",
    "type_name": "Cần bán",
    "price": 9690000,
    "price_string": "9.690.000 đ",
    "reviewer_image": "https://static.chotot.com.vn/thumbs/admin/9999999793.png",
    "reviewer_nickname": "Hoài Linh",
    "images": [
      "https://cdn.chotot.com/OARzjmKZbfxfKzngsEbQngKLE_4bVRApCLYKOejvG7M/preset:view/plain/9bc53e6e87007765cf3f5027a043e846-2632986672840578995.jpg",
      "https://cdn.chotot.com/bcgFfO72BCiTu0W7UKWbL4plMeQ9nGqeQ6qV2N0ZH1s/preset:view/plain/b2659141784737e2f6a4b84619b2fcfd-2632986674131900869.jpg",
      "https://cdn.chotot.com/Z9k5Q0GBq0PD3s7Vq6tdPCvbz13asBa6Mwyfyay1UEk/preset:view/plain/9b7adc87649ad454e529558d680c82cb-2632986673930508741.jpg",
      "https://cdn.chotot.com/JgREd-PWeMxHh6CmMhgi1GHFC8xy9Xlpw0edrRPVwVY/preset:view/plain/8cadd0efc6b28fb39780a74cf85c1e89-2632986673092302771.jpg"
    ],
    "thumbnail_image": "https://cdn.chotot.com/lblhjOpVsJNrFn30-rP0damylW0prQD7D8v2ZeFYpCU/preset:listing/plain/9bc53e6e87007765cf3f5027a043e846-2632986672840578995.jpg",
    "owner": false,
    "avatar": "https://st.chotot.com/imaginary/978098b1c99410ea2b7f22842b0b620a15d87e8a/profile_avatar/0a5945b2de1bf133058d8744feb66b3e9bc5c8ab/thumbnail?width=32",
    "mobile_brand": 2,
    "mobile_model": 353,
    "mobile_type": 1,
    "mobile_capacity": 6,
    "mobile_color": 1,
    "elt_condition": 1,
    "elt_warranty": 2,
    "region_v2": 8050,
    "area_v2": 805001
  },
  "parameters": [
    {
      "id": "mobile_brand",
      "value": "Samsung",
      "label": "Hãng"
    },
    {
      "id": "mobile_model",
      "value": "Galaxy Note 9",
      "label": "Dòng máy"
    },
    {
      "id": "elt_condition",
      "value": "Mới",
      "label": "Tình trạng"
    },
    {
      "id": "elt_warranty",
      "value": "Còn bảo hành",
      "label": "Tình trạng bảo hành"
    },
    {
      "id": "mobile_color",
      "value": "Đen",
      "label": "Màu sắc"
    },
    {
      "id": "mobile_capacity",
      "value": "128 GB",
      "label": "Dung lượng"
    },
    {
      "id": "area",
      "value": "Thành phố Vinh",
      "label": "Quận, Huyện"
    },
    {
      "id": "region",
      "value": "Nghệ An",
      "label": "Tỉnh, thành phố"
    }
  ],
  "ad_params": {
    "area": {
      "id": "area",
      "value": "Thành phố Vinh",
      "label": "Quận, Huyện"
    },
    "elt_condition": {
      "id": "elt_condition",
      "value": "Mới",
      "label": "Tình trạng"
    },
    "elt_warranty": {
      "id": "elt_warranty",
      "value": "Còn bảo hành",
      "label": "Tình trạng bảo hành"
    },
    "mobile_brand": {
      "id": "mobile_brand",
      "value": "Samsung",
      "label": "Hãng"
    },
    "mobile_capacity": {
      "id": "mobile_capacity",
      "value": "128 GB",
      "label": "Dung lượng"
    },
    "mobile_color": {
      "id": "mobile_color",
      "value": "Đen",
      "label": "Màu sắc"
    },
    "mobile_model": {
      "id": "mobile_model",
      "value": "Galaxy Note 9",
      "label": "Dòng máy"
    },
    "region": {
      "id": "region",
      "value": "Nghệ An",
      "label": "Tỉnh, thành phố"
    }
  }
}

const fakeAdsInfo2 = {
  "ad": {
    "ad_id": 91700077,
    "list_id": 63350538,
    "list_time": 1569491254000,
    "date": "4 ngày trước",
    "account_id": 11549028,
    "account_oid": "d6732e34d317d0cfea552347cfecd1a0",
    "account_name": "thiennguyen",
    "subject": "Điều hòa mitsubishi nội địa",
    "body": "Máy lạnh nội địa nhật mitsubishi đầu 22 hàng bãi zin đẹp chất lượng. Ae có nhu cầu alo.",
    "area": 13,
    "area_name": "Thành phố Biên Hòa",
    "region": 2,
    "region_name": "Đồng Nai",
    "category": 9030,
    "category_name": "Tủ lạnh, Máy lạnh, Máy giặt",
    "company_ad": true,
    "phone": "0918889282",
    "condition_ad": 1,
    "type": "s",
    "type_name": "Cần bán",
    "price": 3100000,
    "price_string": "3.100.000 đ",
    "reviewer_image": "https://static.chotot.com.vn/thumbs/admin/9999999856.png",
    "reviewer_nickname": "Thanh Long",
    "images": [
      "https://cdn.chotot.com/NadyjZodZNDb4G6D8FGW3IIg2i-xwHsteQXTHvvdLlc/preset:view/plain/036bf03cb7d39324588fd0dd3b4de3f5-2633169113481746355.jpg",
      "https://cdn.chotot.com/gPcmxFu-MWaMYSg1dWpqeGnwMM_nu_E3LH7ctfgUN58/preset:view/plain/478de4507421f71c62ff4f83366f723c-2633169113111796165.jpg",
      "https://cdn.chotot.com/MnxCliSHloDbdotvclyDassmJ77_AtZHKi13ysk_qVU/preset:view/plain/47dfa900cf637461cf0e5740ea04287d-2633169119101786565.jpg"
    ],
    "thumbnail_image": "https://cdn.chotot.com/62pRToAqFoZHPFCY_ixH9u0PEIFVVBzENDhQv5Jwzpo/preset:listing/plain/036bf03cb7d39324588fd0dd3b4de3f5-2633169113481746355.jpg",
    "owner": false,
    "avatar": "https://st.chotot.com/imaginary/8720ca9fa2dbd54f01a860ac6fb30bfbf242451a/profile_avatar/e141d6f7292d963ffdf4bde7e299931c73685560/thumbnail?width=32",
    "region_v2": 2013,
    "area_v2": 201301,
    "ward": 8964,
    "ward_name": "Phường Trảng Dài"
  },
  "parameters": [
    {
      "id": "ward",
      "value": "Phường Trảng Dài",
      "label": " Phường, thị xã, thị trấn"
    },
    {
      "id": "condition_ad",
      "value": "Đã sử dụng",
      "label": "Tình trạng"
    },
    {
      "id": "area",
      "value": "Thành phố Biên Hòa",
      "label": "Quận, Huyện"
    },
    {
      "id": "region",
      "value": "Đồng Nai",
      "label": "Tỉnh, thành phố"
    }
  ],
  "ad_params": {
    "area": {
      "id": "area",
      "value": "Thành phố Biên Hòa",
      "label": "Quận, Huyện"
    },
    "condition_ad": {
      "id": "condition_ad",
      "value": "Đã sử dụng",
      "label": "Tình trạng"
    },
    "region": {
      "id": "region",
      "value": "Đồng Nai",
      "label": "Tỉnh, thành phố"
    },
    "ward": {
      "id": "ward",
      "value": "Phường Trảng Dài",
      "label": " Phường, thị xã, thị trấn"
    }
  }
}

const defaultAdInfo = {
  "ad": {
    "ad_id": 91613594,
    "list_id": 63282145,
    "list_time": 1569383744000,
    "date": "0 giây trước",
    "account_id": 10371590,
    "account_oid": "9001c8756d2539dbcedef8f952a78636",
    "account_name": "",
    "subject": "",
    "body": "",
    "area": 50,
    "area_name": "",
    "region": 8,
    "region_name": "",
    "category": 5010,
    "category_name": "Điện thoại",
    "company_ad": true,
    "phone": "",
    "condition_ad": 1,
    "type": "s",
    "type_name": "Cần bán",
    "price": 9690000,
    "price_string": "0 đ",
    "reviewer_image": "https://static.chotot.com.vn/thumbs/admin/9999999793.png",
    "reviewer_nickname": "Hoài Linh",
    "images": [
    ],
    "thumbnail_image": "https://cdn.chotot.com/lblhjOpVsJNrFn30-rP0damylW0prQD7D8v2ZeFYpCU/preset:listing/plain/9bc53e6e87007765cf3f5027a043e846-2632986672840578995.jpg",
    "owner": false,
    "avatar": "https://st.chotot.com/imaginary/978098b1c99410ea2b7f22842b0b620a15d87e8a/profile_avatar/0a5945b2de1bf133058d8744feb66b3e9bc5c8ab/thumbnail?width=32",
    "mobile_brand": 2,
    "mobile_model": 353,
    "mobile_type": 1,
    "mobile_capacity": 6,
    "mobile_color": 1,
    "elt_condition": 1,
    "elt_warranty": 2,
    "region_v2": 8050,
    "area_v2": 805001
  },
  "parameters": [

  ],
  "ad_params": {
    "area": {
      "id": "area",
      "value": "",
      "label": "Quận, Huyện"
    },
    "region": {
      "id": "region",
      "value": "",
      "label": "Tỉnh, thành phố"
    }
  }
}

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
}

export {
  Cities_VN, Cities, danhMuc, banners, labelData, categoryData, labelProductData,
  fakeAdsInfo, fakeAdsInfo2,
  defaultAccountInfo, defaultAdInfo
};
