<script setup>
import { ref } from 'vue'

const activeMode = ref('base')

const selectMode = (mode) => {
  activeMode.value = mode
}
</script>

<template>
  <section class="receive-section">
    <article class="receive-card">
      <header class="receive-header">
        <div class="receive-header__identity">
          <div class="receive-header__content">
            <span class="receive-header__eyebrow">
              Inbox workspace
            </span>

            <h1 class="receive-header__title">
              Receive
            </h1>
          </div>
        </div>

        <div
          class="receive-mode"
          role="tablist"
          aria-label="Receive mode"
        >
          <span
            class="receive-mode__slider"
            :class="{
              'receive-mode__slider--api': activeMode === 'api',
            }"
            aria-hidden="true"
          ></span>

          <button
            type="button"
            class="receive-mode__option"
            :class="{
              'receive-mode__option--active': activeMode === 'base',
            }"
            role="tab"
            :aria-selected="activeMode === 'base'"
            aria-controls="receive-mode-panel"
            @click="selectMode('base')"
          >
            <span
              class="receive-mode__icon material-symbols-rounded"
              aria-hidden="true"
            >
              dashboard
            </span>

            <span>Base</span>
          </button>

          <button
            type="button"
            class="receive-mode__option"
            :class="{
              'receive-mode__option--active': activeMode === 'api',
            }"
            role="tab"
            :aria-selected="activeMode === 'api'"
            aria-controls="receive-mode-panel"
            @click="selectMode('api')"
          >
            <span
              class="receive-mode__icon material-symbols-rounded"
              aria-hidden="true"
            >
              code
            </span>

            <span>API</span>
          </button>
        </div>
      </header>

      <div
        id="receive-mode-panel"
        class="receive-content"
        role="tabpanel"
        tabindex="0"
      ></div>
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

  padding: 0 0 6px;

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

.receive-header {
  width: 100%;
  min-width: 0;
  padding: clamp(18px, 2.5vw, 30px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--border-color);
}

.receive-header__identity {
  min-width: 0;

  display: flex;
  align-items: flex-start;
}

.receive-header__content {
  min-width: 0;
}

.receive-header__eyebrow {
  display: block;
  margin-bottom: 4px;

  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.receive-header__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.055em;
}

/* =========================================================
   MODE SELECTOR
   ========================================================= */

.receive-mode {
  position: relative;

  flex: 0 0 auto;
  width: min(100%, 220px);
  height: 50px;
  padding: 4px;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  background-color: var(--color-paper);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-pill);

  overflow: hidden;
}

.receive-mode__slider {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  z-index: 0;

  width: calc(50% - 4px);

  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: var(--radius-pill);

  box-shadow: 2px 2px 0 var(--color-on-accent);

  transform: translateX(0);

  transition: transform 260ms var(--ease-boldcase);

  pointer-events: none;
}

.receive-mode__slider--api {
  transform: translateX(100%);
}

.receive-mode__option {
  position: relative;
  z-index: 1;

  min-width: 0;
  height: 100%;
  padding: 0 15px;

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

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-fast),
    transform var(--transition-fast);
}

.receive-mode__option:hover {
  color: var(--color-ink);

  transform: translateY(-1px);
}

.receive-mode__option--active,
.receive-mode__option--active:hover {
  color: var(--color-on-accent);

  transform: none;
}

.receive-mode__icon {
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

.receive-content {
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  min-height: 0;

  background-color: var(--color-bone);
}

/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 991.98px) {
  .receive-section {
    height: auto;
    min-height: 100%;
    flex: 0 0 auto;

    overflow: visible;
  }

  .receive-card {
    height: auto;
    min-height: 100%;
  }

  .receive-header {
    align-items: flex-start;
  }

  .receive-content {
    min-height: 420px;
  }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767.98px) {
  .receive-header {
    padding: 18px;

    flex-direction: column;
    align-items: stretch;
    gap: 18px;
  }

  .receive-mode {
    width: 100%;
    max-width: none;
  }

  .receive-mode__option {
    width: 100%;
    min-width: 0;
  }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .receive-header {
    padding: 16px;
  }

  .receive-header__title {
    font-size: 1.65rem;
  }

  .receive-mode {
    height: 46px;
  }

  .receive-mode__option {
    padding: 0 12px;

    font-size: 0.68rem;
  }

  .receive-content {
    min-height: 360px;
  }
}
</style>