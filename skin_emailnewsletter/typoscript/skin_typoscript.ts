
##############################################################################
# Copyright notice
#
# (c) 2010 Christian Technology Ministries International Inc.
# All rights reserved
#
# This file is part of the Web-Empowered Church (WEC)
# (http://WebEmpoweredChurch.org) ministry of Christian Technology Ministries
# International (http://CTMIinc.org). The WEC is developing TYPO3-based
# (http://typo3.org) free software for churches around the world. Our desire
# is to use the Internet to help offer new life through Jesus Christ. Please
# see http://WebEmpoweredChurch.org/Jesus.
#
# You can redistribute this file and/or modify it under the terms of the
# GNU General Public License as published by the Free Software Foundation;
# either version 2 of the License, or (at your option) any later version.
#
# The GNU General Public License can be found at
# http://www.gnu.org/copyleft/gpl.html.
#
# This file is distributed in the hope that it will be useful for ministry,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
# GNU General Public License for more details.
#
# This copyright notice MUST APPEAR in all copies of the file!
##############################################################################

##############################################################
# This is TypoScript used to modify the core templates to
# display this skin. Rewrite the header, footer, pre code and 
# post code libraries and more when needed to change structure
##############################################################

preCodeHeader = HTML
preCodeHeader.value (
	<STYLE>
		body { margin: 0; background-color: #99CC00; }
		.headerTop { background-color:#FFCC66; border-top:0px solid #000000; border-bottom:1px solid #FFFFFF; text-align:center; }
		.adminText { font-size:10px; color:#996600; line-height:200%; font-family:verdana; text-decoration:none; }
		.headerBar { background-color:#FFFFFF; border-top:0px solid #333333; border-bottom:10px solid #FFFFFF; }
		.title { font-size:20px; font-weight:bold; color:#CC6600; font-family:arial; line-height:110%; }
		.subTitle { font-size:11px; font-weight:normal; color:#666666; font-style:italic; font-family:arial; }
		.defaultText { font-size:12px; color:#000000; line-height:150%; font-family:trebuchet ms; }
		.footerRow { background-color:#FFFFCC; border-top:10px solid #FFFFFF; }
		.footerText { font-size:10px; color:#996600; line-height:100%; font-family:verdana; }
		a { color:#FF6600; color:#FF6600; color:#FF6600; }
	</STYLE>

	<!-- Open backgroundTable -->
	<table width="100%" cellpadding="10" cellspacing="0" class="backgroundTable" bgcolor='#99CC00' >
		<tr>
			<td valign="top" align="center">
				<table width="550" cellpadding="0" cellspacing="0">
)

header >
header = COA
header {
	10 = TEXT
	10 {
		wrap = <tr><td style="border-top:0px solid #000000;border-bottom:0px solid #000000;text-align:center;" align="center"><span style="font-size:10px;color:#eeeeee;line-height:200%;font-family:verdana;text-decoration:none;">|</span></td></tr>
		value = Email not displaying correctly? View it in your browser.
		typolink.parameter.data = TSFE : id
		typolink.ATagParams = style="font-size:10px;color:#eeeeee;line-height:200%;font-family:verdana;text-decoration:none;"
	}
	

	# Add <h1> wrapped title if there's no logo
	# 10 = TEXT
	# 10.if.isFalse = {$siteLogo}
	# 10.value = {$siteTitle}
	# 10.htmlSpecialChars = 1
	# 10.typolink.parameter = {$siteURL}
	# 10.wrap = <h1> | </h1>

	# Add the logo image if one is avaialble.
	# 20 = IMAGE
	# 20.if.isTrue = {$siteLogo}
	# 20.file = {$siteLogo}
	# 20.file.maxW = 300
	# 20.file.maxH = 100
	# 20.alttext.cObject = TEXT
	# 20.alttext.cObject.value = {$siteTitle}
	# 20.alttext.cObject.insertData = 1
	# 20.if.isTrue = {$siteLogo}
	# 20.stdWrap.typolink.parameter = {$siteURL}

	20 = COA
	20 {
		wrap = <tr><td style="background-color:#FFFFFF;border-top:0px solid #333333;border-bottom:0px solid #FFFFFF;padding:5px 15px 15px 15px;">|</td></tr>
		
		# Add <h1> wrapped title if there's no logo
		10 = TEXT
		10.if.isFalse = {$siteLogo}
		10.value = {$siteTitle}
		10.htmlSpecialChars = 1
		10.typolink.parameter = {$siteURL}
		10.wrap = <h1> | </h1>

		20 = IMAGE
		20.if.isTrue = {$siteLogo}
		20.file = {$siteLogo}
		20.file.maxW = 300
		20.file.maxH = 100
		20.alttext.cObject = TEXT
		20.alttext.cObject.value = {$siteTitle}
		20.alttext.cObject.insertData = 1
		20.if.isTrue = {$siteLogo}
		20.stdWrap.typolink.parameter = {$siteURL}

		# value = <center><a href=""><IMG id=editableImg1 SRC="img/logo_header.jpg" BORDER="0" title="Your Company"  alt="Your Company" align="center"></a></center>
	}
}
postCodeHeader >

preCodeFeature = HTML
preCodeFeature.value (
	<tr>
		<td style="background-color:#FFFFFF;border-top:0px solid #FFFFFF;border-bottom:0px solid #333333;">
)
postCodeFeature = HTML
postCodeFeature.value (
		</td>
	</tr>
)

preCodeContent = HTML
preCodeContent.value (
	</table>
	<table width="550" cellpadding="20" cellspacing="0" bgcolor="#FFFFFF">
		<tr>
			<td bgcolor="#FFFFFF" valign="top" style="font-size:12px;color:#000000;line-height:150%;font-family:trebuchet ms;">
)

preCodeGeneratedContent-1 >
postCodeGeneratedContent-1 >

preCodeContentBlock-1 >
postCodeContentBlock-1 >

preCodeContentBlock-2 >
postCodeContentBlock-2 >

preCodeContentBlock-3 >
postCodeContentBlock-3 >

preCodeGeneratedContent-2 >
postCodeGeneratedContent-2 >

preCodeFooter = HTML
preCodeFooter.value (
						</td>
					</tr>
					<tr>
						<td style="background-color:#FFFFCC;border-top:10px solid #FFFFFF;font-size:12px;color:#000000;line-height:150%;font-family:trebuchet ms;" valign="top">
							<span>
)

footer >
footer = COA
footer {
	10 = TEXT
	10.data = date:U
	10.strftime = %Y
	10.wrap = <p id="footerCopyright">&copy;&nbsp; | &nbsp;{$copyright}, {$contact}</p>

	15 = TEXT
	15.value = Unsubscribe
	15.typolink.parameter = {$unsubscribePID}
	15.wrap = <p>|</p>
	15.if.isTrue = {$unsubscribePID}

	20 = TEXT
	20.value = We are a Web-Empowered Church.
	20.typolink.parameter = http://www.webempoweredchurch.org/
	20.wrap = <p>|</p>
	20.if.isTrue = {$enableWECFooter}
}

postCodeFooter = HTML
postCodeFooter.value (
							</span>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
	<!-- end #backgroundTable -->
)



### Lets table classes be added in the RTE
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.list >
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >