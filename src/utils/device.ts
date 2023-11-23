export function isMobile() {
  // 市面上的主流使用环境
  let conditionOne =
    /Andriod|iphone|ipad|webOs|Windows Phone|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  let conditionTwo = window.innerWidth < window.innerHeight;
  return conditionOne || conditionTwo;
}
