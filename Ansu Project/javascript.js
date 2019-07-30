function search()
{

  

  var country = document.querySelector("#cname").value;
  fetch("https://restcountries.eu/rest/v2/name/" + country).then((res)=>{
    res.json().then((placedetails)=>{
     // console.log(data);

      var store = document.querySelector(".results");
      for(var loop = 0; loop< placedetails.length ; loop++) {
        groupDiv = document.createElement("div");
        groupDiv.className = "block";
        groupDiv.setAttribute("onclick" , "getDetail(this)");
        textSpan = document.createElement("span");
        textSpan.className = placedetails[loop].name;
        flag = document.createElement("img");
        flag.className = "flagimg";
        flag.setAttribute("src" , placedetails[loop].flag);
        textSpan.append(placedetails[loop].name); 
        groupDiv.append(textSpan);
        groupDiv.append(flag);
        store.append(groupDiv);
      }


    })
  })

}

function getDetail(ele)
{

  var position = ele.querySelector("span");
  var fname = position.className;
  location.href = "details.html?fname=" + fname;

  

}