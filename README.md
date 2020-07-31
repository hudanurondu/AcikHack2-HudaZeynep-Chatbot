# AcikHack2-HudaZeynep-Chatbot
Türkçe doğal dil işleme yarışması


## Projenin Amacı
*Sağlık Asistanı bizim içinde yaşadığımız durumdan esinlenerek oluşturduğumuz bir proje. Evlerimizden çıkmadan yani risk altına girmeyerek ya da hastalıktan şüpheleniyorsak başkasını da riske atmadan korona hakkında bilgi alabileceğimiz, bunun yanı sıra başka hastalıklar ve sağlıklı yaşam gibi konular hakkında da insanlara evden sağlık hizmeti verecek, insanları yönlendirecek bir uygulama yapmayı amaçladık. Özellikle sağlık alanında bu yardımın gelecek için çok kritik olacağını içinde bulunduğumuz dönem de destekliyor.*



*Chatbot dosyasını açtığınızda karşınıza ilk aşağıda görmüş olduğunuz chatbot sayfası açılacak. Bu sayfa üzerinde butonlar ile seçimler yapabileceksiniz. Yaptığınız seçimler sizi yönlerdirmek üzere farklı URL'e gidecek.*

![Ekran Görüntüsü (191)](https://user-images.githubusercontent.com/67288170/88976455-bb899380-d2c4-11ea-9e75-4fe1d65ec73b.png)


*Butonlar üzerinden 'Mobil Sağlık Asistana bağlanmak istiyorum.' u seçtiğinizde sizi yapay zeka alt tabanlı chatbotumuz karşılamaktadır. <br/>
Yapay zeka ile kodlamış olduğumuz chatbotumuz covid-19 ile alakalı sorularınızı yanıtlamak için oluşturuldu.*

![Ekran Görüntüsü (192)](https://user-images.githubusercontent.com/67288170/88976698-28049280-d2c5-11ea-867f-3976900e6979.png)



## Tasarım Aşaması

*Tasarımın farklı platformlara uyum sağlayabilmesi için SASS kullandık. <br/>
SABİM web tasarım standartlarına bağlı kaldık. <br/>
Tasarımda köşeli ve sert ifadelerden kaçındık. Daha çok kullanıcı dostu ve göze hitap eden yaklaşım benimsendi.*



## Sağlık asistan kodlama aşaması



var you = "Siz"; <br/>
botSays("\nSİZE NASIL YARDIMCI OLABİLİRİM? \n\n\n");

 Mobil sağlık asistanın karşılama cümlesi, verilecek cevaplar doğrultusunda chatbot aktif olacaktır.  <br/>


var Goodbye = [
  "GÖRÜŞÜRÜZ",
  "TEŞEKKÜRLER",
  "TEŞEKKÜR EDERİM",
  "ÇOK TEŞEKKÜRLER",
  "TAMAMDIR",
];
<br/>

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
  "KORONAVİRÜS NEDİR ?",];

<br/>
 
 if (question.includes(Goodbye[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan : Bizi tercih ettiğiniz için teşekkür ederiz ve aklınıza takılan soru olursa tekrar bekleriz.Sağlıklı günler dileriz."
      );
    }else if (question.includes(soru[i])) {
      Else = false;
      setTimeout(
        botSays,
        600,
        "\nAsistan : İlk olarak Çin’in Wuhan bölgesinde, 2019 yılı Aralık ayının başında görülüp, bu bölgedeki yetkililer tarafından tanımlandığı için gayri resmi Wuhan koronavirüsü adıyla da bilinen yeni koronavirüs solunum yolu enfeksiyonuna neden olan ve insandan insana geçebilen bulaşıcı bir virüstür." 
 
 <br/>
 Chatbot'a eklediğimiz soru-cevap skalası ile yapay zeka alt tabanı sağlandı. 
 
 
 
<br/>

{"intents": [
       
    {"tag": "yardım isteme",
         "patterns": ["korona mıyım?"," merhaba koronadan şüpheleniyorum", "yardım eder misiniz", "kendimi iyi hissetmiyorum", "yardıma ihtiyacım var", "ateşim var", "yurt dışından geldim kendimi iyi hissetmiyorum", "kusuyorum", "başım çok ağrıyor", "acelem var bana yardımcı olun", "babam/annem/kardeşim çok hasta, ne yapmalıyız", "evde hasta var grip mi korona mı çözemedik", "hastaneye gitmek doğru mu?", "arkadaşımı iki gün önce korona pozitif olarak hastaneye almışlar ben de kapmış olabilir miyim?"],
         "responses": ["Tamam, tek tek gidelim. Size doğru yardım edebilmem için soruları sırayla ve basitçe cevaplayın lütfen. Yaşınız kaç?"],
         "context_set":""   },
        
    {"tag": "kan",
         "patterns": ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29",
"30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100"  ],
         "responses": ["Kan grubunuzu öğrenebilir miyim?(A+ gibi yazınız lütfen)"]
        },
        
    {"tag": "kronik hastalık",
         "patterns": ["A+", "A-","B+","B-","AB+","AB-","0+","0-"],
         "responses": ["Herhangi bir kronik rahatsızlığınız var mı?(Diyabet Tip1,Tip2, Tansiyon, Romatolojik hastalıklar, Kalp rahastızlığı, vb.)"]
        },
    
        
    {"tag": "ilaç",
         "patterns": ["Kanser tedavisi görüyorum.", "şekerim var", "diyabetim var","diyabet tip1", "diyabet tip2","kalp rahastızlığım var","kalp kapakçığımda sorun var", "tansiyonum var", "tansiyon hastasıyım", "romatizmam var", "iltihaplı romatizma var" ],
         "responses": ["Kullandığınız bağışıklık baskılayıcı bir ilaç var mı?(evet veya hayır olarak)"]
        },
        
    {"tag": "ateş",
         "patterns": ["evet","hayır" ],
         "responses": ["Ateşiniz kaç derece?(bu bilginin doğru verilmesi çok önemli)"]
        },
        
    {"tag": "ateş 2",
         "patterns": ["35","35.1","35.2","35.3","35.4","35.5","35.6","35.7","35.8","35.9","36","36.1","36.2","36.3","36.4","36.5","36.6","36.7","36.8","36.9","37","37.1","37.2","37.3","37.4","37.5","37.6","37.7","37.8","37.9","38","38.1","38.2","38.3","38.4","38.5","38.6","38.7","38.8","38.9","39","39.1","39.2","39.3","39.4","39.5","39.6","39.7","39.8","39.9","40"],
         "responses": ["Ateşiniz kaç gündür bu şekilde?"]
        },
    {"tag": "yorgunluk",
         "patterns": ["1,2 falan","bir veya iki", "bir haftadır","birkaç gündür","bilmiyorum","yurtdışından geldiğimden beri" ],
         "responses": ["Yorgunluk veya halsizlik var mı?(evet veya hayır)"]
        },
    {"tag": "solunum",
         "patterns": ["evet","hayır" ],
         "responses": ["Solunum zorluğu veya nefes darlığı mevcut mu?"]
        },
     {"tag": "öksürük",
         "patterns": ["evet var","nefes alamıyorum","sürekli tıkanıyorum","akciğerlerim şiş","hayır yok","var","yok" ],
         "responses": ["Öksürüyor musunuz?Bu kuru ökrürük mü?"]
        },
     {"tag": "baş ağrısı",
         "patterns": ["evet öksürüyorum","çok kötü öksürüyorum","şiddetli öksürüyorum","balgam atıyorum","sürekli bir balgam var","kuru öksürük evet","öksürüyorum ve kuru","kuru kuru öksürüyorum","kuru öksürüyorum"],
         "responses": ["Baş ağrınız mevcut mu?"]
        },
     {"tag": "hapşırık",
         "patterns": ["evet ağrıyor","çok şiddetli ağrıyor","başımda şiddetli bir ağrı var","evet","hayır","hayır ağrımıyor","şakaklarımda ağrı var","dün çok ağrıyordu" ],
         "responses": ["Normal dışı bir hapşurma durumu var mı?"]
        }, 
    
    {"tag": " burun akıntısı",
         "patterns": ["evet","hayır","evet ama alerjim var","evet polen alerjim var","toza alerjim var o yüzden çok hapşırıyorum", "normal düzeyde hapşırıyorum", "hayır normal","hayır hapşurmuyorum" ],
         "responses": ["Burun akıntısı mevcut mu?(evet ya da hayır)"]
        },
     
    {"tag": "göz sulanması",
         "patterns": ["evet","hayır" ],
         "responses": ["Gözleriniz sulanıyor mu?(evet veya hayır)"]
        },
     
    {"tag": "boğaz",
         "patterns": ["evet","hayır","bazen" ],
         "responses": ["Boğazınız ağrıyor mu ya da kaşıntı mevcut mu?"]
        },
     
    {"tag": "ishal",
         "patterns": ["evet","hayır","birkaç gündür ağrıyor","sesim kısıldı","çok kötü kaşınıyor" ],
         "responses": ["İshal oldunuz mu?(evet oldum ya da hayır olmadım)"]
        },
    
    {"tag": "tamam",
         "patterns": ["evet oldum","hayır olmadım" ],
         "responses": ["Tamamdır biz bilgilerinizi aldık. Aşağıdaki linkte korona belirtileri kesin belirtilmiştir. Belirtiler eşleşiyor ise lüfen bizim müdahale etmemizi beklemeden maskenizi takarak en yakın acil merkeze gidiniz!"]
        }
    
   ]
} 
 
 <br/>
Chatbot'a öncelikle kullanacağı bir data vermemiz gerekiyordu. Biz kendisine gelen metinleri tanıyabilmesi için yukarıdaki JSON dosyasını hazırladık. Yukarıda "tag" ile belirttiğimiz temalara göre kullanıcıdan "pattern" alıp bunlara "responses" yani cevaplar üretmesini sağlayacak cümle örneklerini sıraladık.
<br/>
import nltk
from nltk.stem.lancaster import LancasterStemmer
stemmer = LancasterStemmer()
import numpy
import tflearn
import tensorflow
import random
import json
import pickle
with open("untitled1new.json") as file:
    data = json.load(file)
    <br/>
Ürettiğimiz JSON verisini bu kodla beraber yükleyerek "Sağlık Asistanını" tasarlamaya başladık.
    <br/>
    words = []
labels = []
docs_x = []
docs_y = []


for intent in data['intents']:
    for pattern in intent['patterns']:
        wrds = nltk.word_tokenize(pattern)
        words.extend(wrds)
        docs_x.append(wrds)
        docs_y.append(intent["tag"])
        
    if intent['tag'] not in labels:
        labels.append(intent['tag'])
<br/>

 Yukarıdaki bu kodlarla ise Chatbot'a yönlendirilen soruların( yani girilen verilerin) çıktısını aldık.
    <br/>
 words = [stemmer.stem(w.lower()) for w in words if w != "?"]
    words = sorted(list(set(words)))


    labels = sorted(labels)
 <br/>
    Bu yukarıdaki kod ile Chatbot'un kelimelerin kökünü bulmasını sağladık.Böylece Chatbot'umuzun kelime köklerini kavrayarak kendine bir vocabulary sözlüğü oluşturmasını sağladık.

<br/>
 training = []
output = []
out_empty = [0 for _ in range(len(labels))]
for x, doc in enumerate(docs_x):
    bag = []
    wrds = [stemmer.stem(w.lower()) for w in doc]
    for w in words:
        if w in wrds:
            bag.append(1)
        else:
            bag.append(0)
    output_row = out_empty[:]
    output_row[labels.index(docs_y[x])] = 1
    training.append(bag)
    output.append(output_row)
    
    <br/>
  Yukarıdaki JSON dosyası ile Chatbot'a bir kelime grubu vermiştik. Sonra da kelime köklerini tanımasını sağlamıştık. Şimdi bizim ona verdiğimiz ihtimalleri ve yazılanları karşılaştırarak bir cevap üretmesini ağlamamız gerekiyor. Onu da bu kod ile gerçekleştirdik.
  <br/>
training = numpy.array(training)
output = numpy.array(output)
<br/>
*Şimdi eğittiğimiz kodları çıktıya dönüştürelim.*
<br/>
    net = tflearn.input_data(shape=[None, len(training[0])])
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, 8)
net = tflearn.fully_connected(net, len(output[0]), activation="softmax")
net = tflearn.regression(net)


model = tflearn.DNN(net)
 <br/>
*Bu kodumuz ile berber artık chatbota pratik yaptırarak eğitmeye başlıyoruz.*
    <br/>

model.fit(training, output, n_epoch=1000, batch_size=8, show_metric=True)
model.save("model.tflearn")
<br/>
*Bu kodumuz ise chatbot'un öğrendiğini unutmamasını sağlıyor.*
<br/>
def bag_of_words(s, words):
    bag = [0 for _ in range(len(words))]
    s_words = nltk.word_tokenize(s)
    s_words = [stemmer.stem(word.lower()) for word in s_words]
    for se in s_words:
        for i, w in enumerate(words):
            if w == se:
                bag[i] = 1
            
    return numpy.array(bag)
    
    <br/>

def chat():
    print("Start talking with the bot (type quit to stop)!")
    while True:
        inp = input("You: ")
        if inp.lower() == "quit":
            break
        results = model.predict([bag_of_words(inp, words)])
        results_index = numpy.argmax(results)
        tag = labels[results_index]
        for tg in data["intents"]:
            if tg['tag'] == tag:
                responses = tg['responses']
        print(random.choice(responses))
chat()
<br/>
Bu son kodumuz ile beraber Sağlık Asistanımız içine attığımız sınıflar içinden tahminler yapabilecek hale geliyor ve artık hazır!
<br/>


## Proje Ekibi

*HÜDANUR ÖNDÜ hudanurondu@gmail.com* <br/>
*ZEYNEP SUDE KANKUR sude.kankur@gmail.com*
