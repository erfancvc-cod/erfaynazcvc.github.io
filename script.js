// let noClickCount = 0; // شمارش کلیک‌های "نه"

// function handleYes() {
//     document.body.classList.add("halloween");
//     playHalloweenSound();

//     // نمایش پیام "آفرین دختر خوب"
//     const messageBox = document.querySelector('.question-box p');
//     messageBox.innerText = "آفرین دختر خوب";

//     // نمایش اعلان "هماهنگ می‌کنم باهات"
//     setTimeout(() => {
//         alert("هماهنگ می‌کنم باهات");
//     }, 1000); // نمایش اعلان پس از 1 ثانیه
// }

// function playHalloweenSound() {
//     document.getElementById("halloweenSound").play();
// }

// function handleNo() {
//     const messageBox = document.querySelector('.question-box p');
//     if (noClickCount < 2) {
//         noClickCount++;
//         messageBox.innerText = "جدی می‌پرسم، می‌خوای باهام بیای دیت؟";
//     } else if (noClickCount === 2) {
//         messageBox.innerText = "واقعاً می‌خوای نه بگی؟ بهتره خوب فکر کنی!";
//         noClickCount++;
//     } else {
//         alert("اشتباه بدی کردی!");
//         noClickCount = 0; // بازنشانی شمارش
//         messageBox.innerText = "می‌خوای باهام بیای دیت؟"; // بازگرداندن سوال اصلی
//     }
// }

let noClickCount = 0; // شمارش کلیک‌های "نه"

function handleYes() {
    // فعال کردن حالت هالووین
    document.body.classList.add("halloween");
    playHalloweenSound();

    // نمایش پیام "آفرین دختر خوب"
    const messageBox = document.querySelector('.question-box p');
    messageBox.innerText = "آفرین دختر خوب";

    // نمایش اعلان "هماهنگ می‌کنم باهات"
    setTimeout(() => {
        alert("هماهنگ می‌کنم باهات");
    }, 1000); // نمایش اعلان پس از 1 ثانیه

    // اضافه کردن عنصر شبح به بدنه
    const ghost = document.createElement('div');
    ghost.classList.add('ghost');
    document.body.appendChild(ghost);
}

function playHalloweenSound() {
    document.getElementById("halloweenSound").play();
}

function handleNo() {
    const messageBox = document.querySelector('.question-box p');
    if (noClickCount < 2) {
        noClickCount++;
        messageBox.innerText = "جدی می‌پرسم، می‌خوای باهام بیای دیت؟";
    } else if (noClickCount === 2) {
        messageBox.innerText = "واقعاً می‌خوای نه بگی؟ بهتره خوب فکر کنی!";
        noClickCount++;
    } else {
        alert("اشتباه بدی کردی!");
        noClickCount = 0; // بازنشانی شمارش
        messageBox.innerText = "می‌خوای باهام بیای دیت؟"; // بازگرداندن سوال اصلی
    }
}