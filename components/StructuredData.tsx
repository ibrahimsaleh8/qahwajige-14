export function StructuredData({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: name,
    description: description,
    url: url,
    telephone: "+966506142019",
    address: {
      "@type": "PostalAddress",
      addressLocality: "الرياض",
      addressCountry: "SA",
    },
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
