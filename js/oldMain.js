// // Menu Menu

// const menuLink = document.querySelector(".menu-link");
// const menuDropdown = document.querySelector(".menu-dropdown");
// const closeDropdownMenu = document.querySelector(".close-dropdown-menu");
// const gardenHoverSub = document.getElementById("garden-hover-sub");
// const closeSubMenuAll = document.querySelector(".close-dropdown-menu");

// // Toggle dropdown visibility on click
// menuLink.addEventListener("click", (e) => {
//     e.preventDefault(); // Prevent default link behavior
//     menuDropdown.style.display =
//         menuDropdown.style.display === "block" ? "none" : "block";
//     closeDropdownMenu.classList.toggle("none");
// });
// closeDropdownMenu.addEventListener("click", () => {
//     menuDropdown.style.display = "none";
//     closeDropdownMenu.classList.toggle("none");
//     gardenHoverSub.classList.add("none");
//     closeSubMenuAll.classList.remove("move");
//     closeSubMenuAll.classList.add("stable");


// })
// // Close dropdown menu when clicking outside
// document.addEventListener("click", (e) => {
//     if (!document.querySelector(".menu-container").contains(e.target)) {
//         menuDropdown.style.display = "none";
//         closeDropdownMenu.classList.add("none");
//     }
// });

// // Login Menu Dropdown
// const loginButton = document.querySelector(".login-button");
// const loginDropdown = document.querySelector(".login-dropdown");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     loginDropdown.classList.toggle("show");
//     console.log("Toggled dropdown");
// });
// document.addEventListener("click", (e) => {
//     // Check if the click is outside the login button and dropdown
//     if (!loginButton.contains(e.target) && !loginDropdown.contains(e.target)) {
//         loginDropdown.classList.add("show");
//         console.log("Closed dropdown");
//     }
// });
// // Small menu Toggle
// const smallMenuButton = document.querySelector(".small-menu-button");
// const smallMenuAll = document.querySelector(".small-menu-all");
// const news = document.querySelector(".newsletter-section");
// const proArea = document.querySelector(".pro-area");
// const brandFoot = document.querySelector(".brand-foot");
// const millions = document.querySelector(".millions");
// const footer = document.querySelector(".footer");
// const footerBottom = document.querySelector(".footer-bottom");
// const lastFoot = document.querySelector(".last-foot");
// const backCloseButton = document.getElementById("close-pop");
// smallMenuButton.addEventListener("click", (e) => {
//     smallMenuAll.classList.toggle("show");
//     news.classList.add("none");
//     proArea.classList.add("none");
//     brandFoot.classList.add("none");
//     millions.classList.add("none");
//     footer.classList.add("none");
//     footerBottom.classList.add("none");
//     lastFoot.classList.add("none");
// });

// const smallMenuClose = document.querySelector(".close-small-menu-all");
// smallMenuClose.addEventListener("click", (e) => {
//     smallMenuAll.classList.add("show");
//     news.classList.remove("none");
//     proArea.classList.remove("none");
//     brandFoot.classList.remove("none");
//     millions.classList.remove("none");
//     footer.classList.remove("none");
//     footerBottom.classList.remove("none");
//     lastFoot.classList.remove("none");
// });

// //  Footer Slider
// let logos = document.querySelector(".brand-logos");

// function slideLeft() {
//     logos.style.animation = "none";
//     logos.scrollBy({ left: -200, behavior: "smooth" });
// }

// function slideRight() {
//     logos.style.animation = "none";
//     logos.scrollBy({ left: 200, behavior: "smooth" });
// }

// function disableButton() {
//     const logos = document.querySelector(".brand-logos"); // Select the scrollable container
//     const leftButton = document.querySelector(".arrow.left"); // Left arrow button
//     const rightButton = document.querySelector(".arrow.right"); // Right arrow button

//     const maxScroll = logos.scrollWidth - logos.clientWidth; // Maximum scrollable width
//     const currentScroll = logos.scrollLeft; // Current scroll position

//     // Disable the right button if at the start (leftmost position)
//     if (currentScroll <= 0) {
//         rightButton.classList.add("disabled");
//         rightButton.style.color = "#BBB"; // Change to disabled style
//         rightButton.style.cursor = "not-allowed";
//     } else {
//         rightButton.classList.remove("disabled");
//         rightButton.style.color = "#000"; // Restore active style
//         rightButton.style.cursor = "pointer";
//     }

//     // Disable the left button if at the end (rightmost position)
//     if (currentScroll >= maxScroll) {
//         leftButton.classList.add("disabled");
//         leftButton.style.color = "#BBB"; // Change to disabled style
//         leftButton.style.cursor = "not-allowed";
//     } else {
//         leftButton.classList.remove("disabled");
//         leftButton.style.color = "#000"; // Restore active style
//         leftButton.style.cursor = "pointer";
//     }
// }

// // Call the function initially to set the correct state
// // disableButton();

// // Add an event listener to update the button states on scroll
// document
//     .querySelector(".brand-logos")
//     .addEventListener("scroll", disableButton());

// const customCategories = document.querySelector(".custom-categories");
// const customLeftArrow = document.querySelector(".custom-arrow.custom-left");
// const customRightArrow = document.querySelector(".custom-arrow.custom-right");

// let customScrollAmount = 0;

// function updateCustomArrows() {
//     const maxScroll = customCategories.scrollWidth - customCategories.clientWidth;

//     // Toggle left button
//     if (customScrollAmount <= 0) {
//         customRightArrow.classList.add("disabled");
//         customRightArrow.style.color = "#bbb";
//     } else {
//         customRightArrow.classList.remove("disabled");
//         customRightArrow.style.color = "#333";
//     }

//     // Toggle right button
//     if (customScrollAmount >= maxScroll) {
//         customLeftArrow.classList.add("disabled");
//         customLeftArrow.style.color = "#bbb";
//     } else {
//         customLeftArrow.classList.remove("disabled");
//         customLeftArrow.style.color = "#333";
//     }
// }

// function customSlideLeft() {
//     if (customScrollAmount > 0) {
//         customScrollAmount -= 250; // Adjust scroll step
//         customCategories.style.transform = `translateX(${customScrollAmount}px)`; // Move content to the right
//         updateCustomArrows();
//     }
// }

// function customSlideRight() {
//     const maxScroll = customCategories.scrollWidth - customCategories.clientWidth;
//     if (customScrollAmount < maxScroll) {
//         customScrollAmount += 250; // Adjust scroll step
//         customCategories.style.transform = `translateX(${customScrollAmount}px)`; // Move content to the left
//         updateCustomArrows();
//     }
// }

// // Initialize
// updateCustomArrows();

// // Saerch Focus Popup

// const searchInput = document.getElementById("search-input");
// const searchPopup = document.getElementById("search-popup");

// // Show popup when input is focused
// searchInput.addEventListener("focus", () => {
//     searchPopup.style.display = "block";
// });

// // Hide popup when input loses focus
// searchInput.addEventListener("blur", () => {
//     setTimeout(() => {
//         searchPopup.style.display = "none";
//     }, 150); // Small delay to allow clicks on the popup
// });
// function closePopup() {
//     searchPopup.style.display = "none";
//     console.log("Closed popup");
// }



// const items = [
//     // Garden
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Garden" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M17.793 10.817H6.243a.565.565 0 00-.452.204.597.597 0 00-.125.49l.362 2.304a.842.842 0 00.794.692h.14L7.625 21a1.16 1.16 0 001.1 1h6.49c.509-.01.95-.364 1.08-.868v-.02l.748-6.593h.096a.857.857 0 00.82-.701l.409-2.309a.577.577 0 00-.119-.493.548.548 0 00-.456-.199z"></path><path fill="#1D9E9F" d="M17.949 3.555a.363.363 0 00-.406-.411c-.871.103-2.512.448-3.654 1.595-1.127 1.132-1.502 2.763-1.625 3.655a.395.395 0 00.443.449c.881-.11 2.488-.462 3.611-1.59 1.145-1.15 1.513-2.817 1.63-3.698zM10.157 7.65a.378.378 0 00.446-.433c-.14-.858-.536-2.364-1.64-3.47-1.168-1.167-2.836-1.594-3.69-1.743a.296.296 0 00-.342.335c.122.83.5 2.432 1.66 3.591 1.112 1.114 2.681 1.554 3.566 1.72z"></path></svg>`, // Your SVG code here
//         text: "الحديقة",
//         id: "garden-sub-menu",
//         className: "sub-menu-garden",
//         subMenuList: [
//             {
//                 name: "أثاث الحديقة",
//                 subMenuData: [
//                     { name: "أثاث خارجي" },
//                     { name: "مظلات و شرفات" },
//                     { name: "المظلات" },
//                     { name: "الأراجيح ومقاعد الأرجوحة" },
//                     { name: "مراوح الضباب الخارجية" },
//                     { name: "مقاعد الحديقة والكراسي والحانات" },
//                     { name: "كراسي التشمس وكراسي الاستلقاء للتشمس" },
//                     { name: "أغطية أثاث الحدائق" },
//                     { name: "وسائد ومقاعد الحديقة" },
//                     { name: "التدفئة الخارجية" }
//                 ],
//             },
//             {
//                 name: "حمامات السباحة والجاكوزى",
//                 subMenuData: [
//                     { "name": "حمامات السباحة" },
//                     { "name": "أحواض المياه الساخنة" },
//                     { "name": "مضخات وفلاتر حمامات السباحة والجاكوزي" },
//                     { "name": "معدات تنظيف حمامات السباحة" },
//                     { "name": "معدات حمام السباحة" },
//                     { "name": "إكسسوارات حوض الاستحمام الساخن" },
//                     { "name": "صيانة حمامات السباحة والجاكوزي" },
//                     { "name": "تدفئة حمام السباحة وحوض الاستحمام الساخن" },
//                     { "name": "الاستحمام في الهواء الطلق" },
//                     { "name": "السلامة والأمان في حمام السباحة" },
//                     { "name": "أجزاء حمام السباحة" },
//                     { "name": "العاب حمام السباحة" },
//                     { "name": "اصلاح حمامات السباحة" }
//                 ],
//             },
//             {
//                 name: "العناية بالعشب",
//                 subMenuData: [
//                     { "name": "جزازات العشب" },
//                     { "name": "المقلمون" },
//                     { "name": "المخدشات" },
//                     { "name": "أدوات العناية بالعشب" },
//                     { "name": "زيوت التشحيم والزيوت" }
//                 ]
//             },
//             {
//                 name: "التشذيب والقطع والتقليم والتقطيع",
//                 subMenuData: [
//                     { "name": "مناشير كهربائية" },
//                     { "name": "مقصات التقليم" },
//                     { "name": "مقصات التحوط" },
//                     { "name": "آلات تقطيع الحدائق" },
//                     { "name": "أدوات التقليم" },
//                     { "name": "قاطعات جذوع الأشجار" },
//                     { "name": "أدوات قطع وتقسيم جذوع الأشجار" },
//                     { "name": "مناشير وشفرات جذوع الأشجار" }

//                 ],
//             },
//             {
//                 name: " تنظيف الحديقة ",
//                 subMenuData: [
//                     { "name": "مناشير كهربائية" },
//                     { "name": "مقصات التقليم" },
//                     { "name": "مقصات التحوط" },
//                     { "name": "آلات تقطيع الحدائق" },
//                     { "name": "أدوات التقليم" },
//                     { "name": "قاطعات جذوع الأشجار" },
//                     { "name": "أدوات قطع وتقسيم جذوع الأشجار" },
//                     { "name": "مناشير وشفرات جذوع الأشجار" },
//                 ],
//             },
//             {
//                 name: "قص العشب وإزالة الأعشاب الضارة",
//                 subMenuData: [
//                     { "name": "آلات قص الحشائش" },
//                     { "name": "حارقات الحشائش" },
//                     { "name": "أدوات إزالة الأعشاب الضارة" }
//                 ],
//             },
//             {
//                 name: "الري والخراطيم وخزانات المياه",
//                 subMenuData: [
//                     { "name": "مضخات المياه" },
//                     { "name": "خراطيم الحدائق والبكرات" },
//                     { "name": "أنظمة حصاد مياه الأمطار" },
//                     { "name": "أنظمة الري بالتنقيط" },
//                     { "name": "موصلات الخراطيم وصنابير الحدائق" },
//                     { "name": "الرشاشات وبنادق الرش والرماح" },
//                     { "name": "أنظمة الري تحت الأرض" },
//                     { "name": "علب الري والرشاشات" }
//                 ],
//             },
//             {
//                 name: "مباني الحدائق",
//                 subMenuData: [
//                     { "name": "حظائر الحدائق" },
//                     { "name": "تخزين الحديقة" },
//                     { "name": "القماش المشمع" },
//                     { "name": "ملاجئ السيارات" },
//                     { "name": "ملاجئ الشواء" },
//                     { "name": "صناديق القمامة وصناديق التخزين ذات العجلات" },
//                     { "name": "حبال الغسيل والتجفيف الخارجية" }
//                 ],
//             },
//             {
//                 name: "السياج والحجب",
//                 subMenuData: [
//                     { "name": "الفحص" },
//                     { "name": "سياج" },
//                     { "name": "سياج الأسلاك" },
//                     { "name": "بوابات الحدائق" },
//                     { "name": "بوابات كهربائية" }
//                 ],
//             },
//             {
//                 name: "الشواء والطبخ في الهواء الطلق",
//                 subMenuData: [
//                     { "name": "الشواء" },
//                     { "name": "شوايات بلانشا" },
//                     { "name": "أفران البيتزا وأفران الخبز وملحقاتها" },
//                     { "name": "إكسسوارات الشواء والشواية" },
//                     { "name": "وقود" },
//                     { "name": "مواقد التخييم وملحقاتها" },
//                     { "name": "مقالي البايلا" },
//                     { "name": "قوارير الغاز" }
//                 ],
//             },
//             {
//                 name: "العاب الحديقة",
//                 subMenuData: [
//                     { "name": "الترامبولين" },
//                     { "name": "أراجيح وإطارات تسلق" },
//                     { "name": "بيوت اللعب والقلاع المطاطية" },
//                     { "name": "الألعاب الخارجية والترفيهية" }
//                 ],
//             },
//             {
//                 name: "البيوت المحمية والتكاثر",
//                 subMenuData: [
//                     { "name": "البيوت البلاستيكية والصوب الزراعية" },
//                     { "name": "الزراعة الداخلية" },
//                     { "name": "التسميد" },
//                     { "name": "مقاعد الزرع" }
//                 ],
//             },
//             {
//                 name: " أدوات ومعدات الحدائق الأخرى ",
//                 subMenuData: [
//                     { "name": "العناية بالمحرك والمحرك" },
//                     { "name": "عربات اليد والعربات" },
//                     { "name": "صيانة آلات الحدائق" },
//                     { "name": "طارد الحيوانات والحشرات" },
//                     { "name": "أدوات وإكسسوارات متعددة للحديقة" },
//                     { "name": "مجموعة أدوات كهربائية للحديقة" },
//                     { "name": "عربات يدوية آلية وملحقاتها" },
//                     { "name": "صيانة أدوات الحديقة وملحقاتها" },
//                     { "name": "أدوات البستنة للأطفال" },
//                     { "name": "أدوات يدوية أخرى للحديقة" },
//                     { "name": "الجرارات المدمجة وملحقاتها" }
//                 ],
//             },
//             {
//                 name: " الأرضيات والحدائق والأفنية ",
//                 subMenuData: [
//                     { "name": "إنشاء الأرضيات والحدائق والممرات" },
//                     { "name": "تركيب الأرضيات" },
//                     { "name": "رصف الحدائق" },
//                     { "name": "الرمل والحصى والحصى الزخرفية" },
//                     { "name": "درابزينات وسور الحدائق" },
//                     { "name": "المسارات والحواف" },
//                     { "name": "العشب العشبي" },
//                     { "name": "أدوات التبليط" }
//                 ],
//             },
//             {
//                 name: " ديكورات الحدائق ",
//                 subMenuData: [
//                     { "name": "برك الحدائق" },
//                     { "name": "السجاد الخارجي" },
//                     { "name": "ميزات المياه في الحديقة" },
//                     { "name": "أقواس الحديقة" },
//                     { "name": "تماثيل الحديقة" },
//                     { "name": "زينة الحديقة" },
//                     { "name": "جسور الحدائق" },
//                     { "name": "دوارات الطقس" },
//                     { "name": "أجراس الحديقة والطرقات" },
//                     { "name": "مرايا الحديقة" },
//                     { "name": "الساعات الشمسية" },
//                     { "name": "آبار الحديقة" },
//                     { "name": "أجراس الرياح" }
//                 ],
//             },
//             {
//                 name: " العناية بالنباتات ",
//                 subMenuData: [
//                     { "name": "العناية بالنباتات" },
//                     { "name": "السماد والغطاء النباتي والصرف" },
//                     { "name": "وقاية النبات" },
//                     { "name": "سماد" }
//                 ],
//             },
//             {
//                 name: " الإضاءة الخارجية ",
//                 subMenuData: [
//                     { "name": "أضواء الأمن" },
//                     { "name": "الإضاءة الشمسية" },
//                     { "name": "أضواء كاشفة خارجية" },
//                     { "name": "مصابيح حائط خارجية" },
//                     { "name": "ديكورات اضاءة خارجية" },
//                     { "name": "أضواء الأعمدة والأعمدة المعلقة" },
//                     { "name": "مصابيح أرضية خارجية" },
//                     { "name": "مصابيح خارجية" },
//                     { "name": "أضواء الحاجز" },
//                     { "name": "مصابيح معلقة خارجية" },
//                     { "name": "أضواء خارجية" },
//                     { "name": "مصابيح غسالة الحائط" },
//                     { "name": "أضواء السقف الخارجية" },
//                     { "name": "مراوح سقف خارجية" },
//                     { "name": "إضاءة حمام السباحة وحوض الاستحمام الساخن والبركة" },
//                     { "name": "أضواء الشوارع" },
//                     { "name": "إكسسوارات الإضاءة الخارجية" }
//                 ],
//             },
//             {
//                 name: " أواني وأحواض زرع وأحواض مرتفعة ",
//                 subMenuData: [
//                     { "name": "الأواني" },
//                     { "name": "إكسسوارات الأواني والأحواض والأحواض المرتفعة" },
//                     { "name": "أواني النباتات الداخلية" },
//                     { "name": "أسرة مرتفعة" },
//                     { "name": "أكياس الزراعة" }
//                 ],
//             },
//             {
//                 name: " زراعة التربة ",
//                 subMenuData: [
//                     { "name": "المزارعون" },
//                     { "name": "أدوات الحفر والزراعة" },
//                     { "name": "المحاريث والملحقات" }
//                 ],
//             },
//             {
//                 name: " البذر والغرس والحصاد ",
//                 subMenuData: [
//                     { "name": "مثقاب حفر العمود" },
//                     { "name": "حصاد" },
//                     { "name": "مستلزمات التكاثر" },
//                     { "name": "أدوات الزراعة" }

//                 ],
//             },
//             {
//                 name: " النباتات الخارجية ",
//                 subMenuData: [
//                     { "name": "العشب العشبي" },
//                     { "name": "الشجيرات والأشجار" },
//                     { "name": "أشجار الفاكهة والشجيرات" },
//                     { "name": "النباتات المتسلقة" },
//                     { "name": "النباتات المعمرة" },
//                     { "name": "النباتات النباتية والأعشاب" },
//                     { "name": "النباتات المتوسطية" }

//                 ],
//             },
//             {
//                 name: " النباتات الداخلية ",
//                 subMenuData: [
//                     { "name": "نباتات الدفيئة" },
//                     { "name": "الزهور والنباتات الاصطناعية" },
//                     { "name": "نباتات عصارية" },
//                     { "name": "الجدران الخضراء" },
//                     { "name": "أشجار البونساي" },
//                     { "name": "الفن الزهري" }

//                 ],
//             },
//             {
//                 name: " البذور والبصيلات ",
//                 subMenuData: [
//                     { "name": "بذور" },
//                     { "name": "المصابيح" }

//                 ],
//             },
//             {
//                 name: " أشجار عيد الميلاد ",
//                 subMenuData: [
//                     { "name": "أشجار عيد الميلاد الاصطناعية" },
//                     { "name": "إكسسوارات شجرة عيد الميلاد" }

//                 ],
//             },
//             {
//                 name: " ملابس البستنة وملابس السلامة ",
//                 subMenuData: [
//                     { "name": "ملابس البستنة" },
//                     { "name": "محطات الطقس ومقاييس الحرارة ومقاييس الأمطار" },
//                     { "name": "ركائز ومقاعد الحديقة" },
//                     { "name": "الأحذية والإكسسوارات" }

//                 ],
//             },
//             {
//                 name: " إزالة الثلوج",
//                 subMenuData: [
//                     { "name": "مجارف الثلج" },
//                     { "name": "منفاخات الثلج الكهربائية" },
//                     { "name": "منفاخات الثلج التي تعمل بالبنزين" },
//                     { "name": "شفرات جرافة الثلوج" }

//                 ],
//             },
//         ],
//     },
//     // Tools
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Tools" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M19.184 20.472a.516.516 0 01-.305.675l-2.235.809a.53.53 0 01-.674-.311L11.367 8.643a.491.491 0 01.296-.626l1.819-.658c.25-.09.526.034.623.281l5.079 12.832z"></path><path fill="#1D9E9F" d="M13.27 5.106l.356.953a.481.481 0 01-.222.592l.003.008-.07.026-1.544.56-.72.26c-.368.134-.745.033-.84-.22l-.28-.753c-.092.018-.18.046-.27.078-.45.164-.79.495-.976.895a.678.678 0 01-.055.134.483.483 0 01-.313.362l-1.538.563a.495.495 0 01-.632-.292L5.03 5.23a.484.484 0 01.29-.627l1.544-.56a.491.491 0 01.473.082.69.69 0 01.13.067A1.75 1.75 0 008.8 4.25a1.68 1.68 0 00.253-.122l-.14-.376c-.083-.222.076-.49.362-.643.175-.07.348-.147.532-.203 3.976-1.204 6.483-.86 6.483-.86s1.364.026 1.953.935c-1.792-.041-5.347 1.215-4.973 2.125z"></path></svg>`, // Your SVG code here
//         text: "الأدوات",
//         id: "tools-sub-menu",
//         className: "sub-menu-tools",
//         subMenuList: [
//             {
//                 name: " أدوات كهربائية ",
//                 subMenuData: [
//                     { "name": "التدريبات" },
//                     { "name": "مناشير كهربائية" },
//                     { "name": "آلات الصنفرة والتلميع" },
//                     { "name": "مطاحن الزوايا ومطارق الجدران" },
//                     { "name": "مجموعة أدوات كهربائية" },
//                     { "name": "مفكات ومفاتيح التأثير" },
//                     { "name": "أدوات كهربائية للنجارة" },
//                     { "name": "مسدسات الدبابيس والمسامير والمسامير البرشامية" },
//                     { "name": "أدوات وإكسسوارات متعددة" },
//                     { "name": "المقشطات الكهربائية" },
//                     { "name": "أجهزة رش الطلاء وكابينات الطلاء" },
//                     { "name": "خلاطات مجداف ومجاديف خلط" },
//                     { "name": "النقاشات والأدوات الدقيقة والملحقات" },
//                     { "name": "مسدسات حرارية" },
//                     { "name": "مسدسات الغراء" },
//                     { "name": "راديوهات الموقع" },
//                     { "name": "أجهزة اللاسلكي" },
//                     { "name": "أدوات التوسعة" },
//                     { "name": "بطاريات الأدوات الكهربائية" }

//                 ]
//             },
//             {
//                 name: " أدوات يدوية ",
//                 subMenuData: [
//                     { "name": "قواطع البراغي" },
//                     { "name": "فكي قاطع البراغي البديل" },
//                     { "name": "مفكات البراغي" },
//                     { "name": "المطارق والمدقات" },
//                     { "name": "الدباسات اليدوية وملحقاتها" },
//                     { "name": "اللكمات والأزاميل" },
//                     { "name": "مفاتيح الربط والمقابس" },
//                     { "name": "أدوات التشطيب" },
//                     { "name": "المناشير اليدوية وشفرات المنشار" },
//                     { "name": "مجموعة أدوات" },
//                     { "name": "أدوات الخيط" },
//                     { "name": "القياس والترميز" },
//                     { "name": "مستويات الليزر والقياس والكشف" },
//                     { "name": "أدوات التطبيق" },
//                     { "name": "كماشة وقاطع" },
//                     { "name": "أدوات القطع" }

//                 ]
//             },
//             {
//                 name: " أدوات متخصصة ",
//                 subMenuData: [
//                     { "name": "أدوات الميكانيكا" },
//                     { "name": "اللحام بالقوس" },
//                     { "name": "اللحام والقطع بالغاز" },
//                     { "name": "لحام MIG" },
//                     { "name": "لحام TIG" },
//                     { "name": "لحام نقطي" },
//                     { "name": "أدوات التبليط" },
//                     { "name": "أدوات السباكة" },
//                     { "name": "خلاطات الأسمنت ومعدات البناء" },
//                     { "name": "أدوات كهربائية" },
//                     { "name": "أدوات الجبس" },
//                     { "name": "اللحام واللحام" },
//                     { "name": "أدوات يدوية للنجارة" },
//                     { "name": "أدوات التزجيج" },
//                     { "name": "أدوات التسقيف" },
//                     { "name": "أدوات متخصصة أخرى" },
//                     { "name": "الضغط" }

//                 ]
//             },
//             {
//                 name: "معدات الورشة والتخزين",
//                 subMenuData: [
//                     { "name": "أثاث وإكسسوارات الورشة" },
//                     { "name": "تخزين الورشة" },
//                     { "name": "استخراج الغبار" },
//                     { "name": "تخزين الأدوات" },
//                     { "name": "معدات مناولة المواد" },
//                     { "name": "المولدات واكسسواراتها" },
//                     { "name": "معدات التنظيف" },
//                     { "name": "حالات الأدوات" },
//                     { "name": "ملقطات وملقطات" },
//                     { "name": "بكرات الكابلات وأسلاك التمديد" }

//                 ]
//             },
//             {
//                 name: " آلات الورشة ",
//                 subMenuData: [
//                     { "name": "ضواغط وأدوات هوائية" },
//                     { "name": "مناشير الطاولة والمقعد" },
//                     { "name": "ملحقات المقشط وقياس سمك المقشط" },
//                     { "name": "مطاحن وحجر شحذ" },
//                     { "name": "مثاقب الأعمدة وملحقاتها" },
//                     { "name": "المثاقب المغناطيسية وملحقاتها" },
//                     { "name": "المخرطات وملحقاتها" },
//                     { "name": "قوالب المغزل والملحقات" },
//                     { "name": "الطابعات ثلاثية الأبعاد وملحقاتها" },
//                     { "name": "أدوات الحفر والملحقات" },
//                     { "name": "مناشير قطع المعادن الدوارة وقاطعات الأقراص" },
//                     { "name": "مجلدات الصفائح المعدنية" },
//                     { "name": "صنفرة الحزام والأقراص" },
//                     { "name": "صنفرة الحزام" },
//                     { "name": "محركات كهربائية لآلات الورشة" },
//                     { "name": "آلات النجارة المركبة" },
//                     { "name": "آلات الورشة الأخرى" }

//                 ]
//             },
//             {
//                 name: " معدات الرفع والوصول ",
//                 subMenuData: [
//                     { "name": "معدات الرفع" },
//                     { "name": "سلالم" },
//                     { "name": "أبراج السقالات ومنصات العمل" },
//                     { "name": "حوامل المحور" }

//                 ]
//             },
//             {
//                 name: " السلامة وملابس العمل ",
//                 subMenuData: [
//                     { "name": "أحذية السلامة" },
//                     { "name": "ملابس العمل" },
//                     { "name": "أقنعة الغبار وأجهزة التنفس" },
//                     { "name": "الخوذات الصلبة وحماية الأذن" },
//                     { "name": "واقيات الوجه وحماية العين" },
//                     { "name": "قفازات واقية" },
//                     { "name": "معدات الحماية من السقوط" },
//                     { "name": "معدات الاسعافات الاولية" },
//                     { "name": "مكبرات الصوت" }

//                 ]
//             },
//             {
//                 name: " ملحقات الأدوات الكهربائية ",
//                 subMenuData: [
//                     { "name": "ملحقات الحفر" },
//                     { "name": "ملحقات المطحنة الزاوية" },
//                     { "name": "إكسسوارات الصنفرة" },
//                     { "name": "ملحقات المنشار الدائري" },
//                     { "name": "ملحقات جهاز التوجيه" },
//                     { "name": "ملحقات الحفر SDS" },
//                     { "name": "ملحقات مسدسات المسامير والدبابيس" },
//                     { "name": "ملحقات المنشار الترددي" },
//                     { "name": "ملحقات الأدوات المتعددة" },
//                     { "name": "ملحقات البراغي" },
//                     { "name": "ملحقات المقشط الكهربائي" },
//                     { "name": "إكسسوارات المنشار" },
//                     { "name": "ملحقات الحفر الأساسية" },
//                     { "name": "ملحقات طاولة التوجيه" },
//                     { "name": "إكسسوارات مسدس الغراء" },
//                     { "name": "الفرش" },
//                     { "name": "ملحقات مفتاح التأثير" },
//                     { "name": "ملحقات القضم الكهربائي" },
//                     { "name": "ملحقات الهاتف المتينة" },
//                     { "name": "فرش الكربون" },
//                     { "name": "ملحقات ومستلزمات أخرى للأدوات الكهربائية" }

//                 ]
//             },
//             {
//                 name: " إكسسوارات السيارات ",
//                 subMenuData: [
//                     { "name": "قطع غيار السيارات" },
//                     { "name": "صيانة السيارة" },
//                     { "name": "الزيوت ومواد التشحيم والسوائل" },
//                     { "name": "أدوات الميكانيكا" },
//                     { "name": "المقطورات والملحقات" },
//                     { "name": "إكسسوارات خارجية للسيارة" },
//                     { "name": "ملحقات ورشة السيارات" },
//                     { "name": "أنظمة كهرباء السيارات" },
//                     { "name": "محطات شحن السيارات الكهربائية" },
//                     { "name": "السفر والنقل" },
//                     { "name": "الأعطال والإسعافات الأولية" },
//                     { "name": "إكسسوارات داخلية للسيارة" },
//                     { "name": "حماية الشتاء" }

//                 ]
//             },
//             {
//                 name: " العناية بالعشب ",
//                 subMenuData: [
//                     { "name": "جزازات العشب" },
//                     { "name": "المقلمون" },
//                     { "name": "المخدشات" },
//                     { "name": "أدوات العناية بالعشب" },
//                     { "name": "زيوت التشحيم والزيوت" }

//                 ]
//             },
//             {
//                 name: " تنظيف الحديقة ",
//                 subMenuData: [
//                     { "name": "غسالات الضغط" },
//                     { "name": "منفاخات الأوراق والمكانس الكهربائية للحديقة" },
//                     { "name": "معدات الحدائق" },
//                     { "name": "سلالم" }

//                 ]
//             },
//         ],
//     },
//     // Home and Living
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-HomeAndLiving" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M19.202 10.614v1.932c0 .739-.538 1.338-1.2 1.338H5.941c-.663 0-1.2-.599-1.2-1.338v-1.932c0-.744-.542-1.347-1.21-1.347H3.21C2.542 9.267 2 9.87 2 10.614v5.087c0 .744.542 1.348 1.21 1.348l.238 1.615c.033.221.205.384.406.384.202 0 .374-.162.407-.384l.239-1.615h14.944l.239 1.615c.032.221.204.384.406.384.201 0 .373-.162.406-.384l.239-1.615c.668 0 1.21-.604 1.21-1.348v-5.087c0-.744-.542-1.347-1.21-1.347h-.323c-.668 0-1.21.603-1.21 1.347z"></path><path fill="#1D9E9F" d="M18.172 5h-5.443a.536.536 0 00-.536.536v7.398c0 .296.24.536.536.536H18a.757.757 0 00.758-.758v-2.236c0-.513.232-.974.603-1.279.314-.257.476-.655.476-1.06v-1.47c0-.92-.746-1.667-1.666-1.667zM11.214 13.47c.296 0 .536-.24.536-.536V5.536A.536.536 0 0011.214 5H5.772c-.92 0-1.667.746-1.667 1.667v1.69c0 .326.179.61.437.81.393.303.643.778.643 1.31v2.235c0 .419.339.758.757.758"></path></svg>`,
//         text: "المنزل والمعيشة",
//         id: "home-living-sub-menu",
//         className: "sub-menu-living",
//         subMenuList: [
//             {
//                 name: " أثاث غرفة الطعام ",
//                 subMenuData: [
//                     { "name": "طاولات الطعام" },
//                     { "name": "الكراسي والمقاعد والمقاعد" },
//                     { "name": "طاولات طعام" },
//                     { "name": "طاولات مرتفعة وطاولات بار" },
//                     { "name": "وحدات البوفيه والخزائن الجانبية" },
//                     { "name": "خزائن المطبخ" },
//                     { "name": "اطقم غرفة الطعام" },
//                     { "name": "أسطح الطاولات" }

//                 ],
//             },
//             {
//                 name: " أثاث غرفة المعيشة ",
//                 subMenuData: [
//                     { "name": "الأرائك" },
//                     { "name": "كراسي استرخاء" },
//                     { "name": "كراسي بذراعين" },
//                     { "name": "طاولات القهوة" },
//                     { "name": "حوامل التلفزيون" },
//                     { "name": "مكتبات ورفوف وخزائن" },
//                     { "name": "طاولات جانبية" },
//                     { "name": "مقاعد" },
//                     { "name": "مجموعات غرفة المعيشة" },
//                     { "name": "وحدات تخزين السجلات" },
//                     { "name": "المقاعد والكراسي" }

//                 ],
//             },
//             {
//                 name: " الفراش ",
//                 subMenuData: [
//                     { "name": "المراتب" },
//                     { "name": "قواعد السرير" },
//                     { "name": "أطقم السرير والمراتب" },
//                     { "name": "أغطية المراتب" },
//                     { "name": "أطقم السرير" }

//                 ],
//             },
//             {
//                 name: " أثاث غرفة النوم ",
//                 subMenuData: [
//                     { "name": "أسرة" },
//                     { "name": "أنظمة تخزين خزانة الملابس" },
//                     { "name": "إكسسوارات خزانة الملابس" },
//                     { "name": "صناديق الأدراج" },
//                     { "name": "خزائن الملابس" },
//                     { "name": "طاولات الزينة" },
//                     { "name": "خزائن المجوهرات" },
//                     { "name": "مقاعد غرفة النوم" },
//                     { "name": "لوحات الرأس ووحدات السرير العلوية" },
//                     { "name": "طاولات بجانب السرير" },
//                     { "name": "شيفونييرز" },
//                     { "name": "مقاعد" },
//                     { "name": "مجموعات أثاث غرف النوم" }

//                 ],
//             },
//             {
//                 name: " أثاث المكاتب ",
//                 subMenuData: [
//                     { "name": "مكاتب" },
//                     { "name": "كراسي المكتب" },
//                     { "name": "مجموعات المكتب" },
//                     { "name": "منظمات المكتب" },
//                     { "name": "خزائن الملفات" },
//                     { "name": "المصابيح" }

//                 ],
//             },
//             {
//                 name: " ديكور ",
//                 subMenuData: [
//                     { "name": "السجاد ومفارش الأبواب" },
//                     { "name": "العناصر الزخرفية" },
//                     { "name": "ديكورات حائط" },
//                     { "name": "المرايا" },
//                     { "name": "تخزين صغير" },
//                     { "name": "الزهور والنباتات الاصطناعية" },
//                     { "name": "الملصقات والأفلام اللاصقة الذاتية" },
//                     { "name": "زينة عيد الميلاد" }

//                 ],
//             },
//             {
//                 name: " المفروشات الناعمة",
//                 subMenuData: [
//                     { "name": "مناشف الحمام" },
//                     { "name": "أطقم السرير" },
//                     { "name": "الوسائد وأغطية الوسائد" },
//                     { "name": "الستائر والاكسسوارات" },
//                     { "name": "البطانيات والأغطية" },
//                     { "name": "الستائر والاكسسوارات" },
//                     { "name": "الستائر" },
//                     { "name": "مفارش المائدة" },
//                     { "name": "مفروشات الاطفال" }

//                 ],
//             },
//             {
//                 name: " أثاث الممر ",
//                 subMenuData: [
//                     { "name": "تخزين الأحذية" },
//                     { "name": "طاولات الكونسول" },
//                     { "name": "تخزين الممرات" },
//                     { "name": "حاملات المظلات" },
//                     { "name": "مجموعات الممرات" }

//                 ],
//             },
//             {
//                 name: " أثاث الأطفال ",
//                 subMenuData: [
//                     { "name": "أسرة الأطفال" },
//                     { "name": "تخزين الاطفال" },
//                     { "name": "كراسي الاطفال" },
//                     { "name": "طاولات الاطفال" },
//                     { "name": "مكاتب الاطفال" },
//                     { "name": "طاولات زينة للاطفال" },
//                     { "name": "ديكورات الاطفال" },
//                     { "name": "غرف نوم اطفال" }

//                 ],
//             },
//             {
//                 name: " حضانة ",
//                 subMenuData: [
//                     { "name": "أسرة أطفال" },
//                     { "name": "وحدات تغيير حفاضات الأطفال" },
//                     { "name": "كراسي مرتفعة" },
//                     { "name": "حمامات الاطفال" },
//                     { "name": "أبراج التعلم" },
//                     { "name": "العاب اطفال" },
//                     { "name": "مجموعات أثاث الحضانة" }

//                 ],
//             },
//             {
//                 name: " أثاث الحمام ",
//                 subMenuData: [
//                     { "name": "وحدات حوض الغرور" },
//                     { "name": "وحدات الغرور" },
//                     { "name": "تخزين الحمام" },
//                     { "name": "وحدات الغرور في غرفة المعاطف" },
//                     { "name": "مجموعات أثاث الحمام" },
//                     { "name": "أسطح عمل الحمام" }

//                 ],
//             },
//             {
//                 name: " خزائن المطبخ ",
//                 subMenuData: [
//                     { "name": "وحدات المطبخ" },
//                     { "name": "ألواح وتشطيبات المطبخ" }

//                 ],
//             },
//         ],
//     },
//     // Plumbing
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Plumbing" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M14.479 16.703a.234.234 0 01.23.25c-.245 2.803-2.565 5-5.389 5-2.983 0-5.403-2.452-5.41-5.481v-4.9c0-.138.11-.25.248-.25h2.906c.137 0 .248.112.248.25v4.896c0 1.127.9 2.041 2.01 2.041.975 0 1.788-.705 1.97-1.64a.227.227 0 01.223-.191l2.964.024zM4.151 9.585h2.92a.242.242 0 00.241-.242V3.656a.242.242 0 00-.242-.242H4.151a.242.242 0 00-.242.242v5.687c0 .134.109.242.242.242z"></path><path fill="#1D9E9F" d="M15.051 15.3h-4.036a.527.527 0 00-.526.531.53.53 0 00.526.531h4.036a.507.507 0 00.37-.155.536.536 0 00.113-.579.522.522 0 00-.483-.327z"></path><path fill="#1E3C87" d="M14.486 14.928c.154 0 .273-.118.297-.27a2.018 2.018 0 011.984-1.714h2.823a.263.263 0 00.262-.263v-2.93a.262.262 0 00-.262-.263h-2.823c-2.862.003-5.208 2.26-5.4 5.124a.302.302 0 00.303.316h2.816z"></path><path fill="#1D9E9F" d="M7.998 10.829a.531.531 0 00-.373-.906H3.59a.512.512 0 00-.367.155.545.545 0 00-.153.379c0 .291.233.527.52.527h4.035c.14 0 .274-.056.373-.155zM3.59 2.015a.53.53 0 00-.523.53c0 .293.234.53.523.531h4.039a.527.527 0 00.523-.53.527.527 0 00-.523-.531h-4.04zM20.162 8.932v4.101a.532.532 0 00.26.463.515.515 0 00.525 0 .532.532 0 00.26-.463V8.932a.53.53 0 00-.523-.531.528.528 0 00-.522.53z"></path></svg>`, // Your SVG code here
//         text: "التدفئة والسباكة",
//         id: "plumbing-sub-menu",
//         className: "sub-menu-plumbing",
//         subMenuList: [
//             {
//                 name: " السخانات والمشعات الكهربائية ",
//                 subMenuData: [
//                     {
//                         "name": "الغلايات الكهربائية"
//                     },
//                     {
//                         "name": "السخانات والمشعات الكهربائية"
//                     },
//                     {
//                         "name": "ترموستات السخان الكهربائي والرادياتير"
//                     },
//                     {
//                         "name": "مناشف كهربائية ومزدوجة الوقود"
//                     },
//                     {
//                         "name": "مضخات الحرارة"
//                     },
//                     {
//                         "name": "سخانات المروحة"
//                     },
//                     {
//                         "name": "أنظمة التدفئة تحت الأرضية"
//                     },
//                     {
//                         "name": "التدفئة الخارجية"
//                     },
//                     {
//                         "name": "إكسسوارات مكيفات الهواء المنفصلة ومضخات الحرارة"
//                     },
//                     {
//                         "name": "إكسسوارات السخان الكهربائي والرادياتير"
//                     },
//                     {
//                         "name": "تدفئة السقف"
//                     },
//                     {
//                         "name": "تجهيزات التدفئة"
//                     },
//                     {
//                         "name": "ملحقات الترموستات والمبرمج"
//                     },
//                     {
//                         "name": "مراوح سقف داخلية"
//                     }

//                 ]
//             },
//             {
//                 name: " مشعات ",
//                 subMenuData: [
//                     {
//                         "name": "السخانات والمشعات الكهربائية"
//                     },
//                     {
//                         "name": "مشعات التدفئة المركزية"
//                     },
//                     {
//                         "name": "مشعات المناشف"
//                     },
//                     {
//                         "name": "ملحقات مبرد المنشفة"
//                     }

//                 ]
//             },
//             {
//                 name: " مكيفات الهواء والمراوح ",
//                 subMenuData: [
//                     {
//                         "name": "مكيفات الهواء"
//                     },
//                     {
//                         "name": "مكيف هواء محمول"
//                     },
//                     {
//                         "name": "المشجعين"
//                     }

//                 ]
//             },
//             {
//                 name: " المواقد والمدافئ ",
//                 subMenuData: [
//                     {
//                         "name": "مواقد"
//                     },
//                     {
//                         "name": "المواقد"
//                     },
//                     {
//                         "name": "أنظمة المداخن والمداخن"
//                     },
//                     {
//                         "name": "وقود"
//                     },
//                     {
//                         "name": "معدات المدفأة والموقد"
//                     },
//                     {
//                         "name": "تخزين الحطب"
//                     }

//                 ]
//             },
//             {
//                 name: " سخانات الفضاء ",
//                 subMenuData: [
//                     {
//                         "name": "سخانات المروحة"
//                     },
//                     {
//                         "name": "سخانات البارافين"
//                     },
//                     {
//                         "name": "سخانات صناعية"
//                     }

//                 ]
//             },
//             {
//                 name: " سخانات المياه ",
//                 subMenuData: [
//                     {
//                         "name": "سخانات المياه الكهربائية"
//                     },
//                     {
//                         "name": "سخانات المياه بالغاز"
//                     },
//                     {
//                         "name": "سخانات المياه بالطاقة الشمسية"
//                     },
//                     {
//                         "name": "تركيب سخان الماء"
//                     },
//                     {
//                         "name": "ملحقات سخان المياه"
//                     },
//                     {
//                         "name": "الغلايات"
//                     }

//                 ]
//             },
//             {
//                 name: " الغلايات ",
//                 subMenuData: [
//                     {
//                         "name": "الغلايات الكهربائية"
//                     },
//                     {
//                         "name": "غلايات تعمل بالغاز"
//                     },
//                     {
//                         "name": "غلايات النفط"
//                     },
//                     {
//                         "name": "معدات التدفئة المركزية"
//                     }

//                 ]
//             },
//             {
//                 name: " منظمات الحرارة ",
//                 subMenuData: [
//                     {
//                         "name": "ترموستات الغلايات"
//                     },
//                     {
//                         "name": "ترموستات السخان الكهربائي والرادياتير"
//                     },
//                     {
//                         "name": "خلاطات الحنفيات الحرارية"
//                     }

//                 ]
//             },
//             {
//                 name: " أجهزة إزالة الرطوبة وأجهزة الترطيب ",
//                 subMenuData: [
//                     {
//                         "name": "موزعات الزيوت العطرية"
//                     },
//                     {
//                         "name": "أجهزة إزالة الرطوبة"
//                     },
//                     {
//                         "name": "مرطبات الجو"
//                     }

//                 ]
//             },
//             {
//                 name: " أنظمة المياه ",
//                 subMenuData: [
//                     {
//                         "name": "الأنابيب والتجهيزات متعددة الطبقات"
//                     },
//                     {
//                         "name": "أنابيب وتجهيزات PEX"
//                     },
//                     {
//                         "name": "تجهيزات البولي إيثيلين"
//                     },
//                     {
//                         "name": "أنابيب النحاس والتجهيزات"
//                     },
//                     {
//                         "name": "الأنابيب والتجهيزات النحاسية"
//                     },
//                     {
//                         "name": "الفولاذ المجلفن"
//                     },
//                     {
//                         "name": "محولات الخيوط"
//                     },
//                     {
//                         "name": "التحكم في ضغط المياه"
//                     },
//                     {
//                         "name": "عدادات المياه"
//                     },
//                     {
//                         "name": "دعامات الأنابيب"
//                     },
//                     {
//                         "name": "منتجات العزل المائي"
//                     },
//                     {
//                         "name": "عزل الأنابيب"
//                     },
//                     {
//                         "name": "مشعبات السباكة"
//                     },
//                     {
//                         "name": "صمامات الإيقاف"
//                     },
//                     {
//                         "name": "ملاكمة الانابيب"
//                     },
//                     {
//                         "name": "خراطيم مرنة"
//                     },
//                     {
//                         "name": "الطاقة الشمسية"
//                     }

//                 ]
//             },
//             {
//                 name: " التخلص من مياه الصرف الصحي ",
//                 subMenuData: [
//                     {
//                         "name": "صرف مغسلة المطبخ"
//                     },
//                     {
//                         "name": "مصائد الغسالة"
//                     },
//                     {
//                         "name": "نفايات الاستحمام"
//                     },
//                     {
//                         "name": "نفايات الحمام"
//                     },
//                     {
//                         "name": "مصارف الحوض"
//                     },
//                     {
//                         "name": "نفايات البيديه"
//                     },
//                     {
//                         "name": "نفايات البول"
//                     },
//                     {
//                         "name": "موصلات المقلاة"
//                     },
//                     {
//                         "name": "بولي فينيل كلوريد"
//                     },
//                     {
//                         "name": "نظام تدفق المرحاض"
//                     }

//                 ]
//             },
//             {
//                 name: " صنابير الحمام والمطبخ ",
//                 subMenuData: [
//                     {
//                         "name": "صنابير الحوض"
//                     },
//                     {
//                         "name": "صنابير الحمام"
//                     },
//                     {
//                         "name": "صمامات الدش"
//                     },
//                     {
//                         "name": "صمامات الدش المخفية"
//                     },
//                     {
//                         "name": "حنفيات حوض غرفة المعاطف"
//                     },
//                     {
//                         "name": "صمامات عزل المرحاض"
//                     },
//                     {
//                         "name": "صنابير البيديه"
//                     },
//                     {
//                         "name": "ضوابط تدفق البول"
//                     },
//                     {
//                         "name": "صنابير الغسالة"
//                     },
//                     {
//                         "name": "قطع غيار الصنبور"
//                     },
//                     {
//                         "name": "صنابير تجارية"
//                     },
//                     {
//                         "name": "تثبيت الصنبور على الحائط"
//                     },
//                     {
//                         "name": "صنابير المطبخ"
//                     },
//                     {
//                         "name": "ملحقات الصنبور الأخرى"
//                     }

//                 ]
//             },
//             {
//                 name: " معالجة الهواء ",
//                 subMenuData: [
//                     {
//                         "name": "أنظمة MEV"
//                     },
//                     {
//                         "name": "مراوح شفط"
//                     },
//                     {
//                         "name": "مراوح شفط MEV"
//                     },
//                     {
//                         "name": "قنوات MEV"
//                     },
//                     {
//                         "name": "شبكات داخلية وخارجية"
//                     },
//                     {
//                         "name": "أجهزة تنقية الهواء"
//                     },
//                     {
//                         "name": "مجموعات ملحقات التهوية بالاستخراج الميكانيكي"
//                     },
//                     {
//                         "name": "ملحقات التهوية بالاستخراج الميكانيكي"
//                     }

//                 ]
//             },
//             {
//                 name: " معالجة المياه ",
//                 subMenuData: [
//                     {
//                         "name": "مُليّنات المياه"
//                     },
//                     {
//                         "name": "الفلاتر والمواد الاستهلاكية"
//                     },
//                     {
//                         "name": "أجهزة تنقية المياه"
//                     },
//                     {
//                         "name": "إمدادات تنقية المياه"
//                     },
//                     {
//                         "name": "لوازم فلتر المياه"
//                     }

//                 ]
//             },
//             {
//                 name: " تجهيزات الغاز ",
//                 subMenuData: [
//                     {
//                         "name": "قوارير الغاز"
//                     },
//                     {
//                         "name": "تجهيزات اسطوانات الغاز"
//                     },
//                     {
//                         "name": "منظمات الغاز"
//                     },
//                     {
//                         "name": "خراطيم الغاز"
//                     },
//                     {
//                         "name": "صمامات الغاز اللولبية"
//                     },
//                     {
//                         "name": "غسالات الغاز"
//                     }

//                 ]
//             },
//             {
//                 name: " مواد استهلاكية للسباكة ",
//                 subMenuData: [
//                     {
//                         "name": "أدوات السباكة"
//                     },
//                     {
//                         "name": "اللحام واللحام"
//                     },
//                     {
//                         "name": "مانعات التسرب ومركبات السباكة"
//                     }

//                 ]
//             },
//             {
//                 name: " معدات طاقة الرياح والطاقة الشمسية ",
//                 subMenuData: [
//                     {
//                         "name": "توزيع الطاقة الشمسية وطاقة الرياح"
//                     },
//                     {
//                         "name": "الألواح الشمسية"
//                     },
//                     {
//                         "name": "مجموعات الطاقة الشمسية خارج الشبكة"
//                     },
//                     {
//                         "name": "ملحقات الألواح الشمسية"
//                     },
//                     {
//                         "name": "مجموعات الطاقة الشمسية المرتبطة بالشبكة"
//                     },
//                     {
//                         "name": "طاقة الرياح"
//                     },
//                     {
//                         "name": "محولات الطاقة"
//                     },
//                     {
//                         "name": "أنظمة الرياح والطاقة الشمسية الهجينة"
//                     }

//                 ]
//             },
//             {
//                 name: " إكسسوارات الغسالة ",
//                 subMenuData: [
//                     {
//                         "name": "صنابير الغسالة"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Bathroom
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Bathroom" class="svg_tamagoshi s27DoW"><path fill="#1D9E9F" d="M4.751 12.647V4.574a2.574 2.574 0 015.149 0v.468H8.613v-.61a1.206 1.206 0 10-2.412.003l.03 8.212h-1.48z"></path><path fill="#1E3C87" d="M9.782 4.814H8.684c-.747 0-1.359.611-1.359 1.359v.787c0 .2.164.364.364.364h3.089c.2 0 .363-.164.363-.364v-.787c0-.748-.612-1.36-1.36-1.36zM20.249 12.993H3.75c-.413 0-.751-.35-.751-.778v-.14c0-.428.338-.778.751-.778H20.25c.413 0 .751.35.751.777v.141c0 .428-.338.778-.751.778z"></path><path fill="#1D9E9F" d="M8.584 19.094l-.118-.069a.76.76 0 00-1.034.278l-.836 1.447a.76.76 0 00.277 1.034l.119.069a.76.76 0 001.034-.278l.835-1.447a.76.76 0 00-.277-1.034zM17.479 21.746l.108-.083a.76.76 0 00.143-1.061l-1.015-1.328a.76.76 0 00-1.061-.142l-.109.083a.76.76 0 00-.142 1.061l1.015 1.328a.76.76 0 001.06.142z"></path><path fill="#1E3C87" d="M16.218 20.157H7.782C5.152 20.157 3 18 3 15.364v-1.228c0-.293.24-.534.533-.534h16.934c.294 0 .533.24.533.534v1.228c0 2.636-2.152 4.793-4.782 4.793z"></path></svg>`,
//         text: "الحمام",
//         id: "bathroom-sub-menu",
//         className: "sub-menu-bathroom",
//         subMenuList: [
//             {
//                 name: " الدشات والاكسسوارات ",
//                 subMenuData: [
//                     {
//                         "name": "حوض الاستحمام"
//                     },
//                     {
//                         "name": "أبواب وشاشات الاستحمام"
//                     },
//                     {
//                         "name": "أطقم الاستحمام"
//                     },
//                     {
//                         "name": "أحواض الاستحمام"
//                     },
//                     {
//                         "name": "نفايات الاستحمام"
//                     },
//                     {
//                         "name": "قضبان الدش ورؤوس الدش وتجهيزات الدش"
//                     },
//                     {
//                         "name": "إكسسوارات الدش"
//                     },
//                     {
//                         "name": "لوحات الحمام والدش"
//                     },
//                     {
//                         "name": "حوامل منزلقة الدش"
//                     },
//                     {
//                         "name": "صمامات الدش"
//                     },
//                     {
//                         "name": "صمامات الدش المخفية"
//                     }

//                 ]
//             },
//             {
//                 name: " أثاث الحمام ",
//                 subMenuData: [
//                     {
//                         "name": "وحدات حوض الغرور"
//                     },
//                     {
//                         "name": "وحدات الغرور"
//                     },
//                     {
//                         "name": "تخزين الحمام"
//                     },
//                     {
//                         "name": "وحدات الغرور في غرفة المعاطف"
//                     },
//                     {
//                         "name": "مجموعات أثاث الحمام"
//                     },
//                     {
//                         "name": "أسطح عمل الحمام"
//                     }

//                 ]
//             },
//             {
//                 name: " دورات المياه واكسسواراتها ",
//                 subMenuData: [
//                     {
//                         "name": "مراحيض"
//                     },
//                     {
//                         "name": "بيديه"
//                     },
//                     {
//                         "name": "مقاعد المراحيض"
//                     },
//                     {
//                         "name": "نفايات البول"
//                     },
//                     {
//                         "name": "موصلات المقلاة"
//                     },
//                     {
//                         "name": "طقم مرحاض وبيديه"
//                     },
//                     {
//                         "name": "نظام تدفق المرحاض"
//                     },
//                     {
//                         "name": "آلات التقطيع ومضخات النفايات"
//                     },
//                     {
//                         "name": "إكسسوارات المرحاض"
//                     },
//                     {
//                         "name": "غسالات وأختام المراحيض"
//                     },
//                     {
//                         "name": "تثبيتات المرحاض"
//                     },
//                     {
//                         "name": "صمامات عزل المرحاض"
//                     },
//                     {
//                         "name": "ضوابط تدفق البول"
//                     }

//                 ]
//             },
//             {
//                 name: " صنابير الحمام والمطبخ ",
//                 subMenuData: [
//                     {
//                         "name": "صنابير الحوض"
//                     },
//                     {
//                         "name": "صنابير الحمام"
//                     },
//                     {
//                         "name": "صمامات الدش"
//                     },
//                     {
//                         "name": "صمامات الدش المخفية"
//                     },
//                     {
//                         "name": "حنفيات حوض غرفة المعاطف"
//                     },
//                     {
//                         "name": "صمامات عزل المرحاض"
//                     },
//                     {
//                         "name": "صنابير البيديه"
//                     },
//                     {
//                         "name": "ضوابط تدفق البول"
//                     },
//                     {
//                         "name": "صنابير الغسالة"
//                     },
//                     {
//                         "name": "قطع غيار الصنبور"
//                     },
//                     {
//                         "name": "صنابير تجارية"
//                     },
//                     {
//                         "name": "تثبيت الصنبور على الحائط"
//                     },
//                     {
//                         "name": "صنابير المطبخ"
//                     },
//                     {
//                         "name": "ملحقات الصنبور الأخرى"
//                     }

//                 ]
//             },
//             {
//                 name: " الحمامات والاكسسوارات ",
//                 subMenuData: [
//                     {
//                         "name": "نفايات الحمام"
//                     },
//                     {
//                         "name": "الحمامات"
//                     },
//                     {
//                         "name": "حمامات الاطفال"
//                     },
//                     {
//                         "name": "حمامات الزاوية"
//                     },
//                     {
//                         "name": "حمامات مستقلة"
//                     },
//                     {
//                         "name": "المشي في الحمامات وحمامات الاستحمام"
//                     },
//                     {
//                         "name": "شاشات الحمام"
//                     },
//                     {
//                         "name": "صنابير الحمام"
//                     },
//                     {
//                         "name": "لوحات الحمام"
//                     },
//                     {
//                         "name": "إكسسوارات الحمام"
//                     },
//                     {
//                         "name": "حاملات المناشف وخطافات المناشف"
//                     }

//                 ]
//             },
//             {
//                 name: " أحواض ",
//                 subMenuData: [
//                     {
//                         "name": "أحواض سطح العمل"
//                     },
//                     {
//                         "name": "أحواض مدمجة"
//                     },
//                     {
//                         "name": "أحواض غرف المعاطف"
//                     },
//                     {
//                         "name": "أحواض الغسيل"
//                     },
//                     {
//                         "name": "مصارف الحوض"
//                     },
//                     {
//                         "name": "نفايات البيديه"
//                     },
//                     {
//                         "name": "الأحواض التجارية"
//                     },
//                     {
//                         "name": "صنابير الحوض"
//                     },
//                     {
//                         "name": "حنفيات حوض غرفة المعاطف"
//                     },
//                     {
//                         "name": "صنابير البيديه"
//                     }

//                 ]
//             },
//             {
//                 name: " مرايا الحمامات وتركيباتها ",
//                 subMenuData: [
//                     {
//                         "name": "مرايا الحمام"
//                     },
//                     {
//                         "name": "مرايا الحمام LED"
//                     },
//                     {
//                         "name": "المرايا المكبرة"
//                     },
//                     {
//                         "name": "إكسسوارات المرآة"
//                     }

//                 ]
//             },
//             {
//                 name: " إكسسورات الحمام ",
//                 subMenuData: [
//                     {
//                         "name": "إضاءة الحمام"
//                     },
//                     {
//                         "name": "منشر الملابس"
//                     },
//                     {
//                         "name": "موزعات الصابون وأطباق الصابون وحاملات الأكواب"
//                     },
//                     {
//                         "name": "سلال الغسيل"
//                     },
//                     {
//                         "name": "مساعدات الحمام"
//                     },
//                     {
//                         "name": "سجادات الحمام وألواح البط"
//                     },
//                     {
//                         "name": "قضبان الدش والستائر والحلقات"
//                     },
//                     {
//                         "name": "مجففات اليد"
//                     },
//                     {
//                         "name": "مراوح شفط"
//                     },
//                     {
//                         "name": "حاملات المناشف وخطافات المناشف"
//                     },
//                     {
//                         "name": "صناديق الحمام"
//                     },
//                     {
//                         "name": "موازين الحمام"
//                     }

//                 ]
//             },
//             {
//                 name: " الساونا ",
//                 subMenuData: [
//                     {
//                         "name": "ساونا الأشعة تحت الحمراء"
//                     },
//                     {
//                         "name": "إكسسوارات الساونا"
//                     },
//                     {
//                         "name": "الساونا التقليدية"
//                     },
//                     {
//                         "name": "سخانات الساونا"
//                     },
//                     {
//                         "name": "زيوت وروائح الساونا"
//                     }

//                 ]
//             },
//             {
//                 name: " البلاط ",
//                 subMenuData: [
//                     {
//                         "name": "بلاط الأرضيات الداخلية"
//                     },
//                     {
//                         "name": "بلاط الحائط"
//                     },
//                     {
//                         "name": "بلاط القاعدة"
//                     },
//                     {
//                         "name": "بلاط جدران من الفسيفساء"
//                     },
//                     {
//                         "name": "الأرضيات الصناعية"
//                     },
//                     {
//                         "name": "إكسسوارات بلاط الأرضيات"
//                     },
//                     {
//                         "name": "أسمنت"
//                     },
//                     {
//                         "name": "إكسسوارات بلاط الجدران"
//                     },
//                     {
//                         "name": "أدوات التبليط"
//                     },
//                     {
//                         "name": "تركيب البلاط"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Lightining
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Lighting" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M16.896 19.322h-8.92c-.818 0-1.482.663-1.482 1.482v1.147h11.884v-1.147c0-.819-.664-1.482-1.482-1.482z"></path><path fill="#1D9E9F" d="M11.436 19.322h2v-8.334h-2v8.334zM15.372 14.47h.559v-3.482h-.56v3.482z"></path><path fill="#1E3C87" d="M16.596 14.935a.945.945 0 11-1.89 0 .945.945 0 011.89 0zM7.004 11.966h10.865c.67 0 1.15-.564.963-1.127l-2.743-8.207C15.963 2.257 15.57 2 15.126 2H9.82c-.443 0-.833.254-.961.626l-2.816 8.207c-.194.564.289 1.133.961 1.133z"></path></svg>`,
//         text: " الإضاءة ",
//         id: "lighting-sub-menu",
//         className: "sub-menu-lighting",
//         subMenuList: [
//             {
//                 name: " الإضاءة الداخلية ",
//                 subMenuData: [
//                     {
//                         "name": "أضواء كاشفة داخلية"
//                     },
//                     {
//                         "name": "المصابيح المعلقة"
//                     },
//                     {
//                         "name": "أضواء السقف الداخلية"
//                     },
//                     {
//                         "name": "أضواء الحائط"
//                     },
//                     {
//                         "name": "أضواء لوحة LED"
//                     },
//                     {
//                         "name": "الإضاءة التجارية"
//                     },
//                     {
//                         "name": "مصابيح الأرضية"
//                     },
//                     {
//                         "name": "مراوح سقف داخلية"
//                     },
//                     {
//                         "name": "أضواء شريطية LED"
//                     },
//                     {
//                         "name": "اصنع إضاءتك الخاصة"
//                     },
//                     {
//                         "name": "شريط الضوء"
//                     },
//                     {
//                         "name": "أضواء تعمل بالبطارية"
//                     },
//                     {
//                         "name": "أضواء كاشفة"
//                     },
//                     {
//                         "name": "المصابيح"
//                     },
//                     {
//                         "name": "إضاءة الحمام"
//                     },
//                     {
//                         "name": "أضواء ليلية للأطفال"
//                     },
//                     {
//                         "name": "إضاءة المسار والأسلاك"
//                     }

//                 ]
//             },
//             {
//                 name: " الإضاءة الخارجية ",
//                 subMenuData: [
//                     {
//                         "name": "أضواء الأمن"
//                     },
//                     {
//                         "name": "الإضاءة الشمسية"
//                     },
//                     {
//                         "name": "أضواء كاشفة خارجية"
//                     },
//                     {
//                         "name": "مصابيح الحائط الخارجية"
//                     },
//                     {
//                         "name": "ديكورات اضاءة خارجية"
//                     },
//                     {
//                         "name": "أضواء الأعمدة والأعمدة المعلقة"
//                     },
//                     {
//                         "name": "مصابيح أرضية خارجية"
//                     },
//                     {
//                         "name": "مصابيح خارجية"
//                     },
//                     {
//                         "name": "أضواء الحاجز"
//                     },
//                     {
//                         "name": "مصابيح معلقة خارجية"
//                     },
//                     {
//                         "name": "أضواء خارجية"
//                     },
//                     {
//                         "name": "مصابيح غسالة الحائط"
//                     },
//                     {
//                         "name": "أضواء السقف الخارجية"
//                     },
//                     {
//                         "name": "مراوح سقف خارجية"
//                     },
//                     {
//                         "name": "إضاءة حمام السباحة وحوض الاستحمام الساخن والبركة"
//                     },
//                     {
//                         "name": "أضواء الشوارع"
//                     },
//                     {
//                         "name": "إكسسوارات الإضاءة الخارجية"
//                     }

//                 ]
//             },
//             {
//                 name: " المصابيح الكهربائية ",
//                 subMenuData: [
//                     {
//                         "name": "لمبات LED"
//                     },
//                     {
//                         "name": "حاملات المصابيح"
//                     },
//                     {
//                         "name": "المصابيح الكهربائية المتخصصة"
//                     },
//                     {
//                         "name": "المصابيح الذكية"
//                     },
//                     {
//                         "name": "أضواء الأنابيب"
//                     },
//                     {
//                         "name": "المصابيح الخيطية"
//                     },
//                     {
//                         "name": "المصابيح الموفرة للطاقة"
//                     },
//                     {
//                         "name": "لمبات الهالوجين"
//                     },
//                     {
//                         "name": "محولات حامل المصباح"
//                     },
//                     {
//                         "name": "وحدات LED"
//                     },
//                     {
//                         "name": "المصابيح الخيطية الزخرفية"
//                     }

//                 ]
//             },
//             {
//                 name: " الإضاءة المحمولة ",
//                 subMenuData: [
//                     {
//                         "name": "كشافات قابلة لإعادة الشحن"
//                     },
//                     {
//                         "name": "أضواء العمل"
//                     },
//                     {
//                         "name": "شعلات قابلة لإعادة الشحن"
//                     },
//                     {
//                         "name": "مصابيح الرأس"
//                     },
//                     {
//                         "name": "فوانيس التخييم"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Elecrical And Smart Home
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Electricity" class="svg_tamagoshi s27DoW"><path fill="#1D9E9F" d="M8.143 7.663h-.248a.687.687 0 01-.685-.686V2.725c0-.376.308-.685.685-.685h.248c.377 0 .685.309.685.685v4.252a.687.687 0 01-.685.686zM15.585 7.622h-.247a.687.687 0 01-.685-.685V2.685c0-.377.308-.685.685-.685h.247c.377 0 .685.308.685.685v4.252a.687.687 0 01-.685.685z"></path><path fill="#1E3C87" d="M8.76 19a.64.64 0 01-.654-.64v-1.689s.107-.891-1.426-1.818-2.175-2.068-2.175-2.068-.57-2.032-.499-4.67c0 0 .107-1.034 1.284-1.07 1.176-.035 13.012 0 13.012 0s1.142-.06 1.179 1.09v3.102s-.182 2.923-2.733 3.672c0 0-1.534.482-1.499 2.73l.009.593a.64.64 0 01-.64.65h-.396a.31.31 0 00-.31.31v2.29c0 .281-.228.509-.509.509h-3.145a.508.508 0 01-.508-.503l-.026-2.195a.31.31 0 00-.317-.307l-.646.015z"></path><path fill="#1D9E9F" d="M13.472 11.432l-1.437.227.97-1.699c.061-.103-.021-.234-.145-.227l-1.905.165a.158.158 0 00-.131.104l-.984 3.074a.15.15 0 00.172.193l.998-.186-.86 2.992c-.048.166.172.269.268.131l3.199-4.533c.082-.11-.014-.261-.145-.24z"></path></svg>`,
//         text: " الكهرباء ولمنزل الذكى ",
//         id: "electricity-sub-menu",
//         className: "sub-menu-elec-smart-home",
//         subMenuList: [
//             {
//                 name: " أنظمة المنزل وأنظمة الأمن ",
//                 subMenuData: [
//                     {
//                         "name": "بوابات كهربائية"
//                     },
//                     {
//                         "name": "أنظمة أتمتة المنزل"
//                     },
//                     {
//                         "name": "كاميرات المراقبة"
//                     },
//                     {
//                         "name": "السلامة والأمان"
//                     },
//                     {
//                         "name": "أجراس الأبواب وأجهزة الاتصال الداخلي"
//                     },
//                     {
//                         "name": "السلامة من الحرائق"
//                     },
//                     {
//                         "name": "أنظمة التحكم في الوصول"
//                     },
//                     {
//                         "name": "أنظمة المنزل الذكي"
//                     },
//                     {
//                         "name": "فتحات الأبواب الآلية"
//                     },
//                     {
//                         "name": "أنظمة الفراغ المركزية"
//                     },
//                     {
//                         "name": "أبواب الجراج الكهربائية"
//                     },
//                     {
//                         "name": "مصاريع كهربائية"
//                     },
//                     {
//                         "name": "فتحات النوافذ الأوتوماتيكية"
//                     },
//                     {
//                         "name": "أضواء التحذير"
//                     },
//                     {
//                         "name": "التلفزيون والفضائيات"
//                     },
//                     {
//                         "name": "المكونات الالكترونية"
//                     },
//                     {
//                         "name": "إكسسوارات أتمتة المنزل"
//                     }

//                 ]
//             },
//             {
//                 name: " حماية الدائرة ",
//                 subMenuData: [
//                     {
//                         "name": "وحدات المستهلك المحلية"
//                     },
//                     {
//                         "name": "قواطع دوائر كهربائية صغيرة"
//                     },
//                     {
//                         "name": "أجهزة الفصل الحراري"
//                     },
//                     {
//                         "name": "ملحقات وحدة المستهلك"
//                     },
//                     {
//                         "name": "صندوق المصاهر"
//                     },
//                     {
//                         "name": "توصيل الكابلات"
//                     },
//                     {
//                         "name": "وحدة المستهلك"
//                     },
//                     {
//                         "name": "الصمامات"
//                     },
//                     {
//                         "name": "مكونات وحدة المستهلك الأخرى"
//                     }

//                 ]
//             },
//             {
//                 name: " المفاتيح والمقابس ",
//                 subMenuData: [
//                     {
//                         "name": "المقابس"
//                     },
//                     {
//                         "name": "المفاتيح"
//                     },
//                     {
//                         "name": "مفاتيح معيارية"
//                     },
//                     {
//                         "name": "لوحات الغطاء"
//                     },
//                     {
//                         "name": "مكونات المقبس"
//                     },
//                     {
//                         "name": "أسلاك التمديد وأجهزة حماية التيار الزائد"
//                     },
//                     {
//                         "name": "صناديق ذات ظهر مسطح"
//                     },
//                     {
//                         "name": "إكسسوارات المفاتيح والمقابس"
//                     },
//                     {
//                         "name": "مجموعات المقابس والمفاتيح"
//                     },
//                     {
//                         "name": "المقابس الكهربائية"
//                     },
//                     {
//                         "name": "مقابس التحكم عن بعد والمؤقت"
//                     },
//                     {
//                         "name": "مفاتيح ومقابس خارجية معيارية"
//                     },
//                     {
//                         "name": "المفاتيح والمقابس الخارجية"
//                     },
//                     {
//                         "name": "محولات ومقابس السفر"
//                     }

//                 ]
//             },
//             {
//                 name: " مزود الطاقة ",
//                 subMenuData: [
//                     {
//                         "name": "بطارية وإكسسوارات الأدوات الثقيلة والأدوات الكهربائية"
//                     },
//                     {
//                         "name": "البطاريات المنزلية"
//                     },
//                     {
//                         "name": "محولات الطاقة"
//                     },
//                     {
//                         "name": "وحدات إمداد الطاقة"
//                     },
//                     {
//                         "name": "محولات الإضاءة ومشغلات LED"
//                     },
//                     {
//                         "name": "مصادر الطاقة غير المنقطعة"
//                     }

//                 ]
//             },
//             {
//                 name: " الكابلات وإدارة الكابلات ",
//                 subMenuData: [
//                     {
//                         "name": "بكرات الكابلات وأسلاك التمديد"
//                     },
//                     {
//                         "name": "الأسلاك والكابلات الكهربائية"
//                     },
//                     {
//                         "name": "ملحقات الأسلاك"
//                     },
//                     {
//                         "name": "روابط الكابلات والمشابك"
//                     },
//                     {
//                         "name": "الأنابيب والتجهيزات المرنة"
//                     },
//                     {
//                         "name": "كابلات الجهد المنخفض"
//                     },
//                     {
//                         "name": "الأنابيب والتجهيزات البلاستيكية"
//                     },
//                     {
//                         "name": "حماية الكابلات"
//                     },
//                     {
//                         "name": "التأريض"
//                     },
//                     {
//                         "name": "ملحقات الكابلات الأخرى"
//                     }

//                 ]
//             },
//             {
//                 name: " معدات طاقة الرياح والطاقة الشمسية ",
//                 subMenuData: [
//                     {
//                         "name": "توزيع الطاقة الشمسية وطاقة الرياح"
//                     },
//                     {
//                         "name": "الألواح الشمسية"
//                     },
//                     {
//                         "name": "مجموعات الطاقة الشمسية خارج الشبكة"
//                     },
//                     {
//                         "name": "ملحقات الألواح الشمسية"
//                     },
//                     {
//                         "name": "مجموعات الطاقة الشمسية المرتبطة بالشبكة"
//                     },
//                     {
//                         "name": "طاقة الرياح"
//                     },
//                     {
//                         "name": "محولات الطاقة"
//                     },
//                     {
//                         "name": "أنظمة الرياح والطاقة الشمسية الهجينة"
//                     }

//                 ]
//             },
//             {
//                 name: " عدادات المرافق ",
//                 subMenuData: [
//                     {
//                         "name": "أجهزة مراقبة الطاقة"
//                     },
//                     {
//                         "name": "عداد الكهرباء"
//                     },
//                     {
//                         "name": "عدادات فرعية كهربائية"
//                     },
//                     {
//                         "name": "تركيب العداد"
//                     },
//                     {
//                         "name": "عدادات الكهرباء"
//                     }

//                 ]
//             },
//             {
//                 name: " وحدات استهلاكية ذات تحميل مقسم ",
//                 subMenuData: [
//                     {
//                         "name": "وحدات استهلاكية مؤقتة"
//                     },
//                     {
//                         "name": "وحدة المستهلك الصمامات"
//                     }

//                 ]
//             },
//             {
//                 name: " المصابيح الكهربائية ",
//                 subMenuData: [
//                     {
//                         "name": "لمبات LED"
//                     },
//                     {
//                         "name": "حاملات المصابيح"
//                     },
//                     {
//                         "name": "المصابيح الكهربائية المتخصصة"
//                     },
//                     {
//                         "name": "المصابيح الذكية"
//                     },
//                     {
//                         "name": "أضواء الأنابيب"
//                     },
//                     {
//                         "name": "المصابيح الخيطية"
//                     },
//                     {
//                         "name": "المصابيح الموفرة للطاقة"
//                     },
//                     {
//                         "name": "لمبات الهالوجين"
//                     },
//                     {
//                         "name": "محولات حامل المصباح"
//                     },
//                     {
//                         "name": "وحدات LED"
//                     },
//                     {
//                         "name": "المصابيح الخيطية الزخرفية"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Hardware
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Hardware" class="svg_tamagoshi s27DoW"><path fill="#1D9E9F" d="M3.947 10.751l-.942-1.185a.745.745 0 01.117-1.058l8.529-6.815a.745.745 0 011.058.116l.942 1.186a.745.745 0 01-.117 1.058l-8.529 6.815a.747.747 0 01-1.058-.117z"></path><path fill="#1D3E83" d="M15.683 19.608l4.698 2.773c.413.243.9-.159.73-.614l-1.884-5.217a2.661 2.661 0 00-.412-.762l-.927-1.207-3.084 4.17a.36.36 0 01-.016.02l.09.118c.223.296.487.54.805.72zm-1.409-1.504l3.1-4.192-.842-1.098-3.101 4.194.843 1.096zm.925-7.026l.818 1.065-3.1 4.197-.821-1.065 3.103-4.197zm-3.617 3.529l3.103-4.198-.857-1.116-3.104 4.2.857 1.114zm.917-7.045l.82 1.067-3.11 4.196-.816-1.061 3.106-4.202zm-3.62 3.534l3.107-4.203-.864-1.126L7.196 8.91l1.683 2.186z"></path></svg>`,
//         text: " الأجهزة ",
//         id: "hardware-sub-menu",
//         className: "sub-menu-hardware",
//         subMenuList: [
//             {
//                 name: " معدات الأبواب والنوافذ ",
//                 subMenuData: [
//                     {
//                         "name": "أدوات النجارة"
//                     },
//                     {
//                         "name": "مقابض الأبواب والنوافذ"
//                     },
//                     {
//                         "name": "عزل الباب"
//                     },
//                     {
//                         "name": "أثاث الباب"
//                     },
//                     {
//                         "name": "مفصلات محورية للأبواب الزجاجية"
//                     },
//                     {
//                         "name": "أرقام المنزل"
//                     },
//                     {
//                         "name": "مغاليق الأبواب وإكسسواراتها"
//                     },
//                     {
//                         "name": "مسارات الأبواب المنزلقة والملحقات"
//                     },
//                     {
//                         "name": "حواجز الأبواب والأوتاد"
//                     },
//                     {
//                         "name": "إكسسوارات النوافذ والستائر"
//                     },
//                     {
//                         "name": "مفصلات الخزانة وتجهيزاتها"
//                     },
//                     {
//                         "name": "مسامير واكسسوارات كريموني"
//                     }

//                 ]
//             },
//             {
//                 name: " أدوات الأثاث ",
//                 subMenuData: [
//                     {
//                         "name": "مقابض ومقابض الخزانة"
//                     },
//                     {
//                         "name": "أرجل سطح العمل وعجلات الخزانة"
//                     },
//                     {
//                         "name": "مفصلات الخزانة وتجهيزاتها"
//                     },
//                     {
//                         "name": "حوامل التلفزيون"
//                     },
//                     {
//                         "name": "حماية الأرضية"
//                     },
//                     {
//                         "name": "أرجل وعجلات الأثاث"
//                     },
//                     {
//                         "name": "المزالج والمزالج والأقفال"
//                     },
//                     {
//                         "name": "الأدراج والملحقات"
//                     },
//                     {
//                         "name": "نجارة الخشب"
//                     }

//                 ]
//             },
//             {
//                 name: " قطع غيار ",
//                 subMenuData: [
//                     {
//                         "name": "قطع غيار الأجهزة المنزلية"
//                     },
//                     {
//                         "name": "المحامل"
//                     },
//                     {
//                         "name": "قطع غيار الأجهزة الصغيرة للمطبخ"
//                     }

//                 ]
//             },
//             {
//                 name: " معدات خارجية ",
//                 subMenuData: [
//                     {
//                         "name": "صناديق البريد وملحقاتها"
//                     },
//                     {
//                         "name": "المرايا المحدبة"
//                     },
//                     {
//                         "name": "مقابض التثبيت"
//                     },
//                     {
//                         "name": "معدات البوابة"
//                     },
//                     {
//                         "name": "مفصلات البوابة"
//                     },
//                     {
//                         "name": "مسامير واكسسوارات اسبانيولت"
//                     },
//                     {
//                         "name": "أعمال الحديد المطاوع"
//                     },
//                     {
//                         "name": "الأشرطة والملفات الشخصية"
//                     }

//                 ]
//             },
//             {
//                 name: " الأمن والأقفال ",
//                 subMenuData: [
//                     {
//                         "name": "أنظمة التحكم في الوصول"
//                     },
//                     {
//                         "name": "خزائن المفاتيح والخزائن"
//                     },
//                     {
//                         "name": "أقفال"
//                     },
//                     {
//                         "name": "لافتات السلامة"
//                     },
//                     {
//                         "name": "مسامير ومزاليج الأبواب"
//                     },
//                     {
//                         "name": "أجهزة الذعر"
//                     },
//                     {
//                         "name": "سلاسل الأبواب والمشاهد"
//                     },
//                     {
//                         "name": "الخزائن وصناديق النقود"
//                     },
//                     {
//                         "name": "إكسسوارات القفل"
//                     }

//                 ]
//             },
//             {
//                 name: " البراغي والمسامير وأدوات التثبيت ",
//                 subMenuData: [
//                     {
//                         "name": "براغي"
//                     },
//                     {
//                         "name": "خواتم"
//                     },
//                     {
//                         "name": "المغناطيس الدائم"
//                     },
//                     {
//                         "name": "أدوات التثبيت والربط الأخرى"
//                     },
//                     {
//                         "name": "المسامير"
//                     },
//                     {
//                         "name": "التثبيتات والمقابس"
//                     },
//                     {
//                         "name": "المكسرات"
//                     },
//                     {
//                         "name": "الغسالات"
//                     },
//                     {
//                         "name": "المسامير والقضبان الملولبة"
//                     },
//                     {
//                         "name": "المثبتات الكيميائية"
//                     },
//                     {
//                         "name": "أدخل المكسرات"
//                     },
//                     {
//                         "name": "البراغي"
//                     },
//                     {
//                         "name": "مسامير التأخر"
//                     },
//                     {
//                         "name": "التثبيتات الزخرفية"
//                     },
//                     {
//                         "name": "الخطافات والعيون"
//                     },
//                     {
//                         "name": "دبابيس هندسية"
//                     },
//                     {
//                         "name": "الأظافر"
//                     }

//                 ]
//             },
//             {
//                 name: " أجزاء السلالم وأنظمة التخزين ",
//                 subMenuData: [
//                     {
//                         "name": "تجهيزات خزانة الملابس والخزانة"
//                     },
//                     {
//                         "name": "أجزاء السلم"
//                     },
//                     {
//                         "name": "حوامل التلفزيون"
//                     },
//                     {
//                         "name": "مسارات الأبواب المنزلقة والملحقات"
//                     },
//                     {
//                         "name": "أنظمة الرفوف"
//                     },
//                     {
//                         "name": "مرآب ومخزن القبو"
//                     }

//                 ]
//             },
//             {
//                 name: " التنظيف والعلاجات ",
//                 subMenuData: [
//                     {
//                         "name": "المواد المانعة للتسرب والحماية"
//                     },
//                     {
//                         "name": "المواد اللاصقة"
//                     },
//                     {
//                         "name": "معالجات الخشب"
//                     },
//                     {
//                         "name": "عمال النظافة"
//                     },
//                     {
//                         "name": "معالجات المعادن"
//                     },
//                     {
//                         "name": "معالجات الجلود والحجر"
//                     },
//                     {
//                         "name": "منظف ​​السجاد والأرضيات الفينيل"
//                     },
//                     {
//                         "name": "معالجات السقف"
//                     },
//                     {
//                         "name": "زيوت التشحيم والزيوت"
//                     },
//                     {
//                         "name": "أطقم إصلاح الألياف الزجاجية"
//                     },
//                     {
//                         "name": "مزيل الطلاء والورنيش"
//                     },
//                     {
//                         "name": "الورنيش"
//                     },
//                     {
//                         "name": "مركب التلميع"
//                     },
//                     {
//                         "name": "مواد التنظيف"
//                     },
//                     {
//                         "name": "أدوات التنظيف الأخرى"
//                     }

//                 ]
//             },
//             {
//                 name: " تقييد الحمل والرفع ",
//                 subMenuData: [
//                     {
//                         "name": "معدات مناولة المواد"
//                     },
//                     {
//                         "name": "إكسسوارات الرفع"
//                     },
//                     {
//                         "name": "معدات الرفع"
//                     },
//                     {
//                         "name": "الأسلاك والسلاسل والحبال"
//                     },
//                     {
//                         "name": "تقييد الحمل"
//                     },
//                     {
//                         "name": "سلالم ومقاعد الدرج"
//                     }

//                 ]
//             },
//             {
//                 name: " التغليف واللوازم البريدية ",
//                 subMenuData: [
//                     {
//                         "name": "التغليف البريدي"
//                     },
//                     {
//                         "name": "وضع العلامات"
//                     },
//                     {
//                         "name": "التغليف الوقائي"
//                     },
//                     {
//                         "name": "شريط وموزع"
//                     },
//                     {
//                         "name": "تعبئة المنصات"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Elecrtical Appliances
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-HomeAppliance" class="svg_tamagoshi s27DoW"><path fill="#1D9E9F" d="M4.982 5.23a1.06 1.06 0 00-.739-.112l-1.901.406a.432.432 0 00-.246.693l2.774 3.44a47.442 47.442 0 011.626-3.582L4.982 5.23zM3.393 17.573c-.379 0-.64.382-.5.735l1.324 3.38c.274.7.812 1.162 1.417 1.218l5.419.093 5.418-.093c.605-.056 1.143-.518 1.417-1.217l1.325-3.38a.539.539 0 00-.501-.736H3.393zM14.478 4.005c-.73-.693-1.613-1.067-2.518-1.067H10.146c-.907 0-1.789.374-2.52 1.067l3.426.049 3.425-.049z"></path><path fill="#1E3C87" d="M11.855 2.94L12 2.127a.96.96 0 10-1.892 0l.144.811h1.604zM22.681 13.672l-2.097-4.921a1.701 1.701 0 00-1.565-1.034h-2.62c-1.06-2.318-1.92-3.71-1.92-3.71l-3.426.048-3.425-.048s-.465.751-1.131 2.069A47.494 47.494 0 004.87 9.658a45.391 45.391 0 00-2.037 6.273.806.806 0 00.781.998H18.49c.523 0 .905-.49.782-.998a45.402 45.402 0 00-2.037-6.274h1.17c.276 0 .525.165.633.418l1.845 4.327c.202.476.738.738 1.226.567a.97.97 0 00.572-1.297z"></path></svg>`,
//         text: " الأجهزة الكهربائية ",
//         id: "home-appliance-sub-menu",
//         className: "sub-menu-electrical-appliances",
//         subMenuList: [
//             {
//                 name: " الأجهزة الكهربائية الكبيرة ",
//                 subMenuData: [
//                     {
//                         "name": "أفران مدمجة"
//                     },
//                     {
//                         "name": "شفاطات الطباخات"
//                     },
//                     {
//                         "name": "المواقد"
//                     },
//                     {
//                         "name": "غسالات الصحون"
//                     },
//                     {
//                         "name": "طباخات"
//                     },
//                     {
//                         "name": "غسالات الملابس"
//                     },
//                     {
//                         "name": "مجففات الملابس"
//                     },
//                     {
//                         "name": "الميكروويف"
//                     },
//                     {
//                         "name": "الثلاجات"
//                     },
//                     {
//                         "name": "أقبية النبيذ"
//                     },
//                     {
//                         "name": "المجمدات"
//                     },
//                     {
//                         "name": "أفران صغيرة"
//                     },
//                     {
//                         "name": "إكسسوارات الأجهزة الكهربائية الكبيرة"
//                     },
//                     {
//                         "name": "قطع غيار الأجهزة المنزلية"
//                     }

//                 ]
//             },
//             {
//                 name: " الأجهزة الكهربائية الصغيرة ",
//                 subMenuData: [
//                     {
//                         "name": "آلات القهوة"
//                     },
//                     {
//                         "name": "معالجات الطعام"
//                     },
//                     {
//                         "name": "الميكروويف"
//                     },
//                     {
//                         "name": "أجهزة الطبخ"
//                     },
//                     {
//                         "name": "أفران صغيرة"
//                     },
//                     {
//                         "name": "أساسيات وجبة الإفطار"
//                     },
//                     {
//                         "name": "عصارات"
//                     },
//                     {
//                         "name": "قطاعة الطعام"
//                     },
//                     {
//                         "name": "المقالي"
//                     },
//                     {
//                         "name": "محلية الصنع"
//                     },
//                     {
//                         "name": "الماء والمشروبات ومكعبات الثلج"
//                     },
//                     {
//                         "name": "الشواء"
//                     },
//                     {
//                         "name": "شوايات بلانشا"
//                     },
//                     {
//                         "name": "إكسسوارات الأجهزة الكهربائية الصغيرة"
//                     },
//                     {
//                         "name": "قطع غيار الأجهزة الصغيرة للمطبخ"
//                     }

//                 ]
//             },
//             {
//                 name: " صيانة المنزل ",
//                 subMenuData: [
//                     {
//                         "name": "المكانس الكهربائية"
//                     },
//                     {
//                         "name": "تنظيف"
//                     },
//                     {
//                         "name": "كي الملابس"
//                     },
//                     {
//                         "name": "خياطة"
//                     },
//                     {
//                         "name": "إكسسوارات صيانة المنزل"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Kitchen
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Kitchen" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M10.7 7.5a3.85 3.85 0 11-7.7 0 3.85 3.85 0 017.7 0zM20.428 7.5a3.85 3.85 0 11-7.7 0 3.85 3.85 0 017.7 0z"></path><path fill="#1E3C87" d="M15.656 6.189a4.189 4.189 0 11-8.378 0 4.189 4.189 0 018.378 0z"></path><path fill="#1E3C87" d="M15.672 18.358h-8.41c-.6 0-1.086-.487-1.086-1.088V7.16h10.583v10.11c0 .6-.487 1.088-1.087 1.088z"></path><path fill="#1D9E9F" d="M15.863 21.911H7.07a.896.896 0 01-.896-.895v-1.14c0-.464.377-.841.842-.841h8.9c.465 0 .842.377.842.842v1.139c0 .495-.401.895-.896.895zM9.096 15.61a.348.348 0 01-.348-.349v-2.733a.348.348 0 01.696 0v2.733a.348.348 0 01-.348.348zM11.579 15.61a.348.348 0 01-.349-.349v-2.733a.348.348 0 01.697 0v2.733a.348.348 0 01-.348.348zM13.838 15.61a.348.348 0 01-.348-.349v-2.733a.348.348 0 01.696 0v2.733a.348.348 0 01-.348.348z"></path></svg>`,
//         text: " المطبخ ",
//         id: "kitchen-sub-menu",
//         className: "sub-menu-kitchen",
//         subMenuList: [
//             {
//                 name: " خزائن المطبخ ",
//                 subMenuData: [
//                     {
//                         "name": "وحدات المطبخ"
//                     },
//                     {
//                         "name": "ألواح وزخارف المطبخ"
//                     }

//                 ]
//             },
//             {
//                 name: " أحواض المطبخ والحنفيات ",
//                 subMenuData: [
//                     {
//                         "name": "أحواض المطبخ"
//                     },
//                     {
//                         "name": "صرف مغسلة المطبخ"
//                     },
//                     {
//                         "name": "صنابير المطبخ"
//                     },
//                     {
//                         "name": "وحدات التخلص من النفايات"
//                     },
//                     {
//                         "name": "إكسسوارات حوض المطبخ"
//                     }

//                 ]
//             },
//             {
//                 name: " أسطح المطبخ ",
//                 subMenuData: [
//                     {
//                         "name": "أسطح العمل"
//                     },
//                     {
//                         "name": "اللوحات الواقية والملحقات"
//                     },
//                     {
//                         "name": "إكسسوارات سطح عمل المطبخ"
//                     },
//                     {
//                         "name": "واقيات المطبخ"
//                     }

//                 ]
//             },
//             {
//                 name: " إكسسورات المطبخ ",
//                 subMenuData: [
//                     {
//                         "name": "صناديق المطبخ"
//                     },
//                     {
//                         "name": "أدوات المطبخ"
//                     },
//                     {
//                         "name": "منظفات المطبخ"
//                     },
//                     {
//                         "name": "سجاد المطبخ"
//                     },
//                     {
//                         "name": "كراسي البار"
//                     },
//                     {
//                         "name": "طاولات مرتفعة وطاولات بار"
//                     },
//                     {
//                         "name": "قطع غيار الأجهزة المنزلية"
//                     }

//                 ]
//             },
//             {
//                 name: " المطابخ المجهزة والمطابخ الصغيرة ",
//                 subMenuData: [
//                     {
//                         "name": "مطابخ مجهزة"
//                     },
//                     {
//                         "name": "وحدات المطبخ الصغيرة"
//                     }

//                 ]
//             },
//             {
//                 name: "إكسسورات الغسالة ",
//                 subMenuData: [
//                     {
//                         "name": "قطع غيار الغسالات"
//                     },
//                     {
//                         "name": "إكسسوارات الغسالة"
//                     }

//                 ]
//             },
//             {
//                 name: " البلاط ",
//                 subMenuData: [
//                     {
//                         "name": "بلاط الأرضيات الداخلية"
//                     },
//                     {
//                         "name": "بلاط الحائط"
//                     },
//                     {
//                         "name": "بلاط القاعدة"
//                     },
//                     {
//                         "name": "بلاط جدران من الفسيفساء"
//                     },
//                     {
//                         "name": "الأرضيات الصناعية"
//                     },
//                     {
//                         "name": "إكسسوارات بلاط الأرضيات"
//                     },
//                     {
//                         "name": "أسمنت"
//                     },
//                     {
//                         "name": "إكسسوارات بلاط الجدران"
//                     },
//                     {
//                         "name": "أدوات التبليط"
//                     },
//                     {
//                         "name": "تركيب البلاط"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Painting And Cleaners
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Painting" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M11.187 21.945c.917 0 1.63-.797 1.529-1.708l-.381-3.432a4.24 4.24 0 01.224-1.903l.112-.311a.488.488 0 00-.46-.653H10.2a.488.488 0 00-.45.678 4.24 4.24 0 01.31 2.142l-.4 3.473a1.538 1.538 0 001.528 1.714z"></path><path fill="#1E3C87" d="M10.595 13.97v-1.237c0-.581.388-1.09.948-1.244l7.677-2.112a.595.595 0 00.438-.573V6.367a.418.418 0 00-.419-.418h-.499l.062-1.308.82.015c.75.013 1.35.625 1.35 1.374v2.964c0 .743-.5 1.394-1.217 1.587l-7.005 1.882a1.29 1.29 0 00-.952 1.154l-.025.353h-1.178zM4.14 5.685h-.565A.577.577 0 013 5.11v-.102c0-.316.259-.575.575-.575h.564c.317 0 .576.259.576.575v.102a.577.577 0 01-.576.575z"></path><path fill="#1D9E9F" d="M17.662 8.275H4.945c-.628 0-1.142-.546-1.142-1.212v-3.85C3.803 2.544 4.317 2 4.945 2h12.717c.628 0 1.142.545 1.142 1.212v3.85c0 .667-.514 1.213-1.142 1.213z"></path></svg>`,
//         text: " الدهانات والمنظفات  ",
//         id: "painting-sub-menu",
//         className: "sub-menu-paint",
//         subMenuList: [
//             {
//                 name: " دهانات داخلية ",
//                 subMenuData: [
//                     {
//                         "name": "دهانات الجدران الداخلية"
//                     },
//                     {
//                         "name": "رذاذ الطلاء والبرايمر"
//                     },
//                     {
//                         "name": "طلاء الأرضيات الداخلية"
//                     },
//                     {
//                         "name": "الورنيش والطلاء للأعمال الخشبية الداخلية"
//                     },
//                     {
//                         "name": "طلاء لامع"
//                     },
//                     {
//                         "name": "دهانات التجديد"
//                     },
//                     {
//                         "name": "طلاء البلاط"
//                     },
//                     {
//                         "name": "دهانات المطبخ"
//                     },
//                     {
//                         "name": "طلاء السبورة والاستنسل"
//                     },
//                     {
//                         "name": "مخططات الألوان وألوان الطلاء"
//                     },
//                     {
//                         "name": "دهانات الحمام"
//                     },
//                     {
//                         "name": "طلاء مضاد للعفن"
//                     },
//                     {
//                         "name": "المعاطف الداخلية"
//                     },
//                     {
//                         "name": "تحضير الطلاء"
//                     }

//                 ]
//             },
//             {
//                 name: " دهان خارجى ",
//                 subMenuData: [
//                     {
//                         "name": "طلاء الأرضيات الخارجية"
//                     },
//                     {
//                         "name": "دهانات وصبغات الخشب الخارجي"
//                     },
//                     {
//                         "name": "طلاء المعادن ومضاد للصدأ"
//                     },
//                     {
//                         "name": "دهانات البناء"
//                     },
//                     {
//                         "name": "طلاء خارجي متعدد الأغراض"
//                     },
//                     {
//                         "name": "طلاء مضاد للتآكل"
//                     },
//                     {
//                         "name": "طبقة أساس للخشب الخارجي"
//                     },
//                     {
//                         "name": "رذاذ الطلاء والبرايمر"
//                     },
//                     {
//                         "name": "دهانات خارجية متخصصة"
//                     },
//                     {
//                         "name": "مخططات الألوان وألوان الطلاء"
//                     }

//                 ]
//             },
//             {
//                 name: " أدوات الرسم ",
//                 subMenuData: [
//                     {
//                         "name": "سلالم ومقاعد الدرج"
//                     },
//                     {
//                         "name": "أغطية الغبار"
//                     },
//                     {
//                         "name": "سكاكين التزيين"
//                     },
//                     {
//                         "name": "مكشطة الطلاء"
//                     },
//                     {
//                         "name": "أدوات الرسم الأخرى"
//                     },
//                     {
//                         "name": "شريط لاصق"
//                     },
//                     {
//                         "name": "بكرات الطلاء"
//                     },
//                     {
//                         "name": "أعمدة تمديد الأسطوانة"
//                     },
//                     {
//                         "name": "أكمام الأسطوانة"
//                     },
//                     {
//                         "name": "مجموعة من الفرش"
//                     },
//                     {
//                         "name": "دلاء الطلاء والصواني والشبكات"
//                     },
//                     {
//                         "name": "فرشاة الرسم المسطحة"
//                     },
//                     {
//                         "name": "فرشاة مستديرة"
//                     },
//                     {
//                         "name": "رشاشات الطلاء"
//                     },
//                     {
//                         "name": "أطقم الرسم"
//                     },
//                     {
//                         "name": "خلاطات الطلاء"
//                     },
//                     {
//                         "name": "إطارات الأسطوانة"
//                     },
//                     {
//                         "name": "فرش الرسم"
//                     },
//                     {
//                         "name": "منظف ​​الفرشاة"
//                     },
//                     {
//                         "name": "المذيبات"
//                     },
//                     {
//                         "name": "بدلات العمل والبدلات الواقية"
//                     }

//                 ]
//             },
//             {
//                 name: " ورق الجدران وأغطية الجدران ",
//                 subMenuData: [
//                     {
//                         "name": "ورق الجدران وحدود ورق الجدران"
//                     },
//                     {
//                         "name": "لوحات زخرفية"
//                     },
//                     {
//                         "name": "أقمشة الجدران"
//                     },
//                     {
//                         "name": "ورق التبطين"
//                     }

//                 ]
//             },
//             {
//                 name: " إعداد السطح  ",
//                 subMenuData: [
//                     {
//                         "name": "ورق التبطين"
//                     },
//                     {
//                         "name": "المعاطف الداخلية"
//                     },
//                     {
//                         "name": "المواد التمهيدية المتخصصة"
//                     },
//                     {
//                         "name": "التمهيديات"
//                     },
//                     {
//                         "name": "مانع تسرب المياه"
//                     },
//                     {
//                         "name": "الحشوات"
//                     },
//                     {
//                         "name": "مخططات الألوان وألوان الطلاء"
//                     }

//                 ]
//             },
//             {
//                 name: " التنظيف والعلاجات ",
//                 subMenuData: [
//                     {
//                         "name": "المواد المانعة للتسرب والحماية"
//                     },
//                     {
//                         "name": "المواد اللاصقة"
//                     },
//                     {
//                         "name": "معالجات الخشب"
//                     },
//                     {
//                         "name": "عمال النظافة"
//                     },
//                     {
//                         "name": "معالجات المعادن"
//                     },
//                     {
//                         "name": "معالجات الجلود والحجر"
//                     },
//                     {
//                         "name": "منظف ​​السجاد والأرضيات الفينيل"
//                     },
//                     {
//                         "name": "معالجات السقف"
//                     },
//                     {
//                         "name": "زيوت التشحيم والزيوت"
//                     },
//                     {
//                         "name": "أطقم إصلاح الألياف الزجاجية"
//                     },
//                     {
//                         "name": "مزيل الطلاء والورنيش"
//                     },
//                     {
//                         "name": "الورنيش"
//                     },
//                     {
//                         "name": "مركب التلميع"
//                     },
//                     {
//                         "name": "مواد التنظيف"
//                     },
//                     {
//                         "name": "أدوات التنظيف الأخرى"
//                     }

//                 ]
//             },
//             {
//                 name: " أدوات ورق الجدران ",
//                 subMenuData: [
//                     {
//                         "name": "ماكينات تبخير ورق الجدران"
//                     },
//                     {
//                         "name": "طاولات اللصق والفرش والبكرات"
//                     },
//                     {
//                         "name": "مزيل ورق الجدران"
//                     },
//                     {
//                         "name": "موزعات المواد اللاصقة"
//                     },
//                     {
//                         "name": "قواطع ورق الحائط"
//                     },
//                     {
//                         "name": "مطرقة تنجيد ومطارق تثبيت"
//                     },
//                     {
//                         "name": "طقم ورق الجدران"
//                     }

//                 ]
//             },
//             {
//                 name: " القوالب ",
//                 subMenuData: [
//                     {
//                         "name": "الكورنيشات والأفاريز"
//                     },
//                     {
//                         "name": "ألواح السقف"
//                     },
//                     {
//                         "name": "ورود السقف"
//                     },
//                     {
//                         "name": "الأعمدة والأسنان والأقواس"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Tile Flooring
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Painting" class="svg_tamagoshi s27DoW"><path fill="#243D80" d="M7.706 7.834h-4.99a.509.509 0 0 1-.506-.51v-4.61c0-.51.412-.926.918-.926h4.578a.51.51 0 0 1 .507.511v5.034a.513.513 0 0 1-.507.5zM21.71 7.834h-4.989a.509.509 0 0 1-.506-.51V2.3c0-.276.221-.51.506-.51H21.3c.507 0 .918.415.918.925v4.62a.513.513 0 0 1-.506.5zM14.72 14.89H9.718a.509.509 0 0 1-.506-.511V9.345c0-.277.221-.51.506-.51h4.99c.274 0 .506.223.506.51v5.034a.5.5 0 0 1-.496.51zM7.768 21.945H3.19a.922.922 0 0 1-.918-.926v-4.618c0-.277.221-.511.506-.511h4.99c.274 0 .506.223.506.51v5.034a.515.515 0 0 1-.506.511zM21.36 21.945h-4.577a.509.509 0 0 1-.507-.51V16.4a.51.51 0 0 1 .507-.511h4.99c.274 0 .506.223.506.51v4.62c0 .51-.412.925-.918.925z"></path><path fill="#4CAFAD" d="M14.72 7.834H9.718a.509.509 0 0 1-.506-.51V2.3c0-.276.221-.51.506-.51h4.99c.274 0 .506.223.506.51v5.034c0 .277-.222.5-.496.5zM7.706 14.89h-4.99a.509.509 0 0 1-.506-.511V9.345c0-.277.222-.51.507-.51h4.99c.274 0 .506.223.506.51v5.034a.516.516 0 0 1-.507.51zM21.71 14.89h-4.989a.509.509 0 0 1-.506-.511V9.345c0-.277.221-.51.506-.51h4.99c.274 0 .506.223.506.51v5.034a.515.515 0 0 1-.506.51zM14.77 21.945H9.78a.509.509 0 0 1-.506-.51V16.4a.51.51 0 0 1 .507-.511h4.989c.274 0 .506.223.506.51v5.034a.501.501 0 0 1-.506.511z"></path></svg>`,
//         text: " بلاط الأرضيات ",
//         id: "flooring-sub-menu",
//         className: "sub-menu-flooring",
//         subMenuList: [
//             {
//                 name: " البلاط ",
//                 subMenuData: [
//                     {
//                         "name": "بلاط الأرضيات الداخلية"
//                     },
//                     {
//                         "name": "بلاط الحائط"
//                     },
//                     {
//                         "name": "بلاط القاعدة"
//                     },
//                     {
//                         "name": "بلاط جدران من الفسيفساء"
//                     },
//                     {
//                         "name": "الأرضيات الصناعية"
//                     },
//                     {
//                         "name": "إكسسوارات بلاط الأرضيات"
//                     },
//                     {
//                         "name": "أسمنت"
//                     },
//                     {
//                         "name": "إكسسوارات بلاط الجدران"
//                     },
//                     {
//                         "name": "أدوات التبليط"
//                     },
//                     {
//                         "name": "تركيب البلاط"
//                     }

//                 ]
//             },
//             {
//                 name: " أرضيات خشبية ",
//                 subMenuData: [
//                     {
//                         "name": "السجاد ومفارش الأبواب"
//                     },
//                     {
//                         "name": "معالجات الخشب"
//                     },
//                     {
//                         "name": "أرضيات خشبية"
//                     },
//                     {
//                         "name": "القاعدة"
//                     },
//                     {
//                         "name": "تركيب الأرضيات الخشبية"
//                     }

//                 ]
//             },
//             {
//                 name: " بلاط وأرضيات الفينيل ",
//                 subMenuData: [
//                     {
//                         "name": "لينو"
//                     },
//                     {
//                         "name": "بلاط وألواح أرضيات الفينيل"
//                     }

//                 ]
//             },
//             {
//                 name: " كسوة الجدران الداخلية وكتل الزجاج ",
//                 subMenuData: [
//                     {
//                         "name": "كسوة الجدران الداخلية"
//                     },
//                     {
//                         "name": "كتل الزجاج"
//                     }

//                 ]
//             },
//             {
//                 name: " أدوات الديكور والأرضيات ",
//                 subMenuData: [
//                     {
//                         "name": "تركيب الأرضيات الخشبية"
//                     },
//                     {
//                         "name": "تركيب السجاد والأرضيات الفينيل"
//                     },
//                     {
//                         "name": "شريط"
//                     },
//                     {
//                         "name": "تركيب البلاط"
//                     },
//                     {
//                         "name": "أجهزة رش الطلاء وكابينات الطلاء"
//                     },
//                     {
//                         "name": "تركيب الأرضيات"
//                     },
//                     {
//                         "name": "أدوات التبليط"
//                     }

//                 ]
//             },
//             {
//                 name: " السجاد و أعشاب البحر ",
//                 subMenuData: [
//                     {
//                         "name": "السجادة"
//                     },
//                     {
//                         "name": "تركيب السجاد والأرضيات الفينيل"
//                     }

//                 ]
//             },
//             {
//                 name: " الارضيات الخرسانية ",
//                 subMenuData: [
//                     {
//                         "name": "صبغات الخرسانة والجير"
//                     },
//                     {
//                         "name": "أرضيات خرسانية مشمعة"
//                     }

//                 ]
//             },
//             {
//                 name: " لوحات الحائط ",
//                 subMenuData: [
//                     {
//                         "name": "ألواح الجدران الخشبية"
//                     },
//                     {
//                         "name": "ألواح الجدران البلاستيكية"
//                     },
//                     {
//                         "name": "مقاطع"
//                     },
//                     {
//                         "name": "ملفات تعريف وتشطيبات الألواح الجدارية"
//                     }

//                 ]
//             },
//             {
//                 name: " الأرضيات والحدائق والأفنية ",
//                 subMenuData: [
//                     {
//                         "name": "إنشاء الأرضيات والحدائق والممرات"
//                     },
//                     {
//                         "name": "تركيب الأرضيات"
//                     },
//                     {
//                         "name": "رصف الحدائق"
//                     },
//                     {
//                         "name": "الرمل والحصى والحصى الزخرفية"
//                     },
//                     {
//                         "name": "درابزينات وسور الحدائق"
//                     },
//                     {
//                         "name": "المسارات والحواف"
//                     },
//                     {
//                         "name": "العشب العشبي"
//                     },
//                     {
//                         "name": "أدوات التبليط"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Building And Construction Materials
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Construction" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M2.554 12.418H9.03c.306 0 .554.248.554.554v2.947a.554.554 0 01-.554.553H2.554A.554.554 0 012 15.918v-2.946c0-.306.248-.554.554-.554z"></path><path fill="#1D9E9F" d="M13.7 8.263v2.947a.554.554 0 01-.554.554h-6.47a.554.554 0 01-.554-.554V8.263c0-.306.248-.554.553-.554h6.47c.307 0 .555.248.555.554z"></path><path fill="#1E3C87" d="M14.913 7.709h6.476c.306 0 .554.248.554.554v2.947a.554.554 0 01-.554.554h-6.476a.554.554 0 01-.554-.554V8.263c0-.306.248-.554.554-.554zM17.821 3.554v2.947a.554.554 0 01-.554.554h-6.47a.554.554 0 01-.554-.554V3.554c0-.306.248-.554.554-.554h6.47c.306 0 .554.248.554.554zM17.821 12.971v2.947a.554.554 0 01-.554.554h-6.47a.554.554 0 01-.554-.554v-2.947c0-.306.248-.554.554-.554h6.47c.306 0 .554.248.554.554zM14.913 17.126h6.476c.306 0 .554.248.554.554v2.947a.554.554 0 01-.554.554h-6.476a.554.554 0 01-.554-.554V17.68c0-.306.248-.554.554-.554zM13.7 17.68v2.947a.554.554 0 01-.554.554h-6.47a.554.554 0 01-.554-.554V17.68c0-.306.248-.554.553-.554h6.47c.307 0 .555.248.555.554z"></path></svg>`,
//         text: " مواد البناء والتشييد ",
//         id: "construction-sub-menu",
//         className: "sub-menu-building",
//         subMenuList: [
//             {
//                 name: " مواد البناء ",
//                 subMenuData: [
//                     {
//                         "name": "العزل"
//                     },
//                     {
//                         "name": "مانع تسرب المياه"
//                     },
//                     {
//                         "name": "أدوات البناء"
//                     },
//                     {
//                         "name": "خلاطات الأسمنت ومعدات البناء"
//                     },
//                     {
//                         "name": "الخرسانة والملاط"
//                     },
//                     {
//                         "name": "الحشوات"
//                     },
//                     {
//                         "name": "عزل الباب"
//                     },
//                     {
//                         "name": "تسليح الفولاذ"
//                     },
//                     {
//                         "name": "شبكة الأمان والحاجز"
//                     },
//                     {
//                         "name": "مجمعات"
//                     },
//                     {
//                         "name": "الطوب والكتل"
//                     },
//                     {
//                         "name": "الجدران الفاصلة"
//                     },
//                     {
//                         "name": "ملح إزالة الجليد"
//                     }

//                 ]
//             },
//             {
//                 name: "  تسقيف و تصريف المياه ",
//                 subMenuData: [
//                     {
//                         "name": "معالجات السقف"
//                     },
//                     {
//                         "name": "المزاريب والملحقات"
//                     },
//                     {
//                         "name": "طبقة الأساس للسقف"
//                     },
//                     {
//                         "name": "إكسسوارات التسقيف"
//                     },
//                     {
//                         "name": "تهوية السقف والأغطية"
//                     },
//                     {
//                         "name": "بلاط السقف والألواح"
//                     },
//                     {
//                         "name": "تثبيتات البلاط والأردواز"
//                     },
//                     {
//                         "name": "تسقيف صفائحي"
//                     }

//                 ]
//             },
//             {
//                 name: " خشب التقطيع ",
//                 subMenuData: [
//                     {
//                         "name": "تهوية السقف والأغطية"
//                     },
//                     {
//                         "name": "بلاط السقف والألواح"
//                     },
//                     {
//                         "name": "تثبيتات البلاط والأردواز"
//                     },
//                     {
//                         "name": "المزاريب والملحقات"
//                     },
//                     {
//                         "name": "طبقة الأساس للسقف"
//                     },
//                     {
//                         "name": "إكسسوارات التسقيف"
//                     },
//                     {
//                         "name": "أدوات التسقيف"
//                     },
//                     {
//                         "name": "تسقيف صفائحي"
//                     },
//                     {
//                         "name": "الأخشاب ولوازم التسقيف"
//                     }

//                 ]
//             },
//             {
//                 name: " الصرف الصحي والقنوات ",
//                 subMenuData: [

//                     {
//                         "name": "بولي فينيل كلوريد"
//                     },
//                     {
//                         "name": "معالجة مياه الصرف الصحي"
//                     },
//                     {
//                         "name": "حماية الكابلات تحت الأرض"
//                     },
//                     {
//                         "name": "الصرف الصحي"
//                     },
//                     {
//                         "name": "أغطية وشبكات فتحات الصرف الصحي"
//                     }
//                 ]
//             },
//             {
//                 name: " السلامة وملابس العمل ",
//                 subMenuData: [
//                     {
//                         "name": "أحذية السلامة"
//                     },
//                     {
//                         "name": "ملابس العمل"
//                     },
//                     {
//                         "name": "أقنعة الغبار وأجهزة التنفس"
//                     },
//                     {
//                         "name": "الخوذات الصلبة وحماية الأذن"
//                     },
//                     {
//                         "name": "واقيات الوجه وحماية العين"
//                     },
//                     {
//                         "name": "قفازات واقية"
//                     },
//                     {
//                         "name": "معدات الحماية من السقوط"
//                     },
//                     {
//                         "name": "معدات الإسعافات الأولية"
//                     },
//                     {
//                         "name": "مكبرات الصوت"
//                     }

//                 ]
//             },
//             {
//                 name: " إعداد السطح ",
//                 subMenuData: [
//                     {
//                         "name": "ورق التبطين"
//                     },
//                     {
//                         "name": "المعاطف الداخلية"
//                     },
//                     {
//                         "name": "المواد التمهيدية المتخصصة"
//                     },
//                     {
//                         "name": "التمهيديات"
//                     },
//                     {
//                         "name": "مانع تسرب المياه"
//                     },
//                     {
//                         "name": "الحشوات"
//                     },
//                     {
//                         "name": "مخططات الألوان وألوان الطلاء"
//                     }

//                 ]
//             },
//             {
//                 name: " مناولة المواد والرفع والسلامة في الارتفاع ",
//                 subMenuData: [
//                     {
//                         "name": "معدات الرفع"
//                     },
//                     {
//                         "name": "الأسلاك والسلاسل والحبال"
//                     },
//                     {
//                         "name": "معدات مناولة المواد"
//                     },
//                     {
//                         "name": "سلالم"
//                     },
//                     {
//                         "name": "إكسسوارات الرفع"
//                     },
//                     {
//                         "name": "تقييد الحمل"
//                     },
//                     {
//                         "name": "حوامل المحور"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Animal care
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-PetShop" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M11.794 11.736c1.477.85 2.998 7.292 1.932 9.134-.569.982-2 1.469-3.477.618-.739-.425-1.933-2.15-2.548-2.505s-2.813-.422-3.674-.918c-.861-.497-1.279-2.046-.64-3.152 1.258-1.687 6.58-4.19 8.407-3.177z"></path><path fill="#1D9E9F" d="M9.41 4.862c-.524 1.84-.064 3.55 1.025 3.823 1.09.272 2.394-.993 2.918-2.832.524-1.84.063-3.557-1.026-3.83A1.54 1.54 0 0012.06 2c-1.216 0-2.174 1.468-2.65 2.862zM15.239 6.69c-1.335 1.373-1.781 3.138-1 3.942.782.805 2.496.349 3.83-1.023 1.335-1.373 1.788-3.138 1.007-3.943a1.373 1.373 0 00-1.007-.408c-.983 0-2.127.835-2.83 1.432zM3.368 8.146c-.427 1.768.076 3.455 1.119 3.763 1.043.308 2.231-.878 2.658-2.646.427-1.768-.07-3.448-1.113-3.756-.11-.02-.217-.03-.321-.03-1.196 0-1.952 1.29-2.343 2.67zM16.924 12.833c-1.56.897-2.39 2.376-1.852 3.304.537.928 2.238.956 3.797.06 1.56-.897 2.389-2.377 1.852-3.304-.315-.513-.871-.7-1.49-.7-.796 0-1.695.312-2.307.64z"></path></svg>`,
//         text: "رعاية الحيوان ",
//         id: "pet-care-sub-menu",
//         className: "sub-menu-animal-care",
//         subMenuList: [
//             {
//                 name: " الكلاب ",
//                 subMenuData: [
//                     {
//                         "name": "طعام الكلاب"
//                     },
//                     {
//                         "name": "سفر الكلاب"
//                     },
//                     {
//                         "name": "أقفاص الكلاب والأقلام والمسارات"
//                     },
//                     {
//                         "name": "أوعية طعام الكلاب وإكسسوارات التغذية"
//                     },
//                     {
//                         "name": "أسرّة الكلاب"
//                     },
//                     {
//                         "name": "العناية بالكلاب"
//                     },
//                     {
//                         "name": "علاج البراغيث والقراد والديدان للكلاب"
//                     },
//                     {
//                         "name": "تدريب الكلاب والرياضة"
//                     },
//                     {
//                         "name": "أبواب القطط والحيوانات الأليفة"
//                     },
//                     {
//                         "name": "أطواق الكلاب والمقودات والسروج"
//                     },
//                     {
//                         "name": "العاب الكلاب"
//                     },
//                     {
//                         "name": "سلامة الكلاب"
//                     },
//                     {
//                         "name": "ملابس الكلاب"
//                     },
//                     {
//                         "name": "تنظيف الكلاب"
//                     }

//                 ]
//             },
//             {
//                 name: " القطط ",
//                 subMenuData: [
//                     {
//                         "name": "العاب القطط"
//                     },
//                     {
//                         "name": "طعام القطط"
//                     },
//                     {
//                         "name": "أوعية طعام القطط وإكسسوارات التغذية"
//                     },
//                     {
//                         "name": "قمامة القطط وصناديق القمامة"
//                     },
//                     {
//                         "name": "أسرة القطط"
//                     },
//                     {
//                         "name": "علاج البراغيث والقراد والديدان للقطط"
//                     },
//                     {
//                         "name": "سفر القطط"
//                     },
//                     {
//                         "name": "العناية بالقطط"
//                     },
//                     {
//                         "name": "أطواق القطط والمقودات والسروج"
//                     },
//                     {
//                         "name": "تنظيف القطط"
//                     },
//                     {
//                         "name": "شاشات وحواجز نوافذ القطط"
//                     },
//                     {
//                         "name": "تدريب القطط"
//                     },
//                     {
//                         "name": "أبواب القطط والحيوانات الأليفة"
//                     }

//                 ]
//             },
//             {
//                 name: " مستلزمات الزراعة ",
//                 subMenuData: [
//                     {
//                         "name": "تربية الدجاج"
//                     },
//                     {
//                         "name": "سياج كهربائي"
//                     },
//                     {
//                         "name": "معدات زراعية"
//                     },
//                     {
//                         "name": "رعاية الثروة الحيوانية"
//                     },
//                     {
//                         "name": "تربية الأغنام"
//                     },
//                     {
//                         "name": "تربية الماشية"
//                     },
//                     {
//                         "name": "تربية الخنازير"
//                     }

//                 ]
//             },
//             {
//                 name: " الحيوانات الأليفة الصغيرة ",
//                 subMenuData: [
//                     {
//                         "name": "الأقفاص والمسارات"
//                     },
//                     {
//                         "name": "اقفاص الحيوانات الصغيرة"
//                     },
//                     {
//                         "name": "إكسسوارات قفص القوارض"
//                     },
//                     {
//                         "name": "القش والفراش"
//                     },
//                     {
//                         "name": "طعام الحيوانات الأليفة الصغيرة"
//                     },
//                     {
//                         "name": "العاب الحيوانات الصغيرة"
//                     },
//                     {
//                         "name": "سفر الحيوانات الأليفة الصغيرة"
//                     },
//                     {
//                         "name": "رعاية الحيوانات الأليفة الصغيرة"
//                     }

//                 ]
//             },
//             {
//                 name: " أحواض السمك وأحواض السمك ",
//                 subMenuData: [
//                     {
//                         "name": "أحواض وأحواض الأسماك"
//                     },
//                     {
//                         "name": "مرشحات أحواض السمك"
//                     },
//                     {
//                         "name": "مضخات الماء والهواء للأحواض المائية"
//                     },
//                     {
//                         "name": "ديكورات حوض السمك"
//                     },
//                     {
//                         "name": "إضاءة حوض السمك"
//                     },
//                     {
//                         "name": "طعام السمك"
//                     },
//                     {
//                         "name": "معالجة مياه أحواض السمك"
//                     },
//                     {
//                         "name": "مضخات الهواء وموزعات ثاني أكسيد الكربون"
//                     },
//                     {
//                         "name": "لوازم أحواض السمك"
//                     },
//                     {
//                         "name": "تنظيف حوض السمك"
//                     },
//                     {
//                         "name": "أنظمة أحواض السمك باستخدام ثاني أكسيد الكربون"
//                     },
//                     {
//                         "name": "لوازم حوض السمك النانو"
//                     },
//                     {
//                         "name": "تربية الأسماك"
//                     }

//                 ]
//             },
//             {
//                 name: " الطيور ",
//                 subMenuData: [
//                     {
//                         "name": "اقفاص الطيور ومعداتها"
//                     },
//                     {
//                         "name": "صحة الطيور"
//                     },
//                     {
//                         "name": "العاب الطيور"
//                     },
//                     {
//                         "name": "العناية بالطيور"
//                     },
//                     {
//                         "name": "فراش الطيور"
//                     },
//                     {
//                         "name": "إكسسوارات الطيور"
//                     }

//                 ]
//             },
//             {
//                 name: " مستلزمات الخيول ",
//                 subMenuData: [
//                     {
//                         "name": "رعاية الخيول"
//                     },
//                     {
//                         "name": "معدات ساحة مستقرة"
//                     },
//                     {
//                         "name": "السروج"
//                     },
//                     {
//                         "name": "مسمار"
//                     },
//                     {
//                         "name": "ملابس الفروسية"
//                     },
//                     {
//                         "name": "سجادات وبطانيات الخيول"
//                     },
//                     {
//                         "name": "سياج الخيل"
//                     },
//                     {
//                         "name": "ملابس الخيل"
//                     },
//                     {
//                         "name": "تغذية الخيول"
//                     },
//                     {
//                         "name": "معدات مستقرة"
//                     }

//                 ]
//             },
//             {
//                 name: " تربية النحل ",
//                 subMenuData: [
//                     {
//                         "name": "خلايا النحل"
//                     },
//                     {
//                         "name": "معدات تربية النحل"
//                     },
//                     {
//                         "name": "مستخلصات العسل"
//                     },
//                     {
//                         "name": "بدلات النحل"
//                     },
//                     {
//                         "name": "لوازم خلية النحل"
//                     },
//                     {
//                         "name": "صحة الخلية والتغذية"
//                     },
//                     {
//                         "name": "تربية الملكة"
//                     },
//                     {
//                         "name": "فنادق الحشرات"
//                     }

//                 ]
//             },
//             {
//                 name: " الزواحف ",
//                 subMenuData: [
//                     {
//                         "name": "أحواض تربية السلاحف وخزانات السلاحف"
//                     },
//                     {
//                         "name": "طعام الزواحف"
//                     },
//                     {
//                         "name": "تدفئة حوض الحيوانات"
//                     },
//                     {
//                         "name": "رمل الزواحف والركائز"
//                     },
//                     {
//                         "name": "إضاءة الحوض"
//                     },
//                     {
//                         "name": "ديكورات فيفاريوم"
//                     },
//                     {
//                         "name": "رعاية الزواحف"
//                     },
//                     {
//                         "name": "إكسسوارات الأحياء المائية"
//                     },
//                     {
//                         "name": "معالجة مياه الزواحف"
//                     }

//                 ]
//             },
//         ],
//     },
//     // Wood
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Carpentry" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M7.676 4.252c0-.263.215-.472.486-.472h7.65c.271 0 .486.209.486.472v15.316h.795V3.49a.502.502 0 0 0-.505-.49H7.395a.502.502 0 0 0-.505.49l-.001 16.081h.795l.001-15.319h-.009Z"></path><path fill="#1E3C87" d="M8.312 4.397v15.171h7.35V4.397h-7.35Z"></path><path fill="#fff" d="M15.821 3.78H8.162a.476.476 0 0 0-.486.472v15.316h.636V4.397h7.35v15.171h.636V4.252c.009-.254-.215-.472-.477-.472Z"></path><path fill="#1D9E9F" d="M17.794 19.569H6.189a.73.73 0 0 0-.739.716c0 .399.327.716.739.716h11.605a.73.73 0 0 0 .739-.716.723.723 0 0 0-.739-.716ZM15.263 11.929a.82.82 0 0 0-1.636.067.82.82 0 0 0 1.636.068v-.135Z"></path></svg>`,
//         text: " الأخشاب والنجارة ",
//         id: "wood-sub-menu",
//         className: "sub-menu-wood",
//         subMenuList: [
//             {
//                 name: " النوافذ والنوافذ الفرنسية ",
//                 subMenuData: [
//                     {
//                         "name": "نوافذ"
//                     },
//                     {
//                         "name": "نوافذ فرنسية"
//                     },
//                     {
//                         "name": "شاشات الذباب"
//                     },
//                     {
//                         "name": "الستائر الدوارة"
//                     }

//                 ]
//             },
//             {
//                 name: " نوافذ وفتحات السقف من فيلوكس ",
//                 subMenuData: [
//                     {
//                         "name": "فتحات السقف وملحقاتها"
//                     },
//                     {
//                         "name": "نوافذ واكسسوارات فيلوكس"
//                     }

//                 ]
//             },
//             {
//                 name: " الأبواب الأمامية والأبواب ",
//                 subMenuData: [
//                     {
//                         "name": "الأبواب الأمامية"
//                     },
//                     {
//                         "name": "الأبواب"
//                     },
//                     {
//                         "name": "مظلات ومظلات الأبواب"
//                     }

//                 ]
//             },
//             {
//                 name: " أبواب داخلية وجدران فاصلة ",
//                 subMenuData: [
//                     {
//                         "name": "أبواب داخلية"
//                     },
//                     {
//                         "name": "جدران تقسيم زجاجية"
//                     },
//                     {
//                         "name": "فاصل الغرف"
//                     },
//                     {
//                         "name": "أبواب منزلقة"
//                     }

//                 ]
//             },
//             {
//                 name: " السلالم وبوابات السلالم ",
//                 subMenuData: [
//                     {
//                         "name": "السلالم وبوابات السلالم"
//                     },
//                     {
//                         "name": "درابزينات واكسسوارات"
//                     }

//                 ]
//             },
//             {
//                 name: " أبواب المرآب ",
//                 subMenuData: [
//                     {
//                         "name": "أبواب الجراج الدوارة"
//                     },
//                     {
//                         "name": "أبواب المرآب العلوية والسفلية"
//                     },
//                     {
//                         "name": "معدات باب المرآب"
//                     }

//                 ]
//             },
//             {
//                 name: " التزجيج والاكسسوارات ",
//                 subMenuData: [
//                     {
//                         "name": "زجاج معدني"
//                     },
//                     {
//                         "name": "زجاج اكريليك"
//                     }

//                 ]
//             },
//             {
//                 name: " مواد الأخشاب والألواح ",
//                 subMenuData: [
//                     {
//                         "name": "ألواح رفوف"
//                     },
//                     {
//                         "name": "الأخشاب والألواح"
//                     },
//                     {
//                         "name": "مواد ورقية"
//                     }

//                 ]
//             },
//             {
//                 name: " إكسسوارات باب الفناء ",
//                 subMenuData: [
//                     {
//                         "name": "إكسسوارات أبواب الفناء المنزلقة"
//                     }

//                 ]
//             },

//         ]
//     },
//     // Energy Renewable
//     {
//         svg: `<svg aria-hidden="true" focusable="false" height="1.5em" role="presentation" width="1.5em" viewBox="0 0 24 24" data-testid="family-icon-Renov" class="svg_tamagoshi s27DoW"><path fill="#1E3C87" d="M17.7427 2.73448C17.7427 2.28923 17.3827 1.93399 16.9422 1.93399H15.2796C14.8391 1.93399 14.4791 2.28923 14.4791 2.73448V4.64616C14.4791 4.70988 14.5095 4.76979 14.5609 4.80747L17.4244 6.9063C17.5565 7.00313 17.7427 6.90879 17.7427 6.74499V2.73448Z"></path><path fill="#29B9AD" d="M21.4837 11.3564C21.3429 11.5485 21.1248 11.6502 20.9038 11.6502C20.7563 11.6502 20.6078 11.6051 20.4799 11.5113L11.7985 5.15184C11.4467 4.89412 10.9684 4.89412 10.6166 5.15184L1.93522 11.5113C1.61533 11.7457 1.16592 11.6765 0.931403 11.3564C0.696857 11.0363 0.766299 10.5869 1.08642 10.3525L10.7831 3.2491C11.0357 3.06393 11.3794 3.06393 11.6319 3.2491L21.3287 10.3525C21.6488 10.5869 21.7182 11.0363 21.4837 11.3564Z"></path><path fill="#1E3C87" d="M14.7477 7.9015L14.4806 7.70225L11.7975 5.73913C11.4457 5.48171 10.9676 5.48187 10.616 5.73952L3.3152 11.0886C3.05812 11.277 2.90622 11.5766 2.90622 11.8953V21.1151C2.90622 21.6449 3.33188 22.066 3.85718 22.066H18.5606C19.0813 22.066 19.5115 21.6449 19.5115 21.1151V11.8956C19.5115 11.5767 19.3594 11.277 19.1021 11.0887L14.7477 7.9015Z"></path><path fill="#29B9AD" d="M20.8705 18.7157L23.0703 16.5073C23.147 16.4302 23.1495 16.3064 23.0759 16.2263L22.1713 15.2421L20.8705 13.8436C20.5456 13.4987 20.1232 13.3071 19.6791 13.3071L8.85706 13.3071C8.57642 13.3071 8.34892 13.5346 8.34892 13.8153V18.7504C8.34892 19.031 8.57642 19.2585 8.85707 19.2585H19.6791C20.1232 19.2585 20.5456 19.0669 20.8705 18.7157Z"></path><path fill="white" d="M15.7912 18.6069L15.5622 17.7353H14.0512L13.8157 18.6069H12.4351L13.9525 13.937H15.629L17.1655 18.6069H15.7912ZM15.3013 16.7046L15.1009 15.9411C15.0543 15.7715 14.997 15.552 14.9292 15.2826C14.8634 15.0133 14.8199 14.8203 14.7987 14.7036C14.7796 14.8118 14.7415 14.9899 14.6842 15.2381C14.6291 15.4862 14.505 15.975 14.312 16.7046H15.3013Z"></path></svg>`,
//         text: " تجديدات الطاقة ",
//         id: "energy-renewal-sub-menu",
//         className: "sub-menu-energy",
//         subMenuList: [
//             {
//                 name: " مشعات عالية الكفاءة ",
//                 subMenuData: [
//                     {
//                         "name": "السخانات والمشعات الكهربائية"
//                     },
//                     {
//                         "name": "مشعات التدفئة المركزية"
//                     }

//                 ]
//             },
//             {
//                 name: " التدفئة باستخدام الحطب ",
//                 subMenuData: [
//                     {
//                         "name": "أنظمة المداخن والمداخن"
//                     },
//                     {
//                         "name": "مواقد"
//                     },
//                     {
//                         "name": "المواقد"
//                     }

//                 ]
//             },
//             {
//                 name: " عزل المنزل ",
//                 subMenuData: [
//                     {
//                         "name": "العزل"
//                     },
//                     {
//                         "name": "نوافذ"
//                     },
//                     {
//                         "name": "الأبواب الأمامية"
//                     }

//                 ]
//             },
//             {
//                 name: " تهوية ",
//                 subMenuData: [
//                     {
//                         "name": "أنظمة MEV"
//                     }

//                 ]
//             },
//             {
//                 name: " التحكم في التدفئة ",
//                 subMenuData: [
//                     {
//                         "name": "ترموستات الغلايات"
//                     },
//                     {
//                         "name": "ترموستات السخان الكهربائي والرادياتير"
//                     },
//                     {
//                         "name": "خلاطات الحنفيات الحرارية"
//                     },
//                     {
//                         "name": "أنظمة المنزل الذكي"
//                     }

//                 ]
//             },
//             {
//                 name: " طاقة شمسية ",
//                 subMenuData: [
//                     {
//                         "name": "الألواح الشمسية"
//                     },
//                     {
//                         "name": "مجموعات الطاقة الشمسية خارج الشبكة"
//                     },
//                     {
//                         "name": "مجموعات الطاقة الشمسية المرتبطة بالشبكة"
//                     },
//                     {
//                         "name": "طاقة الرياح"
//                     },
//                     {
//                         "name": "سخانات المياه بالطاقة الشمسية"
//                     }

//                 ]
//             },
//             {
//                 name: " العلاج الحراري الجوي ",
//                 subMenuData: [
//                     {
//                         "name": "مضخات الحرارة"
//                     },
//                     {
//                         "name": "مكيفات الهواء"
//                     }

//                 ]
//             },
//         ],
//     },
// ];

// const totalItems = 16; // Total number of menu items you want to display
// const menuContainer = document.getElementById("list-container");
// const generateSubMenuList = (subMenuItems) => {
//     return subMenuItems
//         .map(
//             (subItem) => `
//                 <li class="sub-menu-list-last-item ">
//                     <a href="#" class="sub-menu-list-last-item-link">${subItem.name}</a>
//                 </li>
//     `
//         )
//         .join("");
// };

// const generateDropdownSubs = (subMenuItems, mainMenuId) => {
//     return subMenuItems
//         .map(
//             (subItem, index) => `
//         <a href="#" class="dropdown-sub" id="dropdown-sub-${mainMenuId}-${index}">
//             <li>${subItem.name}</li>
//             <i class="fa-solid fa-chevron-down custom-arrow-direction"></i>
//         </a>
//         <div class="submenudrop" id="submenu-${mainMenuId}-${index}" style="display: none;">
//             <ul>
//             ${subItem.subMenuData ? generateSubMenuList(subItem.subMenuData) : ""}
//             </ul>
//         </div>
//         `
//         )
//         .join("");
// };

// document.addEventListener("DOMContentLoaded", () => {
//     const dropdownSubItems = document.querySelectorAll(".dropdown-sub");

//     dropdownSubItems.forEach((item) => {
//         item.addEventListener("click", (event) => {
//             event.preventDefault();

//             // Get the submenu related to this dropdown item
//             const submenuId = item.id.replace("dropdown-sub", "submenu");
//             const submenu = document.getElementById(submenuId);

//             // Get the arrow icon within the clicked dropdown item
//             const arrowIcon = item.querySelector(".custom-arrow-direction");

//             // Close all other submenus and reset their arrows
//             dropdownSubItems.forEach((otherItem) => {
//                 if (otherItem !== item) {
//                     const otherSubmenuId = otherItem.id.replace("dropdown-sub", "submenu");
//                     const otherSubmenu = document.getElementById(otherSubmenuId);
//                     const otherArrowIcon = otherItem.querySelector(".custom-arrow-direction");

//                     if (otherSubmenu.style.display === "block") {
//                         otherSubmenu.style.display = "none"; // Hide other submenu
//                         otherArrowIcon.classList.remove("fa-chevron-up");
//                         otherArrowIcon.classList.add("fa-chevron-down");
//                     }
//                 }
//             });

//             // Toggle the visibility of the clicked submenu
//             if (submenu.style.display === "none" || submenu.style.display === "") {
//                 submenu.style.display = "block"; // Show submenu
//                 arrowIcon.classList.remove("fa-chevron-down");
//                 arrowIcon.classList.add("fa-chevron-up");
//             } else {
//                 submenu.style.display = "none"; // Hide submenu
//                 arrowIcon.classList.remove("fa-chevron-up");
//                 arrowIcon.classList.add("fa-chevron-down");
//             }
//         });
//     });
// });

// // Loop to generate menu items
// for (let i = 0; i < items.length; i++) {
//     const currentItem = items[i];

//     // Create the main menu item <li>
//     const listItem = document.createElement("li");
//     listItem.className = "menu-button";
//     listItem.id = currentItem.id;

//     listItem.innerHTML = `
//     <button class="link-small ">
//       <div class="icons-right">
//         <div class="icons-right">
//         ${currentItem.svg}
//         <span>${currentItem.text}</span>
//         </div>
//       </div>
//       <i class="fa-solid fa-chevron-left"></i>
//     </button>
//   `;

//     // Create the sub-menu container <div>
//     const subMenuDiv = document.createElement("div");
//     subMenuDiv.className = `${currentItem.className} none`;

//     subMenuDiv.innerHTML = `
//     <button class="sub-menu-container-title flex">
//       <div class="sub-menu-container-title-right flex">
//         <a href="#" class="sub-menu-container-title-right-link" id="sub-menu-container-title-right-link-${i}">
//           <i class="fa-solid fa-chevron-right"></i>
//         </a>
//         <h3 style="color: #31427b; font-weight: bold;">${currentItem.text}</h3>
//       </div>
//       <a href="#" style="color: #31427b; font-weight: bold;">عرض الكل</a>
//     </button>
//     <div class="sub-menu-container link-small column hover-none">
//       ${generateDropdownSubs(currentItem.subMenuList, currentItem.id)}
//     </div>
//   `;

//     // Append the main menu item and its sub-menu to the container
//     menuContainer.appendChild(listItem);
//     menuContainer.appendChild(subMenuDiv);
// }

// // Function to toggle the visibility of the sub-menu
// const toggleSubMenuVisibility = (event) => {
//     // Find the button that was clicked
//     const button = event.target.closest(".sub-menu");
//     if (button) {
//         // Find the associated menu item
//         const menuButton = button.parentElement;
//         const subMenuDiv = menuButton.nextElementSibling; // Assuming the sub-menu div is right after the li element

//         // Toggle the 'none' class to show/hide the sub-menu
//         subMenuDiv.classList.toggle("none");
//     }
// };

// // Add event listener to the menu container for handling clicks
// menuContainer.addEventListener("click", toggleSubMenuVisibility);


// // Toggle sub-menu visibility
// menuContainer.addEventListener("click", (event) => {
//     const button = event.target.closest(".link-small");
//     if (button) {
//         const menuButton = button.parentElement;
//         const subMenu = menuButton.nextElementSibling;
//         subMenu.classList.toggle("none");
//     }
// });


// const closeSubMenu = document.querySelectorAll(".sub-menu-container-title-right-link");
// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-garden").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-tools").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-living").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-plumbing").classList.add("none");
//     });
// });


// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-bathroom").classList.add("none");
//     });
// });
// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-lighting").classList.add("none");
//     });
// });
// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-elec-smart-home").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-hardware").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-electrical-appliances").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-kitchen").classList.add("none");
//     });
// });


// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-paint").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-flooring").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-building").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-animal-care").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-wood").classList.add("none");
//     });
// });

// closeSubMenu.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         e.preventDefault();
//         const subMenu = item.parentElement.parentElement.nextElementSibling;
//         document.querySelector(".sub-menu-energy").classList.add("none");
//     });
// });
// const smallLogin = document.querySelector(".login-small-ul");
// const smallLoginBtn = document.querySelector(".login-small-btn");
// smallLoginBtn.addEventListener("click", () => {
//     smallLogin.classList.toggle("none");
// });
// const smallPopUpFocus = document.getElementById("search-input-small");
// const smallPopUp = document.querySelector(".small-popup");
// const clsoeFocusedPop = document.getElementById("close-pop");
// smallPopUpFocus.addEventListener("focus", () => {
//     smallPopUp.classList.remove("none");
// });
// clsoeFocusedPop.addEventListener("click", () => {
//     smallPopUp.classList.add("none");
// });



// const loginSmallButton = document.querySelector(".login-small-btn");

// const loginSmallDropdown = document.querySelector(".login-small-ul");

// document.addEventListener("click", (e) => {
//     // Check if the click is outside the login button and dropdown
//     if (!loginSmallButton.contains(e.target) && !loginSmallDropdown.contains(e.target)) {
//         loginSmallDropdown.classList.add("none");
//         console.log("Closed dropdown");
//     }
// });







// const menuChildrenTest = document.getElementById("menu-children-test");
// const gardenLinks = [
//     { name: "أثاث الحديقة", className: "garden-hover" },
//     { name: "حمامات السباحة والجاكوزى", className: "garden-pools" },
//     { name: "العناية بالعشب", className: "garden-care" },
//     { name: "التشذيب والقطع والتقليم والتقطيع", className: "garden-trimming" },
//     { name: "تنظيف الحديقة", className: "garden-cleaning" },
//     { name: "قص العشب وإزالة الأعشاب الضارة", className: "garden-grass" },
//     { name: "الري والخراطيم وخزانات المياه", className: "garden-watering" },
//     { name: "مبانى الحدائق", className: "garden-building" },
//     { name: "السياج والحجب", className: "garden-fence" },
//     { name: "الشواء والطبخ في الهواء الطلق", className: "garden-cooking" },
//     { name: "ألعاب الحديقة", className: "garden-games" },
//     { name: "البيوت المحمية والتكاثر", className: "garden-houses" },
//     { name: "أدوات ومعدات الحدائق الأخرى", className: "garden-tools" },
//     { name: "الأرضيات والحدائق والأفنية", className: "garden-flooring" },
//     { name: "ديكورات الحدائق", className: "garden-decor" },
//     { name: "العناية بالنباتات", className: "garden-care-plants" },
//     { name: "الإضاءة الخارجية", className: "garden-lighting" },
//     { name: "أواني وأحواض زرع وأحواض مرتفعة", className: "garden-pots" },
//     { name: "زراعة التربة", className: "garden-soil" },
//     { name: "البذر والغرس والحصاد", className: "garden-seed" },
//     { name: "النباتات الخارجية", className: "garden-plants" },
//     { name: "النباتات الداخلية", className: "garden-indoor-plants" },
//     { name: "البذور والبصيلات", className: "garden-seeds" },
//     { name: "أشجار عيد الميلاد", className: "garden-christmas-trees" },
//     { name: "ملابس البستنة وملابس السلامة", className: "garden-clothes" },
//     { name: "إزالة الثلوج", className: "garden-snow-removal" },
// ];

// const htmlGarden = gardenLinks.map(item => `
//     <a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li> ${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
        
//     </a>
// `).join('');

// document.getElementById('garden-children').innerHTML = htmlGarden;


// const gardenClickBtn = document.getElementById("garden-click");
// const gardenSubMenu = document.querySelector(".garden-click-menu");
// const closeGardenSubMenuButton = document.getElementById("close-garden");
// gardenClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         gardenSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);
// });
// closeGardenSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         gardenSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);

// });



// const toolsLinks = [
//     { name: " أدوات كهربائية ", className: "tools-electrical" },
//     { name: " أدوات يدوية ", className: "tools-manual" },
//     { name: " أدوات متخصصة ", className: "tools-specialized" },
//     { name: "معدات الورشة والتخزين", className: "tools-workshop" },
//     { name: " آلات الورشة ", className: "tools-machines" },
//     { name: " معدات الرفع والوصول ", className: "tools-lifting" },
//     { name: " السلامة وملابس العمل ", className: "tools-safety" },
//     { name: " ملحقات الأدوات الكهربائية ", className: "tools-accessories" },
//     { name: " إكسسوارات السيارات ", className: "tools-car" },
//     { name: " العناية بالعشب ", className: "tools-grass" },
//     { name: " تنظيف الحديقة ", className: "tools-cleaning" },
// ];

// const htmltools = toolsLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('tools-children').innerHTML = htmltools;

// const toolsClickBtn = document.getElementById("tools-click");
// const toolsSubMenu = document.querySelector(".tools-click-menu");
// const closeToolsSubMenuButton = document.getElementById("close-tools");

// toolsClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         toolsSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeToolsSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         toolsSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });
// const livingLinks = [
//     { name: " أثاث غرفة الطعام ", className: "living-dining" },
//     { name: " أثاث غرفة المعيشة ", className: "living-living-room" },
//     { name: " الفراش ", className: "living-bed" },
//     { name: " أثاث غرفة النوم ", className: "living-bedroom" },
//     { name: " أثاث المكاتب ", className: "living-office" },
//     { name: " ديكور ", className: "living-decor" },
//     { name: " المفروشات الناعمة", className: "living-soft-furnishings" },
//     { name: " أثاث الممر ", className: "living-hallway" },
//     { name: " أثاث الأطفال ", className: "living-children" },
//     { name: " حضانة ", className: "living-nursery" },
//     { name: " أثاث الحمام ", className: "living-bathroom" },
//     { name: " خزائن المطبخ ", className: "living-kitchen-cabinets" },
// ]
// const htmlliving = livingLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('living-children').innerHTML = htmlliving;

// const livingClickBtn = document.getElementById("living-click");
// const livingSubMenu = document.querySelector(".living-click-menu");
// const closelivingSubMenuButton = document.getElementById("close-living");

// livingClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         livingSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closelivingSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         livingSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });

// const plumpingLinks = [
//     { name: " السخانات والمشعات الكهربائية ", className: "plumping-heaters" },
//     { name: " مشعات ", className: "plumping-radiators" },
//     { name: " مكيفات الهواء والمراوح ", className: "plumping-air-conditioners" },
//     { name: " المواقد والمدافئ ", className: "plumping-fireplaces" },
//     { name: " سخانات الفضاء ", className: "plumping-space-heaters" },
//     { name: " سخانات المياه ", className: "plumping-water-heaters" },
//     { name: " الغلايات ", className: "plumping-boilers" },
//     { name: " منظمات الحرارة ", className: "plumping-heat-regulators" },
//     { name: " أجهزة إزالة الرطوبة وأجهزة الترطيب ", className: "plumping-dehumidifiers" },
//     { name: " أنظمة المياه ", className: "plumping-water-systems" },
//     { name: " التخلص من مياه الصرف الصحي ", className: "plumping-sewage-disposal" },
//     { name: " صنابير الحمام والمطبخ ", className: "plumping-faucets" },
//     { name: " معالجة الهواء ", className: "plumping-air-treatment" },
//     { name: " معالجة المياه ", className: "plumping-water-treatment" },
//     { name: " تجهيزات الغاز ", className: "plumping-gas-fittings" },
//     { name: " مواد استهلاكية للسباكة ", className: "plumping-consumables" },
//     { name: " معدات طاقة الرياح والطاقة الشمسية ", className: "plumping-wind-solar-equipment" },
//     { name: " إكسسوارات الغسالة ", className: "plumping-washer-accessories" },
// ]
// const htmlplumping = plumpingLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('plumping-children').innerHTML = htmlplumping;

// const plumpingClickBtn = document.getElementById("plumping-click");
// const plumpingSubMenu = document.querySelector(".plumping-click-menu");
// const closePlumpingSubMenuButton = document.getElementById("close-plumping");

// plumpingClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         plumpingSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closePlumpingSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         plumpingSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });


// const bathroomLinks = [
//     { name: " الدشات والاكسسوارات ", className: "bathroom-showers" },
//     { name: " أثاث الحمام ", className: "bathroom-furniture" },
//     { name: " دورات المياه واكسسواراتها ", className: "bathroom-toilets" },
//     { name: " صنابير الحمام والمطبخ ", className: "bathroom-faucets" },
//     { name: " الحمامات والاكسسوارات ", className: "bathroom-baths" },
//     { name: " أحواض ", className: "bathroom-sinks" },
//     { name: " مرايا الحمامات وتركيباتها ", className: "bathroom-mirrors" },
//     { name: " إكسسورات الحمام ", className: "bathroom-accessories" },
//     { name: " الساونا ", className: "bathroom-sauna" },
//     { name: " البلاط ", className: "bathroom-tiles" },
// ]
// const htmlBathroom = bathroomLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('bathroom-children').innerHTML = htmlBathroom;

// const bathroomClickBtn = document.getElementById("bathroom-click");
// const bathroomSubMenu = document.querySelector(".bathroom-click-menu");
// const closeBathroomSubMenuButton = document.getElementById("close-bathroom");

// bathroomClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         bathroomSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeBathroomSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         bathroomSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });

// const lightingLinks = [
//     { name: " الإضاءة الداخلية ", className: "lighting-indoor" },
//     { name: " الإضاءة الخارجية ", className: "lighting-outdoor" },
//     { name: " المصابيح الكهربائية ", className: "lighting-electric" },
//     { name: " الإضاءة المحمولة ", className: "lighting-portable" },
// ]
// const htmlLighting = lightingLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('lighting-children').innerHTML = htmlLighting;

// const lightingClickBtn = document.getElementById("lighting-click");
// const lightingSubMenu = document.querySelector(".lighting-click-menu");
// const closeLightingSubMenuButton = document.getElementById("close-lighting");

// lightingClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         lightingSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeLightingSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         lightingSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });
// const electricityLinks = [
//     { name: " أنظمة المنزل وأنظمة الأمن ", className: "electricity-home" },
//     { name: " حماية الدائرة ", className: "electricity-circuit" },
//     { name: " المفاتيح والمقابس ", className: "electricity-switches" },
//     { name: " مزود الطاقة ", className: "electricity-power-supply" },
//     { name: " الكابلات وإدارة الكابلات ", className: "electricity-cables" },
//     { name: " معدات طاقة الرياح والطاقة الشمسية ", className: "electricity-wind-solar-equipment" },
//     { name: " عدادات المرافق ", className: "electricity-facility-meters" },
//     { name: " وحدات استهلاكية ذات تحميل مقسم ", className: "electricity-consumption-units" },
//     { name: " المصابيح الكهربائية ", className: "electricity-electric-lamps" },
// ]
// const htmlElectricityLinks = electricityLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('electricity-children').innerHTML = htmlElectricityLinks;

// const electricityClickBtn = document.getElementById("electricity-click");
// const electricitySubMenu = document.querySelector(".electricity-click-menu");
// const closeElectricitySubMenuButton = document.getElementById("close-electricity");

// electricityClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         electricitySubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeElectricitySubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         electricitySubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });


// const hardwareLinks = [
//     { name: " معدات الأبواب والنوافذ ", className: "hardware-doors" },
//     { name: " أدوات الأثاث ", className: "hardware-furniture" },
//     { name: " قطع غيار ", className: "hardware-spare-parts" },
//     { name: " معدات خارجية ", className: "hardware-outdoor" },
//     { name: " الأمن والأقفال ", className: "hardware-security" },
//     { name: " البراغي والمسامير وأدوات التثبيت ", className: "hardware-screws" },
//     { name: " أجزاء السلالم وأنظمة التخزين ", className: "hardware-stairs" },
//     { name: " التنظيف والعلاجات ", className: "hardware-cleaning" },
//     { name: " تقييد الحمل والرفع ", className: "hardware-lifting" },
//     { name: " التغليف واللوازم البريدية ", className: "hardware-packaging" },
// ]
// const htmlHardwareLinks = hardwareLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('hardware-children').innerHTML = htmlHardwareLinks;

// const hardwareClickBtn = document.getElementById("hardware-click");
// const hardwareSubMenu = document.querySelector(".hardware-click-menu");
// const closeHardwareSubMenuButton = document.getElementById("close-hardware");

// hardwareClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         hardwareSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeHardwareSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         hardwareSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });




// const electricalAppliancesLinks = [
//     { name: " الأجهزة الكهربائية الكبيرة ", className: "electrical-appliances-large" },
//     { name: " الأجهزة الكهربائية الصغيرة ", className: "electrical-appliances-small" },
//     { name: " صيانة المنزل ", className: "electrical-appliances-maintenance" },
// ]
// const htmlElectricalAppliancesLinks = electricalAppliancesLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}"  style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('electricalAppliances-children').innerHTML = htmlElectricalAppliancesLinks;

// const electricalAppliancesClickBtn = document.getElementById("ElectricalAppliances-click");
// const electricalAppliancesSubMenu = document.querySelector(".electricalAppliances-click-menu");
// const closeElectricalAppliancesSubMenuButton = document.getElementById("close-electricalAppliances");

// electricalAppliancesClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         electricalAppliancesSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeElectricalAppliancesSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         electricalAppliancesSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });


// const kitchenLinks = [
//     { name: " خزائن المطبخ ", className: "kitchen-cabinets" },
//     { name: " أحواض المطبخ والحنفيات ", className: "kitchen-sinks" },
//     { name: " أسطح المطبخ ", className: "kitchen-surfaces" },
//     { name: " إكسسورات المطبخ ", className: "kitchen-accessories" },
//     { name: " المطابخ المجهزة والمطابخ الصغيرة ", className: "kitchen-equipped" },
//     { name: "إكسسورات الغسالة ", className: "kitchen-washer-accessories" },
//     { name: " البلاط ", className: "kitchen-tiles" },
// ]
// const htmlKitchenLinks = kitchenLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('kitchen-children').innerHTML = htmlKitchenLinks;

// const kitchenClickBtn = document.getElementById("kitchen-click");
// const kitchenSubMenu = document.querySelector(".kitchen-click-menu");
// const closeKitchenSubMenuButton = document.getElementById("close-kitchen");

// kitchenClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         kitchenSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeKitchenSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         kitchenSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });



// const paintingLinks = [
//     { name: " دهانات داخلية ", className: "painting-inner" },
//     { name: " دهان خارجى ", className: "painting-outer" },
//     { name: " أدوات الرسم ", className: "painting-drawing" },
//     { name: " ورق الجدران وأغطية الجدران ", className: "painting-wallpaper" },
//     { name: " إعداد السطح  ", className: "painting-surface" },
//     { name: " التنظيف والعلاجات ", className: "painting-cleaning" },
//     { name: " أدوات ورق الجدران ", className: "painting-wallpaper-tools" },
//     { name: " القوالب ", className: "painting-molds" },
// ]
// const htmlPaintingLinks = paintingLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('painting-children').innerHTML = htmlPaintingLinks;

// const paintingClickBtn = document.getElementById("painting-click");
// const paintingSubMenu = document.querySelector(".painting-click-menu");
// const closepaintingSubMenuButton = document.getElementById("close-painting");

// paintingClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         paintingSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closepaintingSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         paintingSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });


// const tileLinks = [
//     { name: " البلاط ", className: "tile-tiles" },
//     { name: " أرضيات خشبية ", className: "tile-wooden-floors" },
//     { name: " بلاط وأرضيات الفينيل ", className: "tile-vinyl-floors" },
//     { name: " كسوة الجدران الداخلية وكتل الزجاج ", className: "tile-wall-covering" },
//     { name: " أدوات الديكور والأرضيات ", className: "tile-decor-tools" },
//     { name: " السجاد و أعشاب البحر ", className: "tile-carpets" },
//     { name: " الارضيات الخرسانية ", className: "tile-concrete-floors" },
//     { name: " لوحات الحائط ", className: "tile-wall-panels" },
//     { name: " الأرضيات والحدائق والأفنية ", className: "tile-flooring-gardens" },
// ]
// const htmlTileLinks = tileLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('tile-children').innerHTML = htmlTileLinks;

// const tileClickBtn = document.getElementById("tile-click");
// const tileSubMenu = document.querySelector(".tile-click-menu");
// const closeTileSubMenuButton = document.getElementById("close-tile");

// tileClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         tileSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeTileSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         tileSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });



// const matrialLinks = [
//     { name: " مواد البناء ", className: "matrial-building" },
//     { name: "  تسقيف و تصريف المياه ", className: "matrial-roofing" },
//     { name: " خشب التقطيع ", className: "matrial-cutting-wood" },
//     { name: " الصرف الصحي والقنوات ", className: "matrial-sewage" },
//     { name: " السلامة وملابس العمل ", className: "matrial-safety" },
//     { name: " إعداد السطح ", className: "matrial-surface" },
//     { name: " مناولة المواد والرفع والسلامة في الارتفاع ", className: "matrial-materials" },
// ]
// const htmlMatrialLinks = matrialLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('matrial-children').innerHTML = htmlMatrialLinks;

// const matrialClickBtn = document.getElementById("matrial-click");
// const matrialSubMenu = document.querySelector(".matrial-click-menu");
// const closeMatrialSubMenuButton = document.getElementById("close-matrial");

// matrialClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         matrialSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeMatrialSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         matrialSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });


// const animalLinks = [
//     { name: " الكلاب ", className: "animal-dogs" },
//     { name: " القطط ", className: "animal-cats" },
//     { name: " مستلزمات الزراعة ", className: "animal-farming" },
//     { name: " الحيوانات الأليفة الصغيرة ", className: "animal-small-pets" },
//     { name: " أحواض السمك وأحواض السمك ", className: "animal-fish-tanks" },
//     { name: " الطيور ", className: "animal-birds" },
//     { name: " مستلزمات الخيول ", className: "animal-horses" },
//     { name: " تربية النحل ", className: "animal-beekeeping" },
//     { name: " الزواحف ", className: "animal-reptiles" },
// ]
// const htmlAnimalLinks = animalLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('animal-children').innerHTML = htmlAnimalLinks;

// const animalClickBtn = document.getElementById("animal-click");
// const animalSubMenu = document.querySelector(".animal-click-menu");
// const closeAnimalSubMenuButton = document.getElementById("close-animal");

// animalClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         animalSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeAnimalSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         animalSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });




// const woodLinks = [
//     { name: " النوافذ والنوافذ الفرنسية ", className: "wood-windows" },
//     { name: " نوافذ وفتحات السقف من فيلوكس ", className: "wood-velux" },
//     { name: " الأبواب الأمامية والأبواب ", className: "wood-front-doors" },
//     { name: " أبواب داخلية وجدران فاصلة ", className: "wood-interior-doors" },
//     { name: " السلالم وبوابات السلالم ", className: "wood-stairs" },
//     { name: " أبواب المرآب ", className: "wood-garage-doors" },
//     { name: " التزجيج والاكسسوارات ", className: "wood-glazing" },
//     { name: " مواد الأخشاب والألواح ", className: "wood-wood-materials" },
//     { name: " إكسسوارات باب الفناء ", className: "wood-patio-door-accessories" },
// ]
// const htmlWoodLinks = woodLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('wood-children').innerHTML = htmlWoodLinks;

// const woodClickBtn = document.getElementById("wood-click");
// const woodSubMenu = document.querySelector(".wood-click-menu");
// const closeWoodSubMenuButton = document.getElementById("close-wood");

// woodClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         woodSubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });

// closeWoodSubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         woodSubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });
// // edit here

// const energyLinks = [
//     { name: " مشعات عالية الكفاءة ", className: "energy-efficient-radiators" },
//     { name: " التدفئة باستخدام الحطب ", className: "wood-heating" },
//     { name: " عزل المنزل ", className: "home-insulation" },
//     { name: " تهوية ", className: "ventilation" },
//     { name: " التحكم في التدفئة ", className: "heating-control" },
//     { name: " طاقة شمسية ", className: "solar-energy" },
//     { name: " العلاج الحراري الجوي ", className: "air-heat-treatment" },
// ]
// const htmlEnergyLinks = energyLinks.map(item =>
//     `<a href="" class="flex li-link" id="${item.className}" style="color: #31427B">
//         <li>${item.name}</li>
//         <i class="fa-solid fa-chevron-left"></i>
//     </a>`
// ).join('');

// document.getElementById('energy-children').innerHTML = htmlEnergyLinks;

// const energyClickBtn = document.getElementById("energy-click");
// const energySubMenu = document.querySelector(".energy-click-menu");
// const closeEnergySubMenuButton = document.getElementById("close-energy");

// energyClickBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         energySubMenu.classList.remove("none");
//         menuChildrenTest.style.display = "none";
//     }, 100);

// });
// closeEnergySubMenuButton.addEventListener("click", () => {
//     setTimeout(() => {
//         energySubMenu.classList.add("none");
//         menuChildrenTest.style.display = "block";
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.remove("move");
//         closeSubMenuAll.classList.add("stable");
//     }, 100);
// });
// const gardenHover = document.getElementById("garden-hover");
// gardenHover.addEventListener('mouseenter', (e) => {
//     e.preventDefault();
//     gardenHoverSub.classList.remove("none");
//     closeSubMenuAll.classList.remove("stable");
//     closeSubMenuAll.classList.add("move");
// });
// gardenLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// // Edit Here
// toolsLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// livingLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// plumpingLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// bathroomLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// lightingLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// electricityLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// hardwareLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// electricalAppliancesLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// kitchenLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// paintingLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// tileLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// matrialLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// animalLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// woodLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// energyLinks.map(item => {
//     document.getElementById(`${item.className}`).addEventListener('click', (e) => {
//         e.preventDefault();
//     });
// });
// document.addEventListener("click", (e) => {
//     if (!document.querySelector(".menu-container").contains(e.target)) {
//         gardenHoverSub.classList.add("none");
//         closeSubMenuAll.classList.add("stable");
//         closeSubMenuAll.classList.remove("move");
//     }
// });

























// const linksGarden = [
//     {
//         name: "أثاث خارجى ",
//     }
// ]

// document.addEventListener("DOMContentLoaded", function () {
//     // Data array where each index corresponds to the content for a specific button
//     const contentArray = {
//         // Garden And OutDoor Sub Menu
//         "garden-hover": `
//         <div class="garden-hover-sub-content">
//             <h2>أثاث الحديقة</h2>
//             <div class="garden-hover-sub-content-links">
//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>أثاث خارجي</li>
//                 </a>

//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>مظلات و شرفات</li>
//                 </a>

//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>المظلات</li>
//                 </a>

//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>الأراجيح ومقاعد الأرجوحة</li>
//                 </a>

//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>مراوح الضباب الخارجية</li>
//                 </a>

//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>مقاعد الحديقة والكراسي والحانات</li>
//                 </a>

//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>كراسي التشمس وكراسي الاستلقاء للتشمس</li>
//                 </a>

//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>أغطية أثاث الحدائق</li>
//                 </a>

//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>وسائد ومقاعد الحديقة</li>
//                 </a>

//                 <a href="#" class="flex li-link" style="color: #31427b;">
//                     <li>التدفئة الخارجية</li>
//                 </a>
//             </div>
//         </div>

//         `,
//         "garden-pools": `
//         <div class="garden-hover-sub-content">
//             <h2> حمامات السباحة والجاكوزى </h2>
//             <div class="garden-hover-sub-content-links">
//                 <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>حمامات السباحة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أحواض المياه الساخنة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مضخات وفلاتر حمامات السباحة والجاكوزي</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>معدات تنظيف حمامات السباحة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>معدات حمام السباحة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات حوض الاستحمام الساخن</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>صيانة حمامات السباحة والجاكوزي</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>تدفئة حمام السباحة وحوض الاستحمام الساخن</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الاستحمام في الهواء الطلق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>السلامة والأمان في حمام السباحة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أجزاء حمام السباحة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>العاب حمام السباحة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>اصلاح حمامات السباحة</li>
// </a>

//             </div>
//         </div>
//         `,
//         "garden-care": `
//             <div class="garden-hover-sub-content">
//                 <h2> العناية بالعشب </h2>
//                 <div class="garden-hover-sub-content-links">
// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>جزازات العشب</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>المقلمون</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>المخدشات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أدوات العناية بالعشب</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>زيوت التشحيم والزيوت</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-trimming": `
//             <div class="garden-hover-sub-content">
//     <h2>التشذيب والقطع والتقليم والتقطيع</h2>
//     <div class="garden-hover-sub-content-links">
//         <a href="#" class="flex li-link" style="color: #31427b;">
//             <li>مناشير كهربائية</li>
//         </a>

//         <a href="#" class="flex li-link" style="color: #31427b;">
//             <li>مقصات التقليم</li>
//         </a>

//         <a href="#" class="flex li-link" style="color: #31427b;">
//             <li>مقصات التحوط</li>
//         </a>

//         <a href="#" class="flex li-link" style="color: #31427b;">
//             <li>آلات تقطيع الحدائق</li>
//         </a>

//         <a href="#" class="flex li-link" style="color: #31427b;">
//             <li>أدوات التقليم</li>
//         </a>

//         <a href="#" class="flex li-link" style="color: #31427b;">
//             <li>قاطعات جذوع الأشجار</li>
//         </a>

//         <a href="#" class="flex li-link" style="color: #31427b;">
//             <li>أدوات قطع وتقسيم جذوع الأشجار</li>
//         </a>

//         <a href="#" class="flex li-link" style="color: #31427b;">
//             <li>مناشير وشفرات جذوع الأشجار</li>
//         </a>
//     </div>
// </div>

//         `,
//         "garden-cleaning": `
//             <div class="garden-hover-sub-content">
//                 <h2> تنظيف الحديقة</h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="#" class="flex li-link" style="color: #31427b;">
//                         <li>غسالات الضغط</li>
//                     </a>
//                     <a href="#" class="flex li-link" style="color: #31427b;">
//                         <li>منفاخات الأوراق والمكانس الكهربائية للحديقة</li>
//                     </a>

//                     <a href="#" class="flex li-link" style="color: #31427b;">
//                         <li>معدات الحدائق</li>
//                     </a>

//                     <a href="#" class="flex li-link" style="color: #31427b;">
//                         <li>سلالم</li>
//                     </a>
//                 </div>
//             </div>
//         `,
//         "garden-grass": `
//             <div class="garden-hover-sub-content">
//                 <h2> قص العشب وإزالة الأعشاب الضارة </h2>
//                 <div class="garden-hover-sub-content-links">
//                         <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>آلات قص الحشائش</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>حارقات الحشائش</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أدوات إزالة الأعشاب الضارة</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-watering": `
//             <div class="garden-hover-sub-content">
//                 <h2> الري والخراطيم وخزانات المياه </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مضخات المياه</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>خراطيم الحدائق والبكرات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أنظمة حصاد مياه الأمطار</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أنظمة الري بالتنقيط</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>موصلات الخراطيم وصنابير الحدائق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الرشاشات وبنادق الرش والرماح</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أنظمة الري تحت الأرض</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>علب الري والرشاشات</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-building": `
//             <div class="garden-hover-sub-content">
//                 <h2> مبانى الحدائق  </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>حظائر الحدائق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>تخزين الحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>القماش المشمع</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>ملاجئ السيارات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>ملاجئ الشواء</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>صناديق القمامة وصناديق التخزين ذات العجلات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>حبال الغسيل والتجفيف الخارجية</li>
// </a>

// </div>
//             </div>
//         `,
//         "garden-fence": `
//             <div class="garden-hover-sub-content">
//                 <h2> السياج والحواجز </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الفحص</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>سياج</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>سياج الأسلاك</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>بوابات الحدائق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>بوابات كهربائية</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-cooking": `
//             <div class="garden-hover-sub-content">
//                 <h2> الشواء والطبخ في الهواء الطلق </h2>
//                 <div class="garden-hover-sub-content-links">
// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الشواء</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>شوايات بلانشا</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أفران البيتزا وأفران الخبز وملحقاتها</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>إكسسوارات الشواء والشواية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>وقود</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مواقد التخييم وملحقاتها</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مقالي البايلا</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>قوارير الغاز</li>
// </a>

//                 </div>
//             </div>                 
//         `,
//         "garden-games": `
//             <div class="garden-hover-sub-content">
//                 <h2> العاب الحديقة </h2>
//                 <div class="garden-hover-sub-content-links">
//                         <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الترامبولين</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أراجيح وإطارات تسلق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>بيوت اللعب والقلاع المطاطية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الألعاب الخارجية والترفيهية</li>
// </a>
//                 </div>
//             </div>
//         `,
//         "garden-houses": `
//             <div class="garden-hover-sub-content">
//                 <h2> البيوت المحمية والتكاثر </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>البيوت البلاستيكية والصوب الزراعية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الزراعة الداخلية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>التسميد</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مقاعد الزرع</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-tools": `
//             <div class="garden-hover-sub-content">
//                 <h2> أدوات ومعدات الحدائق الأخرى </h2>
//                 <div class="garden-hover-sub-content-links">
// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>العناية بالمحرك والمحرك</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>عربات اليد والعربات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>صيانة آلات الحدائق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>طارد الحيوانات والحشرات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أدوات وإكسسوارات متعددة للحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مجموعة أدوات كهربائية للحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>عربات يدوية آلية وملحقاتها</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>صيانة أدوات الحديقة وملحقاتها</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أدوات البستنة للأطفال</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أدوات يدوية أخرى للحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الجرارات المدمجة وملحقاتها</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-flooring": `
//             <div class="garden-hover-sub-content">
//                 <h2> الأرضيات والحدائق والأفنية </h2>
//                 <div class="garden-hover-sub-content-links">
//                             <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>إنشاء الأرضيات والحدائق والممرات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>تركيب الأرضيات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>رصف الحدائق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الرمل والحصى والحصى الزخرفية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>درابزينات وسور الحدائق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>المسارات والحواف</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>العشب العشبي</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أدوات التبليط</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-decor": `
//             <div class="garden-hover-sub-content">
//                 <h2> ديكورات الحدائق </h2>
//                 <div class="garden-hover-sub-content-links">
// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>برك الحدائق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>السجاد الخارجي</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>ميزات المياه في الحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أقواس الحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>تماثيل الحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>زينة الحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>جسور الحدائق</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>دوارات الطقس</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أجراس الحديقة والطرقات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مرايا الحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الساعات الشمسية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>آبار الحديقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أجراس الرياح</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-care-plants": `
//             <div class="garden-hover-sub-content">
//                 <h2> العناية بالنباتات </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>العناية بالنباتات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>السماد والغطاء النباتي والصرف</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>وقاية النبات</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>سماد</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-lighting": `
//             <div class="garden-hover-sub-content">
//                 <h2> الإضاءة الخارجية </h2>
//                 <div class="garden-hover-sub-content-links">
// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أضواء الأمن</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>الإضاءة الشمسية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أضواء كاشفة خارجية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مصابيح حائط خارجية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>ديكورات اضاءة خارجية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أضواء الأعمدة والأعمدة المعلقة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مصابيح أرضية خارجية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مصابيح خارجية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أضواء الحاجز</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مصابيح معلقة خارجية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أضواء خارجية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مصابيح غسالة الحائط</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أضواء السقف الخارجية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>مراوح سقف خارجية</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>إضاءة حمام السباحة وحوض الاستحمام الساخن والبركة</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>أضواء الشوارع</li>
// </a>

// <a href="#" class="flex li-link" style="color: #31427b;">
//     <li>إكسسوارات الإضاءة الخارجية</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-pots": `
//             <div class="garden-hover-sub-content">
//                 <h2> أواني وأحواض زرع وأحواض مرتفعة </h2>
//                 <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الأواني</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>إكسسوارات الأواني والأحواض والأحواض المرتفعة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أواني النباتات الداخلية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أسرة مرتفعة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أكياس الزراعة</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-soil": `
//             <div class="garden-hover-sub-content">
//                 <h2> زراعة التربة </h2>
//                 <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المزارعون</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات الحفر والزراعة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المحاريث والملحقات</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-seed": `
//             <div class="garden-hover-sub-content">
//                 <h2> البذر والغرس والحصاد </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مثقاب حفر العمود</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>حصاد</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مستلزمات التكاثر</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات الزراعة</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-plants": `
//             <div class="garden-hover-sub-content">
//                 <h2> النباتات الخارجية </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>العشب العشبي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الشجيرات والأشجار</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أشجار الفاكهة والشجيرات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>النباتات المتسلقة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>النباتات المعمرة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>النباتات النباتية والأعشاب</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>النباتات المتوسطية</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-indoor-plants": `
//             <div class="garden-hover-sub-content">
//                 <h2> النباتات الداخلية </h2>
//                 <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>نباتات الدفيئة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الزهور والنباتات الاصطناعية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>نباتات عصارية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الجدران الخضراء</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أشجار البونساي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الفن الزهري</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-seeds": `
//             <div class="garden-hover-sub-content">
//                 <h2> البذور والبصيلات </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>بذور</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المصابيح</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-christmas-trees": `
//             <div class="garden-hover-sub-content">
//                 <h2> أشجار عيد الميلاد </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أشجار عيد الميلاد الاصطناعية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>إكسسوارات شجرة عيد الميلاد</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-clothes": `
//             <div class="garden-hover-sub-content">
//                 <h2> ملابس البستنة وملابس السلامة </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملابس البستنة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>محطات الطقس ومقاييس الحرارة ومقاييس الأمطار</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ركائز ومقاعد الحديقة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الأحذية والإكسسوارات</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "garden-snow-removal": `

//             <div class="garden-hover-sub-content">
//                 <h2> إزالة الثلوج  </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مجارف الثلج</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>منفاخات الثلج الكهربائية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>منفاخات الثلج التي تعمل بالبنزين</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>شفرات جرافة الثلوج</li>
// </a>

//                 </div>
//             </div>
//         `,
//         // Tools Sub Menu
//         "tools-electrical": `
//             <div class="garden-hover-sub-content">
//                 <h2> أدوات كهربائية </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>التدريبات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مناشير كهربائية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>آلات الصنفرة والتلميع</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مطاحن الزوايا ومطارق الجدران</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مجموعة أدوات كهربائية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مفكات ومفاتيح التأثير</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات كهربائية للنجارة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مسدسات الدبابيس والمسامير والمسامير البرشامية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات وإكسسوارات متعددة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المقشطات الكهربائية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أجهزة رش الطلاء وكابينات الطلاء</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>خلاطات مجداف ومجاديف خلط</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>النقاشات والأدوات الدقيقة والملحقات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مسدسات حرارية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مسدسات الغراء</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>راديوهات الموقع</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أجهزة اللاسلكي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات التوسعة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>بطاريات الأدوات الكهربائية</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "tools-manual": `
//             <div class="garden-hover-sub-content">
//                 <h2> أدوات يدوية </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>قواطع البراغي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>فكي قاطع البراغي البديل</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مفكات البراغي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المطارق والمدقات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الدباسات اليدوية وملحقاتها</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>اللكمات والأزاميل</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مفاتيح الربط والمقابس</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات التشطيب</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المناشير اليدوية وشفرات المنشار</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مجموعة أدوات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات الخيط</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>القياس والترميز</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مستويات الليزر والقياس والكشف</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات التطبيق</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>كماشة وقاطع</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات القطع</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "tools-specialized": `
//             <div class="garden-hover-sub-content">
//                 <h2> أدوات متخصصة </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات الميكانيكا</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>اللحام بالقوس</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>اللحام والقطع بالغاز</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>لحام MIG</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>لحام TIG</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>لحام نقطي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات التبليط</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات السباكة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>خلاطات الأسمنت ومعدات البناء</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات كهربائية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات الجبس</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>اللحام واللحام</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات يدوية للنجارة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات التزجيج</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات التسقيف</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات متخصصة أخرى</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الضغط</li>
// </a>


//                 </div>
//             </div>
//         `,
//         "tools-workshop": `
//             <div class="garden-hover-sub-content">
//                 <h2> معدات الورشة والتخزين </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أثاث وإكسسوارات الورشة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>تخزين الورشة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>استخراج الغبار</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>تخزين الأدوات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>معدات مناولة المواد</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المولدات واكسسواراتها</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>معدات التنظيف</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>حالات الأدوات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملقطات و ملقطات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>بكرات الكابلات وأسلاك التمديد</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "tools-machines": `
//             <div class="garden-hover-sub-content">
//                 <h2> آلات الورشة </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ضواغط وأدوات هوائية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مناشير الطاولة والمقعد</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات المقشط وقياس سمك المقشط</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مطاحن وحجر شحذ</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مثقاب العمود وملحقاته</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المثاقب المغناطيسية وملحقاتها</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المخرطات وملحقاتها</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>قوالب المغزل والملحقات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الطابعات ثلاثية الأبعاد وملحقاتها</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات الحفر والملحقات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مناشير قطع المعادن الدوارة وقاطعات الأقراص</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مجلدات الصفائح المعدنية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>صنفرة الحزام والأقراص</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>صنفرة الحزام</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>محركات كهربائية لآلات الورشة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>آلات النجارة المركبة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>آلات الورشة الأخرى</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "tools-lifting": `
//             <div class="garden-hover-sub-content">
//                 <h2> معدات الرفع والوصول </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>معدات الرفع</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>سلالم</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أبراج السقالات ومنصات العمل</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>حوامل المحور</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "tools-safety": `
//         <div class="garden-hover-sub-content">
//                 <h2> السلامة وملابس العمل </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أحذية السلامة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملابس العمل</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أقنعة الغبار وأجهزة التنفس</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الخوذات الصلبة وحماية الأذن</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>واقيات الوجه وحماية العين</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>قفازات واقية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>معدات الحماية من السقوط</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>معدات الاسعافات الاولية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>مكبرات الصوت</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "tools-accessories": `
//         <div class="garden-hover-sub-content">
//                 <h2> ملحقات الأدوات الكهربائية </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات الحفر</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات المطحنة الزاوية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>إكسسوارات الصنفرة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات المنشار الدائري</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات جهاز التوجيه</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات الحفر SDS</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات مسدسات المسامير والدبابيس</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات المنشار الترددي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات الأدوات المتعددة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات البراغي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات المقشط الكهربائي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>إكسسوارات المنشار</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات الحفر الأساسية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات طاولة التوجيه</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>إكسسوارات مسدس الغراء</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>فرشاه</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات مفتاح التأثير</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات القضم الكهربائي</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات الهاتف المتينة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>فرش الكربون</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات ومستلزمات أخرى للأدوات الكهربائية</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "tools-car": `
//         <div class="garden-hover-sub-content">
//                 <h2> إكسسوارات السيارات </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>قطع غيار السيارات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>صيانة السيارة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الزيوت ومواد التشحيم والسوائل</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات الميكانيكا</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المقطورات والملحقات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>إكسسوارات خارجية للسيارة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>ملحقات ورشة السيارات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أنظمة كهرباء السيارات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>محطات شحن السيارات الكهربائية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>السفر والنقل</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الأعطال والإسعافات الأولية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>إكسسوارات داخلية للسيارة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>حماية الشتاء</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "tools-grass": `
//         <div class="garden-hover-sub-content">
//                 <h2> العناية بالعشب </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>جزازات العشب</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المقلمون</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>المخدشات</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أدوات العناية بالعشب</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>زيوت التشحيم والزيوت</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "tools-cleaning": `
//         <div class="garden-hover-sub-content">
//                 <h2> تنظيف الحديقة </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>غسالات الضغط</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>منفاخات الأوراق والمكانس الكهربائية للحديقة</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>معدات الحدائق</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>سلالم</li>
// </a>

//                 </div>
//             </div>
//         `,
//         //  Living Sub Menu
//         "living-dining": `
//         <div class="garden-hover-sub-content">
//                 <h2> أثاث غرفة الطعام </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>طاولات الطعام</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>الكراسي والمقاعد والمقاعد</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>طاولات طعام</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>طاولات مرتفعة وطاولات بار</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>وحدات البوفيه والخزائن الجانبية</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>خزائن المطبخ</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>اطقم غرفة الطعام</li>
// </a>

// <a href="/" class="flex li-link" style="color: #31427b;">
//     <li>أسطح الطاولات</li>
// </a>

//                 </div>
//             </div>
//         `,
//         "living-living-room": `
//                 <div class="garden-hover-sub-content">
//                     <h2> أثاث غرفة المعيشة </h2>
//                     <div class="garden-hover-sub-content-links">
//                         <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاولات الطعام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الأرائك</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>كراسي استرخاء</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>كراسي بذراعين</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاولات القهوة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حوامل التلفزيون</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مكتبات ورفوف وخزائن</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاولات جانبية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مقاعد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات غرفة المعيشة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات تخزين السجلات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المقاعد والكراسي</li>
//     </a>
//                     </div>
//                 </div>
//         `,
//         "living-bed": `
//             <div class="garden-hover-sub-content">
//                 <h2> الفراش </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المراتب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>قواعد السرير</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أطقم السرير والمراتب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أغطية المراتب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أطقم السرير</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "living-bedroom": `
//             <div class="garden-hover-sub-content">
//                 <h2> أثاث غرفة النوم </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أسرة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنظمة تخزين خزانة الملابس</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات خزانة الملابس</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صناديق الأدراج</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>خزائن الملابس</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاولات الزينة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>خزائن المجوهرات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مقاعد غرفة النوم</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>لوحات الرأس ووحدات السرير العلوية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاولات بجانب السرير</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>شيفونييرز</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مقاعد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات أثاث غرف النوم</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "living-office": `
//             <div class="garden-hover-sub-content">
//                 <h2> أثاث المكاتب </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مكاتب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>كراسي المكتب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات المكتب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>منظمات المكتب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>خزائن الملفات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "living-decor": `
//             <div class="garden-hover-sub-content">
//                 <h2> الديكور </h2>
//                 <div class="garden-hover-sub-content-links">
//                      <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>السجاد ومفارش الأبواب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>العناصر الزخرفية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ديكورات حائط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المرايا</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تخزين صغير</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الزهور والنباتات الاصطناعية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الملصقات والأفلام اللاصقة الذاتية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>زينة عيد الميلاد</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "living-soft-furnishings": `
//             <div class="garden-hover-sub-content">
//                 <h2> المفروشات الناعمة </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مناشف الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أطقم السرير</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الوسائد وأغطية الوسائد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الستائر والاكسسوارات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>البطانيات والأغطية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الستائر</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مفارش المائدة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مفروشات الاطفال</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "living-hallway": `
//             <div class="garden-hover-sub-content">
//                 <h2> أثاث الممر </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تخزين الأحذية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاولات الكونسول</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تخزين الممرات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حاملات المظلات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات الممرات</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "living-children": `
//             <div class="garden-hover-sub-content">
//                 <h2> أثاث الأطفال </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أسرة الأطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تخزين الاطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>كراسي الاطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاولات الاطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مكاتب الاطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاولات زينة للاطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ديكورات الاطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>غرف نوم اطفال</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "living-nursery": `
//             <div class="garden-hover-sub-content">
//                 <h2>  حضانة  </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أسرة أطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات تغيير حفاضات الأطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>كراسي مرتفعة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حمامات الاطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أبراج التعلم</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>العاب اطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات أثاث الحضانة</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "living-bathroom": `
//             <div class="garden-hover-sub-content">
//                 <h2>  أثاث الحمام  </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات حوض الغرور</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات الغرور</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تخزين الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات الغرور في غرفة المعاطف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات أثاث الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أسطح عمل الحمام</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "living-kitchen-cabinets": `
//             <div class="garden-hover-sub-content">
//                 <h2>  خزائن المطبخ  </h2>
//                 <div class="garden-hover-sub-content-links">
//                     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات المطبخ</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ألواح وتشطيبات المطبخ</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         // Plumping Sub Menu
//         "plumping-heaters": `
//             <div class="garden-hover-sub-content">
//                 <h2> السخانات والمشعات الكهربائية </h2>
//                 <div class="garden-hover-sub-content-links">
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الغلايات الكهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>السخانات والمشعات الكهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ترموستات السخان الكهربائي والرادياتير</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مناشف كهربائية ومزدوجة الوقود</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مضخات الحرارة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>سخانات المروحة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنظمة التدفئة تحت الأرضية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>التدفئة الخارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات مكيفات الهواء المنفصلة ومضخات الحرارة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات السخان الكهربائي والرادياتير</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تدفئة السقف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تجهيزات التدفئة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ملحقات الترموستات والمبرمج</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مراوح سقف داخلية</li>
//     </a>
//                 </div>
//             </div>
//         `,
//         "plumping-radiators": `
//     <div class="garden-hover-sub-content">
//   <h2> مشعات </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>السخانات والمشعات الكهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>مشعات التدفئة المركزية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>مشعات المناشف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>ملحقات مبرد المنشفة</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-air-conditioners": `
//     <div class="garden-hover-sub-content">
//   <h2> مكيفات الهواء والمراوح </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مكيفات الهواء</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مكيف هواء محمول</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المشجعين</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-fireplaces": `
//     <div class="garden-hover-sub-content">
//   <h2> المواقد والمدافئ </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>مواقد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>المواقد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>أنظمة المداخن والمداخن</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>وقود</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>معدات المدفأة والموقد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>تخزين الحطب</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-space-heaters": `
//     <div class="garden-hover-sub-content">
//   <h2> سخانات الفضاء </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>سخانات المروحة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>سخانات البارافين</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>سخانات صناعية</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-water-heaters": `
//     <div class="garden-hover-sub-content">
//   <h2> سخانات المياه </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>سخانات المياه الكهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>سخانات المياه بالغاز</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>سخانات المياه بالطاقة الشمسية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>تركيب سخان الماء</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>ملحقات سخان المياه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>الغلايات</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-boilers": `
//     <div class="garden-hover-sub-content">
//   <h2> الغلايات </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>الغلايات الكهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>غلايات تعمل بالغاز</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>غلايات النفط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>معدات التدفئة المركزية</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-heat-regulators": `
//     <div class="garden-hover-sub-content">
//   <h2> منظمات الحرارة </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ترموستات الغلايات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ترموستات السخان الكهربائي والرادياتير</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>خلاطات الحنفيات الحرارية</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-dehumidifiers": `
//     <div class="garden-hover-sub-content">
//   <h2> أجهزة إزالة الرطوبة وأجهزة الترطيب </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>موزعات الزيوت العطرية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أجهزة إزالة الرطوبة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مرطبات الجو</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-water-systems": `
//     <div class="garden-hover-sub-content">
//   <h2> أنظمة المياه </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الأنابيب والتجهيزات متعددة الطبقات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنابيب وتجهيزات PEX</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تجهيزات البولي إيثيلين</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنابيب النحاس والتجهيزات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الأنابيب والتجهيزات النحاسية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الفولاذ المجلفن</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>محولات الخيوط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>التحكم في ضغط المياه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>عدادات المياه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>دعامات الأنابيب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>منتجات العزل المائي</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>عزل الأنابيب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مشعبات السباكة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صمامات الإيقاف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ملاكمة الانابيب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>خراطيم مرنة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الطاقة الشمسية</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-sewage-disposal": `
//     <div class="garden-hover-sub-content">
//   <h2> التخلص من مياه الصرف الصحي </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صرف مغسلة المطبخ</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصائد الغسالة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>نفايات الاستحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>نفايات الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصارف الحوض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>نفايات البيديه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>نفايات البول</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>موصلات المقلاة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>بولي فينيل كلوريد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>نظام تدفق المرحاض</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-faucets": `
//     <div class="garden-hover-sub-content">
//   <h2> صنابير الحمام والمطبخ </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>صنابير الحوض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>صنابير الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>صمامات الدش</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>صمامات الدش المخفية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>حنفيات حوض غرفة المعاطف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>صمامات عزل المرحاض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>صنابير البيديه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>ضوابط تدفق البول</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>صنابير الغسالة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>قطع غيار الصنبور</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>صنابير تجارية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>تثبيت الصنبور على الحائط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>صنابير المطبخ</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>ملحقات الصنبور الأخرى</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-air-treatment": `
//     <div class="garden-hover-sub-content">
//   <h2> معالجة الهواء </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنظمة MEV</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مراوح شفط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مراوح شفط MEV</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>قنوات MEV</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>شبكات داخلية وخارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أجهزة تنقية الهواء</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات ملحقات التهوية بالاستخراج الميكانيكي</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ملحقات التهوية بالاستخراج الميكانيكي</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-water-treatment": `
//     <div class="garden-hover-sub-content">
//   <h2> معالجة المياه </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مُليّنات المياه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الفلاتر والمواد الاستهلاكية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أجهزة تنقية المياه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إمدادات تنقية المياه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>لوازم فلتر المياه</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-gas-fittings": `
//     <div class="garden-hover-sub-content">
//   <h2> تجهيزات الغاز </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>قوارير الغاز</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تجهيزات اسطوانات الغاز</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>منظمات الغاز</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>خراطيم الغاز</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صمامات الغاز اللولبية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>غسالات الغاز</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-consumables": `
//     <div class="garden-hover-sub-content">
//   <h2> مواد استهلاكية للسباكة </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أدوات السباكة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>اللحام واللحام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مانعات التسرب ومركبات السباكة</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-wind-solar-equipment": `
//     <div class="garden-hover-sub-content">
//   <h2> معدات طاقة الرياح والطاقة الشمسية </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>توزيع الطاقة الشمسية وطاقة الرياح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الألواح الشمسية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات الطاقة الشمسية خارج الشبكة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ملحقات الألواح الشمسية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات الطاقة الشمسية المرتبطة بالشبكة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاقة الرياح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>محولات الطاقة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنظمة الرياح والطاقة الشمسية الهجينة</li>
//     </a>
//   </div>
// </div>
//         `,
//         "plumping-washer-accessories": `
//     <div class="garden-hover-sub-content">
//   <h2> إكسسوارات الغسالة </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير الغسالة</li>
//     </a>
//   </div>
// </div>
//         `,
//         // Bathroom Sub Menu
//         "bathroom-showers": `
//         <div class="garden-hover-sub-content">
//             <h2> الدشات والاكسسوارات </h2>
//             <div class="garden-hover-sub-content-links">
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>حوض الاستحمام</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>أبواب وشاشات الاستحمام</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>أطقم الاستحمام</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>أحواض الاستحمام</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>نفايات الاستحمام</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>قضبان الدش ورؤوس الدش وتجهيزات الدش</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>إكسسوارات الدش</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>لوحات الحمام والدش</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>حوامل منزلقة الدش</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>صمامات الدش</li>
//                 </a>
//                 <a href="/" class="flex li-link" style="color: #31427b;">
//                     <li>صمامات الدش المخفية</li>
//                 </a>
//             </div>
//         </div>
//         `,
//         "bathroom-furniture": `
//   <div class="garden-hover-sub-content">
//   <h2> أثاث الحمام </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>وحدات حوض الغرور</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>وحدات الغرور</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>تخزين الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>وحدات الغرور في غرفة المعاطف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>مجموعات أثاث الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li>أسطح عمل الحمام</li>
//     </a>
//   </div>
// </div>
//         `,
//         "bathroom-toilets": `
//   <div class="garden-hover-sub-content">
//   <h2> دورات المياه واكسسواراتها </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مراحيض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>بيديه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مقاعد المراحيض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>نفايات البول</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>موصلات المقلاة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طقم مرحاض وبيديه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>نظام تدفق المرحاض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>آلات التقطيع ومضخات النفايات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات المرحاض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>غسالات وأختام المراحيض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تثبيتات المرحاض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صمامات عزل المرحاض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ضوابط تدفق البول</li>
//     </a>
//   </div>
// </div>
//         `,
//         "bathroom-faucets": `
//   <div class="garden-hover-sub-content">
//   <h2> صنابير الحمام والمطبخ </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير الحوض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صمامات الدش</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صمامات الدش المخفية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حنفيات حوض غرفة المعاطف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صمامات عزل المرحاض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير البيديه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ضوابط تدفق البول</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير الغسالة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>قطع غيار الصنبور</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير تجارية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تثبيت الصنبور على الحائط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير المطبخ</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ملحقات الصنبور الأخرى</li>
//     </a>
//   </div>
// </div>
//         `,
//         "bathroom-baths": `
//   <div class="garden-hover-sub-content">
//   <h2> الحمامات والاكسسوارات </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>نفايات الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الحمامات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حمامات الاطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حمامات الزاوية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حمامات مستقلة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المشي في الحمامات وحمامات الاستحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>شاشات الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>لوحات الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حاملات المناشف وخطافات المناشف</li>
//     </a>
//   </div>
// </div>
//         `,
//         "bathroom-sinks": `
//   <div class="garden-hover-sub-content">
//   <h2> أحواض </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أحواض سطح العمل</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أحواض مدمجة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أحواض غرف المعاطف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أحواض الغسيل</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصارف الحوض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>نفايات البيديه</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الأحواض التجارية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير الحوض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حنفيات حوض غرفة المعاطف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صنابير البيديه</li>
//     </a>
//   </div>
// </div>
//         `,
//         "bathroom-mirrors": `
//   <div class="garden-hover-sub-content">
//   <h2> مرايا الحمامات وتركيباتها </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مرايا الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مرايا الحمام LED</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المرايا المكبرة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات المرآة</li>
//     </a>
//   </div>
// </div>
//         `,
//         "bathroom-accessories": `
//   <div class="garden-hover-sub-content">
//   <h2> إكسسوارات الحمام </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إضاءة الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>منشر الملابس</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>موزعات الصابون وأطباق الصابون وحاملات الأكواب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>سلال الغسيل</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مساعدات الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>سجادات الحمام وألواح البط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>قضبان الدش والستائر والحلقات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجففات اليد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مراوح شفط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حاملات المناشف وخطافات المناشف</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صناديق الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>موازين الحمام</li>
//     </a>
//   </div>
// </div>
//         `,
//         "bathroom-sauna": `
//   <div class="garden-hover-sub-content">
//   <h2> الساونا </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ساونا الأشعة تحت الحمراء</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات الساونا</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الساونا التقليدية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>سخانات الساونا</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>زيوت و روائح الساونا</li>
//     </a>
//   </div>
// </div>
//         `,
//         "bathroom-tiles": `
//   <div class="garden-hover-sub-content">
//   <h2> البلاط </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>بلاط الارضيات الداخلية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>بلاط الحائط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>بلاط القاعدة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>بلاط جدران من الفسيفساء</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الارضيات الصناعية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات بلاط الأرضيات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أسمنت</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات بلاط الجدران</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أدوات التبليط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تركيب البلاط</li>
//     </a>
//   </div>
// </div>
//         `,
//         // Lighting Sub Menu
//         "lighting-indoor": `
//   <div class="garden-hover-sub-content">
//   <h2> الإضاءة الداخلية </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء كاشفة داخلية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح المعلقة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء السقف الداخلية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء الحائط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء لوحة LED</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الإضاءة التجارية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصابيح الأرضية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مراوح سقف داخلية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء شريطية LED</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>اصنع إضاءتك الخاصة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>شريط الضوء</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء تعمل بالبطارية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء كاشفة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إضاءة الحمام</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء ليلية للأطفال</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إضاءة المسار والأسلاك</li>
//     </a>
//   </div>
// </div>
//         `,
//         "lighting-outdoor": `
//   <div class="garden-hover-sub-content">
//   <h2> الإضاءة الخارجية </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء الأمن</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الإضاءة الشمسية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء كاشفة خارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصابيح حائط خارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ديكورات اضاءة خارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء الأعمدة والأعمدة المعلقة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصابيح أرضية خارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصابيح خارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء الحاجز</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصابيح معلقة خارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء خارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصابيح غسالة الحائط</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء السقف الخارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مراوح سقف خارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إضاءة حمام السباحة وحوض الاستحمام الساخن والبركة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء الشوارع</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات الإضاءة الخارجية</li>
//     </a>
//   </div>
// </div>
//         `,
//         "lighting-electric": `
//   <div class="garden-hover-sub-content">
//   <h2> المصابيح الكهربائية </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>لمبات LED</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حاملات المصابيح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الكهربائية المتخصصة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الذكية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء الأنابيب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الخيطية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الموفرة للطاقة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>لمبات الهالوجين</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>محولات حامل المصباح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات LED</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الخيطية الزخرفية</li>
//     </a>
//   </div>
// </div>
//         `,
//         "lighting-portable": `
//   <div class="garden-hover-sub-content">
//   <h2> الإضاءة المحمولة </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>كشافات قابلة لإعادة الشحن</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء العمل</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>شعلات قابلة لإعادة الشحن</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصابيح الرأس</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>فوانيس التخييم</li>
//     </a>
//   </div>
// </div>
//         `,
//         // Electrical And Smart Home Sub Menu
//         "electricity-home": `
//   <div class="garden-hover-sub-content">
//   <h2> أنظمة المنزل وأنظمة الأمن </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>بوابات كهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنظمة أتمتة المنزل</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>كاميرات المراقبة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>السلامة والأمان</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أجراس الأبواب وأجهزة الاتصال الداخلي</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>السلامة من الحرائق</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنظمة التحكم في الوصول</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنظمة المنزل الذكي</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>فتحات الأبواب الآلية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنظمة الفراغ المركزية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أبواب الجراج الكهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصاريع كهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>فتحات النوافذ الأوتوماتيكية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء التحذير</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>التلفزيون والفضائيات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المكونات الالكترونية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات أتمتة المنزل</li>
//     </a>
//   </div>
// </div>
//         `,
//         "electricity-circuit": `
//   <div class="garden-hover-sub-content">
//   <h2> حماية الدائرة</h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات المستهلك المحلية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>قواطع دوائر كهربائية صغيرة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أجهزة الفصل الحراري</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ملحقات وحدة المستهلك</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صندوق المصاهر</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>توصيل الكابلات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدة المستهلك</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الصمامات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مكونات وحدة المستهلك الأخرى</li>
//     </a>
//   </div>
// </div>
//         `,
//         "electricity-switches": `
//   <div class="garden-hover-sub-content">
//   <h2> المفاتيح والمقابس </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المقابس</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المفاتيح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مفاتيح معيارية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>لوحات الغطاء</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مكونات المقبس</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أسلاك التمديد وأجهزة حماية التيار الزائد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>صناديق ذات ظهر مسطح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>إكسسوارات المفاتيح والمقابس</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات المقابس والمفاتيح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المقابس الكهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مقابس التحكم عن بعد والمؤقت</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مفاتيح ومقابس خارجية معيارية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المفاتيح والمقابس الخارجية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>محولات ومقابس السفر</li>
//     </a>
//   </div>
// </div>
//         `,
//         "electricity-power-supply": `
//   <div class="garden-hover-sub-content">
//   <h2> مزود الطاقة </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>بطارية وإكسسوارات الأدوات الثقيلة والأدوات الكهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>البطاريات المنزلية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>محولات الطاقة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات إمداد الطاقة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>محولات الإضاءة ومشغلات LED</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مصادر الطاقة غير المنقطعة</li>
//     </a>
//   </div>
// </div>
//         `,
//         "electricity-cables": `
//   <div class="garden-hover-sub-content">
//   <h2> الكابلات وإدارة الكابلات</h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>بكرات الكابلات وأسلاك التمديد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الأسلاك والكابلات الكهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ملحقات الأسلاك</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>روابط الكابلات والمشابك</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الأنابيب والتجهيزات المرنة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>كابلات الجهد المنخفض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الأنابيب والتجهيزات البلاستيكية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حماية الكابلات</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>التأريض</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ملحقات الكابلات الأخرى</li>
//     </a>
//   </div>
// </div>
//         `,
//         "electricity-wind-solar-equipment": `
//   <div class="garden-hover-sub-content">
//   <h2> معدات طاقة الرياح والطاقة الشمسية
// </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>توزيع الطاقة الشمسية وطاقة الرياح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>الألواح الشمسية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات الطاقة الشمسية خارج الشبكة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>ملحقات الألواح الشمسية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>مجموعات الطاقة الشمسية المرتبطة بالشبكة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>طاقة الرياح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>محولات الطاقة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أنظمة الرياح والطاقة الشمسية الهجينة</li>
//     </a>
//   </div>
// </div>
//         `,
//         "electricity-facility-meters": ` 
//   <div class="garden-hover-sub-content">
//   <h2> عدادات المرافق </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أجهزة مراقبة الطاقة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>عداد الكهرباء</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>عدادات فرعية كهربائية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>تركيب العداد</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>عدادات الكهرباء</li>
//     </a>
//   </div>
// </div>
//         `,
//         "electricity-consumption-units": `
//   <div class="garden-hover-sub-content">
//   <h2> وحدات استهلاكية ذات تحميل مقسم </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات استهلاكية مؤقتة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدة المستهلك الصمامات</li>
//     </a>
//   </div>
// </div>
//         `,
//         "electricity-electric-lamps": `
//   <div class="garden-hover-sub-content">
//   <h2> المصابيح الكهربائية </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>لمبات LED</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>حاملات المصابيح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الكهربائية المتخصصة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الذكية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>أضواء الأنابيب</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الخيطية</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الموفرة للطاقة</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>لمبات الهالوجين</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>محولات حامل المصباح</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>وحدات LED</li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//         <li>المصابيح الخيطية الزخرفية</li>
//     </a>
//   </div>
// </div>
//         `,
//         // Hardware Sub Menu
//         "hardware-doors": `
//         <div class="garden-hover-sub-content">
//       <h2> معدات الأبواب والنوافذ </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات النجارة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مقابض الأبواب والنوافذ </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> عزل الباب </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أثاث الباب </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مفصلات محورية للأبواب الزجاجية </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أرقام المنزل </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مغاليق الأبواب وإكسسواراتها </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مسارات الأبواب المنزلقة والملحقات </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> حواجز الأبواب والأوتاد </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات النوافذ والستائر </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مفصلات الخزانة وتجهيزاتها </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مسامير واكسسوارات كريموني </li> </a>
    
//       </div>
//     </div>
//         `,
//         "hardware-furniture": `
//       <div class="garden-hover-sub-content">
//       <h2> أدوات الأثاث </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مقابض و مقابض الخزانة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أرجل سطح العمل وعجلات الخزانة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مفصلات الخزانة وتجهيزاتها </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> حوامل التلفزيون </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> حماية الارضية </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أرجل وعجلات الأثاث </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المزالج والمزالج والأقفال </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأدراج والملحقات </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> نجارة الخشب </li> </a>
    
//       </div>
//     </div>
//         `,
//         "hardware-spare-parts": ` 
//       <div class="garden-hover-sub-content">
//       <h2> قطع غيار </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> قطع غيار الأجهزة المنزلية </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المحامل </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> قطع غيار الأجهزة الصغيرة للمطبخ </li> </a>
    
//       </div>
//     </div>
//         `,
//         "hardware-outdoor": `
//       <div class="garden-hover-sub-content">
//       <h2> معدات خارجية </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> صناديق البريد وملحقاتها </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المرايا المحدبة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مقابض التثبيت </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات البوابة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مفصلات البوابة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مسامير واكسسوارات اسبانيولت </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أعمال الحديد المطاوع </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأشرطة والملفات الشخصية </li> </a>
    
//       </div>
//     </div>
//         `,
//         "hardware-security": `
//       <div class="garden-hover-sub-content">
//       <h2> الأمن والأقفال </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أنظمة التحكم في الوصول </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> خزائن المفاتيح والخزائن </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أقفال </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> لافتات السلامة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أقفال </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مسامير ومزاليج الأبواب </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أجهزة الذعر </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> سلاسل الأبواب والمشاهد </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> الخزائن وصناديق النقود </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات القفل </li> </a>
    
//       </div>
//     </div>
//         `,
//         "hardware-screws": `
//       <div class="garden-hover-sub-content">
//       <h2> البراغي والمسامير وأدوات التثبيت </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> براغي </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> خواتم </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المغناطيس الدائم </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات التثبيت والربط الأخرى </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المسامير </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> التثبيتات والمقابس </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المكسرات </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> الغسالات </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المسامير والقضبان الملولبة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المثبتات الكيميائية </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدخل المكسرات </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> البراغي </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مسامير التأخر </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> التثبيتات الزخرفية </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> الخطافات والعيون </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> دبابيس هندسية </li> </a>
    
//       </div>
//     </div>
//         `,
//         "hardware-stairs": `
//       <div class="garden-hover-sub-content">
//       <h2> أجزاء السلالم وأنظمة التخزين </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> تجهيزات خزانة الملابس والخزانة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أجزاء السلم </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> حوامل التلفزيون </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مسارات الأبواب المنزلقة والملحقات </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أنظمة الرفوف </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مرآب ومخزن القبو </li> </a>
    
//       </div>
//     </div>
//         `,
//         "hardware-cleaning": `
//       <div class="garden-hover-sub-content">
//       <h2> التنظيف والعلاجات </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المواد المانعة للتسرب والحماية </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> المواد اللاصقة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات الخشب </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> عمال النظافة </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات المعادن </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات الجلود والحجر </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> منظف ​​السجاد والأرضيات الفينيل </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات السقف </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> زيوت التشحيم والزيوت </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أطقم إصلاح الألياف الزجاجية </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مزيل الطلاء والورنيش </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> الورنيش </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مركب التلميع </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> مواد التنظيف </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات التنظيف الأخرى </li> </a>
    
//       </div>
//     </div>
//         `,
//         "hardware-lifting": `
//       <div class="garden-hover-sub-content">
//       <h2> تقييد الحمل والرفع </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات مناولة المواد </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات الرفع </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات الرفع </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأسلاك والسلاسل والحبال </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> تقييد الحمل </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> سلالم ومقاعد الدرج </li> </a>
    
//       </div>
//     </div>
//         `,
//         "hardware-packaging": `
//       <div class="garden-hover-sub-content">
//       <h2> التغليف واللوازم البريدية </h2>
//       <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> التغليف البريدي </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> وضع العلامات </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> التغليف الوقائي </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> شريط وموزع </li> </a>
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> تعبئة المنصات </li> </a>
    
//       </div>
//     </div>
//         `,
//         // Electrical Appliances Sub Menu
//         "electrical-appliances-large": `
//   <div class="garden-hover-sub-content">
//   <h2> الأجهزة الكهربائية الكبيرة</h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أفران مدمجة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> شفاطات الطباخات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المواقد </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> غسالات الصحون </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طباخات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> غسالات الملابس </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مجففات الملابس </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الميكروويف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الثلاجات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أقبية النبيذ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المجمدات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أفران صغيرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات الأجهزة الكهربائية الكبيرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> قطع غيار الأجهزة المنزلية </li> </a>

//   </div>
// </div>
//         `,
//         "electrical-appliances-small": `
//   <div class="garden-hover-sub-content">
//   <h2> الأجهزة الكهربائية الصغيرة</h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> آلات القهوة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات الطعام </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الميكروويف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أجهزة الطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أفران صغيرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أساسيات وجبة الإفطار </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> عصارات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> قطاعة الطعام </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المقالي </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> محلية الصنع </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الماء والمشروبات ومكعبات الثلج </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الشواء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> شوايات بلانشا </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات الأجهزة الكهربائية الصغيرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> قطع غيار الأجهزة الصغيرة للمطبخ </li> </a>

//   </div>
// </div>
//         `,
//         "electrical-appliances-maintenance": `
//   <div class="garden-hover-sub-content">
//   <h2> صيانة المنزل </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المكانس الكهربائية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تنظيف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> كي الملابس </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> خياطة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات صيانة المنزل </li> </a>

//   </div>
// </div>
//         `,
//         // Kitchen Sub Menu
//         "kitchen-cabinets": `
//   <div class="garden-hover-sub-content">
//   <h2> خزائن المطبخ </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> وحدات المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ألواح وتشطيبات المطبخ </li> </a>

//   </div>
// </div>
//         `,
//         "kitchen-sinks": `
//   <div class="garden-hover-sub-content">
//   <h2> أحواض المطبخ والحنفيات </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أحواض المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> صرف مغسلة المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> صنابير المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> وحدات التخلص من النفايات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات حوض المطبخ </li> </a>

//   </div>
// </div>
//         `,
//         "kitchen-surfaces": `
//   <div class="garden-hover-sub-content">
//   <h2> أسطح المطبخ</h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أسطح العمل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> اللوحات الواقية والملحقات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات سطح عمل المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> واقيات المطبخ </li> </a>

//   </div>
// </div>
//         `,
//         "kitchen-accessories": `
//   <div class="garden-hover-sub-content">
//   <h2> إكسسوارات المطبخ </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> صناديق المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> منظفات المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سجاد المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> كراسي البار </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طاولات مرتفعة وطاولات بار </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> قطع غيار الأجهزة المنزلية </li> </a>

//   </div>
// </div>
//         `,
//         "kitchen-equipped": `
//   <div class="garden-hover-sub-content">
//   <h2> المطابخ المجهزة والمطابخ الصغيرة </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مطابخ مجهزة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> وحدات المطبخ الصغيرة </li> </a>

//   </div>
// </div>
//         `,
//         "kitchen-washer-accessories": `
//     <div class="garden-hover-sub-content">
//   <h2> أكسسورات غسالة الاطباق</h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li> اكسسورات غسالة الاطباق </li>
//     </a>
// <a href="/" class="flex li-link" style="color: #31427b;">
//       <li> اكسسورات غسالة الاطباق </li>
//     </a>
//     <a href="/" class="flex li-link" style="color: #31427b;">
//       <li> اكسسورات غسالة الاطباق </li>
//     </a>
//   </div>
// </div>
//         `,
//         "kitchen-tiles": `
//   <div class="garden-hover-sub-content">
//   <h2> البلاط</h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط الارضيات الداخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط الحائط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط القاعدة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط جدران من الفسيفساء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الارضيات الصناعية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات بلاط الأرضيات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أسمنت </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات بلاط الجدران </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات التبليط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تركيب البلاط </li> </a>

//   </div>
// </div>
//         `,
//         // Painting Sub Menu
//         "painting-inner": `
//   <div class="garden-hover-sub-content">
//   <h2> دهانات داخلية </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> دهانات الجدران الداخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> رذاذ الطلاء والبرايمر </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طلاء الارضيات الداخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الورنيش والطلاء للأعمال الخشبية الداخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طلاء لامع </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> دهانات التجديد </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طلاء البلاط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> دهانات المطبخ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طلاء السبورة والاستنسل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مخططات الألوان وألوان الطلاء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> دهانات الحمام </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طلاء مضاد للعفن </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المعاطف الداخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تحضير الطلاء </li> </a>

//   </div>
// </div>
//         `,
//         "painting-outer": `
//   <div class="garden-hover-sub-content">
//   <h2> دهان خارجي </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طلاء الارضيات الخارجية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> دهانات وصبغات الخشب الخارجي </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طلاء المعادن ومضاد للصدأ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> دهانات البناء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طلاء خارجي متعدد الأغراض </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طلاء مضاد للتآكل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طبقة أساس للخشب الخارجي </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> رذاذ الطلاء والبرايمر </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> دهانات خارجية متخصصة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مخططات الألوان وألوان الطلاء </li> </a>

//   </div>
// </div>
//         `,
//         "painting-drawing": ` 
//   <div class="garden-hover-sub-content">
//   <h2> أدوات الرسم </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سلالم ومقاعد الدرج </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أغطية الغبار </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سكاكين التزيين </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مكشطة الطلاء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات الرسم الأخرى </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> شريط لاصق </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بكرات الطلاء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أعمدة تمديد الأسطوانة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أكمام الأسطوانة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مجموعة من الفرش </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> دلاء الطلاء والصواني والشبكات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> فرشاة الرسم المسطحة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> فرشاة مستديرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> رشاشات الطلاء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أطقم الرسم </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> خلاطات الطلاء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إطارات الأسطوانة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> فرش الرسم </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> منظف ​​الفرشاة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المذيبات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بدلات العمل والبدلات الواقية </li> </a>

//   </div>
// </div>
//         `,
//         "painting-wallpaper": ` 
//   <div class="garden-hover-sub-content">
//   <h2> ورق الجدران وأغطية الجدران </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ورق الجدران وحدود ورق الجدران </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> لوحات زخرفية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أقمشة الجدران </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ورق التبطين </li> </a>

//   </div>
// </div>
//         `,
//         "painting-surface": `
//   <div class="garden-hover-sub-content">
//   <h2> إعداد السطح </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ورق التبطين </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المعاطف الداخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المواد التمهيدية المتخصصة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> التمهيديات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مانع تسرب المياه </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الحشوات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مخططات الألوان وألوان الطلاء </li> </a>

//   </div>
// </div>
//         `,
//         "painting-cleaning": `
//   <div class="garden-hover-sub-content">
//   <h2> التنظيف والعلاجات </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المواد المانعة للتسرب والحماية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المواد اللاصقة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات الخشب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> عمال النظافة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات المعادن </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات الجلود والحجر </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> منظف ​​السجاد والأرضيات الفينيل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات السقف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> زيوت التشحيم والزيوت </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أطقم إصلاح الألياف الزجاجية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مزيل الطلاء والورنيش </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الورنيش </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مركب التلميع </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مواد التنظيف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات التنظيف الأخرى </li> </a>

//   </div>
// </div>
//         `,
//         "painting-wallpaper-tools": `
//   <div class="garden-hover-sub-content">
//   <h2> أدوات ورق الجدران </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ورق جدران بخاري </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طاولات اللصق والفرش والبكرات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مزيل ورق الجدران </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> موزعات المواد اللاصقة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> قواطع ورق الحائط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مطرقة تنجيد ومطارق تثبيت </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طقم ورق الجدران </li> </a>

//   </div>
// </div>
//         `,
//         "painting-molds": `
//   <div class="garden-hover-sub-content">
//   <h2> القوالب </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الكورنيشات والأفاريز </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ألواح السقف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ورود السقف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأعمدة والأسنان والأقواس </li> </a>

//   </div>
// </div>
//         `,
//         // Flooring Tiling Sub Menu
//         "tile-tiles": `
//   <div class="garden-hover-sub-content">
//   <h2> البلاط </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط الارضيات الداخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط الحائط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط القاعدة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط جدران من الفسيفساء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الارضيات الصناعية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات بلاط الأرضيات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أسمنت </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات بلاط الجدران </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات التبليط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تركيب البلاط </li> </a>

//   </div>
// </div>
//         `,
//         "tile-wooden-floors": `
//   <div class="garden-hover-sub-content">
//   <h2> أرضيات خشبية </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> السجاد ومفارش الأبواب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات الخشب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أرضيات خشبية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> القاعدة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تركيب الأرضيات الخشبية </li> </a>

//   </div>
// </div>
//         `,
//         "tile-vinyl-floors": `
//   <div class="garden-hover-sub-content">
//   <h2> بلاط وأرضيات الفينيل </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> لينو </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط وألواح أرضيات الفينيل </li> </a>

//   </div>
// </div>
//         `,
//         "tile-wall-covering": ` 
//   <div class="garden-hover-sub-content">
//   <h2> كسوة الجدران الداخلية وكتل الزجاج </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> كسوة الجدران الداخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> كتل الزجاج </li> </a>

//   </div>
// </div>
//         `,
//         "tile-decor-tools": `
//   <div class="garden-hover-sub-content">
//   <h2> أدوات الديكور والأرضيات </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تركيب الأرضيات الخشبية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تركيب السجاد والأرضيات الفينيل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> شريط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تركيب البلاط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أجهزة رش الطلاء وكابينات الطلاء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تركيب الأرضيات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات التبليط </li> </a>

//   </div>
// </div>
//         `,
//         "tile-carpets": ` 
//   <div class="garden-hover-sub-content">
//   <h2> السجاد و أعشاب البحر </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> السجادة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تركيب السجاد والأرضيات الفينيل </li> </a>

//   </div>
// </div>
//         `,
//         "tile-concrete-floors": `
//   <div class="garden-hover-sub-content">
//   <h2> الارضيات الخرسانية </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> صبغات الخرسانة والجير </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أرضيات خرسانية مشمعة </li> </a>

//   </div>
// </div>
//         `,
//         "tile-wall-panels": `
//   <div class="garden-hover-sub-content">
//   <h2> لوحات الحائط </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ألواح الجدران الخشبية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ألواح الجدران البلاستيكية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مقاطع </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ملفات تعريف وتشطيبات الألواح الجدارية </li> </a>

//   </div>
// </div>
//         `,
//         "tile-flooring-gardens": `
//   <div class="garden-hover-sub-content">
//   <h2> الأرضيات والحدائق والأفنية </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إنشاء الأرضيات والحدائق والممرات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تركيب الأرضيات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> رصف الحدائق </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الرمل والحصى والحصى الزخرفية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> درابزينات وسور الحدائق </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المسارات والحواف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العشب العشبي </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات التبليط </li> </a>

//   </div>
// </div>
//         `,
//         // Building matrial Sub Menu
//         "matrial-building": `
//   <div class="garden-hover-sub-content">
//   <h2> مواد البناء</h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العزل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مانع تسرب المياه </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات البناء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> خلاطات الأسمنت ومعدات البناء </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الخرسانة والملاط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الحشوات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> عزل الباب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تسليح الفولاذ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> شبكة الأمان والحاجز </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مجمعات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الطوب والكتل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الجدران الفاصلة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ملح إزالة الجليد </li> </a>

//   </div>
// </div>
//         `,
//         "matrial-roofing": `
//   <div class="garden-hover-sub-content">
//   <h2> تسقيف و تصريف المياه </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجات السقف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المزاريب والملحقات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طبقة الأساس للسقف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات التسقيف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تهوية السقف والأغطية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط السقف والألواح </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تثبيتات البلاط والأردواز </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تسقيف صفائحي </li> </a>

//   </div>
// </div>
//         `,
//         "matrial-cutting-wood": `
//   <div class="garden-hover-sub-content">
//   <h2> خشب التقطيع </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تهوية السقف والأغطية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بلاط السقف والألواح </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تثبيتات البلاط والأردواز </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المزاريب والملحقات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طبقة الأساس للسقف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات التسقيف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أدوات التسقيف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تسقيف صفائحي </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأخشاب ولوازم التسقيف </li> </a>

//   </div>
// </div>
//         `,
//         "matrial-sewage": `
//   <div class="garden-hover-sub-content">
//   <h2> الصرف الصحي والقنوات </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بولي فينيل كلوريد </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجة مياه الصرف الصحي </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> حماية الكابلات تحت الأرض </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الصرف الصحي </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أغطية وشبكات فتحات الصرف الصحي </li> </a>

//   </div>
// </div>
//         `,
//         "matrial-safety": `
//   <div class="garden-hover-sub-content">
//   <h2> السلامة وملابس العمل </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أحذية السلامة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ملابس العمل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أقنعة الغبار وأجهزة التنفس </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الخوذات الصلبة وحماية الأذن </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> واقيات الوجه وحماية العين </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> قفازات واقية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات الحماية من السقوط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات الاسعافات الاولية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مكبرات الصوت </li> </a>

//   </div>
// </div>
//         `,
//         "matrial-surface": `
//   <div class="garden-hover-sub-content">
//   <h2> إعداد السطح </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ورق التبطين </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المعاطف الداخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> المواد التمهيدية المتخصصة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> التمهيديات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مانع تسرب المياه </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الحشوات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مخططات الألوان وألوان الطلاء </li> </a>

//   </div>
// </div>
//         `,
//         "matrial-materials": `
//   <div class="garden-hover-sub-content">
//   <h2> مناولة المواد والرفع والسلامة في الارتفاع </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات الرفع </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأسلاك والسلاسل والحبال </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات مناولة المواد </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سلالم </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات الرفع </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تقييد الحمل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> حوامل المحور </li> </a>

//   </div>
// </div>
//         `,
//         // Animal Care Sub Menu
//         "animal-dogs": `
//   <div class="garden-hover-sub-content">
//   <h2> الكلاب </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> طعام الكلاب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سفر الكلاب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أقفاص الكلاب والأقلام والمسارات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أوعية طعام الكلاب وإكسسوارات التغذية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أسرّة الكلاب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العناية بالكلاب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> علاج البراغيث والقراد والديدان للكلاب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تدريب الكلاب والرياضة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أبواب القطط والحيوانات الأليفة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أطواق الكلاب والمقودات والسروج </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العاب الكلاب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سلامة الكلاب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ملابس الكلاب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تنظيف الكلاب </li> </a>

//   </div>
// </div>
//         `,
//         "animal-cats": `
//   <div class="garden-hover-sub-content">
//   <h2> القطط </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العاب القطط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طعام القطط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أوعية طعام القطط وإكسسوارات التغذية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> قمامة القطط وصناديق القمامة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أسرة القطط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> علاج البراغيث والقراد والديدان للقطط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سفر القطط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العناية بالقطط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أطواق القطط والمقودات والسروج </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تنظيف القطط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> شاشات وحواجز نوافذ القطط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تدريب القطط </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أبواب القطط والحيوانات الأليفة </li> </a>

//   </div>
// </div>
//         `,
//         "animal-farming": `
//   <div class="garden-hover-sub-content">
//   <h2> مستلزمات الزراعة </h2>
//   <div class="garden-hover-sub-content-links">
//     <a href="/" class="flex li-link" style="color: #31427b;"> <li> تربية الدجاج </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سياج كهربائي </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات زراعية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> رعاية الثروة الحيوانية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تربية الأغنام </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تربية الماشية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تربية الخنازير </li> </a>

//   </div>
// </div>
//         `,
//         "animal-small-pets": `
//   <div class="garden-hover-sub-content">
//   <h2> الحيوانات الأليفة الصغيرة </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأقفاص والمسارات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> اقفاص الحيوانات الصغيرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات قفص القوارض </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> القش والفراش </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طعام الحيوانات الأليفة الصغيرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العاب الحيوانات الصغيرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سفر الحيوانات الأليفة الصغيرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> رعاية الحيوانات الأليفة الصغيرة </li> </a>

//   </div>
// </div>
//         `,
//         "animal-fish-tanks": `
//   <div class="garden-hover-sub-content">
//   <h2> أحواض السمك وأحواض السمك </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أحواض وأحواض الأسماك </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مرشحات أحواض السمك </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مضخات الماء والهواء للأحواض المائية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ديكورات حوض السمك </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إضاءة حوض السمك </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طعام السمك </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجة مياه أحواض السمك </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مضخات الهواء وموزعات ثاني أكسيد الكربون </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> لوازم أحواض السمك </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تنظيف حوض السمك </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أنظمة أحواض السمك باستخدام ثاني أكسيد الكربون </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> لوازم حوض السمك النانو </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تربية الأسماك </li> </a>

//   </div>
// </div>
//         `,
//         "animal-birds": `
//   <div class="garden-hover-sub-content">
//   <h2> الطيور </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> اقفاص الطيور ومعداتها </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> صحة الطيور </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العاب الطيور </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العناية بالطيور </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> فراش الطيور </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات الطيور </li> </a>

//   </div>
// </div>
//         `,
//         "animal-horses": `
//   <div class="garden-hover-sub-content">
//   <h2> لوازم الخيول </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> رعاية الخيول </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات ساحة مستقرة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> السروج </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مسمار </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ملابس الفروسية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سجادات وبطانيات الخيول </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سياج الخيل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ملابس الخيل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تغذية الخيول </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات مستقرة </li> </a>

//   </div>
// </div>
//         `,
//         "animal-beekeeping": `
// <div class="garden-hover-sub-content">
//   <h2> تربية النحل </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> خلايا النحل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات تربية النحل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مستخلصات العسل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> بدلات النحل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> لوازم خلية النحل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> صحة الخلية والتغذية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تربية الملكة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> فنادق الحشرات </li> </a>

//   </div>
// </div>
//         `,
//         "animal-reptiles": `
//   <div class="garden-hover-sub-content">
//   <h2> الزواحف </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أحواض تربية السلاحف وخزانات السلاحف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طعام الزواحف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> تدفئة حوض الحيوانات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> رمل الزواحف والركائز </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إضاءة الحوض </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ديكورات فيفاريوم </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> رعاية الزواحف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات الأحياء المائية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معالجة مياه الزواحف </li> </a>

//   </div>
// </div>
//         `,
//         // Wood Sub Menu
//         "wood-windows": `
//   <div class="garden-hover-sub-content">
//   <h2> النوافذ والنوافذ الفرنسية </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> نوافذ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> نوافذ فرنسية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> شاشات الذباب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الستائر الدوارة </li> </a>

//   </div>
// </div>
//         `,
//         "wood-velux": `
//   <div class="garden-hover-sub-content">
//   <h2> نوافذ وفتحات السقف من فيلوكس </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> فتحات السقف وملحقاتها </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> نوافذ واكسسوارات فيلوكس </li> </a>

//   </div>
// </div>
//         `,
//         "wood-front-doors": `
//   <div class="garden-hover-sub-content">
//   <h2> الأبواب الأمامية والأبواب </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأبواب الأمامية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأبواب </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مظلات ومظلات الأبواب </li> </a>

//   </div>
// </div>
//         `,
//         "wood-interior-doors": `
//   <div class="garden-hover-sub-content">
//   <h2> أبواب داخلية وجدران فاصلة </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أبواب داخلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> جدران تقسيم زجاجية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> فاصل الغرف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أبواب منزلقة </li> </a>

//   </div>
// </div>
//         `,
//         "wood-stairs": `
//   <div class="garden-hover-sub-content">
//   <h2> السلالم وبوابات السلالم </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> السلالم وبوابات السلالم </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> درابزينات واكسسوارات </li> </a>

//   </div>
// </div>
//         `,
//         "wood-garage-doors": `
//   <div class="garden-hover-sub-content">
//   <h2> أبواب المرآب </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أبواب الجراج الدوارة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أبواب المرآب العلوية والسفلية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> معدات باب المرآب </li> </a>

//   </div>
// </div>
//         `,
//         "wood-glazing": `
//   <div class="garden-hover-sub-content">
//   <h2> التزجيج والاكسسوارات </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> زجاج معدني </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> زجاج اكريليك </li> </a>

//   </div>
// </div>
//         `,
//         "wood-wood-materials": `
//   <div class="garden-hover-sub-content">
//   <h2> مواد الأخشاب والألواح </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ألواح رفوف </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأخشاب والألواح </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مواد ورقية </li> </a>

//   </div>
// </div>
//         `,
//         "wood-patio-door-accessories": `
//   <div class="garden-hover-sub-content">
//   <h2> إكسسوارات باب الفناء </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> إكسسوارات أبواب الفناء المنزلقة </li> </a>

//   </div>
// </div>
//         `,
//         // Energy Sub Menu
//         "energy-efficient-radiators": `
//   <div class="garden-hover-sub-content">
//   <h2> مشعات عالية الكفاءة </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> السخانات والمشعات الكهربائية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مشعات التدفئة المركزية </li> </a>

//   </div>
// </div>
//         `,
//         "wood-heating": `
//   <div class="garden-hover-sub-content">
//   <h2> التدفئة باستخدام الحطب </h2>
//   <div class="garden-hover-sub-content-links">
//             <a href="/" class="flex li-link" style="color: #31427b;"> <li> أنظمة المداخن والمداخن </li> </a>
//             <a href="/" class="flex li-link" style="color: #31427b;"> <li> مواقد </li> </a>
//             <a href="/" class="flex li-link" style="color: #31427b;"> <li> المواقد </li> </a>

//             </div>
//         </div>
//         `,
//         "home-insulation": `
//   <div class="garden-hover-sub-content">
//   <h2> عزل المنزل </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> العزل </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> نوافذ </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الأبواب الأمامية </li> </a>

//   </div>
// </div>
//         `,
//         "ventilation": `
//   <div class="garden-hover-sub-content">
//   <h2> تهوية </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أنظمة MEV </li> </a>

//   </div>
// </div>
//         `,
//         "heating-control": `
//   <div class="garden-hover-sub-content">
//   <h2> التحكم في التدفئة </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ترموستات الغلايات </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> ترموستات السخان الكهربائي والرادياتير </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> خلاطات الحنفيات الحرارية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> أنظمة المنزل الذكي </li> </a>

//   </div>
// </div>
//         `,
//         "solar-energy": `
//   <div class="garden-hover-sub-content">
//   <h2> طاقة شمسية </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> الألواح الشمسية </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مجموعات الطاقة الشمسية خارج الشبكة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مجموعات الطاقة الشمسية المرتبطة بالشبكة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> طاقة الرياح </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> سخانات المياه بالطاقة الشمسية </li> </a>

//   </div>
// </div>
//         `,
//         "air-heat-treatment": `
//   <div class="garden-hover-sub-content">
//   <h2> العلاج الحراري الجوي </h2>
//   <div class="garden-hover-sub-content-links">
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مضخات الحرارة </li> </a>
// <a href="/" class="flex li-link" style="color: #31427b;"> <li> مكيفات الهواء </li> </a>

//   </div>
// </div>
//         `,
//     };

//     // Select all the <a> tags with the class 'li-link'
//     const buttons = document.querySelectorAll(".li-link");
//     const hoverSub = document.getElementById("garden-hover-sub");

//     // When a button is clicked
//     buttons.forEach((button) => {
//         button.addEventListener("mouseenter", function () {
//             // Get the button's id
//             const buttonId = button.id;

//             // Get the corresponding content from the contentArray
//             const content = contentArray[buttonId] || "Default Content"; // Use a default message if no content is found

//             // Update the content of the garden-hover-sub div
//             hoverSub.innerHTML = content;

//             // Make the garden-hover-sub div visible
//             hoverSub.classList.remove("none");
//         });
//     });
// });



// // Function to check screen width and remove class if screen is small
// function checkScreenSize() {
//   var element = document.querySelector('.small-menu-all');
//   var element2 = document.querySelector('.footer');
//   var element3 = document.querySelector('.millions');
//   var element4 = document.querySelector('.brand-foot');
//   var element5 = document.querySelector('.pro-area');
//   var element6 = document.querySelector('.last-foot');
//   // Check if screen width is less than 768px (small screen)
//   if (window.innerWidth > 1041) {
//     element.classList.add('none');
//     element2.classList.remove('none');
//     element3.classList.remove('none');
//     element4.classList.remove('none');
//     element5.classList.remove('none');
//     element6.classList.remove('none');
//   }
// }

// // Run the function when the page loads
// checkScreenSize();

// // Also run the function whenever the window is resized
// window.addEventListener('resize', checkScreenSize);