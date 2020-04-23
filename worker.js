importScripts("./jsotp.min.js");
var totp = new jsOTP.totp();
onmessage = (event) => {
  const secret = event.data;
  const key = totp.getOtp(secret);
  postMessage(key);
};
