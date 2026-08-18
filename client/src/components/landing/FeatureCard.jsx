function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-[#111827] border border-gray-800 rounded-2xl p-6 hover:border-violet-500 hover:-translate-y-2 transition duration-300">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;