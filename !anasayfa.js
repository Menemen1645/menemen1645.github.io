
var allContents = ["İyi günler dilerim", "hey buraya sıkıştım", "bugun hava bilmiyorum aktif olarak hava durumuna bağlı değilim :/","merhaba biliyormuydun Arılar Uyuyabilir Arılar gibi böceklerin de uyuma süreçleri vardır.","bilyormuydun Karınca kolonileri, bireyler arasında bir süperorganizma gibi hareket edebilir.","işte sana ilginiç bir bilgiDenizyıldızlarının merkezi bir beyinleri yoktur; bunun yerine, her kol bir tür mini-beyin gibi davranır.","Ada Lovelace, 19. yüzyılda yazdığı bir makine kodunu, bilgisayar programlamada kullanılan ilk algoritma olarak kabul edilir.","Albert Einstein ın ölümünden sonra beyni çalındı ve daha sonra bilim dünyasına hizmet etmek için bilinmeyen bir yerde saklandı","Milyonlarca yıl süren evrim sürecinde, gökyüzünde bazı yıldızlar birleşerek daha büyük bir yıldız oluşturabilir.","Dil, vücuttaki en güçlü kaslardan biridir. Bu, birçok yemek masraflarını ve yüzeylerini kontrol etme yeteneğinden kaynaklanır.","2014 yılında NASA, uzaydaki bir süper kütleli kara deliğin yarattığı sesi kaydetti.","Şeker, aslında tat alma duyusunu uyarabilen bir madde değildir; beyin sadece ona karşı öğrenilmiş bir arzu geliştirir.","Üç saniye hafızası efsanesi gerçek değildir; balıkların hafızaları daha uzundur ve türüne bağlı olarak değişebilir.","Zero-day açıkları, henüz yazılım geliştiriciler tarafından düzeltilmemiş olan güvenlik açıklarını ifade eder. Bu açıklar siber saldırganlar tarafından hedef alınabilir.","işte sana komik bir bilgi bu yazıları üretmem için zorla tutuluyorum","şuanda bir similasyondasın  u mesaj hayatında rastgele bir yere uyarlancak similasyondan çıkmak için bana 100 vermisinin :)"];
var contents = [...allContents];

function getRandomContent() {
    if (contents.length === 0) {
        contents = [...allContents];
    }

    var randomIndex = Math.floor(Math.random() * contents.length);
    return contents.splice(randomIndex, 1)[0];
}

function updateRandomContent() {
    var randomContent = getRandomContent();
    document.getElementById("randomContent").innerHTML = randomContent;
}

document.getElementById("marqueeContainer").addEventListener("animationiteration", updateRandomContent);


updateRandomContent();



function redirectToRandomLink() {
    
    var links = [
        
        '2bytecoin.html',
        '2dolartl.html',
        '2döneryiyenzombi.html',
        '2donukgözle.html',
        '2moon.html',
        '2horozdövüşü.html',
        '2tuhafses.html',
        '2yilongma.html',
        
        
    ];

    
    var randomIndex = Math.floor(Math.random() * links.length);
    var randomLink = links[randomIndex];

    
    window.location.href = randomLink;}
