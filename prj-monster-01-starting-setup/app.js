function getRandomValue(min,max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({

    data()
    {
        return {

            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 0,
            winner : null,
            logMessages : []
        };
    },
    computed: {

        monsterBarStyles()
        {
            return {width : this.monsterHealth + '%'};
        },
        playerBarStyles()
        {
            return {width : this.playerHealth + '%'};
        },
        mayUseSpecialAttack()
        {
            return this.currentRound % 3 !== 0;
        }

    },
    watch: {

        playerHealth(value)
        {
            if(value == 0 && this.monsterHealth <=0)
            {
                this.winner='draw';
            }
            else if( value == 0)
            {
                this.winner='monster';
            }
        },
        monsterHealth(value)
        {
            if(value == 0 && this.playerHealth <=0)
            {
                this.winner='draw';
            }
            else if( value == 0)
            {
                this.winner='player';
            }
        }
    },
    methods: {
        startGame()
        {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        attackMonster()
        {
            this.currentRound++;
            const attackValue = getRandomValue(5,12);
            this.addLogMessages('player','attack',attackValue);
            if(this.monsterHealth - attackValue < 0)
            {
                this.monsterHealth = 0;
            }
            else
            {
                this.monsterHealth -= attackValue;
            }

            this.attackPlayer();
        },
        attackPlayer()
        {
            const attackValue = getRandomValue(8,15);
            this.addLogMessages('monster','attack',attackValue);
            if(this.playerHealth - attackValue < 0)
            {
                this.playerHealth = 0;
            }
            else
            {
                this.playerHealth -= attackValue;
            }
        },
        specialAttackMonster()
        {
            this.currentRound++;
            const attackValue = getRandomValue(10,25);
            this.addLogMessages('player','attack',attackValue);

            if(this.monsterHealth - attackValue < 0)
            {
                this.monsterHealth = 0;
            }
            else
            {
                this.monsterHealth -= attackValue;
            }

            this.attackPlayer();
        },
        playerHeal()
        {
            const healValue = getRandomValue(8,20);
            this.addLogMessages('player','heal',healValue);

            if(this.playerHealth + healValue >= 100)
            {
                this.playerHealth = 100;
            }
            else
            {
                this.playerHealth += healValue;
            }

            this.attackPlayer();
        },
        surrender()
        {
            this.winner = 'monster';
        },
        addLogMessages(who, what, value)
        {
            this.logMessages.unshift({

                actionBy : who,
                actionType : what,
                actionValue : value

            });
        }
    },
});

app.mount('#game');