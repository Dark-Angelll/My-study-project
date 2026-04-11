import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Timer = () => {
  const [inputMinutes, setInputMinutes] = useState(1);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // старт таймера
  const startTimer = () => {
    setTimeLeft(inputMinutes * 60);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // прогресс
  const totalTime = inputMinutes * 60;
  const progress = totalTime
    ? ((totalTime - timeLeft) / totalTime) * 100
    : 0;

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
        background: "linear-gradient(135deg, #1e1e2f, #2c2c54)",
      }}
    >
      {/* круг */}
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={100}
          size={260}
          thickness={4}
          sx={{ color: "rgba(255,255,255,0.1)" }}
        />

        <CircularProgress
          variant="determinate"
          value={progress}
          size={260}
          thickness={4}
          sx={{
            position: "absolute",
            left: 0,
            color: "#7b61ff",
            filter: "drop-shadow(0 0 10px #7b61ff)",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h3" sx={{ color: "white" }}>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </Typography>
        </Box>
      </Box>

      {/* управление */}
      <Box sx={{ display: "flex", gap: 2 }}>
        <TextField
          type="number"
          label="Минуты"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(Number(e.target.value))}
          size="small"
          sx={{ background: "white", borderRadius: 1 }}
        />

        <Button variant="contained" onClick={startTimer}>
          Старт
        </Button>
      </Box>
    </Box>
  );
};
