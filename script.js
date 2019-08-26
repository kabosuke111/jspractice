// JavaScript Document
//onload = function() {
//    console.log("onload");
//};
//
//addEventListener ("DOMContentLoaded", function() {
//    const app = document.getElementById("app");
//    const element = document.createElement('div');
//    let text = document.createTextNode('HelloWorld');
//    element.setAttribute('class', "contents");
//    element.appendChild(text);
//    app.appendChild(element);
//    console.log(element);
//});


let articleList = [
    {
        title: "代表挨拶",
        author: "日笠",
        date: "2019/11/23",
        image: "predog.png",
        category: "代表",
        text: '11月になりました。秋の涼しさがなくなって寂しい季節...',
        like: 1000
    },
    {
        title: "唐揚げ食べてみた",
        author: "須貝",
        date: "2019/10/26",
        image: "goma.png",
        category: "肉",
        text: '近所の空き地にできた美味しい唐揚げ店の唐揚げをちょっと...',
        like: 500
    },
    {
        title: "登山いってみた",
        author: "森本",
        date: "2019/7/31",
        image: "kawauso.png",
        category: "登山",
        text: '健康を考えて、近所の山に登山に行きました。グッズを揃えて行...',
        like: 500
    },
    {
        title: "漢の生きる道",
        author: "松藤",
        date: "2019/4/12",
        image: "minidog.png",
        category: "漢",
        text: ' 漢っていうのは二の腕に筋肉がなければダメなんですよ。足にもなく...',
        like: 500
    },
    {
        title: "ゲーム部紹介",
        author: "石黒",
        date: "2019/2/3",
        image: "shika.png",
        category: "ゲーム",
        text: 'つい最近ゲーム部を発足しました。遊びでやってるんじゃないんです...',
        like: 500
    }
];

addEventListener ("DOMContentLoaded", function() {
    let text;
    let num = 0;
    let innum = 0;
    const box = document.getElementById('content__box');
    const name = ['hikasa', 'sugai', 'morimoto', 'matsuhuji', 'ishiguro'];
    const tagArray = ['h2','p','button','img','time','p','p'];
    const classArray = ['title','author','category','image','date','text','like'];
    
    const articleMain = function(tag,cname) {
        const parentClass = document.querySelector(`.content__item--${name[innum]}`);
        const innerElem = document.createElement(tag);
        innerElem.setAttribute('class', cname);
        switch(num) {
            case 6:
                text = articleList[innum].like;
            break;
            case 5:
                text = articleList[innum].text;
            break;
            case 4:
                text = articleList[innum].date;
            break;
            case 3:
                text = articleList[innum].image;
                innerElem.setAttribute('src', `images/${text}`);
                innerElem.setAttribute('draggable', 'false');
                break;
            case 2:
                text = articleList[innum].category;
            break;
            case 1:
                text = 'by ' + articleList[innum].author;
            break;
            case 0:
                text = articleList[innum].title
            break;
            default:
                text = null;
            break;
        }
        parentClass.appendChild(innerElem).textContent = text;
    }
    
    const articleBox = function() {
        for(var i = 0; i < name.length; i++) {
            const elem = document.createElement('article');
            elem.setAttribute('class',`content__item--${name[innum]}`);
            box.appendChild(elem);
            parentClass = document.querySelector(`.content__item--${name[innum]}`);

            for(var j = 0; j <= classArray.length; j++){
                articleMain(tagArray[j], classArray[j]);
                if(num < classArray.length) {
                    num++;
                } else {
                    num = 0;
                };
            }
            innum++;
        }
    }
    articleBox();
    

});











