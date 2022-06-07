import {
  ColorSwatchIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  PuzzleIcon,
  ScaleIcon,
  SearchIcon,
  TruckIcon,
} from '@heroicons/react/outline'

const features = [
  {
    name: 'Browse Merches',
    description:
      'Browse through selection of Handpicked merchandises for your channel based on category.',
    icon: SearchIcon,
  },
  {
    name: 'Make it Unique',
    description:
      'Once you find the product you like, work with our artists to customize it to fit your brand.',
    icon: ColorSwatchIcon,
  },
  {
    name: 'Go to Market',
    description:
      'Upon approval we will send to production, keep & track inventories, and finally ship to subscribers as orders comes in.',
    icon: TruckIcon,
  },
]

export default function Services() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-bold mb-4">How it works</h1>
        <h2 className="sr-only">How it works.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-rose-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
