const { Given, When, Then } = require('@cucumber/cucumber')
const { SortingComponent } = require('../page-objects/components/sorting-component')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

When('I logged in', async function () {
  await loginPage.visit('')
  await loginPage.submitLoginFormWithParameters('standard_user', 'secret_sauce')
})

Given('I am on PLP', async function () {
  await loginPage.assertPLPisOpen()
})

When(
  'I sort products by {string} {string}',
  async function (sortBy, order) {
    const sortingComponent = new SortingComponent(sortBy, order)
    await sortingComponent.sort()
  },
)

Then(
  'products are sorted by {string} {string}',
  async function (sortBy, order) {
    const sortingComponent = new SortingComponent(sortBy, order)
    await sortingComponent.assertSelectOption()
    await sortingComponent.assertSortingIsCorrect()
  },
)
