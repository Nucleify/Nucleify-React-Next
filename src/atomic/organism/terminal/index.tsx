'use client'
import { JSX, useEffect } from 'react'

import { Terminal } from 'primereact/terminal'
import { TerminalService } from 'primereact/terminalservice'
import styles from './index.module.scss'
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

  const cx = (...classes: (string | undefined | null | false)[]) =>
    classes.filter(Boolean).join(' ')

  const pt = {
    command: { className: styles['ad-terminal-command'] },
    response: { className: styles['ad-terminal-response'] },
    container: { className: styles['ad-terminal-content'] },
  }

  return (
    <Terminal
      {...props}
      className={cx(className, styles['ad-terminal'])}
      pt={pt}
    />
  )
}
