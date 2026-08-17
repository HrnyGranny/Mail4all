<script setup>
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => [
      { day: 'Mon', value: 3 },
      { day: 'Tue', value: 6 },
      { day: 'Wed', value: 4 },
      { day: 'Thu', value: 9 },
      { day: 'Fri', value: 7 },
      { day: 'Sat', value: 11 },
      { day: 'Sun', value: 8 },
    ],
  },
})

const chartWidth = 700
const chartHeight = 170
const chartPaddingX = 34
const chartPaddingTop = 18
const chartPaddingBottom = 28

const maximumValue = computed(() => {
  const values = props.data.map((item) => {
    return Number(item.value) || 0
  })

  return Math.max(...values, 1)
})

const totalEmails = computed(() => {
  return props.data.reduce((total, item) => {
    return total + (Number(item.value) || 0)
  }, 0)
})

const averageEmails = computed(() => {
  if (!props.data.length) {
    return 0
  }

  return Math.round(totalEmails.value / props.data.length)
})

const chartPoints = computed(() => {
  if (!props.data.length) {
    return []
  }

  const usableWidth = chartWidth - chartPaddingX * 2
  const usableHeight =
    chartHeight - chartPaddingTop - chartPaddingBottom

  return props.data.map((item, index) => {
    const divisor = Math.max(props.data.length - 1, 1)

    const x =
      chartPaddingX + (usableWidth / divisor) * index

    const normalizedValue =
      (Number(item.value) || 0) / maximumValue.value

    const y =
      chartPaddingTop +
      usableHeight -
      normalizedValue * usableHeight

    return {
      ...item,
      x,
      y,
    }
  })
})

const polylinePoints = computed(() => {
  return chartPoints.value
    .map((point) => `${point.x},${point.y}`)
    .join(' ')
})

const areaPoints = computed(() => {
  if (!chartPoints.value.length) {
    return ''
  }

  const bottom = chartHeight - chartPaddingBottom
  const firstPoint = chartPoints.value[0]
  const lastPoint =
    chartPoints.value[chartPoints.value.length - 1]

  return [
    `${firstPoint.x},${bottom}`,
    polylinePoints.value,
    `${lastPoint.x},${bottom}`,
  ].join(' ')
})
</script>

<template>
  <article class="receive-graph">
    <header class="receive-graph__header">
      <div class="receive-graph__heading">
        <h2 class="receive-graph__title">
          Email activity
        </h2>
      </div>

      <div class="receive-graph__summary">
        <div class="receive-graph__metric">
          <strong>{{ totalEmails }}</strong>
          <span>Total</span>
        </div>

        <div class="receive-graph__metric">
          <strong>{{ averageEmails }}</strong>
          <span>Daily avg.</span>
        </div>
      </div>
    </header>

    <div class="receive-graph__chart">
      <svg
        class="receive-graph__svg"
        :viewBox="`0 0 ${chartWidth} ${chartHeight}`"
        role="img"
        aria-label="Emails received during the last seven days"
        preserveAspectRatio="none"
      >
        <line
          class="receive-graph__grid-line"
          x1="34"
          y1="42"
          x2="666"
          y2="42"
        />

        <line
          class="receive-graph__grid-line"
          x1="34"
          y1="82"
          x2="666"
          y2="82"
        />

        <line
          class="receive-graph__grid-line"
          x1="34"
          y1="122"
          x2="666"
          y2="122"
        />

        <polygon
          v-if="areaPoints"
          class="receive-graph__area"
          :points="areaPoints"
        />

        <polyline
          v-if="polylinePoints"
          class="receive-graph__line"
          :points="polylinePoints"
        />

        <g
          v-for="point in chartPoints"
          :key="point.day"
        >
          <circle
            class="receive-graph__point"
            :cx="point.x"
            :cy="point.y"
            r="6"
          />

          <text
            class="receive-graph__value"
            :x="point.x"
            :y="point.y - 13"
            text-anchor="middle"
          >
            {{ point.value }}
          </text>

          <text
            class="receive-graph__day"
            :x="point.x"
            :y="chartHeight - 7"
            text-anchor="middle"
          >
            {{ point.day }}
          </text>
        </g>
      </svg>
    </div>
  </article>
</template>

<style scoped>
.receive-graph {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  padding: clamp(10px, 1.2vw, 14px);

  display: flex;
  flex-direction: column;
  gap: 7px;

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

.receive-graph:hover {
  transform: translateY(-2px);

  box-shadow: 4px 4px 0 var(--color-ink);
}

.receive-graph__header {
  min-width: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.receive-graph__heading {
  min-width: 0;
}

.receive-graph__title {
  margin: 0;

  color: var(--color-ink);

  font-size: clamp(0.95rem, 1.4vw, 1.15rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.receive-graph__summary {
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  gap: 6px;
}

.receive-graph__metric {
  min-width: 58px;
  padding: 4px 7px;

  display: flex;
  flex-direction: column;

  background-color: var(--color-bone);

  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
}

.receive-graph__metric strong {
  color: var(--color-ink);

  font-size: 0.76rem;
  line-height: 1.1;
}

.receive-graph__metric span {
  color: var(--color-graphite);

  font-family: var(--font-mono);
  font-size: 0.36rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.receive-graph__chart {
  flex: 1 1 auto;

  width: 100%;
  min-width: 0;
  min-height: 78px;
  padding: 3px;

  background-color: var(--color-bone);

  border: 1px solid var(--color-line);
  border-radius: var(--radius-md);

  overflow: hidden;
}

.receive-graph__svg {
  width: 100%;
  height: 100%;

  display: block;
}

.receive-graph__grid-line {
  stroke: var(--color-line);
  stroke-width: 1;
  stroke-dasharray: 5 7;

  vector-effect: non-scaling-stroke;
}

.receive-graph__area {
  fill: rgba(var(--color-chartreuse-rgb), 0.25);

  stroke: none;
}

.receive-graph__line {
  fill: none;

  stroke: var(--color-ink);
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;

  vector-effect: non-scaling-stroke;
}

.receive-graph__point {
  fill: var(--color-chartreuse);

  stroke: var(--color-on-accent);
  stroke-width: 2;

  vector-effect: non-scaling-stroke;
}

.receive-graph__value,
.receive-graph__day {
  fill: var(--color-ink);

  font-family: var(--font-mono);
  font-weight: 700;
}

.receive-graph__value {
  font-size: 12px;
}

.receive-graph__day {
  fill: var(--color-graphite);

  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

@media (max-height: 650px) and (min-width: 768px) {
  .receive-graph {
    padding: 9px;

    gap: 5px;
  }

  .receive-graph__summary {
    gap: 4px;
  }

  .receive-graph__metric {
    min-width: 52px;
    padding: 3px 6px;
  }

  .receive-graph__chart {
    min-height: 70px;
  }
}

@media (max-width: 767.98px) {
  .receive-graph {
    height: auto;
    min-height: 230px;
    flex: 0 0 auto;
  }

  .receive-graph__chart {
    min-height: 150px;
  }
}

@media (max-width: 575.98px) {
  .receive-graph {
    min-height: 220px;
    padding: 12px;
  }

  .receive-graph__header {
    gap: 9px;
  }

  .receive-graph__summary {
    gap: 4px;
  }

  .receive-graph__metric {
    min-width: 54px;
    padding: 4px 6px;
  }

  .receive-graph__chart {
    min-height: 140px;
  }
}
</style>