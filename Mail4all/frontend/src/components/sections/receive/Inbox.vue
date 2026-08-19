<template>
  <article class="receive-inbox">
    <header class="receive-inbox__header">
      <div class="receive-inbox__heading">
        <span class="receive-inbox__eyebrow">
          Incoming messages
        </span>

        <h2 class="receive-inbox__title">
          Inbox
        </h2>
      </div>

      <span
        class="receive-inbox__counter"
        aria-label="Zero emails"
      >
        00
      </span>
    </header>

    <div class="receive-inbox__body">
      <div class="receive-inbox__empty">
        <div
          class="receive-inbox__waiting"
          aria-hidden="true"
        >
          <span
            class="receive-inbox__empty-icon material-symbols-rounded"
          >
            inbox
          </span>

          <span class="receive-inbox__signal receive-inbox__signal--one"></span>
          <span class="receive-inbox__signal receive-inbox__signal--two"></span>
          <span class="receive-inbox__signal receive-inbox__signal--three"></span>
        </div>

        <div class="receive-inbox__empty-content">
          <strong>Waiting for emails</strong>

          <span>
            New messages will appear here automatically.
          </span>

          <span
            class="receive-inbox__waiting-label"
            aria-label="Waiting for incoming emails"
          >
            Listening

            <span
              class="receive-inbox__waiting-dots"
              aria-hidden="true"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.receive-inbox {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-lg);

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.receive-inbox:hover {
  transform: translateY(-2px);

  box-shadow: 4px 4px 0 var(--color-ink);
}

/* =========================================================
   HEADER
   ========================================================= */

.receive-inbox__header {
  min-width: 0;
  padding: 14px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--border-color);
}

.receive-inbox__heading {
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
}

.receive-inbox__eyebrow {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.54rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.receive-inbox__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.receive-inbox__counter {
  min-width: 34px;
  height: 26px;
  padding: 0 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--color-on-accent);
  background-color: var(--color-tangerine);

  border: 1px solid var(--color-on-accent);
  border-radius: var(--radius-pill);

  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 700;
}

/* =========================================================
   BODY
   ========================================================= */

.receive-inbox__body {
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  min-height: 0;
  padding: clamp(14px, 1.5vw, 18px);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-bone);

  overflow: auto;
}

/* =========================================================
   EMPTY STATE
   ========================================================= */

.receive-inbox__empty {
  width: min(100%, 440px);
  min-height: 126px;
  padding: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  background-color: var(--color-paper);

  border: var(--border-width) dashed var(--border-color);
  border-radius: var(--radius-lg);
}

.receive-inbox__waiting {
  position: relative;

  width: 64px;
  height: 64px;
  flex: 0 0 64px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.receive-inbox__empty-icon {
  position: relative;
  z-index: 2;

  width: 46px;
  height: 46px;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: 13px;

  font-size: 25px;

  animation: receive-inbox-float 2.4s var(--ease-boldcase) infinite;
}

/* =========================================================
   WAITING SIGNAL
   ========================================================= */

.receive-inbox__signal {
  position: absolute;
  inset: 8px;
  z-index: 1;

  border: 1px solid var(--color-ink);
  border-radius: 16px;

  opacity: 0;

  animation: receive-inbox-signal 2.4s var(--ease-boldcase) infinite;
}

.receive-inbox__signal--two {
  animation-delay: 800ms;
}

.receive-inbox__signal--three {
  animation-delay: 1600ms;
}

@keyframes receive-inbox-signal {
  0% {
    opacity: 0.45;
    transform: scale(0.72);
  }

  65% {
    opacity: 0;
    transform: scale(1.35);
  }

  100% {
    opacity: 0;
    transform: scale(1.35);
  }
}

@keyframes receive-inbox-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}

/* =========================================================
   EMPTY CONTENT
   ========================================================= */

.receive-inbox__empty-content {
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 3px;
}

.receive-inbox__empty-content strong {
  color: var(--color-ink);

  font-size: 0.82rem;
  line-height: 1.3;
}

.receive-inbox__empty-content > span:not(.receive-inbox__waiting-label) {
  color: var(--color-graphite);

  font-size: 0.68rem;
  line-height: 1.4;
}

.receive-inbox__waiting-label {
  margin-top: 5px;

  display: inline-flex;
  align-items: center;
  gap: 5px;

  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.5rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.receive-inbox__waiting-dots {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.receive-inbox__waiting-dots span {
  width: 4px;
  height: 4px;

  background-color: var(--color-tangerine);

  border: 1px solid var(--color-on-accent);
  border-radius: 50%;

  animation: receive-inbox-dot 1.2s ease-in-out infinite;
}

.receive-inbox__waiting-dots span:nth-child(2) {
  animation-delay: 160ms;
}

.receive-inbox__waiting-dots span:nth-child(3) {
  animation-delay: 320ms;
}

@keyframes receive-inbox-dot {
  0%,
  60%,
  100% {
    opacity: 0.35;
    transform: translateY(0);
  }

  30% {
    opacity: 1;
    transform: translateY(-2px);
  }
}

/* =========================================================
   LOW HEIGHT
   ========================================================= */

@media (max-height: 650px) and (min-width: 768px) {
  .receive-inbox__header {
    padding: 9px 14px;
  }

  .receive-inbox__heading {
    gap: 2px;
  }

  .receive-inbox__eyebrow {
    font-size: 0.48rem;
  }

  .receive-inbox__body {
    padding: 10px;
  }

  .receive-inbox__empty {
    min-height: 86px;
    padding: 10px 12px;

    gap: 13px;
  }

  .receive-inbox__waiting {
    width: 50px;
    height: 50px;
    flex-basis: 50px;
  }

  .receive-inbox__empty-icon {
    width: 38px;
    height: 38px;

    font-size: 21px;
  }

  .receive-inbox__signal {
    inset: 6px;
  }

  .receive-inbox__waiting-label {
    margin-top: 2px;
  }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767.98px) {
  .receive-inbox {
    height: auto;
    min-height: 360px;
    flex: 0 0 auto;
  }

  .receive-inbox__body {
    min-height: 290px;

    overflow: visible;
  }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .receive-inbox {
    min-height: 340px;
  }

  .receive-inbox__header {
    padding: 13px 14px;
  }

  .receive-inbox__body {
    min-height: 275px;
    padding: 12px;
  }

  .receive-inbox__empty {
    min-height: 160px;
    padding: 16px;

    flex-direction: column;
    gap: 11px;

    text-align: center;
  }

  .receive-inbox__empty-content {
    align-items: center;
  }
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .receive-inbox__empty-icon,
  .receive-inbox__signal,
  .receive-inbox__waiting-dots span {
    animation: none;
  }

  .receive-inbox__signal {
    display: none;
  }

  .receive-inbox__waiting-dots span {
    opacity: 1;
  }
}
</style>