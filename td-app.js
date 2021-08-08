//selenium - auto navigation to our login page
const {Builder, WebDriver}	=	require("selenium-webdriver");							//calling selenium-webdriver from "node-modules" folder

async function testSelenium()												//synchronous function to give a random name as like this:  testSelenium
{
	let driver	=	await new Builder().forBrowser("firefox").build();		//create web driver and build brower name for automated navigation

	await driver.manage().window().maximize();								//maximize the firefox browser immediately after generating the command
	await driver.get("http://localhost:3000/");								//	after getting the command : >>"npm run travelbliss" the opening page 
	///////////////////////////////////////////											of project will be visible immediately and automatically	
	
	await driver.sleep(20000);											//webpage is visible for 20 seconds with or without hands-off mouse/touchpad
	await driver.quit();												//after exactly 20 seconds the entire browser will be closed by itself
}																			//>>	and thats what the main wonder of SELENiUM indeed	<<//
testSelenium();



//======================== FROM HERE ... previous codeLines that have been already done before in an advanced course ========================//
//========================	in order to develop such a different web application  ========================//

const express		= require ('express');
const upload		= require ('express-fileupload');
const exSession	= require ('express-session');
const bodyParser	= require ('body-parser');
//------------------------------------------------------
const tdLogin			= require('./controller/tdLogin');
const tdRegistration	= require('./controller/tdReg');
const td_dashboard		= require('./controller/td_DASHBOARD');
const td_logout		= require('./controller/td_LogouT');
const app				= express();									//app variables


//config
app.set ('view engine', 'ejs');

//middleware
app.use ('/DEALit', express.static('assets'));
app.use (upload());
app.use (bodyParser.urlencoded({extended: true}));
app.use (exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use ('/tdReg', tdRegistration);
app.use ('/tdLogin', tdLogin);
app.use ('/td_LogouT', td_logout);
app.use ('/td_DASHBOARD', td_dashboard);
//app.use(express.static(__dirname+"/"));

//router definition
app.get ('/', (req, res) => {

	res.send ("<br><br><br><center><table><tr><td><center><h1><font color='red'><u><b>EXPLORE TRAVEL TO iGNORE GRAVEL</b></u></h1></font><br><font color='blue'><h2>[[ Already a MEMBER? Hit The Login link<br>Not a MEMBER? no worries, make a Registration your way...]] </h2></font></center></td></tr><br><br><tr><td><center><h1><font color='red'><a href='/tdLogin'> LOGiN</a> ~ ~ ~ <a href='/tdReg'> Registration</a></center></h1></font></td></tr></table></center> ");

});

//server activation
app.listen (3000, () => {

	console.log('EXPRESS http SERVER BEGiNS...3000');

});




/* 
	await driver.get("http://localhost:3000/").then(async function()
	{
		await driver.findElement(WebDriver.By.linkText("tdLOGiN")).click.then(async function()
		{
			await driver.navigate.tdLogin.then(async function()
			{
				//console.log(title);
				await driver.sleep(20000);									
				await driver.quit();
			});
		});

	});
*/



/* async clickSignOut() {
	const signOutSelector = by.css( 'button.sidebar__me-signout-button' );
	await this.driver.sleep( 1000 );
	await driverHelper.clickWhenClickable( this.driver, signOutSelector );
	return await this.driver.sleep( 1000 );
} */


//app.use('/Halloween-IN-Rockport-MA', express.static('assets'));
//app.use('/tpic', express.static('assets'));
//app.use('/deL', express.static('assets'));
//app.use('/Windows-10-Wallpapers-20-1920-x-1080', express.static('assets'));
