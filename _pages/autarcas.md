---
title: "Autarcas"
permalink: /autarcas/
description: "Todos os eleitos e eleitas do Livre nas autarquias locais de Portugal."
---
<div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
  {% assign autarcas_ativos = site.autarcas | where: "ativo", true | sort: "nome" %}
  {% for autarca in autarcas_ativos %}
    {% include autarca-card.html autarca=autarca %}
  {% endfor %}
</div>
