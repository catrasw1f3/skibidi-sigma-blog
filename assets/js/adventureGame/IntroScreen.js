class IntroScreen {
  constructor({ title, message, buttonText = "Continue", onContinue }) {
    this.title = title;
    this.message = message;
    this.buttonText = buttonText;
    this.onContinue = onContinue;
    this.overlay = null;
  }

  show() {
    // Create overlay
    this.overlay = document.createElement('div');
    this.overlay.id = 'intro-overlay';
    Object.assign(this.overlay.style, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.85)',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      fontFamily: 'trebuchet ms',
    });

    // Add content
    this.overlay.innerHTML = `
      <h1 style="margin-bottom: 1em;">${this.title}</h1>
      <p style="max-width: 600px; text-align: center; margin-bottom: 2em;">${this.message}</p>
      <button id="intro-continue-btn" style="padding: 0.5em 2em; font-size: 1.2em; cursor: pointer;">${this.buttonText}</button>
    `;

    document.body.appendChild(this.overlay);

    document.getElementById('intro-continue-btn').onclick = () => {
      this.hide();
      if (this.onContinue) this.onContinue();
    };
  }

  hide() {
    if (this.overlay) {
      document.body.removeChild(this.overlay);
      this.overlay = null;
    }
  }
}

export default IntroScreen;