---
layout: default
title: "Início"
---
<!-- Hero -->
<div class="bg-gradient-to-br from-livre-dark to-[#1e2600] text-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
    <div class="flex items-center justify-between gap-8">
      <div class="max-w-2xl">
        <div class="inline-flex items-center gap-2 bg-livre-green/20 text-livre-green px-3 py-1 rounded-full text-sm font-medium mb-6">
          <span class="w-2 h-2 rounded-full bg-livre-green"></span>
          Mandato 2025–2029
        </div>
        <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Autarcas do Livre
        </h1>
        <p class="text-gray-300 text-lg mb-8">
          Acompanha o trabalho dos eleitos e eleitas do Livre nas câmaras municipais, assembleias municipais e assembleias de freguesia em todo o país.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="{{ '/municipios/' | relative_url }}" class="inline-flex items-center gap-2 bg-livre-green hover:bg-livre-green-dark text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Ver municípios
          </a>
          <a href="{{ '/propostas/' | relative_url }}" class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Ver propostas
          </a>
        </div>
      </div>
      <img src="{{ '/assets/images/livre.svg' | relative_url }}" alt="Livre" class="hidden md:block w-72 h-72 shrink-0 opacity-90">
    </div>
  </div>
</div>

<!-- Stats -->
<div class="max-w-6xl mx-auto px-4 sm:px-6 -mt-8">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {% assign total_municipios = site.municipios | size %}
    {% assign total_autarcas = site.autarcas | where: "ativo", true | size %}
    {% assign total_propostas = site.propostas | size %}
    {% assign total_freguesias = site.freguesias | size %}
    <a href="{{ '/municipios/' | relative_url }}" class="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm hover:border-livre-green hover:bg-livre-green-light transition-colors block">
      <p class="text-3xl font-bold text-livre-green">{{ total_municipios }}</p>
      <p class="text-sm text-gray-600 mt-1">Município{% if total_municipios != 1 %}s{% endif %}</p>
    </a>
    <a href="{{ '/autarcas/' | relative_url }}" class="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm hover:border-livre-green hover:bg-livre-green-light transition-colors block">
      <p class="text-3xl font-bold text-livre-green">{{ total_autarcas }}</p>
      <p class="text-sm text-gray-600 mt-1">Autarca{% if total_autarcas != 1 %}s{% endif %}</p>
    </a>
    <a href="{{ '/freguesias/' | relative_url }}" class="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm hover:border-livre-green hover:bg-livre-green-light transition-colors block">
      <p class="text-3xl font-bold text-livre-green">{{ total_freguesias }}</p>
      <p class="text-sm text-gray-600 mt-1">Freguesia{% if total_freguesias != 1 %}s{% endif %}</p>
    </a>
    <a href="{{ '/propostas/' | relative_url }}" class="bg-white rounded-xl border border-gray-200 p-5 text-center shadow-sm hover:border-livre-green hover:bg-livre-green-light transition-colors block">
      <p class="text-3xl font-bold text-livre-green">{{ total_propostas }}</p>
      <p class="text-sm text-gray-600 mt-1">Proposta{% if total_propostas != 1 %}s{% endif %}</p>
    </a>
  </div>
</div>

<!-- Autarcas grid -->
<div class="max-w-6xl mx-auto px-4 sm:px-6 py-14">
  <div class="flex items-center justify-between mb-6">
    <h2 class="text-2xl font-bold text-livre-dark">Eleitos e Eleitas</h2>
    <a href="{{ '/autarcas/' | relative_url }}" class="text-sm text-livre-green hover:text-livre-green-dark transition-colors font-medium">Ver todos →</a>
  </div>
  <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
    {% assign autarcas_ativos = site.autarcas | where: "ativo", true | sort: "nome" %}
    {% for autarca in autarcas_ativos limit:10 %}
      {% include autarca-card.html autarca=autarca %}
    {% endfor %}
  </div>
</div>

<!-- Municípios -->
<div class="bg-white border-t border-gray-100">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 py-14">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl font-bold text-livre-dark">Municípios</h2>
      <a href="{{ '/municipios/' | relative_url }}" class="text-sm text-livre-green hover:text-livre-green-dark transition-colors font-medium">Ver todos →</a>
    </div>
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {% assign municipios_sorted = site.municipios | sort: "nome" %}
      {% for municipio in municipios_sorted %}
        {% assign mun_autarcas = site.autarcas | where: "municipio", municipio.slug | where: "ativo", true %}
        <a href="{{ municipio.url | relative_url }}" class="group block bg-gray-50 hover:bg-livre-green-light border border-gray-200 hover:border-livre-green rounded-xl p-4 transition-all">
          <p class="font-semibold text-gray-800 group-hover:text-livre-green transition-colors">{{ municipio.nome }}</p>
          <p class="text-xs text-gray-500 mt-1">{{ mun_autarcas.size }} eleito{% if mun_autarcas.size != 1 %}s{% endif %}</p>
        </a>
      {% endfor %}
    </div>
  </div>
</div>
