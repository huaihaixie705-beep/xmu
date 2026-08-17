// 谢胜山诊所 · 移动端导航切换
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    // 点击菜单项后关闭
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
      });
    });
  }
})();

// 谢胜山诊所 · 滚动入场动画
(function () {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  // 首屏 hero 元素直接显示（无需等滚动）
  var heroReveals = document.querySelectorAll('.hero .reveal');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) { io.observe(el); });
  } else {
    // 不支持 IntersectionObserver 的浏览器直接显示
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }
})();