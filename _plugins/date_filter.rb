module DateFilter
  # Usage: {{ page.some_date | date_pt }}            → "outubro 2025"
  #        {{ page.some_date | date_pt: "%d de %B de %Y" }} → "01 de outubro de 2025"
  # %B is replaced with the Portuguese month name from _data/pt.yml.
  # All other strftime specifiers pass through unchanged.
  def date_pt(date, format = "%B %Y")
    return "" unless date

    d = date.is_a?(String) ? Date.parse(date) : date.to_date
    months = @context.registers[:site].data.dig("pt", "meses")
    result = format.gsub("%B", months[d.month - 1])
    d.strftime(result)
  end
end

Liquid::Template.register_filter(DateFilter)
