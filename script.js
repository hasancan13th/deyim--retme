//variables


let btnEl = document.querySelector('#new-quote');
let quoteEl = document.querySelector('.quote');
let personEl = document.querySelector('.person');
let quotes = [
{quote: `"Hayatımızdaki gölgelerin çoğu kendi güneşimizin önünde durmamızdan oluşur."`,
person: `Ralph Waldo Emerson`},
{quote: `"Gideceği limanı bilmeyene hiçbir rüzgardan hayır gelmez"`,
person: `Michel de Montaigne`},
{quote: `"Benim gönlümün kırılmaz sabrı, senin gönlünün yumuşamaz katılığı var.
 Şu halde sevgilim aşk yolunda ikimiz de sert taşız"`,
person: `İbn-i Sina`},
{quote: `"Aynı deneyi, aynı ortamlarda defalarca yapıp farklı sonuçlar elde etmeyi hayal etmek aptallıktır."`,
person: `Albert Einstein`},
{quote: `"Doğruluğun en güzel meyvesi ruh sükunudur."`,
person: `Epikuros`},
{quote: `"Bilgi sermayemdir, bilim silahımdır, sabır giysimdir, yetinmek en üstün kazancımdır."`,
person: `Seneca`},
{quote: `"Ben gelecek için hiç bir endişe duymadım. O yeterince hızlı geliyor."`,
person: `Albert Einstein`},
{quote: `"Tutkularımız gerçek anka kuşlarıdır. Eskisinin küllerinden bir yenisi doğar."`,
person: `Johann Wolfgang von Goethe`},
{quote: `"Yeryüzündeki şartların düzelmesi, sadece bilimsel buluşlardan çok ahlaklı bir yaşama düzeninin gerçekleşmesine bağlıdır."`,
person: `Albert Einstein`},
{quote: `"Hayatta hiçbir şeyden korkmayın yalnız; her şeyi anlamaya çalışın. Şimdi anlama zamanı, böylece daha az korkabiliriz."`,
person: `Marie Curie`},
];

btnEl.addEventListener('click' ,function(){
let random = Math.floor(Math.random() * quotes.length);
quoteEl.innerText = quotes[random].quote;
personEl.innerText = quotes[random].person;
})
  