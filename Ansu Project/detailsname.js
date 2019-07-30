var url_name = document.URL;
var url = new URL(url_name);
var fname = url.searchParams.get("fname");

fetch("https://restcountries.eu/rest/v2/name/" + fname + "?fullText=true").then((res) =>{
  res.json().then((placedetails)=>{
  
    var store = document.querySelector(".store");
  
    flag = document.createElement("img");
    flag.className = "flagimg";
    flag.setAttribute("src" , placedetails[0].flag);
    store.append(flag);



    groupDiv = document.createElement("div");
    groupDiv.append("Name: " + placedetails[0].name);
    store.append(groupDiv);


    groupDiv = document.createElement("div");
    groupDiv.append("Capital: " +placedetails[0].capital);
    store.append(groupDiv);

    groupDiv = document.createElement("div");
    groupDiv.append("Region: " +placedetails[0].region);
    store.append(groupDiv);
    
    groupDiv = document.createElement("div");
    groupDiv.append("Population: " +placedetails[0].population);
    store.append(groupDiv);
    
    groupDiv = document.createElement("div");
    groupDiv.append("Languages: " +placedetails[0].languages[0].name);
    store.append(groupDiv);



    groupDiv = document.createElement("div");
    groupDiv.append("Currency: " +placedetails[0].currencies[0].name);
    store.append(groupDiv);





  





    groupDiv = document.createElement("div");
    store.append(groupDiv);
    store.append(groupDiv);




  })
})


function goBack() {
  window.history.back();
}