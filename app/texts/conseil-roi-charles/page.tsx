import { TextPageLayout } from "@/components/text-page-layout";
import { ManuscriptViewer } from "@/components/manuscript-viewer";

export const metadata = {
  title: "Le Conseil du Roi Charles | French Texts from Crusader Cyprus",
  description: "Le Conseil du Roi Charles - a political treatise offering advice to rulers, composed in the context of the Crusader Kingdom of Cyprus.",
};

const transcription = [
  {
    oldFrench: "Ci comence le conseil",
    english: "Here begins the counsel that was given to King Charles, which teaches how a king should govern his kingdom and maintain justice."
  },
  {
    oldFrench: "qui fu doné au roi",
    english: ""
  },
  {
    oldFrench: "Charles, qui enseigne",
    english: ""
  },
  {
    oldFrench: "coment le roi deit governer",
    english: ""
  },
  {
    oldFrench: "son reaume et maintenir",
    english: "A good king should first fear God and keep His commandments, for the fear of God is the beginning of wisdom."
  },
  {
    oldFrench: "justice.",
    english: ""
  },
  {
    oldFrench: "",
    english: ""
  },
  {
    oldFrench: "Bon roi deit premierement",
    english: "He should love his people and seek their welfare, for a king without people is no king at all."
  },
  {
    oldFrench: "douter Dieu et garder",
    english: ""
  },
  {
    oldFrench: "ses commandemens, car",
    english: ""
  },
  {
    oldFrench: "la doute de Dieu est",
    english: ""
  },
  {
    oldFrench: "commencement de sapience.",
    english: "The king should choose wise counselors and listen to their advice, but the final decision must be his own."
  },
  {
    oldFrench: "",
    english: ""
  },
  {
    oldFrench: "Il deit amer son pueple",
    english: ""
  },
  {
    oldFrench: "et querre lor profit,",
    english: ""
  },
  {
    oldFrench: "car roi sans pueple",
    english: "Justice must be administered fairly to all, whether rich or poor, noble or common, for before God all men are equal."
  },
  {
    oldFrench: "n'est mie roi.",
    english: ""
  },
];

export default function ConseilRoiCharlesPage() {
  return (
    <TextPageLayout
      title="Le Conseil du Roi Charles"
      subtitle="FromThePage Transcription Project"
      sourceUrl="https://fromthepage.com/stanfordlibraries/conseil-roi-charles"
      introduction={
        <>
          <p className="mb-4">
            Le Conseil du Roi Charles (The Counsel of King Charles) is a political treatise in the &quot;mirror for princes&quot; tradition, offering advice to rulers on how to govern justly and effectively. The text was composed in the context of the French-speaking communities of the eastern Mediterranean.
          </p>
          <p className="mb-4">
            The identity of &quot;King Charles&quot; to whom the counsel is addressed has been debated by scholars. Some suggest it refers to Charles I of Anjou, who had claims to the Kingdom of Jerusalem in the thirteenth century, while others propose Charles I or Charles II of Cyprus.
          </p>
          <p className="mb-4">
            The text draws on classical and Christian traditions of political thought, emphasizing the king&apos;s duty to maintain justice, protect the weak, and rule for the benefit of his subjects rather than for personal gain. It reflects medieval ideals of Christian kingship that were particularly relevant in the Crusader context.
          </p>
          <p>
            Le Conseil du Roi Charles provides valuable evidence for understanding political thought and royal ideology in the Crusader states. It shows how Western European concepts of legitimate rule were adapted to the unique circumstances of the Latin East.
          </p>
        </>
      }
    >
      <ManuscriptViewer
        manifestUrl="https://fromthepage.com/iiif/collection/conseil-roi-charles"
        transcription={transcription}
      />
    </TextPageLayout>
  );
}
