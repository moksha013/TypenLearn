function PlantIllustration({ type }) {
  // 🌰 Seed
  if (type === "seed") {
    return (
      <div className="relative w-32 h-32 flex items-end justify-center">

        {/* Soil */}
        <div
          className="
            w-12
            h-8
            rounded-full
            bg-[#8B6F61]
            shadow-md
          "
        />

        {/* Soft ground glow */}
        <div
          className="
            absolute
            bottom-5
            w-16
            h-1
            rounded-full
            bg-[#B58AC0]/25
            blur-sm
          "
        />

      </div>
    );
  }


  // 🌱 Sprout
  if (type === "sprout") {
    return (
      <div className="relative w-32 h-32 flex items-end justify-center">

        {/* Soil */}
        <div
          className="
            w-12
            h-8
            rounded-full
            bg-[#8B6F61]
            shadow-md
          "
        />

        {/* Stem */}
        <div
          className="
            absolute
            bottom-7
            w-1.5
            h-16
            rounded-full
            bg-[#7FA58A]
          "
        />

        {/* Left leaf */}
        <div
          className="
            absolute
            bottom-16
            left-7
            w-9
            h-5
            rounded-full
            bg-[#9DBFA4]
            rotate-[-25deg]
            shadow-sm
          "
        />

        {/* Right leaf */}
        <div
          className="
            absolute
            bottom-20
            right-7
            w-9
            h-5
            rounded-full
            bg-[#B6A0C4]
            rotate-[25deg]
            shadow-sm
          "
        />

      </div>
    );
  }


  // 🌿 Growing
  if (type === "growing") {
    return (
      <div className="relative w-36 h-36 flex items-end justify-center">

        {/* Soil */}
        <div
          className="
            w-14
            h-9
            rounded-full
            bg-[#8B6F61]
            shadow-md
          "
        />

        {/* Stem */}
        <div
          className="
            absolute
            bottom-8
            w-2
            h-24
            rounded-full
            bg-[#789B82]
          "
        />

        {/* Left leaf */}
        <div
          className="
            absolute
            bottom-20
            left-3
            w-12
            h-6
            rounded-full
            bg-[#9DBFA4]
            rotate-[-30deg]
          "
        />

        {/* Right leaf */}
        <div
          className="
            absolute
            bottom-28
            right-3
            w-12
            h-6
            rounded-full
            bg-[#B6A0C4]
            rotate-[30deg]
          "
        />

        {/* Lower right leaf */}
        <div
          className="
            absolute
            bottom-14
            right-0
            w-10
            h-5
            rounded-full
            bg-[#AFC7B3]
            rotate-[35deg]
          "
        />

      </div>
    );
  }


  // 🌸 Bloom
  return (
    <div className="relative w-40 h-40 flex items-end justify-center">

      {/* Soil */}
      <div
        className="
          w-16
          h-10
          rounded-full
          bg-[#8B6F61]
          shadow-md
        "
      />

      {/* Stem */}
      <div
        className="
          absolute
          bottom-9
          w-2.5
          h-28
          rounded-full
          bg-[#789B82]
        "
      />

      {/* Left leaf */}
      <div
        className="
          absolute
          bottom-24
          left-1
          w-14
          h-7
          rounded-full
          bg-[#9DBFA4]
          rotate-[-35deg]
        "
      />

      {/* Right leaf */}
      <div
        className="
          absolute
          bottom-28
          right-1
          w-14
          h-7
          rounded-full
          bg-[#B6A0C4]
          rotate-[35deg]
        "
      />

      {/* Lower left leaf */}
      <div
        className="
          absolute
          bottom-16
          left-5
          w-12
          h-6
          rounded-full
          bg-[#AFC7B3]
          rotate-[-20deg]
        "
      />

      {/* Lower right leaf */}
      <div
        className="
          absolute
          bottom-20
          right-5
          w-12
          h-6
          rounded-full
          bg-[#C4A9C8]
          rotate-[20deg]
        "
      />

      {/* Flower petals */}
      <div
        className="
          absolute
          bottom-32
          w-8
          h-8
          rounded-full
          bg-[#C58BC5]
          shadow-lg
          shadow-[#C58BC5]/30
        "
      />

      <div
        className="
          absolute
          bottom-[8.5rem]
          left-[4.1rem]
          w-5
          h-5
          rounded-full
          bg-[#D8A9D2]
        "
      />

      <div
        className="
          absolute
          bottom-[8.5rem]
          right-[4.1rem]
          w-5
          h-5
          rounded-full
          bg-[#D8A9D2]
        "
      />

      {/* Flower center */}
      <div
        className="
          absolute
          bottom-[8.1rem]
          w-3
          h-3
          rounded-full
          bg-[#E8C98B]
        "
      />

    </div>
  );
}

export default PlantIllustration;