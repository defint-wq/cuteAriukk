import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "./components/ui/button";
import { motion } from "motion/react";
import { MoreInfo } from "./components/MoreInfo";
import Countdown from "./components/CountDown";

export default function App() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const [dressCodeOn, setDressCodeOn] = useState(false);

  const handleNoHover = () => {
    // Move the "No" button to a random position when hovered
    const randomX = Math.random() * 300 - 50;
    const randomY = Math.random() * 300 - 50;
    setNoButtonPosition({ x: randomX, y: randomY });

    // Make the "Yes" button bigger
    setYesButtonSize((prev) => Math.min(prev + 0.1, 2));
  };

  const handleYes = () => {
    setAnswer("yes");
  };

  if (answer === "yes") {
    const dressData = [
      {
        name: "Uniform",
        description: "Хайртайгаа хамт дүрэмт хувцастай",
        vibe: "Nostalgic",
      },
    ];

    const locationData = [
      {
        name: "Зуун мод хот",
        description: "Хайрынхаа амьдардаг бяцхан хотод",
        vibe: "Cozy",
      },
    ];

    const secretData = [
      {
        name: "Нууц",
        description: "Болзох өдрийг тэсэн ядан хүлээнэ",
        vibe: "Romantic",
      },
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 to-pink-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="text-center text-white"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex justify-center mb-8"
          >
            <Heart className="w-32 h-32 fill-white" />
          </motion.div>
          <h1 className="text-6xl mb-6">Wuaaa!</h1>
          <p className="text-2xl mb-4">
            2026 оны 1 сарын 7 нд үзэсгэлэнт чамтайгаа...
          </p>
          <p className="text-xl opacity-90 mb-4">Хайртай шүү! ❤️</p>
          <div>
            <Countdown />
          </div>
          <motion.div
            className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div>
              <MoreInfo title="Dress Code" emoji="👗" data={dressData} />
            </div>
            <div>
              <MoreInfo title="Location" emoji="🌏" data={locationData} />
            </div>

            <div>
              <MoreInfo title="Secret" emoji="♥️" data={secretData} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 to-pink-900 flex items-center justify-center p-4 overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              opacity: 0.3,
            }}
            animate={{
              y: -100,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Heart className="w-8 h-8 text-white/30 fill-white/30" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl mx-auto"
      >
        <motion.div
          animate={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <img
            src="ariukk.jpg"
            alt="Ariukk"
            className="w-48 h-48 mx-auto rounded-full object-cover shadow-2xl border-4 border-white"
          />
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h1 className="text-7xl md:text-7xl mb-6 text-white drop-shadow-lg flex items-center justify-center gap-4">
            <Sparkles className="w-12 h-12" />
            Date hiihuu ohion?
            <Sparkles className="w-12 h-12" />
          </h1>
        </motion.div>

        <p className="text-2xl text-white/90 mb-12 drop-shadow">Love youu 💕</p>

        <div className="flex gap-6 justify-center items-center relative">
          <motion.div
            animate={{ scale: yesButtonSize }}
            transition={{ type: "spring" }}
          >
            <Button
              onClick={handleYes}
              size="lg"
              className="bg-white text-red-700 hover:bg-red-50 px-12 py-8 text-2xl h-auto shadow-2xl rounded-4xl"
            >
              <Heart className="w-6 h-6 mr-2 fill-red-700" />
              Degiildaa 😊
            </Button>
          </motion.div>

          <motion.div
            animate={noButtonPosition}
            transition={{ type: "spring", stiffness: 500 }}
          >
            <Button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              size="lg"
              variant="outline"
              className="bg-white/20 text-white border-white hover:bg-white/30 px-12 py-8 text-2xl h-auto backdrop-blur-sm rounded-4xl"
            >
              Jadkuee 😢
            </Button>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-white/70 mt-8 text-sm"
        >
          (Try hovering over "Jadkuee" 😉)
        </motion.p>
      </motion.div>
    </div>
  );
}
