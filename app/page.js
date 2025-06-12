import { ChevronRight, Car, Calendar, Shield, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SignedOut } from "@clerk/nextjs";
import { getFeaturedCars } from "@/actions/home";
import { CarCard } from "@/components/car-card";
import { HomeSearch } from "@/components/home-search";
import Link from "next/link";
import Image from "next/image";
import { bodyTypes, carMakes, faqItems } from "@/lib/data";

export default async function Home() {
  const featuredCars = await getFeaturedCars();

  return (
    <div className="flex flex-col pt-20">
      {/* Hero Section with Gradient Title */}
      <section className="relative py-16 md:py-28 text-white soft-dotted-gradient overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl mb-4 gradient-title">
              Find your Dream Car with Vehigo
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Smart AI car search to explore and test drive from vast options.
            </p>
          </div>

          {/* Search Component (Client) */}
          <div className="text-black">
            <HomeSearch />
          </div>
        </div>
      </section>


      {/* Featured Cars */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Cars</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Brand */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse by Brand</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carMakes.map((make) => (
              <Link
                key={make.name}
                href={`/cars?make=${make.name}`}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer"
              >
                <div className="h-16 w-auto mx-auto mb-2 relative">
                  <Image
                    src={
                      make.imageUrl || `/make/${make.name.toLowerCase()}.webp`
                    }
                    alt={make.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="font-medium">{make.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
            Why Choose Our Platform
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-purple-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Car className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Best Vehicle Deals</h3>
              <p className="text-sm text-gray-500">
                Thousands of verified vehicles from trusted dealerships and sellers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-purple-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Calendar className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Test Drives</h3>
              <p className="text-sm text-gray-500">
                Schedule test drives easily with flexible booking options.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-purple-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Trusted & Secure</h3>
              <p className="text-sm text-gray-500">
                Safe, verified transactions with trusted platforms.
              </p>
            </div>

            {/* Optional: Card 4 */}
            <div className="bg-gray-50 rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-purple-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <ShieldCheck className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Award-Winning Service</h3>
              <p className="text-sm text-gray-500">
                Recognized for innovation and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Browse by Body Type */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse by Body Type</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bodyTypes.map((type) => (
              <Link
                key={type.name}
                href={`/cars?bodyType=${type.name}`}
                className="relative group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg flex justify-end h-28 mb-4 relative">
                  <Image
                    src={
                      type.imageUrl || `/body/${type.name.toLowerCase()}.webp`
                    }
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                  <h3 className="text-white text-xl font-bold pl-4 pb-2 ">
                    {type.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">FAQs</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            We understand the challenges creatives often face in coming up with the right words for every project.
          </p>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl overflow-hidden border transition-all bg-gray-50 data-[state=open]:bg-[#c5c5c9] data-[state=open]:text-white"
              >
                <AccordionTrigger className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold">
                  {faq.question}
                  <span className="text-xl transition-transform data-[state=open]:rotate-45"></span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm text-gray-600 data-[state=open]:text-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative py-20 text-white overflow-hidden bg-gradient-to-br from-[#020024]/90 via-[#090979]/85 to-[#00d4ff]/80">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Find Your Dream Car?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect vehicle through our platform.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="px-8 py-4 bg-gradient-to-r from-[#7f5af0] to-[#6246ea] hover:from-[#6246ea] hover:to-[#7f5af0] text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              <Link href="/cars">View All Cars</Link>
            </Button>

            <SignedOut>
              <Button
                size="lg"
                asChild
                className="px-8 py-4 bg-white text-black hover:bg-gray-200 font-semibold rounded-full transition-transform transform hover:scale-105"
              >
                <Link href="/sign-up">Sign Up Now</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </section>

    </div>
  );
}



