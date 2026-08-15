<script setup>
import { computed, ref } from 'vue'

import Dropmail from '@/components/sections/send/dropmail/Dropmail.vue'
import Subscribe from '@/components/sections/send/subscribe/Subscribe.vue'

const MODES = {
  DROPMAIL: 'dropmail',
  SUBSCRIBE: 'subscribe',
}

const activeMode = ref(MODES.DROPMAIL)

const activeComponent = computed(() => {
  return activeMode.value === MODES.DROPMAIL ? Dropmail : Subscribe
})

const selectMode = (mode) => {
  activeMode.value = mode
}
</script>

<template>
  <section class="send-section">
    <article class="send-card">
      <header class="send-card__header">
        <div class="send-card__heading">
          <span class="send-card__eyebrow">
            Mail workspace
          </span>

          <h2 class="send-card__title">
            Send workspace
          </h2>
        </div>

        <div
          class="send-toggle"
          role="tablist"
          aria-label="Send workspace mode"
        >
          <span
            class="send-toggle__slider"
            :class="{
              'send-toggle__slider--subscribe':
                activeMode === MODES.SUBSCRIBE,
            }"
            aria-hidden="true"
          ></span>

          <button
            type="button"
            class="send-toggle__option"
            :class="{
              'send-toggle__option--active':
                activeMode === MODES.DROPMAIL,
            }"
            role="tab"
            :aria-selected="activeMode === MODES.DROPMAIL"
            aria-controls="send-mode-panel"
            @click="selectMode(MODES.DROPMAIL)"
          >
            <span
              class="send-toggle__icon material-symbols-rounded"
              aria-hidden="true"
            >
              send
            </span>

            <span class="send-toggle__label">
              Dropmail
            </span>
          </button>

          <button
            type="button"
            class="send-toggle__option"
            :class="{
              'send-toggle__option--active':
                activeMode === MODES.SUBSCRIBE,
            }"
            role="tab"
            :aria-selected="activeMode === MODES.SUBSCRIBE"
            aria-controls="send-mode-panel"
            @click="selectMode(MODES.SUBSCRIBE)"
          >
            <span
              class="send-toggle__icon material-symbols-rounded"
              aria-hidden="true"
            >
              mark_email_unread
            </span>

            <span class="send-toggle__label">
              Subscribe
            </span>
          </button>
        </div>
      </header>

      <div
        id="send-mode-panel"
        class="send-card__body"
        role="tabpanel"
        tabindex="0"
      >
        <Transition
          name="mode"
          mode="out-in"
        >
          <KeepAlive>
            <component
              :is="activeComponent"
              :key="activeMode"
            />
          </KeepAlive>
        </Transition>
      </div>
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

  display: flex;
  display: flex;

  overflow: hidden;
}

.send-card {
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

.send-card:hover {
  box-shadow: var(--shadow-lg);
}

.send-card__header {
  position: relative;

  min-width: 0;
  min-height: 0;
  padding: clamp(18px, 2.4vw, 28px);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--color-ink);

  overflow: hidden;
}

.send-card__header::after {
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

.send-card__heading {
  position: relative;
  z-index: 1;

  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
}

.send-card__eyebrow {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.send-card__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.35rem, 2.4vw, 2rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.045em;
}

.send-toggle {
  position: relative;
  z-index: 1;

  width: min(100%, 340px);
  height: 52px;
  padding: 4px;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  background-color: var(--color-bone);

  border: var(--border-width) solid var(--color-ink);
  border-radius: var(--radius-pill);

  overflow: hidden;
}

.send-toggle__slider {
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  z-index: 0;

  width: calc(50% - 4px);

  background-color: #d8ff3d;

  border: 1px solid #0e0e0c;
  border-radius: var(--radius-pill);

  box-shadow: 2px 2px 0 #0e0e0c;

  transition: transform 260ms var(--ease-boldcase);
}

.send-toggle__slider--subscribe {
  transform: translateX(100%);
}

.send-toggle__option {
  position: relative;
  z-index: 1;

  min-width: 0;
  height: 100%;
  padding: 0 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: var(--color-ink);
  background-color: transparent;

  border: none;
  border-radius: var(--radius-pill);

  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;

  appearance: none;
  cursor: pointer;

  transition:
    color var(--transition-fast),
    transform var(--transition-fast);
}

.send-toggle__option:hover {
  transform: translateY(-1px);
}

.send-toggle__option--active {
  color: #0e0e0c;
}

.send-toggle__icon {
  width: 19px;
  height: 19px;
  flex: 0 0 19px;

  color: currentColor;

  font-size: 19px;
  font-variation-settings:
    "FILL" 0,
    "wght" 500,
    "GRAD" 0,
    "opsz" 20;
}

.send-toggle__label {
  min-width: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.send-card__body {
  position: relative;

  min-width: 0;
  min-height: 0;
  padding: clamp(18px, 2.5vw, 30px);

  display: flex;

  background-color: var(--color-bone);

  overflow: hidden;
}

.mode-enter-active,
.mode-leave-active {
  transition:
    opacity 180ms var(--ease-boldcase),
    transform 180ms var(--ease-boldcase);
}

.mode-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.mode-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-height: 650px) and (min-width: 768px) {
  .send-card {
    grid-template-rows: 96px minmax(0, 1fr);
  }

  .send-card__header {
    padding: 14px 22px;
  }

  .send-card__title {
    font-size: 1.4rem;
  }

  .send-toggle {
    height: 46px;
  }

  .send-card__body {
    padding: 18px;
  }
}

@media (max-width: 767.98px) {
  .send-card {
    grid-template-rows: auto minmax(0, 1fr);

    border-radius: var(--radius-lg);
  }

  .send-card__header {
    min-height: 136px;
    padding: 18px;

    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 14px;
  }

  .send-card__header::after {
    top: -115px;
    right: -70px;
  }

  .send-card__heading {
    padding-right: 65px;
  }

  .send-card__title {
    font-size: 1.45rem;
  }

  .send-toggle {
    width: 100%;
    max-width: none;
  }

  .send-card__body {
    padding: 16px;
  }
}

@media (max-width: 420px) {
  .send-card__header {
    padding: 15px;
  }

  .send-card__body {
    padding: 12px;
  }

  .send-toggle {
    height: 48px;
  }

  .send-toggle__option {
    padding: 0 10px;
    gap: 6px;

    font-size: 0.7rem;
  }

  .send-toggle__icon {
    width: 17px;
    height: 17px;
    flex-basis: 17px;

    font-size: 17px;
  }
}
</style>