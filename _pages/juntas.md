---
title: "Freguesias"
permalink: /freguesias/
description: "Assembleias de Freguesia com representação do Livre."
---
{% assign freguesias_sorted = site.freguesias | sort: "nome" %}
{% assign municipio_groups = site.municipios | sort: "nome" %}

{% for municipio in municipio_groups %}
  {% assign mun_freguesias = freguesias_sorted | where: "municipio", municipio.slug %}
  {% if mun_freguesias.size > 0 %}
    <div class="mb-8">
      <h2 class="text-lg font-semibold text-gray-500 uppercase tracking-wide mb-4">
        <a href="{{ municipio.url | relative_url }}" class="hover:text-livre-green transition-colors">{{ municipio.nome }}</a>
      </h2>
      <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {% for freguesia in mun_freguesias %}
          <a href="{{ freguesia.url | relative_url }}" class="group block bg-white rounded-xl border border-gray-200 hover:border-livre-green hover:shadow-md transition-all p-5">
            <p class="font-semibold text-gray-900 group-hover:text-livre-green transition-colors">{{ freguesia.nome }}</p>
            {% assign eleitos = site.autarcas | where_exp: "a", "a.freguesias contains freguesia.slug" | where: "ativo", true %}
            <p class="text-sm text-gray-500 mt-1">
              {% if eleitos.size == 1 %}1 eleito{% else %}{{ eleitos.size }} eleitos{% endif %}
            </p>
          </a>
        {% endfor %}
      </div>
    </div>
  {% endif %}
{% endfor %}
