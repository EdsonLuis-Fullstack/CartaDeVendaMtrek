document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll(".faq-toggle");
  
    toggles.forEach(toggle => {
      toggle.addEventListener("click", () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector(".icon");
        const faqItem = toggle.closest('.faq-item');
        const isOpen = !content.classList.contains("hidden");
  
        
        document.querySelectorAll(".faq-content").forEach(c => {
          c.classList.add("hidden");
          c.previousElementSibling.classList.remove("bg-[#FF8D00]", "text-white");
          c.previousElementSibling.classList.add("bg-white", "text-[#333]");
          c.previousElementSibling.querySelector(".icon").style.transform = 'rotate(0deg)';
          c.closest('.faq-item').classList.remove("border-white");
          c.closest('.faq-item').classList.add("border-[#FF8D00]");
        });
  
        if (!isOpen) {
          
          content.classList.remove("hidden");
          toggle.classList.add("bg-[#FF8D00]", "text-white", "rounded-[30px]");
          toggle.classList.remove("bg-white", "text-[#333]");
          icon.style.transform = "rotate(180deg)";
          
          
          faqItem.classList.remove("border-[#FF8D00]");
          faqItem.classList.add("border-white");
        }
      });
    });
  });