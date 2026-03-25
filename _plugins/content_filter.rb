module ContentFilter
  # Returns true if content has visible text (not just empty HTML tags/whitespace).
  # Usage: {% if content | has_content %}
  def has_content(content)
    content.to_s.gsub(/<[^>]*>/, "").strip != ""
  end
end

Liquid::Template.register_filter(ContentFilter)
