# Computes flat derived arrays on autarca documents from their cargos data so
# Liquid `contains` checks work without manual maintenance of redundant fields.
# Adds _cargo_freguesias and _cargo_municipios to each autarca's data.
Jekyll::Hooks.register :site, :post_read do |site|
  next unless site.collections.key?("autarcas")

  site.collections["autarcas"].docs.each do |doc|
    cargos = Array(doc.data["cargos"])
    doc.data["_cargo_freguesias"] = cargos.filter_map { |c| c["freguesia"] }.uniq
    doc.data["_cargo_municipios"] = cargos.filter_map { |c| c["municipio"] }.uniq
  end
end
