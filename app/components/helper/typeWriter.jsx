import { useState, useEffect } from 'react';

const useTypewriter = (texts, speed = 50) => {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < texts.length) {
      if (textIndex < texts[lineIndex].length) {
        const timer = setTimeout(() => {
          setTypedText(prev => prev + texts[lineIndex][textIndex]);
          setTextIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
      } else {
        const lineBreakTimer = setTimeout(() => {
          setTypedText(prev => prev + '<br />');
          setLineIndex(prev => prev + 1);
          setTextIndex(0);
        }, speed);

        return () => clearTimeout(lineBreakTimer);
      }
    }
  }, [textIndex, lineIndex, texts, speed]);

  return typedText;
};

export default useTypewriter;
