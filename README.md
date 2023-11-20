# dept-test-assignment
Test assignment for Junior QA Engineer position. 

I used Cucumber and Playwright, Page Object Model for my assignment.

_To run project:_
+ npm install
+ npx playwright install
+ npm run test


For Scenario 1 - Sorting products on PLP -  I check all options of sorting on the page.

Sorting checking:
I read array of names or prices from the page(resultedProductsList). Create copy of the array and sort new array (expectedProductsList). Then I compare two arrays. 


For Scenario 2 - Login as a problem user - I check whether it's possible to login with valid credentials. I check whether error messages are as expected: if the user entered invalid credentials or if the user was locked out. 