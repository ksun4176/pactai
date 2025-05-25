import { EHRResourceIdentifier, FHIRVersion, ProcessingState, ResourceWrapper } from "@/utils/types";

export const patientIdentifiers: EHRResourceIdentifier[] = [
  {
    key: "1",
    uid: "1",
    patientId: "1"
  },
  {
    key: "2",
    uid: "2",
    patientId: "2"
  },
  {
    key: "3",
    uid: "3",
    patientId: "3"
  },
];
 
export const resources: ResourceWrapper[] = [
  // Patient One
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_COMPLETED,
        createdTime: new Date("05 October 2011 14:48 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 14:49 UTC").toISOString(),
        processedTime: new Date("05 October 2011 14:52 UTC").toISOString(),
        identifier: patientIdentifiers[0],
        resourceType: "Procedure",
        version: FHIRVersion.FHIR_VERSION_UNSPECIFIED
      },
      humanReadableStr: "Routine Appendectomy",
      aiSummary: "Routine Appedectomy was performed on 2011-04-05 by Dr Cecil Surgeon for an inflamed appendix in retro-caecal position",
    },
  },
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_UNSPECIFIED,
        createdTime: new Date("05 October 2011 14:50 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 14:51 UTC").toISOString(),
        identifier: patientIdentifiers[0],
        resourceType: "Condition",
        version: FHIRVersion.FHIR_VERSION_UNSPECIFIED
      },
      humanReadableStr: "Mild Fever",
    },
  },
  // Patient Two
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_NOT_STARTED,
        createdTime: new Date("05 October 2011 14:55 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 14:56 UTC").toISOString(),
        identifier: patientIdentifiers[1],
        resourceType: "Procedure",
        version: FHIRVersion.FHIR_VERSION_R4
      },
      humanReadableStr: "Biopsy of suspected melanoma L) arm",
    },
  },
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_FAILED,
        createdTime: new Date("05 October 2011 14:57 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 14:58 UTC").toISOString(),
        identifier: patientIdentifiers[1],
        resourceType: "Condition",
        version: FHIRVersion.FHIR_VERSION_R4
      },
      humanReadableStr: "Severe malignant neoplastic disease",
    },
  },
  // Patient Three
  {
    resource: {
      metadata: {
        state: ProcessingState.PROCESSING_STATE_PROCESSING,
        createdTime: new Date("05 October 2011 14:59 UTC").toISOString(),
        fetchTime: new Date("05 October 2011 15:00 UTC").toISOString(),
        identifier: patientIdentifiers[2],
        resourceType: "CarePlan",
        version: FHIRVersion.FHIR_VERSION_R4B
      },
      humanReadableStr: "A simple care plan to indicate a patient taking their weight once a day because of obesity.",
    },
  }
]
