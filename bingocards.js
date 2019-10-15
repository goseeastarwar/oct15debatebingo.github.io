var bingosquares = [
  "\"Grassroots\"",
  "\"Hard-working Americans",
  "\"Healthcare for all\"",
  "\"I have a plan\"",
  "\"R A D I C A L\"",
  "\"The American Dream\"",
  "A candidate desperately shows off their AP Spanish skills",
  "A candidate plugs their website",
  "A/V issues",
  "Andrew Yang tries to give away money",
  "Bernie talks about small donations",
  "Biden smiles creepily",
  "Corey Booker relates a question to a young person he recently met",
  "Dad jokes",
  "DREAMers",
  "Impeachment",
  "Kamala Harris references her record as a prosecutor",
  "Kamala Harris talks with her hands for an entire response",
  "Klobuchar talks about fundraising",
  "Obama",
  "Reference to Buttigeig's age",
  "Roe v. Wade",
  "Rust Belt",
  "Shade thrown at another candidate's health",
  "Someone complains about not getting enough attention",
  "Standing ovation",
  "Tulsi Gabbard wears white again",
  "Two candidates hug",
  "\"The middle class\"",
	"Bernie is shouting and you don't know why",
	"Mayor Pete is smug about neoliberalism",
	"Biden is clearly confused about where he is and why he hasn't won already",
	"Beto just Betos all over the place"
];

var randombingosquare = bingosquares
    .sort(function() { return .5 - Math.random() })
    .slice(0,32);

function GetBingoCard () {
  var getrandomsquare = document.getElementsByClassName("bingo_square");
  for(i=0;i<getrandomsquare.length;i++)
				{
					getrandomsquare[i].innerHTML = randombingosquare[i];
				}
}

function refreshPage(){
   location.reload();
} 
