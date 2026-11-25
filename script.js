console.log("JavaScript подключён!");

// Каждая кнопка «Купить» показывает название выбранного товара.
document.querySelectorAll(".buy").forEach(function(button) {
  button.addEventListener("click", function() {
    document.querySelector("#message").textContent =
      "Товар «" + button.dataset.product + "» добавлен в корзину!";
  });
});

// Каждая кнопка «Подробнее» показывает описание соответствующей модели.
document.querySelectorAll(".details").forEach(function(button) {
  button.addEventListener("click", function() {
    document.querySelector("#info").textContent = button.dataset.info;
  });
});

// Стоимость доставки.
document.querySelector("#delivery").addEventListener("click", function() {
  document.querySelector("#delivery-info").textContent =
    "Доставка по городу — 300 ₽";
});

// Очистка сообщений.
document.querySelector("#clear").addEventListener("click", function() {
  document.querySelector("#message").textContent = "";
  document.querySelector("#info").textContent = "";
  document.querySelector("#delivery-info").textContent = "";
});
