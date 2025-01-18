import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const TextToSpeech = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState("");

  useEffect(() => {
    const loadVoices = () => {
      const voicesList = window.speechSynthesis.getVoices();
      setVoices(voicesList);
      if (voicesList.length > 0) {
        setSelectedVoice(voicesList[0].name); // Chọn giọng đầu tiên mặc định
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const selected = voices.find((voice) => voice.name === selectedVoice);
      if (selected) {
        utterance.voice = selected;
      }
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Trình duyệt của bạn không hỗ trợ SpeechSynthesis.');
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Text-to-Speech</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập văn bản..."
        style={{ width: "300px", height: "100px", padding: "10px", fontSize: "16px" }}
      />
      <br />
      <select
        value={selectedVoice}
        onChange={(e) => setSelectedVoice(e.target.value)}
        style={{ marginTop: "20px", padding: "10px", fontSize: "16px" }}
      >
        {voices.map((voice) => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>
      <br />
      <button
        onClick={handleSpeak}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Đọc
      </button>
      <button onClick={() => navigate("/basic-math")}>Back</button>
    </div>
  );
};

export default TextToSpeech;
