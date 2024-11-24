const facts = [
    {
        title: "Vastness of the Universe",
        description: "The observable universe is about 93 billion light-years in diameter. This means that light, which travels at about 299,792 kilometers per second, would take 93 billion years to travel from one end to the other."
    },
    {
        title: "Number of Galaxies",
        description: "There are estimated to be over 2 trillion galaxies in the observable universe. Each galaxy can contain millions or even billions of stars."
    },
    {
        title: "Age of the Universe",
        description: "The universe is approximately 13.8 billion years old, having formed from the Big Bang."
    },
    {
        title: "Dark Matter and Dark Energy",
        description: "About 27% of the universe is dark matter, which does not emit light or energy, making it invisible and detectable only through its gravitational effects. Even more mysterious is dark energy, which makes up about 68% of the universe and is thought to be responsible for its accelerated expansion."
    },
    {
        title: "Black Holes",
        description: "Black holes are regions of space where gravity is so strong that nothing, not even light, can escape. The largest black holes, known as supermassive black holes, can have masses equivalent to billions of suns."
    },
    {
        title: "Neutron Stars",
        description: "These are incredibly dense remnants of supernova explosions. A sugar-cube-sized amount of neutron-star material would weigh about 6 billion tons on Earth."
    },
    {
        title: "Cosmic Microwave Background",
        description: "This is the afterglow radiation from the Big Bang, filling the universe and providing a snapshot of the infant universe just 380,000 years after its birth."
    },
    {
        title: "Expansion of the Universe",
        description: "The universe is expanding, and galaxies are moving away from each other. This was first observed by Edwin Hubble in the 1920s and is a fundamental aspect of modern cosmology."
    },
    {
        title: "Exoplanets",
        description: "There are thousands of confirmed exoplanets (planets outside our solar system), and many more candidates. Some of these exoplanets are located in the habitable zone of their stars, where conditions might be right for life."
    },
    {
        title: "The Multiverse Theory",
        description: "Some theories suggest that our universe might be just one of many universes, collectively known as the multiverse, each with its own laws of physics."
    }
];

const jokes = [
    {
        question: "Why did the sun go to school?",
        answer: "To get a little brighter! 😄"
    },
    {
        question: "How do you organize a space party?",
        answer: "You planet! 🎉"
    },
    {
        question: "What did Mars say to Saturn?",
        answer: "Give me a ring sometime! 💍"
    },
    {
        question: "Why can't you trust an atom?",
        answer: "Because they make up everything! 😂"
    },
    {
        question: "How does the moon cut his hair?",
        answer: "Eclipse it! 🌒"
    },
    {
        question: "What is an astronaut's favorite part of a computer?",
        answer: "The space bar! 🚀"
    },
    {
        question: "Why did the Earth break up with the moon?",
        answer: "Because it needed some space! 🌍"
    },
    {
        question: "Why don't scientists trust atoms?",
        answer: "Because they make up everything! 😆"
    },
    {
        question: "What do you call a comet's hairstyle?",
        answer: "A cosmic tail! ☄️"
    },
    {
        question: "Why did the star get arrested?",
        answer: "Because it was a shooting star! 🌠"
    }
];

let currentFactIndex = 0;
let currentJokeIndex = 0;

document.getElementById('change-content').addEventListener('click', () => {
    currentFactIndex = (currentFactIndex + 1) % facts.length;
    currentJokeIndex = (currentJokeIndex + 1) % jokes.length;

    document.getElementById('fact-title').textContent = `Fact: ${facts[currentFactIndex].title}`;
    document.getElementById('fact-description').textContent = facts[currentFactIndex].description;
    document.getElementById('joke-question').textContent = jokes[currentJokeIndex].question;
    document.getElementById('joke-answer').textContent = jokes[currentJokeIndex].answer;
});

document.getElementById('toggle-dark-mode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(card => card.classList.toggle('dark-mode'));
    document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
});
