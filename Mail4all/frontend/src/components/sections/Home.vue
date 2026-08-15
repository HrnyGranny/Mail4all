<template>
  <section class="home-section">
    <article class="home-card">
      <header class="home-card__header">
        <div class="home-card__heading">
          <span class="home-card__eyebrow">
            Mail workspace
          </span>

          <h2 class="home-card__title">
            Welcome to MailTester
          </h2>
        </div>
      </header>

      <div class="home-card__body">
        <p class="home-card__description">
          Start from the sidebar and pick a workspace: Send for dropmail and
          subscriptions, Receive for inbox testing, or About us to learn more
          about the project.
        </p>
      </div>
    </article>
  </section>
</template>

<style scoped>
.home-section {
  flex: 1 1 auto;

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: flex;

  overflow: hidden;
}

.home-card {
  flex: 1 1 auto;

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: grid;
  grid-template-rows: minmax(112px, 20%) minmax(0, 80%);

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

.home-card:hover {
  box-shadow: var(--shadow-lg);
}

/* =========================================================
   HEADER
   ========================================================= */

.home-card__header {
  position: relative;

  padding: clamp(18px, 2.4vw, 28px);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--color-ink);

  overflow: hidden;
}

.home-card__header::after {
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

.home-card__heading {
  position: relative;
  z-index: 1;

  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
}

.home-card__eyebrow {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.home-card__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.35rem, 2.4vw, 2rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.045em;
}

.home-card__body {
  flex: 1;

  padding: clamp(18px, 2.5vw, 30px);

  display: flex;
  align-items: center;

  background-color: var(--color-bone);

  overflow: auto;
}

.home-card__description {
  max-width: 70ch;
  margin: 0;

  color: var(--color-ink);

  font-size: 1rem;
  line-height: 1.75;
}

/* =========================================================
   LOW HEIGHT
   ========================================================= */

@media (max-height: 650px) and (min-width: 768px) {
  .home-card {
    grid-template-rows: 96px minmax(0, 1fr);
  }

  .home-card__header {
    padding: 14px 22px;
  }

  .home-card__title {
    font-size: 1.4rem;
  }

  .home-card__body {
    padding: 18px;
  }
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 767.98px) {
  .home-card {
    grid-template-rows: auto minmax(0, 1fr);

    border-radius: var(--radius-lg);
  }

  .home-card__header {
    min-height: 118px;
    padding: 18px;

    align-items: flex-start;
  }

  .home-card__header::after {
    top: -115px;
    right: -70px;
  }

  .home-card__title {
    font-size: 1.45rem;
  }

  .home-card__body {
    padding: 16px;
  }
}

@media (max-width: 420px) {
  .home-card__header {
    padding: 15px;
  }

  .home-card__body {
    padding: 12px;
  }
}
</style>