import { TextPageLayout } from "@/components/text-page-layout";
import { ManuscriptViewer } from "@/components/manuscript-viewer";

export const metadata = {
  title: "Livre de Jacques d'Ibelin | French Texts from Crusader Cyprus",
  description: "The legal treatise by Jacques d'Ibelin, a prominent jurist of the Kingdom of Jerusalem, examining feudal law and court procedures in the Crusader states.",
};

const transcription = [
  {
    oldFrench: "Ci comence le livre",
    english: "Here begins the book which Jacques d'Ibelin made concerning the uses and customs of the kingdom of Jerusalem and Cyprus."
  },
  {
    oldFrench: "que Jaque d'Ibelin fist",
    english: ""
  },
  {
    oldFrench: "des usages et des",
    english: ""
  },
  {
    oldFrench: "costumes dou reaume",
    english: ""
  },
  {
    oldFrench: "de Jerusalem et de",
    english: "This book was made and composed by the noble man Sir Jacques d'Ibelin, count of Jaffa and Ascalon,"
  },
  {
    oldFrench: "Chipre.",
    english: ""
  },
  {
    oldFrench: "",
    english: ""
  },
  {
    oldFrench: "Cest livre fist et ordena",
    english: "who was one of the wisest men and the most learned in the law of the kingdom of Jerusalem that was in his time."
  },
  {
    oldFrench: "le noble home monseignor",
    english: ""
  },
  {
    oldFrench: "Jaque d'Ibelin, conte de",
    english: ""
  },
  {
    oldFrench: "Jaffe et d'Escalonne,",
    english: ""
  },
  {
    oldFrench: "qui fu un des plus sages",
    english: "And he made this book to teach those who wish to learn the assizes and usages and customs by which the High Court judges and ought to judge."
  },
  {
    oldFrench: "homes et le plus sachant",
    english: ""
  },
  {
    oldFrench: "de la lei dou reaume de",
    english: ""
  },
  {
    oldFrench: "Jerusalem qui fust en",
    english: ""
  },
  {
    oldFrench: "son tens.",
    english: ""
  },
];

export default function JacquesIbelinPage() {
  return (
    <TextPageLayout
      title="Livre de Jacques d'Ibelin"
      subtitle="FromThePage Transcription Project"
      sourceUrl="https://fromthepage.com/stanfordlibraries/jacques-ibelin"
      introduction={
        <>
          <p className="mb-4">
            The Livre de Jacques d&apos;Ibelin is a comprehensive legal treatise composed by Jacques d&apos;Ibelin, Count of Jaffa and Ascalon, one of the most distinguished jurists of the Crusader states. Written in the mid-thirteenth century, it provides an authoritative account of the customs and procedures of the High Court of the Kingdom of Jerusalem.
          </p>
          <p className="mb-4">
            Jacques d&apos;Ibelin came from one of the most prominent families in the Latin East. The Ibelins were major landholders and played crucial roles in the political and military affairs of the Crusader states. His legal expertise was renowned, and his treatise became a fundamental reference for understanding feudal law in Outremer.
          </p>
          <p className="mb-4">
            The text addresses a wide range of legal topics, including the procedures for conducting trials, the rights of vassals and lords, inheritance laws, and the proper conduct of the feudal court. It reflects the sophisticated legal culture that developed in the Crusader states, combining Western European feudal traditions with local adaptations.
          </p>
          <p>
            Several manuscript copies of this text survive, testifying to its importance and widespread use in the medieval period. The work remains essential for scholars studying the legal and social history of the Crusader states.
          </p>
        </>
      }
    >
      <ManuscriptViewer
        manifestUrl="https://fromthepage.com/iiif/collection/jacques-ibelin"
        transcription={transcription}
      />
    </TextPageLayout>
  );
}
