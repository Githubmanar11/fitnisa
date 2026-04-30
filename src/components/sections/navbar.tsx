import { Button } from '@/components/ui/button'

export function Navbar() {
  return (
    <header className="
      border-b
      border-white/10
      sticky
      top-0
      backdrop-blur-xl
      bg-black/30
      z-50
    ">
      <div className="
        max-w-7xl
        mx-auto
        px-6
        h-20
        flex
        items-center
        justify-between
      ">
        <h1 className="text-2xl font-bold">
          FitNisa
        </h1>

        <nav className="
          hidden
          md:flex
          items-center
          gap-8
        ">
          <a href="#">الرئيسية</a>
          <a href="#">البرامج</a>
          <a href="#">المدونة</a>
          <a href="#">الاشتراكات</a>
        </nav>

        <Button>
          ابدئي الآن
        </Button>
      </div>
    </header>
  )
}
