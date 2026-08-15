<template>
  <section class="dropmail-mode">
    <div class="dropmail-mode__content">
      <span class="dropmail-mode__eyebrow">
        Mode · 01
      </span>

      <div class="dropmail-mode__title-row">
        <span
          class="dropmail-mode__icon material-symbols-rounded"
          aria-hidden="true"
        >
          send
        </span>

        <h2 class="dropmail-mode__title">
          Dropmail
        </h2>
      </div>

      <p class="dropmail-mode__description">
        The mail composition workspace will be displayed here.
      </p>
    </div>
  </section>
</template>

<style scoped>
.dropmail-mode {
  flex: 1 1 auto;

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-ink);
  background-color: var(--color-paper);

  border: var(--border-width) dashed var(--color-ink);
  border-radius: var(--radius-lg);

  overflow: hidden;
}

.dropmail-mode__content {
  max-width: 520px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  text-align: center;
}

.dropmail-mode__eyebrow {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.dropmail-mode__title-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.dropmail-mode__icon {
  width: 44px;
  height: 44px;
  flex: 0 0 44px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #0e0e0c;
  background-color: #d8ff3d;

  border: var(--border-width) solid #0e0e0c;
  border-radius: 14px;

  font-size: 24px;
}

.dropmail-mode__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
}

.dropmail-mode__description {
  max-width: 42ch;
  margin: 0;

  color: var(--color-graphite);

  font-size: 0.9rem;
  line-height: 1.55;
}

@media (max-width: 575.98px) {
  .dropmail-mode__content {
    padding: 18px;
  }

  .dropmail-mode__title-row {
    flex-direction: column;
  }

  .dropmail-mode__title {
    font-size: 2rem;
  }
}
</style>
