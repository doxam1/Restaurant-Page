export default function menuPage() {  
    const content = document.querySelector('#content');
    content.innerHTML = 
                        `<h1>Our Menu</h1>
                        <div class='menuContainer'>
                          <div class='item'><img src='img/soupimg.jpg' width='20%'><p> chicken soup <br> 3.5$</p></div>
                          <div class='item'><p>bla</p></div>
                          <div class='item'><p>bla</p></div>
                          <div class='item'><p>bla</p></div>
                          <div class='item'><p>bla</p></div>
                          <div class='item'><p>bla</p></div>                   
                        
                        </div>`
}