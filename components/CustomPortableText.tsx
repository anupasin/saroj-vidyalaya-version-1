import { PortableText, type PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.client'
import { Quiz } from '@/components/Quiz'

// Define how custom blocks should look
const components: PortableTextComponents = {
  types: {
    // 1. The Illustration Block (Now clean, image only)
    illustration: ({ value }: any) => {
      return (
        <div className="my-8 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="relative w-full h-[400px]">
            {value.image && (
              <Image
                src={urlFor(value.image).width(800).url()}
                alt={value.title || 'Illustration'}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      )
    },
    // 2. The Embedded Quiz Block
    embeddedQuiz: ({ value }: any) => {
      return (
        <div className="mt-12 mb-12">
           <Quiz 
             title={value.title} 
             questions={value.questions} 
           />
        </div>
      )
    },
  },
  // Style standard text blocks (H2, H3, Lists)
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-nunito font-bold text-primary mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-nunito font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-brand-gold pl-4 italic text-gray-700 dark:text-gray-300 my-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-r">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 space-y-2 mb-6">{children}</ul>,
  },
}

export function CustomPortableText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}