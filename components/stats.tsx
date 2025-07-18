export function Stats() {
  const stats = [
    { label: "Active Users", value: "2M+" },
    { label: "Transactions Daily", value: "50K+" },
    { label: "Countries Supported", value: "150+" },
    { label: "Total Volume", value: "$2B+" },
  ]

  return (
    <section className="bg-gray-900 py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-white sm:text-4xl">{stat.value}</div>
              <div className="mt-2 text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
