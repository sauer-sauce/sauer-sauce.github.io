<?php

// commentsubmit.php -- Receive comments and e-mail them to someone
// Copyright (C) 2011 Matt Palmer <mpalmer@hezmatt.org>
//
//  This program is free software; you can redistribute it and/or modify it
//  under the terms of the GNU General Public License version 3, as
//  published by the Free Software Foundation.
//
//  This program is distributed in the hope that it will be useful, but
//  WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
//  General Public License for more details.
//
//  You should have received a copy of the GNU General Public License along
//  with this program; if not, see <http://www.gnu.org/licences/>


$DATE_FORMAT = "Y-m-d H:i";

$EMAIL_ADDRESS = "sauersauce.contact@gmail.com";

$SUBJECT = "SauerSauce comentário recebido";

$COMMENT_RECEIVED = "comment_received.html";

/****************************************************************************
 * HERE BE CODE
 ****************************************************************************/

$post_id = $_POST["post_id"];
unset($_POST["post_id"]);
$msg = "post_id: $post_id\n";
$msg .= "date: " . date($DATE_FORMAT) . "\n";

foreach ($_POST as $key => $value) {
	if (strstr($value, "\n") != "") {
		// Value has newlines... need to indent them so the YAML
		// looks right
		$value = str_replace("\n", "\n  ", $value);
	}
	// It's easier just to single-quote everything than to try and work
	// out what might need quoting
	$value = "'" . str_replace("'", "''", $value) . "'";
	$msg .= "$key: $value\n";
}

if (mail($EMAIL_ADDRESS, $SUBJECT, $msg, "From: $EMAIL_ADDRESS"))
{
	include $COMMENT_RECEIVED;
}
else
{
	echo "There was a problem sending the comment. https://github.com/sauer-sauce/sauersauce.github.io/issues";
}
