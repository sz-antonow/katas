function declareWinner(fighter1, fighter2, firstAttacker) {

    const fighters = [fighter1, fighter2];
    let index = fighters.findIndex(fighter => fighter.name === firstAttacker);
    let hp, winner;

    do {
        if (index) {
            fighters[index - 1].health = fighters[index - 1].health - fighters[index].damagePerAttack;
            hp = fighters[index - 1].health;
            winner = fighters[index].name;
            index--;
        } else {
            fighters[index + 1].health = fighters[index + 1].health - fighters[index].damagePerAttack;
            hp = fighters[index + 1].health;
            winner = fighters[index].name;
            index++;
        }
    } while (hp > 0)

    return winner;
}