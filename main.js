// functionality: pass some argument in as string (taken from text selection/highlight)

console.log('extension is running!');

// eventListener - button?
    
    const body = document.querySelector('body');

    body.addEventListener('keydown', (e) => {
        if (e.key === '?') {
            
            // console.log(`key pressed!`);

            //highlight word/phrase - string arg
            // resource: https://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text

            //if image - seach meta data tag or url that image is stored at
            // edge case: what if button is pressed and there is nothing highlighted?

            let textToBeSearched = "";
            function getText() {
                // let textToBeSearched = "";
                if (window.getSelection) {
                    textToBeSearched = window.getSelection().toString();
                }
                else if (document.selection && document.selection.type != "Control") {
                    textToBeSearched = document.selection.createRange().text;
                }
                // console.log(textToBeSearched);
                return textToBeSearched;
            }
            getText();
        
            //pass into YT search (API?)
            

            //open new tab with link
            // resource: https://www.geeksforgeeks.org/how-to-open-url-in-new-tab-using-javascript/
            //use math random to select one of top 15 videos in search
            //API from a non-signed in user?
            
            const youtubeSearch = "https://www.youtube.com/results?search_query=" + textToBeSearched.replaceAll(' ','+');
            const wikiSearch = "https://en.wikipedia.org/w/index.php?search=" + textToBeSearched.replaceAll(' ','+');
            const googleTranslate = "https://translate.google.com/?sl=en&tl=es&text=" + textToBeSearched.replaceAll(' ','+');
            const googleNews = "https://news.google.com/search?q=" + textToBeSearched.replaceAll(' ','+');
            const askEric = "https://eric.ed.gov/?q=" + textToBeSearched.replaceAll(' ','+');
            

            function openNewTab() {
                window.open(youtubeSearch, '_blank');
                // console.log(`opened new tab!`)
                window.open(wikiSearch, '_blank');
                window.open(googleTranslate, '_blank');
                window.open(googleNews, '_blank');
                window.open(askEric, '_blank');
            }
            openNewTab();

        }
    });
// });

