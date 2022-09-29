

                        //Modules 
// type of this file would be module while calling in html file.
// import username that is exported from user.js
import {userName} from './modules/user.js';
console.log("UserName is imported from user.js : ",userName);
// document.write("UserName is imported from user.js : ",userName);

// You will need to replace any document.write() statements in that script with 
// explicit DOM manipulations by creating the DOM elements and then inserting 
// them into a particular parent with 
// .appendChild() or 
// .insertBefore() or setting 
// .innerHTML or 
// some mechanism for direct DOM manipulation like that.

import { userDetail } from './modules/user.js';
// console.log("UserDetail() imported form user.js",userDetail())
console.log("UserDetail() imported form user.js")
userDetail()

// account.js 
// export multiple things in one line
import { withdraw, deposite } from './modules/account.js';
console.log("withdraw() imported form account.js")
withdraw()

// deposite
console.log("deposite() imported form account.js")
deposite()