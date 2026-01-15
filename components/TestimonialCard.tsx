interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  text: string
}

export default function TestimonialCard({ name, location, rating, text }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl border border-charcoal-100 p-8 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>
      <p className="text-charcoal-700 mb-6 leading-relaxed italic">"{text}"</p>
      <div>
        <p className="font-semibold text-charcoal-950">{name}</p>
        <p className="text-sm text-charcoal-600">{location}</p>
      </div>
    </div>
  )
}
