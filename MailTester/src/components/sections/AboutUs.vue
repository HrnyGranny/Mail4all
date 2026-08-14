<script setup>
</script>

<template>
  <section class="about-section">
    <article class="about-card">
      <header class="about-card__header">
        <div class="about-card__heading">
          <span class="about-card__eyebrow">
            Our story
          </span>

          <h2 class="about-card__title">
            About MailTester
          </h2>
        </div>
      </header>

      <div class="about-card__body">
        <p>
          MailTester is built to make email testing simple, fast and reliable for
          teams that need to validate send flows without friction.
        </p>

        <p>
          We help developers and marketers check deliverability, content quality,
          and campaign behavior before emails are sent to real users.
        </p>

        <div class="about-card__facts">
          <div class="about-card__fact">
            <span class="about-card__fact-label">Focus</span>
            <strong>Email validation</strong>
          </div>

          <div class="about-card__fact">
            <span class="about-card__fact-label">Mission</span>
            <strong>Keep workflows clean</strong>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.about-section {
  flex: 1 1 auto;

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: flex;
  overflow: hidden;
}

.about-card {
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

.about-card:hover {
  box-shadow: var(--shadow-lg);
}

.about-card__header {
  position: relative;

  padding: clamp(18px, 2.4vw, 28px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--color-ink);

  overflow: hidden;
}

.about-card__header::after {
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

.about-card__heading {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about-card__eyebrow {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.about-card__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.35rem, 2.4vw, 2rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.045em;
}

.about-card__body {
  flex: 1;

  padding: clamp(20px, 2vw, 32px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.about-card__body p {
  margin: 0;

  color: var(--color-ink);

  font-size: 1rem;
  line-height: 1.7;
}

.about-card__facts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.about-card__fact {
  padding: 16px 18px;

  display: flex;
  flex-direction: column;
  gap: 6px;

  background-color: var(--color-paper);

  border: var(--border-width) solid var(--color-ink);
  border-radius: 18px;
}

.about-card__fact-label {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.about-card__fact strong {
  color: var(--color-ink);

  font-size: 1rem;
  line-height: 1.3;
}

@media (max-width: 767.98px) {
  .about-card {
    min-height: 0;
  }

  .about-card__facts {
    grid-template-columns: 1fr;
  }
}
</style>
