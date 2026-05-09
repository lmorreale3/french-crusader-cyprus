/**
 * French Texts from Crusader Cyprus - Configuration
 * Last updated: 2026-04-20T03:20:00Z
 * 
 * MANIFEST IDs:
 * - livre-au-roi: 25000121 (COLOR BSB Cod.gall. 51 from digitale-sammlungen.de)
 * - livres-du-pledeant: beta.fromthepage.com/iiif/32235576/manifest (Venice MS)
 */

export interface TextConfig {
  slug: string
  title: string
  sourceType: "fromthepage" | "iiif-manifest"
  manifestUrl: string
  fromthePageUrl?: string
  canvasFilter?: {
    start: number
    end: number
  }
  introduction: string
}

// COLOR VERSION - Livre au Roi uses manifest 25000121 with digitale-sammlungen.de images
const LIVRE_AU_ROI_MANIFEST = "https://fromthepage.com/iiif/25000121/manifest"

// Venice MS for Livres du pledeant
const LIVRES_DU_PLEDEANT_MANIFEST = "https://beta.fromthepage.com/iiif/32235576/manifest"

export const textsConfig: TextConfig[] = [
  {
    slug: "livre-au-roi",
    title: "Le Livre au Roi",
    sourceType: "fromthepage",
    manifestUrl: LIVRE_AU_ROI_MANIFEST,
    fromthePageUrl: "https://fromthepage.com/fordham/french-of-outremer/livre-au-roi-bsb-cod-gall-51",
    introduction: `Le Livre au Roi (The Book of the King) is one of the most significant legal texts from the Crusader states. Compiled in the early thirteenth century, it represents the first systematic codification of the laws governing the Kingdom of Jerusalem.

The text survives in a single manuscript, now preserved at the Bayerische Staatsbibliothek in Munich (Cod. Gall. 51). This Bavarian manuscript, likely produced in the fourteenth century, contains not only the Livre au Roi but also several other important legal texts from Outremer.

The Livre au Roi provides crucial evidence for understanding the feudal institutions, judicial procedures, and social organization of the Latin Kingdom of Jerusalem. It details the rights and obligations of the king and his vassals, the procedures of the High Court, and the laws governing inheritance, marriage, and property.

Scholars have debated the authorship and precise dating of the text, with most attributing it to the reign of either Amalric I (1163-1174) or his immediate successors. The text reflects a society in transition, attempting to establish stable legal institutions in the face of constant military threats and political instability.`,
  },
  {
    slug: "livre-de-jacques-d-ibelin",
    title: "Livre de Jacques d'Ibelin",
    sourceType: "fromthepage",
    manifestUrl: "https://beta.fromthepage.com/iiif/25000006/manifest",
    fromthePageUrl: "https://beta.fromthepage.com/fordham/french-of-outremer/livre-de-jacques-d-ibelin",
    introduction: `The Livre de Jacques d'Ibelin is a comprehensive legal treatise composed by Jacques d'Ibelin, Count of Jaffa, in the mid-thirteenth century. As a member of the powerful Ibelin family, Jacques had intimate knowledge of the legal customs of the Crusader states.

Jacques d'Ibelin was the son of Jean d'Ibelin, the Old Lord of Beirut, and nephew of the famous jurist Philippe de Novare. His treatise builds upon the earlier work of his uncle while providing his own interpretations and expansions of Crusader law.

The Livre de Jacques d'Ibelin covers a wide range of legal topics, including feudal obligations, the procedures of the courts, criminal and civil law, and the customs governing property and inheritance. It is particularly valuable for its detailed discussions of legal procedure and the rights of various classes of society.

This text has been preserved in multiple manuscript copies, attesting to its widespread circulation and influence in the medieval Eastern Mediterranean. It remained an authoritative legal reference well into the period of Lusignan rule in Cyprus.`,
  },
  {
    slug: "la-clef-des-assises",
    title: "La Clef des Assises",
    sourceType: "fromthepage",
    manifestUrl: "https://fromthepage.com/iiif/25000008/manifest",
    fromthePageUrl: "https://fromthepage.com/fordham/french-of-outremer/la-clef-des-assises",
    introduction: `La Clefs des Assises (The Key to the Assizes) is a practical legal handbook designed to guide practitioners through the complex procedures of the Crusader courts. Unlike the more theoretical treatises, this text focuses on the practical application of law.

The text takes the form of a systematic guide to legal procedure, organized around the various types of cases that might come before the courts. It provides sample pleadings, describes the proper forms of legal argument, and explains the technicalities that could make or break a case.

La Clefs des Assises is particularly valuable for understanding how the theoretical principles of Crusader law were actually applied in practice. It reveals the highly technical nature of legal procedure in the Crusader states, where a single procedural error could result in the loss of a case.

The text also provides insight into the legal education of the period, as it was clearly designed as a teaching tool for aspiring lawyers and judges. Its practical focus makes it an essential complement to the more theoretical legal treatises.`,
  },
  {
    slug: "livre-de-geoffroy-le-tort",
    title: "Livre de Geoffroy le Tort",
    sourceType: "fromthepage",
    manifestUrl: "https://fromthepage.com/iiif/25000001/manifest",
    fromthePageUrl: "https://fromthepage.com/fordham/french-of-outremer/livre-de-geoffroy-le-tort",
    introduction: `The Livre de Geoffrey le Tort is a legal treatise attributed to Geoffrey le Tort, a prominent jurist of the thirteenth century Crusader states. The text represents an important contribution to the legal literature of Outremer.

Geoffrey le Tort was active during a particularly turbulent period in Crusader history, and his work reflects the legal challenges faced by a society under constant external pressure. His treatise addresses both the theoretical foundations of Crusader law and its practical application.

The text is notable for its clear organization and systematic approach to legal questions. Geoffrey le Tort draws upon earlier legal authorities while adding his own interpretations and analyses. His work demonstrates the sophisticated legal culture that developed in the Crusader states.

This treatise has been less studied than some of the other major legal texts from Outremer, making our digital edition an important contribution to the field. The transcription and translation presented here make Geoffrey le Tort's work accessible to a new generation of scholars.`,
  },
  {
    slug: "le-conseil-du-roi-charles",
    title: "Le Conseil du Roi Charles",
    sourceType: "iiif-manifest",
    manifestUrl: "https://fromthepage.com/iiif/32240001/manifest",
    introduction: `Le Conseil du Roi Charles (The Counsel of King Charles) is a collection of royal advice and administrative documents from the Angevin period in the Kingdom of Jerusalem and Cyprus. These texts provide valuable insight into royal governance and administration.

The documents in this collection date from the period of Angevin influence in the Eastern Mediterranean, when the house of Anjou sought to extend its power into the Crusader states. They reflect the administrative practices and political concerns of this era.

The Conseil du Roi Charles includes various types of documents, from formal royal decrees to more informal advice and correspondence. Together, they paint a picture of medieval governance in action, showing how royal authority was exercised and maintained.

These texts are particularly valuable for understanding the relationship between the Crusader states and the major powers of Western Europe. They document the diplomatic, military, and administrative connections that linked Outremer to the broader Mediterranean world.`,
  },
  {
    slug: "military-service-judicial-combat",
    title: "Two Small Works on Military Service and Judicial Combat",
    sourceType: "fromthepage",
    manifestUrl: "https://fromthepage.com/iiif/32268059/manifest",
    fromthePageUrl: "https://fromthepage.com/laurakmorrealellc/crusader-courts-legal-texts/bnf-ms-francais-12206-ff-197r-204v",
    introduction: `These two short treatises address the important topics of military service and judicial combat in the Crusader states. Though brief, they provide essential information about military obligations and the practice of trial by battle.

The first treatise discusses the military obligations of vassals in the Kingdom of Jerusalem. It details the types of service owed, the conditions under which service was required, and the penalties for failing to perform one's military duties. This text is crucial for understanding the feudal military system of the Crusader states.

The second treatise concerns judicial combat, a form of trial in which the parties to a dispute fought to determine the outcome of the case. It describes the procedures governing such combats, the circumstances under which they were permitted, and the rights and obligations of the combatants.

Together, these texts illuminate two fundamental aspects of Crusader society: the military organization that defended the Latin East and the judicial procedures that resolved disputes. They complement the larger legal treatises by providing detailed information on these specific topics.`,
  },
  {
    slug: "livres-du-pledeant",
    title: "Les Livres du plédeant et du plaidoyer",
    sourceType: "fromthepage",
    manifestUrl: LIVRES_DU_PLEDEANT_MANIFEST,
    fromthePageUrl: "https://beta.fromthepage.com/laurakmorrealellc/crusader-courts-legal-texts/venicems",
    introduction: `Les Livres du plédeant et du plaidoyer (The Books of the Pleader and of Pleading) is a comprehensive guide to legal advocacy in the Crusader courts. This text was designed to train lawyers in the art of legal argument and courtroom procedure.

The text is divided into two main sections. The first, the Livre du plédeant, focuses on the role and responsibilities of the legal advocate. It describes the qualifications required to practice law, the ethical obligations of advocates, and the techniques of effective legal representation.

The second section, the Livre du plaidoyer, addresses the actual practice of pleading in court. It provides detailed guidance on how to construct legal arguments, present evidence, and respond to opposing counsel. The text includes numerous examples of proper and improper pleading.

This work is invaluable for understanding the legal profession in the Crusader states. It reveals a sophisticated legal culture with professional advocates, formal training, and established ethical standards. The text also provides practical insight into how cases were actually argued in the courts of Outremer.`,
  },
  {
    slug: "treatise-on-horses",
    title: "Treatise on Horses",
    sourceType: "fromthepage",
    manifestUrl: "https://beta.fromthepage.com/iiif/32268052/manifest",
    fromthePageUrl: "https://beta.fromthepage.com/laurakmorrealellc/crusader-courts-legal-texts/catania-vent-27-pp-121-171",
    introduction: `The Treatise on Horses is a unique text that combines practical veterinary knowledge with legal considerations concerning horses in the Crusader states. Given the crucial importance of horses in medieval warfare and society, this text addresses a matter of great significance.

The treatise covers various aspects of horse care and management, from feeding and grooming to the treatment of common ailments and injuries. It draws upon both Western European and Eastern Mediterranean traditions of hippiatry, reflecting the cultural synthesis that characterized the Crusader states.

Beyond veterinary matters, the text also addresses the legal issues surrounding horses. It discusses the laws governing the sale and purchase of horses, the liability for injuries caused by horses, and the obligations of those who care for horses belonging to others. These legal provisions reflect the high value placed on horses in Crusader society.

This text is preserved in a manuscript from Catania, suggesting the continued circulation of Crusader texts in the broader Mediterranean world after the fall of the Latin states. Our digital edition makes this important but little-known text available for scholarly study.`,
  },
]

export function getTextBySlug(slug: string): TextConfig | undefined {
  return textsConfig.find((text) => text.slug === slug)
}

export function getAllTextSlugs(): string[] {
  return textsConfig.map((text) => text.slug)
}
