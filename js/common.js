"use strict";

(function () {
  var breadcrumb = document.querySelector(".breadcrumb");
  var breadcrumbItem = document.querySelector(".breadcrumb-item");
  var navTabs = document.querySelector(".nav-tabs");
  navTabs.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      var li = document.createElement("li");
      li.classList.add("breadcrumb-item");
      li.innerHTML = "<a href=\"".concat(e.target.href, "\">").concat(e.target.innerHTML, "</a>");
      breadcrumb.innerHTML = "";
      breadcrumb.appendChild(breadcrumbItem);
      breadcrumb.appendChild(li);
    }
  });
})(window);