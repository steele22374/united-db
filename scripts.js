const character = {
  name: "Ant-Man",
  stats: {
    move: 1,
    action: 1,
    fight: 2,
    wild: 3,
  },
  abilities: [
    {
      name: "Shrink",
      description: "You cannot take any damage until the beginning of your next turn.",
      icons: ["defense"],
    },
    {
      name: "Grow",
      description: "Then deal 3 damage against a single target.",
      icons: ["move", "fight", "fight", "fight"],
    },
    {
      name: "Quantum Leap",
      description: "Swap this card with any of your faceup cards in the Storyline.",
      icons: ["wild", "wild", "move"],
    }
  ],
  cards: [
    ["move", "action"],
    ["fight", "fight"],
    ["action", "wild"],
    ["move", "move"],
    ["wild", "wild"],
    ["fight", "move", "wild"],
  ]
};

const iconMap = {
  move: "🟦",
  action: "🟨",
  fight: "🟥",
  wild: "🟩",
  defense: "🛡️"
};

function createIcon(icon) {
  const span = document.createElement("span");
  span.className = "icon";
  span.textContent = iconMap[icon] || icon;
  return span;
}

function renderCharacterCard(char) {
  const container = document.getElementById("card-container");

  const card = document.createElement("div");
  card.className = "card";

  const name = document.createElement("h2");
  name.textContent = char.name;
  card.appendChild(name);

  // Stats
  const stats = document.createElement("div");
  stats.className = "stats";
  stats.innerHTML = `<strong>Stats:</strong>`;
  const statRow = document.createElement("div");
  statRow.className = "stat-item";
  Object.entries(char.stats).forEach(([key, value]) => {
    const span = createIcon(key);
    span.textContent += ` x${value}`;
    statRow.appendChild(span);
  });
  stats.appendChild(statRow);
  card.appendChild(stats);

  // Abilities
  const abilities = document.createElement("div");
  abilities.className = "abilities";
  abilities.innerHTML = `<strong>Abilities:</strong>`;
  char.abilities.forEach(ability => {
    const div = document.createElement("div");
    div.className = "ability";
    div.innerHTML = `<em>${ability.name}</em>: ${ability.description}`;
    const row = document.createElement("div");
    row.className = "icon-row";
    ability.icons.forEach(icon => row.appendChild(createIcon(icon)));
    div.appendChild(row);
    abilities.appendChild(div);
  });
  card.appendChild(abilities);

  // Cards
  const cards = document.createElement("div");
  cards.className = "cards";
  cards.innerHTML = `<strong>Card Breakdown:</strong>`;
  char.cards.forEach(rowData => {
    const row = document.createElement("div");
    row.className = "icon-row";
    rowData.forEach(icon => row.appendChild(createIcon(icon)));
    cards.appendChild(row);
  });
  card.appendChild(cards);

  container.appendChild(card);
}

renderCharacterCard(character);
