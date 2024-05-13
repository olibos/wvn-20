  <style global>
  /* ================================
    CSS STYLES FOR WaVeNet PORTAL 
    v1.0, 01/2001
   ================================
*/   

/*****************************************************************************************************************/
/*									!!! IMPORTANT NOTE !!!														 */
/*****************************************************************************************************************/

/* All the CSS for the menu in the new system are sorted in this way : 

				Name Syntax:
				************
				
				Direction+Content+"Menu"+State+Niv
				
				Direction : H , V , S : for Horizontal , Vertical or Synthetique
				Content	  : Text or TD : Text or Background
				Menu	  : string "Menu"
				State	  : A , V , O : for Actif , Visible or Open
				Niv		  : The level of the item for ex: 1,2,3,...

				Sample : 
				********

				We want to define CSS for an Horizontal Menu Text, when look open, of level 2, we write 

				HTextMenuO2

				Find CSS MenuText:
				******************

				HA1 : Horizontal actif niv 1
				HA2 : Horizontal actif niv 2
				HA3 : Horizontal actif niv 3

				HV1 : Horizontal visible niv 1
				HV2 : Horizontal visible niv 2
				HV3 : Horizontal visible niv 3

				HO1 : Horizontal open niv 1
				HO2 : Horizontal open niv 2
				HO3 : Horizontal open niv 3	

				VA1 : Vertical actif niv 1
				VA2 : Vertical actif niv 2
				VA3 : Vertical actif niv 3

				VV1 : Vertical visible niv 1
				VV2 : Vertical visible niv 2
				VV3 : Vertical visible niv 3

				VO1 : Vertical open niv 1
				VO2 : Vertical open niv 2
				VO3 : Vertical open niv 3

				SA1 : Synthetique actif niv 1
				SA2 : Synthetique actif niv 2
				SA3 : Synthetique actif niv 3

				SV1 : Synthetique visible niv 1
				SV2 : Synthetique visible niv 2
				SV3 : Synthetique visible niv 3

				SO1 : Synthetique open niv 1
				SO2 : Synthetique open niv 2
				SO3 : Synthetique open niv 3	

/*****************************************************************************************************************/



.TITLELEVEL1 {
    text-align : left;
    font-family : verdana, tahoma, arial;
    font-size:  18px;
    font-weight:    normal;
    color: #C1CADB;
    WVNEditorName : wvn - titlelevel1;
}   
.TITLELEVEL2 {
    font-family : verdana, tahoma, arial;
    font-size: 16px;
    font-weight: bold;
    color: #0076BE;
    WVNEditorName : wvn - titlelevel2;
}   
.TEXTLEVEL1 {
    font-family : verdana, tahoma, arial;
    font-size: 12px;
    font-weight: normal;
    color: #003366;
    WVNEditorName : wvn - textlevel1;
    text-align : justify;
}   
.TEXTLEVEL2 {
    font-family : verdana, tahoma, arial;
    font-size: 12px;
    font-weight: normal;
    color: #000000;
    WVNEditorName : wvn - textlevel2;
}   
.TEXTLEVEL3 {
    font-family : verdana, tahoma, arial;
    font-size: 12px;
    font-weight: normal;
    color: #000033;
    WVNEditorName : wvn - textlevel3;
}   
.TEXTLEVEL4 {
    font-family : verdana, tahoma, arial;
    font-size: 14px;
    font-weight: bold;
    color: #0076BE;
    WVNEditorName : wvn - textBigBlue;
}
.TEXTLEVEL5 {
    font-family : verdana, tahoma, arial;
    font-size: 14px;
    font-weight: bold;
    color: #CA5408;
    WVNEditorName : wvn - textBigRed;
}
.WVN {
    font-family : verdana, tahoma, arial;
    font-weight: bold;
    color: #0072BC;
    WVNEditorName : wvn - wvn;
}   
.PRODUCT1 {
    font-family : verdana, tahoma, arial;
    font-weight: bold;
    color: #CA5408;
    WVNEditorName : wvn - prod1;
}   
.PRODUCT2 {
    font-family : verdana, tahoma, arial;
    font-weight: bold;
    color: #E7DE33;
    WVNEditorName : wvn - prod2;
}   
.PRODUCT3 {
    font-family : verdana, tahoma, arial;
    font-weight: bold;
    color: #0076BE;
    WVNEditorName : wvn - prod3;
}   
.PRODUCT4 {
    font-family : verdana, tahoma, arial;
    font-weight: bold;
    color: #C1CADB;
    WVNEditorName : wvn - prod4;
}   



/* PAGE BACKGROUND */
/* background color for the header at the top of the page  */
.HeadBg {
    background-color: #FFFFFF; /* WVN : darkred; */
}

/* background color for the content part of the pages */
Body
{
    background-color: #FFFFFF; /* WVN : white; */
    color: #000000;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    /* Pb WVNEditor grandes polices : line-height: 12px;           */
}


/* PAGE BANNER */
/* NOTE: Site Title, Site Links and Tabs are rendered by MobilePortalBanner.ascx
/* style for the text of the site title */
.SiteTitle
{
	font-weight: normal;
	font-size: 10px;	
	color: #70490D;
	font-family: Verdana Bold, Helvetica, sans-serif;	
}



/* background/border colors for the selected tab */
.TabBg {
    background-color: 336699; /* WVN : white; */
    border-color: white;
}

/* background/border colors for the unselected tabs */
.OtherTabsBg {
   background-color: #003366; /* WVN : dimgray; */
    border-color: black;
}

/* text style for the selected tab */
.SelectedTab {
    font-family : verdana, tahoma, arial;
    font-size: 13px;
    color:white; /* WVN : DarkRed; */
    font-weight: bold
}

/* text style for the unselected tabs */
.OtherTabs {
    font-family : verdana, tahoma, arial;
    font-size: 13px;
    color:gainsboro;
    text-decoration:none;
    font-weight: bold;   
}

/* hyperlink styles of the unselected tabs */
A.OtherTabs:link    {
    text-decoration:    none;
    color:#eeeeee;
}

A.OtherTabs:visited {
    text-decoration:    none;
    color:#eeeeee;
}

A.OtherTabs:active  {
    text-decoration:    none;
    color:#eeeeee;
}

A.OtherTabs:hover   {
    text-decoration:    underline;
    color:white;
}
    
/* text style for the site links (at extreme top-right of header) */
.SiteLink {
	/*CB : pour respecter les styles demandés pour le welcome message et change profile*/

    font-family : verdana, tahoma, arial;
    font-size: 11px;
    WVNEditorName : Lien;
}   

/* hyperlink style for the site links */

A.SiteLink:link {
    text-decoration:    underline;
    color : #CA5408;
}

A.SiteLink:visited  {
    text-decoration:    underline;
    color : #CA5408;    
}

A.SiteLink:active   {
    text-decoration:    underline;
    color : #CA5408;
}

A.SiteLink:hover    {
    text-decoration:    underline;
    color : #CA5408;
}

/* style for separator between site links */
.Accent
{

    color : #0072BC;
    font-weight:    bold;    
    WVNEditorName : Accentuation;
}



/* MODULE-SPECIFIC */
/* text style for reading messages in Discussion */    
.Message    {
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    font-size: 11px;
    background-color: #eeeeee;
    
    /* BEGIN MD 15/04/2002 */
    WVNEditorName : Message;
    /* END MD 15/04/2002 */    
}   

/* style of item titles by Announcements and events */
.ItemTitle    {
    font-family : verdana, tahoma, arial;
    font-size:  11px;
    font-weight:    bold;
    color: #0076BE;
}

/* style of Announcement and events from the past */
.ItemColorPast 
{
	color:Silver
}

/* style of Announcement and events present */
.ItemColorPresent 
{
	color:Black
}

/* style of Announcement and events futures */
.ItemColorFuture
{
	color:Blue
}

/* GENERAL */
/* style for module titles */
.Head   {
    text-align : left;
    font-family : verdana, tahoma, arial;
    font-size:  18px;
    font-weight:    normal;
    color: #C1CADB;
}


.HeadJNW   {
    text-align : left;
    font-family : verdana, tahoma, arial;
    font-size:  18px;
    font-weight:    normal;
    color: #666644;
}

/* style of item titles on edit and admin pages */
.SubHead    {
    font-family : verdana, tahoma, arial;
    font-size:  11px;
    font-weight:    bold;
    color: #0076BE;
    vertical-align:top;
    padding-top:5px;        
}

/* module title style used instead of Head for compact rendering by QuickLinks and Signin modules */
.SubSubHead {
    font-family : verdana, tahoma, arial;
    font-size:  11px;
    font-weight:    bold;
    color: black;
}

/* text style used for most text rendered by modules */
.normal_editor
{
	font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    line-height: 12px;        
}
.Normal, .normal
{
	/* BEGIN MD 29/04/2002 */    
    vertical-align : top;
    /* END MD 29/04/2002 */
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    color: #003366;
    font-weight: normal;
    line-height: 12px;        
    /* BEGIN MD 15/04/2002 */
    WVNEditorName : Style normal
    /* END MD 15/04/2002 */
}
/* text style used for option  */
.normalOption
{
	font-weight: normal;
	font-size: 11px;	
	font-family : verdana, tahoma, arial;
	height:10px;	
	padding : 0px;
	margin  :-1px;
}

/* text style used for textboxes in the admin and edit pages, for Nav compatibility */
.NormalTextBox
{
	font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    vertical-align:top;
}

.DisabledOption
{
	color:#cfcfcf;
}

.NormalRed
{
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: bold;
    color: red;
    
    /* BEGIN MD 15/04/2002 */
    WVNEditorName : Normal (rouge)
    /* END MD 15/04/2002 */    
}

.NormalBold
{
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: bold;
    /* BEGIN MD 15/04/2002 */
    WVNEditorName : Normal (gras)
    /* END MD 15/04/2002 */    
}

/* text style for buttons and link buttons used in the portal admin pages */
.CommandButton     {
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
}
    
/* hyperlink style for buttons and link buttons used in the portal admin pages */
A.CommandButton:link, A.CommandButton:visited, A.CommandButton:active, A.CommandButton:hover {
    text-decoration:    underline;
    color: #CA5408;
}
   



/* GENERIC */
H1  {
    /*font-family : verdana, tahoma, arial;
    font-size:  16px; 
    font-weight:    normal;
    color: #666644;*/
    text-align : left;
    font-family: verdana, tahoma, arial;
    font-size:  18px;
    font-weight:    normal;
    color: #CA5408;
    margin : 0;
}

H2  {
    font-family : verdana, tahoma, arial;
    font-size:  14px; /* WVN : 20px; */
    font-weight:    normal;
    color: #666644;
}

H3  {
    font-family : verdana, tahoma, arial;
    font-size:  12px;
    font-weight:    normal;
    color: #CA5408;
}

H4  {
    font-family : verdana, tahoma, arial;
    font-size:  12px;
    font-weight:    normal;
    color: #CA5408;
}

H5, DT  {
    font-family : verdana, tahoma, arial;
    font-size:  11px;
    font-weight:    bold;
    color: #CA5408;
}

H6  {
    font-family : verdana, tahoma, arial;
    font-size:  11px;
    font-weight:    bold;
    color: #CA5408;
}

TFOOT, THEAD    {
    font-family : verdana, tahoma, arial;
    font-size:  12px;
    color: #CA5408;
}

TH  {
    vertical-align: baseline;
    font-family : verdana, tahoma, arial;
    font-size:  12px;
    font-weight:    bold;
    color: #CA5408;
}

A:link  {
    text-decoration: none; 
    color:  #CA5408;
}

A:visited   {
    text-decoration:    none;
    color:  #CA5408;
}

A:active    {
    text-decoration:    none;
    color:  #CA5408;
}

A:hover {
    text-decoration:    underline;
    color: #CA5408;
}

SMALL   {
    font-size:  8px;
}

BIG {
    font-size:  14px;
}

BLOCKQUOTE, PRE {
    font-family : verdana, tahoma, arial;
}


UL LI   {
     list-style-type:    square ;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    line-height: 14px; /* WVN FIN */
    color : #003366;       
}

UL LI LI    {
    list-style-type:    disc;    
}

UL LI LI LI {
    list-style-type:    circle;    
}

OL LI   {
    list-style-type:    decimal;
}

OL OL LI    {
    list-style-type:    lower-alpha;    
}

OL OL OL LI {
    list-style-type:    lower-roman;    
}

HR {
    color: dimgrey;
    height:1pt;
     /* WVN : Modif Look WVN : text-align:left */
}
/* BEGIN MD : 01.03.2002 */
/* CSS for the MultilingualSwitch control*/
.MultilingualSwitch
{
	text-decoration:    none;
    color:  #CA5408;
    font-family : verdana, tahoma, arial;
    font-weight: normal;
    font-size: 11px;    
}
/* END MD : 01.03.2002 */ 


.LgImplemented
{
    font-family : verdana, tahoma, arial;
    font-size: 11px;    
    color : Green     
}
.LgNotImplemented
{
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    color : Gray ;    
}

/* WVN DEBUT : classes supplémentaires : Modif Look WVN */
P
{
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;    
    color:#003366;
}


.Menu
{
	background-color: #003366;
}

/* text style link buttons used in the portal modules "NoTitle" */    
.CommandButtonNoTitle		{
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    color: #FFFFED;
}
    
/* hyperlink style link buttons used in the portal modules "NoTitle" */    
A.CommandButtonNoTitle:link {
    color: #FFFFED;

}

A.CommandButtonNoTitle:visited  {
    color: #FFFFED;
}

A.CommandButtonNoTitle:active   {
    color: #FFFFED;
}

A.CommandButtonNoTitle:hover
{
	color: red; /* border: green 2px outset; */
}
/* BEGIN MD : 19/04/2002*/
/* Class for the error message */
.ErrorMessage
{
	font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: bold;
    line-height: 12px;        
    color:Red;
    /* BEGIN MD 15/04/2002 */
    WVNEditorName : Style Error Message
    /* END MD 15/04/2002 */
}
/* END MD : 19/04/2002*/

/* WVN FIN */


/* BEGIN MD : 11/03/2002 */
/* CSS for the DeskTopPortalMenu control */

/* HORIZONTAL <TABLE> MENU*/
/*niv 1*/
.HTableMenu1 {
    background-color: #0072BC;
    border-width : 0px;
    border-style: solid;
    border-color: black;
    padding: 0px;    
    font-size : 16px;
}
/*niv 2*/
.HTableMenu2 {
    background-color: #FFFFED;
    border : 0px none;    
    width : 100%   
}

/* VERTICAL <TABLE> MENU*/
/* Style for the cell how contain the &nbsp; for the indentation*/
.IndentTD
{
display:none;
}
/*niv 1*/
.VTableMenu1 {
    background-color: Transparent ;
    width:100%;
    border-width : 0px;
    border-style: solid;
    border-color: black;
    
}

/* SYNTHETIQUE <TABLE> MENU */
.STableMenu1
{
	text-align: center;
}


/* HORIZONTAL <TD> MENU */

/* niv 1 */
.HTDMenuA1, .HTDMenuV1, .HTDMenuO1
{
  background-color: #0072BC;
  padding-right : 10px;
  padding-left : 10px;
  padding-top : 0px;
  padding-bottom : 0px;    
  border-color: black;
  border-width:0px;
  border-style:solid;  
  color : #FFFFFF;
}

/* VERTICAL <TD> MENU */
/* niv 1*/
.VTDMenuA1, .VTDMenuO1
{
	padding-top: 20 px;
	padding-bottom: 0 px;
  	text-align : left;
	padding-left: 15px;
}
.VTDMenuV1
{
	padding-top: 20 px;
	padding-bottom: 0 px;
	text-align : left;	
	padding-left: 15px;	
}

/* niv 2*/
.VTDMenuA2
{
  	text-align : left;
	padding-top: 12px;
	padding-left: 25px;
  	
}
.VTDMenuV2, .VTDMenuO2
{
	text-align : left;
	padding-top: 12px;
	padding-left: 25px;	
}

/* niv 3*/
.VTDMenuA3, .VTDMenuV3, .VTDMenuO3
{
	text-align : left;
	padding-bottom: 0px;
	padding-top: 0px;	
	padding-left: 35px;
	background-color: Transparent;    
	border-color: Transparent;
}

/* SYNTHETIQUE <TD> MENU */

/* HORIZONTAL LINK SECTION */

/* niv 1 */

/* Acitf */
/* HA1 */
.HTextMenuA1, A.HTextMenuA1:link, A.HTextMenuA1:visited, A.HTextMenuA1:active, A.HTextMenuA1:hover
{
  color:#C1CADB;
  font-family : verdana, tahoma, arial;
  font-size : 12px;
  font-weight : bold;
  letter-spacing: 0px;  
  text-decoration:none;
}

/* Visible */
/* HV1 */
.HTextMenuV1, A.HTextMenuV1:link, A.HTextMenuV1:visited, A.HTextMenuV1:active, A.HTextMenuV1:hover
{
  color:#FFFFFF;
  font-family : verdana, tahoma, arial;
  font-size : 12px;
  font-weight : bold;
  letter-spacing: 0px;  
  text-decoration:none;
}

/* Ouvert */
/* HO1 */
.HTextMenuO1, A.HTextMenuO1:link, A.HTextMenuO1:visited, A.HTextMenuO1:active, A.HTextMenuO1:hover
{
  color:#C1CADB;
  font-family : verdana, tahoma, arial;
  font-size : 12px;
  font-weight : bold;
  letter-spacing: 0px;  
  text-decoration:none;
}

/* niv 2*/

/* Actif */
/* HA2 */
.HTextMenuA2, A.HTextMenuA2:link, A.HTextMenuA2:visited, A.HTextMenuA2:active, A.HTextMenuA2:hover
{
  font-family : verdana, tahoma, arial;
  font-size: 13px;
  color: #336699 ;
  text-decoration:none;
  font-weight: bold;   
}

/* Visible */
/* HV2 */
.HTextMenuV2, A.HTextMenuV2:link, A.HTextMenuV2:visited, A.HTextMenuV2:active, A.HTextMenuV2:hover
{
  font-family : verdana, tahoma, arial;
  font-size: 10px;
  color:#003366;
  text-decoration:none;    
}


/* Ouvert */
/* HO2 */

/* VERTICAL LINK SECTION */

/* niv 1 */

/* Actif */
/* VA1 */
.VTextMenuA1, A.VTextMenuA1:link, A.VTextMenuA1:visited, A.VTextMenuA1:active, A.VTextMenuA1:hover
{
display : none;
}

/* Visible */
/* VV1 */
.VTextMenuV1, A.VTextMenuV1:link, A.VTextMenuV1:visited, A.VTextMenuV1:active, A.VTextMenuV1:hover
{
display : none;
}

/* Ouvert*/
/* VO1 */
.VTextMenuO1, A.VTextMenuO1:link, A.VTextMenuO1:visited, A.VTextMenuO1:active, A.VTextMenuO1:hover
{
display : none;
}

/* niv 2*/

/* Actif */
/* VA2 */
.VTextMenuA2, A.VTextMenuA2:link, A.VTextMenuA2:visited, A.VTextMenuA2:active, A.VTextMenuA2:hover
{
  letter-spacing: 0px;  
  color:#0072BC;
  font-family : verdana, tahoma, arial;
  font-size : 10px;
  font-weight : bold;
  text-decoration:none;
  text-transform: uppercase;
}

/* Visible */
/* VV2 */
.VTextMenuV2, A.VTextMenuV2:link, A.VTextMenuV2:visited, A.VTextMenuV2:active, A.VTextMenuV2:hover
{
  color:#0072BC;
  font-family : verdana, tahoma, arial;
  font-size : 10px;
  font-weight : normal;
  letter-spacing: 0px;
  text-decoration:none;
  text-transform: uppercase;
}

/* Ouvert*/
/* VO2 */
.VTextMenuO2, A.VTextMenuO2:link, A.VTextMenuO2:visited, A.VTextMenuO2:active, A.VTextMenuO2:hover
{
  color:#0072BC;
  font-family : verdana, tahoma, arial;
  font-size : 10px;
  font-weight : bold;
  letter-spacing: 0px;
  text-decoration:none;
  text-transform: uppercase;

}

/* niv 3 */

/* Actif */
/* VA3 */
.VTextMenuA3, A.VTextMenuA3:link, A.VTextMenuA3:visited, A.VTextMenuA3:active, A.VTextMenuA3:hover
{
	font-family : verdana, tahoma, arial;
	font-size: 10px;
	color: #0072BC;
	text-decoration:none;
	text-transform: uppercase;         
	letter-spacing: 0px;
  	font-weight : bold;
}

/* Visible */
/* VV3 */
.VTextMenuV3, A.VTextMenuV3:link, A.VTextMenuV3:visited, A.VTextMenuV3:active, A.VTextMenuV3:hover
{
	font-family : verdana, tahoma, arial;
	font-size: 10px;
	color: #0072BC;
	text-decoration:none;
	text-transform: uppercase;         
	letter-spacing: 0px;
  	font-weight : normal;
}

/* Ouvert */
/* VO3 */
/*
.VTextMenuO3, A.VTextMenuO3:link, A.VTextMenuO3:visited, A.VTextMenuO3:active, A.VTextMenuO3:hover
{
	font-family : verdana, tahoma, arial;
	font-size: 10px;
	color: #0072BC;
	text-decoration:none;
	text-transform: uppercase;         
	letter-spacing: 0px;
  	font-weight : bold;
}
*/

/* SYNTHETIQUE LINK SECTION */

/* SA1*/

/* SV1*/
.STextMenuV1, .STextMenuV1:link, .STextMenuV1:visited, .STextMenuV1:active
{
	text-decoration : none;
	color : #CA5408;
}
.STextMenuV1:hover
{
	text-decoration : none;
	color : 336699;
}

/* SO1*/

/* SA2*/

/* SV2*/
.STextMenuV2
{
	text-decoration : none;
	color : #CA5408;
}
.STextMenuV2:link
{
	text-decoration : none;
	color : #CA5408;
}
.STextMenuV2:visited
{
	text-decoration : none;
	color : #CA5408;
}
.STextMenuV2:active
{
	text-decoration : none;
	color : #CA5408;
}
.STextMenuV2:hover
{
	text-decoration : none;
	color : 336699;
}

/* SO2*/

/* SA3*/

/* SV3*/
.STextMenuV3
{
	text-decoration : none;
	color : #CA5408;
}
.STextMenuV3:link
{
	text-decoration : none;
	color : #CA5408;
}
.STextMenuV3:visited
{
	text-decoration : none;
	color : #CA5408;
}
.STextMenuV3:active
{
	text-decoration : none;
	color : #CA5408;
}
.STextMenuV3:hover
{
	text-decoration : none;
	color : 336699;	
}

/* SO3*/

/* END MD : 11/03/2002 */


/*BEGIN MD : 08/04/2002*/
/* CSS FOR THE WVN EDITOR*/
IFRAME
{
	font-size : 15;	
}
/*END MD : 08/04/2002*/
Select
{
    font-size: 12px;
    font-weight: normal;
    line-height: 12px;            
}

/*BEGIN MD : 22/05/2002*/
/* Style for the controle MultilingualChooser*/
.LgListActivate
{
  font-weight : normal;
  padding-left : 8px ;
  color: #C1CADB;
}

.LgListDesactivate
{
  font-weight : bold;
  color: red;
  padding-left : 8px ;
}


.LgListLink:link, .LgListLink:visited, .LgListLink:hover
  {
  color: #C1CADB;
  font-family : verdana, tahoma, arial;
  font-size : 12px;
  letter-spacing: 0px;
  padding-top : 2px ;
  padding-bottom : 10px ;
  padding-left : 2px ;
  padding-right : 2px ;
  text-decoration:none;
}


.Separator
{
  background-color: #9B8056;
  color : #9B8056;
  font-family : verdana, tahoma, arial;
  font-size : 12px;
  font-weight : normal;
  letter-spacing: 0px;
  padding-top : 0px ;
  padding-bottom : 0px ;
  padding-left : 0px ;
  padding-right : 0px ;
  text-decoration:none;

}
/*END MD : 22/05/2002*/

/* CSS For the gallery module*/
.Gallery
{	
	width:90%;
}
.HeaderGallery
{
	background-color: 336699; /* WVN : white; */
	color:White;
	font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    line-height: 12px;    
    text-align:center;
}
.PagerGallery
{
	color:White;
	background-color: 336699; /* WVN : white; */
	font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    line-height: 12px;    
    text-align:right;
}
.ItemGallery
{		
	font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    line-height: 12px;
}
.AlertnatingItemCss
{
	font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    line-height: 12px;  
	background-color: white;
}
/* BEGIN MD : 01/08/2002*/
/* CSS For the subscription to a newsletter*/
.SubscriptionHead
{
	font-weight: bold;
	font-size: 11px;
	color: black;
	font-family : verdana, tahoma, arial;
}
/*
.SubscriptionBorder
{
	border-right: #000000 thin double;
	border-top: #000000 thin double;
	border-left: #000000 thin double;
	border-bottom: #000000 thin double;
}
.SubscriptionHead
{
	border-right: #3399cc thin double;
	border-top: #3399cc thin double;
	font-weight: bold;
	font-size: 11px;
	border-left: #3399cc thin double;
	color: black;
	border-bottom: #3399cc thin double;
	font-family : verdana, tahoma, arial;
	background-color: #cccccc;
	text-align: center;
}
.SubscriptionFoot
{
	background-color: #cccccc;
	border-right: #3399cc thin double;
	border-top: #3399cc thin double;
	border-left: #3399cc thin double;
	border-bottom: #3399cc thin double;	
	text-align: center;
}
.SubscriptionRow
{
	background-color: ghostwhite;
}
*/
/* END MD : 01/08/2002 */

/*****************************************************************************************************************/
/*									!!! CSS FOR THE STORE !!!														 */
/*****************************************************************************************************************/


.ProductImage
{
  padding-right : 14px;
  padding-left : 14px;
  border-color: black;
  border-width:0px;
  border-style:solid;
  text-align:center;
}

.TDProductTitle,.TDProductShortDescription,.TDProductPrice
{
  padding-right : 14px;
  padding-left : 14px;
  border-color: black;
  border-width:0px;
  border-style:solid;
  text-align:center;
    font-family : verdana, tahoma, arial;
    font-size: 9px;
    font-weight: normal;
    color: #000000;
}

.ProductTitle
{
  text-align:center;
    font-family : verdana, tahoma, arial;
    font-size: 9px;
    font-weight: normal;
    color: #000000;
    WVNEditorName : IHT - textlevel2;
  
}



.ProductShortDescription
{
    font-style: italic;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    line-height: 12px;
}
.HomeHead
{
    color: #999966;
    font-family : verdana, tahoma, arial;
    font-size: 18px;
    font-weight: bold;
    HEIGHT: 35px
}

/* */
.ContentHead
{
    background-color: #C1CADB;
    color: #0076BE;
    font-family : verdana, tahoma, arial;
    font-size: 18px;
    font-weight: bold;
    height: 35px
}

/* */
.SubContentHead
{
    background-color: #dddca3;
    color: dimgray;
    font-family : verdana, tahoma, arial;
    font-size: 16px;
    font-weight: bold;
    height: 20px
}

/* */
.UnitCost
{
    color: #808080;
    font-family : verdana, tahoma, arial;
    font-size: 15px;
    line-height: 20pt
}

/* */
.ModelNumber
{
    color: #808080;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    line-height: 20pt
}

/* */
.ErrorText
{
    color: red;
    font-family : verdana, tahoma, arial;
    font-size: 12px;
    line-height: 20pt
}
.MostPopularHead
{
    background-color: #CA5408;
    color: white;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: bold
}

A.MostPopularItemText, A.MostPopularItemText:link, A.MostPopularItemText:visited
{
    color: black;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    text-decoration: none
}

A.MostPopularItemText:hover
{
    color: red;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    text-decoration: underline
}

.ProductListHead
{
    color: black;
    font-family : verdana, tahoma, arial;
    font-size: 12px;
    font-weight: bold;
    line-height: 14pt;
    text-decoration: underline;
}
.ProductListItem
{
    color: black;
    font-family : verdana, tahoma, arial;
    font-size: 10px
}

.CartListHead
{
    background-color: #dddca3;
    border-bottom: dimgray;
    border-left: dimgray 1px solid;
    color: black;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: bold;
    line-height: 20pt;
    padding-left: 5px
}

.CartListItem
{
    background-color: #ffffff;
    border-bottom: dimgray;
    border-left: dimgray 1px solid;
    color: black;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    padding-left: 5px
}

.CartListItemAlt
{
    background-color: #f2f2f2;
    border-bottom: dimgray;
    border-left: dimgray 1px solid;
    color: black;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    padding-left: 5px
}

.CartListFooter
{
    background-color: #dddca3;
    line-height: 10pt
}

A.SiteLinkBold, A.SiteLinkBold:link, A.SiteLinkBold:visited
{
    color: #dddddd;
    font-family : verdana, tahoma, arial;
    text-decoration: none;
    font-size:  11px;
    font-weight: bold
}

A.SiteLinkBold:hover
{
    color: white;
    text-decoration: none;
}
.NormalDouble
{
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    line-height: 20px    
}

/*CSS For the image book module*/
.ImgBookWin
{
	width: 100%;
	border-right: black 0px solid;
	border-top: black 0px solid;
	border-left: black 0px solid;
	border-bottom: black 0px solid;
	font-weight: normal;
	font-size: 11px;
	vertical-align: center;
	font-family : verdana, tahoma, arial;
	background-color: #FFFFFF;
}
/* Table contain only image */
.ImgBookImg
{
	border-right: black 0px solid;
	border-top: black 0px solid;
	border-left: black 0px solid;
	border-bottom: black 0px solid;
	background-color: #ffffff;
	text-align:center;
	width:100%;
}
/* Table contain only description */
.ImgBookDescription
{
	border-right: black 0px solid;
	border-top: black 0px solid;
	border-bottom: black 0px solid;
	border-left: black 0px solid;
	font-weight: normal;
	font-size: 15px;
	vertical-align: top;
	font-family : verdana, tahoma, arial;
	background-color: #ffffff;
	padding:5px;	
}
/* TD for the title of the TOC*/
.ImageBookTOCTitle
{
	font-size: 13px;
	padding : 5px;
	color: #0076BE;
	font-weight: bold;
	background-color: #C1CADB;
	text-transform: uppercase;
}
/* TD for the Table Of Content (only link) */
.ImageBookTOCTD
{ 
    padding-left: 10px;
    padding-right: 20px;
    padding-top: 3px;
    padding-bottom: 0px;
}

.ImageBookTable
{
	width: 98%;
	background-color: #C1CADB;
	border-right: #0072BC 3px solid;
	border-top: #0072BC 3px solid;
	border-left: #0072BC 3px solid;
	border-bottom: #0072BC 3px solid;
    padding-top: 10px;
    margin: 10px;    
}

.ImageBookItem
{
	width: 50%;
}


.ImageBookTOCTable
{
	background-color: #FFFFFF;
	text-align: left; 
	border-right: black 0px solid;
	border-top: black 0px solid;
	border-left: black 0px solid;
	width: 100%;
	border-bottom: black 0px solid;
	height: 100%; 
	
}

.ImageBookTOCLink, A.ImageBookTOCLink:link, A.ImageBookTOCLink:visited, A.ImageBookTOCLink:hover
{ 
  	padding-right : 0px;
  	padding-left : 0px;
  	padding-top : 0px;
  	padding-bottom : 0px;
	color: #0076BE; 
	font-family : verdana, tahoma, arial;
	font-size: 11px;
	font-weight: normal; 
}

.ImageBookTOCPager
{
	border-right: black 0px solid; 
	border-left: black 0px solid;
	border-bottom: black Opx solid;
	width: 100%;
	background-color: #0076BE;
	text-align: right;
  	padding-right : 2px;
  	padding-left : 2px;
  	padding-top : 2px;
  	padding-bottom : 2px;
}

.ImageBookTOCPagerLink, A.ImageBookTOCPagerLink:link, A.ImageBookTOCPagerLink:visited, A.ImageBookTOCPagerLink:hover
{
	font-weight: normal;
	font-size: 9px;
	color: white;
	font-family : verdana, tahoma, arial;
}

.ImageBookTOCPagerSelected
{
	font-weight: bold; 
	font-size: 10px;
	color: white;
	font-family : verdana, tahoma, arial;
}

.ImageBook_Image
{
	/*cursor :hand;*/
	border-color : #FFFFFF;
}

.ImageBookViewerTitle
{
	padding : 10px;
	background-color: #C1CADB;
	color: #0076BE;
	font-family : verdana, tahoma, arial;
	font-size: 18px;
	font-weight: bold;
	height: 35px 
}

.ImageBookViewerImage 
{
	padding : 10px;
	vertical-align:top; 
}

.ImageBookViewerDescription
{
	padding : 10px;
	vertical-align:top; 
	font-family : verdana, tahoma, arial;
	font-size: 11px;
	font-weight: normal;
	color: red;
}

/* TD contain title*/
.TDImgItemTitle
{
	font-size: 13px;
	padding : 5px;
	color: #0076BE;
	font-weight: bold;
	background-color: #C1CADB;
	text-transform: uppercase;
}

/* TD contain image*/
.TDImgBookItemImg
{
width:50%;
padding : 5px;
}

/* TD contain description*/
.TDImgBookItemDescr
{
width:50%;
padding : 0px;
}

/* TD contain all the TOC (link + pager)*/
.TDToc
{
padding-top : 5px; 
padding-bottom : 0px; 
padding-left : 5px; 
padding-right : 0px; 
}

/* TD contain all the items (image + descr) in the photobook*/
.TDItems
{
width:100%;
padding-top : 5px; 
padding-bottom : 0px; 
padding-left : 5px; 
padding-right : 5px; 
}

/* TD contain one item (image + descr) in the photobook*/
.ImageBookItem
{ 
vertical-align: top;
}

/* TD contain button first,previous,next,last */
.TDNavigator
{
padding : 5px;
text-align : center;
}

/* TD contain command buttons (download, view image, ...)*/
.TDButton
{
padding : 5px;
}


/**************************************/


/*style for table around modules*/
/**************************************/
.Table_Module
{
	width:100%;
	background-color: #FFFFFF;
	padding-left:5px;
  	padding-right:5px;
  	padding-bottom:5px;
  	padding-top:5px;

}
.TD_Module_HeaderA
{
    text-align : left;
    font-family : verdana, tahoma, arial;
    font-size:  18px;
    font-weight:    normal;
    color: #CA5408;
border-bottom: #0071BC 1px groove;	
}

.TD_Module_HeaderB
{
    text-align : left;
    font-family : verdana, tahoma, arial;
    font-size:  18px;
    font-weight:    normal;
    color: #CA5408;
}
.TD_Module_Content
{
    padding-top: 10px;	
}
.TD_Module_Footer
{}

.TD_Module_Command
{}
.TD_Module_Title
{    
    text-align : left;
    font-family: verdana, tahoma, arial;
    font-size:  18px;
    font-weight:    normal;
    color: #CA5408;
}

.AuthorizationAvertise
{    
    text-align : center;
    font-family: verdana, tahoma, arial;
    font-size:  18px;
    font-weight:    bold;
    color: red;
    padding-top: 10 px;
    padding-bottom: 10 px;
    padding-left: 25 px;
    padding-right: 25 px;
}

/*style for Download center*/
/**************************************/

.DC_TD_TITLE{
    vertical-align : top;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    color: #003366;
    font-weight: bold;
    line-height: 12px;
    padding-top : 0px; 
    padding-bottom : 4px; 
    padding-left : 4px; 
    padding-right : 4px; 
}

.DC_TD_CELL{
    vertical-align : top;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    color: #003366;
    font-weight: normal;
    padding-top : 0px; 
    padding-bottom : 0px; 
    padding-left : 4px; 
    padding-right : 4px; 
  border-color: black;
  border-width:0px;
  border-style:solid;   
}

.DC_TABLE{
}

.DC_FILTER_TD{
    vertical-align : top;
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    color: #003366;
    font-weight: normal;
    padding-top : 0px; 
    padding-bottom : 0px; 
    padding-left : 0px; 
    padding-right : 0px; 
}
/*Affichage des onglet (configuration)*/
.Onglet_Activated
{
	border-right: white 1px solid;
	padding-right: 3px;
	border-top: white 1px solid;
	padding-left: 3px;
	border-left:  white 1px solid;
	border-bottom: white 1px solid;
	height: 20px;
	background-color: dimgray;
	color:white;
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 13px;    
    text-decoration:none;
    font-weight: bold;    
}
.Onglet_Deactivated
{
	background-color: white;
    border-color: dimgray;
	border-width:1px;
	border-style:solid;
	padding-left:3;
	padding-right:3;
	height:20px;
	font-weight: bold;
	font-size: 13px;
	color: gray;
	font-family: Verdana, Helvetica, sans-serif;
	text-decoration: none;
	cursor : hand;
}

.Onglet_Disabled
{
    border-color: dimgray;
	border-width:1px;
	border-style:solid;
	padding-left:3;
	padding-right:3;
	height:20px;
	background-color: lightgrey;
	font-weight: bold;
	font-size: 13px;
	color: gray;
	font-family: Verdana, Helvetica, sans-serif;
	text-decoration: none;
}

._3DWin
{
	border-right: dimgray inset;
	border-top: thin inset;
	border-left: thin inset;
	border-bottom: dimgray thin inset;	
}

/************************/
/* FAQS*/

.FaqsQuestion /*Cf .normal*/
{
	vertical-align : top;
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: normal;    
}
.FaqsAnswer
{

vertical-align : top; 

font-family: Verdana, Helvetica, sans-serif;

font-size: 11px;

font-weight: normal;

}

.LabelCategory

{

valign: top;

vertical-align:sub;

}

.radiobuttonlistFaqs

{

vertical-align : top; 

font-family: Verdana, Helvetica, sans-serif;

font-size: 11px;

font-weight: normal;

line-height: 12px;

RepeatDirection:Horizontal;

}

.Faqs-TxtSearch

{

font-family: Verdana, Helvetica, sans-serif;

font-size: 11px;

font-weight: normal; 

}

.Faqs-Td

{

align:right;

valign:top;

}

.FaqsIndex-table

{


}

.FaqsIndex-td

{

text-align:center;

}

.FaqsNewPageLink

{ 

vertical-align : top; 

text-align:center;

font-family: Verdana, Helvetica, sans-serif;

font-size: 11px;

font-weight: normal;

color:Blue;

line-height: 12px;

}

.FaqsNewPageLabel

{

vertical-align : top; 

text-align:center;

font-family: Verdana, Helvetica, sans-serif;

font-size:14px;

font-weight: normal;

font-weight: bold;

height:100%;

color:Blue;

line-height: 12px;

}

.Faqs_Label

{

font-family: Verdana, Helvetica, sans-serif;

font-size: 11px;

font-weight:bold;

}

.Faqs_Link

{

vertical-align:center;

font-family: Verdana, Helvetica, sans-serif;

font-size: 11px;

font-weight: normal;

line-height: 12px;

}

Faqs_Table_Header

{

width:100%;

background-color:#ccccff;

}

/*** Tasks****/

.TasksAlternate
{
	background-color:whitesmoke;
}

.TasksHeader
{
	font-family : Tahoma,Verdena;
	font-weight : bold;
	font-size : 9pt;
	background-color:#cfcfcf;
}

.TasksItem
{
	font-family : Tahoma,Verdena;
	font-size : 8pt;
	color : #003366;
}

.TasksSearchTextBox
{
	font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
}

.TasksTableSearch
{
	font-family : verdana, tahoma, arial;
    font-size: 11px;
	background-color:#cfcfcf;
	color : #003366;

}

.TasksPagerSearch
{
	font-family : Tahoma,Verdena;
	font-size : 8pt;
	font-weight : bold;
	background-color:#cfcfcf;
}

.ListHeader
{
	font-family : Tahoma,Verdena;
	font-size : 8pt;
	font-weight : bold;
	color: #003366;
}

.oddTask
{
	background-color:whitesmoke;
}

.evenTask
{
}

.dateSeparator
{
	font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
}

/* for the buttons in the Tasks Option Modal Dialog*/
.TasksCommandButton     {
    font-family : verdana, tahoma, arial;
    font-size: 11px;
    font-weight: normal;
    text-decoration:    underline;
    color: #CA5408;
    cursor : hand;
}

.TasksMainTable
{
}

.TasksTitle
{
	text-align : center;
    font-family: verdana, tahoma, arial;
    font-size:  14px;
    font-weight:    normal;
    color: #CA5408;
}

.TasksTableOption
{
}

/*****************************************************************************************
/**************************************      FORUM   *************************************
*****************************************************************************************/

/*****************************************************
General Anchor
*****************************************************/
a.linkSmallBold, a.linkMenuSink
{
    font-weight: bold;
}

a.linkSmall, a.LinkSmallBold, a.linkMenuSink
{
    font-size: 12px;
}


/*****************************************************
Text and Anchor to display when a user is online
*****************************************************/
.userOnlineLinkBold, a.userOnlineLinkBold, a.userOnlineLinkBold:Visited, a.userOnlineLinkBold:Hover, a.userOnlineLinkBold:Link
{
    font-weight: bold;
    color: #003366;
}

.moderatorOnlineLinkBold, a.moderatorOnlineLinkBold, a.moderatorOnlineLinkBold:Visited, a.moderatorOnlineLinkBold:Hover, a.moderatorOnlineLinkBold:Link
{
    font-weight: bold;
    color: #0076BE;
}

.adminOnlineLinkBold, a.adminOnlineLinkBold, a.adminOnlineLinkBold:Visited, a.adminOnlineLinkBold:Hover, a.adminOnlineLinkBold:Link
{
    font-weight: bold;
    color: #003366;
}

/*****************************************************
Text and anchors used in the navigation menu
*****************************************************/
.menuTitle
{
    font-weight: bold;
    font-size: 14px; 
    font-family: Arial, Helvetica, sans-serif;
    color: #0076BE;
}

.menuText
{
    font-size: 12px;
    font-weight: bold;
    color: #FFFFFF;
}

a.menuTextLink:visited, a.menuTextLink:link
{
    font-size: 12px;
    text-decoration: none; 
    color: #003366;
}

a.menuTextLink:Hover
{
    color: #003366;
}


/*****************************************************
Text and anchors used in the search
*****************************************************/
.searchPager
{
    font-size : 12px;
    font-weight: bold;
}

.searchItem
{
	background-color: #ffffed;
}

.searchAlternatingItem
{
	background-color: #FFFFFF;
}


/*****************************************************
Default separator style for PostList
*****************************************************/
td.flatViewSpacing
{
    height: 2px;
    background-color: #ffffed;
}

/*****************************************************
Table Header and cell definitions
*****************************************************/
th
{
	background-color: #C1CADB;
}

td.forumHeaderBackgroundAlternate
{
	background-color: #C1CADB;
}


/*****************************************************
General Text
*****************************************************/
.normalTextSmall 
{ 
    font-family : verdana, tahoma, arial;
    font-size: 10px;
    font-weight: normal;
    color: #003366;
}

.normalTextSmallBold
{ 
    font-family : verdana, tahoma, arial;
    font-size: 10px;
    font-weight: bold;
    color: #003366;
}

.normalTextSmaller
{
    font-family : verdana, tahoma, arial;
    font-size: 10px;
    color: #003366;
}

.normalTextSmall, .normalTextSmallBold, .normalTextSmaller
{ 
    font-family : verdana, tahoma, arial;
    font-size: 10px;
    font-weight: normal;
    color: #003366;
}

/*****************************************************
Text used on tables with a background
*****************************************************/
.tableHeaderText
{
	font-weight: bold;
	font-size: 14px;
	color: #003366;
}

/*****************************************************
Border used around tables
*****************************************************/
.tableBorder
{
    border: 1px #C1CADB solid; 
    background-color: #FFFFFF;
}

/*****************************************************
Main forum colors
*****************************************************/
td.forumRow
{
    background-color: #ffffed;
}


td.forumAlternate
{
    background-color: #ffffcf;
}

/*****************************************************
Background color and text used in threaded view
*****************************************************/
td.threadTitle
{
    background-color: #ffffde;
}

.threadDetailTextSmall
{
	font-size: 12px;
	color: #0055e7;
}

.threadDetailTextSmallBold
{
	font-weight: bold;
	font-size: 12px;
	color: #0055e7;
}

td.forumRowHighlight
{
    background-color: #ffffde;
}

/*****************************************************
Text and links used in ForumGroupRepeater and ForumRepeater
*****************************************************/
.forumTitle
{
	font-weight: bold;
	font-size: 14px;
	color: #0076BE;
}


a.forumTitle:visited, a.forumTitle:link
{
    font-size: 14px;
    font-weight: bold;
    color: #013DA4;
}

a.forumTitle:hover
{
    color: #DD6900;
}

.forumName
{
    font-weight: bold;
    font-size: 16px; 
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none; 
    color: navy;
}

a.forumName:hover
{
    color: #DD6900;
    text-decoration: underline;
}


/*****************************************************
Form Elements
*****************************************************/

.forum_textarea
{
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 12px;
    background-color: White;
    border-color: Black;
}

/*****************************************************
Menu Controls
*****************************************************/
A.linkMenuSink
{
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    position: relative;
}

TD.popupMenuSink
{
    position: relative;
}

DIV.popupMenu
{
    border: 1px solid blue;
}

DIV.popupTitle
{
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    font-weight: bold;
    background-color: #4455AA;
}

DIV.popupItem
{
    font-size: 14px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #DDEEFF;
}


/****************************************************************************************

/*CSS for the glossary module*/

/****************************************************************************************/


/********************Display of the principal row ex: firstLetter - term - definition***********/

.gl_topImg {
vertical-align:middle;
padding-right:1px;
}

.gl_First_Letter {
FONT-WEIGHT: bold; 
FONT-SIZE: 20px; 
FONT-FAMILY: verdana, tahoma, arial; 
COLOR: #003366; 
TEXT-ALIGN: justify;
vertical-align:top;
width:50px; 
}

.gl_EditImg

{ 
padding-right:8px;
padding-top:8px;
vertical-align:top;
}

.gl_term {
FONT-WEIGHT: bold; 
FONT-SIZE: 12px; 
FONT-FAMILY: verdana, tahoma, arial; 
COLOR: #003366; 
TEXT-ALIGN: justify;
padding-top:8px;
vertical-align:top;
width:150px;
}

A.gl_Anchor_Def:active {
text-decoration:none;
color:#003366 ; 
}

A.gl_Anchor_Def:visited {
text-decoration:none;
color:#003366 ; 
}

A.gl_Anchor_Def:link {
text-decoration:none;
color: #003366; 
}

A.gl_Anchor_Def:hover {
text-decoration:none;
color: #003366; 
}

.gl_Def{
FONT-WEIGHT: normal; 
FONT-SIZE: 12px; 
FONT-FAMILY: verdana, tahoma, arial; 
COLOR: #003366; 
TEXT-ALIGN: justify;
padding-top:8px;
padding-right:20px;
vertical-align:top;
}

/**********************************************************************************************/

 

/*********************Display of the Search bar*********************************/

.gl_Search_Align {
text-align:left;
vertical-align:middle;
}

.gl_Search_Label {
font-family: Verdana, Helvetica, sans-serif;
font-size: 11px;
font-weight: normal;
vertical-align:middle;
padding-right:5px; 
}

.gl_Search_TextBox {
font-family: Verdana, Helvetica, sans-serif;
font-size: 11px;
font-weight: normal; 
vertical-align:middle;
} 

/*******Display of the Index Glossary user control*********/

.gl_Index {
FONT-SIZE: 17px; 
text-align:center;
letter-spacing:-0.5mm;
padding-top:10px;
padding-bottom:10px;
}

.gl_Index_Letter {
padding-right:5px;
}

.gl_Index_Disabled
{
	color: gray;
}

A.aIndexGlossary:link {
COLOR: #f47937; 
TEXT-DECORATION: none;
}

A.aIndexGlossary:visited {
COLOR: #f47937; 
TEXT-DECORATION: none;
}

A.aIndexGlossary:active {
COLOR: #f47937; 
TEXT-DECORATION: none;
}

A.aIndexGlossary:hover {
COLOR: #f47937; 
TEXT-DECORATION: underline;
}

/**********************************************************/
/* wvnSearch   */
/**********************************************************/
.wvnSearchTable
{
	width:100%;
	border-width : thin;
	border-right: black thin solid;
	border-top: black thin solid;
	border-left: black thin solid;
	border-bottom: black thin solid;	
}
.wvnSearchItem1
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: normal;
}
.wvnSearchItem2
{	
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	background-color: lightgrey;
}
.wvnSearchHeader
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  11px;
    font-weight:    bold;
    color: black;
}
.wvnSearchFooter
{}
.wvnSearchPager
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: normal;    	
}

.wvnSearchConfig_Table
{
	background-color : lightgrey;	
}
.wvnSearchConfig_Title
{
	border-bottom: black 1px double;
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  11px;
    font-weight:    bold;
    color: black;
}

.wvnSearchConfig_Item1_l
{}
.wvnSearchConfig_Item1_c
{}
.wvnSearchConfig_Item1_r
{}

.wvnSearchConfig_Item2_l
{
	border-top: gray 1px solid;
	border-left: gray 1px solid;
	border-bottom: white 1px solid;
}
.wvnSearchConfig_Item2_c
{
	border-top: gray 1px solid;	
	border-bottom: white 1px solid;	
}
.wvnSearchConfig_Item2_r
{
	border-top: gray 1px solid;
	border-right : gray 1px solid;
	border-bottom: white 1px solid;
}
.wvnSearch_SearchDidNotMatch
{
	font-weight: bold;
	font-size: 15px;
	color: deepskyblue;
	line-height: 12px;
	font-family: Verdana, Helvetica, sans-serif;	
}

.wvnSearch_Result_TableRes
{
	vertical-align : top;
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: normal; 	
}
.wvnSearch_Result_TableRes_FoundOnPageLbl
{}
.wvnSearch_Result_TableRes_FoundOnPageValue
{}
.wvnSearch_Result_TableRes_ModuleTypeLbl
{}
.wvnSearch_Result_TableRes_ModuleTypeValue
{}
.wvnSearch_Result_TableRes_ModuleLbl
{}
.wvnSearch_Result_TableRes_ModuleValue
{}
.wvnSearch_Result_TableOccRes
{
	vertical-align : top;
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: normal; 	
}
.wvnSearch_Result_TableOccRes_Title
{
	font-weight: bold;
	font-size: 12px;
	vertical-align: top;
	font-family: Verdana, Helvetica, sans-serif;
	text-decoration: underline;
}
.wvnSearch_Result_TableOccRes_ModuleDetailLbl
{}
.wvnSearch_Result_TableOccRes_ModuleDetailLbl
{}
.wvnSearch_Result_TableOccRes_Word
{
	font-weight: bold;	
	font-style: italic;	
}


/**********************************************************/
/* wvnGuestBook   */
/**********************************************************/
.GuestBook_HeadFiltre
{}

.GuestBook_Table_Gen
{}

.GuestBook_Items_Table
{}

.GuestBook_Td_Edit
{}
.GuestBook_Td_Signaletique
{}
.GuestBook_Td_Message
{}

.GuestBook_Table_Signaletique
{}
.GuestBook_Td_Field
{}
.GuestBook_Td_FieldValue
{}
.GuestBook_Td_FieldMessage
{}
.GuestBook_SubHead{
    background-color: red;
    border-width : 1px;
    border-style: solid;
    border-color: black;
    padding: 0px;    
    font-size : 16px;
}
/**********************************************************/


/**********************Calendar****************************/


.Calendar_Table
{
	background-color:white;
	font :8 pt Tahoma;
}


/*Calendar Header */
.Calendar_TdHeaderHour
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  11px;
    font-weight:    bold;
    width : 5%;
    text-align : right;
}

.Calendar_TdHeaderOutHour
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  11px;
    font-weight:    bold;
    width : 5%;
    text-align : right;
}

.Calendar_TH
{
  font-family:Arial, sans-serif;
  color:#FFFFFF;
  font-size:8pt;
  font-weight: bold;
  background-color:#336699;
  text-align:center;
}

.Calendar_TodayTH
{
  font-family:Arial, sans-serif;
  color:red;
  font-size:8pt;
  font-weight: bold;
  background-color:#336699;
  text-align:center;
}

.Calendar_ImagesNextBefore
{
	cursor:hand;
}

a.Calendar_Link0:link
{
font :8 pt Tahoma;
TEXT-DECORATION: none;
color:#4682B4;
}

a.Calendar_Link0:active
{
font :8 pt Tahoma;
TEXT-DECORATION: none;
color:#4682B4;
}

a.Calendar_Link0:visited
{
font :8 pt Tahoma;
TEXT-DECORATION: none;
color:#4682B4;
}

a.Calendar_Link0:hover
{
font :8 pt Tahoma;
color:#4682B4;
}

a.Calendar_LinkFinished0:link
{
font :8 pt Tahoma;
TEXT-DECORATION: line-through;
color:#4682B4;
}

a.Calendar_LinkFinished0:active
{
font :8 pt Tahoma;
TEXT-DECORATION: line-through;
color:#4682B4;
}

a.Calendar_LinkFinished0:hover
{
font :8 pt Tahoma;
TEXT-DECORATION: line-through;
color:#4682B4;
}

a.Calendar_LinkFinished0:visited
{
font :8 pt Tahoma;
TEXT-DECORATION: line-through;
color:#4682B4;
}

a.Calendar_Link1:link
{
font :8 pt Tahoma;
TEXT-DECORATION: none;
color:#000080;
}

a.Calendar_Link1:hover
{
font :8 pt Tahoma;
TEXT-DECORATION: underline;
color:#000080;
}

a.Calendar_Link1:visited
{
font :8 pt Tahoma;
color:#000080;
}

a.Calendar_Link1:active
{
font :8 pt Tahoma;
TEXT-DECORATION: none;
color:#000080;
}
 
a.Calendar_LinkFinished1:link
{
font :8 pt Tahoma;
TEXT-DECORATION: line-through;
color:#000080;
}

a.Calendar_LinkFinished1:visited
{
font :8 pt Tahoma;
TEXT-DECORATION: line-through;
color:#000080;
}

a.Calendar_LinkFinished1:active
{
font :8 pt Tahoma;
TEXT-DECORATION: line-through;
color:#000080;
}

a.Calendar_LinkFinished1:hover
{
font :8 pt Tahoma;
TEXT-DECORATION: line-through;
color:#000080;
}


a.Calendar_NewsLink:link
{
font :8 pt Tahoma;
TEXT-DECORATION: none;
color:#000000;
}

a.Calendar_NewsLink:hover
{
font :8 pt Tahoma;
TEXT-DECORATION: underline;
color:#000000;
}

a.Calendar_NewsLink:visited
{
font :8 pt Tahoma;
color:#000000;
}

a.Calendar_NewsLink:active
{
font :8 pt Tahoma;
TEXT-DECORATION: none;
color:#000000;
}	


/* Calendar rows */
.Calendar_TrOutHour
{
	background-color:#B0C4DE;
}

.Calendar_TrHour0
{
	background-color:#EDEDED;
}

.Calendar_TrHour1
{
	background-color:#cecfce;
}

.Calendar_TrSelectedHour0
{
	background-color:#FFFFE0;
}

.Calendar_TrSelectedHour1
{
	background-color:#FFFACD;
}




/*Calendar cells */
.Calendar_TdOutHour
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  11px;
    width:13%;
}

.Calendar_TdHour0
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  11px;
    width:13%;
}

.Calendar_TdHour1
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  11px;
	/*background-color : #aaaaaa;*/
}


/*Small Calendar */

.SmallCalendar_Table
{
	border-width:1px;
	border-style:solid;
	border-color:#6699cc;
}
.SmallCalendar_DayHeader
{
	background-color:#B0C4DE;
	font-weight: bold;
	font-size:8pt;
	
}

.SmallCalendar_Day
{
	font-weight: bold;
	font-family:Verdena, sans-serif;
	color:#696969;
	font-size:8pt;
	text-decoration:none;
}

.SmallCalendar_NextPrev
{
	font-family:Verdena, sans-serif;
	font-weight: bold;
	font-size:9pt;
}

.SmallCalendar_OtherMonth
{
	font-weight: bold;
	font-family:Verdena, sans-serif;
	color:#696969;
	font-size:8pt;
	text-decoration:none;
	
	
}

.SmallCalendar_SelectedDay
{
	border-width:1px;
	border-style:solid;
	border-color:red;
	background-color:#FFFFED;
	font-weight: bold;
	font-family:Verdena, sans-serif;
	color:#696969;
	font-size:8pt;
	text-decoration:none;
}

.SmallCalendar_Selector
{
	border-width:1px;
	border-style:solid;
	border-color:red;
}

.SmallCalendar_Title
{
	background-color:#B0C4DE;
	font-weight: bold;
	font-size:8pt;
}

.SmallCalendar_TodayDay
{
	font-family:Verdena, sans-serif;
	font-weight: bold;
	color:red;
	font-size:8pt;
	text-decoration:none;
}

.SmallCalendar_WeekendDay
{
	font-weight: bold;
	font-family:Verdena, sans-serif;
	color:#696969;
	font-size:8pt;
	text-decoration:none;
}



/*******menu contextuel******/
.skin0{
position:absolute;
width:150px;
border:2px solid black;
background-color:menu;
font-family:Verdana;
font-size:10pt;
color:black;
line-height:20px;
cursor:default;
visibility:hidden;
}

.skin1{
cursor: default;
font-family: Tahoma;
color:black;
position: absolute;
width: 150px;
font-size:10pt;
background-color: menu;
border: 1 solid buttonface;
visibility:hidden;
border: 2 outset buttonhighlight;
}
a.MenuLink
{
	color:black;
	text-decoration:none;
}
a.MenuLink:hover
{
	color:white;
	text-decoration:none;
}

a.MenuLink:visited
{
	color:black;
	text-decoration:none;
}

.menuitems{
padding-left:15px;
padding-right:10px;
link:#FFFFFF;
alink:#FFFFFF;
vlink:#FFFFFF;
}
/*********fin menu contextuel***********/


Table.DialogBox
{
	background-color:White;
	BACKGROUND-COLOR:#ffffff; 
	BORDER-BOTTOM: White 2px ridge;
	BORDER-LEFT: White  2px ridge; 
	BORDER-RIGHT: White  2px ridge;
	BORDER-TOP:White  2px ridge;
}

/*****************************************************
Path control
*****************************************************/
table.PathTable, .PathItem, .PathLink, A.PathLink:link, A.PathLink:visited, A.PathLink:active, A.PathLink:hover
{
	font-family : verdana, tahoma, arial;
	font-size: 10px;
	color: #0072BC;
	letter-spacing: 0px;
  	font-weight : normal;
}

A.PathLink:link, A.PathLink:visited, A.PathLink:active, A.PathLink:hover
{
	font-family : verdana, tahoma, arial;
	font-size: 10px;
	color: #0072BC;
	text-decoration: underline;
	letter-spacing: 0px;
  	font-weight : normal;
}

/****** AdvancedForm ******/

/* pour l'alignement général du formulaire */
.tdForm
{
	text-align:center;
	vertical-align:middle;
}

/* pour l'alignement des boutons précédent/suivant, historique, etc */
.Submit
{
	text-align:center;
	vertical-align:middle;
}

/* pour l'alignement des boutons précédent/suivant, historique, etc */
.History
{
	text-align:center;
	vertical-align:middle;
}


/* style des boutons précédent,suivant,historique + numéros d'étapes en haut */
.Navigator
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
}

/* pour l'alignement des numéros d'étapes en haut */
.Steps
{
	text-align:right;
	vertical-align:middle;
}

/* pour l'alignement du total en haut */
.Total
{
	text-align:right;
	vertical-align:middle;
}

/* style du mot "Total" */
.TotalTitle
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  14px;
    font-weight:    bold;
    color: darkred;
    text-decoration:    underline;
    
}

/* style de la valeur du total et de la monnaie */
.TotalValueCurrency
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;    
}

/*										*
 *										*
 *			 ---------------------					*
 *			| WVNLIST MODULE CSS  |					*
 *			 ---------------------					*
 *										*
 *										*
 *										*/

/*										*
 *										*
 *										*
 *			General wvnList						*
 *										*
 *										*
 *										*/

/* Default font for the button */
.wvnListButtonFont
{
	font-size :  x-small;
}

/* Default width for DropDownLists/Textboxes */
.wvnListDefaultWidth
{
	width : 120;	
}

/*										*
 *										*
 *										*
 *			wvnList related						*
 *										*
 *										*
 *										*/

/* Options table (domains/list selection, sort, description) */
.wvnListOptionsTable
{
	width : 100%;
}

/* Options table row */
.wvnListOptionsTableRow
{
	
}

/* Options table: inner tables */
.wvnListOptionsTableInner
{
	
}

/* Options table columns */
.wvnListOptionsTableCol
{
	
}

/* Options table options panel (i.e. Domain selection) */
.wvnListOptionsTablePanel
{
	
}

/* The list description zone */
.wvnListListDescription
{
	OVERFLOW-Y: auto;
	width: 300px;
	height: 50px;
}

/* Table containing the div that will contain the data */
.wvnListListTable
{
	width : 100%;
	height : 100%;
}

/* Div that will contain the data */
.wvnListListTableDiv
{
	 WIDTH : 750; 
	 HEIGHT : 300;
	 overflow :auto;
}

/* Alignement of the launch/export buttons */
.wvnListLaunchButtons
{
	align:"center";
}

/* The dataGrid containing the result of the query... */
.wvnListDataGrid
{
	border-right: black 1px solid;
	border-top: black 1px solid;
	border-left: black 1px solid;
	border-bottom: black 1px solid;
}

/* ... its header style (TR)... */
.wvnListHeaderStyle
{
	border-right: black 1px solid;
	border-top: black 1px solid;
	font-weight: bold;
	font-size: 8pt;
	border-left: black 1px solid;
	color: black;
	border-bottom: black 1px solid;
	font-style: italic;
	background-color: silver;
	text-align: center;
}

/* ... its item style (TR)... */
.wvnListItemStyle
{
	font-size: 8pt;
	color: black;
}

/* ... its alternate item style (TR) ... */
.wvnListAlternateItemStyle
{
	font-size: 8pt;
	color: black;
}

/* ... its item style (TD) for a default content ... */
.wvnListItemDefault
{
}

/* ... its item style (TD) for a string content ... */
.wvnListItemString
{
	text-align: left;
}

/* ... its item style (TD) for a string content ... */
.wvnListItemNumber
{
	text-align: right;
}

/* ... its item style (TD) for a string content ... */
.wvnListItemDate
{
	text-align: left;
}

/* ... its item style (TD) for a boolean content ... */
.wvnListItemBoolean
{
	text-align: center;
}

/* Div pager part */
.wvnListPagerStyle
{
	font-weight: bolder;
	font-size: 12px;
	vertical-align: top;
	color: gainsboro;
	font-style: italic;
	font-family: Verdana, Helvetica, sans-serif;
}

.wvnListPagerStyle a:link 
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  12px;
    color: Black;
    vertical-align:top;
}

.wvnListPagerStyle a:visited 
{ 
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  12px;
    color: Black;
    vertical-align:top;
}

.wvnListPagerStyle a:hover 
{ 
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  12px;
    color: Red;
    vertical-align:top;
}

/*										*
 *										*
 *										*
 *			editWvnList related			*
 *										*
 *										*
 *										*/

/* Table for the edit of a list... */
.wvnListEditPanel
{
}

/* ... row of this table */
.wvnListEditRow
{
	vertical-align: top;
}

/* Width of filter textboxes */
.wvnListFilterWidthEdit
{
	width:120;	
}

/*										*
 *										*
 *										*
 *			configWvnList related		*
 *										*
 *										*
 *										*/

/* Dimensions of the listbox(es) */
.wvnListListBoxCell
{
	width: 180px;
	height: 200px;
}

/* Width of an option table */
.wvnListOption
{
	width:100%
}

/* TD used for displaying the "edit" panel (add, remove, edit */
.wvnListEditPanel
{
	width:50;
	text-align:left;
}

/* Additionnal options for the chart control */
.wvnListChartTheme
{
	width:640;
	height:480;
}
/****** AdvancedForm ******/


/* pour l'alignement général des labels du formulaire */
.tdForm
{
	text-align:left;
	vertical-align:top;
}

/* pour l'alignement général des contrôles du formulaire */
.tdForm2
{
	text-align:left;
	vertical-align:middle;
}

/* pour l'alignement général de la page */
.tdGlobal
{
	text-align:center;
	vertical-align:middle;	
	 
}

/* défilement du formulaire */
.Scrollable
{
	/*overflow-y:auto;
	height:300px;*/
	
	
	
}

.bgNav
{
	background-color:#ffffcc;
	
}

.subItem
{
	background-color:#ffffcc;
}



/* pour l'alignement des boutons précédent/suivant*/
.Submit
{
	text-align:center;
	vertical-align:middle;
	visibility:hidden;
}

/* pour l'alignement des boutons Paypal + message de confirmation*/
.SubmitPP
{
	text-align:center;
	vertical-align:middle;
	
}

/* pour l'alignement de l'historique, etc */
.History
{
	text-align:center;
	vertical-align:middle;
	
}


/* style des boutons précédent,suivant et numéros d'étapes en haut */
.Navigator
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
}

/* pour l'alignement des numéros d'étapes en haut */
.Steps
{
	text-align:center;
	vertical-align:middle;
}

/* pour l'alignement du total en haut */
.Total
{
	text-align:center;
	vertical-align:middle;
}

/* style du mot "Total" */
.TotalTitle
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  14px;
    font-weight:    bold;
    color: darkred;
    text-decoration:    underline;
    
}

/* style de la valeur du total et de la monnaie */
.TotalValueCurrency
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;    
}

/****** Invoice ******/

/* pour l'alignement de la liste de factures */
.Invoice
{
	text-align:center;
	vertical-align:middle;
	
}

.InvoiceTitle
{
	font-family: Verdana, Helvetica, sans-serif;
    font-size:  14px;
    font-weight:    bold;
    color: darkred;
    text-decoration:    underline;
    
}

/*
	AdvCatalog
*/

.AdvCatalog_GridDisplay_FieldsHeader
{
	padding:20px;	
	padding-left:5px;
	padding-right:5px;
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	background-color: #e5efff;
	white-space: nowrap;
	text-align:center;
}

.AdvCatalog_GridDisplay_FieldsHeader td
{
	padding-left: 10px;
	padding-right: 10px;
}

.AdvCatalog_GridDisplay_FieldDataOdd
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_GridDisplay_FieldDataEven
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	background-color: #E8E8EE;
}

.AdvCatalog_GridDisplay_StringData
{
	padding-left:2px;
	padding-right:2px;
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_GridDisplay_NumberData
{
	padding-left:2px;
	padding-right:2px;
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	text-align: right;
}

.AdvCatalog_GridDisplay_ImageData
{
	padding-left:2px;
	padding-right:2px;
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_GridDisplay_ThumbData
{
	padding-left:2px;
	padding-right:2px;
	width: 120px;
	height: 120px;
	vertical-align: middle;
	text-align: center;
}

.AdvCatalog_GridDisplay_ThumbData img
{
	width: 100px;
	vertical-align: middle;
	text-align: center;
}

.AdvCatalog_GridDisplay_URLData
{
	padding-left:2px;
	padding-right:2px;
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_GridDisplay_BooleanData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	text-align: center;
}

.AdvCatalog_GridDisplay_FileData
{
	padding-left:2px;
	padding-right:2px;
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

/*--View: ListDisplay*/
.AdvCatalog_ListDisplay_FieldsHeader
{
	font-weight: normal;
	font-size: 11px;
	color: #0033ff;
	font-family: Verdana, Helvetica, sans-serif;
}

/*Article paire*/
.AdvCatalog_ListDisplay_Even
{
	width: 85%;
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;

}

/*Article impaire*/
.AdvCatalog_ListDisplay_Odd
{
	width: 85%;
	background-color: #baebff;
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;

}

/*Zone d'affiche de nombres*/
.AdvCatalog_ListDisplay_NumberData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	text-align: right
}

/*Zone d'affiche de textes*/
.AdvCatalog_ListDisplay_StringData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

/*Zone d'affiche de lien*/
.AdvCatalog_ListDisplay_UrlData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

/*Zone d'affiche de lien de téléchargement*/
.AdvCatalog_ListDisplay_FileData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

/*Zone d'affiche d'images*/
.AdvCatalog_ListDisplay_ImageData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

/*Cellule de gauche pour affiche liste*/
.AdvCatalog_ListDisplay_ThumbData
{
	width: 150px;
	height: 150px;
	vertical-align: middle;
	text-align: center;
}

.AdvCatalog_ListDisplay_ThumbData img
{
	width: 100px;
	vertical-align: middle;
	text-align: center;
}

.AdvCatalog_ListDisplay_ThumbData input
{
	width: 100px;
	vertical-align: middle;
	text-align: center;
}

/*Zone d'affiche de Date*/
.AdvCatalog_ListDisplay_DateData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

/*Zone d'affiche de Boolean*/
.AdvCatalog_ListDisplay_BooleanData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	text-align:center;
}

/*Zone d'affiche sur la demande d'info complémentaire*/
.AdvCatalog_ListDisplay_InfoSupData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

/*Zone d'affiche pour le lien détail*/
.AdvCatalog_ListDisplay_DetailData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

/*Zone d'affiche pour une zone HTML*/
.AdvCatalog_ListDisplay_HTMLData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_FicheDisplay_CategoryHeader
{
	width: 1%;
	font-size: 14px;
	color: black;
	font-family: Verdana, Helvetica, sans-serif;
	white-space: nowrap;
}

.AdvCatalog_FicheDisplay_CategoryText
{
	
	font-weight: bold;
	font-size: 14px;
	color: blue;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_FicheDisplay_DescriptionHeader
{
	width: 1%;
	
	font-weight: normal;
	font-size: 14px;
	color: black;
	font-family: Verdana, Helvetica, sans-serif;
	white-space: nowrap;
}

.AdvCatalog_FicheDisplay_DescriptionText
{
	font-weight: normal;
	font-size: 11px;
	color: gray;
	font-style: italic;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_FicheDisplay_Image
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	text-align: center;
}

.AdvCatalog_FicheDisplay_CategoryTable
{
	width: 100%;
}

.AdvCatalog_FicheDisplay_Table
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	text-align: center;
}

.AdvCatalog_FicheDisplay_FieldDataOdd
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_FicheDisplay_FieldDataEven
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	background-color: #E8E8EE;
	
}

.AdvCatalog_InfoSupDisplay_Comment
{
	width: 300px;
}


.AdvCatalog_SearchEngine_Numbers
{
	width: 60px;
}

.AdvCatalog_SearchEngine_Date
{
	width: 80px;
}

.AdvCatalog_SearchEngine_String
{
	width: 90px;
}

.AdvCatalog_CategoriesTree
{
	border-right: thin inset;
	border-top: thin inset;
	border-left: thin inset;
	border-bottom: thin inset;
	width: 200px;
	height: 400px;
	background-color: #e5efff;
}
.AdvCatalog_CategoriesTree_RespectSpace
{
	width:200px;
	height:1px;
}


.AdvCatalog_CategoriesSearch
{
	margin: 0px;
	width: 200px;
	height: 200px;
}

.AdvCatalog_TableSearch
{
	border : 0px;
	width : 100%;
	border-collapse:	collapse;	
}

.AdvCatalog_TableSearch td
{
	border : 0;
}

/*Fiche Display...*/
.AdvCatalog_FicheDisplay_FieldsHeader
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	background-color: infobackground;
}

.AdvCatalog_FicheDisplay_FieldDataOdd
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_FicheDisplay_StringData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_FicheDisplay_NumberData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	text-align: right;
}

.AdvCatalog_FicheDisplay_ImageData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_FicheDisplay_ThumbData
{
	width: 120px;
	height: 120px;
	vertical-align: middle;
	text-align: center;
}

.AdvCatalog_FicheDisplay_ThumbData img
{
	width: 100px;
	height: 100px;
	vertical-align: middle;
	text-align: center;
}

.AdvCatalog_FicheDisplay_URLData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalog_FicheDisplay_BooleanData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	text-align: center;
}

.AdvCatalog_FicheDisplay_FileData
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCartTable
{
	font-family:Verdana;
	Font-Size:8pt;
}

.AdvCartListHead
{
    background-color: #e5efff;
    border-bottom: dimgray;
    border-left: dimgray 1px solid;
    color: black;
    font-family: Verdana, Arial;
    font-size: 11px;
    font-weight: bold;
    line-height: 20pt;
    padding-left: 5px
}

.AdvCartListItem
{
    border-bottom: dimgray;
    border-left: dimgray 1px solid;
    color: black;
    font-family: Verdana, Arial;
    font-size: 11px;
    padding-left: 5px
}

.AdvCartListItemAlt
{
    background-color: #E8E8EE;
    border-bottom: dimgray;
    border-left: dimgray 1px solid;
    color: black;
    font-family: Verdana, Arial;
    font-size: 11px;
    padding-left: 5px
}

.AdvCartNbr
{
	text-align:right;
}

.AdvCartDel
{
    width:80px;
}

.AdvCartListFooter
{
    background-color: #E5EFFF;
    line-height: 10pt
}

.AdvCatalogOk
{
    font-family: Verdana, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: bold;
	color: dodgerblue;
}

.AdvCatalogImagesSelect
{
	border:3;
	border-style: inset;
}

.AdvCatalogImagesShow
{
}

.AdvCatalogSearchFailed
{
    font-family: Verdana, Helvetica, sans-serif;
    font-size: 11px;
    font-weight: normal;
    color:Red;
}

.AdvCatalogSearchSucceed
{
	font-weight: normal;
	font-size: 11px;
	color: seagreen;
	font-family: Verdana, Helvetica, sans-serif;
}

.AdvCatalogOrdersLst
{
	width:100%;
	height:100%;
}


.AdvCatalogImportHeader
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	background-color: aliceblue;
}
.AdvCatalogImportFooter
{
	font-weight: normal;
	font-size: 11px;
	font-family: Verdana, Helvetica, sans-serif;
	background-color: aliceblue;
}

</style>