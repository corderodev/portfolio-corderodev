export const ButtonGallery = ({ children, active, ...props }: any) => {
  return (
    <button
      class={`h-12 px-6 sm:px-8 py-2 -mb-px text-sm text-center bg-transparent border-b whitespace-nowrap hover:text-blue-400 dark:hover:text-blue-300 ${
        active
          ? 'text-blue-600 border-blue-600 dark:text-blue-300 dark:border-blue-300'
          : 'text-black/80 border-black/20 dark:text-zinc-200 dark:border-zinc-800'
      }`}
      {...props}
    >
      {children}
    </button>
  )
}
