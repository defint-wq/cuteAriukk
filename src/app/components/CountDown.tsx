import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  // Зорилтот цаг: 2026-01-07 12:00 (local time)
  const targetTime = new Date(2026, 0, 7, 12, 0, 0); 
  // month = 0 → January

  const calculateTimeLeft = (): TimeLeft => {
    const now = Date.now(); // яг одоогийн timestamp
    const diff = targetTime.getTime() - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl opacity-90"/*style={{ fontSize: 19, fontWeight: "" }}*/>
      {timeLeft.days} өдөр{" "}
      {timeLeft.hours} цаг{" "}
      {timeLeft.minutes} минут{" "}
      {timeLeft.seconds} секунд
    </div>
  );
}
