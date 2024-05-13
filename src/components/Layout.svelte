<script lang="ts">
  import ReactDynInter from "@/images/react_dyn_inter.jpg";
  import LogoTop1 from "@/images/logo_top1.jpg";
  import Intelligent from "@/images/intelligent.gif";
  import LogoTop2 from "@/images/logo_top2.jpg";
  import LogoBottom from "@/images/logo_bottom.jpg";
  import WVNTbannerHOME from "@/images/WVNTbannerHOME.jpg";
  import LogoMicrosoft from "@/images/logo_microsoft.gif";
  import LogoBottom2 from "@/images/logo_bottom2.jpg";
  import LogoRtc1 from "@/images/logo-rtc1.gif";
  import logoS3Csanslignes from '@/images/logoS3Csanslignes.jpg';

  import confetti from 'canvas-confetti';
  window["confetti"] = confetti;
</script>

<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  width="1000px"
  height="100%"
  align="center"
>
  <tbody>
    <tr height="13px">
      <td class="top1">
        <span id="Banner_siteName" class="SiteTitle"></span>
      </td>
    </tr>
    <tr height="22px">
      <!--Menu-->
      <td class="top2" align="right" width="100%">
        <table width="100%" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <td width="100%"></td>
              <td>
                <table
                  border="0"
                  class="HTableMenu1"
                  width="100%"
                  id="Menu_Menu"
                  cellspacing="0"
                  style="border-collapse:collapse;"
                >
                  <tbody>
                    <tr>
                      <td class="HTDMenuA1">
                        <a
                          tabindex="-1"
                          href="Default.aspx?Lang=fr&amp;Page=home"
                          class="HTextMenuA1">Accueil</a
                        >
                      </td>
                      <td class="HTDMenuV1">
                        <a
                          tabindex="-1"
                          href="Default.aspx?Lang=fr&amp;Page=solutions"
                          class="HTextMenuV1">Solutions</a
                        >
                      </td>
                      <td class="HTDMenuV1">
                        <a
                          tabindex="-1"
                          href="Default.aspx?Lang=fr&amp;Page=produits"
                          class="HTextMenuV1">Produits</a
                        >
                      </td>
                      <td class="HTDMenuV1">
                        <a
                          tabindex="-1"
                          href="Default.aspx?Lang=fr&amp;MenuItem=38"
                          class="HTextMenuV1">Services</a
                        >
                      </td>
                      <td class="HTDMenuV1">
                        <a
                          tabindex="-1"
                          href="Default.aspx?Lang=fr&amp;MenuItem=554"
                          class="HTextMenuV1">Support</a
                        >
                      </td>
                      <td class="HTDMenuV1">
                        <a
                          tabindex="-1"
                          href="Default.aspx?Lang=fr&amp;MenuItem=555"
                          class="HTextMenuV1">About&nbsp;us</a
                        >
                      </td>
                      <td width="100%">&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
                <!-- END MD : 11/03/2002 -->
                <!-- 
                // BEGIN MD : 11/03/2002
                // This is the old way : The table is bind
                
                // END MD : 11/03/2002		-->
                <!-- BEGIN MD 30/05/2002 
            </td></tr></table>
    EN MD 30/05/2002 -->
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <!--Menu END-->
    </tr>
    <!-- LOGO-->
    <tr height="26 px">
      <td>
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          height="26"
        >
          <tbody>
            <tr>
              <td style="font-size: 0;">
                <img
                  id="Banner_Image4"
                  class="logo-morph"
                  alt="Site Internet, Intranet, Extranet"
                  src={LogoTop1}
                  border="0"
                  height="26"
                  width="240"
                />
              </td>
              <td width="100%" align="right" class="top3a">
                <img
                  id="Banner_Image1"
                  alt="Internet Solutions"
                  src={Intelligent}
                  border="0"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr style="font-size: 0;">
      <td>
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          width="100%"
          bgcolor="#c1cadb"
        >
          <tbody>
            <tr>
              <td>
                <a href="default.aspx">
                  <img
                    id="Banner_Image2"
                    alt="Site Internet Interactif - CMS"
                    src={LogoTop2}
                    border="0"
                    height="79"
                    width="668"
                  />
                </a>
              </td>
              <td width="100%" height="79">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  height="79"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td class="top3b" width="100%" align="right" valign="top">
                        <span class="WELCOMEMESSAGE">
                          <a
                            href="/Wavenet/Default.aspx?Page=connexion&amp;fromlink=true"
                            class="SiteLink"
                          >
                            Connexion
                          </a>
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td
                        id="Banner_chooserTd"
                        class="top3b"
                        align="right"
                        valign="bottom"
                      >
                        <table
                          id="Banner_LgChooser1_MyDataList"
                          cellspacing="0"
                          cellpadding="0"
                          border="0"
                        >
                          <tbody>
                            <tr>
                              <td class="LgListDesactivate">
                                <a
                                  href="https://web.archive.org/web/20050313050302/http://www.wavenet.be/wavenet/default.aspx?&amp;page=home&amp;Lang=fr"
                                  id="Banner_LgChooser1_MyDataList__ctl0_A2"
                                  tabindex="-1"
                                  style="cursor:text"
                                  class="LgListLink"
                                  onclick="return false;"
                                  title="Français"
                                  lg="fr">FR</a
                                >
                              </td>
                              <td class="LgListActivate">
                                <a
                                  href="https://web.archive.org/web/20050313050302/http://www.wavenet.be/wavenet/default.aspx?&amp;page=home&amp;Lang=en"
                                  id="Banner_LgChooser1_MyDataList__ctl1_A1"
                                  tabindex="-1"
                                  class="LgListLink"
                                  title="English"
                                  lg="en">EN</a
                                >
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="left"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <!--CONTENT-->
    <tr height="100%" valign="top">
      <td height="100%" valign="top">
        <table
          cellpadding="0"
          cellspacing="0"
          height="100%"
          width="100%"
          valign="top"
          border="0"
        >
          <tbody>
            <tr valign="top">
              <td width="231 px" valign="top">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="100%"
                  valign="top"
                  height="100%"
                >
                  <tbody>
                    <tr valign="top" style="font-size:0">
                      <td valign="top">
                        <img
                          id="Image1"
                          alt="WaVeNet: Sites Internet"
                          src={LogoBottom}
                          border="0"
                        />
                      </td>
                    </tr>
                    <tr valign="top" height="100%">
                      <td
                        width="100%"
                        valign="top"
                        class="LeftPane"
                        height="100%"
                      >
                        <table
                          border="0"
                          class="VTableMenu1"
                          id="Menu_Menu"
                          cellpadding="0"
                          cellspacing="0"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <table width="100%">
                                  <tbody>
                                    <tr width="100%">
                                      <td class="IndentTD"></td>
                                      <td class="VTDMenuA1" width="100%">
                                        <a
                                          tabindex="-1"
                                          href=" Default.aspx?Lang=fr&amp;Page=home"
                                          class="VTextMenuA1">Accueil</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table width="100%">
                                  <tbody>
                                    <tr width="100%">
                                      <td class="IndentTD"></td>
                                      <td class="VTDMenuV1" width="100%">
                                        <a
                                          tabindex="-1"
                                          href=" Default.aspx?Lang=fr&amp;Page=solutions"
                                          class="VTextMenuV1">Solutions</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table width="100%">
                                  <tbody>
                                    <tr width="100%">
                                      <td class="IndentTD"></td>
                                      <td class="VTDMenuV1" width="100%">
                                        <a
                                          tabindex="-1"
                                          href=" Default.aspx?Lang=fr&amp;Page=produits"
                                          class="VTextMenuV1">Produits</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table width="100%">
                                  <tbody>
                                    <tr width="100%">
                                      <td class="IndentTD"></td>
                                      <td class="VTDMenuV1" width="100%">
                                        <a
                                          tabindex="-1"
                                          href=" Default.aspx?Lang=fr&amp;MenuItem=38"
                                          class="VTextMenuV1">Services</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table width="100%">
                                  <tbody>
                                    <tr width="100%">
                                      <td class="IndentTD"></td>
                                      <td class="VTDMenuV1" width="100%">
                                        <a
                                          tabindex="-1"
                                          href=" Default.aspx?Lang=fr&amp;MenuItem=554"
                                          class="VTextMenuV1">Support</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table width="100%">
                                  <tbody>
                                    <tr width="100%">
                                      <td class="IndentTD"></td>
                                      <td class="VTDMenuV1" width="100%">
                                        <a
                                          tabindex="-1"
                                          href=" Default.aspx?Lang=fr&amp;MenuItem=555"
                                          class="VTextMenuV1">About us</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!-- END MD : 11/03/2002 -->
                        <!-- 
                // BEGIN MD : 11/03/2002
                // This is the old way : The table is bind
                
                // END MD : 11/03/2002		-->
                        <!-- BEGIN MD 30/05/2002 
            </td></tr></table>
    EN MD 30/05/2002 -->
                        <img
                          id="Image2"
                          alt="WaVeNet, Créateurs de Sites Internet en Belgique"
                          src={WVNTbannerHOME}
                          border="0"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="LeftPane" align="center">
                        <a
                          href="#mcp"
                          onclick="openWindow('https://web.archive.org/web/20050313050302/http://members.microsoft.com/partner/partnering/')"
                        >
                          <img
                            id="Image3"
                            alt="Experts Internet"
                            src={LogoMicrosoft}
                            border="0"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td id="LeftPane" class="LeftPane"></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="100%" valign="top">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  width="100%"
                  height="100%"
                  valign="top"
                >
                  <tbody>
                    <tr height="16 px">
                      <td>
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tbody>
                            <tr height="16 px">
                              <td width="450 px">
                                <img
                                  id="Image4"
                                  alt="Wallonie, Belgique"
                                  src={LogoBottom2}
                                  border="0"
                                />
                              </td>
                              <td class="ombreB" width="100%"></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <!-- tr height="0px"><td></td></tr -->
                    <tr>
                      <td
                        id="ContentPane"
                        valign="top"
                        class="ContentPane"
                        width="100%"
                      >
                      <table class="Table_Module" cellpadding="0" cellspacing="0" border="0" width="100%">
                        <tbody>
                          <tr>
                            <td id="_ctl2_HeaderTD" class="TD_Module_HeaderA">
                              <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tbody>
                                  <tr>
                                    <td id="_ctl2_Title1_Title_cell" class="TD_Module_Title">
                                      <span id="_ctl2_Title1_ModuleTitle">
                                        <h1>Bienvenue sur le portail de WaVeNet</h1>
                                      </span>
                                    </td>
                                    <td class="TD_Module_Command" align="right" id="Edit_cell">
                                      <a id="_ctl2_Title1_AlertButtonTxt" class="CommandButton" href="javascript:__doPostBack('_ctl2$Title1$AlertButtonTxt','')"></a>
                                      <a id="_ctl2_Title1_PrintButtonTxt" class="CommandButton" href="javascript:__doPostBack('_ctl2$Title1$PrintButtonTxt','')">Imprimer</a>
                                    </td>
                                  </tr>
                                  <!--
                        <tr id="_ctl2_Title1_HR_row"><td colspan="2"><hr noshade size='1'></td></tr>
                      
                        -->
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td id="_ctl2_ContentTD" class="TD_Module_Content">
                              <table id="_ctl2__ctl0_t1" class="CE_TABLE" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tbody>
                                  <tr valign="top">
                                    <td id="_ctl2__ctl0_HtmlHolder" class="CE_TD">
                                      <p></p>
                                      <p class="TEXTLEVEL1">La SPRL 
                                        <a href="Default.aspx?Page=historique">WaVeNet</a> fût créée en 1999. Cette société informatique indépendante, spécialisée dans le développement d’applications sur mesure et dans la création de sites Internet, est située à Leuze-en-Hainaut.
                                      </p>
                                      <p class="TEXTLEVEL1">Notre société intervient dans différents domaines et secteurs d'activités pour combler les besoins spécifiques à votre entreprise : </p>
                                      <ul>
                                        <li class="TEXTLEVEL1">Le développement de 
                                          <a href="Default.aspx?Page=solutions">portails Internet </a>dynamiques,
                      
                                        </li>
                                        <li class="TEXTLEVEL1">Le développement de 
                                          <a href="Default.aspx?Page=internet">sites Internet</a>,
                      
                                        </li>
                                        <li class="TEXTLEVEL1">Le développement d’
                                          <a href="Default.aspx?Page=intranet">Intranet</a>,
                      
                                        </li>
                                        <li class="TEXTLEVEL1">La 
                                          <a href="">consultance Internet</a> : Audit - Outsourcing,
                      
                                        </li>
                                        <li class="TEXTLEVEL1">La formation.</li>
                                      </ul>
                                      <slot />
                                      <p>
                                        <span class="TEXTLEVEL4">Votre site Internet reflète-t-il l’actualité de votre entreprise?
                                          <br>
                                          </span>
                                          <span>
                                            <strong class="TEXTLEVEL4">Pouvez-vous mettre à jour facilement le contenu de votre site Internet?</strong>
                                          </span>
                                          <span>
                                            <strong class="TEXTLEVEL4">
                                              <br>Pouvez-vous modifier facilement la structure de votre site Internet?
                                              </strong>
                                            </span>
                                          </p>
                                          <p class="TEXTLEVEL1">
                                            <span>
                                              <strong>
                                                <!--?xml:namespace prefix = o ns = "urn:schemas-microsoft-com:office:office" /-->
                                                <o:p></o:p>
                                              </strong>
                                            </span>Ces facilités quotidiennes, WaVeNet vous les propose via les produits&nbsp;
                                            <a href="Default.aspx?Page=Site3Clicks">Site3Clicks</a>, 
                                            <a href="Default.aspx?Page=P3Objectifs">WaVeNet Performance</a>, 
                                            <a href="Default.aspx?Page=P4Objectifs">WaVeNet Excellence </a>, notre plateforme de création et de gestion de site Web, de Portail Internet et d'Intranet.
                                          </p>
                                          <p class="TEXTLEVEL1" align="left">De part sa politique d’investissement dynamique, WaVeNet est en contact étroit avec ses clients pour mieux comprendre leurs besoins et leur offrir des produits et des services de toute première qualité. Le respect des délais et des engagements, la rapidité d’exécution, l’excellence technique et la totale satisfaction du client restent, dès lors, nos objectifs principaux.</p>
                                          <p class="TEXTLEVEL1" align="left">
                                            <table id="0" border="0">
                                              <tbody>
                                                <tr>
                                                  <td valign="top">
                                                    <p class="TEXTLEVEL1">
                                                      <br>
                                                        <br>
                                                          <br>
                                                            <strong>NOUVEAU !</strong>&nbsp;Un site web professionnel à votre image en 3 étapes 
                                                            <strong>&gt;&gt;</strong>
                                                          </p>
                                                          <p>&nbsp;</p>
                                                        </td>
                                                        <td valign="top">
                                                          <p class="TEXTLEVEL1" align="left">
                                                            <a href="http://www.site3clicks.be/" target="_blank">
                                                              <img alt="" hspace="vspace=" src={logoS3Csanslignes} align="baseline" border="0">
                                                              </a>
                                                            </p>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  <p class="TEXTLEVEL1" align="left">&nbsp;</p>
                                                  <p></p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td id="_ctl2_footerTD" class="TD_Module_Footer"></td>
                                      </tr>
                                    </tbody>
                                  </table>
                        <br />
                        <span
                          id="wvnResult_SearchDidNotMatch"
                          class="wvnSearch_SearchDidNotMatch"
                        ></span>
                      </td>
                    </tr>
                    <tr>
                      <td valign="bottom" width="100%">
                        <!--img align="left" src="images/bannerbottom1.jpg"  border="0" alt="Internet Solutions"-->
                      </td>
                    </tr>
                    <tr>
                      <td valign="bottom" width="100%" class="COPYRIGHT">
                        <hr style="width=20%;color=#C1CADB" height="1" />
                        © 2002-2003 WaVeNet s.p.r.l., All rights reserved.
                        <br />
                        Best viewed at 1024x768 with Internet Explorer 5.0 or greater!
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td width="150 px" valign="top">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  border="0"
                  height="100%"
                  valign="top"
                >
                  <tbody>
                    <tr height="16 px">
                      <td class="ombreBlue"></td>
                    </tr>
                    <tr height="100%">
                      <td
                        id="RightPane"
                        height="100%"
                        width="150"
                        valign="top"
                        class="RightPane"
                      >
                        <table
                          class="Table_Module"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td id="_ctl3_HeaderTD" class="TD_Module_HeaderB">
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="TD_Module_Command"
                                        align="right"
                                        id="Edit_cell"
                                      >
                                        <a
                                          id="_ctl3_Title1_AlertButtonTxt"
                                          class="CommandButton"
                                          href="javascript:__doPostBack('_ctl3$Title1$AlertButtonTxt','')"
                                        ></a>
                                      </td>
                                    </tr>
                                    <!--
        
        -->
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                id="_ctl3_ContentTD"
                                class="TD_Module_Content"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="wvnBasicSearchTable"
                                >
                                  <tbody>
                                    <tr>
                                      <td colspan="2">
                                        <span
                                          id="_ctl3__ctl0__ctl0_SearchTitle"
                                          class="SubHead">Rechercher</span
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <input
                                          name="_ctl3:_ctl0:_ctl0:SearchTxt"
                                          type="text"
                                          id="_ctl3__ctl0__ctl0_SearchTxt"
                                          class="normal"
                                        />
                                        <input
                                          type="submit"
                                          name="_ctl3:_ctl0:_ctl0:Go"
                                          value="Rechercher"
                                          id="_ctl3__ctl0__ctl0_Go"
                                          class="normal"
                                        />
                                      </td>
                                      <td></td>
                                    </tr>
                                    <tr>
                                      <td colspan="2">
                                        <a
                                          id="_ctl3__ctl0__ctl0_GotoAdvSearch"
                                          class="commandbutton"
                                          href="javascript:__doPostBack('_ctl3$_ctl0$_ctl0$GotoAdvSearch','')"
                                          >Recherche avancée</a
                                        >
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td id="_ctl3_footerTD" class="TD_Module_Footer"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <table
                          class="Table_Module"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tbody
                            ><tr>
                              <td id="_ctl4_HeaderTD" class="TD_Module_HeaderA">
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  border="0"
                                >
                                  <tbody
                                    ><tr>
                                      <td
                                        id="_ctl4_Title1_Title_cell"
                                        class="TD_Module_Title"
                                      >
                                        <span id="_ctl4_Title1_ModuleTitle"
                                          ><h1>News</h1></span
                                        >
                                      </td>

                                      <td
                                        class="TD_Module_Command"
                                        align="right"
                                        id="Edit_cell"
                                      >
                                        <a
                                          id="_ctl4_Title1_AlertButtonTxt"
                                          class="CommandButton"
                                          href="javascript:__doPostBack('_ctl4$Title1$AlertButtonTxt','')"
                                        ></a>
                                      </td>
                                    </tr>
                                    <!--
                          <tr id="_ctl4_Title1_HR_row">
                          <td colspan="2">
                              <hr noshade size='1'>
                            </td>
                        </tr>
                        
                          -->
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                id="_ctl4_ContentTD"
                                class="TD_Module_Content"
                              >
                                <table class="ModuleTable">
                                  <tbody
                                    ><tr>
                                      <td class="TD_Module_Content">
                                        <table
                                          id="_ctl4__ctl0_myDataList"
                                          class="normal"
                                          cellspacing="0"
                                          cellpadding="4"
                                          border="0"
                                        >
                                          <tbody
                                            ><tr>
                                              <td>
                                                <span class="ItemTitle">
                                                  Démarrez bien la rentrée avec
                                                  WaVeNet !
                                                </span>

                                                <span class="EventLocation">
                                                  <i>
                                                    <br />mercredi 1 septembre
                                                    2004<br />
                                                  </i>
                                                </span>

                                                <span class="Normal">
                                                  Pour bien démarrer la rentrée,
                                                  WaVeNet vous offre deux
                                                  nouveaux outils
                                                  incontournables qui
                                                  faciliteront les prochaines
                                                  mises à jour de votre site
                                                  Internet ! Pour voir une
                                                  démonstration du nouveau
                                                  ContentEditor,&nbsp;cliquez <a
                                                    href="http://www.site3clicks.be/site3clicks/uploads/contenteditor.swf"
                                                    >ici</a
                                                  >. &nbsp;
                                                  <a
                                                    id="_ctl4__ctl0_myDataList__ctl0__moreLink"
                                                    href="http://www.wavenet.be/Wavenet/Default.aspx?Page=Test News Letter&amp;LetterId=89"
                                                    target="_self"
                                                    >Lire plus ...</a
                                                  >
                                                </span>
                                                <br />
                                              </td>
                                            </tr><tr>
                                              <td>
                                                <span class="ItemTitle">
                                                  Réservation en ligne d'un nom
                                                  de domaine
                                                </span>

                                                <span class="EventLocation">
                                                  <i>
                                                    <br />
                                                  </i>
                                                </span>

                                                <span class="Normal">
                                                  WaVeNet vous propose
                                                  d'enregistrer et d'administrer
                                                  votre nom de domaine
                                                  vous-même. &nbsp;
                                                  <a
                                                    id="_ctl4__ctl0_myDataList__ctl1__moreLink"
                                                    href="http://www.wavenet.be/Wavenet/Default.aspx?Lang=fr&amp;Page=DNS"
                                                    target="_self"
                                                    >Lire plus ...</a
                                                  >
                                                </span>
                                                <br />
                                              </td>
                                            </tr><tr>
                                              <td>
                                                <span class="ItemTitle">
                                                  Partenariat avec RTC
                                                </span>

                                                <span class="EventLocation">
                                                  <i>
                                                    <br />
                                                  </i>
                                                </span>

                                                <span class="Normal">
                                                  WaVenet intègre dans ses
                                                  outils de gestion de contenu
                                                  le produit e-castor de la
                                                  société RTC.<br />Ce produit
                                                  permet la gestion, le partage
                                                  et l'archivage des mails
                                                  entrants et sortants.<br /><br
                                                  />
                                                  <img src={LogoRtc1} alt=""/>
                                                  <br />
                                                  &nbsp;
                                                  <a
                                                    id="_ctl4__ctl0_myDataList__ctl2__moreLink"
                                                    href="http://www.rt-computing.com/"
                                                    target="_blank"
                                                    >Lire plus ...</a
                                                  >
                                                </span>
                                                <br />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="TD_Module_Footer"> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td id="_ctl4_footerTD" class="TD_Module_Footer"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <table
                          class="Table_Module"
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td id="_ctl5_HeaderTD" class="TD_Module_HeaderB">
                                <table
                                  width="100%"
                                  cellspacing="0"
                                  cellpadding="0"
                                  border="0"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        class="TD_Module_Command"
                                        align="right"
                                        id="Edit_cell"
                                      >
                                        <a
                                          id="_ctl5_Title1_AlertButtonTxt"
                                          class="CommandButton"
                                          href="javascript:__doPostBack('_ctl5$Title1$AlertButtonTxt','')"
                                        ></a>
                                      </td>
                                    </tr>
                                    <!--
        
        -->
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                id="_ctl5_ContentTD"
                                class="TD_Module_Content"
                              >
                                <table
                                  id="_ctl5__ctl0_t1"
                                  class="CE_TABLE"
                                  cellspacing="0"
                                  cellpadding="0"
                                  border="0"
                                  width="100%"
                                >
                                  <tbody>
                                    <tr valign="top">
                                      <td
                                        id="_ctl5__ctl0_HtmlHolder"
                                        class="CE_TD"
                                      >
                                        <p>
                                          <img
                                            alt=""
                                            src={ReactDynInter}
                                            align="baseline"
                                            border="0"
                                          />
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td id="_ctl5_footerTD" class="TD_Module_Footer"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

<style lang="scss">
  :host {
    display: block;
  }
</style>
