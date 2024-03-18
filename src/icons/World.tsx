export const WorldIcon = ({ className, ...props }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      class={`icon icon-tabler icons-tabler-outline icon-tabler-world ${className}`}
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0'></path>
      <path d='M3.6 9h16.8'></path>
      <path d='M3.6 15h16.8'></path>
      <path d='M11.5 3a17 17 0 0 0 0 18'></path>
      <path d='M12.5 3a17 17 0 0 1 0 18'></path>
    </svg>
  )
}
