'use strict';

// Show & hide personal information
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Hide Ribbon
const closeRibbon = function () {
  document.querySelector('.boxed').classList.add('hidden');
};
// Show Ribbon
const showRibbon = function () {
  document.querySelector('.boxed').classList.remove('hidden');
};

// Show personal information
const showInfo = function () {
  document.querySelector('.personal-info-content').classList.remove('hidden');
};
// Hide personal information
const closeInfo = function () {
  document.querySelector('.personal-info-content').classList.add('hidden');
};

// Show & hide information
document.querySelector('.email-submit').addEventListener('click', function () {
  const emailInput = document.querySelector('.email-input').value;
  console.log(emailInput);
  // Check email input
  const emailCheck = regex.test(emailInput);
  console.log(emailCheck);
  if (emailCheck) {
    showInfo();
    closeRibbon();
  } else {
    showRibbon();
    closeInfo();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key == 'Escape') closeRibbon();
});

// Show and Hide Job function
// 1. Hover Show & hide VIEWMORE button
const jobInfo = document.querySelectorAll('.job-info-container-border');
const showJobInfo = document.querySelectorAll('.show-jobinfo');
const hideJobInfo = document.querySelectorAll('.hide-jobinfo');

const showMore = function () {
  showJobInfo.classList.remove('hidden');
};
const hideMore = function () {
  showJobInfo.classList.add('hidden');
};

for (let i = 0; i < jobInfo.length; i++) {
  jobInfo[i].addEventListener('mouseover', function () {
    showJobInfo[i].classList.remove('hidden');
  });

  jobInfo[i].addEventListener('mouseout', function () {
    showJobInfo[i].classList.add('hidden');
  });
}

// 2. Show & hide content
const jobContentFirst = document.querySelectorAll('.content-first');
const jobContentLast = document.querySelectorAll('.content-last');
const hobby = document.querySelector('.hobby-icons');
const infoLevel = document.querySelectorAll('.info-level');

//
for (let i = 0; i < showJobInfo.length; i++) {
  if (i >= 0 && i < jobContentFirst.length) {
    showJobInfo[i].addEventListener('click', function () {
      jobContentFirst[i].classList.remove('hidden');
      jobContentLast[i].classList.remove('hidden');
      // Ẩn VIEWMORE button
      showJobInfo[i].classList.add('hidden');

      // Ẩn mouseover VIEWMORE khi click vào và hiện VIEWLESS
      jobInfo[i].addEventListener('mouseover', function () {
        showJobInfo[i].classList.add('hidden');
      });
      // hiện VIEWLESS
      hideJobInfo[i].classList.remove('hidden');
    });
  } else if (i === jobContentFirst.length) {
    showJobInfo[i].addEventListener('click', function () {
      hobby.classList.remove('hidden');
      // Ẩn VIEWMORE button
      showJobInfo[i].classList.add('hidden');

      // Ẩn mouseover VIEWMORE khi click vào và hiện VIEWLESS
      jobInfo[i].addEventListener('mouseover', function () {
        showJobInfo[i].classList.add('hidden');
      });
      // hiện VIEWLESS
      hideJobInfo[i].classList.remove('hidden');
    });
  } else {
    showJobInfo[i].addEventListener('click', function () {
      infoLevel[i - (jobContentFirst.length + 1)].classList.remove('hidden');
      // Ẩn VIEWMORE button
      showJobInfo[i].classList.add('hidden');

      // Ẩn mouseover VIEWMORE khi click vào và hiện VIEWLESS
      jobInfo[i].addEventListener('mouseover', function () {
        showJobInfo[i].classList.add('hidden');
      });
      // hiện VIEWLESS
      hideJobInfo[i].classList.remove('hidden');
    });
  }
}

for (let i = 0; i < hideJobInfo.length; i++) {
  if (i >= 0 && i < jobContentFirst.length) {
    hideJobInfo[i].addEventListener('click', function () {
      jobContentFirst[i].classList.add('hidden');
      jobContentLast[i].classList.add('hidden');

      // Ẩn VIEWLESS
      hideJobInfo[i].classList.add('hidden');
      // mouseover để hiện VIEWMORE
      jobInfo[i].addEventListener('mouseover', function () {
        showJobInfo[i].classList.remove('hidden');
      });
    });
  } else if (i === jobContentFirst.length) {
    hideJobInfo[jobContentFirst.length].addEventListener('click', function () {
      hobby.classList.add('hidden');

      // Ẩn VIEWLESS
      hideJobInfo[i].classList.add('hidden');
      // mouseover để hiện VIEWMORE
      jobInfo[i].addEventListener('mouseover', function () {
        showJobInfo[i].classList.remove('hidden');
      });
    });
  } else {
    hideJobInfo[i].addEventListener('click', function () {
      infoLevel[i - (jobContentFirst.length + 1)].classList.add('hidden');

      // Ẩn VIEWLESS
      hideJobInfo[i].classList.add('hidden');
      // mouseover để hiện VIEWMORE
      jobInfo[i].addEventListener('mouseover', function () {
        showJobInfo[i].classList.remove('hidden');
      });
    });
  }
}
