const userStorage = (function () {
    class Task {
        constructor(name, version) {
            this.name = name;
            this.version = version;
            this.checked = false;
        }
    }

    class UserStorage {
        constructor() {
            if (getItem('tasks')) {
                this.tasks = getItem('tasks');
            } else {
                this.tasks = [];
                setItem('tasks', this.tasks)
            }
        }

        addTask(task, version) {
            this.tasks = getItem('tasks');
            this.tasks.push(new Task(task, version));
            setItem('tasks', this.tasks);
        }

        removeTask(version) {
            this.tasks = getItem('tasks');
            this.tasks = this.tasks.filter(item => item.version === version);
            setItem('tasks', this.tasks);
        }

        checkTask(version) {
            this.tasks.array.forEach(task => {
                if (task.uuid === version) {
                    if (task.checked) {
                        task.checked = false;
                    } else {
                        task.checked = true;
                    }
                    return setItem('tasks', this.tasks);
                }
            });
        }
    }

    return new UserStorage();
})();