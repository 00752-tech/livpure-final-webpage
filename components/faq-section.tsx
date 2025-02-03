"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is LivPure and what are its claimed benefits?",
    answer:
      "LivPure is marketed as a natural supplement designed to support liver health and overall wellness. The company claims it may contribute to healthy weight management and improved energy levels when used as part of a balanced lifestyle.",
  },
  {
    question: "Where can consumers purchase LivPure?",
    answer:
      "According to the company, LivPure is primarily available through their official website. They state that this is to ensure customers receive the authentic product. LivPure offers shipping to locations across the USA, including major cities.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes! We ship worldwide. Orders within the US typically arrive in 7-10 business days. International delivery times vary depending on your location and local carriers. All orders are processed and shipped the same day they are received.",
  },
  {
    question: "What are the key ingredients in LivPure?",
    answer:
      "LivPure reports that their product contains a proprietary blend of natural ingredients, including milk thistle extract, which has been traditionally used to support liver health. The full list of ingredients and their exact quantities are not publicly disclosed on their website.",
  },
  {
    question: "How long does LivPure say it takes to see results?",
    answer:
      "LivPure states that individual experiences may vary, but they report that many customers feel positive changes within a few weeks of consistent use. They recommend using the product as part of a healthy lifestyle that includes a balanced diet and regular exercise.",
  },
  {
    question: "What does LivPure say about the safety of their product?",
    answer:
      "LivPure claims their product is formulated with natural ingredients and manufactured in an FDA-registered facility following quality control standards. However, as with any dietary supplement, it's advisable to consult with a healthcare provider before starting any new regimen, especially for individuals with pre-existing health conditions or those taking medications.",
  },
  {
    question: "What is LivPure's return policy?",
    answer:
      "According to LivPure's website, they offer a 60-day return policy on purchases. They state that if a customer is not completely satisfied with their purchase, they can return it within 60 days for a refund. It's recommended to check their official website for full details on the return process.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions About LivPure</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
