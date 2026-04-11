# Extends Jekyll::Drops::UrlDrop to expose custom frontmatter fields used
# in collection permalink templates (e.g. /municipios/:municipio/autarcas/:slug/).
# Jekyll 4.x UrlDrop only exposes built-in fields by default; custom frontmatter
# fields must be added explicitly.
module Jekyll
  module Drops
    class UrlDrop
      def municipio
        @obj.data["municipio"]
      end

      def freguesia
        @obj.data["freguesia"]
      end
    end
  end
end
