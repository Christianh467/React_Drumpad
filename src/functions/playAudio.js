/*WHEN GIVEN AN 'MP3' FILE LOCATION, CREATE A HOWL WITH GIVEN MP3 FILE LOCATION, THEN PLAY THAT HOWL*/
const playAudio = function(soundObjectFile){ 
  const newSound = new Audio(soundObjectFile);
  newSound.play();                     //method that comes with Howler library, just plays Howl sound
}
/*END OF CREATING HOWLERS*/

export default playAudio;