# AutoComplete Example With AJAX
****
## Installation
+ fork
+ clone
+ cd into app folder
```
cd AJAXSearch
```
+ run
```
rails db:create && rails db:migrate && rails db:seed
```
+ start server
```
rails server
```
****

## Usage
This repository contains examples of three different ways to execute an ajax request.
+ Javascript - Refer to home.js

+ Jquery - Refer to home_ajax.js 
  + To use the jquery way, comment out all the in home.js and uncomment code in home_ajax.js
  + The general gist of the code for javascript and jquery is the same. Listen for the key up event and then send a request and populate your list. 

+ The Rails Way - Using ``` remote: true ```
  + Unfortunately, doing it the rails way is slightly different. The rails way performs its ajax request when a button is pressed (for e.g. when you submit a form). However, our current event is not a form being submitted, it is a **keyup** event. For it to work, you would need to press **enter** after typing the name of a city. It is basically not a autocomplete event but the purpose of this is to show you how to perform an ajax request through the rails way.
  + To use it the rails way, uncomment out code in both home.js and home_ajax.js. In our generic/home.html.erb, add ```remote: true ``` option to your form_tag, like this:
    
      ```<%= form_tag search_path, id: "city-search", remote: true do %>```
