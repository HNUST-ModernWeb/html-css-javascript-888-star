// 获取元素
const avatarInput = document.getElementById('avatarInput');
const avatar = document.getElementById('avatar');
const nameInput = document.getElementById('nameInput');
const bioInput = document.getElementById('bioInput');
const saveBtn = document.getElementById('saveBtn');
const displayName = document.getElementById('displayName');
const displayBio = document.getElementById('displayBio');

// 保存按钮点击事件
saveBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const bio = bioInput.value.trim();

    displayName.textContent = name || "未填写姓名";
    displayBio.textContent = bio || "未填写简介";
});

// 头像上传事件
avatarInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            avatar.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});
