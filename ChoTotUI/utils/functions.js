import { Platform, Linking } from 'react-native';

function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
}

const dialCall = (phone) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
        phoneNumber = 'tel:${' + phone + '}';
    }
    else {
        phoneNumber = 'telprompt:${' + phone + '}';
    }
    Linking.openURL(phoneNumber);
}


// ============================ DATE TIME FUNCTIONS =======================
function appendLeadingZeroes(n) {
    if (n <= 9) {
        return "0" + n;
    }
    return n
}

function formatDate(date, type) {
    let d = appendLeadingZeroes(date.getDate())
    let m = appendLeadingZeroes(date.getMonth() + 1)
    let y = appendLeadingZeroes(date.getFullYear())

    let h = appendLeadingZeroes(date.getHours())
    let mi = appendLeadingZeroes(date.getMinutes())
    let s = appendLeadingZeroes(date.getSeconds())

    if (type == 'dd/mmm/yyyy')
        return `${d}/${m}/${y}`
    if (type == 'dd/mmm/yyyy hh:mm:ss')
        return `${d}/${m}/${y} ${h}:${mi}:${s}`
}

function secsToDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
}

function msToTime(duration) {
    return {
        hours: Math.floor((duration / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((duration / (1000 * 60)) % 60),
        seconds: Math.floor((duration / 1000) % 60)
    }
}

function responseTimeText(duration) {
    let hours = Math.floor((duration / (60 * 60)) % 24);
    let minutes = Math.floor((duration / 60) % 60);
    let seconds = Math.floor(duration % 60);

    if (hours > 0) return `Trong ${hours + (minutes > 30 ? 1 : 0)} tiếng`
    if (minutes > 0) return `Trong ${minutes + (seconds > 30 ? 1 : 0)} phút`
    return 'Dưới 1 phút'
}

function calculateOnlineTime(online_time) {
    if (online_time == 0) return 'Chưa hoạt động';

    let online = secsToDateTime(online_time);
    let diff = new Date() - online;

    let diffStr = msToTime(diff);
    const { hours, minutes, seconds } = diffStr;

    if (hours > 0) {
        return `Hoạt động ${hours} giờ trước`;
    }
    if (minutes > 0) {
        return `Hoạt động ${minutes} phút trước`;
    }
    return 'Hoạt động vài giây trước';
}

export { change_alias, dialCall, responseTimeText, calculateOnlineTime };