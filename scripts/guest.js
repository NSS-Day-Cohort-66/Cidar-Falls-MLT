import { getGuests } from "./database";

const guests = getGuests();

export const GuestList = () => {
  let guestHTML = `<div id="guest_card">`;
  for (const guest of guests) {
    guestHTML += `<li>${guest.firstName} ${guest.lastName}</li>`;
  }
  guestHTML += `</div>`;
};
