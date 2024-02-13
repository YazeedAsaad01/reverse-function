let sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "Programming languages provide powerful tools for developers.",
    "In a galaxy far, far away...",
    "Life is like a box of chocolates, you never know what you're gonna get.",
    "To be or not to be, that is the question.",
    "The sun sets in the west.",
    "The sky is blue on a clear day.",
    "Water is essential for all forms of life.",
    "The Earth revolves around the Sun.",
    "Practice makes perfect."
];

// Initialize an empty array to store the reversed sentences
let newSentences = [];

// Loop through each element of the 'sentences' array
for (let i = 0; i < sentences.length; i++) {
    // Add the current element of 'sentences' to the beginning of 'newSentences'
    newSentences.unshift(sentences[i]);
}

// Output the reversed 'newSentences' array to the console
console.log(newSentences);