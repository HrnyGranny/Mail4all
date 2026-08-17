<template>
  <article class="receive-inbox">
    <header class="receive-inbox__header">
      <div class="receive-inbox__heading">
        <h2 class="receive-inbox__title">
          Inbox
        </h2>
      </div>

      <span
        class="receive-inbox__counter"
        aria-label="Zero emails"
      >
        00
      </span>
    </header>

    <div class="receive-inbox__body">
      <div class="receive-inbox__empty">
        <span
          class="receive-inbox__empty-icon material-symbols-rounded"
          aria-hidden="true"
        >
          inbox
        </span>

        <div class="receive-inbox__empty-content">
          <strong>Your inbox is empty</strong>

          <span>
            New emails will appear here.
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.receive-inbox {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: flex;
  flex-direction: column;

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

.receive-inbox:hover {
  transform: translateY(-2px);

  box-shadow: 4px 4px 0 var(--color-ink);
}

.receive-inbox__header {
  min-width: 0;
  padding: 14px 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  background-color: var(--color-paper);

  border-bottom: var(--border-width) solid var(--border-color);
}

.receive-inbox__heading {
  min-width: 0;

  display: flex;
  flex-direction: column;
}

.receive-inbox__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.receive-inbox__counter {
  min-width: 34px;
  height: 26px;
  padding: 0 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: var(--color-on-accent);
  background-color: var(--color-tangerine);

  border: 1px solid var(--color-on-accent);
  border-radius: var(--radius-pill);

  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 700;
}

.receive-inbox__body {
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  min-height: 0;
  padding: clamp(14px, 1.5vw, 18px);

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-paper);

  overflow: auto;
}

.receive-inbox__empty {
  width: min(100%, 420px);
  min-height: 116px;
  padding: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  background-color: var(--color-bone);

  border: var(--border-width) dashed var(--border-color);
  border-radius: var(--radius-lg);
}

.receive-inbox__empty-icon {
  width: 46px;
  height: 46px;
  flex: 0 0 46px;

  color: var(--color-on-accent);
  background-color: var(--color-chartreuse);

  border: 1px solid var(--color-on-accent);
  border-radius: 13px;

  font-size: 25px;
}

.receive-inbox__empty-content {
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: 3px;
}

.receive-inbox__empty-content strong {
  color: var(--color-ink);

  font-size: 0.82rem;
  line-height: 1.3;
}

.receive-inbox__empty-content span {
  color: var(--color-graphite);

  font-size: 0.68rem;
  line-height: 1.4;
}

@media (max-height: 650px) and (min-width: 768px) {
  .receive-inbox__header {
    padding: 9px 14px;
  }

  .receive-inbox__body {
    padding: 10px;
  }

  .receive-inbox__empty {
    min-height: 86px;
    padding: 12px;
  }

  .receive-inbox__empty-icon {
    width: 38px;
    height: 38px;
    flex-basis: 38px;

    font-size: 21px;
  }
}

@media (max-width: 767.98px) {
  .receive-inbox {
    height: auto;
    min-height: 360px;
    flex: 0 0 auto;
  }

  .receive-inbox__body {
    min-height: 290px;

    overflow: visible;
  }
}

@media (max-width: 575.98px) {
  .receive-inbox {
    min-height: 340px;
  }

  .receive-inbox__header {
    padding: 13px 14px;
  }

  .receive-inbox__body {
    min-height: 275px;
    padding: 12px;
  }

  .receive-inbox__empty {
    min-height: 130px;
    padding: 16px;
  }
}
</style>