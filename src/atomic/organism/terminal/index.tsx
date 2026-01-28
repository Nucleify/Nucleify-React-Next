'use client'
import { JSX, useEffect } from 'react'

import { Terminal } from 'primereact/terminal'
import { TerminalService } from 'primereact/terminalservice'
import type { TerminalInterface } from './types'
import { handleCommands } from './utils/handle_commands'

export function AdTerminal({
  className,
  ...props
}: TerminalInterface): JSX.Element {
  useEffect(() => {
    TerminalService.on('command', handleCommands)
    return () => {
      TerminalService.off('command', handleCommands)
    }
  }, [])

  const pt = {
    command: { className: 'ad-terminal-command' },
    response: { className: 'ad-terminal-response' },
  }

  return (
    <Terminal
      {...props}
      className={[className, 'ad-terminal'].filter(Boolean).join(' ')}
      pt={pt}
    />
  )
}
