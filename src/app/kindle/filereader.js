const title = document.querySelector('.bookTitle').innerText
const author = document.querySelector('.authors').innerText
const highlights = []

const processhighlights = () => {
  document.querySelectorAll('.noteText').forEach(el => { 
    const elInnerHtml = el.innerHTML
    const regexLocation = /(?<=Location )\d+/g;
    const regexText = /[^]+(?=(<h6|<h5|<h4|<h3|<h2|<h1))/g;
  
    const location = elInnerHtml.match(regexLocation)
    const text = elInnerHtml.match(regexText)
    if (location && text) {
      const highlight = {
        location: +location.join(''),
        text: text.join('')
      }
      highlights.push(highlight)
    }
  })
} 
processhighlights()

const bookmark = {
  title, 
  author, 
  highlights
}
const bookmarkJSON = JSON.stringify(bookmark)

const download = (content, fileName, contentType) => {
  var a = document.createElement("a");
  var file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.innerText = 'Download Json'
  document.querySelector('body').appendChild(a);
}

download(bookmarkJSON, `${bookmark.title}.txt`, 'text/json');

