import { PortableText, type PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'
import { Quiz } from '@/components/Quiz'

const components: PortableTextComponents = {
  types: {
    // 1. Illustration Block
    illustration: ({ value }: any) => {
      return (
        <div className="my-8 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="relative w-full">
            {value.image && (
              <Image
                src={urlFor(value.image).width(800).url()}
                alt={value.title || 'Illustration'}
                width={800}
                height={500}
                className="w-full h-auto"
              />
            )}
          </div>
        </div>
      )
    },

    // 2. Embedded Quiz Block
    embeddedQuiz: ({ value }: any) => {
      return (
        <div className="mt-12 mb-12">
          <Quiz title={value.title} questions={value.questions} />
        </div>
      )
    },
  },

  marks: {
    link: ({ value, children }) => {
      const isExternal = value?.href?.startsWith('http')

      return (
        <a
          href={value.href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="
            text-primary
            underline
            underline-offset-4
            decoration-primary/60
            hover:decoration-primary
            hover:text-primary/80
            transition-colors
          "
        >
          {children}
        </a>
      )
    },
  },

  block: {
    // Normal paragraphs
    normal: ({ children }) => (
      <p className="mb-4 leading-relaxed whitespace-pre-line">{children}</p>
    ),

    // Headings
    h2: ({ children }) => (
      <h2 className="text-3xl font-nunito font-bold text-primary mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">
        {children}
      </h3>
    ),

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-gold pl-4 italic text-gray-700 dark:text-gray-300 my-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-r">
        {children}
      </blockquote>
    ),
  },

  // Lists
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-6">{children}</ol>
    ),
  },
}

export function CustomPortableText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
