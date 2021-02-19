//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  return [managerName, managerAge, currentTeam, trophiesWon];
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(array){
  if(array.length==0)
  return null;
  return {"defender": array[0], "midfield": array[1], "forward": array[2]};
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year)
{
  return players.filter(function(player){
    if(player.debut===year){
      return player
    }
  });
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position)
{
  return players.filter(function(player){
    if(player.position===position){
      return player
    }
  })
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName)
{
  return players.filter(function(player){
    for(award of player.awards){
      if(award.name==awardName)
      return player
    }
  });
}

// //Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName,noOfTimes)
{
  return players.filter(function(player){
    count=0;
    for(award of player.awards){
      if(award.name==awardName)
        count++;
    }
    if(count==noOfTimes)
      return player
  });
}

// //Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName,countryName)
{
  return players.filter(function(player){
    if(player.country==countryName)
    {
      for(award of player.awards){
        if(award.name==awardName)
        return player;
      }
    }
  });
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, teamName, requiredAge)
{
  return players.filter(function(player){
    if(player.team==teamName && player.age < requiredAge &&player.awards.length >= noOfAwards)
    {
        return player;
    }
  });
}

//Progression 9 - Sort players in descending order of their age

function SortByAge()
{
  return players.sort(function compare(player1, player2) {
    let comparison = 0;
    if (player1.age < player2.age) {
      comparison = 1;
    } else if (player1.age > player2.age) {
      comparison = -1;
    }
    return comparison;
  });
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(Team)
{
  let teamPlayers=players.filter(function(player){
    if(player.team==teamName)
      return player;
  });

  return teamPlayers.sort(function compare(player1, player2) {
    let comparison = 0;
    if (player1.awards.length < player2.awards.length) {
      comparison = 1;
    } else if (player1.awards.length > player2.awards.length) {
      comparison = -1;
    }
    return comparison ;
  });
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
