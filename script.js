//! get nav list container by id to append title
const navContainer = document.getElementById("nav-list");

const getTitle = async () => {
  const res = await fetch("https://news-api-fs.vercel.app/api/categories");
  const data = await res.json();
  navUi(data.categories);
};

//! display nav list in UI
const navUi = (categories) => {
  categories.forEach((navValue) => {
    navContainer.innerHTML += `
    <li id="${navValue.id}" class="hover:border-b-4 hover:border-red-600 cursor-pointer list-items">${navValue.title}</li>
    `;
  });
};

//! click on list
navContainer.addEventListener("click", (e) => {
  const allLi = document.querySelectorAll("li");
  allLi.forEach((li) => {
    li.classList.remove("border-b-4", "border-red-600");
  });
  if (e.target.localName === "li") {
    e.target.classList.add("border-b-4", "border-red-600");
  }
});
getTitle();
