<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bc-footer">
    <div
      class="bc-footer__line"
      aria-hidden="true"
    ></div>

    <div class="bc-footer__content">
      <div class="bc-footer__identity">
        <span
          class="bc-footer__mark"
          aria-hidden="true"
        >
          MT
        </span>

        <p class="bc-footer__copyright">
          © {{ currentYear }} MailTester · Crafted by

          <a
            href="https://github.com/HrnyGranny"
            target="_blank"
            rel="noopener noreferrer"
          >
            HrnyGranny
          </a>
        </p>
      </div>

      <nav
        class="bc-footer__legal"
        aria-label="Legal information"
      >
        <RouterLink
          to="/privacy"
          class="bc-footer__legal-link"
        >
          Privacy Policy
        </RouterLink>

        <span
          class="bc-footer__separator"
          aria-hidden="true"
        >
          /
        </span>

        <RouterLink
          to="/terms"
          class="bc-footer__legal-link"
        >
          Terms of Service
        </RouterLink>
      </nav>

      <div class="bc-footer__meta">
        <span>Build · 001</span>

        <span
          class="bc-footer__dot"
          aria-hidden="true"
        ></span>

        <span>v1.0</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bc-footer {
  flex: 0 0 auto;

  padding: 0 20px 18px;

  color: var(--color-ink);
}

.bc-footer__line {
  width: 100%;
  height: 1px;
  margin-bottom: 14px;

  background-color: var(--color-ink);

  opacity: 0.35;
}

.bc-footer__content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 18px;
}

/* Identity */

.bc-footer__identity {
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 10px;
}

.bc-footer__mark {
  width: 29px;
  height: 29px;
  flex: 0 0 29px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #0e0e0c;
  background-color: #d8ff3d;

  border: 1px solid #0e0e0c;
  border-radius: 9px;

  font-family: var(--font-mono);
  font-size: 0.58rem;
  font-weight: 700;
}

.bc-footer__copyright {
  min-width: 0;
  margin: 0;

  color: var(--color-graphite);

  font-size: 0.72rem;
  line-height: 1.4;
}

.bc-footer__copyright a {
  color: var(--color-ink);

  font-weight: 700;
  text-decoration: none;

  border-bottom: 1px solid var(--color-ink);

  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.bc-footer__copyright a:hover {
  color: var(--color-tangerine);
  border-color: var(--color-tangerine);
}

/* Legal links */

.bc-footer__legal {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  white-space: nowrap;
}

.bc-footer__legal-link {
  position: relative;

  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.56rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;

  transition: color var(--transition-fast);
}

.bc-footer__legal-link::after {
  content: "";

  position: absolute;
  right: 0;
  bottom: -3px;
  left: 0;

  height: 1px;

  background-color: var(--color-tangerine);

  transform: scaleX(0);
  transform-origin: right;

  transition: transform var(--transition-fast);
}

.bc-footer__legal-link:hover,
.bc-footer__legal-link:focus-visible,
.bc-footer__legal-link.router-link-active {
  color: var(--color-ink);
}

.bc-footer__legal-link:hover::after,
.bc-footer__legal-link:focus-visible::after,
.bc-footer__legal-link.router-link-active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.bc-footer__separator {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.58rem;

  opacity: 0.55;
}

/* Build metadata */

.bc-footer__meta {
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;

  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.56rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  white-space: nowrap;
}

.bc-footer__dot {
  width: 6px;
  height: 6px;

  background-color: #ff5a1f;

  border: 1px solid #0e0e0c;
  border-radius: 50%;
}

/* Responsive */

@media (max-width: 991.98px) {
  .bc-footer__content {
    grid-template-columns: minmax(0, 1fr) auto;
  }

  .bc-footer__legal {
    grid-column: 1 / -1;
    grid-row: 2;

    justify-content: flex-start;

    padding-left: 39px;
  }
}

@media (max-width: 575.98px) {
  .bc-footer {
    padding: 4px 12px 16px;
  }

  .bc-footer__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .bc-footer__copyright {
    font-size: 0.65rem;
  }

  .bc-footer__legal {
    padding-left: 39px;

    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .bc-footer__legal-link {
    font-size: 0.52rem;
  }

  .bc-footer__meta {
    padding-left: 39px;

    justify-content: flex-start;
  }
}
</style>