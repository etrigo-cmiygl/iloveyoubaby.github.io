const startButton = document.getElementById("start-button");
const mainText = document.getElementById("main-text");
const smallText = document.querySelector(".small-text");

startButton.addEventListener("click", function() {
    // Change the URL to trigger page reloads with different content
    if (window.location.href.includes("reload1")) {
        window.location.href = "index.html?reload2";
    } else if (window.location.href.includes("reload2")) {
        window.location.href = "index.html?reload3";
    } else if (window.location.href.includes("reload3")) {
        window.location.href = "index.html?reload4";
    } else {
        window.location.href = "index.html?reload1";
    }
});

// Check URL for reload type and update content accordingly
if (window.location.href.includes("reload1")) {
    mainText.innerText = "I love you baby and obviously I wanted to do something since this was our first valentine's day tg but I really could not cause of the circumstances (still not an excuse ik) but with the few remaining brain cells and for the amounts I love you I had to try and do something so here you go, and again I am sorry tht I could not do much and yea Ik there are other bfs doing lots like I'm sure uk as well but here it goes";
    startButton.innerText = "Click Me";
} else if (window.location.href.includes("reload2")) {
    mainText.innerHTML = "<h2>Every Single Reason I Love You Baby:</h2><ul>" +
        "<li>Your smile</li><li>Your eyes</li><li>Your laugh</li><li>Your humor</li><li>The way you treat animals</li><li>Beautiful</li><li>Pretty</li><li>So adorable</li><li>Drop dead gorgeous</li><li>My smart baby (hehehe A* in math)</li>" +
        "<li>Your love towards me</li><li>Your vibe</li><li>Your creativity</li><li>So unique</li><li>Your warmth</li><li>Your voice</li><li>So hardworking</li><li>So perfect</li><li>Patience towards certain situations</li>" +
        "<li>Intelligence</li><li>You are my motivation</li><li>Your natural beauty (yes my no makeup queen)</li><li>Your love towards your mom</li><li>How perfect of a mother you are</li><li>Your childish side</li>" +
        "<li>Your touch</li><li>Your taste in music (yes I do love it)</li><li>Your dedication to God</li><li>Your dedication to us</li><li>Our little jokes</li><li>The way you reassure me</li><li>You don’t judge me</li><li>Our perfect bond</li>" +
        "<li>Our love for pasta and everything similar</li><li>Your self-care (heheheh my perfect baby)</li><li>Your kisses</li><li>Your body (yes that includes everything and you know that love)</li><li>The way you call me handsome</li>" +
        "<li>How adorable the ‘bye’ is</li><li>How dramatic the ‘k’ is</li><li>Cute – ur js so fucking cute</li><li>You make me a better person</li><li>You are awesome sauce hehehe</li><li>You bring out the child in me</li>" +
        "<li>You are so talented</li><li>You are my gift from god</li><li>The way you look at me, an angel</li><li>You with braces is cute</li><li>You without braces is cute</li><li>Our late-night talks</li><li>Sacrificed so much for me</li>" +
        "<li>Baby bonnet</li><li>You are my cute baby</li></ul>";
    startButton.innerText = "You know the drill, click on it";
} else if (window.location.href.includes("reload3")) {
    mainText.innerHTML = "<h1>HAPPY VALENTINES DAY BABY</h1><p>baby, hridya, babe, my cute love, my everything, my girlfriend, my wife, the mother of my children, my one and only, I love you soo much, its ineffable (new word hehehehe) but no fr baby, I love you loads, lots, tons, infinity x infinity, and sooooooooo much more than that, and baby I am and will always be soo grateful for you, thank you love for coming into my life and being with me and for me through everything, I love you baby and I miss you so much AND I MISS MY BABIES AND THAT ASS UGHHHHH.</p>";
    startButton.innerText = "For the last time, I promise";
} else if (window.location.href.includes("reload4")) {
    // Add text above the GIF and emojis
    mainText.innerHTML = "<h2>My Forever Valentine</h2>";
    
    // Add the first GIF
    const gif1 = "<img src='I Love You Kiss GIF by Cool Cats.gif' alt='I Love You Kiss GIF' />";
    // Add the second GIF below
    const gif2 = "<img src='Heart Love GIF by Chippy the Dog.gif' alt='Heart Love GIF' />";
    // Add the love message under the GIFs
    const loveMessage = "<p>I love you baby and once again happy valentine’s day my love</p>";

    // Add all to the content div
    document.querySelector('.content').innerHTML = gif1 + gif2 + loveMessage;
    startButton.style.display = "none"; // Hide button on this page
}
