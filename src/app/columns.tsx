"use client"

import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { FHIRVersion, ProcessingState } from "@/utils/types"

// Define your row shape
export type ResourceRow = {
  content: string
  aiSummary?: string
  patientId: string
  type: string
  createdTime: Date
  fetchTime: Date
  state: ProcessingState
  processedTime?: Date
  version: FHIRVersion
}

/**
 * Get the string representation for the processing state
 * @param state Processing state
 * @returns String representation
 */
const getStateString = (state: ProcessingState) => {
  switch(state) {
    case ProcessingState.PROCESSING_STATE_NOT_STARTED:
      return "Not Started";
    case ProcessingState.PROCESSING_STATE_PROCESSING:
      return "Processing";
    case ProcessingState.PROCESSING_STATE_COMPLETED:
      return "Completed";
    case ProcessingState.PROCESSING_STATE_FAILED:
      return "Failed";
    default:
      return "Unspecified";
  }
}

/**
 * Get the string representation for the FHIR version
 * @param state FHIR version
 * @returns String representation
 */
const getFhirVersionString = (version: FHIRVersion) => {
  switch(version) {
    case FHIRVersion.FHIR_VERSION_R4:
      return "R4";
    case FHIRVersion.FHIR_VERSION_R4B:
      return "R4B";
    default:
      return "Unspecified";
  }
}

const columnHelper = createColumnHelper<ResourceRow>();
const maxHeight = 100;
export const columns: ColumnDef<ResourceRow, string>[] = [
  columnHelper.accessor("content", {
    cell: info => <div
      style={{
        overflow: "hidden",
        maxHeight: maxHeight,
      }}
    >
      {info.getValue()}
    </div>,
    header: () => <span>Content</span>,
    size: 400
  }),
  columnHelper.accessor("aiSummary", {
    cell: info => <div
      style={{
        overflow: "hidden",
        maxHeight: maxHeight,
      }}
    >
      {info.getValue()}
    </div>,
    header: () => <span>AI Summary</span>,
    size: 400
  }),
  columnHelper.group({
    header: 'Metadata',
    columns: [
      columnHelper.accessor("patientId", {
        cell: info => info.getValue(),
        header: () => <span>Patient ID</span>,
        size: 100
      }),
      columnHelper.accessor("type", {
        cell: info => info.getValue(),
        header: () => <span>Type</span>,
        size: 150
      }),
      columnHelper.accessor("createdTime", {
        cell: info => info.getValue<Date>().toString(),
        header: () => <span>Created At</span>,
        size: 200
      }),
      columnHelper.accessor("fetchTime", {
        cell: info => info.getValue<Date>().toString(),
        header: () => <span>Fetched At</span>,
        size: 200
      }),
      columnHelper.accessor("state", {
        cell: info => getStateString(info.getValue()),
        header: () => <span>State</span>,
        size: 100
      }),
      columnHelper.accessor("processedTime", {
        cell: info => info.getValue() ? info.getValue<Date>().toString() : undefined,
        header: () => <span>Processed At</span>,
        size: 200
      }),
      columnHelper.accessor("version", {
        cell: info => getFhirVersionString(info.getValue()),
        header: () => <span>FHIR Version</span>,
        size: 100
      }),
    ]
  })
]