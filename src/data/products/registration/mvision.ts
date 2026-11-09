import { ProductDetails } from "@/types/productDetails";

export const MVISION_REGISTRATION_PRODUCTS: ProductDetails[] = [
  {
    id: "mvision-adapt-plus",
    name: "Adapt+",
    version: "1.0.2",
    company: "MVision AI",
    companyUrl: "https://mvision.ai/",
    productUrl: "https://mvision.ai/adapt/",
    githubUrl:
      "https://github.com/DLinRT-eu/dlinrteu-website/tree/main/src/data/products/registration/mvision.ts",
    description:
      "Workspace+ module that transfers existing planning contours to repeat image sets for offline adaptive radiotherapy. It offers rigid, conventional deformable, and deep learning-based deformable registration.",
    features: [
      "Automated contour propagation",
      "Rigid registration",
      "Conventional deformable image registration",
      "Deep learning deformable registration",
      "Contour propagation between image sets, including CT, synthetic CT, and CBCT examples",
      "Offline adaptive workflow support"
    ],
    category: "Registration",
    certification: "CE",
    logoUrl: "/logos/mvision-ai.png",
    website: "https://mvision.ai/adapt/",
    anatomicalLocation: ["Brain", "Pelvis", "Head & Neck", "Thorax", "Abdomen"],
    modality: ["CT", "CBCT"],
    subspeciality: "Radiation Oncology",
    diseaseTargeted: ["Multiple Cancer Types"],
    keyFeatures: [
      "Contour propagation between planning and repeat image sets",
      "Rigid, conventional deformable, and deep-learning deformable registration",
      "Uses image examples including CT, synthetic CT, and CBCT",
      "Designed for offline adaptive radiotherapy workflows",
      "Delivered through the Workspace+ AI platform"
    ],
    technicalSpecifications: {
      population: "Adults",
      input: ["CT", "CBCT", "Synthetic CT", "Structure sets"],
      inputFormat: ["DICOM", "DICOM-RTSTRUCT"],
      output: ["Propagated contours"],
      outputFormat: ["DICOM-RTSTRUCT", "DICOM REG"]
    },
    technology: {
      integration: ["Workspace+", "PACS via Workspace+", "TPS via DICOM"],
      deployment: ["Cloud-based", "On-premise"],
      triggerForAnalysis: "Manual or automated within Workspace+",
      processingTime: "Minutes per case (vendor-reported)"
    },
    regulatory: {
      ce: {
        status: "cleared",
        class: "IIa",
        type: "MDR",
        regulation: "MDR 2017/745",
        notes:
          "MVision AI announced Workspace+ CE marking as a Class IIa device under EU MDR 2017/745 on 2025-10-21; its platform page displays CE 2797. This is manufacturer-reported platform status. The certificate number, exact covered versions, and Adapt+-specific scope were not independently confirmed."
      },
      fda: {
        status: "unknown",
        notes:
          "No public FDA 510(k) for Adapt+ or Workspace+ was identified in the targeted search checked 2026-11-09. FDA records K250064, K241490, and K212915 name Dose+, Contour+, and MVision AI Segmentation, respectively. This search result is not a definitive regulator determination that no authorization exists."
      }
    },
    market: {
      onMarketSince: "2025",
      distributionChannels: [
        "MVision AI",
        "Local distributors in selected markets",
        "Workspace+ platform bundling"
      ]
    },
    partOf: {
      name: "Workspace+",
      productUrl: "https://dlinrt.eu/product/mvision-ai-workspace-plus",
      relationship: "Module"
    },
    usesAI: true,
    evidenceRigor: "E0",
    clinicalImpact: "I0",
    evidenceRigorNotes:
      "E0: Targeted PubMed and Europe PMC searches through 2026-11-09 did not identify a peer-reviewed study evaluating Adapt+ itself. Vendor pages describe the methods as clinically evaluated but do not cite the study or provide results; publications about other MVision modules or general image registration are not Adapt+ validation.",
    clinicalImpactNotes:
      "I0: No Adapt+-specific results were identified for clinical acceptability, contour-editing time, adaptive planning decisions, dosimetric effects, or patient outcomes.",
    adoptionReadiness: "R0",
    adoptionReadinessNotes:
      "R0: The reviewed public sources do not describe Adapt+-specific commissioning, local validation, QA, monitoring, or governance. This public-evidence rating does not establish whether individual sites have performed these activities.",
    evidenceVendorIndependent: false,
    evidenceMultiCenter: false,
    evidenceMultiNational: false,
    evidenceProspective: false,
    evidenceExternalValidation: false,
    releaseDate: "2025-10-28",
    lastUpdated: "2026-11-09",
    lastRevised: "2026-11-09",
    evidence: [
      {
        type: "Vendor Product Page",
        description:
          "MVision AI Adapt+ page describing contour propagation, registration methods, offline workflow, and clinician review.",
        link: "https://mvision.ai/adapt/"
      },
      {
        type: "Vendor Platform Page",
        description:
          "Workspace+ page describing DICOM service and TPS integration, Adapt+ functionality, and CE 2797 marking.",
        link: "https://mvision.ai/workspace/"
      },
      {
        type: "Company Press Release",
        description:
          "MVision AI announcement dated 2025-10-21 reporting Workspace+ Class IIa CE marking under EU MDR 2017/745; no Adapt+-specific certificate number is provided.",
        link: "https://mvision.ai/mvision-ais-workspace-receives-ce-mark-class-iia-certification/"
      },
      {
        type: "Manufacturer Launch Announcement",
        description:
          "Workspace+ launch post naming Adapt+. 2025-10-28 is used only as a public platform-launch proxy; the Adapt+ build release date is unverified.",
        link: "https://www.linkedin.com/posts/mvisionai_mvisionai-radiotherapy-artificialintelligence-activity-7388863048771395584-a99z"
      },
      {
        type: "Regulatory Register",
        description:
          "TGA ARTG entry 523011 lists radiation therapy software as Class IIb, with MVision AI Oy as manufacturer. The TGA AI-enabled device listing associates Workspace+ with contour propagation.",
        link: "https://www.tga.gov.au/resources/artg/523011"
      },
      {
        type: "Regulatory Listing",
        description:
          "TGA listing of AI-enabled devices in the ARTG, used to associate Workspace+ and contour propagation with ARTG 523011.",
        link: "https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai/manufacturing/artificial-intelligence-ai-and-medical-device-software-regulation/ai-enabled-medical-devices-artg"
      },
      {
        type: "FDA Regulatory Records",
        description:
          "FDA records for Dose+ (K250064), Contour+ (K241490), and MVision AI Segmentation (K212915); no Adapt+ 510(k) was identified in the targeted public search.",
        link: "https://api.fda.gov/device/510k.json?search=applicant:MVISION&limit=100"
      },
      {
        type: "Company Press Release",
        description:
          "MVision AI announced Workspace+ approval under Japan's PMD Act on 2026-08-07 and identified Adapt+ as an included module; the approval was not independently confirmed in a Japanese regulator record.",
        link: "https://mvision.ai/mvision-ais-workspace-approved-for-use-in-japan/"
      },
      {
        type: "Company Press Release",
        description:
          "MVision AI announced Workspace+ availability in New Zealand following WAND notification. Medsafe states WAND is a notification database, not an approval system.",
        link: "https://mvision.ai/mvision-ais-workspace-available-for-use-in-new-zealand/"
      },
      {
        type: "Regulatory Guidance",
        description:
          "Medsafe explanation that WAND notification does not imply assessment or approval of safety, efficacy, or performance.",
        link: "https://www.medsafe.govt.nz/regulatory/devicesnew/3-2Explanation.asp"
      },
      {
        type: "Bibliographic Search",
        description:
          "Targeted PubMed search for MVision, Adapt, contour propagation, and Workspace terms; no Adapt+-specific peer-reviewed performance study was identified.",
        link: "https://pubmed.ncbi.nlm.nih.gov/?term=%28MVision%5BAll+Fields%5D+OR+%22MVision+AI%22%5BAll+Fields%5D%29+AND+%28Adapt%5BAll+Fields%5D+OR+%22contour+propagation%22%5BAll+Fields%5D+OR+Workspace%5BAll+Fields%5D%29"
      },
      {
        type: "Bibliographic Search",
        description:
          "Targeted Europe PMC search; broad matches are not treated as Adapt+ validation unless a study identifies the module.",
        link: "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=%22MVision%22%20AND%20%28%22Adapt%2B%22%20OR%20%22contour%20propagation%22%20OR%20%22Workspace%2B%22%29&format=json&pageSize=100"
      },
      {
        type: "Professional Society Report",
        description:
          "AAPM Task Group 132 report on image-registration uncertainty and general radiotherapy QA/QC; not an Adapt+-specific evaluation.",
        link: "https://www.aapm.org/pubs/reports/detail.asp?docid=164"
      },
      {
        type: "DLinRT Scoring Definitions",
        description:
          "Current evidence and adoption-readiness definitions. The I0 clinical-impact field retained here uses the requested legacy scale.",
        link: "https://raw.githubusercontent.com/DLinRT-eu/dlinrteu-website/main/src/data/evidence-impact-levels.ts"
      }
    ],
    limitations: [
      "Propagated contours are assistive and require clinician review and approval before use in planning",
      "Regulatory basis is the Workspace+ platform CE mark; no Adapt+-specific clearance is published",
      "Registration accuracy depends on image quality, anatomical change and field of view",
      "No independent peer-reviewed publication or conference abstract identified at time of listing (checked 2026-09-14)",
      "No public disclosure of training or evaluation data for this module"
    ],
    source: "Vendor website; vendor documentation; press releases; conference abstracts; peer-reviewed literature"
  }
];
