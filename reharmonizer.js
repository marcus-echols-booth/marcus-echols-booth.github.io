var root; var quality;
var third; var fifth;
var chord = [root, third, fifth];
var majorchords = [];
var minorchords = [];
var chordray = [];
// var multiplier = 4; ????????????????????

//major chord populator (indexes 0-11 of outer array)

function makeList()
{
for (i=0; i<12; i++)
  {
    quality = 1;
    root = i%12; 
    third=(root+3+quality)%12; 
    fifth=(i+7)%12;
    majorchords[i] = [root, third, fifth];
    chordray.push(majorchords[i]);
  }

//minor chord populator (indexes 12-23 of outer array)
for (j=0; j<12; j++)
  {
    quality = 0;
    root = j%12; 
    third=(root+3+quality)%12;
    fifth=(j+7)%12;
    minorchords[j] = [root, third, fifth];
  chordray.push(minorchords[j]);
  }
return chordray;
}

makeList()
console.log(chordray);

function chordMultiply(multiplier)
{
  multiplier = 4; //?????????????????????????????????????????????????????????????
  for (i=0; i<chordray.length; i++)
    {
      for (j=0; j<chordray[i].length; j++)
        {
          chordray[i][j]*=multiplier;
          chordray[i][j]%=12;
        }
    }
  return chordray;
}

chordMultiply()
console.log(chordray);

/* THIS IS FUCKED RIGHT NOW AND WE MAY NEED TO START OVER BUT BASICALLY WE ARE TRYING TO 
IMPLEMENT INSERTION SORT IN THE INDIVIDUAL THREE PART SUBARRAYS
function toneOrder() //insertionSort
{
for (i=0; i<chordray.length; i++)
    {
      for (j=1; j<chordray[i].length; j++)
        {
         while (chordray[i][j]<chordray[i][j-1])
           {
             chordray[i][j-1]= chordray[i][j];
           }
        }
    }
  return chordray;
} */