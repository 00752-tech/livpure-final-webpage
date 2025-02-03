import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function IngredientsSection() {
  const proprietary = [
    {
      name: "Silymarin",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2Fsilymarin.png&w=256&q=75",
      description: "Milk thistle extract for powerful liver support",
    },
    {
      name: "Betaine",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2Fbetaine.png&w=256&q=75",
      description: "Supports liver function and fat metabolism",
    },
    {
      name: "Berberine",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2Fberberine.png&w=256&q=75",
      description: "Helps maintain healthy blood sugar levels",
    },
  ]

  const supporting = [
    {
      name: "Molybdenum",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2Fmolybdenum.png&w=256&q=75",
      description: "Essential mineral for detoxification",
    },
    {
      name: "Glutathione",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2Fglutathione.png&w=256&q=75",
      description: "Master antioxidant for liver health",
    },
    {
      name: "Camellia Sinensis",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2FcamelliaSinensis.png&w=256&q=75",
      description: "Green tea extract for metabolism support",
    },
    {
      name: "Resveratrol",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2Fresveratrol.png&w=256&q=75",
      description: "Powerful antioxidant compound",
    },
    {
      name: "Genistein",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2Fgenistein.png&w=256&q=75",
      description: "Natural compound for liver health",
    },
    {
      name: "Chlorogenic Acid",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2FchlorogenicAcid.png&w=256&q=75",
      description: "Supports healthy metabolism",
    },
    {
      name: "Choline",
      image: "https://www.liv-pure.co/_next/image?url=%2Fimages%2Fcholine.png&w=256&q=75",
      description: "Essential nutrient for liver function",
    },
  ]

  return (
    <section className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Inside every LivPure capsule you'll find:</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">Proprietary Complex of Natural Ingredients</p>
        </div>
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Core Proprietary Complex</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {proprietary.map((ingredient, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 protect-selection">
                    <div className="aspect-square relative mb-4 flex items-center justify-center">
                      <Image
                        src={ingredient.image || "/placeholder.svg"}
                        alt={ingredient.name}
                        width={256}
                        height={256}
                        className="rounded-full object-cover mx-auto"
                      />
                    </div>
                    <h4 className="font-bold mb-2 text-center">{ingredient.name}</h4>
                    <p className="text-sm text-gray-500 text-center">{ingredient.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Supporting Complex</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {supporting.slice(0, 6).map((ingredient, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6 protect-selection">
                    <div className="aspect-square relative mb-4 flex items-center justify-center">
                      <Image
                        src={ingredient.image || "/placeholder.svg"}
                        alt={ingredient.name}
                        width={256}
                        height={256}
                        className="rounded-full object-cover mx-auto"
                      />
                    </div>
                    <h4 className="font-bold mb-2 text-center">{ingredient.name}</h4>
                    <p className="text-sm text-gray-500 text-center">{ingredient.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="md:col-start-2">
                <Card className="bg-white">
                  <CardContent className="p-6 protect-selection">
                    <div className="aspect-square relative mb-4 flex items-center justify-center">
                      <Image
                        src={supporting[6].image || "/placeholder.svg"}
                        alt={supporting[6].name}
                        width={256}
                        height={256}
                        className="rounded-full object-cover mx-auto"
                      />
                    </div>
                    <h4 className="font-bold mb-2 text-center">{supporting[6].name}</h4>
                    <p className="text-sm text-gray-500 text-center">{supporting[6].description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
