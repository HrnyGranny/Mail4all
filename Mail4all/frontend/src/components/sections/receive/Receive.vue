<template>
  <section class="receive-section">
    <article class="receive-card">
      <header class="receive-card__header">
        <div class="receive-card__heading">
          <span class="receive-card__eyebrow">
            Mail workspace
          </span>

          <h2 class="receive-card__title">
            Receive mails
          </h2>
        </div>
      </header>

      <div class="receive-card__body">
        <p>
          This section is ready for your incoming mail testing flow.
          Here you can add mailbox listeners, inbox snapshots, and receive rules.
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.receive-section {
  flex: 1 1 auto;

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: flex;

  overflow: hidden;
}

.receive-card {
  flex: 1 1 auto;

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--color-ink);
  border-radius: 24px;

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    box-shadow var(--transition-normal);
}

.receive-card:hover {
  box-shadow: var(--shadow-lg);
}

.receive-card__header {
  position: relative;

  padding: clamp(18px, 2.4vw, 28px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--color-ink);

  overflow: hidden;
}

.receive-card__header::after {
  content: "";

  position: absolute;
  top: -90px;
  right: -55px;

  width: 190px;
  height: 190px;

  background-color: #d8ff3d;
  border: var(--border-width) solid #0e0e0c;
  border-radius: 50%;

  opacity: 0.6;
  pointer-events: none;
}

.receive-card__heading {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 4px;
}

.receive-card__eyebrow {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.receive-card__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.35rem, 2.4vw, 2rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.045em;
}

.receive-card__body {
  flex: 1;

  padding: clamp(20px, 2vw, 32px);

  display: flex;
  align-items: center;
}

.receive-card__body p {
  max-width: 65ch;
  margin: 0;

  color: var(--color-ink);

  font-size: 1rem;
  line-height: 1.7;
}
</style>
