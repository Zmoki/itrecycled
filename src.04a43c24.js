parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"eFF2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.types=exports.categories=void 0;var e={plastics:{name:"Пластмассы",color:"yellow"},paper:{name:"Бумага",color:"blue"},organic:{name:"Органические материалы",color:"brown"},glass:{name:"Стекло",color:"green"},metals:{name:"Металлы",color:"red"},composites:{name:"Композитные материалы",color:"orange"}};exports.categories=e;var r=[{number:1,abbr:{iso:["PET"],ru:["ПЭТФ"]},description:"Полиэтилентерефталат",examples:"Полиэстер, бутылки для напитков",category:"plastics"},{number:2,abbr:{iso:["PEHD","PE","HDPE"],ru:["ПЭВП","ПЭНД","ПНД"]},description:"Полиэтилен высокой плотности",examples:"Пластиковые бутылки, пакеты, мусорные вёдра",category:"plastics"},{number:3,abbr:{iso:["PVC"],ru:["ПВХ"]},description:"Поливинилхлорид",examples:"Оконные рамы, бутылки для химических продуктов, покрытия для полов, изоляция (электротехника) электрических проводов",category:"plastics"},{number:4,abbr:{iso:["PELD","LDPE"],ru:["ПЭНП","ПВД","ПЭВД"]},description:"Полиэтилен низкой плотности",examples:"Пакеты, вёдра, трубы, крышки",category:"plastics"},{number:5,abbr:{iso:["PP"],ru:["ПП"]},description:"Полипропилен",examples:"Автомобильные бамперы, внутренняя отделка автомобилей, корпуса электроинструмента, упаковка из-под шоколадок, макарон, пластиковые стаканчики",category:"plastics"},{number:6,abbr:{iso:["PS"],ru:["ПС"]},description:"Полистирол",examples:"Игрушки, одноразовая посуда, цветочные горшки, видеокассеты, чемоданы, одноразовые стаканчики",category:"plastics"},{number:7,abbr:{iso:["O","Others"]},description:"Остальные виды пластика",examples:"Полиуретан, поликарбонат, полиамиды, полиакрилонитрил и др., биопластики",category:"plastics"},{number:9,abbr:{iso:["ABS"]},description:"АБС-пластик",examples:"Корпуса мониторов/телевизоров и электроинструмента, кофеварки, сотовые телефоны, компьютерный пластик, распечатанные на 3D-принтере компоненты, которые не являются биопластиками, такими как PLA",category:"plastics"},{number:20,abbr:{iso:["PAP"]},description:"Гофрированный картон",examples:"Коробки от бытовой техники, продуктов, косметики",category:"paper"},{number:21,abbr:{iso:["PAP"]},description:"Однослойный картон",examples:"Открытки, обложки книг, короб-упаковка",category:"paper"},{number:22,abbr:{iso:["PAP"]},description:"Бумага",examples:"Журналы и газеты, конверты, бумажные пакеты, бумага для печати",category:"paper"},{number:23,abbr:{iso:["PAP","PPB"]},description:"Вощёная бумага",examples:"Упаковка для почтовых отправлений или для декора букетов",category:"paper"},{number:40,abbr:{iso:["FE"]},description:"Сталь",examples:"Банки из-под сгущённого молока, кофе, консервов, некоторых марок пива",category:"metals"},{number:41,abbr:{iso:["ALU"]},description:"Алюминий",examples:"Алюминиевые банки, тюбики для крема",category:"metals"},{number:50,abbr:{iso:["FOR"]},description:"Древесина",examples:"",category:"organic"},{number:51,abbr:{iso:["FOR"]},description:"Пробка",examples:"Бутылочные пробки, подставки для горячих чашек/тарелок, стельки, поплавки",category:"organic"},{number:60,abbr:{iso:["COT"]},description:"Хлопок",examples:"Вата",category:"organic"},{number:61,abbr:{iso:["TEX"]},description:"Джутовое волокно",examples:"Мешки, канаты",category:"organic"},{number:70,abbr:{iso:["GL"]},description:"Бесцветное стекло",examples:"",category:"glass"},{number:71,abbr:{iso:["GL"]},description:"Зелёное стекло",examples:"",category:"glass"},{number:72,abbr:{iso:["GL"]},description:"Коричневое стекло",examples:"",category:"glass"},{number:73,abbr:{iso:["GL"]},description:"Бутылочное стекло тёмно-коричневое",examples:"",category:"glass"},{number:74,abbr:{iso:["GL"]},description:"Бутылочное стекло светло-коричневое",examples:"",category:"glass"},{number:75,abbr:{iso:["GL"]},description:"Стекло с малым содержанием свинца",examples:"",category:"glass"},{number:76,abbr:{iso:["GL"]},description:"Хрусталь",examples:"",category:"glass"},{number:77,abbr:{iso:["GL"]},description:"Стекло, покрытое медью",examples:"",category:"glass"},{number:78,abbr:{iso:["GL"]},description:"Стекло, покрытое серебром",examples:"",category:"glass"},{number:79,abbr:{iso:["GL"]},description:"Позолоченное стекло",examples:"",category:"glass"},{number:80,abbr:null,description:"Бумага (картон) + Различные материалы",examples:"Упаковка от бургеров в Бургер Кинге, Мак Доналдсе",category:"composites"},{number:81,abbr:{iso:["PapJet"]},description:"Бумага (картон) + Пластик",examples:"Упаковки для кондитерских изделий, упаковка некоторых видов молока",category:"composites"},{number:82,abbr:null,description:"Бумага (картон) + Алюминий",examples:"Картонный тубус покрытый алюминий-содержащей плёнкой",category:"composites"},{number:83,abbr:null,description:"Бумага (картон) + Белая жесть",examples:"",category:"composites"},{number:84,abbr:{iso:["C/PAP"]},description:"Бумага (картон) + Пластик + Алюминий",examples:"Упаковки для сока, упаковка от чипсов «Pringles»",category:"composites"},{number:85,abbr:null,description:"Бумага (картон) + Пластик + Алюминий + Жесть",examples:"",category:"composites"},{number:87,abbr:null,description:"Биоразлагаемый пластик",examples:"Ламинат, закладки, визитки, флаеры/листовки",category:"composites"},{number:90,abbr:null,description:"Пластик + Алюминий",examples:"Антистатические пакеты, упаковка еды быстрого приготовления, металлизированные пакеты",category:"composites"},{number:91,abbr:null,description:"Пластик + Белая жесть",examples:"Крышка баночек - основа из жести изнутри покрытая пластиком, обеспечивающим герметизацию",category:"composites"},{number:92,abbr:null,description:"Пластик + Различные металлы",examples:"Упаковка",category:"composites"},{number:95,abbr:null,description:"Стекло + Пластик",examples:"",category:"composites"},{number:96,abbr:null,description:"Стекло + Алюминий",examples:"",category:"composites"},{number:97,abbr:{iso:["C/GL"]},description:"Стекло + Белая жесть",examples:"",category:"composites"},{number:98,abbr:{iso:["C/GL"]},description:"Стекло + Различные металлы",examples:"Банка из-под растворимого кофе с крышкой-клапаном, содержащей фольгу",category:"composites"}];exports.types=r;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./types");function r(e){return u(e)||o(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return c(e)}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var i=function(e){if(null===e||null==e.iso&&null==e.ru)return"";var t=[].concat(r(null!=e.iso?e.iso:[]),r(null!=e.ru?e.ru:[]));return t[0]+(t.length>1?"</br>(".concat(t.slice(1).join(", "),")"):"")},l=document.querySelector(".check"),a=document.querySelector(".check__input"),s=document.querySelector(".check__error"),y=document.querySelector(".result"),b=document.querySelector(".result__number"),m=document.querySelector(".result__abbr"),d=document.querySelector(".result__category"),f=document.querySelector(".result__description"),p=document.querySelector(".result__examples"),_=document.querySelector(".result__recycled");l.addEventListener("submit",function(r){r.preventDefault(),s.innerText="";var t=a.value,n=e.types.find(function(e){if(!Number.isNaN(t)&&parseInt(t,0)===e.number)return!0;if(null!==e.abbr){if(null!=e.abbr.iso&&e.abbr.iso.includes(t.toUpperCase()))return!0;if(null!=e.abbr.ru&&e.abbr.ru.includes(t.toUpperCase()))return!0}return!1});if(void 0!==n){var o=e.categories[n.category];y.style.setProperty("--color",o.color),b.textContent=n.number,m.innerHTML=i(n.abbr),d.innerText=o.name,f.innerText=n.description,p.innerText="Примеры: ".concat(n.examples),_.innerText="Пока нет информации о переработке этого в России. Но скоро она появится."}else s.innerText="Я не знаю такой код переработки"});
},{"./types":"eFF2"}]},{},["Focm"], null)