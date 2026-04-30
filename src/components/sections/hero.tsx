import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="
      relative
      overflow-hidden
      py-32
      px-6
    ">
      {/* إضافة الخلفية هنا */}
      <div className="
        absolute
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.15),transparent_50%)]
      "/>

      <div className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        items-center
      ">
        {/* باقي محتواك كما هو دون تغيير */}
        <div className="space-y-8">
          <div className="
            inline-flex
            items-center
            rounded-full
            border
            border-purple-500/20
            bg-purple-500/10
            px-4
            py-2
            text-sm
          ">
            ✨ منصة صحة ولياقة ذكية
          </div>

          <h1 className="
            text-5xl
            md:text-7xl
            leading-tight
            font-bold
          ">
            ابدئي رحلتكِ الصحية
            بطريقة تناسب حياتكِ
          </h1>

          <p className="
            text-zinc-400
            text-lg
            leading-relaxed
            max-w-xl
          ">
            خطط غذائية وتمارين مخصصة
            مدعومة بالذكاء الاصطناعي
            مع خصوصية كاملة.
          </p>

          <div className="
            flex
            flex-col
            sm:flex-row
            gap-4
          ">
            <Button>
              ابدئي مجانًا
            </Button>

            <Button className="
              bg-white
              text-black
              hover:bg-zinc-200
            ">
              مشاهدة المميزات
            </Button>
          </div>
        </div>

        <div className="
          relative
          h-[500px]
          rounded-[40px]
          border
          border-white/10
          bg-gradient-to-b
          from-purple-500/20
          to-pink-500/10
          backdrop-blur-xl
        ">
          {/* هنا يمكنك إضافة صورة بطلة الموقع لاحقاً */}
        </div>
      </div>
    </section>
  )
}
