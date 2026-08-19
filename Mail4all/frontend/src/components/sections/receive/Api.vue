<template>
  <section
    class="receive-api-view"
    aria-label="Receive API workspace"
  >
    <!-- Top card -->
    <article
      class="receive-api-card receive-api-card--endpoint"
      aria-label="API endpoint"
    >
      <!--
        TODO:
        Añadir aquí el endpoint o API URI.
      -->
    </article>

    <!-- Bottom cards -->
    <div class="receive-api-view__bottom">
      <article
        class="receive-api-card receive-api-card--request"
        aria-label="API request example"
      >
        <!--
          TODO:
          Añadir aquí los ejemplos de código:
          JavaScript, PHP y Python.
        -->
      </article>

      <article
        class="receive-api-card receive-api-card--response"
        aria-label="API response example"
      >
        <!--
          TODO:
          Añadir aquí la respuesta JSON
          y la estructura de datos.
        -->
      </article>
    </div>
  </section>
</template>

<style scoped>
.receive-api-view {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  display: grid;
  grid-template-rows: minmax(100px, 1fr) minmax(0, 4fr);
  gap: clamp(12px, 1.4vw, 18px);
}

/* =========================================================
   BOTTOM AREA
   ========================================================= */

.receive-api-view__bottom {
  width: 100%;
  min-width: 0;
  min-height: 0;

  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(12px, 1.4vw, 18px);
}

/* =========================================================
   API CARDS
   ========================================================= */

.receive-api-card {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;

  color: var(--color-ink);
  background-color: var(--color-paper);

  border: var(--border-width) solid var(--border-color);
  border-radius: var(--radius-lg);

  overflow: hidden;

  transition:
    color var(--transition-normal),
    background-color var(--transition-normal),
    border-color var(--transition-normal),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.receive-api-card:hover {
  transform: translateY(-2px);

  box-shadow: 4px 4px 0 var(--color-ink);
}

/* =========================================================
   LOW HEIGHT
   ========================================================= */

@media (max-height: 650px) and (min-width: 768px) {
  .receive-api-view {
    grid-template-rows: minmax(80px, 1fr) minmax(0, 4fr);
    gap: 10px;
  }

  .receive-api-view__bottom {
    gap: 10px;
  }
}

/* =========================================================
   TABLET
   ========================================================= */

@media (max-width: 991.98px) {
  .receive-api-view {
    height: auto;
    min-height: 640px;

    grid-template-rows: 120px minmax(0, 1fr);
  }

  .receive-api-view__bottom {
    min-height: 500px;
  }

  .receive-api-card--endpoint {
    min-height: 120px;
  }

  .receive-api-card--request,
  .receive-api-card--response {
    min-height: 500px;
  }
}

/* =========================================================
   MOBILE
   ========================================================= */

@media (max-width: 767.98px) {
  .receive-api-view {
    height: auto;
    min-height: 0;

    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .receive-api-view__bottom {
    height: auto;
    min-height: 0;

    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .receive-api-card {
    height: auto;
    flex: 0 0 auto;
  }

  .receive-api-card--endpoint {
    min-height: 120px;
  }

  .receive-api-card--request,
  .receive-api-card--response {
    min-height: 360px;
  }
}

/* =========================================================
   SMALL MOBILE
   ========================================================= */

@media (max-width: 575.98px) {
  .receive-api-view,
  .receive-api-view__bottom {
    gap: 11px;
  }

  .receive-api-card--endpoint {
    min-height: 110px;
  }

  .receive-api-card--request,
  .receive-api-card--response {
    min-height: 340px;
  }
}
</style>