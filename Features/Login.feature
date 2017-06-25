Feature: Login

  @regression
  Scenario Outline: Successful Login with Valid Credentials
    Given User is on "Home" Page
    When User logs in using username as "<uname>" and password as "<pwd>"
    Then login should be successful
    When User presses Sign Out button
    Then logout should be successful

    Examples: 
      | uname    | pwd      |
      | tutorial | tutorial |
      | leanft   | leanft   |
