import Link from 'next/link'
import Image from 'next/image'

interface FooterProps {
  darkMode?: boolean
}

export default function Footer({ darkMode = false }: FooterProps) {
  const bgColor = darkMode ? 'bg-[#0d0d1c]' : 'bg-zinc-50'
  const textColor = darkMode ? 'text-[#e6e3fa]' : 'text-zinc-400'
  const primaryColor = darkMode ? 'text-[#FF2A55]' : 'text-primary'
  const linkHover = darkMode ? 'hover:text-[#FF4E9E]' : 'hover:text-zinc-900'

  return (
    <footer className={`w-full border-t ${darkMode ? 'border-[#474658]/15' : 'border-zinc-200/50'} ${bgColor} mt-auto py-8`}>
      <div className="flex flex-col md:flex-row justify-between items-center px-12 w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-2 items-center md:items-start mb-6 md:mb-0">
          <span className={`font-headline ${primaryColor} text-xl font-bold flex items-center gap-2`}>
            <Image 
              src="/Get It Done.png" 
              alt="Logo" 
              width={24} 
              height={24}
              className={darkMode ? 'grayscale opacity-60' : ''}
            />
            Get It Done
          </span>
          <p className={`font-headline text-xs uppercase tracking-widest ${textColor} opacity-60`}>
            &copy; {new Date().getFullYear()} Get It Done. Booking Platform for Kenya.
          </p>
        </div>
        <div className={`flex gap-8 items-center font-headline text-xs uppercase tracking-widest ${textColor} opacity-80`}>
          <Link href="/privacy" className={`${linkHover} transition-colors`}>Privacy</Link>
          <Link href="/terms" className={`${linkHover} transition-colors`}>Terms</Link>
          <Link href="/support" className={`${linkHover} transition-colors`}>Support</Link>
        </div>
      </div>
    </footer>
  )
}
