import React from "react";

const states = [
  "Alaska", "Alabama", "Arkansas", "Arizona", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Iowa", "Idaho", "Illinois", "Indiana", "Kansas", "Kentucky", "Louisiana", "Massachusetts", "Maryland",
  "Maine", "Michigan", "Minnesota", "Missouri", "Mississippi", "Montana", "North Carolina", "North Dakota", "Nebraska", "New Hampshire",
  "New Jersey", "New Mexico", "Nevada", "New York", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Virginia", "Vermont", "Washington", "Wisconsin", "West Virginia", "Wyoming"
];

const StatesSection: React.FC = () => {
  return (
    <section className="relative text-white py-8 md:py-16 px-4 overflow-hidden bg-[#fa0505b3]">
<div className="absolute inset-0 flex flex-wrap justify-center  how-bg items-center opacity-20 h-100 w-100">
       
      </div>
      {/* Content wrapper */}
      <div className="relative z-10 text-center max-w-7xl mx-auto">
        {/* Flag */}
        <img
          src="/images/flag.png"
          alt="USA Flag"
          className="w-10 mx-auto mb-4"
        />

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10 verdana">
          We Have Exterminators in all 50 States
        </h2>

        {/* States grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-2 text-sm md:text-base">
          {states.map((state) => (
            <p key={state} className="text-left text-white verdana">
              {state}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatesSection;
