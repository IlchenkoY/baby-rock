export default function getDeviceType() {
  const userAgent = navigator.userAgent || window.opera;
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  if (/tablet|ipad|playbook|silk|android(?!.*mobi)/i.test(userAgent)) {
    return "Tablet";
  }
  if (
    /Mobile|iP(hone|od)|android.+mobile|Windows Phone|webOS|BlackBerry|Opera Mini|IEMobile/i.test(
      userAgent
    )
  ) {
    return "Mobile";
  }
  return "Desktop";
}
