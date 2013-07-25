<?
if (!isset($_GET['id'])) die;
$id = $_GET['id'];
$file = '../data/' . $id . '.json';
if (!file_exists($file)) die;
$f = fopen($file, 'r');
$json_str = fread($f, filesize($file));
fclose($f);
$data = json_decode($json_str);

include "functions.php";

$regions = array('MI', 'MB', 'NNI', 'NNB', 'RB');
$original_reff = $data->reff;
foreach ($regions as $region) {
    $data->region = $region;
    $data->reff = $original_reff.$data->region;

    ob_start();

    include "tpl/header.php";
    include "tpl/catalog_header.php";
    include "tpl/catalog.php";
    include "tpl/footer.php";

    $contents = ob_get_flush();
    file_put_contents("25072013_".$region.".html",$contents);
}

?>