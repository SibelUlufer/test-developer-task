Feature: Add Asset
Background: Redirection from land page to add asset page
    Given Land on description page
    When Click on Add Asset tab
    Then See the Add page

Scenario: The asset name is a combination of 4 uppercase letters and 10 digitalis
    When Enter the asset context
    Then Click on the button
    And See the valid format validation message
    And See the success pop-up

Scenario: The asset name should be unique
    When Enter the asset context
    Then Click on the button
    And See the success pop-up 
    And Close pop-up
    When Click on the button
    Then See the error pop-up

Scenario: The asset name should not be incorrect format
    When Enter the asset context
    Then Click on the button
    And See the success pop-up 
    And Close pop-up
    When Enter the asset context invalid
    Then See the invalid format validation message
@focus  
Scenario:Add an asset and check in on Existing Asset page
    When Enter the asset context
    Then Click on the button
    And Close the pop-up
    And Click on Existing Assets tab
    When Enter the same name of asset
    Then The asset should be listed

  

