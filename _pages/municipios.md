---
title: "Municípios"
permalink: /municipios/
description: "Eleitos e eleitas do Livre nas autarquias locais de Portugal, por município."
---
{% assign municipios_sorted = site.municipios | sort: "nome" %}
{% assign distritos = municipios_sorted | map: "distrito" | uniq | sort %}

{% for distrito in distritos %}
  <div class="mb-10">
    <h2 class="text-lg font-semibold text-gray-500 uppercase tracking-wide mb-4">Distrito de {{ distrito }}</h2>
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {% for municipio in municipios_sorted %}
        {% if municipio.distrito == distrito %}
          {% assign municipio_autarcas = site.autarcas | where: "municipio", municipio.slug | where: "ativo", true %}
          {% assign municipio_propostas = site.propostas | where: "municipio", municipio.slug %}
          <a href="{{ municipio.url | relative_url }}" class="group block bg-white rounded-xl border border-gray-200 hover:border-livre-green hover:shadow-md transition-all p-5">
            <p class="font-semibold text-gray-900 group-hover:text-livre-green transition-colors">{{ municipio.nome }}</p>
            <p class="text-sm text-gray-500 mt-1">
              {{ municipio_autarcas.size }} eleito{% if municipio_autarcas.size != 1 %}s{% endif %}
              {% if municipio_propostas.size > 0 %}
                &middot; {{ municipio_propostas.size }} proposta{% if municipio_propostas.size != 1 %}s{% endif %}
              {% endif %}
            </p>
          </a>
        {% endif %}
      {% endfor %}
    </div>
  </div>
{% endfor %}
