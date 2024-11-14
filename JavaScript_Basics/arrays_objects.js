let players = [
  { name: "Mane", goals: 10, team: "Al Nassr" },
  { name: "Salah", goals: 12, team: "Liverpool" },
];

players.forEach((player) => {
  console.log(
    `${player.name} plays for ${player.team} and scored ${player.goals} goals`
  );
});
