'use client'

import type { JSX } from 'react'

import { enLocale, useDarkMode } from 'nucleify'

import type { FeatureItemInterface } from '../Template'
import { NucFeatureTemplate } from '../Template'
import './_index.scss'

function t(key: string): string {
  const value = (enLocale as Record<string, string>)[key]
  return typeof value === 'string' ? value : key
}

interface Metric {
  id: string
  label: string
  score: number
}

function getScoreColor(score: number): string {
  if (score >= 90) return '#10b981'
  if (score >= 50) return '#eab308'
  return '#ef4444'
}

export function NucPerformance(): JSX.Element {
  const { isDark } = useDarkMode()
  const trackColor = isDark ? '#0d4723' : '#c6e0d4'

  const features: FeatureItemInterface[] = [
    { icon: 'mdi:server-network', label: t('features-performance-feat-cdn') },
    { icon: 'mdi:cached', label: t('features-performance-feat-cache') },
    {
      icon: 'mdi:cellphone-check',
      label: t('features-performance-feat-mobile'),
    },
  ]

  const metrics: Metric[] = [
    {
      id: 'performance',
      label: t('features-performance-metric-perf'),
      score: 97,
    },
    {
      id: 'accessibility',
      label: t('features-performance-metric-a11y'),
      score: 100,
    },
    {
      id: 'best-practices',
      label: t('features-performance-metric-bp'),
      score: 100,
    },
    { id: 'seo', label: t('features-performance-metric-seo'), score: 100 },
  ]

  return (
    <NucFeatureTemplate
      sectionId="performance"
      badge={t('features-performance-badge')}
      headingPrefix={t('features-performance-heading-prefix')}
      headingHighlight={t('features-performance-heading-highlight')}
      description={t('features-performance-description')}
      features={features}
      visualPosition="left"
    >
      <div className="speedometers-grid">
        {metrics.map((metric) => (
          <div key={metric.id} className="speedometer-item">
            <div className="mini-speedometer">
              <svg viewBox="0 0 100 60" className="speedometer-svg">
                <path
                  d="M 10 55 A 40 40 0 0 1 90 55"
                  fill="none"
                  stroke={trackColor}
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M 10 55 A 40 40 0 0 1 90 55"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray={125.6}
                  strokeDashoffset={125.6 * (1 - metric.score / 100)}
                />
              </svg>
              <span
                className="speedometer-value"
                style={{ color: getScoreColor(metric.score) }}
              >
                {metric.score}
              </span>
            </div>
            <span className="speedometer-label">{metric.label}</span>
          </div>
        ))}
      </div>
    </NucFeatureTemplate>
  )
}
