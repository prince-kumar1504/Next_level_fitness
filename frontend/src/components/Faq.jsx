import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What should I eat before a workout?",
      answer: "It’s ideal to eat a balanced meal 1-3 hours before your workout, consisting of complex carbs, protein, and some fat. A light snack like a banana or yogurt can be eaten 30-60 minutes before."
    },
    {
      question: "How often should I work out?",
      answer: "For general fitness, aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, along with muscle-strengthening activities on 2 or more days per week."
    },
    {
      question: "Is it better to exercise in the morning or evening?",
      answer: "It depends on personal preference and schedule. Some people find they have more energy in the morning, while others perform better in the evening. Consistency is key."
    },
    {
      question: "How can I stay motivated to exercise?",
      answer: "Setting specific goals, finding a workout buddy, tracking progress, and mixing up your routine can help keep you motivated. Also, focus on activities you enjoy."
    },
    {
      question: "What are the benefits of strength training?",
      answer: "Strength training helps build muscle, increase metabolism, improve bone density, enhance endurance, and support joint health. It also aids in better posture and can reduce the risk of injury."
    }
  ];

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="question" onClick={() => toggleAnswer(index)}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
