(function(modules) {
  var article = {
    title: 'Test article',
    intro: 'Meatball kielbasa cow, sausage rump frankfurter shankle. Kevin beef ribs ribeye, spare ribs cupim burgdoggen cow. Short loin fatback shankle, pastrami pork andouille jowl short ribs. Buffalo ribeye chuck flank meatball.',
    content: '<p>Shoulder pork belly ham hock meatloaf, kielbasa capicola picanha meatball cupim short loin boudin porchetta brisket. Spare ribs ham hock ribeye salami rump pork pig leberkas turkey alcatra turducken cupim corned beef meatloaf. Kielbasa chicken landjaeger pork hamburger, chuck ball tip pancetta meatloaf. Brisket cupim strip steak, beef ground round buffalo turkey.</p><p>Tail venison prosciutto bresaola filet mignon brisket pork frankfurter pancetta chuck pork chop picanha porchetta tongue jowl. Doner beef salami beef ribs short loin, pancetta ground round drumstick boudin rump ball tip hamburger venison leberkas ribeye. Prosciutto swine ham tenderloin. Frankfurter ribeye pastrami flank biltong.</p><p>Pork turducken pork chop doner venison fatback picanha. Swine ball tip buffalo, tongue frankfurter alcatra drumstick kevin sausage pancetta. Bacon shankle corned beef burgdoggen doner ground round short ribs pastrami andouille. Corned beef capicola tail ground round doner, bacon jerky tri-tip pork chop. Jowl chicken ham beef ribs spare ribs shoulder, tenderloin tail pork bacon tri-tip picanha. Spare ribs burgdoggen ribeye, boudin hamburger strip steak filet mignon meatball ham buffalo porchetta ham hock cupim short loin. Landjaeger filet mignon doner, pastrami sirloin beef rump flank shankle drumstick chuck ball tip cow andouille.</p><p>Fatback bacon landjaeger pig, ham hock leberkas beef ribs. Boudin shankle brisket bresaola. Swine hamburger t-bone, short ribs jerky salami strip steak tongue landjaeger tail meatball. Cupim cow capicola, tenderloin chicken swine jowl tri-tip pancetta tail sausage pork loin shoulder turkey spare ribs.</p>'
  }
  modules.article = function() {
    // Logic/listeners here ;)
    var title = document.createElement('h1');
    var intro = document.createElement('div');
    var content = document.createElement('div');

    var container = document.querySelector('#mainContent');
    container.className = 'article';

    title.innerText = article.title;
    container.appendChild(title);

    intro.className = 'intro';
    intro.innerText = article.intro;
    container.appendChild(intro);

    content.className = 'content';
    content.innerHTML = article.content;
    container.appendChild(content);
  };
}(Application.modules));
