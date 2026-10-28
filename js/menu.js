// RECTEC Servicios — abre y cierra el menú en celulares y tablets.
(function () {
  var boton = document.getElementById('menu-boton');
  var menu = document.getElementById('menu');
  if (!boton || !menu) return;

  function cerrar() {
    menu.classList.remove('abierto');
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('aria-label', 'Abrir menú');
  }

  boton.addEventListener('click', function () {
    var abierto = menu.classList.toggle('abierto');
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
  });

  // Al tocar una opción del menú, se cierra solo
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) cerrar();
  });

  // Tecla Escape cierra el menú
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cerrar();
  });
})();
