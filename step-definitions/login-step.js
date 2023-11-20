const { Given, When, Then } = require('@cucumber/cucumber')
const { LoginPage } = require('../page-objects/login-page')

const loginPage = new LoginPage()

Given('I visit a login page', async function () {
  await loginPage.visit('')
})

When(
  'I fill the login form with {string} and {string}',
  async function (username, password) {
    await loginPage.submitLoginFormWithParameters(username, password)
  },
)

Then('I am {string} with {string}', async function (loginStatus, errorMessage) {
  await loginPage.assertLoginStatus(loginStatus, errorMessage)
})
