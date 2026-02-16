import React, {useId} from 'react' 
import { Tooltip } from 'primereact/tooltip'
import type { TooltipInterface } from '@/atomic'

export interface NucTooltipProps extends TooltipInterface {
  children: React.ReactNode;
  value: string | React.ReactNode;
}

const NucTooltip: React.FC<NucTooltipProps> = (props) => {
  const autoId = useId().replace(/:/g, '');
  const { children, value, disabled, id=autoId, ...rest } = props;
  console.log(props); 
  return (
    <>
      <Tooltip
        target={`#${id}`}
        content={value as string}
        disabled={disabled}
        {...rest}
      />
      <div id={id} className='nuc-tooltip-target' style={{ display: 'inline-block' }}>
        {children}
      </div>
    </>
  );
}
export default NucTooltip;