import {GuestList} from "./guest.js"
import {AreaList} from "./areas.js"
import { ServicesList } from "./services.js"

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<div id="header">
    <img src="./images/logo.png">
    <h1>Welcome to Cidar Falls</h1>
</div>
<article class="park_services">
    <h2>Park Services Include:</h2>
    ${ServicesList()}
</article>
<article id="list_container">
    <section class="areas_container">
        <h2>Enjoy All Our Park Areas:</h2>
        ${AreaList()}
    </section>
    <aside class="guest_container">
        <h2 class="guest_header">Guest List:</h2>
        ${GuestList()}
    </aside>
</article>
<footer class="footer">
    <h2>Contact the Park</h2>
    <address>5123 Maplewood Avenue<br>Evergreen Springs, CO 12345</address>
    <p>123-345-6789</p>
    <p>cidar.falls@info.com</p>
</section>
`;

mainContainer.innerHTML = applicationHTML;
