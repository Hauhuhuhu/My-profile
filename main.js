const boxBird = document.querySelector('.home__clip');
const initialPosition = boxBird.style.transform;
boxBird.addEventListener('mouseenter', function(event) {
    const box = event.target.getBoundingClientRect();
    const mouseX = event.clientX - box.left; // X position within the element
    const mouseY = event.clientY - box.top;  // Y position within the element
    const width = box.width;
    const height = box.height;

    const left = Math.abs(mouseX);
    const right = Math.abs(mouseX - width);
    const top = Math.abs(mouseY);
    const bottom = Math.abs(mouseY - height);
    const min = Math.min(left, right, top, bottom);

    if (min === left) {
        boxBird.style.transform = 'translate(400px, -600px)';
    } else if (min === right) {
        boxBird.style.transform = 'translate(-600px, -600px)';
    } else if (min === top) {
        boxBird.style.transform =' translate(400px, 600px)';
    } else if (min === bottom) {
        boxBird.style.transform = 'translate(-100px, -600px)';
    }
});
boxBird.addEventListener('click', function(event) {
    boxBird.style.opacity = 0;
    boxBird.style.rotate = '180deg';
    setInterval(checkClick, 5000);
})

function checkHover() {
    const isHovered = boxBird.parentElement.querySelector(':hover') === boxBird;
    if (!isHovered) {
        boxBird.style.transform = initialPosition;
    }
}
function checkClick() {
    boxBird.style.opacity = 1;
    boxBird.style.rotate = '0deg';
}
setInterval(checkHover, 500);

// Bỏ Chữ NCH gắn liền
const textStrong = document.querySelector('.strong-primary');
    function checkScreenSize() {
        if (window.innerWidth < 739) {
            // Thực thi đoạn mã khi cửa sổ màn hình nhỏ hơn 576px
            // textStrong.textContent = ''; // Xóa nội dung của chữ NCH
            textStrong.innerHTML = 'Nguyen&nbsp;Cong Hau\'s';
            // Thực thi các hành động khác ở đây
        }
    }

    // Kiểm tra ngay khi trang được tải
    checkScreenSize();

    // Kiểm tra mỗi khi cửa sổ được thay đổi kích thước
    window.addEventListener('resize', checkScreenSize);

// Chặn Kiểm tra trình duyệt
document.addEventListener('contextmenu', function(event) { // Click chuột phải
    event.preventDefault();     
});
window.addEventListener('keydown', function(event) {
    if (event.keyCode === 123 ||
        event.keyCode === 85 ||
        event.keyCode === 73 ||
        event.keyCode === 74 ||
        event.keyCode === 67) 
    { // F12 U I J C
        event.preventDefault();
    }
});