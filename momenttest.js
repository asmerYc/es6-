var moment = require('moment');

console.log(moment())
console.log(moment().startOf('day'))


function checkInputDate(date) {
  if (date === null || date === '') {
    return INVALID_DATE;
  }
  if (date === undefined) {
    return new Date();
  }
  return date;
}
function from_now(date, suffix) {
  const res = this.checkInputDate(date);
  if (res !== INVALID_DATE) {
    return moment(res).fromNow(suffix);
  }
  return res;
}
function moment_YMDHM(date) {
  const res = this.checkInputDate(date);
  if (res !== INVALID_DATE) {
    return moment(res).format('YYYY-MM-DD HH:mm');
  }
  return res;
}
function moment_YMD(date) {
  const res = this.checkInputDate(date);
  if (res !== INVALID_DATE) {
    return moment(res).format('YYYY-MM-DD');
  }
  return res;
}
function moment_MD(date) {
  const res = this.checkInputDate(date);
  if (res !== INVALID_DATE) {
    return moment(res).format('M月D号');
  }
  return res;
}
function moment_HM(date) {
  const res = this.checkInputDate(date);
  if (res !== INVALID_DATE) {
    return moment(res).format('HH:mm');
  }
  return res;
}
function moment_Y(date) {
  const res = this.checkInputDate(date);
  if (res !== INVALID_DATE) {
    return moment(res).get('year');
  }
  return res;
}
function moment_W(date) {
  const res = this.checkInputDate(date);
  if (res !== INVALID_DATE) {
    return moment(res).format('W');
  }
  return res;
}
function diffDays(fromDate, toDate) {
  if (fromDate === null || fromDate === undefined || fromDate === '') {
    return '无效时间数据';
  }
  if (toDate === null || toDate === undefined || toDate === '') {
    toDate = new Date();
  }
  fromDate = moment(fromDate);
  return moment(toDate).diff(fromDate, 'days');
}