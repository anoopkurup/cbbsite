'use client'

import Image from 'next/image'

export default function ImageTest() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Image Aspect Ratio Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Test 1: 16:9 aspect ratio */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-4">16:9 Aspect Ratio</h2>
          <div className="relative aspect-video w-full bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg">
            <Image
              src="https://i.scdn.co/image/ab6765630000ba8ad9dc142c987537dda55d4028"
              alt="Test image with 16:9 aspect ratio"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">This should maintain a 16:9 aspect ratio without stretching</p>
        </div>
        
        {/* Test 2: Square aspect ratio for comparison */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Square Aspect Ratio</h2>
          <div className="relative aspect-square w-full bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg">
            <Image
              src="https://i.scdn.co/image/ab6765630000ba8ad9dc142c987537dda55d4028"
              alt="Test image with square aspect ratio"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">This should maintain a 1:1 aspect ratio</p>
        </div>
        
        {/* Test 3: Original image without constraints */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="font-semibold mb-4">Original Image</h2>
          <div className="relative w-full bg-gradient-to-br from-primary-400 to-secondary-400 rounded-lg">
            <Image
              src="https://i.scdn.co/image/ab6765630000ba8ad9dc142c987537dda55d4028"
              alt="Original test image"
              width={300}
              height={300}
              className="rounded-lg"
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">This shows the original image dimensions</p>
        </div>
      </div>
    </div>
  )
}