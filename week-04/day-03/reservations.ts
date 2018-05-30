'use strict';
export { };

interface ReservationInterface {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements ReservationInterface {
  reservationID: string;
  dayOfReservation: string;
  constructor(reservationID: string, dayOfReservation: string) {
    this.reservationID = reservationID;
    this.dayOfReservation = dayOfReservation;
  }
  getDowBooking() {
    return this.dayOfReservation;
  }
  getCodeBooking() {
    return this.reservationID;
  }
}

let charHash: string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let dow: string[] = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];
let numberOfReservations: number = 8;

function hashGenerator() {
let generatedID: string[] = [];
for (let i: number = 0; i <= 7; i++) {
  generatedID.push(charHash[Math.floor(Math.random() * 36) + 0]);
}
return generatedID.join('');
}

for (let k: number = 0; k < numberOfReservations; k++) {
  let newReservation = new Reservation(`${hashGenerator()}`, `${dow[Math.floor(Math.random() * 7) + 0]}`);
  console.log(`Booking# ${newReservation.reservationID} for ${newReservation.dayOfReservation}`);
}

