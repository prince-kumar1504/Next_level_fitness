import { Check, X } from "lucide-react";
import React from "react";
// import "./Pricing.css";  // Ensure you import the CSS file

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 12000,
      length: 3,
      description: [
        { text: "Equipment", available: true },
        { text: "All Day Free Training", available: true },
        { text: "Free Restroom", available: false },
        { text: "24/7 Skilled Support", available: false },
        { text: "20 Days Freezing Option", available: false },
      ],
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HEAL YEARLY",
      price: 24000,
      length: 6,
      description: [
        { text: "Equipment", available: true },
        { text: "All Day Free Training", available: true },
        { text: "Free Restroom", available: true },
        { text: "24/7 Skilled Support", available: false },
        { text: "20 Days Freezing Option", available: false },
      ],
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 36000,
      length: 12,
      description: [
        { text: "Equipment", available: true },
        { text: "All Day Free Training", available: true },
        { text: "Free Restroom", available: true },
        { text: "24/7 Skilled Support", available: true },
        { text: "20 Days Freezing Option", available: true },
      ],
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <h1>NEXT LEVEL FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => (
          <div className="card" key={element.title}>
            <img src={element.imgUrl} alt={element.title} />
            <div className="title">
              <h1>{element.title}</h1>
              <h1>PACKAGE</h1>
              <h3>Rs {element.price}</h3>
              <p>For {element.length} Months</p>
            </div>
            <div className="description">
              {element.description.map((desc, index) => (
                <p key={index} className={desc.available ? "" : "unavailable"}>
                  {desc.available ? <Check /> : <X className="cross-icon" />} {desc.text}
                </p>
              ))}
              <a href="#pricing">Join Now</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
