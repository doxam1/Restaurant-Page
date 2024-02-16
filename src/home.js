export default function loadHomePage() {
    const content = document.querySelector('#content');
    content.classList.add('transition');
    setTimeout(() => {
        content.classList.remove('transition');        
    }, 500);
    content.innerHTML = 
            `
            <div class="HomePage">
            <h1> Welcome to may may kitchen </h1>
            <section>
            <img src="img/soupimg.jpg" width="20%" alt="tasty soup image" title="the best soup in town!">
            <div class="text">
                <p>
                    we're known for making the world famous chicken soup!
                </p>
                <p>
                please come and enjoy an healthy meal, <br>
                it will make you stronger and better!
                </p>
            </div>
            </section>
        </div>
         `
    
}