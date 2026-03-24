(function () {
  'use strict';

  const cards = Array.from(document.querySelectorAll('[data-junta]'));
  if (!cards.length) return;

  const params = new URLSearchParams(window.location.search);

  const selects = {
    junta: document.getElementById('filter-junta'),
    estado: document.getElementById('filter-estado'),
    tipo: document.getElementById('filter-tipo'),
  };

  // Initialise selects from URL params
  Object.keys(selects).forEach(function (key) {
    if (selects[key] && params.get(key)) {
      selects[key].value = params.get(key);
    }
  });

  function getAutarcasFromCard(card) {
    const slugs = [];
    let i = 1;
    while (card.dataset['autarca' + i]) {
      slugs.push(card.dataset['autarca' + i]);
      i++;
    }
    return slugs;
  }

  function applyFilters() {
    const filterJunta = selects.junta ? selects.junta.value : '';
    const filterEstado = selects.estado ? selects.estado.value : '';
    const filterTipo = selects.tipo ? selects.tipo.value : '';
    const filterAutarca = document.getElementById('filter-autarca')
      ? document.getElementById('filter-autarca').value
      : '';

    let visible = 0;

    cards.forEach(function (card) {
      const matchJunta = !filterJunta || card.dataset.junta === filterJunta;
      const matchEstado = !filterEstado || card.dataset.estado === filterEstado;
      const matchTipo = !filterTipo || card.dataset.tipo === filterTipo;
      const matchAutarca =
        !filterAutarca || getAutarcasFromCard(card).includes(filterAutarca);

      const show = matchJunta && matchEstado && matchTipo && matchAutarca;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    const counter = document.getElementById('filter-count');
    if (counter) counter.textContent = visible;

    // Update URL without reload
    const newParams = new URLSearchParams();
    if (filterJunta) newParams.set('junta', filterJunta);
    if (filterEstado) newParams.set('estado', filterEstado);
    if (filterTipo) newParams.set('tipo', filterTipo);
    if (filterAutarca) newParams.set('autarca', filterAutarca);
    const newSearch = newParams.toString();
    history.replaceState(null, '', newSearch ? '?' + newSearch : window.location.pathname);
  }

  Object.values(selects).forEach(function (sel) {
    if (sel) sel.addEventListener('change', applyFilters);
  });
  const autarcaSelect = document.getElementById('filter-autarca');
  if (autarcaSelect) autarcaSelect.addEventListener('change', applyFilters);

  // Apply on load (in case URL has params)
  applyFilters();
})();
