//content.js
//injected into every site visited
var links = document.getElementsByTagName('a');
//finds all html elements with a tag "a"

for (var i = 0; i < links.length; i++) {
    //replaces the href (link address) of all elements with a tag "a" (usually links)
    links[i].href = 'https://www.youtube.com/watch?v=YbJOTdZBX1g';
    //youtube rewind
}//end for