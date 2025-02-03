"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, User, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Zoe B.",
      rating: 5,
      comment:
        "After 2 months of using LivPure, I've noticed a significant improvement in my energy levels and I've lost 15 pounds!",
      date: "August 2023",
    },
    {
      name: "Axel R.",
      rating: 4,
      comment:
        "LivPure has helped me manage my weight and improve my overall well-being. The natural ingredients make a real difference.",
      date: "July 2023",
    },
    {
      name: "Lena K.",
      rating: 5,
      comment:
        "I was skeptical at first, but LivPure has exceeded my expectations. My liver function tests have improved and I feel great!",
      date: "September 2023",
    },
  ]

  const handleClick = (url: string) => {
    window.location.href = url
  }

  return (
    <section className="py-24 bg-white" id="reviews">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">LivPure Reviews: Customer Experiences</h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
            Discover what people are saying about their experience with LivPure supplement
          </p>
          <p className="text-sm text-gray-500">
            *Individual results may vary. These statements have not been evaluated by the FDA.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="text-gray-500 italic mb-4">"{review.comment}"</blockquote>
                <div className="flex items-center gap-2">
                  <User className="w-10 h-10 text-gray-400" />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-slate-100 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-4">About These Reviews</h3>
          <p className="mb-4">
            The reviews shared above represent individual experiences with LivPure. Results can vary from person to
            person. These testimonials are based on the experiences of a few customers and you may not have similar
            results.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Watch: Honest LivPure Review - Does It Really Work for Weight Loss?
          </h3>
          <div className="aspect-video mb-12">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/qHwDe5nB2Zs"
              title="LivPure Review - Honest Customer Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="space-y-8 bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                LivPure Explained: A Comprehensive Review and Transcript
              </h4>
              <p className="text-gray-600">
                Discover how LivPure is transforming lives through its innovative approach to weight management
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h5 className="text-xl font-semibold text-[#0095E1] mb-3">
                  Are You Tired of Battling Stubborn Weight?
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  If you've been struggling with weight loss, feeling frustrated and defeated, you're not alone.
                  Countless diets, endless workouts, and still the scale won't budge. It's not your fault - the real
                  culprit might be your liver, silently sabotaging your efforts.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h5 className="text-xl font-semibold text-[#0095E1] mb-3">
                  The Hidden Key to Unlocking Your Weight Loss Potential
                </h5>
                <p className="text-gray-700 leading-relaxed mb-4">
                  LivPure isn't just another weight loss supplement. It's a groundbreaking solution that targets the
                  root cause of stubborn fat - your liver's health. By supporting and revitalizing your liver, LivPure
                  helps:
                </p>
                <ul className="space-y-3">
                  {[
                    "Jumpstart your body's natural fat-burning processes",
                    "Boost your energy levels and metabolism",
                    "Improve overall liver function and health",
                    "Support sustainable, long-term weight management",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#0095E1] mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h5 className="text-xl font-semibold text-[#0095E1] mb-3">
                  Don't Fall Victim to Imitations - Get the Real LivPure
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  As LivPure's success has grown, so have the number of knockoffs flooding the market. These fake
                  products not only waste your money but could potentially harm your health. The only way to ensure
                  you're getting the genuine, high-quality LivPure formula is through official websites like ours.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h5 className="text-xl font-semibold text-[#0095E1] mb-3">
                  Limited Time Offer: Take Control of Your Weight Loss Journey Today
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  Right now, we're offering an exclusive deal on LivPure that you won't find anywhere else. But hurry -
                  this offer is limited, and supplies are running low due to overwhelming demand.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => handleClick("https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100")}
                  className="w-full sm:w-auto px-10 py-6 border-2 border-gray-200 rounded-full text-gray-800 text-lg font-medium hover:bg-gray-50"
                >
                  How others use it
                </Button>
                <Button
                  onClick={() => handleClick("https://hop.clickbank.net/?vendor=livpure&affiliate=smartdiet3&lid=6100")}
                  className="w-full sm:w-auto px-10 py-6 bg-[#0095E1] text-white rounded-full text-lg font-medium hover:bg-[#0085CC] flex items-center justify-center"
                >
                  Try risk free <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                *Limited stock available. Offer valid only through this official website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
