import Isotope from 'isotope-layout'
import { useEffect } from 'react'

const initIsotope = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const grid = document.querySelectorAll<HTMLElement>('.gallery')
      let iso: Isotope

      if (grid.length >= 1) {
        grid.forEach((item) => {
          iso = new Isotope(item, {
            itemSelector: '.items'
          })
        })
      }

      const gridMons = document.querySelectorAll<HTMLElement>('.gallery-mons')

      if (gridMons.length >= 1) {
        gridMons.forEach((item) => {
          iso = new Isotope(item, {
            itemSelector: '.items',
            masonry: {
              columnWidth: '.width2'
            }
          })
        })
      }

      const filtersElem = document.querySelector<HTMLElement>('.filtering')

      if (filtersElem) {
        filtersElem.addEventListener('click', function (event) {
          if (!(event.target instanceof Element)) {
            return
          }

          if (!event.target.matches('span')) {
            return
          }

          const filterValue = event.target.getAttribute('data-filter')
          if (filterValue !== null) {
            iso.arrange({ filter: filterValue })
          }
        })

        const buttonGroups =
          document.querySelectorAll<HTMLElement>('.filtering')

        for (let i = 0, len = buttonGroups.length; i < len; i++) {
          const buttonGroup = buttonGroups[i]
          radioButtonGroup(buttonGroup)
        }
      }
    }
  }, [])

  function radioButtonGroup(buttonGroup: HTMLElement) {
    buttonGroup.addEventListener('click', function (event) {
      if (!(event.target instanceof Element)) {
        return
      }

      if (!event.target.matches('span')) {
        return
      }

      buttonGroup
        .querySelector<HTMLElement>('.active')
        ?.classList.remove('active')
      event.target.classList.add('active')
    })
  }
}

export default initIsotope
