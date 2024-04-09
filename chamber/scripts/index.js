const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

//const display = document.querySelector("article");

// Fetching the data from members.json
fetch('datas/members.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch members');
    }
    return response.json();
  })
  .then(data => {
    displayMembers(data.members);
    showBannerOnCertainDays();
  })
  .catch(error => {
    console.error('Error fetching members:', error);
  });

// Function to display members
function displayMembers(members) {
  display.innerHTML = ''; // Clear previous content

  // Filter members with silver or gold membership level for spotlight advertisements
  const spotlightMembers = members.filter(member => member.membership_level === "Silver" || member.membership_level === "Gold");

  // Randomly select 2 or 3 spotlight members
  const randomSpotlightMembers = getRandomMembers(spotlightMembers, 2, 3);

  randomSpotlightMembers.forEach(member => {
    const section = document.createElement('section');

    const img = document.createElement('img');
    img.src = `images/${member.image}`;
    img.alt = member.name;
    section.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = member.name;
    section.appendChild(name);

    const address = document.createElement('p');
    address.textContent = `Address: ${member.address}`;
    section.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = `Phone: ${member.phone}`;
    section.appendChild(phone);

    const website = document.createElement('a');
    website.href = member.website;
    website.textContent = 'Website';
    section.appendChild(website);

    const membershipLevel = document.createElement('p');
    membershipLevel.textContent = `Membership Level: ${member.membership_level}`;
    section.appendChild(membershipLevel);

    const otherInformation = document.createElement('p');
    otherInformation.textContent = member.other_information;
    section.appendChild(otherInformation);

    display.appendChild(section);
  });
}

// Function to randomly select members
function getRandomMembers(members, min, max) {
  const shuffled = members.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * (max - min + 1)) + min);
}

// Function to show banner on certain days
function showBannerOnCertainDays() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();

  // Banner should only appear on Mondays, Tuesdays, and Wednesdays (days 1, 2, and 3 respectively)
  if (dayOfWeek >= 1 && dayOfWeek <= 3) {
    const banner = document.querySelector(".banner");
    banner.style.display = "block";

    // Allow users to close the banner
    const closeBannerBtn = document.querySelector("#closeBannerBtn");
    closeBannerBtn.addEventListener("click", () => {
      banner.style.display = "none";
    });
  }
}
