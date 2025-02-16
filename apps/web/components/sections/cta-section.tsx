import { ChevronRight, HeartHandshake } from "lucide-react"
import { buttonVariants } from "~/components/ui/button"
import { ny } from "~/lib/utils"

export default function CTASection() {
   return (
      <section id="cta">
         <div className="py-14">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden border-y p-14">
               <div className="z-10 mx-auto size-24 rounded-[2rem] border bg-white/10 p-3 shadow-2xl backdrop-blur-md lg:size-32 dark:bg-black/10">
                  <HeartHandshake className="mx-auto size-16 text-black lg:size-24 dark:text-white" />
               </div>
               <div className="z-10 mt-4 flex flex-col items-center text-center text-black dark:text-white">
                  <h1 className="text-3xl font-bold lg:text-4xl">
                     Love what you see?
                  </h1>
                  <p className="mt-2">
                     Fuel my creativity with a virtual coffee!
                  </p>
                  <a
                     href="https://nyxb.gives"
                     target="_blank"
                     rel="noreferrer"
                     className={ny(
                        buttonVariants({
                           size: "lg",
                           variant: "outline",
                        }),
                        "group mt-4 rounded-[2rem] px-6",
                     )}
                  >
                     Buy Me a Coffee
                     <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </a>
               </div>
               <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-white to-70% dark:to-black" />
            </div>
         </div>
      </section>
   )
}
