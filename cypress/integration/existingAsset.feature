Feature: Existing Assets
Background: Redirection from land page to existing assets page
    Given Land on description page
    When Click on Existing Assets tab
    Then See the Existing Assets page
@focus
Scenario: Filter by assert name - w/existing data
    When Enter an existing name of asset
    Then The asset should be listed
@focus
Scenario: Filter by assert name - w/non-existing data
    When Enter non-existing name of asset
    Then The asset should not be listed
@focus
Scenario:Search by assert name
    When Enter some text on searchbox
    Then The list items includes the text
@focus
Scenario:Sort by assert name as ASC
    When Click on sort icon
    Then The list should be sorted ASC
@focus
Scenario:Sort by assert name as DESC    
    When Click on sort icon
    Then The list should be sorted DESC 
@focus
Scenario: Pagination
    When See pages through pagination
    





