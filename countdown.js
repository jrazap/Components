// New
const padLeft = (toLength, padding) => (toPad) =>
  `${padding.repeat(toLength).substring(0, toLength - toPad.length)}${toPad}`;
const twoDigitZeroLeft = padLeft(2, "0");

const secondsToDisplay = (secondsFromNow) => {
  const end = new Date().valueOf() + secondsFromNow * 1000;

  return () => {
    const now = new Date().valueOf();
    const rawRemaining = Math.ceil((end - now) / 1000);
    if (rawRemaining <= 0) {
      return "";
    }

    const remainingMinutes = Math.floor(rawRemaining / 60);
    const remainingSeconds = rawRemaining % 60;

    const displayMinutes = `${remainingMinutes}`;
    const displaySeconds = `${remainingSeconds}`;

    return `${twoDigitZeroLeft(displayMinutes)}:${twoDigitZeroLeft(
      displaySeconds
    )}`;
  };
};

const countDownFor = (function () {
  let timeoutHandler = 0;
  return (secondsToCountDown, refreshRate, innerTextElement) => {
    const countDowner = secondsToDisplay(secondsToCountDown);
    const countAgain = () => {
      if (timeoutHandler !== 0) {
        clearTimeout(timeoutHandler);
      }
      const remainingText = countDowner();
      if (remainingText.length > 0) {
        innerTextElement.innerText = remainingText;
        timeoutHandler = setTimeout(countAgain, refreshRate);
      } else {
        innerTextElement.innerText = "You can ask for";
      }
    };
    countAgain();
  };
})();
displayCounter.innerText = "";
countDownFor(10, 200, document.getElementById("displayCounter"));
