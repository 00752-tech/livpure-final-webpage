import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Scale } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Liver Support",
      description: "LivPure claims their blend of natural ingredients may support optimal liver health and function.",
    },
    {
      icon: Zap,
      title: "Energy Levels",
      description: "Users of LivPure report experiencing increased vitality and natural energy throughout their day.",
    },
    {
      icon: Scale,
      title: "Weight Management",
      description: "LivPure suggests their formula may support healthy metabolism and natural weight management goals.",
    },
  ]

  return (
    <section id="benefits" className="py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Benefits of LivPure</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
            Here are the key benefits that LivPure claims their supplement can provide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="p-6">
                <div className="mb-4 rounded-full w-12 h-12 flex items-center justify-center bg-slate-100">
                  <benefit.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-500">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
