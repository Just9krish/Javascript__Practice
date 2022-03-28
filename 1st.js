const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <link
          rel="stylesheet"
          media="screen and (max-width:400px)"
          href="mobile.css"
        />
        <link rel="stylesheet" href="style.css" />
        <title>Frontend Mentor | Single Price Grid Component</title>
        <style>
          .attribution {
            font-size: 15px;
            text-align: center;
          }
          .attribution a {
            color: hsl(228, 45%, 44%);
          }
        </style>
      </head>
      <body>
        <main>
          <div class="container">
            <div class="whiteBGsection">
              <div class="box">
                <div class="header">
                  <header>
                    <h1 class="cyan-h">Join our community</h1>
                  </header>
                </div>
                <div class="head-discription">
                  <p class="yellow-p">30-day, hassle-free money back guarantee</p>
                  <p class="gray-p">
                    Gain access to our full library of tutorials along with expert
                    code reviews. <br />Perfect for any developers who are serious
                    about honing their skills.
                  </p>
                </div>
              </div>
            </div>
            <div class="left-cyan">
              <div class="left-heading">
                <header>
                  <h2 class="white-h">Monthly Subcription</h2>
                </header>
                <div class="subscription-price">
                  <div class="per-month-box">
                    <span class="per-month-box__price">$29</span>
                    <span class="per-month-box__text">per month</span>
                  </div>
                  <p class="price-title">
                    Full access for less than &dollar;1 a day
                  </p>
                </div>
                <button class="btn">Sign Up</button>
              </div>
            </div>
            <div class="right-lightcyan">
              <div class="right-heading">
                <header>
                  <h2 class="white-h">Why Us</h2>
                </header>
                <div class="lightcyan-para">
                  <p>Tutorials by industry experts</p>
                  <p>Peer &amp; expert code review</p>
                  <p>Coding exercises</p>
                  <p>Access to our GitHub repos</p>
                  <p>Community forum</p>
                  <p>Flashcard decks</p>
                  <p>New videos every week</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <p class="attribution">
            Challenge by
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
              >Frontend Mentor</a
            >. Coded by <a href="www.frontendmentor.io/profile/Just9krish/">Just9krish</a>.
          </p>
        </footer>
      </body>
    </html>
    `);
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});