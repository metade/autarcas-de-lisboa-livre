---
title: "Propostas e Moções"
permalink: /propostas/
description: "Propostas, moções, requerimentos e votos apresentados pelos eleitos do Livre."
---
<!-- Filters -->
<div class="bg-white rounded-xl border border-gray-200 p-4 mb-6">
  <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
    <div>
      <label for="filter-autarca" class="block text-xs font-medium text-gray-600 mb-1">Autarca</label>
      <select id="filter-autarca" class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-livre-green">
        <option value="">Todos</option>
        {% assign autarcas_sorted = site.autarcas | sort: "nome" %}
        {% for autarca in autarcas_sorted %}
          <option value="{{ autarca.slug }}">{{ autarca.nome }}</option>
        {% endfor %}
      </select>
    </div>
    <div>
      <label for="filter-junta" class="block text-xs font-medium text-gray-600 mb-1">Órgão / Freguesia</label>
      <select id="filter-junta" class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-livre-green">
        <option value="">Todos</option>
        <option value="camara-municipal">Câmara Municipal</option>
        <option value="assembleia-municipal">Assembleia Municipal</option>
        {% for junta in site.juntas %}
          <option value="{{ junta.slug }}">{{ junta.nome }}</option>
        {% endfor %}
      </select>
    </div>
    <div>
      <label for="filter-tipo" class="block text-xs font-medium text-gray-600 mb-1">Tipo</label>
      <select id="filter-tipo" class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-livre-green">
        <option value="">Todos</option>
        <option value="Proposta">Proposta</option>
        <option value="Moção">Moção</option>
        <option value="Requerimento">Requerimento</option>
        <option value="Voto">Voto</option>
      </select>
    </div>
    <div>
      <label for="filter-estado" class="block text-xs font-medium text-gray-600 mb-1">Estado</label>
      <select id="filter-estado" class="w-full text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:border-livre-green">
        <option value="">Todos</option>
        <option value="Em análise">Em análise</option>
        <option value="Aprovada">Aprovada</option>
        <option value="Rejeitada">Rejeitada</option>
        <option value="Retirada">Retirada</option>
      </select>
    </div>
  </div>
</div>

{% if site.propostas.size > 0 %}
  <p class="text-sm text-gray-500 mb-4"><span id="filter-count">{{ site.propostas.size }}</span> proposta(s)</p>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {% assign propostas_sorted = site.propostas | sort: "data" | reverse %}
    {% for proposta in propostas_sorted %}
      {% include proposta-card.html proposta=proposta %}
    {% endfor %}
  </div>
{% else %}
  <div class="text-center py-16 text-gray-400">
    <p class="text-lg font-medium">Ainda não há propostas registadas.</p>
    <p class="text-sm mt-1">As propostas serão adicionadas à medida que forem apresentadas.</p>
  </div>
{% endif %}

<script src="{{ '/assets/js/filter.js' | relative_url }}" defer></script>
