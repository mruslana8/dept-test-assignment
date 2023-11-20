Feature: Sorting 

  As a user I want to sort products in Products List Page (PLP)

  Background:
    Given I logged in
    And I am on PLP

  Scenario: Default sorting is a sorting in ascending order by Name 
    Then products are sorted by "name" "ascending"  
          
  Scenario: User sorts products 
    When I sort products by "<sortBy>" "<order>"
    Then products are sorted by "<sortBy>" "<order>"

    Examples:
      | sortBy | order |
      | name  | ascending  |
      | name  | descending  |  
      | price  | ascending  |
      | price  | descending  |  