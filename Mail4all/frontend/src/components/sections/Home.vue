<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'

const emit = defineEmits(['select-view'])

const handleSectionChange = (view) => {
  emit('select-view', view)
}
</script>

<template>
  <section class="home-section">
    <article class="home-card">
      <!-- Hero -->
      <header class="home-hero">
        <div
          class="home-hero__shape home-hero__shape--chartreuse"
          aria-hidden="true"
        ></div>

        <div
          class="home-hero__shape home-hero__shape--orange"
          aria-hidden="true"
        ></div>

        <div class="container-fluid position-relative z-1 p-0">
          <div class="row align-items-center g-4">
            <div class="col-12 col-lg-5 col-xl-6">
              <div class="home-hero__content">
                <h1 class="home-hero__title">
                  Mail for all.

                  <span class="home-hero__title-accent">
                    Built for everyone.
                  </span>
                </h1>

                <p class="home-hero__description">
                  Send and receive email privately, with no accounts, logs or
                  fees.
                </p>
              </div>
            </div>

            <div class="col-12 col-lg-7 col-xl-6">
              <div
                class="home-guarantees"
                aria-label="Platform guarantees"
              >
                <div class="row g-0">
                  <div class="col-4">
                    <div class="home-guarantee">
                      <span
                        class="home-guarantee__icon material-symbols-rounded"
                        aria-hidden="true"
                      >
                        visibility_off
                      </span>

                      <div class="home-guarantee__content">
                        <strong>Anonymous</strong>
                        <span>No account required</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="home-guarantee home-guarantee--bordered">
                      <span
                        class="home-guarantee__icon material-symbols-rounded"
                        aria-hidden="true"
                      >
                        database_off
                      </span>

                      <div class="home-guarantee__content">
                        <strong>Zero logs</strong>
                        <span>No activity tracking</span>
                      </div>
                    </div>
                  </div>

                  <div class="col-4">
                    <div class="home-guarantee home-guarantee--bordered">
                      <span
                        class="home-guarantee__icon material-symbols-rounded"
                        aria-hidden="true"
                      >
                        money_off
                      </span>

                      <div class="home-guarantee__content">
                        <strong>100% Free</strong>
                        <span>No plans or payments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Services -->
      <div class="home-services">
        <div class="container-fluid p-0">
          <div class="home-services__layout">
            <div
              class="row g-3 flex-grow-1 align-items-stretch home-services__row"
            >
              <!-- Send -->
              <div class="col-12 col-lg-6 d-flex align-items-stretch">
                <article class="home-service home-service--send">
                  <div class="home-service__main">
                    <span
                      class="home-service__icon material-symbols-rounded"
                      aria-hidden="true"
                    >
                      send
                    </span>

                    <div class="home-service__content">
                      <span class="home-service__eyebrow">
                        Outgoing email
                      </span>

                      <h2 class="home-service__title">
                        Send
                      </h2>

                      <p class="home-service__description">
                        Send an email or subscribe an address without using
                        your personal inbox.
                      </p>
                    </div>
                  </div>

                  <div class="row g-2 home-service__benefits">
                    <div class="col-12 col-sm-6 d-flex">
                      <div class="home-benefit">
                        <strong class="home-benefit__value">
                          1×
                        </strong>

                        <div class="home-benefit__content">
                          <span class="home-benefit__title">
                            Email per month
                          </span>

                          <small>
                            One outgoing email every month
                          </small>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-sm-6 d-flex">
                      <div class="home-benefit">
                        <span
                          class="home-benefit__symbol material-symbols-rounded"
                          aria-hidden="true"
                        >
                          subscriptions
                        </span>

                        <div class="home-benefit__content">
                          <span class="home-benefit__title">
                            Subscriptions
                          </span>

                          <small>
                            Register on external services
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="home-service__footer">
                    <BaseButton
                      type="button"
                      variant="primary"
                      size="small"
                      aria-label="Open the send email service"
                      @click="handleSectionChange('send')"
                    >
                      Open Send
                    </BaseButton>
                  </div>
                </article>
              </div>

              <!-- Receive -->
              <div class="col-12 col-lg-6 d-flex align-items-stretch">
                <article class="home-service home-service--receive">
                  <div class="home-service__main">
                    <span
                      class="home-service__icon material-symbols-rounded"
                      aria-hidden="true"
                    >
                      inbox
                    </span>

                    <div class="home-service__content">
                      <span class="home-service__eyebrow">
                        Incoming email
                      </span>

                      <h2 class="home-service__title">
                        Receive
                      </h2>

                      <p class="home-service__description">
                        Create temporary inboxes without exposing your personal
                        email address.
                      </p>
                    </div>
                  </div>

                  <div class="row g-2 home-service__benefits">
                    <div class="col-12 col-sm-6 d-flex">
                      <div class="home-benefit">
                        <strong class="home-benefit__value">
                          ∞
                        </strong>

                        <div class="home-benefit__content">
                          <span class="home-benefit__title">
                            Temporary inboxes
                          </span>

                          <small>
                            Create as many as you need
                          </small>
                        </div>
                      </div>
                    </div>

                    <div class="col-12 col-sm-6 d-flex">
                      <div class="home-benefit">
                        <strong
                          class="home-benefit__value home-benefit__value--small"
                        >
                          7d
                        </strong>

                        <div class="home-benefit__content">
                          <span class="home-benefit__title">
                            Inbox lifetime
                          </span>

                          <small>
                            Available for seven days
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="home-service__footer">
                    <BaseButton
                      type="button"
                      variant="primary"
                      size="small"
                      aria-label="Open the temporary inbox service"
                      @click="handleSectionChange('receive')"
                    >
                      Open Receive
                    </BaseButton>
                  </div>
                </article>
              </div>
            </div>

            <!-- Email checker -->
            <section class="home-checker">
              <div
                class="home-checker__decoration"
                aria-hidden="true"
              ></div>

              <div class="row align-items-center g-3 position-relative z-1">
                <div class="col-12 col-md-4 col-xl-3">
                  <div class="home-checker__identity">
                    <span
                      class="home-checker__icon material-symbols-rounded"
                      aria-hidden="true"
                    >
                      mark_email_read
                    </span>

                    <div class="home-checker__content">
                      <div class="home-checker__heading">
                        <span class="home-checker__eyebrow">
                          Verify an email
                        </span>

                        <span class="home-checker__badge">
                          In development
                        </span>
                      </div>

                      <h2 class="home-checker__title">
                        Check
                      </h2>

                      <p class="home-checker__subtitle">
                        Validate an address before using it.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-8 col-xl-6">
                  <div
                    class="home-checker__form"
                    aria-label="Email checker preview"
                  >
                    <span
                      class="home-checker__form-icon material-symbols-rounded"
                      aria-hidden="true"
                    >
                      alternate_email
                    </span>

                    <span class="home-checker__placeholder">
                      name@example.com
                    </span>

                    <button
                      type="button"
                      class="home-checker__button"
                      disabled
                      aria-label="Email checker is in development"
                    >
                      <span>Check</span>

                      <span
                        class="material-symbols-rounded"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>

                <div class="col-12 col-xl-3">
                  <div
                    class="home-checker__checks"
                    aria-label="Future email checks"
                  >
                    <span class="home-checker__check">
                      <span
                        class="material-symbols-rounded"
                        aria-hidden="true"
                      >
                        verified
                      </span>

                      Validity
                    </span>

                    <span class="home-checker__check">
                      <span
                        class="material-symbols-rounded"
                        aria-hidden="true"
                      >
                        shield
                      </span>

                      Safety
                    </span>

                    <span class="home-checker__check">
                      <span
                        class="material-symbols-rounded"
                        aria-hidden="true"
                      >
                        alternate_email
                      </span>

                      Availability
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
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

  padding: 0 0 6px;

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
  grid-template-rows: minmax(140px, 30%) minmax(0, 70%);

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
   HERO
   ========================================================= */

.home-hero {
  position: relative;
  z-index: 2;

  min-width: 0;
  min-height: 0;
  padding: clamp(18px, 2.5vw, 34px);

  display: flex;
  align-items: center;
  flex: 0 0 auto;

  background-color: var(--color-bone);

  border-bottom: var(--border-width) solid var(--border-color);

  overflow: hidden;
}

.home-hero__shape {
  position: absolute;

  border: var(--border-width) solid var(--color-on-accent);
  border-radius: 50%;

  pointer-events: none;
}

.home-hero__shape--chartreuse {
  top: -210px;
  right: -125px;

  width: 320px;
  height: 320px;

  background-color: var(--color-chartreuse);

  opacity: 0.58;
}

.home-hero__shape--orange {
  right: 220px;
  bottom: -118px;

  width: 140px;
  height: 140px;

  background-color: var(--color-tangerine);

  opacity: 0.65;
}

.home-hero__content {
  min-width: 0;
  max-width: 760px;
}

.home-hero__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.85rem, 3.5vw, 3.8rem);
  font-weight: 800;
  line-height: 0.93;
  letter-spacing: -0.065em;
}

.home-hero__title-accent {
  display: block;

  color: var(--color-graphite);
}

.home-hero__description {
  max-width: 540px;
  margin: 10px 0 0;

  color: var(--color-graphite);

  font-size: clamp(0.74rem, 0.9vw, 0.88rem);
  line-height: 1.45;
}

/* =========================================================
   GUARANTEES
   ========================================================= */

.home-guarantees {
  min-width: 0;
  padding: 13px;

  color: #f2eee5;
  background-color: var(--color-on-accent);

  border: var(--border-width) solid var(--color-on-accent);
  border-radius: var(--radius-lg);

  box-shadow: 5px 5px 0 var(--color-tangerine);
}

.home-guarantee {
  width: 100%;
  min-width: 0;
  min-height: 42px;
  padding: 5px 9px;

  display: flex;
  align-items: center;
  gap: 8px;
}

.home-guarantee--bordered {
  border-left: 1px solid rgba(242, 238, 229, 0.22);
}

.home-guarantee__icon {
  width: 30px;
  height: 30px;
  flex: 0 0 30px;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border-radius: 9px;

  font-size: 16px;

  font-variation-settings:
    "FILL" 0,
    "wght" 500,
    "GRAD" 0,
    "opsz" 20;
}

.home-guarantee__content {
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 2px;
}

.home-guarantee__content strong {
  color: #f2eee5;

  font-size: 0.66rem;
  line-height: 1.2;
  white-space: nowrap;
}

.home-guarantee__content span {
  color: rgba(242, 238, 229, 0.62);

  font-family: var(--font-mono);
  font-size: 0.39rem;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* =========================================================
   SERVICES LAYOUT
   ========================================================= */

.home-services {
  position: relative;
  z-index: 1;

  min-width: 0;
  min-height: 0;
  padding: clamp(11px, 1.5vw, 18px);

  display: flex;

  background-color: var(--color-bone);

  overflow: hidden;
}

.home-services > .container-fluid {
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;
}

.home-services__layout {
  width: 100%;
  min-width: 0;
  min-height: 0;
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  gap: clamp(9px, 1.2vw, 14px);
}

.home-services__row {
  min-width: 0;
  min-height: 0;
  flex: 1 1 auto;
}

.home-services__row > [class*="col-"] {
  min-height: 0;
}

/* =========================================================
   SERVICE CARDS
   ========================================================= */

.home-service {
  position: relative;

  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: clamp(13px, 1.5vw, 18px);

  display: grid;
  grid-template-rows: auto minmax(96px, 1fr) auto;
  gap: 12px;

  color: var(--color-ink);
  background-color: var(--color-paper);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-lg);

  overflow: hidden;

  transition:
    color var(--transition-fast),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.home-service:hover {
  box-shadow: 4px 4px 0 var(--color-ink);

  transform: translateY(-2px);
}

.home-service::after {
  content: "";

  position: absolute;
  right: -65px;
  bottom: -75px;

  width: 135px;
  height: 135px;

  background-color: var(--color-chartreuse);

  border: var(--border-width) solid var(--color-on-accent);
  border-radius: 50%;

  opacity: 0.13;
  pointer-events: none;
}

.home-service--receive::after {
  background-color: var(--color-tangerine);
}

.home-service__main,
.home-service__benefits,
.home-service__footer {
  position: relative;
  z-index: 1;
}

.home-service__main {
  min-width: 0;

  display: flex;
  align-items: flex-start;
  gap: 11px;
}

.home-service__icon {
  width: 39px;
  height: 39px;
  flex: 0 0 39px;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: 11px;

  font-size: 20px;

  transition: transform var(--transition-fast);
}

.home-service:hover .home-service__icon {
  transform: rotate(-4deg) scale(1.04);
}

.home-service__content {
  min-width: 0;
}

.home-service__eyebrow,
.home-benefit__title,
.home-checker__eyebrow,
.home-checker__badge,
.home-checker__check {
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.09em;
}

.home-service__eyebrow {
  display: block;
  margin-bottom: 2px;

  color: var(--color-graphite);

  font-size: 0.48rem;
  font-weight: 600;
}

.home-service__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1.3rem, 2vw, 1.85rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.055em;
}

.home-service__description {
  max-width: 58ch;
  margin: 5px 0 0;

  color: var(--color-graphite);

  font-size: clamp(0.64rem, 0.72vw, 0.73rem);
  line-height: 1.4;
}

/* =========================================================
   BENEFITS
   ========================================================= */

.home-service__benefits {
  min-width: 0;
  min-height: 96px;

  align-content: stretch;
}

.home-benefit {
  width: 100%;
  min-width: 0;
  min-height: 90px;
  padding: 13px 14px;

  display: flex;
  align-items: center;
  gap: 12px;

  color: var(--color-ink);
  background-color: var(--color-bone);

  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast);
}

.home-benefit:hover {
  transform: translateY(-1px);
}

.home-benefit__value,
.home-benefit__symbol {
  width: 46px;
  min-width: 46px;
  flex: 0 0 46px;

  color: var(--color-ink);

  font-size: 2rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.06em;
  text-align: center;
}

.home-benefit__value--small {
  font-size: 1.5rem;
}

.home-benefit__symbol {
  background-color: transparent;

  font-size: 28px;

  font-variation-settings:
    "FILL" 0,
    "wght" 600,
    "GRAD" 0,
    "opsz" 28;
}

.home-benefit__content {
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
}

.home-benefit__title {
  color: var(--color-ink);

  font-size: 0.49rem;
  font-weight: 700;
  line-height: 1.3;
}

.home-benefit__content small {
  color: var(--color-graphite);

  font-size: 0.61rem;
  line-height: 1.4;
}

/* =========================================================
   SERVICE BUTTONS
   ========================================================= */

.home-service__footer {
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.home-service__footer :deep(.bc-button) {
  flex: 0 0 auto;
}

.home-service__footer :deep(.bc-button--primary) {
  --bc-button-bg: var(--color-chartreuse);
  --bc-button-color: var(--color-on-accent);
  --bc-button-icon-bg: var(--color-on-accent);
  --bc-button-icon-color: var(--color-chartreuse);

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border-color: var(--color-on-accent);
}

.home-service__footer
  :deep(.bc-button--primary:hover:not(.bc-button--disabled):not(.bc-button--loading)) {
  color: var(--color-chartreuse);
  background-color: var(--color-on-accent);
}

.home-service__footer
  :deep(.bc-button--primary:hover:not(.bc-button--disabled):not(.bc-button--loading) .bc-button__icon) {
  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);
}

/* =========================================================
   EMAIL CHECKER
   ========================================================= */

.home-checker {
  position: relative;

  width: 100%;
  min-width: 0;
  flex: 0 0 auto;
  padding: 14px 16px;

  color: var(--color-ink);
  background-color: var(--color-paper);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-lg);

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal);
}

.home-checker__decoration {
  position: absolute;
  top: -78px;
  right: -52px;

  width: 150px;
  height: 150px;

  background-color: var(--color-chartreuse);

  border: var(--border-width) solid var(--color-on-accent);
  border-radius: 50%;

  opacity: 0.24;
  pointer-events: none;
}

.home-checker__identity {
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 11px;
}

.home-checker__icon {
  width: 44px;
  height: 44px;
  flex: 0 0 44px;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: 12px;

  font-size: 22px;
}

.home-checker__content {
  min-width: 0;

  display: flex;
  flex-direction: column;
}

.home-checker__heading {
  margin-bottom: 3px;

  display: flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
}

.home-checker__eyebrow {
  color: var(--color-graphite);

  font-size: 0.43rem;
  font-weight: 600;
}

.home-checker__badge {
  padding: 3px 6px;

  color: var(--color-on-accent);
  background-color: var(--color-tangerine);

  border: 1px solid var(--color-on-accent);
  border-radius: var(--radius-pill);

  font-size: 0.36rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
}

.home-checker__title {
  margin: 0;

  color: var(--color-ink);

  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.04em;
}

.home-checker__subtitle {
  margin: 3px 0 0;

  color: var(--color-graphite);

  font-size: 0.61rem;
  line-height: 1.35;
}

.home-checker__form {
  width: 100%;
  min-width: 0;
  height: 48px;
  padding: 4px 4px 4px 13px;

  display: flex;
  align-items: center;
  gap: 9px;

  color: var(--color-graphite);
  background-color: var(--color-bone);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-pill);
}

.home-checker__form-icon {
  width: 19px;
  height: 19px;
  flex: 0 0 19px;

  color: var(--color-graphite);

  font-size: 19px;
}

.home-checker__placeholder {
  min-width: 0;
  flex: 1;

  color: var(--color-graphite-soft);

  font-size: 0.7rem;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.home-checker__button {
  height: 38px;
  padding: 0 5px 0 14px;

  display: inline-flex;
  align-items: center;
  gap: 9px;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: var(--radius-pill);

  font-size: 0.68rem;
  font-weight: 700;
  white-space: nowrap;

  opacity: 0.58;
  cursor: not-allowed;
}

.home-checker__button .material-symbols-rounded {
  width: 28px;
  height: 28px;

  color: var(--color-chartreuse);
  background-color: var(--color-on-accent);

  border-radius: 50%;

  font-size: 16px;
}

.home-checker__checks {
  width: 100%;
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 9px;
  flex-wrap: nowrap;

  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: none;
}

.home-checker__checks::-webkit-scrollbar {
  display: none;
}

.home-checker__check {
  flex: 0 0 auto;

  display: inline-flex;
  align-items: center;
  gap: 4px;

  color: var(--color-graphite);

  font-size: 0.42rem;
  font-weight: 600;
  white-space: nowrap;
}

.home-checker__check .material-symbols-rounded {
  width: 17px;
  height: 17px;

  color: var(--color-ink);

  font-size: 16px;
}

/* =========================================================
   LOW HEIGHT DESKTOP
   ========================================================= */

@media (max-height: 720px) and (min-width: 992px) {
  .home-card {
    grid-template-rows: minmax(125px, 28%) minmax(0, 72%);
  }

  .home-hero {
    padding: 14px 22px;
  }

  .home-hero__title {
    font-size: clamp(1.65rem, 3vw, 2.9rem);
  }

  .home-hero__description {
    margin-top: 6px;
  }

  .home-guarantees {
    padding: 9px;
  }

  .home-guarantee {
    min-height: 36px;
  }

  .home-services {
    padding: 9px;
  }

  .home-services__layout {
    gap: 8px;
  }

  .home-service {
    padding: 10px;
    gap: 7px;
  }

  .home-service__description {
    margin-top: 3px;
  }

  .home-benefit {
    min-height: 66px;
    padding: 8px 10px;
  }

  .home-benefit__value,
  .home-benefit__symbol {
    width: 40px;
    min-width: 40px;
    flex-basis: 40px;
  }

  .home-checker {
    padding: 9px 12px;
  }

  .home-checker__icon {
    width: 36px;
    height: 36px;
    flex-basis: 36px;
  }

  .home-checker__form {
    height: 42px;
  }

  .home-checker__button {
    height: 32px;
  }
}

/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 991.98px) {
  .home-section {
    width: 100%;
    height: auto;
    min-height: 100%;

    display: block;

    padding: 0 0 6px;

    overflow: visible;
  }

  .home-card {
    width: 100%;
    height: auto;
    min-height: 100%;

    display: flex;
    flex-direction: column;

    overflow: hidden;
  }

  .home-hero {
    min-height: auto;
    flex: 0 0 auto;
    padding: 24px 20px;
  }

  .home-hero__title {
    font-size: clamp(2.1rem, 7vw, 3.8rem);
  }

  .home-services {
    min-height: auto;
    flex: 0 0 auto;

    overflow: visible;
  }

  .home-services > .container-fluid {
    height: auto;
  }

  .home-services__layout {
    height: auto;
  }

  .home-services__row {
    flex: 0 0 auto;
  }

  .home-service {
    min-height: 360px;
  }

  .home-checker__checks {
    justify-content: flex-start;
  }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767.98px) {
  .home-hero {
    padding: 22px 18px;
  }

  .home-hero__shape--chartreuse {
    top: -195px;
    right: -125px;
  }

  .home-hero__shape--orange {
    right: 40px;
    bottom: -110px;
  }

  .home-guarantees {
    padding: 10px;
  }

  .home-guarantee {
    padding: 4px 7px;

    flex-direction: column;
    align-items: flex-start;
  }

  .home-guarantee__content span {
    display: none;
  }

  .home-service {
    min-height: 375px;
  }

  .home-checker {
    padding: 15px;
  }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .home-section {
    padding: 0 0 6px;
  }

  .home-hero {
    padding: 20px 15px;
  }

  .home-hero__description {
    font-size: 0.78rem;
  }

  .home-guarantees {
    padding: 9px;
  }

  .home-guarantee {
    align-items: center;

    text-align: center;
  }

  .home-guarantee--bordered {
    padding-left: 6px;
  }

  .home-guarantee__content strong {
    font-size: 0.49rem;
  }

  .home-services {
    padding: 11px;
  }

  .home-services__row {
    --bs-gutter-y: 12px;
  }

  .home-service {
    min-height: 430px;
    padding: 14px;
  }

  .home-benefit {
    min-height: 78px;
  }

  .home-service__footer :deep(.bc-button) {
    width: 100%;
  }

  .home-checker__form {
    height: 46px;
  }

  .home-checker__button {
    height: 36px;
    padding-left: 11px;
  }

  .home-checker__checks {
    justify-content: flex-start;
  }
}
</style>