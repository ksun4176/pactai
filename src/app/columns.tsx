"use client"

import { createColumnHelper } from "@tanstack/react-table"
import { FHIRVersion, ProcessingState } from "@/utils/types"
import { AlarmClock, CircleCheck, CircleEllipsis, CircleHelp, CircleX, FileQuestion } from "lucide-react"
import { TooltipContainer } from "./tooltip-container"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

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
 * Get the icon for the processing state
 * @param state Processing state
 * @returns Icon
 */
const getStateIcon = (state: ProcessingState) => {
  switch(state) {
    case ProcessingState.PROCESSING_STATE_NOT_STARTED:
      return <TooltipContainer tooltip={<p>Not Started</p>}>
        <AlarmClock color="orange" />
      </TooltipContainer>
    case ProcessingState.PROCESSING_STATE_PROCESSING:
      return <TooltipContainer tooltip={<p>Processing</p>}>
        <CircleEllipsis color="blue" />
      </TooltipContainer>
    case ProcessingState.PROCESSING_STATE_COMPLETED:
      return <TooltipContainer tooltip={<p>Completed</p>}>
        <CircleCheck color="green" />
      </TooltipContainer>
    case ProcessingState.PROCESSING_STATE_FAILED:
      return <TooltipContainer tooltip={<p>Failed</p>}>
        <CircleX color="red" />
      </TooltipContainer>
    default:
      return <TooltipContainer tooltip={<p>Unspecified</p>}>
        <FileQuestion color="gray" />
      </TooltipContainer>
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
export const columns = [
  columnHelper.accessor("patientId", {
    cell: info => info.getValue(),
    header: () => <span>Patient ID</span>,
    size: 84
  }),
  columnHelper.accessor("state", {
    cell: info => getStateIcon(info.getValue()),
    header: () => <span>State</span>,
    size: 40,
  }),
  columnHelper.accessor("type", {
    cell: info => info.getValue(),
    header: () => <span>Type</span>,
    size: 84,
  }),
  columnHelper.accessor("content", {
    cell: info => info.getValue(),
    header: () => <span>Content</span>,
    size: 400
  }),
  columnHelper.accessor("aiSummary", {
    cell: info => <div className="font-semibold">{info.getValue()}</div>,
    header: () => <span>AI Summary</span>,
    size: 400
  }),
  columnHelper.display({
    id: 'metadata',
    cell: props => <HoverCard>
      <HoverCardTrigger>
        {<CircleHelp color="gray" />}
      </HoverCardTrigger>
      <HoverCardContent className="w-84">
        <div className="grid grid-cols-2">
          <p className="text-muted-foreground">Created On</p>
          <p>{props.row.original.createdTime.toLocaleString()}</p>
          
          <p className="text-muted-foreground">Fetched On</p>
          <p>{props.row.original.fetchTime.toLocaleString()}</p>

          { props.row.original.processedTime &&
            <>
              <p className="text-muted-foreground">Processed On</p>
              <p>{props.row.original.processedTime.toLocaleString()}</p>
            </>
          }
          
          <p className="text-muted-foreground">FHIR Version</p>
          <p>{getFhirVersionString(props.row.original.version)}</p>
        </div>
      </HoverCardContent> 
    </HoverCard>,
    size: 28
  })
]