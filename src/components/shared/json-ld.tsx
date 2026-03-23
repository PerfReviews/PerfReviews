interface JsonLdProps {
  data: object;
}

export const JsonLd = ({ data }: JsonLdProps) => (
  <div
    dangerouslySetInnerHTML={{
      __html: `<script type="application/ld+json">${JSON.stringify(data)}</script>`,
    }}
  />
);
