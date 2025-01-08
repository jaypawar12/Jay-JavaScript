const inputBox = document.getElementById("input-box");
const wordCount = document.getElementById("word");
const charCount = document.getElementById("character");
const sentenceCount = document.getElementById("sentence");
const paragraphCount = document.getElementById("paragraph");

const updateCounts = () => {
    const text = inputBox.value;

    wordCount.textContent = (() => {
        return text.split(/\s+/).filter(word => word.length > 0).length;
    })();

    charCount.textContent = (() => {
        return text.replace(/\s/g, '').length;
    })();

    sentenceCount.textContent = (() => {
        return text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    })();

    paragraphCount.textContent = (() => {
        return text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
    })();
};

inputBox.addEventListener("input", updateCounts);
