// lấy phần tử html có id ...
const newTaskInput = document.getElementById('new-task');
// lấy phần tử html có id ...
const addTaskButton = document.getElementById('add-task-btn');
// lấy phần tử html có id ...
const taskList = document.getElementById('task-list');

// gắn một sự kiện lắng nghe cho nút, chờ khi người dùng click
// khi sự kiện xảy ra, một hàm ẩn danh sẽ được thực thi
addTaskButton.addEventListener('click', function() {
    // lấy giá trị từ input, loại bỏ khoảng trắng thừa bằng trim()
    const taskText = newTaskInput.value.trim();

    // nếu nội dung của taskText không rỗng, điều kiện thực thi
    if (taskText !== "") {
        addTask(taskText); // gọi hàm addTask và truyền vào taskText
        newTaskInput.value = ""; // reset lại giá trị của input
    }
})

// khai báo hàm addTask, với đối số là taskText
function addTask(taskText) {
    // tạo một thẻ li mới, đại diện cho 1 task
    const listItem = document.createElement('li');
    // thêm class cho phần tử, giúp định dạng kiểu
    listItem.classList.add('task-item');

    // tạo phần tử span, chứa nội dung
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // tạo nút mới để xóa task ra khỏi danh sách
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    // sự kiện lắng nghe cho nút xóa, khi người dùng nhấ nút
    // sự kiện sẽ xảy ra, phần tử li chứa button sẽ bị xóa
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });

    // gắn sự kiện lắng nghe cho phần nội dung task
    // lớp completed sẽ được thêm hoặc gỡ, đại diện cho cv hoàn thành
    taskContent.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    // thêm span taskContent, thêm button deleteButton vào thẻ li
    listItem.appendChild(taskContent);
    listItem.appendChild(deleteButton);

    // thêm thẻ li vừa tạo vào danh sách công việc taskList
    taskList.appendChild(listItem);
}