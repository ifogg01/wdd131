document.addEventListener("DOMContentLoaded", function() {
    addRandomVideo();
    addForm();
});

function addRandomVideo() {
    const videoURLs = [
        "https://www.tiktok.com/@dadadvicefrombo/video/7221717823477910826?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7098535189004946730?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7384623724667866398?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7383886080111578399?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7382772179936595230?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7381657217218497822?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7379799387712572715?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7376458265871404334?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7374977654740667694?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7372383804167703851?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7369787332226223406?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7368671886110182698?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7367191671588605227?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7366449144317103402?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7364220428065279275?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7359400671675796779?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7355310547996364074?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7347523692131388718?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7343987007993072942?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7344918934283504938?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7338630439331958058?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7334917628860960043?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7322299550742547758?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7321555451643006251?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7304112931937996075?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7298172391862177067?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7297629584630025515?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7275527615555931435?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7265512578183449899?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7255487451400080683?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7256980884346359086?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7252893486641401131?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7231743865525521710?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7230628016077032750?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7212812359012715818?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7193171922035805482?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7178687229567585579?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7168206127203913006?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7173863192676863278?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7166071159782477098?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7153811767192210734?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7153068243861720362?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7136000259473313067?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7132290258959404331?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7122635871936875818?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7130295561030339883?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7112256486939594026?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7093668930731969834?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7081446460482637102?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7080329591860022571?lang=en",
        "https://www.tiktok.com/@dadadvicefrombo/video/7002776590862060806?lang=en"

    ];

    function getRandomVideoURL() {
        const randomIndex = Math.floor(Math.random() * videoURLs.length);
        return videoURLs[randomIndex];
    }

    const randomVideoURL = getRandomVideoURL();
    const videoId = randomVideoURL.split('/')[5];

    const embedHTML = `
        <blockquote class="tiktok-embed" cite="${randomVideoURL}" data-video-id="${videoId}" style="max-width: 605px; min-width: 325px;">
            <section> </section>
        </blockquote>
    `;

    const randomVideoDiv = document.getElementById("random-video");
    if (randomVideoDiv) {
        randomVideoDiv.innerHTML = embedHTML;
    }

    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
}

function addForm() {
    const feedbackDiv = document.getElementById("feedback");

    const formHTML = `
        <form id="contactForm" action="/my-handling-form-page" method="post">
            <div>
                <h3><label for="fname">First name: </label></h3>
                <input id="fname" name="fname" type="text" required>
                <span></span>
            </div>
            <div>
                <h3><label for="lname">Last name: </label></h3>
                <input id="lname" name="lname" type="text" required>
                <span></span>
            </div>

            <div class="emailBox">
                <h3><label for="emailAddress">Your e-mail address:</label></h3>
                <input id="emailAddress" name="email" type="email" size="80" maxlength="100" required>
                <span></span>
            </div><br>

            <div class="messageBox">
                <h3><label for="message">Comments:</label><br></h3>
                <textarea id="message" name="message" cols="50" rows="10" required placeholder="What is your message"></textarea>
            </div>

            <div class="button-box">
                <button type="submit">Submit</button>
            </div>
        </form>
    `;

    if (feedbackDiv) {
        feedbackDiv.innerHTML = formHTML;
    }

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());

        alert(`Thank you for your submission, ${data.fname} ${data.lname}!`);
        console.log("Form Data Submitted: ", data);

        window.location.href = 'thankyou.html';
    });
}
