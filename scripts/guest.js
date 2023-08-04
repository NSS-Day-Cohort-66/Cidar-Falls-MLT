import { getGuests } from "./database.js";

const guests = getGuests();

export const GuestList = () => {
  guests.sort(function (a, b) {
    var textA = a.firstName.toUpperCase();
    var textB = b.firstName.toUpperCase();
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });

  let guestHTML = `<div>`;
  for (const guest of guests) {
    guestHTML += `
    <li>${guest.firstName} ${guest.lastName}</li>
    `;
  }
  guestHTML += `</div>`;
  return guestHTML;
};
