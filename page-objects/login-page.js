const { expect } = require('@playwright/test')
const BasePage = require('../page-objects/base-page')

class LoginPage extends BasePage {
  async submitLoginFormWithParameters(username, password) {
    await page.locator('data-test=username').fill(username)
    await page.locator('data-test=password').fill(password)
    await page.locator('#login-button').click()
  }

  async assertPLPisOpen() {
    await expect(page.locator('div.inventory_list')).toBeVisible()
  }

  async assertLoginStatus(loginStatus, expectedErrorMessage) {
    if (loginStatus == 'logged in') {
      await this.assertPLPisOpen()
    } else if (loginStatus == 'not logged in') {
      const resultedErrorMessage = page.locator('data-test=error')
      expect(await resultedErrorMessage).toHaveText(expectedErrorMessage)
    }
  }
}

module.exports = { LoginPage }
