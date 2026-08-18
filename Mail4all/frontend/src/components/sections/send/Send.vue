<script setup>
import { ref } from 'vue'

const activeMode = ref('base')

const selectMode = (mode) => {
  activeMode.value = mode
}
</script>

<template>
  <section class="send-section">
    <article class="send-card">
      <header class="send-header">
        <div class="send-header__identity">
          <div class="send-header__content">
            <span class="send-header__eyebrow">
              Mail workspace
            </span>

            <h1 class="send-header__title">
              Send
            </h1>
          </div>
        </div>

        <div
          class="send-mode"
          role="tablist"
          aria-label="Send mode"
        >
          <span
            class="send-mode__slider"
            :class="{
              'send-mode__slider--api': activeMode === 'api',
            }"
            aria-hidden="true"
          ></span>

          <button
            type="button"
            class="send-mode__option"
            :class="{
              'send-mode__option--active': activeMode === 'base',
            }"
            role="tab"
            :aria-selected="activeMode === 'base'"
            aria-controls="send-mode-panel"
            @click="selectMode('base')"
          >
            <span
              class="send-mode__icon material-symbols-rounded"
              aria-hidden="true"
            >
              send
            </span>

            <span>Base</span>
          </button>

          <button
            type="button"
            class="send-mode__option"
            :class="{
              'send-mode__option--active': activeMode === 'api',
            }"
            role="tab"
            :aria-selected="activeMode === 'api'"
            aria-controls="send-mode-panel"
            @click="selectMode('api')"
          >
            <span
              class="send-mode__icon material-symbols-rounded"
              aria-hidden="true"
            >
              code
            </span>

            <span>API</span>
          </button>
        </div>
      </header>

      <div
        id="send-mode-panel"
        class="send-content"
        role="tabpanel"
        tabindex="0"
      ></div>
    </article>
  </section>
</template>

<style scoped>
.send-section {
  flex: 1 1 auto;

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  padding: 0 0 6px;

  display: flex;

  overflow: hidden;
}

.send-card {
  flex: 1 1 auto;

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

  box-shadow: var(--shadow-sm);

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal);
}

/* =========================================================
   HEADER
   ========================================================= */

.send-header {
  width: 100%;
  min-width: 0;
  min-height: 104px;
  padding: 18px 28px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  column-gap: clamp(24px, 4vw, 52px);

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--border-color);
}

.send-header__identity {
  min-width: 0;
}

.send-header__content {
  min-width: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.send-header__eyebrow {
  display: block;

  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.send-header__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.65rem, 2.5vw, 2.2rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.055em;
}

/* =========================================================
   MODE SELECTOR
   ========================================================= */

.send-mode {
  position: relative;

  width: 224px;
  height: 50px;
  padding: 4px;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  background-color: var(--color-paper);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-pill);

  overflow: hidden;
}

.send-mode__slider {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  z-index: 0;

  width: calc(50% - 4px);

  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: var(--radius-pill);

  transform: translateX(0);

  transition: transform 260ms var(--ease-boldcase);

  pointer-events: none;
}

.send-mode__slider--api {
  transform: translateX(100%);
}

.send-mode__option {
  position: relative;
  z-index: 1;

  min-width: 0;
  height: 100%;
  padding: 0 14px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  color: var(--color-graphite);
  background-color: transparent;

  border: none;
  border-radius: var(--radius-pill);

  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-fast),
    transform var(--transition-fast);
}

.send-mode__option:hover {
  color: var(--color-ink);

  transform: translateY(-1px);
}

.send-mode__option--active,
.send-mode__option--active:hover {
  color: var(--color-on-accent);

  transform: none;
}

.send-mode__icon {
  width: 20px;
  height: 20px;
  flex: 0 0 20px;

  color: currentColor;

  font-size: 19px;

  font-variation-settings:
    "FILL" 0,
    "wght" 600,
    "GRAD" 0,
    "opsz" 20;
}

/* =========================================================
   CONTENT
   ========================================================= */

.send-content {
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  min-height: 0;

  background-color: var(--color-bone);
}

/* =========================================================
   LOW HEIGHT
   ========================================================= */

@media (max-height: 650px) and (min-width: 768px) {
  .send-header {
    min-height: 86px;
    padding: 12px 24px;
  }

  .send-header__content {
    gap: 3px;
  }

  .send-header__eyebrow {
    font-size: 0.56rem;
  }

  .send-header__title {
    font-size: 1.5rem;
  }

  .send-mode {
    width: 210px;
    height: 44px;
  }

  .send-mode__option {
    padding: 0 12px;

    font-size: 0.7rem;
  }
}

/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 991.98px) {
  .send-section {
    height: auto;
    min-height: 100%;
    flex: 0 0 auto;

    overflow: visible;
  }

  .send-card {
    height: auto;
    min-height: 100%;
  }

  .send-header {
    min-height: 92px;
    padding: 14px 22px;

    grid-template-columns: minmax(0, 1fr) 210px;
    column-gap: 20px;
  }

  .send-header__content {
    gap: 4px;
  }

  .send-header__title {
    font-size: clamp(1.55rem, 3vw, 1.9rem);
  }

  .send-mode {
    width: 210px;
    height: 46px;
  }

  .send-mode__option {
    padding: 0 12px;
  }

  .send-content {
    min-height: 420px;
  }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767.98px) {
  .send-header {
    min-height: 0;
    padding: 16px 18px;

    grid-template-columns: minmax(0, 1fr);
    align-items: stretch;
    row-gap: 14px;
  }

  .send-header__content {
    gap: 4px;
  }

  .send-header__title {
    font-size: 1.7rem;
  }

  .send-mode {
    width: 100%;
    height: 46px;
  }

  .send-mode__option {
    width: 100%;
    min-width: 0;
  }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .send-header {
    padding: 14px 16px;
    row-gap: 12px;
  }

  .send-header__eyebrow {
    font-size: 0.54rem;
  }

  .send-header__title {
    font-size: 1.6rem;
  }

  .send-mode {
    height: 44px;
  }

  .send-mode__option {
    padding: 0 10px;
    gap: 6px;

    font-size: 0.68rem;
  }

  .send-mode__icon {
    width: 18px;
    height: 18px;
    flex-basis: 18px;

    font-size: 18px;
  }

  .send-content {
    min-height: 360px;
  }
}
</style>