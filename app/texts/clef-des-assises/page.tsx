import { TextPageLayout } from "@/components/text-page-layout";
import { ManuscriptViewer } from "@/components/manuscript-viewer";

export const metadata = {
  title: "La Clef des Assises | French Texts from Crusader Cyprus",
  description: "La Clef des Assises (The Key to the Assizes) - a practical legal handbook providing guidance on court procedures and legal practices in the Crusader Kingdom of Jerusalem.",
};

const transcription = [
  {
    oldFrench: "Ci comence la clef",
    english: "Here begins the key to the assizes of the High Court of the kingdom of Jerusalem."
  },
  {
    oldFrench: "des assises de la haute",
    english: ""
  },
  {
    oldFrench: "cort dou reaume de",
    english: ""
  },
  {
    oldFrench: "Jerusalem.",
    english: ""
  },
  {
    oldFrench: "",
    english: "This book is called the key because just as a key opens a lock, so this book opens the understanding of the assizes and customs of the realm."
  },
  {
    oldFrench: "Cest livre est apelé",
    english: ""
  },
  {
    oldFrench: "la clef por ce que aussi",
    english: ""
  },
  {
    oldFrench: "come la clef oevre la",
    english: ""
  },
  {
    oldFrench: "serreure, aussi cest livre",
    english: "Whoever wishes to know the assizes and customs should read this book carefully, for here he will find guidance on how to conduct himself in court."
  },
  {
    oldFrench: "oevre l'entendement",
    english: ""
  },
  {
    oldFrench: "des assises et des",
    english: ""
  },
  {
    oldFrench: "costumes dou reaume.",
    english: ""
  },
  {
    oldFrench: "",
    english: ""
  },
  {
    oldFrench: "Qui veaut savoir les assises",
    english: "The book treats of pleas and defenses, of witnesses and proofs, of judgments and appeals, and of all matters pertaining to the High Court."
  },
  {
    oldFrench: "et les costumes, si lise",
    english: ""
  },
  {
    oldFrench: "bien cest livre, car ci",
    english: ""
  },
  {
    oldFrench: "trovera il enseignement",
    english: ""
  },
];

export default function ClefDesAssisesPage() {
  return (
    <TextPageLayout
      title="La Clef des Assises"
      subtitle="FromThePage Transcription Project"
      sourceUrl="https://fromthepage.com/stanfordlibraries/clef-des-assises"
      introduction={
        <>
          <p className="mb-4">
            La Clef des Assises (The Key to the Assizes) is a practical legal handbook designed to help litigants and legal practitioners navigate the complexities of the High Court of the Kingdom of Jerusalem. The title metaphorically presents the text as a &quot;key&quot; that unlocks understanding of the legal system.
          </p>
          <p className="mb-4">
            Unlike the more theoretical treatises of the Ibelin family, La Clef des Assises takes a practical approach, providing step-by-step guidance on how to conduct oneself in court. It covers topics such as how to frame legal arguments, what kinds of evidence are acceptable, and how to respond to various types of claims.
          </p>
          <p className="mb-4">
            The text reflects the oral nature of medieval legal proceedings. In the High Court, cases were argued verbally according to strict procedural rules, and a single misstep in phrasing could lead to losing one&apos;s case. This handbook helped ensure that litigants could properly navigate these complex requirements.
          </p>
          <p>
            The authorship of La Clef des Assises remains uncertain, though it was likely compiled by a legal practitioner with extensive experience in the courts of the Latin Kingdom. The text survives in several manuscripts and provides invaluable insight into the practical operation of Crusader justice.
          </p>
        </>
      }
    >
      <ManuscriptViewer
        manifestUrl="https://fromthepage.com/iiif/collection/clef-des-assises"
        transcription={transcription}
      />
    </TextPageLayout>
  );
}
