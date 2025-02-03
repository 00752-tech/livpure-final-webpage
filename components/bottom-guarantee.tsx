import Image from "next/image"

export function BottomGuarantee() {
  return (
    <section className="py-12 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative w-[200px] h-[200px] mb-6">
            <Image
              src="/Moneyback-Free-PNG-Image.png"
              alt="Money Back Guarantee Seal"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Your purchase is protected by our 100% satisfaction guarantee. Try LivPure today risk-free.
          </p>
        </div>
      </div>
    </section>
  )
}

