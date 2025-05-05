"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border-b border-pink-100 pb-2">
      <button
        className="flex w-full justify-between items-center text-left font-medium text-pink-900 hover:text-pink-700 focus:outline-none transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg md:text-xl">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-3 pb-1 text-gray-700 text-sm md:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <main className="container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-800 mb-8 md:mb-12">
          Frequently Asked Questions
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
          <FAQItem
            question="Where are you based?"
            answer={
              <p>
                We are based in Mauritius and operate exclusively online. Our products are sourced from London, Hong Kong, and Thailand.
              </p>
            }
          />

          <FAQItem
            question="How can I place my order?"
            answer={
              <div>
                <p className="mb-2">
                  You can place your order directly on our website or by messaging us on Instagram, Facebook, or WhatsApp.
                </p>
                <p className="font-medium mb-2">Steps:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Select the items, choose color and size, add to cart.</li>
                  <li>Click the basket icon and choose &ldquo;Checkout&rdquo;.</li>
                  <li>Fill in your billing details, create an account if not registered.</li>
                  <li>Choose delivery method.</li>
                  <li>Send proof of payment to dollupboutique@gmail.com with your order number.</li>
                  <li>You&apos;ll receive confirmation once stock and payment are verified.</li>
                </ol>
              </div>
            }
          />

          <FAQItem
            question="How can I pay for my order?"
            answer={
              <p>
                We accept Juice, bank transfer, myT Money, or cash. Card payments are coming soon.
              </p>
            }
          />

          <FAQItem
            question="Can I return my order?"
            answer={
              <p>
                Returns are accepted only for in-stock items. We do not accept returns for used products, lingerie, or bikinis due to sanitary reasons.
              </p>
            }
          />

          <FAQItem
            question="Which currency is currently accepted?"
            answer={
              <p>
                Mauritian Rupees. Euro will be accepted once shipping to Reunion resumes.
              </p>
            }
          />

          <FAQItem
            question="What are the delivery hours?"
            answer={
              <p>
                Deliveries occur Monday to Saturday. No fixed time slots.
              </p>
            }
          />
        </div>
      </main>
    </div>
  );
}
