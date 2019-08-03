import unirest from "unirest";

unirest.get("https://dp.p.rapidapi.com/?RecipeId=10610&Servings=0&method=GetRecipe")
.header("X-RapidAPI-Host", "dp.p.rapidapi.com")
.header("X-RapidAPI-Key", "cb756256fdmsh9ddc09268c1099bp154682jsn00cc9f053344")
.end(function (result) {
    console.log(result.body);
  });


// Export an object with a "search" method that\

export default{
  search: function(query){
    return unirest.get;
  }
}