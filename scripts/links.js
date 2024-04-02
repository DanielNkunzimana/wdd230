const baseURL = "https://DanielNkunzimana.github.io/wdd230/";
const linksURL = "https://DanielNkunzimana.github.io/wdd230/data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (response.ok) {
      const data = await response.json();
      console.loge(data)
      displayLinks(data.weeks);
    } else {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.error(error);
  }
}

function displayLinks(weeks) {
  const activityLinksContainer = document.querySelector('.activity-links');
  weeks.forEach(week => {
    const weekElement = document.createElement('div');
    weekElement.classList.add('week');

    const weekTitle = document.createElement('h3');
    weekTitle.textContent = week.week;
    weekElement.appendChild(weekTitle);

    const linksList = document.createElement('ul');
    week.links.forEach(link => {
      const listItem = document.createElement('li');
      const linkElement = document.createElement('a');
      linkElement.textContent = link.title;
      linkElement.href = `${baseURL}${link.url}`;
      listItem.appendChild(linkElement);
      linksList.appendChild(listItem);
    });
    
    weekElement.appendChild(linksList);
    activityLinksContainer.appendChild(weekElement);
  });
}

getLinks();
