// 校验规则 过滤特殊字符串和空格
export function stripscript(str) {
  var pattern = new RegExp(
    "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]"
  );
  var rs = "";
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, "");
  }
  return rs;
}
// 验证邮箱
export function emailValiadata(value) {
  var reg = new RegExp(
    "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
  );
  // var reg = /^([a-zA-Z]|[0-9])(\w|)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  // var reg = /^([a-zA-Z]|[0-9])(\w-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return !reg.test(value) ? true : false;
}

// 验证密码
export function passlValiadata(value) {
  let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return !reg.test(value) ? true : false;
}

// 验证验证码
export function codeValiadata(value) {
  let reg = /^[a-z0-9]{6}$/;
  return reg.test(value) ? true : false;
}
