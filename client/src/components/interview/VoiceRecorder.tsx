import { useEffect, useRef, useState } from "react";
import { Mic, Square, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

interface Props {
  onTranscript: (text: string) => void;
}

const VoiceRecorder = ({ onTranscript }: Props) => {
  const [listening, setListening] = useState(false);
  const [timer, setTimer] = useState(0);
  const [supported, setSupported] = useState(true);
  const [transcript, setTranscript] = useState("");

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event: any) => {
      let text = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        text += event.results[i][0].transcript;
      }

      setTranscript(text);
      onTranscript(text);
    };

    recognition.onend = () => {
      setListening(false);
      setTimer(0);
    };

    recognitionRef.current = recognition;
  }, [onTranscript]);

  useEffect(() => {
    if (!listening) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [listening]);

  const startRecording = () => {
    setTranscript("");
    recognitionRef.current?.start();
    setListening(true);
    setTimer(0);
  };

  const stopRecording = () => {
    recognitionRef.current?.stop();
    setListening(false);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;

    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  if (!supported) {
    return (
      <div className="mt-6 rounded-xl border border-red-500 bg-red-950/30 p-4 text-red-300">
        <div className="flex items-center gap-2">
          <AlertCircle size={20} />
          Speech Recognition is not supported in this browser.
          Please use Google Chrome or Microsoft Edge.
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-lg font-bold text-white">
            Voice Interview
          </h3>

          <p className="text-zinc-400">
            Click the microphone and answer naturally.
          </p>

        </div>

        <div className="font-bold text-violet-400">
          {formatTime(timer)}
        </div>

      </div>

      <div className="mt-8 flex justify-center">

        {!listening ? (
          <button
            onClick={startRecording}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-white transition hover:scale-110 hover:bg-violet-700"
          >
            <Mic size={30} />
          </button>
        ) : (
          <motion.button
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            onClick={stopRecording}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white"
          >
            <Square size={28} />
          </motion.button>
        )}

      </div>

      {listening && (
        <div className="mt-8">

          <div className="flex justify-center gap-2">

            {[...Array(12)].map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  height: [15, 40, 20, 35, 15],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.7,
                  delay: index * 0.05,
                }}
                className="w-2 rounded-full bg-violet-500"
              />
            ))}

          </div>

          <p className="mt-6 text-center font-semibold text-red-400">
            🔴 Recording...
          </p>

        </div>
      )}

      {transcript && (
        <div className="mt-8 rounded-xl bg-zinc-800 p-5">

          <h4 className="mb-3 font-semibold text-white">
            Live Transcript
          </h4>

          <p className="leading-7 text-zinc-300">
            {transcript}
          </p>

        </div>
      )}

    </div>
  );
};

export default VoiceRecorder;