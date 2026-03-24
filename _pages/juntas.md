---
title: "Juntas de Freguesia"
permalink: /juntas/
description: "Eleitos e eleitas do Livre nas assembleias de freguesia de Lisboa."
---
<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
  {% assign juntas_sorted = site.juntas | sort: "nome" %}
  {% for junta in juntas_sorted %}
    <a href="{{ junta.url | relative_url }}" class="group block bg-white rounded-xl border border-gray-200 hover:border-livre-green hover:shadow-md transition-all p-5">
      <p class="font-semibold text-gray-900 group-hover:text-livre-green transition-colors">{{ junta.nome }}</p>
      {% assign eleitos = site.autarcas | where_exp: "a", "a.juntas contains junta.slug" | where: "ativo", true %}
      <p class="text-sm text-gray-500 mt-1">
        {% if eleitos.size == 1 %}1 eleito{% else %}{{ eleitos.size }} eleitos{% endif %}
      </p>
    </a>
  {% endfor %}
</div>
