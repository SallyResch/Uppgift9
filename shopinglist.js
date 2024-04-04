document.addEventListener('DOMContentLoaded', function () {
    const addItemButton = document.getElementById('addItemButton');
    addItemButton.addEventListener('click', function () {
        const itemText = document.getElementById('addItem').value.trim();
        if (itemText !== '') {
            const newItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('form-check-input');
            const label = document.createElement('label');
            label.classList.add('form-check-label');
            label.textContent = itemText;
            newItem.appendChild(checkbox);
            newItem.appendChild(label);
            newItem.classList.add('list-group-item');
            checkbox.addEventListener('change', function () {
                label.classList.toggle('text-decoration-line-through', checkbox.checked);
            });
            document.getElementById('itemList').appendChild(newItem);
            document.getElementById('addItem').value = '';
        }
    });
});

