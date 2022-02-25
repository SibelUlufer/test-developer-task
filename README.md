"npm run py:venv" or run "py -3 -m venv .venv" -- to connect .venv env
".venv\scripts\activate" -- use to activate .venv
"npm run cy:open" or "npx cypress open" -- to open cypress

.feature files are added under the integration folder as "addAsset" and "existingAsset"

addAsset.feature has 3 three scenarios
../integration/addAsset folder has .spec file as step_def file

existingAsset.feature has 6 scenarios
../integration/existingAssetvfolder has .spec file as step_def file

../integration/page-objects has 2 folder as /components and /pages
../integration/page-objects/components contains listComponent and tabs file
../integration/page-objects/components/listComponent is to manage Existing Asset page's listing functions
../integration/page-objects/components/tabs is to manage "Description", "Add Asset", "Existing Assets"  links' functions


../integration/page-objects/pages contains 3 files as "basePage", "addAsset", "existingAssets"
../integration/page-objects/pages/basePage is to manage general base page functions
../integration/page-objects/pages/addAsset is to manage Add Asset page's functions
../integration/page-objects/pages/existingAssets is to manage Existing Assets page's general functions

../support/command files has functions that can be reachable from anywhere 

For running the scenarios, @focus smart tag is added

.prettierrc file has format settings


