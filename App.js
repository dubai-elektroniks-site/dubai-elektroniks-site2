import React from "react";
import PrizeDrawGame from "./components/PrizeDrawGame";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-blue-50 text-black">
      <header className="text-center py-10 bg-red-600 text-white shadow-lg">
        <h1 className="text-4xl font-bold mb-2">Dubai Elektroniks</h1>
        <p className="text-lg">World-class electronics & gold tech – delivered worldwide</p>
      </header>

      <section className="text-center mt-8 px-4">
        <h2 className="text-2xl font-semibold mb-2">Win Big with Our Lucky Card Draw!</h2>
        <p className="mb-4">Tap a card to reveal your prize. Claim instantly via WhatsApp!</p>
        <div className="max-w-5xl mx-auto">
          <PrizeDrawGame />
        </div>
      </section>
    </div>
  );
}
