export const ButtonGallery = ({ children, active, ...props }: any) => {
  return (
    <button
      class={`h-12 px-8 py-2 -mb-px text-sm text-center bg-transparent border-b whitespace-nowrap ${
        active
          ? 'text-yellow-200 border-yellow-200'
          : 'text-zinc-200 border-zinc-800'
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
