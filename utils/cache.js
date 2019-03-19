
// const setItem = (key, v, overtime = 30*24*60*60*1000) => {
//   const val = {
//     value: v,
//     overtime: Date.now() + overtime,
//   }
//   localStorage.setItem(key, JSON.stringify(val));
//   console.log(`已经设置缓存字段：${key},值为：${val.value}`);
// }

const setItem = (key, v) => {
  localStorage.setItem(key,v);
  console.info(`已经设置了缓存字段：${key},值为：${v}`);
}

const getItem = (key) => {
  return localStorage.getItem(key);
}

const setCookie = (key, value, expiredays = 29) => {
  const exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = `${key}=${value};expires=${exdate.toUTCString()}`
  // document.cookie = `${key}=${encodeURIComponent(value)};expires=${exdate.toUTCString()}`
}

const getCookie = (key) => {
  const reg = new RegExp(`(^| )${key}=([^;]*)(;|$)`)
  const arr = document.cookie.match(reg)
  if (arr) return decodeURIComponent(arr[2])
  return null
}

const delCookie = (key) => {
  const exdate = new Date()
  exdate.setTime(exdate.getTime() - 1)
  const value = getCookie(key)
  if (value) document.cookie = `${key}=${encodeURIComponent(value)};expires=${exdate.toUTCString()}`
}

export {
  setItem,
  getItem,
  setCookie,
  getCookie,
  delCookie
};



