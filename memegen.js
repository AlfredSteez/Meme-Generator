const form = document.querySelector('.inputForm');
const urlInput = document.querySelector('input[name="imageUrl"]')
const topTextInput = document.querySelector('input[name="topText"]')
const bottomTextInput = document.querySelector('input[name="bottomText"]')
const memeSection = document.querySelector('.memeSection');



form.addEventListener('submit', function(e){
    e.preventDefault();
    const newMeme = makeDiv(urlInput.value, topTextInput.value, bottomTextInput.value);
    memeSection.appendChild(newMeme);
    e.target.reset();
});


function makeDiv(img, top, bottom) {
    const meme = document.createElement('div');
    meme.classList.add('meme');
    meme.style.backgroundImage = `url(${img})`;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtn.classList = ('deleteBtn');
    deleteBtn.addEventListener('click', function () {
    deleteBtn.parentElement.remove();
    });
    meme.appendChild(deleteBtn);

    const topText = document.createElement('div');
    topText.classList.add('top');
    topText.innerText = top;
    meme.appendChild(topText);
    
    const bottomText = document.createElement('div');
    bottomText.classList.add('bottom');
    bottomText.innerText = bottom;
    meme.appendChild(bottomText);

    return meme;
}
  
    










