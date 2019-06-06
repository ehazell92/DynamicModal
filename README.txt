Author: Edward Hazell

File Types: [ html / css / js ]

Function:
	1.) Dynamically build buttons based on array.
	2.) Dynamically builds and prompts modal with blur on selection
	3.) Returns user selection from dynamically generated modal to index for display
	4.) Written only using vanilla javascript.

Purpose:
	Scripts execute on html document loaded, the script passes an array of custom 'buttons' which it dynamically builds and adds to the DOM. 
	Upon completion the user is capable of selecting any of the buttons available. 
	This triggers a purely JS script which handles the "Message", "Proceed Text", and "Cancel Text" which is dynamically built and added to the HTML file. 
	Whatever option is selected by the user is passed back to Index to be appropriately displayed on the screen.