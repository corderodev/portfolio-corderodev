export const PointIcon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-barrier-block ${className}`}
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z' />
      <path d='M7 16v4' />
      <path d='M7.5 16l9 -9' />
      <path d='M13.5 16l6.5 -6.5' />
      <path d='M4 13.5l6.5 -6.5' />
      <path d='M17 16v4' />
      <path d='M5 20h4' />
      <path d='M15 20h4' />
      <path d='M17 7v-2' />
      <path d='M7 7v-2' />
    </svg>
  )
}
