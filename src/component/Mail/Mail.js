// var os = require('os');
// if (os.platform() == 'win32') {  
//     if (os.arch() == 'ia32') {
//         var chilkat = require('@chilkat/ck-node11-win-ia32');
//     } else {
//         var chilkat = require('@chilkat/ck-node11-win64'); 
//     }
// } else if (os.platform() == 'linux') {
//     if (os.arch() == 'arm') {
//         var chilkat = require('@chilkat/ck-node11-arm');
//     } else if (os.arch() == 'x86') {
//         var chilkat = require('@chilkat/ck-node11-linux32');
//     } else {
//         var chilkat = require('@chilkat/ck-node11-linux64');
//     }
// } else if (os.platform() == 'darwin') {
//     var chilkat = require('@chilkat/ck-node11-macosx');
// }


// function chilkatExample() {

//     // This example requires the Chilkat API to have been previously unlocked.
//     // See Global Unlock Sample for sample code.

//     // The mailman object is used for sending and receiving email.
//     var mailman = new chilkat.MailMan();

//     // Set the SMTP server.  Perhaps it is the local machine.
//     mailman.SmtpHost = "localhost";
//     // Or perhaps it's a particular computer on the local network:
//     // mailman.SmtpHost = "192.168.1.123";
//     // Or provide a local domain that resolves to an IP address on the local network:
//     // mailman.SmtpHost = "mymailsesrver.com";

//     // Set the SmtpAuthMethod property = "NONE"
//     mailman.SmtpAuthMethod = "NONE";

//     // Set the SMTP login/password (this may be omitted given no authentication will take place)
//     // mailman.SmtpUsername = "myUsername";
//     // mailman.SmtpPassword = "myPassword";

//     // Create a new email object
//     var email = new chilkat.Email();

//     const recipient = 'tempgene0@gmail.com';
//     // const subject = document.getElementById("senderSubject").value ;
//     // const body = document.getElementById("mailBody").value ;
//     email.
//     email.Subject = document.getElementById("senderSubject").value ;
//     email.Body = document.getElementById("mailBody").value;
//     email.From = document.getElementById("senderMail").value;
//     var success = email.AddTo("Gene",recipient);
//     // To add more recipients, call AddTo, AddCC, or AddBcc once per recipient.

//     // Call SendEmail to connect to the SMTP server and send.
//     // The connection (i.e. session) to the SMTP server remains
//     // open so that subsequent SendEmail calls may use the
//     // same connection.  
//     success = mailman.SendEmail(email);
//     if (success !== true) {
//         console.log(mailman.LastErrorText);
//         return;
//     }

//     // Some SMTP servers do not actually send the email until 
//     // the connection is closed.  In these cases, it is necessary to
//     // call CloseSmtpConnection for the mail to be  sent.  
//     // Most SMTP servers send the email immediately, and it is 
//     // not required to close the connection.  We'll close it here
//     // for the example:
//     success = mailman.CloseSmtpConnection();
//     if (success !== true) {
//         console.log("Connection to SMTP server not closed cleanly.");

//     }

//     console.log("Mail Sent!");

// }

