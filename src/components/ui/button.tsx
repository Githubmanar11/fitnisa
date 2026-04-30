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
'px-6 py-3 rounded-2xl bg-purple-500 hover:bg-purple-400 transition-all',
className
)}
{...props}
>
{children}
</button>
)
}
