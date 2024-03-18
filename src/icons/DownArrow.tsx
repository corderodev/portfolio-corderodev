export const DownArrowIcon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      className={`icon icon-tabler icons-tabler-outline icon-tabler-select ${className}`}
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z'></path>
      <path d='M9 11l3 3l3 -3'></path>
    </svg>
  )
}
