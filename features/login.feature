Feature: Login as a problem user 

  @development
  Scenario: Problem user logs in 
    Given I visit a login page
    When I fill the login form with "<username>" and "<password>"
    Then I am "<login status>" with "<error message>"
    
    Examples:
      | username | password | login status | error message |
      | problem_user  | secret_sauce  | logged in | |
      | problem2_user  | secret_sauce  | not logged in | Epic sadface: Username and password do not match any user in this service |
      | problem_user  | wrong_password  | not logged in| Epic sadface: Username and password do not match any user in this service |
      | locked_out_user | secret_sauce | not logged in | Epic sadface: Sorry, this user has been locked out. |