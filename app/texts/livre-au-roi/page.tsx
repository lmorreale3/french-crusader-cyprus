import { TextPageLayout } from "@/components/text-page-layout";
import { ManuscriptViewer } from "@/components/manuscript-viewer";

export const metadata = {
  title: "Le Livre au Roi | French Texts from Crusader Cyprus",
  description: "Le Livre au Roi (The Book of the King) - one of the most significant legal texts from the Crusader states, representing the first systematic codification of laws governing the Kingdom of Jerusalem.",
};

const transcription = [
  {
    oldFrench: "Bien sa",
    english: "Let them know well, all those who are and who are to come, that the king is held to increase and not to diminish the the rights of the crown of his kingdom; nor should he, neither by right, nor by assize, any of the castles of the realm that is of the fortresses, put into the hands of the Saracens, not for any need that he might have."
  },
  {
    oldFrench: "chent",
    english: ""
  },
  {
    oldFrench: "tous ce",
    english: ""
  },
  {
    oldFrench: "aus qui",
    english: "Neither can he nor should he any of the fortresses of the realm give or sell to the church or to any religious order."
  },
  {
    oldFrench: "sont et",
    english: ""
  },
  {
    oldFrench: "qui a ve",
    english: ""
  },
  {
    oldFrench: "nir sont, que li rois",
    english: "The king should rather pull down a castle if he sees that it is too burdonsome to the kingdom."
  },
  {
    oldFrench: "est tenus",
    english: ""
  },
  {
    oldFrench: "d'acroistre",
    english: ""
  },
  {
    oldFrench: "et de non amermer",
    english: "And if it happens that the king or the queen should wish to put any of his or her fortresses into the power of those people who are mentioned above, reason dictates that his liege men can well prevent or forbid him from doing that."
  },
  {
    oldFrench: "les droitures de la",
    english: ""
  },
  {
    oldFrench: "couroune de son real",
    english: ""
  },
  {
    oldFrench: "me; ni ne deit, par",
    english: "And for this they will not forfeit anything to the king, neither law nor by the assize of the kingdom of Jerusalem."
  },
  {
    oldFrench: "dreit ne par l'assise, nus",
    english: ""
  },
  {
    oldFrench: "des chastiaus dou real",
    english: ""
  },
  {
    oldFrench: "me, ce est des forte",
    english: "Here you will hear about what the king is required to maintain and protect, by right and by reason."
  },
  {
    oldFrench: "resses, en metre en mains",
    english: ""
  },
  {
    oldFrench: "des Sarasins, por nul",
    english: ""
  },
  {
    oldFrench: "besoing que il ait a; ni ne",
    english: "Know that the the king is required to maintain and protect and hold firm all the grants of the other kings and queens and barons of the kingdom, concerning the grants that they have made according to their rights which they possess in the kingdom just as their charters"
  },
  {
    oldFrench: "peut ni ne deit nule",
    english: ""
  },
  {
    oldFrench: "des forteresses dou re",
    english: ""
  },
  {
    oldFrench: "aume vendre ni dou",
    english: ""
  },
  {
    oldFrench: "ner a lyglise ni reli",
    english: ""
  },
  {
    oldFrench: "gion; mais bien la peut",
    english: ""
  },
  {
    oldFrench: "faire abatre li rois la",
    english: ""
  },
  {
    oldFrench: "forteresse, se il voit",
    english: ""
  },
];

export default function LivreAuRoiPage() {
  return (
    <TextPageLayout
      title="Le Livre au Roi"
      subtitle="FromThePage Transcription Project"
      sourceUrl="https://fromthepage.com/stanfordlibraries/livre-au-roi"
      introduction={
        <>
          <p className="mb-4">
            Le Livre au Roi (The Book of the King) is one of the most significant legal texts from the Crusader states. Compiled in the early thirteenth century, it represents the first systematic codification of the laws governing the Kingdom of Jerusalem.
          </p>
          <p className="mb-4">
            The text survives in a single manuscript, now preserved at the Bayerische Staatsbibliothek in Munich (Cod. Gall. 51). This Bavarian manuscript, likely produced in the fourteenth century, contains not only the Livre au Roi but also several other important legal texts from Outremer.
          </p>
          <p className="mb-4">
            The Livre au Roi provides crucial evidence for understanding the feudal institutions, judicial procedures, and social organization of the Latin Kingdom of Jerusalem. It details the rights and obligations of the king and his vassals, the procedures of the High Court, and the laws governing inheritance, marriage, and property.
          </p>
          <p>
            Scholars have debated the authorship and precise dating of the text, with most attributing it to the reign of either Amalric I (1163-1174) or his immediate successors. The text reflects a society in transition, attempting to establish stable legal institutions in the face of constant military threats and political instability.
          </p>
        </>
      }
    >
      <ManuscriptViewer
        manifestUrl="https://fromthepage.com/iiif/25000121/manifest"
        transcription={transcription}
      />
    </TextPageLayout>
  );
}
