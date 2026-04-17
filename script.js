function generate() {
  const keyword = document.getElementById("keyword").value;
  const container = document.getElementById("magazine");

  container.innerHTML = "";

  const cards = [
    { title: `${keyword} 트렌드`, desc: "이번 주 인기 주제" },
    { title: "요즘 분위기", desc: "감성 / 브런치 / 빈티지" },
    { title: "추천 1", desc: "핫플 카페 A" },
    { title: "추천 2", desc: "핫플 카페 B" },
    { title: "추천 3", desc: "핫플 카페 C" }
  ];

  cards.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${c.title}</h2>
      <p>${c.desc}</p>
    `;

    container.appendChild(card);
  });
}