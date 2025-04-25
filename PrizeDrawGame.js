import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";

const prizes = [
  "iPhone 15 Pro",
  "Samsung S25",
  "Gaming Laptop",
  "Double-Door Fridge",
  "4K DSLR Camera",
  "65-Inch HD TV",
  "Solar Panel Kit",
  "Gold Detector",
  "Gold Smelting Device",
  "Gold Weighing Scale",
];

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

export default function PrizeDrawGame() {
  const [cards, setCards] = useState(shuffle(prizes));
  const [revealed, setRevealed] = useState(Array(10).fill(false));
  const [showWinner, setShowWinner] = useState(false);
  const [winnerPrize, setWinnerPrize] = useState("");

  const revealCard = (index) => {
    if (!revealed[index]) {
      setRevealed((prev) => {
        const newRevealed = [...prev];
        newRevealed[index] = true;
        return newRevealed;
      });
      setWinnerPrize(cards[index]);
      setTimeout(() => setShowWinner(true), 500);
    }
  };

  const resetGame = () => {
    setCards(shuffle(prizes));
    setRevealed(Array(10).fill(false));
    setShowWinner(false);
    setWinnerPrize("");
  };

  const whatsappLink = `https://wa.me/491783752967?text=I%20just%20won%20a%20${encodeURIComponent(
    winnerPrize
  )}%20from%20Dubai%20Elektroniks!`;

  return (
    <div className="relative">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 p-6">
        {cards.map((prize, index) => (
          <motion.div
            key={index}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
            onClick={() => revealCard(index)}
          >
            <motion.div
              initial={{ rotateY: 0 }}
              animate={{ rotateY: revealed[index] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              className="h-32 flex items-center justify-center text-center text-lg font-semibold rounded-2xl shadow-xl bg-white"
            >
              <CardContent>
                {revealed[index] ? prize : "Tap to Reveal"}
              </CardContent>
            </motion.div>
          </motion.div>
        ))}
        <div className="col-span-full flex justify-center mt-6">
          <Button onClick={resetGame}>Reset Game</Button>
        </div>
      </div>

      <AnimatePresence>
        {showWinner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-200 text-black text-2xl font-bold rounded-xl shadow-2xl px-8 py-6 z-50"
          >
            Congratulations! You won a {winnerPrize}!
            <div className="mt-4 flex gap-4 justify-center">
              <Button onClick={() => setShowWinner(false)}>Close</Button>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">Claim via WhatsApp</Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
