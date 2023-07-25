import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full py-2 px-4 text-sm font-semibold text-slate-900 bg-custom-yellow hover:bg-custom-darkyellow focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-custom-darkyellow',
  secondary:
    'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400',
  disabled:
    'opacity-50 cursor-not-allowed'
}

export function Button({ variant = 'primary', className, href, disabled, ...props }) {
  className = clsx(styles[variant], className, disabled && styles.disabled)

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} disabled={disabled} />
  )
}
