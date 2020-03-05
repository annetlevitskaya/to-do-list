function ready() {
    var list = document.querySelectorAll('.list__item');
    console.log(list);
    var listContainer = document.querySelector('.list');

    function remove() {
        list.forEach(item => {
            var busket = item.querySelector('.list__item_img');

            busket.addEventListener('click',function() {
                item.remove();
            })
        });
    };

    function edit(){
        list.forEach(item => {
            var editButton = item.querySelector('.list__item_edit');
            const inputElement = item.querySelector('.hide');
            const textElement = item.querySelector('.list__item span');
            
            editButton.addEventListener('click', function() {
                const isInput = inputElement.classList.contains('open');

                if (isInput) {
                    const newValue = inputElement.value;
                    textElement.innerText = newValue;
                } {
                    const text = textElement.innerText;
                    inputElement.value = text;
                }

                inputElement.classList.toggle('open');
                textElement.classList.toggle('hide');
            })
        })
    }

    edit();

    var input = document.querySelector('.input__text');

    function add() {
        var inputValue = input.value;

        const div = document.createElement('div');
        const span = document.createElement('span');
        const img = document.createElement('div');
        const editInput = document.createElement('input');
        const editImg = document.createElement('div');
        
        div.classList.add('list__item');
        img.classList.add('list__item_img');
        editInput.classList.add('hide');
        editImg.classList.add('list__item_edit');
        img.addEventListener('click', function() {
            div.remove();
        })
        editImg.addEventListener('click', function() {
            edit();
        })

       
        span.innerHTML = inputValue;
        div.appendChild(span);

        div.appendChild(editInput);

        div.appendChild(img);
        div.appendChild(editImg);
        listContainer.appendChild(div);
    }

    var button = document.querySelector('.input__btn');

    button.addEventListener('click', add)

    remove();
}

document.addEventListener("DOMContentLoaded", ready);

