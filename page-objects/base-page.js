class BasePage {
    constructor() {
      this.URL = "https://www.saucedemo.com/v1"
    }
    async visit(path) {
      await page.goto(this.URL + path)
    }
  }
  
  module.exports = BasePage 