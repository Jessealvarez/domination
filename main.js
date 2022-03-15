// 1. - 2.

function linethrough(){
    let firstproblem = document.querySelector("li");
    firstproblem.style.setProperty("text-decoration", "line-through");
}
linethrough();

//3. - 4.

function setImage(str1, str2){
    let image1 = document.querySelector(str1)
    image1.src = str2;

}
setImage("#image-1","https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png");
setImage("#image-2","https://static.pokemonpets.com/images/monsters-images-800-800/2070-Shiny-Weepinbell.webp");
setImage("#image-3", "https://static.pokemonpets.com/images/monsters-images-800-800/71-Victreebel.webp");

//5. -6.

function remover(){
    let deleteMe = document.querySelector("li")
        //for( let i = 0; i < 2; i++){
            deleteMe.remove();
           // deleteMe = document.querySelector("li");
            
        }


remover();
remover();

//7. Write a function that takes in two strings, one representing a font size and one representing an id, and sets the thing with that id to have that size for its text.
//8. Try using it to change the size of any text on the page.

function setLetterSize(str1, str2){
    let userLetter = document.querySelector(str1)
    userLetter.style.fontSize = "small";
}
setLetterSize("h1", "12");

// 1. Write a function that takes in a DOM element and appends it to the Arguments `<ul>`.
// 2. Let's use it! Create an image element in Javascript and pass it into your function.
// 3. Write a function that takes in an image element and modifies its height to be 30 pixels.
// 4. Let's use it. Query an image element and then pass it into the function.
// 5. Write a function that takes in an element and gives it the class `invisible`.
// 6. Now query an element on the page and pass it into that function. You should see it disappear! (feel free to check the CSS file to see how this class works.)

let newImage = document.createElement("img");
newImage.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png";

function makeAppends(str1){
   
    let argumentvar = document.querySelector("ul")

    argumentvar.appendChild(str1)
}
makeAppends(newImage);

function setSize30(str1){

    str1.style.height = "30px";
}
setSize30(newImage);

function makeinvisible(str){
    
    str.className = "invisible"
    
}
let heading = document.querySelector('h1');
makeinvisible(heading);

// 1. Write a function that takes in text and returns a new `<li>` with the given text parameter as its `innerText`.
// 2. Test it! Somewhere below this function, call it. Store the returned DOM element in a variable, then append it to the page (use your first function from part 2).
// 3. Write a function that takes in two strings, one representing a header size and one some text, and returns a new header of that size (e.g., a '3' for the first parameter should result in an `<h3>`) with that text in it.
// 4. Test it by calling it with a header size and some text, storing the return value in a variable, then appending it to the page (again, use your first function from part 2).

function newListItems(text){
   let listItem = document.createElement("li")
   listItem.innerText = text;
   return listitem;
}
let newListItem = newListItems("Hope this works!")
makeAppends(newListItem);

function newHeaderSizeAndText(size, text){
    let newheader = document.createElement(`$(size)`);
    newheader.innerText = text;
    return newheader;
}
let newheader = newHeaderSizeAndText("1", "Testing this out.")
makeAppends(newheader);