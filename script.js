document.getElementById('loadEpisodes').addEventListener('click', function() {
    'use strict';
    
    var episodeList = document.getElementById('episodeList');
    
    var episodes = [
        'Сезон 1, Эпизод 1: Пилот',
        'Сезон 1, Эпизод 2: Кот в мешке',
        'Сезон 1, Эпизод 3: ...а мешок в реке',
        'Сезон 1, Эпизод 4: Раковый больной',
        'Сезон 1, Эпизод 5: Серое вещество',
        'Сезон 1, Эпизод 6: Блеф на пустой руке',
        'Сезон 1, Эпизод 7: Бизнес по-взрослому'
    ];

     episodeList.innerHTML = '<h3>Эпизоды:</h3>' + episodes.map(episode => `<p>${episode}</p>`).join('');
});
