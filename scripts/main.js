import {GuestList} from "./guest.js"
import {AreaList} from "./areas.js";


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<img src="./images/logo.png">
<h1>Welcome to Cidar Falls</h1>
<article>
    <section class="areas_container">
        <h2>Enjoy All Our Park Areas:</h2>
        ${AreaList()}
    </section>
    <aside class="guest_container">
        <h2>Guest List</h2>
        ${GuestList()}
    </aside>
</article>
<footer class="footer">
    <h2>Contact the Park</h2>
</section>
`

mainContainer.innerHTML = applicationHTML;
