<script setup>
import { computed, ref } from 'vue'

import Api from '@/components/sections/receive/Api.vue'
import Email from '@/components/sections/receive/Email.vue'
import Graph from '@/components/sections/receive/Graph.vue'
import Inbox from '@/components/sections/receive/Inbox.vue'

const MODES = {
  BASE: 'base',
  API: 'api',
}

const activeMode = ref(MODES.BASE)

const activeModeLabel = computed(() => {
  return activeMode.value === MODES.BASE ? 'Base' : 'API'
})

const selectMode = (mode) => {
  if (!Object.values(MODES).includes(mode)) {
    return
  }

  activeMode.value = mode
}

const handleEditEmail = (email) => {
  console.info('Edit temporary email:', email)
}

const handleShareEmail = (email) => {
  console.info('Share temporary email:', email)
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
              'receive-mode__slider--api':
                activeMode === MODES.API,
            }"
            aria-hidden="true"
          ></span>

          <button
            id="receive-base-tab"
            type="button"
            class="receive-mode__option"
            :class="{
              'receive-mode__option--active':
                activeMode === MODES.BASE,
            }"
            role="tab"
            :aria-selected="activeMode === MODES.BASE"
            aria-controls="receive-mode-panel"
            :tabindex="activeMode === MODES.BASE ? 0 : -1"
            @click="selectMode(MODES.BASE)"
          >
            <span
              class="receive-mode__icon material-symbols-rounded"
              aria-hidden="true"
            >
              inbox
            </span>

            <span>Base</span>
          </button>

          <button
            id="receive-api-tab"
            type="button"
            class="receive-mode__option"
            :class="{
              'receive-mode__option--active':
                activeMode === MODES.API,
            }"
            role="tab"
            :aria-selected="activeMode === MODES.API"
            aria-controls="receive-mode-panel"
            :tabindex="activeMode === MODES.API ? 0 : -1"
            @click="selectMode(MODES.API)"
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
        :aria-labelledby="
          activeMode === MODES.BASE
            ? 'receive-base-tab'
            : 'receive-api-tab'
        "
        :aria-label="`${activeModeLabel} receive mode`"
      >
        <Transition
          name="receive-view"
          mode="out-in"
        >
          <div
            v-if="activeMode === MODES.BASE"
            key="base"
            class="receive-base"
          >
            <div class="receive-base__top">
              <Email
                class="receive-base__email"
                email="demo@mail4all.app"
                @edit="handleEditEmail"
                @share="handleShareEmail"
              />

              <Graph class="receive-base__graph" />
            </div>

            <Inbox class="receive-base__inbox" />
          </div>

          <Api
            v-else
            key="api"
            class="receive-api"
          />
        </Transition>
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
  min-height: 104px;
  padding: 18px 28px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  column-gap: clamp(24px, 4vw, 52px);

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--border-color);
}

.receive-header__identity {
  min-width: 0;
}

.receive-header__content {
  min-width: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
}

.receive-header__eyebrow {
  display: block;

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

  font-size: clamp(1.65rem, 2.5vw, 2.2rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.055em;
}

/* =========================================================
   MODE SELECTOR
   ========================================================= */

.receive-mode {
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
   CONTENT PANEL
   ========================================================= */

.receive-content {
  position: relative;

  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  min-height: 0;
  padding: clamp(14px, 1.8vw, 22px);

  background-color: var(--color-bone);

  overflow: hidden;
}

/* =========================================================
   BASE VIEW
   ========================================================= */

.receive-base {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: grid;
  grid-template-rows: minmax(165px, 1fr) minmax(0, 2fr);
  gap: clamp(12px, 1.4vw, 18px);
}

.receive-base__top {
  width: 100%;
  min-width: 0;
  min-height: 0;

  display: grid;
  grid-template-columns: minmax(240px, 1fr) minmax(0, 2fr);
  gap: clamp(12px, 1.4vw, 18px);
}

.receive-base__email,
.receive-base__graph,
.receive-base__inbox,
.receive-api {
  min-width: 0;
  min-height: 0;
}

/* =========================================================
   VIEW TRANSITION
   ========================================================= */

.receive-view-enter-active,
.receive-view-leave-active {
  transition:
    opacity 180ms var(--ease-boldcase),
    transform 180ms var(--ease-boldcase);
}

.receive-view-enter-from {
  opacity: 0;

  transform: translateY(8px);
}

.receive-view-leave-to {
  opacity: 0;

  transform: translateY(-8px);
}

/* =========================================================
   LOW HEIGHT
   ========================================================= */

@media (max-height: 650px) and (min-width: 768px) {
  .receive-header {
    min-height: 86px;
    padding: 12px 24px;
  }

  .receive-header__content {
    gap: 3px;
  }

  .receive-header__eyebrow {
    font-size: 0.56rem;
  }

  .receive-header__title {
    font-size: 1.5rem;
  }

  .receive-mode {
    width: 210px;
    height: 44px;
  }

  .receive-mode__option {
    padding: 0 12px;

    font-size: 0.7rem;
  }

  .receive-content {
    padding: 12px;
  }

  .receive-base {
    grid-template-rows: minmax(140px, 1fr) minmax(0, 2fr);
    gap: 10px;
  }

  .receive-base__top {
    gap: 10px;
  }
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
    min-height: 92px;
    padding: 14px 22px;

    grid-template-columns: minmax(0, 1fr) 210px;
    column-gap: 20px;
  }

  .receive-header__content {
    gap: 4px;
  }

  .receive-header__title {
    font-size: clamp(1.55rem, 3vw, 1.9rem);
  }

  .receive-mode {
    width: 210px;
    height: 46px;
  }

  .receive-mode__option {
    padding: 0 12px;
  }

  .receive-content {
    height: auto;
    min-height: 680px;

    overflow: visible;
  }

  .receive-base {
    height: auto;
    min-height: 640px;

    grid-template-rows: 200px minmax(400px, auto);
  }

  .receive-base__top {
    height: 200px;
    min-height: 200px;

    grid-template-columns: minmax(220px, 1fr) minmax(0, 2fr);
  }

  .receive-base__inbox {
    min-height: 400px;
  }

  .receive-api {
    min-height: 640px;
  }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767.98px) {
  .receive-header {
    min-height: 0;
    padding: 16px 18px;

    grid-template-columns: minmax(0, 1fr);
    align-items: stretch;
    row-gap: 14px;
  }

  .receive-header__content {
    gap: 4px;
  }

  .receive-header__title {
    font-size: 1.7rem;
  }

  .receive-mode {
    width: 100%;
    height: 46px;
  }

  .receive-mode__option {
    width: 100%;
    min-width: 0;
  }

  .receive-content {
    height: auto;
    min-height: 0;
    padding: 14px;

    overflow: visible;
  }

  .receive-base {
    width: 100%;
    height: auto;
    min-height: 0;

    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .receive-base__top {
    width: 100%;
    height: auto;
    min-height: 0;
    flex: 0 0 auto;

    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .receive-base__email {
    width: 100%;
    height: auto;
    min-height: 170px;
    flex: 0 0 auto;
  }

  .receive-base__graph {
    width: 100%;
    height: auto;
    min-height: 230px;
    flex: 0 0 auto;
  }

  .receive-base__inbox {
    width: 100%;
    height: auto;
    min-height: 480px;
    flex: 0 0 auto;
  }

  .receive-api {
    width: 100%;
    height: auto;
    min-height: 560px;
  }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .receive-header {
    padding: 14px 16px;
    row-gap: 12px;
  }

  .receive-header__eyebrow {
    font-size: 0.54rem;
  }

  .receive-header__title {
    font-size: 1.6rem;
  }

  .receive-mode {
    height: 44px;
  }

  .receive-mode__option {
    padding: 0 10px;
    gap: 6px;

    font-size: 0.68rem;
  }

  .receive-mode__icon {
    width: 18px;
    height: 18px;
    flex-basis: 18px;

    font-size: 18px;
  }

  .receive-content {
    padding: 11px;
  }

  .receive-base {
    gap: 11px;
  }

  .receive-base__top {
    gap: 11px;
  }

  .receive-base__email {
    min-height: 165px;
  }

  .receive-base__graph {
    min-height: 220px;
  }

  .receive-base__inbox {
    min-height: 470px;
  }

  .receive-api {
    min-height: 520px;
  }
}

/* =========================================================
   REDUCED MOTION
   ========================================================= */

@media (prefers-reduced-motion: reduce) {
  .receive-view-enter-active,
  .receive-view-leave-active {
    transition: none;
  }

  .receive-view-enter-from,
  .receive-view-leave-to {
    opacity: 1;

    transform: none;
  }
}
</style>