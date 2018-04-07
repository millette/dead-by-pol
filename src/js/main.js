/* global vegaEmbed , vegaTooltip */

'use strict'

vegaEmbed('#viz-day', '../data/spec-lite-day.json', { actions: false })
  .then(function (result) {
    vegaTooltip.vegaLite(result.view, result.spec) // [, options]
  })
  .catch(console.error)

vegaEmbed('#viz-month', '../data/spec-lite-month.json', { actions: false })
  .then(function (result) {
    vegaTooltip.vegaLite(result.view, result.spec) // [, options]
  })
  .catch(console.error)
