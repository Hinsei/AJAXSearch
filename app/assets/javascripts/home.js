var city_input = document.getElementById("search")

if (city_input){
  city_input.addEventListener("keyup", function(event){
    autocomplete(event)
  })
}

window.globalXHR = new XMLHttpRequest()

function autocomplete(event) {
  //retrieve input
  var input = event.target

  //get datalist element for results
  var list = document.getElementById("list")

  //set minimum num of chars
  var min_chars = 0

  if (input.value.length > min_chars) {
    //abort pending requests
    window.globalXHR.abort()

    window.globalXHR.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {

        //convert json response to an object
        var response = JSON.parse(this.responseText)

        //clear previous results
        list.innerHTML = ""

        response.forEach(function(element){
          //create new option element
          var option = document.createElement("option")
          option.value = element

          //append option to list
          list.appendChild(option)
        })
      }
    }

    var auth_token = document.querySelector("[name='csrf-token']").content
    window.globalXHR.open("POST", "/search?query=" + input.value, true)
    //allow js to make request to rails server
    window.globalXHR.setRequestHeader("X-CSRF-TOKEN", auth_token)
    window.globalXHR.send()
  }
}

