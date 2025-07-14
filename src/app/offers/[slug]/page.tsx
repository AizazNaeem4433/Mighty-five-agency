/* eslint-disable eslint-all */

import { getServiceBySlug } from '@/sanity/lib/sanity';
import { urlFor } from '@/sanity/lib/sanityImageUrl';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ServiceImage = {
  alt?: string;
  asset: any;
};

type Service = {
  title: string;
  content: any[];
  hero?: { image?: ServiceImage; overlayText?: string };
  details?: {
    _key: string;
    title?: string;
    description?: string;
    image?: ServiceImage;
    imagePosition?: 'left' | 'right';
  }[];
  process?: {
    _key: string;
    title: string;
    description: string;
    stepNumber?: string;
    icon?: ServiceImage;
  }[];
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service: Service | null = await getServiceBySlug(slug);

  if (!service) return notFound();

  const details = service.details ?? [];
  const process = service.process ?? [];

  const portableTextComponents = {
    types: {
      image: ({ value }: { value: ServiceImage }) =>
        value.asset ? (
          <div className="relative w-full h-96 my-8">
            <Image
              src={urlFor(value)}
              alt={value.alt || 'Service Image'}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ) : null,
    },
    block: {
      h2: ({ children }: any) => <h2 className="text-3xl font-bold my-6">{children}</h2>,
      h3: ({ children }: any) => <h3 className="text-2xl font-semibold my-4">{children}</h3>,
      normal: ({ children }: any) => <p className="my-4 text-lg">{children}</p>,
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-disc pl-6 space-y-2 my-4">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-6 space-y-2 my-4">{children}</ol>,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
      {/* Back Link */}
      <div className="mb-8">
        <Link href="/offers" className="inline-flex items-center text-red-600 hover:underline">
          ← Back to What We Offer
        </Link>
      </div>

      {/* Hero */}
      <div className="relative h-96 rounded-xl overflow-hidden mb-12">
        {service.hero?.image?.asset && (
          <Image
            src={urlFor(service.hero.image)}
            alt={service.hero.image.alt || service.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
            {service.hero?.overlayText ?? service.title}
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none mx-auto mb-16">
        <PortableText value={service.content} components={portableTextComponents} />
      </div>

      {/* Details */}
      {details.length > 0 && (
        <div className="space-y-16 mb-16">
          {details.map((detail, idx) => (
            <div
              key={detail._key || idx}
              className={`flex flex-col ${detail.imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {detail.image?.asset && (
                <div className="w-full md:w-1/2 h-64 md:h-96 relative rounded-lg overflow-hidden">
                  <Image
                    src={urlFor(detail.image)}
                    alt={detail.image.alt || detail.title || service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="w-full md:w-1/2">
                {detail.title && <h2 className="text-2xl font-bold mb-4">{detail.title}</h2>}
                {detail.description && <p className="text-gray-600 text-lg">{detail.description}</p>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Process */}
      {process.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {process.map((step, idx) => (
              <div
                key={step._key || idx}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {step.icon?.asset && (
                    <div className="w-12 h-12 mr-4 relative">
                      <Image
                        src={urlFor(step.icon)}
                        alt={step.icon.alt || step.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <div>
                    {step.stepNumber && <span className="text-sm text-gray-500 block">Step {step.stepNumber}</span>}
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your business?</h2>
        <p className="text-xl mb-6">Let’s discuss how we can help you achieve your goals.</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
