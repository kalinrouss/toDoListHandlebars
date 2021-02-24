(function () {
    print();
    onClick();

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (input.value.trim()) {
            let value = input.value.trim();
            userStorage.addItem(value, utils);
            print();
            onClick();
            input.value = '';
        }
    });
})();