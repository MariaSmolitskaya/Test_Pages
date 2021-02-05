let messagesList = document.querySelector('.messages__list');
let message = document.querySelector('.messages__text');
let sendMessageBtn = document.querySelector('.messages__send-btn');

function addMessage() {
    let newText = message.value;
    messagesList.insertAdjacentHTML('beforeend',
            ` <li class="messages__item messages__item--sent">
                        <p>${newText}</p>
                        <svg viewBox="0 0 512 512" width="43" height="43"><use xlink:href="img/sprite_auto.svg#icon-user"></use></svg>
                </li>`
        );
    messagesList.scrollTop = messagesList.scrollHeight;
};

sendMessageBtn.addEventListener('click', evt => {
    evt.preventDefault();
    if (message.value !== '') {
        addMessage();
    };
    message.value = '';
});
