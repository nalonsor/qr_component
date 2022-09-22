import qr from'./assets/image-qr-code.png';

function App() {
  return (
    <>

      <main className="wrapQr">
        <img src={qr} alt="Codigo qr" />
        <div>
          <h1>
            Improve your front-end skills by building projects
          </h1>

          <h2>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </h2>
    
          
        </div>
      </main>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.linkedin.com/in/noe-alonso-34437869/">Noé Alonso</a>.
      </div>

    </>
  );
}

export default App;
