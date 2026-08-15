<script setup>
import brandLogo from '@/assets/img/MailTester_Logo.png'

const currentYear = new Date().getFullYear()

// Leemos la variable global inyectada por Vite con un fallback por seguridad
const appVersion = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '0.0.1'
</script>

<template>
  <footer class="bc-footer">
    <div
      class="bc-footer__line"
      aria-hidden="true"
    ></div>

    <div class="bc-footer__content">
      <!-- 1. Identity -->
      <div class="bc-footer__identity">
        <span
          class="bc-footer__mark"
          aria-hidden="true"
        >
          <img
            :src="brandLogo"
            alt="Mail4all logo"
            class="bc-footer__mark-image"
          >
        </span>

        <p class="bc-footer__copyright">
          © {{ currentYear }} Mail4all · Crafted by

          <a
            href="https://github.com/HrnyGranny"
            target="_blank"
            rel="noopener noreferrer"
          >
            HrnyGranny
          </a>
        </p>
      </div>

      <!-- 2. Legal links -->
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

      <!-- 3. Version metadata -->
      <div class="bc-footer__meta">
        <div 
          class="bc-footer__version-badge" 
          title="Current Version"
        >
          <span>v{{ appVersion }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.bc-footer {
  flex: 0 0 auto;
  padding: 0 20px 24px;
  color: var(--color-ink);
}

.bc-footer__line {
  width: 100%;
  height: 1px;
  margin-bottom: 16px;
  background-color: var(--color-ink);
  opacity: 0.35;
}

/* Base Layout (Desktop) */
.bc-footer__content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 32px;
}

/* =========================================================
   1. IDENTITY (Logo + Copyright)
   ========================================================= */
.bc-footer__identity {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.bc-footer__mark {
  width: 32px;
  height: 32px;
  flex: 0 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bc-footer__mark-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
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

/* =========================================================
   2. LEGAL LINKS
   ========================================================= */
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

/* =========================================================
   3. VERSION METADATA
   ========================================================= */
.bc-footer__meta {
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: var(--font-mono);
  font-size: 0.56rem;
  white-space: nowrap;
}

.bc-footer__version-badge {
  --bc-accent-ink: #0e0e0c;
  --bc-accent-chartreuse: #d8ff3d;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  
  color: var(--bc-accent-ink);
  background-color: var(--bc-accent-chartreuse);
  
  border: var(--border-width, 1px) solid var(--bc-accent-ink);
  border-radius: 20px;
  
  font-weight: 700;
  letter-spacing: 0.05em;
  line-height: 1;
  
  transition: 
    background-color var(--transition-fast), 
    color var(--transition-fast);
}

.bc-footer__version-badge:hover {
  background-color: var(--bc-accent-ink);
  color: var(--bc-accent-chartreuse);
}

/* =========================================================
   RESPONSIVE (Tablet)
   ========================================================= */
@media (max-width: 991.98px) {
  .bc-footer__content {
    grid-template-columns: minmax(0, 1fr) auto;
    row-gap: 20px;
  }

  .bc-footer__legal {
    grid-column: 1 / -1;
    grid-row: 2;
    justify-content: flex-start;
    padding-left: 42px;
  }
}

/* =========================================================
   RESPONSIVE (Mobile)
   ========================================================= */
@media (max-width: 575.98px) {
  .bc-footer {
    padding: 16px 16px 24px; 
  }

  .bc-footer__content {
    grid-template-columns: 1fr;
    row-gap: 14px; /* Distancia matemática idéntica */
  }

  .bc-footer__identity {
    /* COMPENSACIÓN ÓPTICA: 
       Resta los ~8px de altura sobrante del logo respecto al texto
       para que la siguiente fila encaje perfecta visualmente. */
    margin-bottom: -8px; 
  }

  .bc-footer__copyright {
    font-size: 0.68rem;
  }

  .bc-footer__legal {
    grid-column: 1;
    grid-row: 2;
    padding-left: 42px;
    justify-content: flex-start;
  }

  .bc-footer__legal-link {
    font-size: 0.52rem;
  }

  .bc-footer__meta {
    grid-column: 1;
    grid-row: 3;
    padding-left: 42px;
    justify-content: flex-start;
  }
}
</style>