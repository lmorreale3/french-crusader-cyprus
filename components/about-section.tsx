export function AboutSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-foreground">
          About the Project
        </h2>
        <div className="space-y-4 text-foreground/80 text-lg leading-relaxed">
          <p>
            The French Texts from Crusader Cyprus project brings together
            scholars from the University of Pennsylvania, the University of
            Rhode Island, and Tel Aviv University to create a comprehensive
            digital resource for the study of medieval French legal texts from
            the Eastern Mediterranean.
          </p>
          <p>
            These texts, composed in Old French during the Crusader period,
            represent a unique legal tradition that developed in the Latin
            Kingdom of Jerusalem and the subsequent Kingdom of Cyprus. They
            provide invaluable insights into medieval law, society, and the
            French language as it was used in the Levant.
          </p>
          <p>
            Our digital editions feature high-resolution manuscript images
            provided through the International Image Interoperability Framework
            (IIIF), alongside diplomatic transcriptions and scholarly English
            translations. Each text is accompanied by detailed introductions and
            annotations to aid in understanding these complex historical
            documents.
          </p>
        </div>
      </div>
    </section>
  );
}
