import { PortableText as PortableTextReact, PortableTextComponents } from '@portabletext/react'
import { IllustrationPlaceholder } from './IllustrationPlaceholder'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Image'}
            width={800}
            height={400}
            className="w-full h-auto object-cover"
            unoptimized
          />
          {value.caption && (
            <div className="text-center text-sm text-gray-500 mt-2">{value.caption}</div>
          )}
        </div>
      )
    },
    illustrationPlaceholder: ({ value }) => {
      const imageUrl = value.image ? urlFor(value.image).url() : value.imageSrc
      return (
        <IllustrationPlaceholder
          title={value.title}
          prompt={value.prompt}
          imageSrc={imageUrl}
        />
      )
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl md:text-5xl font-nunito font-bold text-brand-gold mb-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-nunito font-bold text-primary mb-4 mt-12">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-nunito font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-brand-gold pl-4 italic my-4">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 space-y-2 mb-4">{children}</ol>,
  },
}

export function PortableText({ value }: { value: any }) {
  return <PortableTextReact value={value} components={components} />
}
