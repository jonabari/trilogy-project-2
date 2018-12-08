# trilogy-project-2

## deliverApp

Deliver app is a a registry of deliveries or in-person meetings between two people. Any user can act as the deliverer or receiver and push the details of the meeting to an online database with this simple app.

## Motivation

Whenever two people meet to exchange packages or information on behalf of a third party, they need to generate proof of that meeting. This normally manifests as receipts or signed documents. With deliverApp, we hope to provide a streamlined, eco-friendly, and secure way to document the details of the meeting, without the need for additional paperwork.

## Results

The app allows any user to self identify as a deliverer or a receiver for each interaction. Receivers are given a QR code that deliverers can scan with their phones. This prompts the deliverer to request a signature from the receiver. At the end of the interaction, the app pushes the details of the meeting to a mySQL database. This details can be viewed later by an admin, and include:

 - Names of the participants.
 - Emails.
 - Signature.
 - Date and time of the meeting.

## Team Efforts

The team split up between front-end (Eduardo Monforte, Arly Castro) and back-end (Adrián Salinas, Jonathan Barceló). We tracked our collective efforts on github projects, with a shared digital whiteboard on mural.ly. 

## Improvements

Going forward, we’d like to add the following features:

 - Make the app more secure by encrypting sensitive information, like adding salt and hash to the passwords, and sanitizing user information.

 - Make it so that new users can be created and sent to the database, instead of relying on premade accounts. 

 - As a follow-up to the above, this means that we also need a system to create unique QR codes with unique identifying user information.

 - Better protect the database by not using local storage to move information around.

 - A user-friendly form to input what is being delivered, as well as a way to use geolocalization to record the exact place where the delivery happened.

 - Take pictures of the delivery.

 - Reset your unique QR.

 - User dashboard to review past deliveries.

 - Admin dashboard to review employee’s deliveries.

