const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const applicationForm = document.querySelector(".apply-form");
const formNote = document.querySelector("#form-note");

if (applicationForm && formNote) {
  applicationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!applicationForm.reportValidity()) {
      formNote.className = "form-note is-error";
      formNote.textContent = "필수 항목을 확인해 주세요.";
      return;
    }

    const data = new FormData(applicationForm);
    const message = [
      "조피스의 아이디어테이블 신청",
      `이름: ${data.get("name")}`,
      `연락처: ${data.get("phone")}`,
      `하는 일 / 관심 분야: ${data.get("field")}`,
      `고민: ${data.get("concern")}`,
      `참가 경로: ${data.get("source") || "미입력"}`
    ].join("\n");

    const smsLink = document.createElement("a");
    smsLink.href = `sms:01038944938?body=${encodeURIComponent(message)}`;
    smsLink.textContent = "문자로 신청 내용 보내기";

    formNote.className = "form-note is-success";
    formNote.textContent = "입력 내용이 준비되었습니다. ";
    formNote.appendChild(smsLink);
  });
}
