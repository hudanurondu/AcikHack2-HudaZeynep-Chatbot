var you = "Siz";
botSays("\nSİZE NASIL YARDIMCI OLABİLİRİM? \n\n\n");
// Recognized Speech Patterns for Question Responses.(CEVAPLANABİLECEK SORU KALIPLARI)

var Hello = [
  "MERHABA",
  "HEY",
  "NASILSIN",
  "NASILSINIZ",
  "Hİ",
  "HELLO",
  "NABER",
  "BUGÜN NASILSIN",
  "SELAM",
];
var Goodbye = [
  "GÖRÜŞÜRÜZ",
  "TEŞEKKÜRLER",
  "TEŞEKKÜR EDERİM",
  "ÇOK TEŞEKKÜRLER",
  "TAMAMDIR",
];
var Greeting = [
  "WHAT'S UP",
  "HOW'S IT GOING",
  "HOW ARE YOU",
  "NICE DAY",
  "GOOD MORNING",
  "GOOD NIGHT",
];
var Name = ["İSMİNİZ NEDİR", "ADINIZ NEDİR", "ADIN NE", "SEN KİMSİN"];
var soru = [
  "KORONAVİRÜS NEDİR",
  "COVİD-19 NEDİR",
  "CORONA",
  "KORONA NEDİR",
  "COVİD NEDİR",
  "CORONAVİRUS NEDİR",
  "WHAT İS CORONAVİRUS",
  "KORONA VİRÜS NEDİR",
  "KORONA VİRÜS NEDİR?",
  "KORONAVİRÜS NEDİR ?",
];
var soru1 = [
  "KORONAVİRÜS BELİRTİLERİ",
  "KORONAVİRÜS BELİRTİLERİ NEDİR",
  "CORONAVİRUS BELİRTİLERİ",
];

var soru2 = [
  "KORONADAN NASIL KORUNURUM",
  "CORONADAN NASIL KORUNURUM",
  "COVİD-19 DAN KORUNMA YOLLARI NELERDİR?",
  "KORONAVİRÜSTEN KORUNMA YOLU NEDİR",
  "KORONAVİRÜSTEN NASIL KORUNURUM",
  "KORONADAN KORUNMA YOLLARI",
  "KORONADAN KORUNMA YOLLARI NELERDİR",
];
var soru3 = [
  "TEST NEREDE YAPTIRILIR ?",
  "KORONAVİRÜS TESTİ NEREDE YAPTIRILABİLİR",
  "KORONA TESTİ NEREDE YAPTIRILIR",
  "CORONAVİRÜS TESTİ",
  "CORONAVİRÜS TESTİ NEREDE YAPTIRILIR",
  "COVİD-19 TESTİ NEREDE YAPTIRILIR",
  "KORONAVİRÜS TESTİ NEREDE YAPILIYOR",
  "KORONAVİRÜS TESTİ NEREDE YAPILIR",
  "COVİD-19 TESTİ NEREDE YAPILIR",
];

var soru4 = [
  "KORONA NASIL BULAŞIR",
  "KORONAVİRÜS NASIL BULAŞIR",
  "COVİD-19 NASIL BULAŞIR",
];
var soru5 = [
  "KORONANIN İLACI VAR  MI",
  "KORONAVİRÜS İLACI NEDİR",
  "COVİD-19 İLAÇ",
  "COVİD-19 İLACI",
];
var soru6 = [
  "KORONAVİRÜS TESTİ NEDİR",
  "KORONAVİRÜS TESTİ NASIL YAPILIR",
  "KORONA TESTİ NASIL YAPILIR",
  "COVİD-19 TESTİ",
];
var Actions = ["YARDIM ET", "NE YAPMALIYIM"];
var Questions = [
  "QUESTION",
  "QUIZ",
  "CODE",
  "ANSWER",
  "HTML",
  "CSS",
  "JAVASCRIPT",
];
var HTMLTags1 = [
  "<P>",
  "<I>",
  "<SPAN>",
  "<DIV>",
  "<ARTICLE>",
  "<IFRAME>",
  "<A>",
  "<ABBR>",
  "<ADDRESS>",
  "<AUDIO>",
];

//HTML
var HTMLTags2 = [
  "<A>", //    Defines a hyperlink
  "<ABBR>", //Defines an abbreviation or an acronym
  "<ACRONYM>", //    Not supported in HTML5. Use <abbr> instead. Defines an acronym
  "<ADDRESS>", //    Defines contact information for the author/owner of a document
  "<APPLET>", //    Not supported in HTML5. Use <embed> or <object> instead. Defines an embedded applet
  "<AREA>", //    Defines an area inside an image-map
  "<ARTICLE>", //    Defines an article
  "<ASIDE>", //    Defines content aside from the page content
  "<AUDIO>", //    Defines sound content
  "<B>", // Defines bold text
];
var HTMLTags3 = [
  "<BASE>", // Specifies the base URL/target for all relative URLs in a document
  "<BASEFONT>", //    Not supported in HTML5. Use CSS instead. Specifies a default color, size, and font for all text in a document
  "<BDI>", // Isolates a part of text that might be formatted in a different direction from other text outside it
  "<BDO>", //Overrides the current text direction
  "<BIG>", //Not supported in HTML5. Use CSS instead. Defines big text
  "<BLOCKQUOTE>", //    Defines a section that is quoted from another source
  "<BODY>", //Defines the document's body
  "<BR>", //Defines a single line break
  "<BUTTON>", //Defines a clickable button
  "<CANVAS>", //Used to draw graphics, on the fly, via scripting (usually JavaScript)
];
var HTMLTags4 = [
  "<CAPTION>", //Defines a table caption
  "<CENTER>", //    Not supported in HTML5. Use CSS instead. Defines centered text
  "<CITE>", //Defines the title of a work
  "<CODE>", //Defines a piece of computer code
  "<COL>", //Specifies column properties for each column within a <colgroup> element
  "<COLGROUP>", //Specifies a group of one or more columns in a table for formatting
  "<DATALIST>", //Specifies a list of pre-defined options for input controls
  "<DD>", //Defines a description/value of a term in a description list
  "<DEL>", //Defines text that has been deleted from a document
  "<DETAILS>", //Defines additional details that the user can view or hide
  "<DFN>", //    Represents the defining instance of a term
];
var colors = [
  "BLUE",
  "RED",
  "GREEN",
  "YELLOW",
  "WHITE",
  "BLACK",
  "SILVER",
  "GRAY",
];
var Else = true;
var questions = [
  colors,
  HTMLTags4,
  HTMLTags3,
  HTMLTags2,
  HTMLTags1,
  Hello,
  Goodbye,
  Greeting,
  Name,
  Actions,
  Questions,
];

var reactions = [BotHello, BotGoodbye, BotGreeting];
var BotHello = [
  "HEY",
  "HOWDY",
  "HEYA",
  "HOLA",
  "HELLO",
  "SUP",
  "KONNICHIWA",
  "ALOHA",
];
var BotGoodbye = [
  "BYE",
  "SEE YA",
  "CYA",
  "LATER",
  "ADIOS",
  "SAYONARA",
  "SEEYA",
];
var BotGreeting = [
  "WHAT'S UP",
  "HOW'S IT GOING",
  "HOW ARE YOU",
  "NICE TO SEE YOU",
  "GOOD MORNING",
  "WELCOME",
];
var BotPleasant = [
  "Thanks.",
  "Good job.",
  "Cool.",
  "I see.",
  "Anyway.",
  "right-o.",
];

function answer(x) {
  var botOut = botChat.value;
  document.getElementsByTagName("textarea")[0] = botChat;
  //RESPONSES//

  document.getElementsByTagName("input")[0].value = "";
  if (x.charAt(0).includes("!") === false) {
    youSay(x);
    botChat.scrollTop = botChat.scrollHeight;
  }
  question = x.toUpperCase();
  for (i = 0; i < 10; i++) {
    /*          EMPTY RESPONSE          */
    if (question === "" || null) {
      setTimeout(function () {
        botSays("\nBot : Size Nasıl Yardımcı Olabiliriz?");
        botChat.scrollTop = botChat.scrollHeight;
      }, 600);
      return;
    } else if (question === "!MENU") {
      /*          COMMAND MENU RESPONSES         */
      botSays(
        "\n\n**Commands are !Name yourName, !Bgcolor backgroundColor, !Text textColor, !Menu, !Secrets, !Tutorial, !Botsay textSays, and !Me textDoes,. Play around."
      );
      botChat.scrollTop = botChat.scrollHeight;
      return;
    } else if (question.slice(0, 9).includes("!BGCOLOR ")) {
      botSays("\n\n**Changed the background color to " + x.slice(9));
      botChat.scrollTop = botChat.scrollHeight;
      botChat.style.backgroundColor = x.slice(9);
      return;
    } else if (question.slice(0, 6).includes("!TEXT ")) {
      botSays("\n\n**Changed the text color to " + x.slice(6));
      botChat.scrollTop = botChat.scrollHeight;
      botChat.style.color = x.slice(6);
      return;
    }
    /* Questions, Answers and Responses */
    if (question.includes(Goodbye[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan : Bizi tercih ettiğiniz için teşekkür ederiz ve aklınıza takılan soru olursa tekrar bekleriz.Sağlıklı günler dileriz."
      );
    } else if (question.includes(soru1[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan : En yaygın semptomlar: ateş, kuru öksürük,yorgunluk         Daha seyrek görülen semptomlar:ağrı ve sızı ,boğaz ağrısı , ishal ,konjunktivit, baş ağrısı,tat alma veya koku duyusunun kaybı , ciltte döküntü ya da el veya ayak parmaklarında renk değişimi. Ciddi semptomlar:solunum güçlüğü veya nefes darlığı , göğüs ağrısı veya göğüste baskı, konuşma veya hareket kaybı. Ciddi semptomlar gösteriyorsanız derhal tıbbi yardım alın.Doktorunuzu veya sağlık tesisini ziyaret etmeden önce mutlaka telefonla arayın.Hafif semptomlar gösteren ve başka bir sağlık sorunu olmayan kişiler, tedavi sürecini evde geçirmelidir.Virüsle enfekte olan kişiler ortalama 5 - 6 gün içinde semptomları göstermeye başlar.Bununla birlikte, bu süre 14 günü bulabilir.."
      );
    } else if (question.includes(soru2[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan :Akut solunum yolu enfeksiyonlarının genel bulaşma riskini azaltmak için önerilen temel ilkeler Yeni Koronavirüs (COVID-19) için de geçerlidir. Bunlar; - El temizliğine dikkat edilmelidir. Eller en az 20 saniye boyunca sabun ve suyla yıkanmalı, sabun ve suyun olmadığı durumlarda alkol bazlı el antiseptiği kullanılmalıdır. Antiseptik veya antibakteriyel içeren sabun kullanmaya gerek yoktur, normal sabun yeterlidir.- Eller yıkanmadan ağız, burun ve gözlerle temas edilmemelidir.- Öksürme veya hapşırma sırasında burun ve ağızın tek kullanımlık kağıt mendil ile örtülmesi, kağıt mendilin bulunmadığı durumlarda ise dirsek içinin kullanılması, mümkünse kalabalık yerlere girilmemesi önerilir.- Hasta insanlarla temastan kaçınmalıdır (mümkün ise en az 1 m uzakta bulunulmalı).- Özellikle hasta insanlarla veya çevreleriyle doğrudan temas ettikten sonra eller sık sık yıkanmalıdır.- Bugün için ülkemizde sağlıklı kişilerin maske kullanmasına gerek yoktur. Herhangi bir viral solunum yolu enfeksiyonu geçirmekte olan kişinin öksürme veya hapşırma sırasında burun ve ağzını tek kullanımlık kağıt mendil ile örtmesi, kağıt mendilin bulunmadığı durumlarda ise dirsek içini kullanması, mümkünse kalabalık yerlere girmemesi, eğer girmek zorunda kalınıyorsa ağız ve burnunu kapatması, mümkünse tıbbi maske kullanması önerilmektedir."
      );
    } else if (question.includes(soru3[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan : Ülkemizdeki tüm kamu kurum/kuruluşları ile devlet üniversiteleri bünyesindeki tıbbi laboratuvar (tıbbi biyokimya, tıbbi mikrobiyoloji ve tıbbi patoloji), doku tipleme laboratuvarı ve genetik hastalıklar tanı merkezi sorumluları tarafından Çekirdek Kaynak Yönetim Sistemi (ÇKYS)’ne girilen test listesi verilerinden elde edilerek hazırlanan “Bu Test Nerede Yapılıyor?” sistemine http://ckysweb.saglik.gov.tr/labtestlerapp/testlabara.aspx adresinden giriş yapılabilmektedir."
      );
    } else if (question.includes(soru4[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan : Hasta bireylerin öksürmeleri ve aksırmaları ile ortama saçılan damlacıkların solunması ile bulaşır. Hastaların solunum parçacıkları ile kirlenmiş yüzeylere dokunulduktan sonra ellerin yıkanmadan yüz, göz, burun veya ağıza götürülmesi ile de virüs alınabilir. Kirli ellerle göz, burun veya ağıza temas etmek risklidir."
      );
    } else if (question.includes(soru5[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan : Hastalığın virüse etkili bir tedavisi yoktur. Hastanın genel durumuna göre gerekli destek tedavisi uygulanmaktadır. Bazı ilaçların virüs üzerindeki etkinliği araştırılmaktadır. Ancak şu an için virüse etkili bir ilaç yoktur.Antibiyotikler virüslere etki etmez, sadece bakterilere karşı etkilidir. Yeni Koronavirüs (2019-nCoV) bir virüstür ve bu nedenle enfeksiyonu önlemek veya tedavi etmek amacıyla antibiyotikler kullanılmamalıdır.Henüz COVID-19 için geliştirilmiş bir aşı bulunmamaktadır.Teknolojideki gelişmelere rağmen insanlar üzerinde güvenle kullanılabilecek bir aşının en erken bir yılda üretilebileceği bildirilmektedir."
      );
    } else if (question.includes(soru6[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan : Yeni Koronavirüs tanısı için gerekli moleküler testler ülkemizde mevcuttur. Tanı testi sadece Halk Sağlığı Genel Müdürlüğü Ulusal Viroloji Referans Laboratuvarında ve belirlenmiş Halk Sağlığı Laboratuvarlarında yapılmaktadır."
      );
    } else if (question.includes(soru[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan : İlk olarak Çin’in Wuhan bölgesinde, 2019 yılı Aralık ayının başında görülüp, bu bölgedeki yetkililer tarafından tanımlandığı için gayri resmi Wuhan koronavirüsü adıyla da bilinen yeni koronavirüs solunum yolu enfeksiyonuna neden olan ve insandan insana geçebilen bulaşıcı bir virüstür."
      );
    } else if (question.includes(Name[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan: Merhaba benim adım 'Sağlık Asistan'. Senin sağlık konusundaki sorularını aydınlatmak için tasarlandım."
      );
    } else if (question.includes(HTMLTags1[i])) {
      /*HTML Tag Definitions Courtesy of W3Schools.com*/
      Else = false;
      if (HTMLTags1[i] === "<P>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<p>' Defines a paragraph."
        );
      } else if (HTMLTags1[i] === "<I>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<i>' Defines a part of text in an alternate voice or mood. Italics."
        );
      } else if (HTMLTags1[i] === "<SPAN>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<Span>' Defines a section in a document."
        );
      } else if (HTMLTags1[i] === "<A>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<Span>' Defines a section in a document."
        );
      }
    } else if (question.includes(HTMLTags2[i])) {
      /*HTML Tag Definitions Courtesy of W3Schools.com*/
      Else = false;
      if (HTMLTags2[i] === "<ABBR>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<abbr>' Defines an abbreviation or acronym."
        );
      } else if (HTMLTags2[i] === "<ACRONYM>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<acronym>' Not supported in HTML5, use '<abbr>' instead."
        );
      } else if (HTMLTags2[i] === "<ADDRESS>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<address>' Defines contact information for the author/owner of a document."
        );
      } else if (HTMLTags2[i] === "<APPLET>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<applet>' Not supported in HTML5, use '<embed>' or '<object>' instead."
        );
      } else if (HTMLTags2[i] === "<AREA>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<area>' Defines an area inside an image map"
        );
      } else if (HTMLTags2[i] === "<ARTICLE>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<article>' Defines an article."
        );
      } else if (HTMLTags2[i] === "<ASIDE>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<aside>' Defines content aside from the page content."
        );
      } else if (HTMLTags2[i] === "<AUDIO>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<audio>' Defines sound content."
        );
      } else if (HTMLTags2[i] === "<B>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<B>' Defines bold text."
        );
      }
    } else if (question.includes(HTMLTags3[i])) {
      Else = false;
      if (HTMLTags3[i] === "<BASE>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<base>' Specifies the base URL/target for all relative URLs in a document"
        );
      } else if (HTMLTags3[i] === "<BASEFONT>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<basefont>' Not supported in HTML5. Use CSS instead.  Specifies a default color, size, and font for all text in a document. "
        );
      } else if (HTMLTags3[i] === "<BDI>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<bdi>' Isolates a part of text that might be formatted in a different direction from other text outside it. "
        );
      } else if (HTMLTags3[i] === "<BDO>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<bdo>' Overrides the current text direction. "
        );
      } else if (HTMLTags3[i] === "<BIG>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<big>' Not supported in HTML5, use CSS instead. Defines big text. "
        );
      } else if (HTMLTags3[i] === "<BLOCKQUOTE>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<blockquote>' Defines a section that is quoted from another source. "
        );
      } else if (HTMLTags3[i] === "<BODY>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<body>' Defines a document's body. "
        );
      } else if (HTMLTags3[i] === "<BR>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<br>' Defines a single line break. "
        );
      } else if (HTMLTags3[i] === "<BUTTON>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<button>' Defines a clickable button. "
        );
      } else if (HTMLTags3[i] === "<CANVAS>") {
        setTimeout(
          botSays,
          600,
          "\nBot : The HTML tag '<canvas>' Used to draw graphics, on the fly, via scripting. Usually Javascript. "
        );
      }

      /*} else if ( question.includes(HTMLTags4[i]) ) {

                } else if ( question.includes(HTMLTags5[i]) ) {
                    
                } else if ( question.includes(HTMLTags6[i]) ) {    */
      /*} else if ( question.includes(HTMLTags7[i]) ) {

                } else if ( question.includes(HTMLTags8[i]) ) {
                    
                } else if ( question.includes(HTMLTags9[i]) ) {    */
    } else if (question.includes(Actions[i])) {
      Else = false;
      if (question.includes("CHALLENGE")) {
        setTimeout(botSays, 600, "\nBot : Challenge my creator. Go for it.");
      } else {
        setTimeout(botSays, 600, "\nAsistan : Nasıl Yardımcı olabilirim");
      }
    } else if (question.includes(Questions[i])) {
      Else = false;
      if (Questions[i].includes("HTML")) {
        setTimeout(
          botSays,
          600,
          "\nBot : Ask my creator. Go for it. Post your question in the comments, he'll try to help you. I'm just a code, I don't know HOW to code."
        );
      } else {
        setTimeout(
          botSays,
          600,
          "\nBot : How can I help? Use my commands !Menu & !Tutorial to see what I can do."
        );
      }
    } else if (question.includes(Greeting[i])) {
      Else = false;
      if (Greeting[i].includes("HOW") && Greeting[i].includes("YOU")) {
        var reactHello = "How am I";
        var reactGreeting = "I would say I am 40% complete.";
      } else {
        num = Math.ceil(Math.random() * 3);
        var reactHello = Greeting[num];
        reactHello = reactHello.toLowerCase();
        reactHello = reactHello.charAt(0).toUpperCase() + reactHello.slice(1);
        var reactGreeting = "Same old. Getting coded mostly.";
      }
      var reactPleasant = BotPleasant[num];
      setTimeout(
        botSays,
        600,
        "\nBot : " + reactHello + ". " + reactGreeting + " " + reactPleasant
      );
    } else if (question.includes(Hello[i])) {
      var reactHello = Hello[i];
      reactHello = reactHello.toLowerCase();
      reactHello = reactHello.charAt(0).toUpperCase() + reactHello.slice(1);
      var reactGreeting = "";
      var reactPleasant = "";
      Else = false;
      setTimeout(botSays, 600, "\nBot : " + reactHello + ".");
    } else {
    }
  }
  setTimeout(function () {
    if (Else === true) {
      botSays(
        "\nAsistan : Merhaba size bu konuda yardımcı olamıyorum.Başka sormak istediğiniz soru var mı ?"
      );
    }
  }, 700);
  setTimeout(function () {
    Else = true;
    botChat.scrollTop = botChat.scrollHeight;
  }, 730);
}
function botSays(x) {
  document.getElementsByTagName("textarea")[0].innerHTML += x;
}
function youSay(x) {
  botSays("\n" + you + "  : " + x);
}
function youDo(x) {
  botSays("\n" + you + " " + x);
}
function enterButton(e, x) {
  if (e.keyCode == 13) {
    answer(x);
  }
}
