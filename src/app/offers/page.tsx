import { getServices } from '@/sanity/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';

export default async function OffersPage() {
  const services = await getServices();

  return (
<div className="max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-30 md:pb-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-700">
        What We Offer
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service._id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            {service.hero?.image?.asset?.url && (
              <div className="relative h-52 w-full">
                <Image
                  src={service.hero.image.asset.url}
                  alt={service.hero.image.alt || service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            {/* Text Content */}
            <div className="flex flex-col justify-between p-6 flex-grow">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <Link
                href={`/offers/${service.slug.current}`}
                className="mt-6 inline-block bg-red-600 text-white px-5 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
