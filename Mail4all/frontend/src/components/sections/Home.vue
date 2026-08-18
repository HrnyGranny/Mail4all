<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'

const emit = defineEmits(['select-view'])

const sendBenefits = [
  {
    icon: 'calendar_month',
    label: '1 email monthly',
  },
  {
    icon: 'subscriptions',
    label: 'Subscriptions',
  },
  {
    icon: 'article',
    label: 'Email templates',
  },
  {
    icon: 'code',
    label: 'Edit email code',
  },
]

const receiveBenefits = [
  {
    icon: 'all_inclusive',
    label: 'Unlimited inboxes',
  },
  {
    icon: 'schedule',
    label: '7-day lifetime',
  },
  {
    icon: 'tune',
    label: 'Custom inbox',
  },
  {
    icon: 'share',
    label: 'Share inbox',
  },
]

const handleSectionChange = (view) => {
  emit('select-view', view)
}
</script>

<template>
  <section class="home-section">
    <article class="home-card">
      <!-- Hero -->
      <header class="home-hero">
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

                      <h2 class="home-service__title">
                        Send
                      </h2>

                      <p class="home-service__description">
                        Send an email or subscribe an address without using
                        your personal inbox.
                      </p>
                    </div>
                  </div>

                  <div
                    class="home-service__benefits"
                    aria-label="Send features"
                  >
                    <div
                      v-for="benefit in sendBenefits"
                      :key="benefit.label"
                      class="home-benefit"
                    >
                      <span
                        class="home-benefit__symbol material-symbols-rounded"
                        aria-hidden="true"
                      >
                        {{ benefit.icon }}
                      </span>

                      <span class="home-benefit__title">
                        {{ benefit.label }}
                      </span>
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

                      <h2 class="home-service__title">
                        Receive
                      </h2>

                      <p class="home-service__description">
                        Create temporary inboxes without exposing your personal
                        email address.
                      </p>
                    </div>
                  </div>

                  <div
                    class="home-service__benefits"
                    aria-label="Receive features"
                  >
                    <div
                      v-for="benefit in receiveBenefits"
                      :key="benefit.label"
                      class="home-benefit"
                    >
                      <span
                        class="home-benefit__symbol material-symbols-rounded"
                        aria-hidden="true"
                      >
                        {{ benefit.icon }}
                      </span>

                      <span class="home-benefit__title">
                        {{ benefit.label }}
                      </span>
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

  border: var(--border-width) dashed var(--border-color);
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

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  gap: 7px;
}

.home-benefit {
  width: 100%;
  min-width: 0;
  min-height: 0;
  padding: 7px 9px;

  display: flex;
  align-items: center;
  gap: 8px;

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

.home-benefit__symbol {
  width: 36px;
  height: 36px;
  min-width: 36px;
  flex: 0 0 36px;

  color: var(--color-ink);
  background-color: transparent;

  font-size: 28px;

  font-variation-settings:
    "FILL" 0,
    "wght" 600,
    "GRAD" 0,
    "opsz" 24;
}

.home-benefit__title {
  min-width: 0;

  color: var(--color-ink);

  font-size: 0.58rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.07em;
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

  border: var(--border-width) dashed var(--border-color);
  border-radius: var(--radius-lg);

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.home-checker:hover {
  transform: translateY(-2px);
  box-shadow: 4px 4px 0 var(--color-ink);
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

  transition: transform var(--transition-fast);
}

.home-checker:hover .home-checker__icon {
  transform: rotate(-4deg) scale(1.04);
}

.home-checker:hover .home-checker__icon {
  transform: rotate(-4deg) scale(1.04);
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

  .home-service__benefits {
    min-height: 82px;
    gap: 5px;
  }

  .home-benefit {
    padding: 5px 7px;
    gap: 6px;
  }

  .home-benefit__symbol {
    width: 36px;
    height: 36px;
    min-width: 36px;
    flex-basis: 36px;

    font-size: 28px;
  }

  .home-benefit__title {
    font-size: 0.52rem;
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
    flex: 0 0 auto;

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
    min-height: 280px;
    padding: 14px;

    grid-template-rows: auto 108px auto;
    gap: 10px;
  }

  .home-service__benefits {
    min-height: 0;
    height: 108px;

    gap: 6px;
  }

  .home-benefit {
    min-height: 0;
    padding: 6px 8px;

    gap: 7px;
  }

  .home-benefit__symbol {
    width: 32px;
    height: 32px;
    min-width: 32px;
    flex-basis: 32px;

    font-size: 24px;
  }

  .home-benefit__title {
    font-size: 0.52rem;
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
    min-height: 270px;
    padding: 13px;

    grid-template-rows: auto 106px auto;
    gap: 9px;
  }

  .home-service__benefits {
    height: 106px;

    gap: 6px;
  }

  .home-benefit {
    padding: 6px 7px;

    gap: 6px;
  }

  .home-benefit__symbol {
    width: 32px;
    height: 32px;
    min-width: 32px;
    flex-basis: 32px;

    font-size: 24px;
  }

  .home-benefit__title {
    font-size: 0.52rem;
    line-height: 1.2;
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
    min-height: 0;
    padding: 13px;

    grid-template-rows: auto 118px auto;
    gap: 12px;
  }

  .home-service__benefits {
    width: 100%;
    height: 118px;
    min-height: 0;

    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 7px;
  }

  .home-benefit {
    min-height: 0;
    padding: 7px 8px;

    display: grid;
    grid-template-columns: 26px minmax(0, 1fr);
    align-items: center;
    gap: 7px;
  }

  .home-benefit__symbol {
    width: 30px;
    height: 30px;
    min-width: 30px;
    flex-basis: 30px;

    font-size: 24px;
  }

  .home-benefit__title {
    min-width: 0;

    font-size: 0.48rem;
    line-height: 1.2;
    overflow-wrap: anywhere;
  }

  .home-service__footer {
    margin-top: 0;
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