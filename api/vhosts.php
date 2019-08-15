<?php

$vhostFilesLocation = "/etc/apache2/sites-enabled";
$vhostFiles = scandir($vhostFilesLocation);

$domains = [];
foreach ($vhostFiles as $file) {
	$config = file_get_contents($vhostFilesLocation . '/' . $file);
	$match = [];
	preg_match('/ServerName (?<domain>[0-9a-zA-Z\.]{1,})/', $config, $match);
	if ($match['domain'] != null) {
		$domains[] = $match['domain'];
	}
}
header('Content-Type: application/json');
echo json_encode($domains);
