import React, { useState, useEffect } from 'react';
// const words = ['My name is Kyle Sjoberg', 'I am a software engineer.'];

const Typewriter = (props) => {
  const words = props.words;
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  function type() {
    // Current wordx
    const currentWord = words[wordIndex];
    // Determine the function to be performed
    const shouldDelete = isDeleting ? 1 : -1;

    // Create the new text
    setText(current => currentWord.substring(0, current.length - shouldDelete));
    // Determine if this word is complete
    if (!isDeleting && text === currentWord) {
      // Make a pause at the end
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);
    }
  }
  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);
    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);
    // Add dependencies to the dependency array
  }, [wordIndex, isDeleting, text]);

  return (
    <div style={{ fontFamily: "Lucida Console", color: "grey", height: "100%", display: "grid", fontSize: "30px", placeContent: "center" }}>{text}</div>
  );
}
export default Typewriter;