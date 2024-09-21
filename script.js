document.getElementById('fight').addEventListener('click', function() {
    // 仅显示技能按钮，不造成伤害
    document.getElementById('skills').style.display = 'flex'; // 显示技能选项
});

document.querySelectorAll('.skill-button').forEach(button => {
    button.addEventListener('click', function() {
        let damage = this.getAttribute('data-damage');
        let opponentHP = document.getElementById('opponent-hp').innerText;
        let newHP = opponentHP - damage;
        if (newHP < 0) newHP = 0;
        document.getElementById('opponent-hp').innerText = newHP;

        // 更新血条
        let healthPercentage = (newHP / 50) * 100;
        document.querySelector('.opponent-pokemon .health').style.width = healthPercentage + '%';

        // 隐藏技能按钮
        document.getElementById('skills').style.display = 'none';

        // 显示行动结果
        showActionMessage('Pikachu used ' + this.innerText + '!');
        // 对方宝可梦行动
        opponentAction();
    });
});
document.getElementById('pokemon').addEventListener('click', function() {
    document.getElementById('pokemon-selection').style.display = 'flex'; // 显示宝可梦选择
});

document.querySelectorAll('.pokemon-button').forEach(button => {
    button.addEventListener('click', function() {
        let newPokemonName = this.getAttribute('data-name');
        let newPokemonHP = this.getAttribute('data-hp');
        
        // 更新玩家宝可梦信息
        document.querySelector('.player-pokemon h2').innerText = newPokemonName;
        document.getElementById('player-hp').innerText = newPokemonHP;
        
        // 隐藏宝可梦选择界面
        document.getElementById('pokemon-selection').style.display = 'none';

        // 显示行动结果
        showActionMessage('You switched to ' + newPokemonName + '!');
        // 对方宝可梦行动
        opponentAction();
    });
});
function showActionMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.innerText = message;
    messageBox.classList.add('action-message');
    document.body.appendChild(messageBox);

    // 3秒后消除
    setTimeout(() => {
        messageBox.remove();
    }, 3000);
}

function opponentAction() {
    setTimeout(() => {
        let damage = Math.floor(Math.random() * 20) + 5; // 随机伤害
        let playerHP = document.getElementById('player-hp').innerText;
        let newHP = playerHP - damage;
        if (newHP < 0) newHP = 0;
        document.getElementById('player-hp').innerText = newHP;

        // 更新玩家血条
        let healthPercentage = (newHP / 50) * 100;
        document.querySelector('.player-pokemon .health').style.width = healthPercentage + '%';

        // 显示行动结果
        showActionMessage('Opponent used a move!');
    }, 1000); // 等待1秒后对方行动
}
// 定义每个宝可梦的最大血量
const playerMaxHP = 50;
const opponentMaxHP = 50;

document.querySelectorAll('.skill-button').forEach(button => {
    button.addEventListener('click', function() {
        let damage = this.getAttribute('data-damage');
        let opponentHP = document.getElementById('opponent-hp').innerText;
        let newHP = opponentHP - damage;
        if (newHP < 0) newHP = 0;
        document.getElementById('opponent-hp').innerText = newHP;

        // 更新对方血条
        let healthPercentage = (newHP / opponentMaxHP) * 100;
        document.querySelector('.opponent-pokemon .health').style.width = healthPercentage + '%';

        // 如果对方宝可梦血量为0，则自动重置为满血
        if (newHP === 0) {
            setTimeout(() => {
                document.getElementById('opponent-hp').innerText = opponentMaxHP;
                document.querySelector('.opponent-pokemon .health').style.width = '100%';
                showActionMessage('Opponent has recovered to full health!');
            }, 1000); // 延迟1秒后重置
        }

        // 隐藏技能按钮
        document.getElementById('skills').style.display = 'none';

        // 显示行动结果
        showActionMessage('Pikachu used ' + this.innerText + '!');
        
        // 对方宝可梦行动
        opponentAction();
    });
});
function opponentAction() {
    setTimeout(() => {
        let damage = Math.floor(Math.random() * 20) + 5; // 随机伤害
        let playerHP = document.getElementById('player-hp').innerText;
        let newHP = playerHP - damage;
        if (newHP < 0) newHP = 0;
        document.getElementById('player-hp').innerText = newHP;

        // 更新玩家血条
        let healthPercentage = (newHP / playerMaxHP) * 100;
        document.querySelector('.player-pokemon .health').style.width = healthPercentage + '%';

        // 如果玩家宝可梦血量为0，则自动重置为满血
        if (newHP === 0) {
            setTimeout(() => {
                document.getElementById('player-hp').innerText = playerMaxHP;
                document.querySelector('.player-pokemon .health').style.width = '100%';
                showActionMessage('Your Pokémon has recovered to full health!');
            }, 1000); // 延迟1秒后重置
        }

        // 显示对方行动的结果
        showActionMessage('Opponent used a move!');
    }, 1000); // 等待1秒后对方行动
}
 // 监听退出按钮的点击事件，返回主网页
        document.getElementById('exit-button').addEventListener('click', function() {
            window.location.href = 'main.html'; // 跳转回主网页
        });