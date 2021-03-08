import React, { useState, useEffect } from 'react';
import '../assets/css/poems-list.css';
import Poem from './Poem';

function PoemsList() {
    const [poems, setPoems] = useState([]);

    useEffect(() => {
        setPoems([
            React.createElement(Poem, {
                key: 'poem0',
                poemId: 1,
                title: 'Сонет 45',
                text: 'Другие две основы мирозданья -$Огонь и воздух - более легки.$Дыханье мысли и огонь желанья$Я шлю к тебе, пространству вопреки.$Когда они - две вольные стихии -$К тебе любви посольством улетят,$Со мною остаются остальные$И тяжестью мне душу тяготят.$Тоскую я, лишенный равновесья,$Пока стихии духа и огня$Ко мне обратно не примчатся с вестью,$Что друг здоров и помнит про меня.$Как счастлив я!.. Но вновь через мгновенье$Летят к тебе и мысли и стремленья.'
            }),
            React.createElement(Poem, {
                key: 'poem1',
                poemId: 2,
                title: 'Сонет 40',
                text: 'Все страсти, все любви мои возьми, -$От этого приобретешь ты мало.$Все, что любовью названо людьми,$И без того тебе принадлежало.$$Тебе, мои друг, не ставлю я в вину,$Что ты владеешь тем, чем я владею.$Нет, я в одном тебя лишь упрекну,$Что пренебрег любовью ты моею.$$Ты нищего лишил его сумы.$Но я простил пленительного вора.$Любви обиды переносим мы$Трудней, чем яд открытого раздора.$$О ты, чье зло мне кажется добром.$Убей меня, но мне не будь врагом!'
            }),
            React.createElement(Poem, {
                key: 'poem3',
                poemId: 1,
                title: 'Сонет 45',
                text: 'Другие две основы мирозданья -$Огонь и воздух - более легки.$Дыханье мысли и огонь желанья$Я шлю к тебе, пространству вопреки.$Когда они - две вольные стихии -$К тебе любви посольством улетят,$Со мною остаются остальные$И тяжестью мне душу тяготят.$Тоскую я, лишенный равновесья,$Пока стихии духа и огня$Ко мне обратно не примчатся с вестью,$Что друг здоров и помнит про меня.$Как счастлив я!.. Но вновь через мгновенье$Летят к тебе и мысли и стремленья.'
            }),
            React.createElement(Poem, {
                key: 'poem4',
                poemId: 2,
                title: 'Сонет 40',
                text: 'Все страсти, все любви мои возьми, -$От этого приобретешь ты мало.$Все, что любовью названо людьми,$И без того тебе принадлежало.$$Тебе, мои друг, не ставлю я в вину,$Что ты владеешь тем, чем я владею.$Нет, я в одном тебя лишь упрекну,$Что пренебрег любовью ты моею.$$Ты нищего лишил его сумы.$Но я простил пленительного вора.$Любви обиды переносим мы$Трудней, чем яд открытого раздора.$$О ты, чье зло мне кажется добром.$Убей меня, но мне не будь врагом!'
            })
        ]);
    }, []);

    return (
        <div className="poems container">
            { poems }
        </div>
    );
}
export default PoemsList;