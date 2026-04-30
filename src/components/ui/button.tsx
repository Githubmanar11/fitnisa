import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({
  children,
  className,
  ...props
}: Props) {
  return (
    <button
      className={clsx(
        `
        px-6
        py-3
        rounded-2xl
        bg-purple-500
        hover:bg-purple-400
        transition-all
        duration-300
        font-medium
        shadow-lg
        shadow-purple-500/20
        hover:scale-105
        `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
