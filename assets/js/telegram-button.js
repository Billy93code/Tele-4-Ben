(function () {
  const TELEGRAM_URL = "https://bit.ly/Israel-Weed";
  const BUTTON_ID = "telegram-floating-button";

  const createTelegramButton = () => {
    if (document.getElementById(BUTTON_ID)) {
      return;
    }

    const style = document.createElement("style");
    style.textContent = `
      .telegram-floating-button {
        position: fixed;
        right: max(18px, env(safe-area-inset-right));
        bottom: max(18px, env(safe-area-inset-bottom));
        z-index: 1000;
        display: inline-flex;
        align-items: center;
        gap: 10px;
        min-height: 58px;
        padding: 13px 18px;
        border-radius: 999px;
        color: #ffffff;
        background: linear-gradient(135deg, #35aee2 0%, #1e96c8 100%);
        box-shadow: 0 16px 34px rgba(30, 150, 200, 0.34);
        font-family: inherit;
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
        animation: telegram-floating-button-bounce 2.4s ease-in-out infinite;
        transition: transform 180ms ease, box-shadow 180ms ease, filter 180ms ease;
      }

      @keyframes telegram-floating-button-bounce {
        0%, 20%, 50%, 80%, 100% {
          transform: translateY(0);
        }

        40% {
          transform: translateY(-10px);
        }

        60% {
          transform: translateY(-5px);
        }
      }

      .telegram-floating-button:hover,
      .telegram-floating-button:focus-visible {
        animation-play-state: paused;
        transform: translateY(-3px);
        box-shadow: 0 20px 42px rgba(30, 150, 200, 0.42);
        filter: brightness(1.04);
      }

      .telegram-floating-button:focus-visible {
        outline: 3px solid rgba(53, 174, 226, 0.32);
        outline-offset: 4px;
      }

      .telegram-floating-button__icon {
        width: 28px;
        height: 28px;
        flex: 0 0 auto;
      }

      @media (max-width: 560px) {
        .telegram-floating-button {
          right: max(14px, env(safe-area-inset-right));
          bottom: max(14px, env(safe-area-inset-bottom));
          height: 58px;
          max-width: calc(100vw - 28px);
          padding: 10px 14px;
          font-size: 0.88rem;
        }
      }
    `;

    const button = document.createElement("a");
    button.id = BUTTON_ID;
    button.className = "telegram-floating-button";
    button.href = TELEGRAM_URL;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.setAttribute("aria-label", "לכיוון מהיר לחצו כאן !");
    button.innerHTML = `
      <svg class="telegram-floating-button__icon" viewBox="0 0 240 240" aria-hidden="true" focusable="false">
        <circle cx="120" cy="120" r="120" fill="rgba(255,255,255,0.18)"></circle>
        <path fill="#ffffff" d="M48.8 117.6c35-15.2 58.3-25.2 69.9-30.1 33.3-13.9 40.2-16.3 44.7-16.4 1 0 3.2.2 4.7 1.4 1.2 1 1.6 2.4 1.8 3.4.2 1 .4 3.2.2 4.9-1.8 19.2-9.7 65.8-13.8 87.3-1.7 9.1-5.1 12.2-8.4 12.5-7.1.7-12.6-4.7-19.5-9.2-10.8-7.1-16.9-11.5-27.4-18.4-12.1-8-4.3-12.4 2.6-19.6 1.8-1.9 33.2-30.4 33.8-33 .1-.3.1-1.6-.6-2.2-.7-.6-1.7-.4-2.5-.2-1.1.2-18.1 11.5-51.2 33.8-4.8 3.3-9.2 4.9-13.2 4.8-4.3-.1-12.7-2.5-18.9-4.5-7.6-2.5-13.7-3.8-13.2-8 .3-2.2 3.8-4.4 10.5-6.8Z"></path>
      </svg>
      <span class="telegram-floating-button__text">לכיוון מהיר לחצו כאן !</span>
    `;

    document.head.appendChild(style);
    document.body.appendChild(button);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createTelegramButton);
    return;
  }

  createTelegramButton();
})();