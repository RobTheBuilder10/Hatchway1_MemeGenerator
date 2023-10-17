const memeImages = [
    'meme_templates/template1.jpg',
    'meme_templates/template2.jpg',
    'meme_templates/template3.jpg',
    'meme_templates/template4.jpg',
    'meme_templates/template5.jpg',
    'meme_templates/template6.jpg',
    'meme_templates/template7.jpg',
    'meme_templates/template8.jpg',
    'meme_templates/template9.jpg',
    'meme_templates/template10.jpg',
    'meme_templates/template11.jpg',
    'meme_templates/template12.jpg',
    'meme_templates/template13.jpg',
    'meme_templates/template14.jpg',
    'meme_templates/template15.jpg',
    'meme_templates/template16.jpg',
    'meme_templates/template17.jpg',
    'meme_templates/template18.jpg',
    'meme_templates/template19.jpg',
    'meme_templates/template20.jpg',
];

document.getElementById("generate").addEventListener("click", function() {
    const memeImage = document.getElementById("memeImage");
    const topTextDiv = document.querySelector(".top-text");
    const bottomTextDiv = document.querySelector(".bottom-text");

    // Get random meme image from the array
    const randomMemeImage = memeImages[Math.floor(Math.random() * memeImages.length)];

    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    memeImage.setAttribute("src", randomMemeImage);
    topTextDiv.textContent = topText;
    bottomTextDiv.textContent = bottomText;

    saveMemeConfiguration(randomMemeImage, topText, bottomText);
});

function saveMemeConfiguration(image, topText, bottomText) {
    let memes = JSON.parse(localStorage.getItem('recentMemes')) || [];

    // Create a meme configuration object
    let memeConfig = {
        image: image,
        topText: topText,
        bottomText: bottomText,
        timestamp: new Date().getTime()
    };

    memes.push(memeConfig);

    // Only store the 5 most recent meme configurations
    if (memes.length > 5) {
        memes.shift();
    }

    localStorage.setItem('recentMemes', JSON.stringify(memes));
}

function loadRecentMemes() {
    let memes = JSON.parse(localStorage.getItem('recentMemes')) || [];
    if (memes.length > 0) {
        const lastMeme = memes[memes.length - 1];
        document.getElementById("memeImage").setAttribute("src", lastMeme.image);
        document.querySelector(".top-text").textContent = lastMeme.topText;
        document.querySelector(".bottom-text").textContent = lastMeme.bottomText;
    }
}

// On page load, display the most recent meme
window.onload = loadRecentMemes;
