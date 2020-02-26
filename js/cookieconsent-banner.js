 window.cookieconsent.initialise({
   "onPopupClose" : function (){
     window.location.reload();
   },
   "palette": {
     "popup": {
       "background": "#3e4f57",
       "text": "#ffffff"
     },
     "button": {
       "background": "#8db91c",
       "text": "#ffffff",
     }
   },
   "theme": "edgeless",
   "type": "opt-in",

   "content": {
     "message": "Dear visitor, we would like to use cookies in order to be able to optimally design the structure and contents of our website for you. May we? More information can be found in our",
     "dismiss": "No rather not!",
     "allow": "Yes, I trust you.",
     "deny": "No rather not!",
     "link": "Privacy Policy",
     "href": "https://devops-gathering.io/privacy-policy/"
   }
 });