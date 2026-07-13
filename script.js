Document.querySelectorAll('.butterfly ').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 800) + "px";
  });
});

document.querySelectorAll('.foo').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.style.left = (Math.random() * 300 + 400) + "px";
    el.style.top = (Math.random() * 80 + 200) + "px";
  });
});