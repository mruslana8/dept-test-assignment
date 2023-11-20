const { expect } = require('@playwright/test')
const BasePage = require('../base-page')

class SortingComponent extends BasePage {

  constructor(sortBy, order) {
    super()
    this.sortBy = sortBy
    this.order = order
    switch (true) {
      case this.sortBy == 'name' && this.order == 'ascending':
        this.selectedSorting = 'az'
        break
      case this.sortBy == 'name' && this.order == 'descending':
        this.selectedSorting = 'za'
        break
      case this.sortBy == 'price' && this.order == 'ascending':
        this.selectedSorting = 'lohi'
        break
      case this.sortBy == 'price' && this.order == 'descending':
        this.selectedSorting = 'hilo'
    }
  }

  async sort() {
    await page.selectOption('select.product_sort_container', this.selectedSorting)
  }

  async assertSelectOption() {
    await expect(page.locator('select.product_sort_container')).toHaveValue(this.selectedSorting)
  }

  async assertSortingIsCorrect() {
    let resultedProductsList = await page
      .locator('div.inventory_item_' + this.sortBy)
      .allTextContents()

    if (this.sortBy == 'price') {
      for (let i = 0; i < resultedProductsList.length; i++) {
        resultedProductsList[i] = parseFloat(resultedProductsList[i].replace('$', ''))
      }
    }
    let expectedProductsList = this.createExpectedProductsList(resultedProductsList)
    // console.log(this.sortBy, this.order, this.selectedSorting)
    // console.log(expectedProductsList, " ||||",  resultedProductsList)
    expect(resultedProductsList).toMatchObject(expectedProductsList)
  }

  createExpectedProductsList(productsList) {
    const expectedProductsList = [...productsList]
    expectedProductsList.sort(function (a, b) {
      return a > b ? 1 : b > a ? -1 : 0
    })
    if (this.order == 'descending') {
      return expectedProductsList.reverse()
    } else if (this.order == 'ascending') {
      return expectedProductsList
    }
  }
}
module.exports = { SortingComponent }
