import { useEffect, useState } from 'react';

export const useCopy = (text: string) => {
  const [clipboardVal, setClipboardVal] = useState<string | null>(null);

  useEffect(() => {
    navigator.clipboard
      .writeText(text)
      .then(() => setClipboardVal(text))
      .catch((e) => {
        setClipboardVal(null);
        console.warn('Clipboard error:' + e);
      });
  }, [text]);

  return {
    clipboardVal,
  };
};
