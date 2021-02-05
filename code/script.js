// All the DOM selectors stored as short variables
const chat = document.getElementById('chat');
// const input = document.getElementById('input-wrapper');

// Global variables, if you need any, declared here
let step = 1;

// Functions declared here
const postAnswer = (value) => {
  if (value != "") {
    showMessage(value, 'user');
    showMessage(`Welcome ${value}, what style are you looking for? Funny, scary or cute?`, 'bot');
  } else {
    step -= 1;
  }
}

const threeWayQuestion = (value) => {

  showMessage(value, 'user');

  let normalizeValue = value.toLowerCase();

  if (normalizeValue.includes('funny')) {
    showMessage(`Pick a theme:`, 'bot');
    chat.innerHTML += `
      <div class="choice-btn-container">
        <button id='tv' class="choice-btn">TV</button>
        <button id='movies' class="choice-btn">Movies</button>
        <button id='pop-culture' class="choice-btn">Pop culture</button>
      </div>
    `
    document.getElementById('tv').addEventListener("click", () => {
      showMessage("TV", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Tina Belcher,'Bob's Burgers' or David Rose,'Schitt's Creek'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Tina Belcher,'Bob's Burgers'</h3>
              <ul>
                What you need:
                <li>Light blue t-shirt</li>
                <li>Blue skirt</li>
                <li>White socks with red stripes</li>
                <li>Black high-top shoes</li>
                <li>Black thick-rim glasses</li>
                <li>Black bob wig with yellow hair clip</li>
              </ul>
              <img class="img" src="https://mcdn.wallpapersafari.com/medium/47/13/JIBSUO.jpg"/>
            </div>
            <div class="result-list">
              <h3>David Rose,'Schitt's Creek'</h3>
              <ul>
                What you need:
                <li>B&W over-the-top sweater</li>
                <li>Black skirt</li>
                <li>Black jeans</li>
                <li>Black hig-top shoes</li>
                <li>White oval sunglasses</li>
              </ul>
              <img class="img" src="https://i.pinimg.com/736x/a3/88/3e/a3883edbe81d000388588126048ff875.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
        });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Mr. Rogers or Flo, Progressive`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Mr. Rogers</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Adult-Neighbor-Rogers-Costume-Kit/dp/B07SW6PGYQ/ref=sr_1_1?dchild=1&keywords=Mr+rogers+costume&qid=1612438132&sr=8-1">Buy here</a>
                </li>
              </ul>
            </div>
            <div class="result-list">
              <h3>Flo, Progressive</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Progressive-Collection-Insurance-Costume-One_Size/dp/B009B14SA2">Buy here</a>
                </li>
              </ul>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Moira,'Schitt's Creek' or Dwight Schrute,'The Office'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Moira,'Schitt's Creek'</h3>
              <ul>
                What you need:
                <li>Black and white blonde wig</li>
                <li>Black dress</li>
                <li>Silver accessories</li>
                <li>Red lipstick</li>
              </ul>
              <img class="img" src="https://www.goldderby.com/wp-content/uploads/2020/09/catherine-ohara-schitts-cre.jpg"/>
            </div>
            <div class="result-list">
              <h3>Dwight Schrute,'The Office'</h3>
              <ul>
                What you need:
                <li>Short-sleeve yellow button-down</li>
                <li>Patterned tie</li>
                <li>Dressed pants</li>
                <li>Brown belt with a gun holster</li>
              </ul>
              <img class="img" src="https://www.cheatsheet.com/wp-content/uploads/2019/07/The-Office-Dwight-Schrute.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
    });


    document.getElementById('movies').addEventListener("click", () => {
      showMessage("Movies", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Regina George,'Mean Girls' or Bill Lumbergh,'Office Space'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Regina George,'Mean Girls'</h3>
              <ul>
                What you need:
                <li>White tank top with 2 holes</li>
                <li>Brightly colored bra</li>
                <li>Tight black miniskirt</li>
                <li>Pink cardigan</li>
              </ul>
              <img class="img" src="https://i.pinimg.com/originals/ff/75/7b/ff757b6000623f7316ff2303687698f2.jpg"/>
            </div>
            <div class="result-list">
              <h3>Bill Lumbergh,'Office Space'</h3>
              <ul>
                What you need:
                <li>White-collared yellow button-up</li>
                <li>Patterned tie</li>
                <li>Suspenders</li>
                <li>Giant, thin-rimmed glasses</li>
              </ul>
              <img class="img" src="https://www.austinchronicle.com/binary/9ef6/screens_feature3-1.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Holtzmann,'Ghost Busters' Or Olaf,'Frozen'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Holtzmann,'Ghost Busters'</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.halloweenexpress.com/womens-ghostbusters-costume-ru820121/">Buy here</a>
                </li>
              </ul>
            </div>
            <div class="result-list">
              <h3>Olaf,'Frozen'</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/UBCM-Costume-Inflatable-Birthday-Outfit/dp/B07YTCR88D/ref=sr_1_4?dchild=1&keywords=olaf+costume+adult&qid=1612438450&sr=8-4">Buy here</a>
                </li>
              </ul>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
        
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Elle Woods,'Legally Blonde' or Derek Zoolander,'Zoolander'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Elle Woods,'Legally Blonde'</h3>
              <ul>
                What you need:
                <li>All-pink outfit</li>
                <li>BLonde wig</li>
                <li>Stuffed Chihuahua</li>
              </ul>
              <img class="img" src="https://i.insider.com/5f08ce4baee6a82702176d61?width=700"/>
            </div>
            <div class="result-list">
              <h3>Derek Zoolander,'Zoolander'</h3>
              <ul>
                What you need:
                <li>Wild, colorful suit</li>
                <li>Lots of leather and animal prints</li>
                <li>Glittery make up</li>
              </ul>
              <img class="img" src="https://pbs.twimg.com/profile_images/451555359757697024/eIUHjC9W.jpeg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });

    });
    document.getElementById('pop-culture').addEventListener("click", () => {
      showMessage("Pop culture", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Carole Baskin,'Tiger King' or Johnny Lawrence,'Cobra Kai'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Carole Baskin,'Tiger King'</h3>
              <ul>
                What you need:
                <li>Flower crown</li>
                <li>Animal print blouse</li>
                <li>Jeans</li>
                <li>A stuffed tiger for added effect</li>
              </ul>
              <img class="img" src="https://s31242.pcdn.co/wp-content/uploads/2020/10/O_njEScg.jpeg"/>
            </div>
            <div class="result-list">
              <h3>Johnny Lawrence,'Cobra Kai'</h3>
              <ul>
                What you need:
                <li>Black tank top</li>
                <li>Black shirt</li>
                <li>Loose black pants</li>
                <li>Comfy sneakers</li>
                <li>Black headband</li>
              </ul>
              <img class="img" src="https://i.pinimg.com/originals/e5/f4/61/e5f4616eb76c2c2a1f78d4d43795cb5c.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Zoom potato Filter or Baby yoda`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Zoom potato Filter</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Bodysocks-Adult-Potato-Fancy-Costume/dp/B074DZHJGG/ref=sr_1_2?dchild=1&amp;keywords=potato+costume&amp;qid=1603287670&amp;sr=8-2">Buy here</a>
                </li>
              </ul>
            </div>
            <div class="result-list">
              <h3>Baby yoda</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Cosplaysky-Mandalorian-Cosplay-Costume-Halloween/dp/B08HSFQP5Y/ref=sr_1_2?dchild=1&keywords=adult+baby+yoda+costume&qid=1612441986&sr=8-2">Buy here</a>
                </li>
              </ul>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`The Dolly Parton Challenge or Sigrit,'Eurovision'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>The Dolly Parton Challenge</h3>
              <ul>
                What you need:
                <li>Business outfit for LinkedIn</li>
                <li>Holiday sweater for Facebook</li>
                <li>Country-inspired look fro Insta</li>
                <li>Playboy bunny for Tinder</li>
              </ul>
              <img class="img" src="https://media.thetab.com/blogs.dir/90/files/2020/01/dolly-1024x1024.jpg"/>
            </div>
            <div class="result-list">
              <h3>Sigrit,'Eurovision'</h3>
              <ul>
                What you need:
                <li>Long, white dress</li>
                <li>White fur coat</li>
                <li>Silver makeup</li>
                <li>Silver metal lipstick</li>
              </ul>
              <img class="img" src="https://www.danezon.com/wp-content/uploads/2020/07/Eurovision-Song-Contest-Sigrit-Ericksdottir-Leather-Jacket.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });

    });
      
  } else if (normalizeValue.includes('scary')) {
    showMessage(`Pick a theme:`, 'bot');
    chat.innerHTML += `
      <div class="choice-btn-container">
        <button id='gory' class="choice-btn">Gory</button>
        <button id='creepy' class="choice-btn">Creepy</button>
        <button id='existential' class="choice-btn">Existential</button>
      </div>
    `
    document.getElementById('gory').addEventListener("click", () => {
      showMessage("Gory", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Zombie`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Zombie</h3>
              <ul>
                What you need:
                <li>Face paint</li>
                <li>Fake blood</li>
                <li>Torn t-shirt with fake blood</li>
              </ul>
              <img class="img" src="https://media2.s-nbcnews.com/j/newscms/2014_20/442946/140514-zombie-jms-1719_908319adff96f656f5a7a865ee00696b.fit-760w.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Headless horseman`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Headless horseman</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/California-Costumes-Headless-Horseman-Costume/dp/B000RJ027K/ref=sr_1_1?dchild=1&keywords=headless+horseman+costume&qid=1612438898&sr=8-1">Buy here</a>
                </li>
              </ul>
            </div>  
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Dead person with a knife in your head`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Dead person with a knife in your head</h3>
              <ul>
                What you need:
                <li>Face paint</li>
                <li>Knife over your heaad</li>
              </ul>
              <img class="img" src="https://media.istockphoto.com/videos/elderly-man-with-knife-in-head-halloween-makeup-and-costume-blood-on-video-id1172328045?s=640x640"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });

    });
    document.getElementById('creepy').addEventListener("click", () => {
      showMessage("Creepy", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Skeleton`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Skeleton</h3>
              <ul>
                What you need:
                <li>Face makeup</li>
                <li>All-black outfit</li>
                <li>White t-shirt cut open</li>
              </ul>
              <img class="img" src="https://i.pinimg.com/originals/3f/fe/01/3ffe010f4e45f4b9e75451c92a417199.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Pennywise,'It' or Chucky,'Child's Play'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Pennywise,'It'</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Charades-Chapter-Pennywise-Costume-Shown/dp/B07XC9G5Y3/ref=sr_1_1_sspa?dchild=1&keywords=pennywise+costume&qid=1612439127&sr=8-1-spons&psc=1&smid=A2RST36JAEUIO8&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySk81TTdLTFZJRzJCJmVuY3J5cHRlZElkPUEwNjYxMDAyMllSTUNSRUQ3MUwzVSZlbmNyeXB0ZWRBZElkPUEwMTk0NzM0N1MwUDVTSk1BOFI5JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">Buy here</a>
                </li>
              </ul>
            </div>  
            <div class="result-list">
              <h3>Chucky,'Child's Play'</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Rubies-Childs-Chucky-Costume-X-Large/dp/B08315T68H/ref=sr_1_7?dchild=1&keywords=chucky+childs+play+costume&qid=1612439183&sr=8-7">Buy here</a>
                </li>
              </ul>
            </div>  
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Creepy clown`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Creepy clown</h3>
              <ul>
                What you need:
                <li>Face make up</li>
                <li>Red clown nose</li>
                <li>Rainbow wig</li>
              </ul>
              <img class="img" src="https://media.istockphoto.com/videos/creepy-clown-hiding-in-tree-with-baseball-bat-video-id613948366?s=640x640"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });

    });
    document.getElementById('existential').addEventListener("click", () => {
      showMessage("Existential", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Schrodinger's cat`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Schrodinger's cat</h3>
              <ul>
                What you need:
                <li>All black clothes</li>
                <li>Eyeliner whiskers</li>
                <li>A box around your waist</li>
              </ul>
              <img class="img" src="https://i.pinimg.com/originals/aa/44/c3/aa44c3777ab698dfa489bc3289e7a77d.png"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Existential dread`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Existential dread</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Timein-Spandex-Costume-Zentai-Medium/dp/B07W11FP4N/ref=sr_1_1_sspa?dchild=1&keywords=black+bodysuit+costume&qid=1612439422&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzUU1QMU1CMDRNVlRRJmVuY3J5cHRlZElkPUEwNTgwNDkzRFhNUjJJTUgyOTk0JmVuY3J5cHRlZEFkSWQ9QTA2OTQ4NjUzRFlLTkRXRUJUQ1hJJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">Buy here</a>
                </li>
              </ul>
            </div>  
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Global warming`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Global warming</h3>
              <ul>
                What you need:
                <li>Earth t-shirt</li>
                <li>Thermometer in your mouth</li>
                <li>Big cozy cardigan</li>
              </ul>
              <img class="img" src="https://i.pinimg.com/originals/66/ec/ac/66ecacfa8db869c44ffe6e49e1c3f11d.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });

    });

  } else if (normalizeValue.includes('cute')) {
    showMessage(`Pick a theme:`, 'bot');
    chat.innerHTML += `
      <div class="choice-btn-container">
        <button id='cheeky' class="choice-btn">Cheeky</button>
        <button id='classic' class="choice-btn">Classic</button>
        <button id='adorable' class="choice-btn">Adorable</button>
      </div>
    `
    document.getElementById('cheeky').addEventListener("click", () => {
      showMessage("Cheeky", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Cheetah or Nerd`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Cheetah</h3>
              <ul>
                What you need:
                <li>Animal print shirt</li>
                <li>Whiskers drawn on with eyliner</li>
              </ul>
              <img class="img" src="https://www1.pictures.livingly.com/mp/FUD7yZudI5ol.jpg"/>
            </div>
            <div class="result-list">
              <h3>Nerd</h3>
              <ul>
                What you need:
                <li>Button-down shirt</li>
                <li>Plaid khakis or mini skirt</li>
                <li>Thick-rimmed glasses</li>
              </ul>
              <img class="img" src="data:image/jpeg;base64,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"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Referee or Hugh Hefner`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Referee</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Risque-Referee-Womens-Halloween-Costume/dp/B075W1FXM1/ref=sr_1_2?dchild=1&keywords=sexy+referee+costume&qid=1612439632&sr=8-2">Buy here</a>
                </li>
              </ul>
            </div>  
            <div class="result-list">
              <h3>Hugh Hefner</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Maxim-Party-Supplies-Smoking-Captain/dp/B07SM8M22M/ref=sr_1_3?dchild=1&keywords=hugh+hefner+costume&qid=1612439606&sr=8-3">Buy here</a>
                </li>
              </ul>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Lifeguard`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Lifeguard</h3>
              <ul>
                What you need:
                <li>Red bathing suit</li>
                <li>Sunglasses</li>
                <li>Sunscreen</li>
                <li>Whistle</li>
                <li>A float</li>
              </ul>
              <img class="img" src="https://i.pinimg.com/originals/59/2f/1d/592f1d18232e4196d6f150b1097ebeb8.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });      
      
    });
    document.getElementById('classic').addEventListener("click", () => {
      showMessage("Classic", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Rosie the Riveter or Joel Goodsen,'Risky Business'`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Rosie the Riveter</h3>
              <ul>
                What you need:
                <li>Denim top</li>
                <li>Blue jeans</li>
                <li>Red bow headband</li>
                <li>Red lipstick</li>
              </ul>
              <img class="img" src="https://cdn.britannica.com/02/216702-050-914C6006/Rosie-the-Riveter-We-Can-Do-It-poster-J-Howard-Miller-circa-1942-1943-World-War-II.jpg"/>
            </div>
            <div class="result-list">
              <h3>Joel Goodsen,'Risky Business'</h3>
              <ul>
                What you need:
                <li>White button-down shirt</li>
                <li>White high socks</li>
                <li>White underwear</li>
                <li>Black sunglasses</li>
              </ul>
              <img class="img" src="https://i.pinimg.com/originals/08/87/43/08874321b5dbef5a525498189ee72711.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Pirate`, 'bot');
        chat.innerHTML += `
        <div class="result-container">
          <div class="result-list">
            <h3>Pirate</h3>
            <ul>
              What you need:
              <li>
                <a target="_blank" href="https://www.partykungen.se/karibisk-pirat-budget-maskeraddrakt.html?gclid=Cj0KCQiA0-6ABhDMARIsAFVdQv90LtCr0o1bDwXJdDM5Y7-Q9k8gSjPXRfiwCcLAMWaIVyh_uWrB3b0aAk0cEALw_wcB#23238-4">Buy here</a>
              </li>
            </ul>
          </div>  
        </div>
        <button class="try-again" onClick="window.location.reload();">Try again</button>
      `
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Witch or wizard`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Witch</h3>
              <ul>
                What you need:
                <li>All-black outfit</li>
                <li>Big, pointy hat</li>
                <li>Face paint</li>
              </ul>
              <img class="img" src="https://ideastand.com/wp-content/uploads/2017/09/witch-costume-diy/13-witch-costume-diy-ideas-tutorials.jpg"/>
            </div>
            <div class="result-list">
              <h3>wizard</h3>
              <ul>
                What you need:
                <li>All-black outfit</li>
                <li>Cloak</li>
                <li>White beard</li>
              </ul>
              <img class="img" src="https://www.partyhallen.se/cache/2b/799x799-b_langt-skagg-deluxe-gratt-1.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });      

    });
    document.getElementById('adorable').addEventListener("click", () => {
      showMessage("Adorable", 'user');
      showMessage(`Do you want your costume to be...?`, 'bot');
      chat.innerHTML += `
        <div class="choice-btn-container">
          <button id='diy' class="choice-btn">DIY</button>
          <button id='store-bought' class="choice-btn">Store-bought</button>
          <button id='a-combo' class="choice-btn">A combo</button>
        </div>
      `
      document.getElementById('diy').addEventListener("click", () => {
        showMessage("DIY", 'user');
        showMessage(`Scarecrow`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Scarecrow</h3>
              <ul>
                What you need:
                <li>Blue jeans or overalls</li>
                <li>Plaid flannel shirt</li>
                <li>Face paint</li>
                <li>Straw hat</li>
              </ul>
              <img class="img" src="https://i.ytimg.com/vi/EZk1u_Yiw3o/maxresdefault.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('store-bought').addEventListener("click", () => {
        showMessage("Store-bought", 'user');
        showMessage(`Ladybug or Monkey`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Ladybug</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.co.uk/Amscan-International-Darling-Ladybug-Costume/dp/B00TIVPXDQ">Buy here</a>
                </li>
              </ul>
            </div>  
            <div class="result-list">
              <h3>Monkey</h3>
              <ul>
                What you need:
                <li>
                  <a target="_blank" href="https://www.amazon.com/Sqlszt-Animal-Cosplay-Pajamas-Costume/dp/B00ZI5ILY4/ref=sr_1_1_sspa?dchild=1&keywords=adult+monkey+costume&qid=1612440212&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExT0JHVUs0SVo5QUZMJmVuY3J5cHRlZElkPUEwOTAwMTYxM0swU0U1RjU3SjdVRiZlbmNyeXB0ZWRBZElkPUEwNzcxMjU1NlFLUkFRNUlCSDVEJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">Buy here</a>
                </li>
              </ul>
            </div>  
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });
      document.getElementById('a-combo').addEventListener("click", () => {
        showMessage("A combo", 'user');
        showMessage(`Beanie baby`, 'bot');
        chat.innerHTML += `
          <div class="result-container">
            <div class="result-list">
              <h3>Beanie baby</h3>
              <ul>
                What you need:
                <li>Animal ears</li>
                <li>Matching colorful clothes or onepiece</li>
                <li>Hommade "ty" heart tag</li>
              </ul>
              <img class="img" src="https://media.glassdoor.com/l/81/b9/03/0f/the-beanie-babies-of-nurses-prn.jpg"/>
            </div>
          </div>
          <button class="try-again" onClick="window.location.reload();">Try again</button>
        `
      });      


    });

  } else {
    showMessage(`Please answer the question, what style are you looking for? Funny, scary or cute?`, 'bot');
    step -= 1;
  }
}




// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => { 
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="User" />  
      </section>
    `
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="Bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here
const greeting = () => {
  showMessage(`Hello there, What's your name?`, 'bot')
  // Just to check it out, change 'bot' to 'user' here 👆
}

// Set up your eventlisteners here
document.getElementById("button").addEventListener("click", (event) => {
  event.preventDefault();
  const value = document.getElementById(`name-input`).value;
  document.getElementById(`name-input`).value = "";
  // console.log(value);
  if(step === 1) {
    postAnswer(value);
    step += 1;
  } else if (step === 2) {
    threeWayQuestion(value);
    step += 1;  
  }
});


// When website loaded, chatbot asks first question.
// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
setTimeout(greeting, 1000)
