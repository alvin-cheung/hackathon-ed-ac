const contents = document.getElementById('contents');


// functionality: pass some argument in as string (taken from text selection/highlight)

//highlight word/phrase - string arg
let textToBeSearched = "";
function getText() {
    let textToBeSearched = "";
    if (window.getSelection) {
        textToBeSearched = window.getSelection().toString();
    }
    else if (document.selection && document.selection.type != "Control") {
        textToBeSearched = document.selection.createRange().text;
    }
    console.log(textToBeSearched);
}

//event - button?
    //if image - seach meta data tag or url that image is stored at
    // edge case: what if button is pressed and there is nothing highlighted?


//pass into YT search (API?)


//open new tab with link
    //use math random to select one of top 15 videsos in search
    //API from a non-signed in user?
    