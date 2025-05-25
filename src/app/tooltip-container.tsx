import { ReactNode } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

/**
 * Container showing tooltip on hover
 */
interface TooltipContainerProps {
  children: ReactNode
  tooltip: ReactNode
}
export function TooltipContainer( props: TooltipContainerProps) {
  const { children, tooltip } = props;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          {tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}