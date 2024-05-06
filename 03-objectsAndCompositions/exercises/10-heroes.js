function heroes() {

    const fighterHero = {

        fightProto: {
            fight: function () {
                this.stamina -= 1;
                console.log(`${this.name} slashes at the foe!`);
            },
        },

        fighter: function (name) {
            const fighterObj = {
                ...this.fightProto,
                name,
                health: 100,
                stamina: 100,
            }

            return fighterObj;
        },
    };

    const mageHero = {

        mageProto: {
            cast: function (spell) {
                this.mana -= 1;
                console.log(`${this.name} cast ${spell}`);
            },
        },

        mage: function (name) {
            const mageObj = {
                ...this.mageProto,
                name,
                health: 100,
                mana: 100,
            };

            return mageObj;
        }
    }

    const allHeroes = {
        ...mageHero,
        ...fighterHero,
    }

    return allHeroes;
}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()
console.log(scorcher2.stamina);
console.log(scorcher.mana);
